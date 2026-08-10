variable "resource_group" {
  description = "Name of the Azure resource group where resources will be deployed."
  default     = "e3.4-rewritten-routing"
  type        = string
}

variable "location" {
  description = "Azure region where resources will be deployed."
  default     = "brazilsouth"
  type        = string
}
