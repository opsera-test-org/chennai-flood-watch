# Chennai Flood Watch - Deployment Configuration

This directory contains the Kubernetes manifests and ArgoCD configuration for the Chennai Flood Watch application.

## Structure

- `k8s/base/` - Base Kubernetes manifests
- `k8s/overlays/dev/` - Dev environment overlay
- `argocd/dev/` - ArgoCD application definition

## Deployment

The application is automatically deployed via GitOps using ArgoCD.

- **Namespace**: opsera-chennai-flood-2000-dev
- **Domain**: opsera-chennai-flood-2000-dev.agent.opsera.dev
- **Hub Cluster**: argocd-usw2
- **Spoke Cluster**: opsera-usw2-np

## Workflows

1. **Bootstrap Infrastructure**: Sets up namespace, service account, and ECR repository
2. **CI/CD Pipeline**: 11-stage pipeline for build, scan, and deployment
