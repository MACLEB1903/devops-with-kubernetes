variable "resource_group" {
  description = "Name of the Azure resource group where resources will be deployed."
  default     = "e3.5-the-project-step-14"
  type        = string
}

variable "location" {
  description = "Azure region where resources will be deployed."
  default     = "brazilsouth"
  type        = string
}

variable "acr" {
  type = string
  default = "theprojectstep14acr"
}

variable "aks" {
  type = string
  default = "tps14-aks"
}