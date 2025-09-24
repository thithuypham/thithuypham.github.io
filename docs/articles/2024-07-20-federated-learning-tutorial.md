---
slug: federated-learning-tutorial-part-1
title: "Federated Learning from Scratch: Building Your First Privacy-Preserving ML System"
authors: [thuy]
tags: [federated-learning, tutorial, privacy, machine-learning, code]
---

# Federated Learning from Scratch: Building Your First Privacy-Preserving ML System

Federated learning has emerged as one of the most promising approaches for training machine learning models across distributed datasets while preserving privacy. In this tutorial series, I'll walk you through implementing a federated learning system from the ground up, starting with the basics and progressing to advanced techniques.

## What You'll Learn

By the end of this series, you'll understand:

- Core federated learning concepts and algorithms
- How to implement FedAvg (Federated Averaging) from scratch
- Privacy-preserving techniques for real-world deployment
- Handling non-IID data distributions
- Performance optimization for large-scale systems

<!--truncate-->

## Prerequisites

This tutorial assumes familiarity with:
- Python programming
- Basic machine learning concepts
- Neural networks and PyTorch/TensorFlow
- Linear algebra and optimization

## Part 1: Understanding Federated Learning

### The Fundamental Problem

Traditional machine learning requires centralizing data, which creates several challenges:

1. **Privacy concerns**: Sensitive data must be shared
2. **Regulatory constraints**: GDPR, HIPAA, and other regulations
3. **Bandwidth limitations**: Moving large datasets is expensive
4. **Data sovereignty**: Organizations want to keep data local

Federated learning solves these problems by bringing the model to the data instead of data to the model.

### Core Concepts

```python
# Simplified federated learning workflow
def federated_learning_round():
    # 1. Server sends global model to clients
    global_model = server.get_model()
    
    # 2. Each client trains locally
    client_updates = []
    for client in selected_clients:
        local_model = client.train(global_model, local_data)
        update = compute_update(global_model, local_model)
        client_updates.append(update)
    
    # 3. Server aggregates updates
    new_global_model = aggregate(client_updates)
    server.update_model(new_global_model)
    
    return new_global_model
```

## Implementation: Basic Federated Learning System

Let's build a simple federated learning system for image classification using the CIFAR-10 dataset.

### Step 1: Setting Up the Environment

```python
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, Subset
import torchvision
import torchvision.transforms as transforms
import numpy as np
from typing import List, Dict
import copy

# Set random seeds for reproducibility
torch.manual_seed(42)
np.random.seed(42)
```

### Step 2: Creating the Model

```python
class SimpleCNN(nn.Module):
    def __init__(self, num_classes=10):
        super(SimpleCNN, self).__init__()
        self.conv1 = nn.Conv2d(3, 32, 3, padding=1)
        self.conv2 = nn.Conv2d(32, 64, 3, padding=1)
        self.pool = nn.MaxPool2d(2, 2)
        self.fc1 = nn.Linear(64 * 8 * 8, 128)
        self.fc2 = nn.Linear(128, num_classes)
        self.relu = nn.ReLU()
        self.dropout = nn.Dropout(0.5)
    
    def forward(self, x):
        x = self.pool(self.relu(self.conv1(x)))
        x = self.pool(self.relu(self.conv2(x)))
        x = x.view(-1, 64 * 8 * 8)
        x = self.relu(self.fc1(x))
        x = self.dropout(x)
        x = self.fc2(x)
        return x
```

### Step 3: Implementing the Federated Client

```python
class FederatedClient:
    def __init__(self, client_id: int, dataset: torch.utils.data.Dataset):
        self.client_id = client_id
        self.dataset = dataset
        self.dataloader = DataLoader(dataset, batch_size=32, shuffle=True)
        
    def train_local(self, global_model: nn.Module, epochs: int = 1) -> nn.Module:
        """Train the model locally and return the updated model."""
        # Create a local copy of the global model
        local_model = copy.deepcopy(global_model)
        local_model.train()
        
        optimizer = optim.SGD(local_model.parameters(), lr=0.01, momentum=0.9)
        criterion = nn.CrossEntropyLoss()
        
        for epoch in range(epochs):
            epoch_loss = 0.0
            for batch_idx, (data, target) in enumerate(self.dataloader):
                optimizer.zero_grad()
                output = local_model(data)
                loss = criterion(output, target)
                loss.backward()
                optimizer.step()
                epoch_loss += loss.item()
        
        return local_model
    
    def get_dataset_size(self) -> int:
        """Return the size of the local dataset."""
        return len(self.dataset)
```

### Step 4: Implementing the Federated Server

```python
class FederatedServer:
    def __init__(self, model: nn.Module):
        self.global_model = model
        self.clients = []
    
    def add_client(self, client: FederatedClient):
        """Add a client to the federation."""
        self.clients.append(client)
    
    def federated_average(self, client_models: List[nn.Module], 
                         client_weights: List[int]) -> nn.Module:
        """
        Implement FedAvg algorithm to aggregate client models.
        
        Args:
            client_models: List of locally trained models
            client_weights: List of dataset sizes for weighted averaging
        """
        # Calculate total samples across all clients
        total_samples = sum(client_weights)
        
        # Initialize aggregated parameters
        global_dict = self.global_model.state_dict()
        
        # Weighted averaging of parameters
        for key in global_dict.keys():
            global_dict[key] = torch.zeros_like(global_dict[key])
            
            for client_model, weight in zip(client_models, client_weights):
                client_dict = client_model.state_dict()
                global_dict[key] += (weight / total_samples) * client_dict[key]
        
        # Update global model
        self.global_model.load_state_dict(global_dict)
        return self.global_model
    
    def train_round(self, client_fraction: float = 1.0, local_epochs: int = 1):
        """
        Execute one round of federated training.
        
        Args:
            client_fraction: Fraction of clients to select for training
            local_epochs: Number of local epochs each client trains
        """
        # Select random subset of clients
        num_selected = max(1, int(len(self.clients) * client_fraction))
        selected_clients = np.random.choice(self.clients, num_selected, replace=False)
        
        # Collect local model updates
        client_models = []
        client_weights = []
        
        for client in selected_clients:
            # Send global model to client and receive local update
            local_model = client.train_local(self.global_model, local_epochs)
            client_models.append(local_model)
            client_weights.append(client.get_dataset_size())
        
        # Aggregate updates using FedAvg
        self.global_model = self.federated_average(client_models, client_weights)
        
        return len(selected_clients)
```

### Step 5: Data Distribution Simulation

```python
def create_federated_dataset(num_clients: int = 10, 
                           alpha: float = 0.5) -> List[Subset]:
    """
    Create federated dataset with non-IID distribution using Dirichlet sampling.
    
    Args:
        num_clients: Number of federated clients
        alpha: Controls the degree of non-IID-ness (lower = more non-IID)
    """
    # Load CIFAR-10 dataset
    transform = transforms.Compose([
        transforms.ToTensor(),
        transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
    ])
    
    dataset = torchvision.datasets.CIFAR10(
        root='./data', train=True, download=True, transform=transform
    )
    
    # Create non-IID distribution
    num_classes = 10
    samples_per_client = len(dataset) // num_clients
    
    # Group samples by class
    class_indices = [[] for _ in range(num_classes)]
    for idx, (_, label) in enumerate(dataset):
        class_indices[label].append(idx)
    
    # Distribute samples to clients using Dirichlet distribution
    client_indices = [[] for _ in range(num_clients)]
    
    for class_idx in range(num_classes):
        # Sample proportions for this class across clients
        proportions = np.random.dirichlet([alpha] * num_clients)
        
        # Distribute class samples according to proportions
        class_samples = class_indices[class_idx]
        for client_idx, proportion in enumerate(proportions):
            num_samples = int(proportion * len(class_samples))
            selected_samples = np.random.choice(
                class_samples, num_samples, replace=False
            ).tolist()
            client_indices[client_idx].extend(selected_samples)
            # Remove selected samples from available pool
            class_samples = [s for s in class_samples if s not in selected_samples]
    
    # Create client datasets
    client_datasets = []
    for indices in client_indices:
        if indices:  # Only create dataset if client has samples
            client_dataset = Subset(dataset, indices)
            client_datasets.append(client_dataset)
    
    return client_datasets
```

### Step 6: Training the Federated System

```python
def run_federated_learning(num_rounds: int = 10, 
                          num_clients: int = 10,
                          client_fraction: float = 0.3,
                          local_epochs: int = 2):
    """Run the complete federated learning experiment."""
    
    # Initialize global model
    global_model = SimpleCNN(num_classes=10)
    server = FederatedServer(global_model)
    
    # Create federated dataset
    client_datasets = create_federated_dataset(num_clients, alpha=0.5)
    
    # Create clients
    for i, dataset in enumerate(client_datasets):
        client = FederatedClient(client_id=i, dataset=dataset)
        server.add_client(client)
    
    print(f"Federated Learning Setup:")
    print(f"- Total clients: {len(server.clients)}")
    print(f"- Clients per round: {int(len(server.clients) * client_fraction)}")
    print(f"- Local epochs: {local_epochs}")
    print(f"- Total rounds: {num_rounds}")
    
    # Training loop
    for round_num in range(num_rounds):
        print(f"\n--- Round {round_num + 1} ---")
        
        # Execute federated training round
        num_selected = server.train_round(client_fraction, local_epochs)
        
        # Evaluate global model (optional)
        if round_num % 2 == 0:  # Evaluate every 2 rounds
            accuracy = evaluate_model(server.global_model)
            print(f"Global model accuracy: {accuracy:.4f}")
        
        print(f"Selected {num_selected} clients for training")
    
    return server.global_model

def evaluate_model(model: nn.Module) -> float:
    """Evaluate model on test dataset."""
    transform = transforms.Compose([
        transforms.ToTensor(),
        transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
    ])
    
    test_dataset = torchvision.datasets.CIFAR10(
        root='./data', train=False, download=True, transform=transform
    )
    test_loader = DataLoader(test_dataset, batch_size=64, shuffle=False)
    
    model.eval()
    correct = 0
    total = 0
    
    with torch.no_grad():
        for data, target in test_loader:
            outputs = model(data)
            _, predicted = torch.max(outputs.data, 1)
            total += target.size(0)
            correct += (predicted == target).sum().item()
    
    return correct / total

# Run the experiment
if __name__ == "__main__":
    final_model = run_federated_learning(
        num_rounds=20,
        num_clients=10,
        client_fraction=0.3,
        local_epochs=2
    )
```

## Understanding the Results

When you run this code, you'll observe several interesting phenomena:

### 1. Convergence Patterns
Federated learning typically converges more slowly than centralized training due to:
- **Statistical heterogeneity**: Non-IID data across clients
- **System heterogeneity**: Different computational capabilities
- **Communication constraints**: Limited rounds of communication

### 2. Impact of Client Selection
The `client_fraction` parameter significantly affects:
- **Training stability**: More clients → more stable updates
- **Communication costs**: Fewer clients → lower bandwidth usage
- **Convergence speed**: Optimal fraction depends on data distribution

### 3. Local vs. Global Trade-offs
The number of local epochs (`local_epochs`) creates a trade-off:
- **More local epochs**: Faster convergence, but risk of client drift
- **Fewer local epochs**: More communication rounds needed

## What's Next?

In the next part of this series, we'll explore:

### Part 2: Advanced Aggregation Algorithms
- **FedProx**: Handling system heterogeneity
- **FedNova**: Objective inconsistency in federated optimization
- **SCAFFOLD**: Control variates for better convergence

### Part 3: Privacy-Preserving Techniques
- **Differential privacy**: Adding noise for formal privacy guarantees
- **Secure aggregation**: Cryptographic protocols for secure model updates
- **Homomorphic encryption**: Computing on encrypted data

### Part 4: Production Deployment
- **Communication optimization**: Gradient compression and quantization
- **Fault tolerance**: Handling client failures and dropouts
- **Monitoring and debugging**: Tools for federated learning systems

## Key Takeaways

1. **Federated learning enables privacy-preserving ML** across distributed datasets
2. **FedAvg is the foundation** but many extensions exist for specific challenges
3. **Non-IID data significantly impacts** convergence and performance
4. **Communication efficiency is critical** for real-world deployment

## Resources for Further Learning

- **Papers**: 
  - "Communication-Efficient Learning of Deep Networks from Decentralized Data" (McMahan et al., 2017)
  - "Federated Learning: Challenges, Methods, and Future Directions" (Li et al., 2020)

- **Frameworks**:
  - [PySyft](https://github.com/OpenMined/PySyft): Privacy-preserving ML
  - [FedML](https://github.com/FedML-AI/FedML): Federated learning research platform
  - [Flower](https://flower.dev/): Production-ready federated learning

---

*Have questions about this implementation or want to discuss federated learning applications? Feel free to reach out via email or connect with me on social media. In the next post, we'll dive deeper into handling the challenges of non-IID data distributions.*

**Coming up**: Part 2 will include hands-on examples of advanced aggregation algorithms and their implementation details. Subscribe to stay updated! 