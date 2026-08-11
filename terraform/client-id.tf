resource "azuread_application" "github_actions" {
  display_name = "todo-github-actions"
}

resource "azuread_service_principal" "github_actions" {
  client_id = azuread_application.github_actions.client_id
}

resource "azuread_application_federated_identity_credential" "github" {
  application_id = azuread_application.github_actions.id
  display_name   = "github-main"

  audiences = [
    "api://AzureADTokenExchange"
  ]

  issuer  = "https://token.actions.githubusercontent.com"
  subject = "repo:MACLEB1903/devops-with-kubernetes:ref:refs/heads/main"
}

resource "azurerm_role_assignment" "github_actions" {
  scope                = "/subscriptions/${data.azurerm_client_config.current.subscription_id}"
  role_definition_name = "Contributor"
  principal_id         = azuread_service_principal.github_actions.object_id
}

data "azurerm_client_config" "current" {}