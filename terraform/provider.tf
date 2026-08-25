terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=5.0.0"
    }
    azuread = {
      source = "hashicorp/azuread"
    }

    azapi = {
      source = "Azure/azapi"
    }
  }
}

provider "azurerm" {
  features {

  }
}

provider "azuread" {}