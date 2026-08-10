variable "resource_group" {
  description = "Name of the Azure resource group where resources will be deployed."
  default     = "e3.3-to-the-gateway"
  type        = string
}

variable "location" {
  description = "Azure region where resources will be deployed."
  default     = "brazilsouth"
  type        = string
}
