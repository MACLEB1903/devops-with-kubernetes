variable "resource_group" {
  description = "Name of the Azure resource group where resources will be deployed."
  default     = "e3.6-the-project-step-15"
  type        = string
}

variable "location" {
  description = "Azure region where resources will be deployed."
  default     = "brazilsouth"
  type        = string
}

variable "acr" {
  type = string
  default = "theprojectstep15acr"
}

variable "aks" {
  type = string
  default = "tps15-aks"
}