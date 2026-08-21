resource "azurerm_storage_account" "storage_account" {
  name                = "dwkstorageacc"
  resource_group_name = var.resource_group
  location            = var.location

  account_tier             = "Standard"
  account_replication_type = "LRS"
}

resource "azurerm_storage_container" "storage_container" {
  name                  = "backups"
  storage_account_id    = azurerm_storage_account.storage_account.id
  container_access_type = "private"
}

data "azurerm_storage_account_blob_container_sas" "backup_sas" {
  connection_string = azurerm_storage_account.storage_account.primary_connection_string
  container_name    = azurerm_storage_container.storage_container.name

  start  = "2026-08-14T00:00:00Z"
  expiry = "2026-09-14T00:00:00Z"

  permissions {
    read   = false
    add    = false
    create = true
    write  = true
    delete = false
    list   = false
  }
}