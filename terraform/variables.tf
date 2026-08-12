variable "resource_group" {
  description = "Name of the Azure resource group where resources will be deployed."
  default     = "e3.8-the-project-step-17"
  type        = string
}

variable "location" {
  description = "Azure region where resources will be deployed."
  default     = "brazilsouth"
  type        = string
}

variable "acr" {
  type = string
  default = "theprojectstep17acr"
}

variable "aks" {
  type = string
  default = "tps17-aks"
}