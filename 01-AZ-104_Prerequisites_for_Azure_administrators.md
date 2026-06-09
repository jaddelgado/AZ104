# 01-AZ-104_ Prerequisites for Azure administrators

> Combined export for section `01-AZ-104_ Prerequisites for Azure administrators` from course `Microsoft Azure Administrator`.

## 01-Introduction to Azure Cloud Shell

### 01-Introduction

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/01-AZ-104_ Prerequisites for Azure administrators/01-Introduction to Azure Cloud Shell/01-Introduction.md`*

# Introduction

**Module:** Introduction to Azure Cloud Shell

**Source:** https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/1-introduction

---

# Introduction

Azure Cloud Shell is a browser-accessible command-line experience for managing Azure resources. It provides the flexibility of choosing the shell experience that best suits the way you work, either Bash or PowerShell. Traditionally, to interact with Azure resources via command-line, you need to install the necessary components into your local computer (PC, Mac, Linux). With Cloud Shell, you have an authenticated, interactive shell that isn't part of a local machine.

You're an IT admin for Contoso Corporation, responsible for the cloud infrastructure on which the company hosts its applications. These applications use different cloud resources, such as Azure VMs, Azure blob storage, Azure networking, and others. On many occasions, you're asked to perform operations on these cloud resources at moments when you’re not using your work laptop. In some cases, you have a friend’s laptop, a smartphone, or another personal PC.

This module explains what Azure Cloud Shell does, how it works, and when you should choose to use Cloud Shell as a solution to meet your organization's needs.

## Learning objectives

In this module, you'll:

- Describe Azure Cloud Shell and the functionality it provides.
- Determine whether Cloud Shell meets the needs of your organization.
- Recognize how to use Cloud Shell and persist files for multiple sessions.

---

### 02-What is Azure Cloud Shell_

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/01-AZ-104_ Prerequisites for Azure administrators/01-Introduction to Azure Cloud Shell/02-What is Azure Cloud Shell_.md`*

# What is Azure Cloud Shell?

**Module:** Introduction to Azure Cloud Shell

**Source:** https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/2-what-is-azure-cloud-shell

---

# What is Azure Cloud Shell?

Azure Cloud Shell is a command-line environment you can access through your web browser. You can use this environment to manage Azure resources, including VMs, storage, and networking. Just like you do when using the Azure CLI or Azure PowerShell.

Because Microsoft manages Cloud Shell, you always have access to the most recent versions of the Azure CLI and PowerShell modules right from any browser. You don't have to worry about keeping modules up to date. With Cloud Shell, you just open your browser and sign in. Just like that, you have access to a command-line environment fully connected with your account's permissions and the resources to which you have access. All that works in an infrastructure that's compliant with double encryption at rest by default. You don't need to take any further action!

Azure Cloud Shell also provides cloud storage to persist files such as SSH keys, scripts, and more. This functionality lets you access important files in between sessions and with different machines. Finally, you can use the Cloud Shell editor to make changes to files, such as scripts, that are saved into this cloud storage directly from the Cloud Shell interface.

---

### 03-How does Azure Cloud Shell work_

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/01-AZ-104_ Prerequisites for Azure administrators/01-Introduction to Azure Cloud Shell/03-How does Azure Cloud Shell work_.md`*

# How does Azure Cloud Shell work?

**Module:** Introduction to Azure Cloud Shell

**Source:** https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/3-how-azure-cloud-shell-works

---

# How does Azure Cloud Shell work?

As an IT admin for Contoso Corporation, you're frequently on-call to perform administrative tasks and resolve workload disruptions to resources in your organization's Azure subscriptions. When visiting a family member during a weekend that you're on call, the development team notifies you of a problem with an Azure virtual machine (VM). The VM became nonresponsive during scheduled maintenance for the upgrade of an application that runs on it. Because the developers weren't granted access to the underlying Azure virtual machine hosting infrastructure, they're only able to remotely access the VM when it's operating normally. So, you're being called to diagnose and remediate the problem.

Since you're visiting family, you don’t have access to your administrative workstation and diagnostic scripts. You do have access to a laptop with an internet browser. Using the laptop, you browse to the Azure portal, authenticate against your organization’s Azure subscription, open Azure Cloud Shell, mount an Azure File Share, access your diagnostic scripts, and diagnose and remediate the problems with the VM, returning it to operation.

## Access Cloud Shell

You have a few different options for accessing Azure Cloud Shell:

- From a direct link: <https://shell.azure.com>

![A screenshot of Cloud Shell accessed directly from a link.](https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/media/access-cloud-shell-directly.png)
- From the Azure portal

![A screenshot of Cloud Shell accessed from Azure portal.](https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/media/access-cloud-shell-from-azure-portal.png)
- From code snippets when accessing Microsoft Learn:

![A screenshot of Cloud Shell accessed from code snippets.](https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/media/access-cloud-shell-from-code-snippets.png)

When you open a Cloud Shell session, a temporary host is allocated to your session. This VM is preconfigured with the latest versions of PowerShell and Bash. You can then select the command-line experience you want to use:

![A screenshot of how to choose a command-line experience in a Cloud Shell session.](https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/media/select-cli-experience.png)

After you select the shell experience you want to use, you can start managing your Azure resources:

![A screenshot of how to use Cloud Shell to manage Azure resources.](https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/media/manage-azure-resources-in-cloud-shell.png)

Cloud Shell sessions terminate after 20 minutes of inactivity. When a session terminates, files on your CloudDrive are persisted, but you need to start a new session to access the Cloud Shell environment.

## Access your own scripts and files

When using Cloud Shell, you might also need to run scripts or use files for different actions. You can persist files on Cloud Shell by using the Azure CloudDrive:

![A screenshot of how to access CloudDrive in a Cloud Shell session.](https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/media/use-azure-cloud-drive.png)

After uploading files, you can interact with them as you would in a regular PowerShell or Bash session:

![A screenshot of how to manage files in CloudDrive.](https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/media/manage-files-in-cloud-drive.png)

Now that your file resides on CloudDrive, you can close the session and open another session on a different device and still access the same file. Cloud Shell also lets you map an Azure Storage File Share, which is tied to a specific region. Access to an Azure File Share lets you work with the contents of that share through Cloud Shell.

If you need to edit scripts hosted on the CloudDrive or File Share, you can use the Cloud Shell editor. Select the curly brackets {} icon on the browser and open the file you want to edit, or use the command `code` and specify the filename; for example:

```
code temp.txt
```

![A screenshot of how to access the Cloud Shell editor mode.](https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/media/cloud-shell-edit-scripts.png)

Note

The `code` command only works in the Classic mode in Cloud Shell. To enable Classic mode, select the **More** icon (**...**), then select **Settings** > **Go to Classic version**.

## Cloud Shell tools

If you need to manage resources (such as Docker containers or Kubernetes Clusters) or want to use non-Microsoft tools (such as Ansible and Terraform) in Cloud Shell, the Cloud Shell session comes with these add-ons already preconfigured.

Here’s a list of all add-ons available to you within a Cloud Shell session:

| Category | Name |
| --- | --- |
| **Linux tools** | bash zsh sh tmux dig |
| **Azure tools** | [Azure CLI](/en-us/cli/azure/) AzCopy Azure Functions CLI Service Fabric CLI Batch Shipyard blobxfer |
| **Text editors** | code (Cloud Shell editor) vim nano emacs |
| **Source control** | git |
| **Build tools** | make maven npm pip |
| **Containers** | Docker Machine Kubectl Helm DC/OS CLI |
| **Databases** | MySQL client PostgreSql client sqlcmd Utility mssql-scripter |
| **Other** | iPython Client Cloud Foundry CLI Terraform Ansible Chef InSpec Puppet Bolt HashiCorp Packer Office 365 CLI |

---

### 04-When should you use Azure Cloud Shell_

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/01-AZ-104_ Prerequisites for Azure administrators/01-Introduction to Azure Cloud Shell/04-When should you use Azure Cloud Shell_.md`*

# When should you use Azure Cloud Shell?

**Module:** Introduction to Azure Cloud Shell

**Source:** https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/4-when-to-use-azure-cloud-shell

---

# When should you use Azure Cloud Shell?

As an IT Admin for Contoso Corporation, you need alternatives to interact with Azure resources from the command line even when not using your default administrative device.

You can use Azure Cloud Shell to:

- Open a secure command-line session from any browser-based device.
- Interact with Azure resources without the need to install plug-ins or add-ons to your device.
- Persist files between sessions for later use.
- Use either Bash or PowerShell, whichever you prefer, to manage Azure resources.
- Edit files (such as scripts) via the Cloud Shell editor.

You shouldn't use Azure Cloud Shell if:

- You intend to leave a session open for more than 20 minutes for long running scripts or activities. In these cases, your session is disconnected without warning, and the current state is lost.
- You need admin permissions, such as sudo access, from within the Azure CLI or PowerShell environment.
- You need to install tools that aren't supported in the limited Cloud Shell environment, but instead require an environment such as a custom virtual machine or container.
- You need storage from different regions. You might need to back up and synchronize this content since only one region can have the storage allocated to Azure Cloud Shell.
- You need to open multiple sessions at the same time. Azure Cloud Shell allows only one instance at time and isn't suitable for concurrent work across multiple subscriptions or tenants.

---

### 05-Summary

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/01-AZ-104_ Prerequisites for Azure administrators/01-Introduction to Azure Cloud Shell/05-Summary.md`*

# Summary

**Module:** Introduction to Azure Cloud Shell

**Source:** https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cloud-shell/6-summary

---

# Summary

Azure Cloud Shell is a browser-accessible command-line experience for managing Azure resources. Rather than having to configure an Azure CLI or PowerShell session from your workstation, you can access Cloud Shell on any standard, compliant browser.

Cloud Shell provides the flexibility of choosing the shell experience that best suits the way you work, allowing you to work either in Bash or PowerShell, right from the browser. Cloud Shell also provides you with the mechanisms to persist files between sessions, and provides access to a minimalist version of the Visual Studio Code editor for more complex operations.

## Learn more

Check out these articles to learn more about Azure Cloud Shell.

[Azure Cloud Shell Overview](/en-us/azure/cloud-shell/overview)

[Azure Cloud Shell – Browser-Based Command Line](https://azure.microsoft.com/features/cloud-shell/)

---

## 02-Deploy Azure infrastructure by using JSON ARM templates

### 01-Introduction

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/01-AZ-104_ Prerequisites for Azure administrators/02-Deploy Azure infrastructure by using JSON ARM templates/01-Introduction.md`*

# Introduction

**Module:** Deploy Azure infrastructure by using JSON ARM templates

**Source:** https://learn.microsoft.com/en-us/training/modules/create-azure-resource-manager-template-vs-code/1-introduction

---

# Introduction

JSON Azure Resource Manager templates (ARM templates) allow you to specify your project's infrastructure in a declarative and reusable way. You can version and save the templates in the same source control as your development project.

Suppose you're managing a software team that's developing an inventory system for your partner companies. You plan to deploy this product to Azure, and let each partner company have its own solution. You plan to implement different policies for each deployment through different Azure storage accounts. You decide to use the practice of *infrastructure as code* by using ARM templates. This approach lets you track the different versions and ensure that your infrastructure deployments for each environment are consistent and flexible.

In this module, we introduce you to ARM template structure and let you practice creating and deploying an ARM template to Azure.

Note

Bicep is a language for defining your Azure resources. It has a simpler authoring experience than JSON, along with other features that help improve the quality of your infrastructure as code. We recommend that anyone new to infrastructure as code on Azure use Bicep instead of JSON. To learn about Bicep, see the [Fundamentals of Bicep](../../paths/fundamentals-bicep/) learning path.

## Learning objectives

In this module, you will:

- Implement a JSON ARM template by using Visual Studio Code.
- Declare resources and add flexibility to your template by adding parameters and outputs.

## Prerequisites

- Familiarity with Azure, including the Azure portal, subscriptions, resource groups, and resource definitions.
- An Azure account. You can get a free account [here](https://azure.microsoft.com/pricing/purchase-options/azure-account?cid=msft_learn).
- [Visual Studio Code](https://code.visualstudio.com?azure-portal=true) installed locally.
- Either:
  - The latest [Azure CLI](/en-us/cli/azure/install-azure-cli?azure-portal=true) tools installed locally.
  - The latest [Azure PowerShell](/en-us/powershell/azure/install-az-ps?azure-portal=true) installed locally.

---

### 02-Explore Azure Resource Manager template structure

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/01-AZ-104_ Prerequisites for Azure administrators/02-Deploy Azure infrastructure by using JSON ARM templates/02-Explore Azure Resource Manager template structure.md`*

# Explore Azure Resource Manager template structure

**Module:** Deploy Azure infrastructure by using JSON ARM templates

**Source:** https://learn.microsoft.com/en-us/training/modules/create-azure-resource-manager-template-vs-code/2-explore-template-structure

---

# Explore Azure Resource Manager template structure

In this unit, you learn about using Azure Resource Manager templates (ARM templates) to implement infrastructure as code. You survey the sections of an ARM template, learn how to deploy your ARM template to Azure, and delve into detail on the *resources* section of the ARM template.

## What is infrastructure as code?

*Infrastructure as code* allows you to describe, through code, the infrastructure that you need for your application.

With infrastructure as code, you can maintain both your application code and everything you need to deploy your application in a central code repository. The advantages to infrastructure as code are:

- Consistent configurations
- Improved scalability
- Faster deployments
- Better traceability

This video explains infrastructure as code:

## What is an ARM template?

ARM templates are JavaScript Object Notation (JSON) files that define the infrastructure and configuration for your deployment. The template uses a *declarative syntax*. The declarative syntax is a way of building the structure and elements that outline what resources look like without describing the control flow. Declarative syntax is different than *imperative syntax*, which uses commands for the computer to perform. Imperative scripting focuses on specifying each step in deploying the resources.

ARM templates allow you to declare what you intend to deploy without having to write the sequence of programming commands to create it. In an ARM template, you specify the resources and the properties for those resources. [Azure Resource Manager](/en-us/azure/azure-resource-manager/management/overview?azure-portal=true) then uses that information to deploy the resources in an organized and consistent manner.

### Benefits of using ARM templates

ARM templates allow you to automate deployments and use the practice of infrastructure as code (IaC). The template code becomes part of your infrastructure and development projects. Just like application code, you can store the IaC files in a source repository and version it.

ARM templates are *idempotent*, which means you can deploy the same template many times and get the same resource types in the same state.

Resource Manager orchestrates deploying the resources so they're created in the correct order. When possible, resources are created in parallel, so ARM template deployments finish faster than scripted deployments.

![Diagram showing a mapping of the template processing procedure. There's only one call to process a template as opposed to several calls to process scripts.](https://learn.microsoft.com/en-us/training/modules/create-azure-resource-manager-template-vs-code/media/2-template-processing.png)

Resource Manager also has built-in validation. It checks the template before starting the deployment to make sure the deployment succeeds.

If your deployments become more complex, you can break your ARM templates into smaller, reusable components. You can link these smaller templates together at deployment time. You can also nest templates inside other templates.

In the Azure portal, you can review your deployment history and get information about the state of the deployment. The portal displays values for all parameters and outputs.

You can also integrate your ARM templates into continuous integration and continuous deployment (CI/CD) tools like [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines?azure-portal=true), which can automate your release pipelines for fast and reliable application and infrastructure updates. By using Azure DevOps and ARM template tasks, you can continuously build and deploy your projects.

### ARM template file structure

When you're writing an ARM template, you need to understand all the parts that make up the template and what they do. ARM template files are made up of the following elements:

| Element | Description |
| --- | --- |
| **schema** | A required section that defines the location of the JSON schema file that describes the structure of JSON data. The version number you use depends on the scope of the deployment and your JSON editor. |
| **contentVersion** | A required section that defines the version of your template (such as 1.0.0.0). You can use this value to document significant changes in your template to ensure you're deploying the right template. |
| **apiProfile** | An optional section that defines a collection of API versions for resource types. You can use this value to avoid having to specify API versions for each resource in the template. |
| **parameters** | An optional section where you define values that are provided during deployment. You can provide these values in a parameter file, by command-line parameters, or in the Azure portal. |
| **variables** | An optional section where you define values that are used to simplify template language expressions. |
| **functions** | An optional section where you can define [user-defined functions](/en-us/azure/azure-resource-manager/templates/template-user-defined-functions?azure-portal=true) that are available within the template. User-defined functions can simplify your template when complicated expressions are used repeatedly in your template. |
| **resources** | A required section that defines the actual items you want to deploy or update in a resource group or a subscription. |
| **output** | An optional section where you specify the values that are returned at the end of the deployment. |

## Deploy an ARM template to Azure

You can deploy an ARM template to Azure in one of the following ways:

- Deploy a local template
- Deploy a linked template
- Deploy in a continuous deployment pipeline

This module focuses on deploying a local ARM template. In future Learn modules, you learn how to deploy more complicated infrastructure and how to integrate with Azure Pipelines.

To deploy a local template, you need to have either [Azure PowerShell](/en-us/powershell/azure/install-az-ps) or the [Azure CLI](/en-us/cli/azure/install-azure-cli?azure-portal=true) installed locally.

First, sign in to Azure by using the Azure CLI or Azure PowerShell.

- [Azure CLI](#tabpanel_1_azure-cli)
- [PowerShell](#tabpanel_1_azure-powershell)

```
az login
```

```
Connect-AzAccount
```

Next, define your resource group. You can use an already-defined resource group or create a new one with the following command. You can obtain available location values from: `az account list-locations` (CLI) or `Get-AzLocation` (PowerShell). You can configure the default location using `az configure --defaults location=<location>`.

- [Azure CLI](#tabpanel_2_azure-cli)
- [PowerShell](#tabpanel_2_azure-powershell)

```
az group create \
  --name {name of your resource group} \
  --location "{location}"
```

```
New-AzResourceGroup `
  -Name {name of your resource group} `
  -Location "{location}"
```

To start a template deployment at the resource group, use either the Azure CLI command [az deployment group create](/en-us/cli/azure/deployment/group#az-deployment-group-create) or the Azure PowerShell command [New-AzResourceGroupDeployment](/en-us/powershell/module/az.resources/new-azresourcegroupdeployment).

Tip

The difference between `az deployment group create` and `az group deployment create` is that `az group deployment create` is an old command to be deprecated and will be replaced by `az deployment group create`. Therefore, we recommend using `az deployment group create` to deploy resources under the resource group scope.

Both commands require the resource group, the region, and the name for the deployment so you can easily identify it in the deployment history. For convenience, the exercises create a variable that stores the path to the template file. This variable makes it easier for you to run deployment commands, because you don't have to retype the path every time you deploy. Here's an example:

- [Azure CLI](#tabpanel_3_azure-cli)
- [PowerShell](#tabpanel_3_azure-powershell)

To run this deployment command, you must have the [latest version](/en-us/cli/azure/install-azure-cli) of Azure CLI.

```
templateFile="{provide-the-path-to-the-template-file}"
az deployment group create \
  --name blanktemplate \
  --resource-group myResourceGroup \
  --template-file $templateFile
```

```
$templateFile = "{provide-the-path-to-the-template-file}"
New-AzResourceGroupDeployment `
  -Name blanktemplate `
  -ResourceGroupName myResourceGroup `
  -TemplateFile $templateFile
```

Use linked templates to deploy complex solutions. You can break a template into many templates and deploy these templates through a main template. When you deploy the main template, it triggers the linked template's deployment. You can store and secure the linked template by using a SAS token.

A CI/CD pipeline automates the creation and deployment of development projects, which includes ARM template projects. The two most common pipelines used for template deployment are Azure Pipelines or [GitHub Actions](/en-us/training/paths/github-actions/?azure-portal=true).

More information on these two types of deployment is covered in other modules.

## Add resources to the template

To add a resource to your template, you need to know the resource provider and its types of resources. The syntax for this combination is in the form of *{resource-provider}/{resource-type}*. For example, to add a storage account resource to your template, you need the `Microsoft.Storage` resource provider. One of the types for this provider is `storageAccount`. So your resource type is displayed as `Microsoft.Storage/storageAccounts`. You can use a list of [resource providers for Azure services](/en-us/azure/azure-resource-manager/management/azure-services-resource-providers?azure-portal=true) to find the providers you need.

After you define the provider and resource type, you need to understand the properties for each resource type you want to use. For details, see [Define resources in Azure Resource Manager templates](/en-us/azure/templates?azure-portal=true). To find the resource, view the list in the left column. Notice that the properties are sorted by API version.

![Screenshot of a Microsoft documentation page showing the storage account documentation selected.](https://learn.microsoft.com/en-us/training/modules/create-azure-resource-manager-template-vs-code/media/2-resource-type-properties.png)

Here's an example of some of the listed properties from the Storage Accounts page:

![Screenshot of a Microsoft documentation page showing some of the storage account properties.](https://learn.microsoft.com/en-us/training/modules/create-azure-resource-manager-template-vs-code/media/2-storage-account-properties.png)

For our storage example, your template might look like this:

```
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.1",
  "apiProfile": "",
  "parameters": {},
  "variables": {},
  "functions": [],
  "resources": [
    {
      "type": "Microsoft.Storage/storageAccounts",
      "apiVersion": "2025-01-01",
      "name": "learntemplatestorage123",
      "location": "westus",
      "sku": {
        "name": "Standard_LRS"
      },
      "kind": "StorageV2",
      "properties": {
        "supportsHttpsTrafficOnly": true
      }
    }
  ],
  "outputs": {}
}
```

---

### 03-Add flexibility to your Azure Resource Manager template by using parameters and outputs

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/01-AZ-104_ Prerequisites for Azure administrators/02-Deploy Azure infrastructure by using JSON ARM templates/03-Add flexibility to your Azure Resource Manager template by using parameters and outputs.md`*

# Add flexibility to your Azure Resource Manager template by using parameters and outputs

**Module:** Deploy Azure infrastructure by using JSON ARM templates

**Source:** https://learn.microsoft.com/en-us/training/modules/create-azure-resource-manager-template-vs-code/4-add-flexibility-arm-template

---

# Add flexibility to your Azure Resource Manager template by using parameters and outputs

In the last unit, you created an Azure Resource Manager (ARM) template and added an Azure storage account to it. You might notice that there's a problem with your template. The storage account name is hardcoded. You can only use this template to deploy the same storage account every time. To deploy a storage account with a different name, you have to create a new template, which isn't a practical way to automate your deployments. The storage account SKU is also hardcoded, which means you can't vary the type of storage account for different environments. Recall that in our scenario, each deployment might have a different type of storage account. You can make your template more reusable by adding a parameter for the storage account SKU.

In this unit, you learn about the *parameters* and *outputs* sections of the template.

## ARM-template parameters

ARM-template parameters let you customize the deployment by providing values that are tailored for a particular environment. For example, you pass in different values based on whether you're deploying to an environment for development, test, production, or others. For example, the previous template uses the *Standard\_LRS* storage account SKU. You can reuse this template for other deployments that create a storage account by making the name of the storage account SKU a parameter. Then, you pass in the name of the SKU you want for this particular deployment when the template is deployed. You can do this step either at the command line or by using a parameter file.

In the `parameters` section of the template, you specify which values you can input when you deploy the resources. You're limited to 256 parameters in a template. Parameter definitions can use most template functions.

The available properties for a parameter are:

```
"parameters": {
  "<parameter-name>": {
    "type": "<type-of-parameter-value>",
    "defaultValue": "<default-value-of-parameter>",
    "allowedValues": [
      "<array-of-allowed-values>"
    ],
    "minValue": <minimum-value-for-int>,
    "maxValue": <maximum-value-for-int>,
    "minLength": <minimum-length-for-string-or-array>,
    "maxLength": <maximum-length-for-string-or-array-parameters>,
    "metadata": {
      "description": "<description-of-the-parameter>"
    }
  }
}
```

The allowed types of parameters are:

- string
- secureString
- integers
- boolean
- object
- secureObject
- array

### Recommendations for using parameters

Use parameters for settings that vary according to the environment; for example, SKU, size, or capacity. Also use parameters for resource names that you want to specify yourself for easy identification or to comply with internal naming conventions. Provide a description for each parameter, and use default values whenever possible.

For security reasons, never hardcode or provide default values for usernames and/or passwords in templates. Always use parameters for usernames and passwords (or secrets). Use *secureString* for all passwords and secrets. If you pass sensitive data in a JSON object, use the *secureObject* type. Template parameters with *secureString* or *secureObject* types can't be read or harvested after the deployment of the resource.

### Use parameters in an ARM template

In the parameters section of the ARM template, specify the parameters that you can input when you deploy the resources. You're limited to 256 parameters in a template.

Here's an example of a template file with a parameter for the storage-account SKU defined in the template's `parameters` section. You can provide a default for the parameter to be used if no value is specified at execution.

```
"parameters": {
  "storageAccountType": {
    "type": "string",
    "defaultValue": "Standard_LRS",
    "allowedValues": [
      "Standard_LRS",
      "Standard_GRS",
      "Standard_ZRS",
      "Premium_LRS"
    ],
    "metadata": {
      "description": "Storage Account type"
    }
  }
}
```

Then, use the parameter in the resource definition. The syntax is `[parameters('name of the parameter')]`. Then, when you deploy you use the `parameters` function. In the next module, you learn more about functions.

```
"resources": [
  {
    "type": "Microsoft.Storage/storageAccounts",
    "apiVersion": "2025-01-01",
    "name": "learntemplatestorage123",
    "location": "[resourceGroup().location]",
    "sku": {
      "name": "[parameters('storageAccountType')]"
    },
    "kind": "StorageV2",
    "properties": {
      "supportsHttpsTrafficOnly": true
    }
  }
]
```

When you deploy the template, you can provide a value for the parameter. Notice the last line in the following command:

- [Azure CLI](#tabpanel_1_azure-cli)
- [PowerShell](#tabpanel_1_azure-powershell)

```
templateFile="azuredeploy.json"
az deployment group create \
  --name testdeployment1 \
  --template-file $templateFile \
  --parameters storageAccountType=Standard_LRS
```

```
$templateFile="azuredeploy.json"
New-AzResourceGroupDeployment `
  -Name testdeployment1 `
  -TemplateFile $templateFile `
  -storageAccountType Standard_LRS
```

## ARM template outputs

In your ARM template's outputs section, you can specify the values that are returned after a successful deployment. Here are the elements that make up the outputs section.

```
"outputs": {
  "<output-name>": {
    "condition": "<boolean-value-whether-to-output-value>",
    "type": "<type-of-output-value>",
    "value": "<output-value-expression>",
    "copy": {
      "count": <number-of-iterations>,
      "input": <values-for-the-variable>
    }
  }
}
```

| Element | Description |
| --- | --- |
| **output-name** | Must be a valid JavaScript identifier. |
| **condition** | (Optional) A Boolean value that indicates whether this output value is returned. When true, the value is included in the output for the deployment. When false, the output value is skipped for this deployment. When not specified, the default value is true. |
| **type** | The type of the output value. |
| **value** | (Optional) A template language expression to be evaluated and returned as an output value. |
| **copy** | (Optional) Copy is used to return more than one value for an output. |

### Use outputs in an ARM template

Here's an example to output the storage account's endpoints:

```
"outputs": {
  "storageEndpoint": {
    "type": "object",
    "value": "[reference('learntemplatestorage123').primaryEndpoints]"
  }
}
```

Notice the `reference` part of the expression. This function gets the runtime state of the storage account.

## Deploy an ARM template again

Recall that ARM templates are *idempotent*, which means you can deploy the template to the same environment again, and if nothing changes in the template, nothing changes in the environment. If a change is made to the template (for example, you change a parameter value), only that change is deployed. Your template can contain all of the resources you need for your Azure solution, and you can safely execute a template again. Resources are created only if they don't already exist, and updated only if there's a change.

---

### 04-Summary

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/01-AZ-104_ Prerequisites for Azure administrators/02-Deploy Azure infrastructure by using JSON ARM templates/04-Summary.md`*

# Summary

**Module:** Deploy Azure infrastructure by using JSON ARM templates

**Source:** https://learn.microsoft.com/en-us/training/modules/create-azure-resource-manager-template-vs-code/7-summary

---

# Summary

In this module, you learned about Azure Resource Manager templates (ARM templates) and used them to deploy a storage account to Azure. You made the template more flexible by adding parameters and got output from the execution of the template.

In summary, you:

- Implemented an ARM template by using Visual Studio Code.
- Declared resources and added flexibility to your template by adding resources, parameters, and outputs.



## Learn more

To learn more, check out the following articles:

- [Download Azure Resource Manager Tools for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=msazurermtools.azurerm-vscode-tools&azure-portal=true)
- [Understand the structure and syntax of ARM templates](/en-us/azure/azure-resource-manager/templates/template-syntax?azure-portal=true)
- [Learn about Azure Resource Manager](/en-us/azure/azure-resource-manager/management/overview?azure-portal=true)
- [How to install the Azure CLI](/en-us/cli/azure/install-azure-cli?azure-portal=true)
- [How to install Azure PowerShell](/en-us/powershell/azure/install-az-ps?azure-portal=true)
- [Learn about resource providers for Azure services](/en-us/azure/azure-resource-manager/management/azure-services-resource-providers?azure-portal=true)
- [Define resources in Azure Resource Manager templates](/en-us/azure/templates?azure-portal=true)
- [Learn about Outputs in Azure Resource Manager templates](/en-us/azure/azure-resource-manager/templates/template-outputs?tabs=azure-powershell)
- [Learn about Parameters in Azure Resource Manager templates](/en-us/azure/azure-resource-manager/templates/template-parameters?azure-portal=true)

---
