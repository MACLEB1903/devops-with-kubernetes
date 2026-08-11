output "REGISTRY" {
  value = azurerm_container_registry.acr.login_server
}

output "ACR_NAME" {
  value = var.acr
}

output "RESOURCE_GROUP" {
  value = var.resource_group
}

output "NAMESPACE" {
  value = "project"
}

output "AKS_CLUSTER" {
  value = azurerm_kubernetes_cluster.aks.name
}

output "AZURE_CLIENT_ID" {
  value = azuread_application.github_actions.client_id
}