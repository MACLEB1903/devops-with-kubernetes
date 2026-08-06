variable "resource_group" {
  description = "Name of the Azure resource group where resources will be deployed."
  default     = "e3.2-back-to-ingress"
  type        = string
}

variable "location" {
  description = "Azure region where resources will be deployed."
  default     = "brazilsouth"
  type        = string
}


variable "acr_name" {
  description = "Azure region where resources will be deployed."
  default     = "backtoingressacr"
  type        = string
}