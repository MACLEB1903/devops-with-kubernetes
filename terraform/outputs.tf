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

/*
output "AZURE_CLIENT_ID" {
  value = azuread_application.github_actions.client_id
}
*/

output "BACKUP_BLOB_SAS_URL" {
  value     = "${azurerm_storage_account.storage_account.primary_blob_endpoint}${azurerm_storage_container.storage_container.name}${data.azurerm_storage_account_blob_container_sas.backup_sas.sas}"
  sensitive = true
}