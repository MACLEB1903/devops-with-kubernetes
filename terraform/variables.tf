variable "resource_group" {
  description = "Name of the Azure resource group where resources will be deployed."
  default     = "e3.7-the-project-step-16"
  type        = string
}

variable "location" {
  description = "Azure region where resources will be deployed."
  default     = "brazilsouth"
  type        = string
}

variable "acr" {
  type = string
  default = "theprojectstep16acr"
}

variable "aks" {
  type = string
  default = "tps16-aks"
}