# AZ-104 Practice Questions: Identity and Governance

This document contains a curated subset of 296 questions extracted from the main practice set, specifically focusing on **Microsoft Entra Identity and Governance** (Users, Groups, SSPR, RBAC, Azure Policy, Management Groups, and Resource Locks).

---

### Question 3

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.

Another administrator plans to create several network security groups (NSGs) in the subscription. You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.

Solution: You create a resource lock, and then you assign the lock to the subscription.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Azure Locks are used to prevent accidental changes in an Azure environment. Azure Locks can’t help for this task, more information about Azure Locks below.

You can set the lock level to CanNotDelete or ReadOnly. In the portal, the locks are called Delete and Read-only respectively.

CanNotDelete means authorized users can still read and modify a resource, but they can’t delete the resource.

ReadOnly means authorized users can read a resource, but they can’t delete or update the resource. Applying this lock is similar to restricting all authorized users to the permissions granted by the Reader role.

Reference:

https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources

Quick Preview:

---

### Question 5

**Scenario:** You have an Azure subscription with 10 virtual networks hosted in separate resource groups. Another administrator plans to create several **Network Security Groups (NSGs)**. You need to ensure that when an NSG is created, it automatically blocks **TCP port 8080** between the virtual networks.

**Solution Proposed:** Configure a **custom policy definition** and assign it to the subscription.

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Correct**

**Option A. Yes**

- **Correct because** Azure Policy can enforce rules across resources in a subscription.

- By creating a **custom policy definition**, you can ensure that every NSG created includes a rule to block TCP port 8080 between virtual networks.

- Assigning the policy at the **subscription level** guarantees consistent enforcement across all resource groups and virtual networks.

- This meets the stated goal of automatically blocking port 8080 whenever an NSG is created.

**Incorrect**

**Option B. No**

- **Incorrect because** saying “No” would imply that Azure Policy cannot enforce NSG rules, which is not true.

- Azure Policy is specifically designed to enforce compliance and configuration standards, including NSG rules.

- Therefore, this option does not meet the requirement.

---

### Question 7

You download an Azure Resource Manager template based on an existing virtual machine. The template will be used to deploy 100 virtual machines.

You need to modify the template to reference an administrative password. You must prevent the password from being stored in plain text.

What should you create to store the password?

**Options:**

- **A.** an Azure Key Vault and an access policy ✅
- **B.** an Azure Storage account and an access policy
- **C.** a Recovery Services vault and a backup policy
- **D.** Azure Active Directory (AD) Identity Protection and an Azure policy

**Correct answer:** A

**Explanation:**

When you create a virtual machine (VM). You need to provide the VM administrator username and password. Instead of providing the password, you can pre-store the password in an Azure key vault and then customize the template to retrieve the password from the key vault during the deployment.

https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-tutorial-use-key-vault

INCORRECT ANSWERS:

an Azure Storage account and an access policy – Storage account is used to store the blobs. Not recommended to store sensitive data like passwords.

a Recovery Services vault and a backup policy – Recovery services vault is to store backups.

Azure Active Directory (AD) Identity Protection and an Azure policy – Identity protection is to detect and investigate identity based risks.

---

### Question 25

You work as an Azure Administrator for a company. You have to ensure that a role can be in place that would have the following requirements:

- View all the resources in the Azure subscription

- Issue support requests

**Options:**

- **A.** A.  "*/*"
- **B.** B. "*/Microsoft.Support"
- **C.** C. "Microsoft.Support/*" ✅
- **D.** D. “Microsoft.Support”

**Correct answer:** C

**Explanation:**

### Correct

**Option C. **Microsoft.Support/*

- Correct because to allow issuing **support requests** in Azure, the role definition must include the Microsoft.Support/ action*.

- This grants permissions to create and manage support tickets while also allowing the user to view resources.

- It is the precise action string required in custom role definitions for support operations.

### Incorrect

**Option A. ***/*

- Incorrect because this grants **all actions on all resources**, which is far broader than required.

- It violates the principle of least privilege and is not exam‑correct for this scenario.

**Option B. ***/Microsoft.Support

- Incorrect because this is not a valid action string format in Azure RBAC.

- The correct format is Microsoft.Support/*, not with a leading */.

**Option D. **Microsoft.Support

- Incorrect because this is incomplete.

- Azure RBAC requires the wildcard (/*) to specify all actions under the Microsoft.Support namespace. Without it, permissions are not properly applied.

###

---

### Question 47

A company has set up an Azure subscription and a tenant. They want to ensure that only Virtual Machines of a particular SKU size can be launched in their Azure account. They decide to implement Azure Policy. Is this possible?

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because **Azure Policy cannot restrict VM creation by SKU size**.

- Azure Policy can enforce rules such as allowed VM locations, allowed resource types, or tagging requirements, but it does not provide a direct mechanism to restrict VM SKU sizes.

- To control SKU sizes, administrators typically use **Azure RBAC combined with custom governance processes** or **quotas**, but not Azure Policy alone.

### Incorrect

**Option A. Yes**

- Incorrect because this assumes Azure Policy can directly enforce SKU size restrictions.

- While Azure Policy can restrict resource types (e.g., only allow Virtual Machines), it cannot filter down to specific SKU sizes.

- This is a common exam trap: confusing **resource type enforcement** with **SKU enforcement**.

---

### Question 55

A company currently has an Azure subscription and a tenant in place. They want to deploy the following infrastructure

An application server on a set of Azure Linux virtual machines.

The application server would listen to user requests on port 80 and control plane requests on port 8090

The application server would connect to a database server hosted on an Azure Linux Virtual machine hosted in the same virtual network

A Load Balancer would be in place and set in front of the application server

In which of the following settings would you configure the ability of the load balancer to check the health of the the application server on port 8090?

**Options:**

- **A.** A. Backend pools
- **B.** B. Health probes ✅
- **C.** C. Load Balancing rules
- **D.** D. Inbound NAT rules

**Correct answer:** B

**Explanation:**

This can be done via Health probes. The Microsoft documentation mentions the following

Since this is clearly mentioned in the Microsoft documentation, all other options are incorrect

For more information on configuring port forwarding, please visit the below URL

https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-custom-probe-overview

---

## Practice Set 2

Source: https://skillcertpro.com/az-104-exam-questions/2/

### Question 5

You are designing a solution to grant developers access to specific Azure resources for testing and debugging purposes.
What is the recommended approach to achieve this securely without granting excessive permissions?

**Options:**

- **A.** Create custom RBAC roles with specific permissions tailored to development needs. ✅
- **B.** Assign the Owner role to a service principal that the developers can use.
- **C.** Assign the Contributor role to all developers.
- **D.** Use shared credentials for all developers to access the resources.

**Correct answer:** A

**Explanation:**

Custom RBAC roles provide the flexibility to grant only the necessary permissions to developers, limiting their access and enhancing security.

---

### Question 10

You need to monitor the performance and usage of your Azure Storage accounts. Which Azure service or tool can you use to track metrics, set up alerts, and gain insights into storage account activity?

**Options:**

- **A.** Azure Advisor
- **B.** Azure Monitor ✅
- **C.** Azure Log Analytics
- **D.** Azure Security Center

**Correct answer:** B

**Explanation:**

Azure Monitor is the primary service for monitoring the performance and usage of Azure resources, including storage accounts. It allows you to track key metrics, set up alerts for specific thresholds, and gain insights into storage account activity through logs and visualizations.

---

### Question 13

Your organization is deploying a new Linux virtual machine (VM) in Azure to host a sensitive business application. Due to the confidential nature of the data being processed, security is paramount. You are tasked with ensuring that only authorized personnel can access the VM for administration and configuration tasks.
The VM will be accessed primarily by administrators working from various locations, including both within the corporate network and remotely over the internet. Additionally, you need to ensure that the authentication method is resistant to brute-force attacks and can be easily managed to revoke access if necessary.
Question:
Considering the security requirements and the diverse access scenarios, which of the following authentication methods would you recommend for securely accessing the Linux VM via SSH?

**Options:**

- **A.** Public key authentication using SSH key pairs ✅
- **B.** Kerberos authentication integrated with your on-premises Active Directory domain
- **C.** Multi-factor authentication (MFA) using a combination of password and a time-based one-time password (TOTP)
- **D.** Password authentication with a strong password policy enforced

**Correct answer:** A

**Explanation:**

The best answer is Public key authentication using SSH key pairs. Here‘s why:
Security: Public key authentication is considered more secure than password-based authentication. It eliminates the risk of passwords being intercepted or guessed through brute-force attacks.
Flexibility: SSH key pairs can be easily managed and revoked if an administrator‘s access needs to be removed.
Diverse Access: SSH key pairs work seamlessly for both administrators within the corporate network and those accessing the VM remotely over the internet.
Standards Compliance: Public key authentication is a widely adopted industry standard for secure remote access.
Why other options are less ideal:
Password authentication, even with a strong password policy, is inherently less secure than public key authentication due to the risk of password breaches.
While MFA adds an extra layer of security, it can be cumbersome for administrators who need to frequently access the VM. It also doesn‘t address the risk of password interception.
Kerberos authentication requires integration with an on-premises Active Directory domain, which may not be feasible or desirable for all organizations. It also adds complexity to the setup and management.
Additional Considerations:
You should also consider disabling password authentication altogether on the VM to further enhance security.
Regularly rotate SSH keys and implement a secure key management process to mitigate the risk of unauthorized access.
By choosing public key authentication with SSH key pairs, you can provide a secure, flexible, and easy-to-manage solution for accessing the Linux VM while ensuring compliance with the organization‘s security requirements.

---

### Question 16

You have an Azure subscription named Subscription1 that contains the virtual machines as shown below.

You have created below Azure polices

You have created resource locks as below

Can you start VM1?

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- This is correct. VM1 has a **read-only lock** applied directly to it.

- A read-only lock prevents any modifications to the resource, including starting, stopping, deleting, or updating the VM.

- Even though VM1 is deallocated, you cannot start it because the lock blocks changes to its state.

### Incorrect

**Option A. Yes**

- Incorrect. While VM2 in RG2 could potentially be started (since RG2 allows VMs and the lock is at the RG level but still read-only), VM1 specifically cannot be started because of the **read-only lock applied directly to VM1**.

- The policy in RG1 also disallows VirtualMachines, but since VM1 already exists, the critical blocker here is the lock.

---

### Question 21

You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template. You need to ensure that NGINX is available on all the virtual machines after they are deployed. What should you use?

**Options:**

- **A.** Deployment Center in Azure App Service
- **B.** A Desired State Configuration (DSC) extension ✅
- **C.** the New-AzConfigurationAssignment cmdlet
- **D.** a Microsoft Intune device configuration profile

**Correct answer:** B

**Explanation:**

### Correct

**Option B. A Desired State Configuration (DSC) extension**

**Explanation:**

- The **DSC extension** allows you to configure and enforce the desired state of software and settings on Azure VMs.

- By using DSC in the ARM template, you can ensure that NGINX is automatically installed and configured on all VMs in the scale set after deployment.

- This is the correct approach for post‑deployment configuration management in Azure.

### Incorrect

**Option A. Deployment Center in Azure App Service**

- Incorrect because Deployment Center is used for deploying **web apps** to Azure App Service, not for configuring VM scale sets.

- It does not install software like NGINX on VMs.

**Option C. The New‑AzConfigurationAssignment cmdlet**

- Incorrect because this cmdlet is used with **Azure Policy assignments**, not for configuring VM extensions or installing software.

- It enforces compliance but does not directly install NGINX.

**Option D. A Microsoft Intune device configuration profile**

- Incorrect because Intune is used for managing **end‑user devices** (PCs, mobile devices), not Azure VM scale sets.

- It cannot be used to install NGINX on VMs deployed via ARM templates.

###

---

### Question 26

You have Azure Active Directory tenant named az104exam.com that includes following users:

az104exam.com includes following Windows 10 devices:

You create following security groups in az104exam.com:

True or False.

User1 can add Device2 to Group1.

**Options:**

- **A.** TRUE
- **B.** FALSE ✅

**Correct answer:** B

**Explanation:**

User1 has Cloud Device Administrator role attached, User 1 is not owner on Group1, so can’t add devices.

Reference:

https://docs.microsoft.com/en-us/azure/active-directory/roles/permissions-reference

Quick Preview:

---

### Question 27

You have Azure Active Directory tenant named az104exam.com that includes following users:

az104exam.com includes following Windows 10 devices:

You create following security groups in az104exam.com:

True or False.

User2 can add Device2 to Group2.

**Options:**

- **A.** TRUE
- **B.** FALSE ✅

**Correct answer:** B

**Explanation:**

It is “not” possible to “manually” add users/devices to a “Dynamic group”.

Reference:

https://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/groups-create-rule

Quick Preview:

---

### Question 28

You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1.

Subscription1 has a user named User1. User1 has the following roles:

– Reader

– Security Admin

– Security Reader

You need to ensure that User1 can assign the Reader role for VNet1 to other users.

What should you do?

**Options:**

- **A.** Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.
- **B.** Assign User1 the Owner role for VNet1. ✅
- **C.** Remove User1 from the Security Reader and Reader roles for Subscription1.
- **D.** Assign User1 the Network Contributor role for RG1.

**Correct answer:** B

**Explanation:**

Contributor role does not allow you to assign roles in Azure RBAC, you need to assign the Owner role.

Reference:

https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

Quick Preview:

---

### Question 38

You have an Azure subscription that contains the resources shown in the following table:

The status of VM1 is Running.

You assign an Azure policy as shown in the exhibit below:

You assign the policy by using the following parameters:

– Microsoft.ClassicNetwork/virtualNetworks

– Microsoft.Network/virtualNetworks

– Microsoft.Compute/virtualMachines

True or False.

The state of VM1 changed to deallocated.

**Options:**

- **A.** TRUE
- **B.** FALSE ✅

**Correct answer:** B

**Explanation:**

Started VM1 stays on after applying the policy. If you test the scenario in Azure Portal, you will be able to stop and start again.

The policy definition denies a user to deploy VNET and virtual machine resources, it will not affect the running state of VM1.

Reference:

https://docs.microsoft.com/en-us/azure/governance/policy/overview

Quick Preview:

---

### Question 6

Your organization is using Azure Key Vault to store sensitive configuration values, such as secrets and connection strings. How can you securely reference and utilize these secrets within your ARM templates or Bicep files during deployment?

**Options:**

- **A.** Set access policies in Key Vault to allow the deployment to retrieve secrets ✅
- **B.** Define parameters in the template to accept Key Vault secret URIs ✅
- **C.** Use the ‘reference‘ function in ARM templates to retrieve secrets from Key Vault ✅
- **D.** Use the ‘list‘ function to get Key Vault secrets in ARM templates

**Correct answer:** A, B, C

**Explanation:**

### Correct

**Option A. Set access policies in Key Vault to allow the deployment to retrieve secrets**

- Correct because the deployment process must have permission to access Key Vault.

- Access policies (or RBAC in newer versions) ensure that only authorized identities (such as the deployment service principal) can retrieve secrets securely.

**Option B. Define parameters in the template to accept Key Vault secret URIs**

- Correct because ARM/Bicep templates can reference Key Vault secrets by passing the secret URI as a parameter.

- This allows the template to dynamically pull the secret during deployment without exposing sensitive values directly in the template.

**Option C. Use the **reference** function in ARM templates to retrieve secrets from Key Vault**

- Correct because the reference() function is specifically designed to securely fetch values from Key Vault during deployment.

- This is the standard method for integrating Key Vault secrets into ARM/Bicep deployments.

### Incorrect

**Option D. Use the **list** function to get Key Vault secrets in ARM templates**

- Incorrect because the list function is used to retrieve collections of values (like keys or certificates), not secrets.

- For secrets, the correct approach is to use the reference() function.

###

---

### Question 21

Your company‘s compliance requirements mandate that you retain logs and metrics for a specific period. How can you configure retention policies in Azure Monitor to ensure that log data is stored for the required duration?

**Options:**

- **A.** Modify the Log Analytics workspace settings. ✅
- **B.** Use Azure Storage lifecycle management policies.
- **C.** Enable diagnostic settings on each Azure resource.
- **D.** Create an Azure Policy to enforce retention rules.

**Correct answer:** A

**Explanation:**

The Log Analytics workspace settings provide the most direct way to configure the retention period for your Azure Monitor logs.

---

### Question 24

You are implementing Azure Policy to control resource deployment and configurations. How can you create custom policy definitions using Azure Policy language to enforce specific rules and standards in your Azure environment?

**Options:**

- **A.** Use PowerShell cmdlets to create custom policy definitions with complex logic.
- **B.** Use Azure Blueprints to create and apply custom policy definitions across multiple subscriptions.
- **C.** Use JSON to define custom policy rules and conditions, specifying allowed or denied resource configurations. ✅
- **D.** Use Azure Resource Manager templates to define custom policy definitions.

**Correct answer:** C

**Explanation:**

Azure Policy definitions are written in JSON, allowing you to define custom rules that enforce specific configurations and constraints on Azure resources.

---

### Question 26

You want to grant a user read-only access to Azure resources in a specific resource group. Which built-in RBAC role would you assign to the user?

**Options:**

- **A.** User Access Administrator
- **B.** Contributor
- **C.** Reader ✅
- **D.** Owner

**Correct answer:** C

**Explanation:**

The Reader role in Azure RBAC is designed specifically to provide read-only access to Azure resources.

---

### Question 29

You plan to automate the deployment of a virtual machine scale set that uses the Windows Server 2016 Datacenter image.

You need to ensure that when the scale set virtual machines are provisioned, they have web server components installed.

Which two actions should you perform?

**Options:**

- **A.** Upload a configuration script ✅
- **B.** Create an automation account
- **C.** Create an Azure policy
- **D.** Modify the extension Profile section of the Azure Resource Manager template ✅
- **E.** Create a new virtual scale set in the Azure portal

**Correct answer:** A, D

**Explanation:**

The two actions you should perform to automate deployment of a virtual machine scale set with web server components are:

**Modify the extensionProfile section of the Azure Resource Manager template (ARM template):** This section allows you to define extensions that will be automatically installed on the VMs during deployment. You can specify a web server extension in this section, which will install the desired web server components on the provisioned VMs.

**Upload a configuration script (optional):** While not strictly necessary, you can upload a configuration script to the Azure storage account and reference it in the extension definition. This script can be used to customize the installation process or configure specific aspects of the web server components.

Here’s why the other options are not required:

**Create an automation account:** While Azure Automation can be used for deployment automation, it’s not strictly necessary in this scenario. You can directly utilize the ARM template with the extension definition for a simpler approach.

**Create an Azure policy:** Azure policies are used to enforce specific configurations or rules. While you could create a policy to enforce installing web server components, it’s less flexible compared to directly defining them in the ARM template.

**Create a new virtual scale set in the Azure portal:** This might be the initial step for setting up the deployment, but it’s not an action for automation. You would typically use the ARM template for automated deployments.

Therefore, modifying the ARM template with an extension definition and optionally uploading a configuration script are the most suitable approaches for automating the deployment of a virtual machine scale set with web server components.

---

### Question 42

**A company has set up an Azure subscription and a tenant. They want to ensure that only Virtual Machines of a particular SKU size can be launched in their Azure account.** **They decide to implement Azure Locks.**

**Options:**

- **A.** A.Yes
- **B.** B.No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because **Azure Locks** (Read‑only or Delete locks) are designed to prevent accidental deletion or modification of resources.

- They do **not** enforce resource type or SKU restrictions.

- To restrict VM sizes, the company should use **Azure Policy**, which allows administrators to define rules such as “only allow VM sizes = Standard_DS2_v2.”

- Therefore, the answer is **No** — Azure Locks cannot achieve this requirement.

### Incorrect

**Option A. Yes**

- Incorrect because answering “Yes” implies that Azure Locks can enforce SKU restrictions.

- This is not true; locks only prevent deletion or modification, not enforce compliance with resource configurations.

- The exam trap here is confusing **Azure Locks** with **Azure Policy**.

---

### Question 44

A company has setup an Azure subscription. They have setup a storage account and are currently using the BLOB service. They want to assign permissions to 3 user groups.

GroupA – This group should have the ability to manage the storage account

GroupB – This group should be able to manage containers within a storage account

GroupC – This group should be given full access to Azure Storage blob containers and data, including assigning POSIX access control

You need to assign the relevant Role Based Access Control ensuring the privilege of least access.

Which of the following would you assign to GroupC?

**Options:**

- **A.** A. Owner
- **B.** B. Contributor
- **C.** C. Storage Account Contributor
- **D.** D. Storage Blob Data Contributor
- **E.** E. Storage Blob Data Owner ✅

**Correct answer:** E

**Explanation:**

**For GroupC, the most appropriate RBAC role with the principle of least privilege would be:**

**E. Storage Blob Data Owner**

Here’s why:

**GroupC needs full access to blobs:** This includes read, write, delete, and manage permissions.

**POSIX access control:** The “Data Owner” role provides the highest level of control, including the ability to manage POSIX access control lists (ACLs) directly on the blobs. This allows for fine-grained control over who can access specific blobs and with what permissions.

**Why other options are less suitable:**

**A. Owner:** This role grants the highest level of permissions on the entire subscription, which is excessive for GroupC’s needs.

**B. Contributor:** This role provides broad permissions on the subscription, including the ability to manage virtual machines, networks, and other resources, which is not required by GroupC.

**C. Storage Account Contributor:** This role grants permissions to manage the entire storage account, including creating and deleting containers, which is not the specific requirement for GroupC.

**D. Storage Blob Data Contributor:** This role provides read, write, and delete permissions on blobs, but lacks the ability to manage POSIX ACLs, which is a key requirement for GroupC.

By assigning the “Storage Blob Data Owner” role to GroupC, you ensure they have the necessary permissions to work with blob data while minimizing the risk of unintended actions or security breaches.

https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

---

### Question 45

A company has setup an Azure subscription. They have around 50 virtual machines running as part of the subscription. They need to identity virtual machines that are underutilized and see if they could instead use reserved pricing to reduce the overall expenditure for the virtual machines.

You decide to use Azure Advisor to provide insights into looking at the prospect of reduction of costs?

Would this fulfil the requirement?

**Options:**

- **A.** A.Yes ✅
- **B.** B.No

**Correct answer:** A

**Explanation:**

Yes, this can be accomplished with Azure Advisor. The Microsoft documentation mentions the following

For more information on Azure Advisor cost recommendations, please visit the below URL

https://docs.microsoft.com/en-us/azure/advisor/advisor-cost-recommendations

---

### Question 48

A company has setup an Azure subscription and a tenant. They want to ensure that only Virtual Machines of a particular SKU size can be launched in their Azure account.

They decide to implement Azure policies

Does this fulfil the requirement?

**Options:**

- **A.** A.Yes ✅
- **B.** B.No

**Correct answer:** A

**Explanation:**

Yes, this can be done with Azure policies. There is also already an in-built policy which can implement this policy as shown below

For more information on an example on this, please visit the below URL

https://docs.microsoft.com/en-us/azure/governance/policy/samples/allowed-skus-storage

---

### Question 5

You are implementing Azure Policy to enforce specific configurations for Azure virtual machines. How can you use Azure Policy to audit compliance and remediate non-compliant virtual machines?

**Options:**

- **A.** Use Azure Policy to create and manage backup policies for virtual machines.
- **B.** Use Azure Policy to deploy virtual machines across multiple regions for redundancy.
- **C.** Use Azure Policy to assess compliance with configured rules, trigger alerts for non-compliance, and deploy remediation tasks to bring VMs into compliance. ✅
- **D.** Use Azure Policy to automatically scale virtual machines based on usage.

**Correct answer:** C

**Explanation:**

Azure Policy enables you to define and enforce rules for VM configurations, assess compliance, and automatically remediate non-compliant VMs to maintain desired state.

---

### Question 7

You need to implement a process for managing requests and approvals for creating Azure resources.
How can you utilize Azure Resource Manager role assignments and custom workflows to create a controlled and auditable resource provisioning process?

**Options:**

- **A.** Create a custom web portal for resource requests, but bypass approvals for faster provisioning.
- **B.** Assign the ‘Owner‘ role to all users and allow them to create any resource.
- **C.** Use Azure Resource Manager role assignments to define who can create specific resource types, and implement custom workflows in Azure Logic Apps for approval processes. ✅
- **D.** Manually approve each resource creation request through email communication.

**Correct answer:** C

**Explanation:**

A secure resource provisioning process involves using role assignments to restrict resource creation permissions and implementing custom workflows (like Azure Logic Apps) to automate approval processes, ensuring control and auditability.

---

### Question 11

You need to implement a mechanism to track and review changes made to Azure resources for auditing and compliance purposes. Which Azure service can you use to track resource changes and investigate operational issues?

**Options:**

- **A.** Azure Activity Log ✅
- **B.** Azure Advisor
- **C.** Azure Resource Health
- **D.** Azure Backup

**Correct answer:** A

**Explanation:**

Azure Activity Log is the central logging mechanism for Azure, providing a history of operations performed on resources, making it ideal for auditing and troubleshooting.

---

### Question 14

You want to monitor the replication status and health of your Azure VMs that are protected by Azure Site Recovery.
Which Azure tools or features can you use to track replication progress, identify any issues, and ensure that your VMs are ready for failover?

**Options:**

- **A.** Azure Site Recovery dashboard and reports ✅
- **B.** Azure Monitor logs
- **C.** Azure Advisor

**Correct answer:** A

**Explanation:**

The Azure Site Recovery dashboard is the primary tool designed specifically for monitoring the replication health and status of your protected VMs. It offers a centralized view and various reports.

---

### Question 16

You are tasked with reviewing and optimizing Azure costs. How can you utilize Azure Advisor recommendations and cost analysis tools to identify cost-saving opportunities and improve the efficiency of your Azure environment?

**Options:**

- **A.** Focus only on optimizing virtual machine sizes without considering other cost factors.
- **B.** Analyze Azure Cost Management reports and Azure Advisor recommendations to identify underutilized resources, right-size virtual machines, and leverage reserved instances. ✅
- **C.** Manually track costs in spreadsheets and avoid using Azure‘s built-in cost management features.
- **D.** Ignore Azure Advisor recommendations as they are not relevant to cost optimization.

**Correct answer:** B

**Explanation:**

Effective cost optimization involves analyzing Azure Cost Management reports, leveraging Azure Advisor recommendations (which include cost-saving suggestions), and taking actions like right-sizing VMs and utilizing reserved instances.

---

### Question 19

Your company‘s security policy mandates that all Azure VMs must be encrypted at rest. Which Azure feature can you use to enable disk encryption for your VMs and protect data from unauthorized access?

**Options:**

- **A.** Azure Disk Encryption ✅
- **B.** Azure Security Center
- **C.** Azure Active Directory
- **D.** Azure Key Vault

**Correct answer:** A

**Explanation:**

Azure Disk Encryption ensures that data at rest is protected using industry-standard encryption technologies.

---

### Question 22

Your organization is implementing Azure Policy to enforce compliance standards. Which policy enforcement modes can you use to prevent non-compliant resource deployments, audit existing resources for compliance, or append additional configurations to resources?

**Options:**

- **A.** Audit ✅
- **B.** Disabled
- **C.** Append ✅
- **D.** Deny ✅

**Correct answer:** A, C, D

**Explanation:**

**Correct**

- **Option A. Audit** Correct because the **Audit** effect in Azure Policy evaluates resources for compliance and flags non-compliant ones without blocking their deployment. It is useful for monitoring and reporting compliance.

- **Option C. Append** Correct because the **Append** effect adds additional configurations or settings to resources during deployment. For example, it can append required tags or security settings to ensure compliance.

- **Option D. Deny** Correct because the **Deny** effect prevents non-compliant resources from being deployed. This is the strictest enforcement mode and ensures that only compliant resources are created.

**Incorrect**

- **Option B. Disabled** Incorrect because **Disabled** is not a valid enforcement mode in Azure Policy. Policies can be turned off administratively, but “Disabled” is not an enforcement effect used for compliance.

---

### Question 27

Scenario:

Your organization, a healthcare provider, is leveraging Azure Blob Storage to store vast amounts of sensitive patient data, including medical records, diagnostic images, and personal information. As the Azure Administrator responsible for data security, you need to implement comprehensive encryption mechanisms to protect this data and ensure compliance with HIPAA regulations.

Challenge:

The data needs to be protected both at rest within the storage account and in transit as it is transmitted over the network. You must choose the encryption mechanisms that provide the highest level of security and control while minimizing any impact on the performance and accessibility of the data.

Question:

Which encryption mechanisms should you implement in Azure Blob Storage to protect sensitive patient data at rest and in transit?

**Options:**

- **A.** Double encryption using both server-side encryption with customer-managed keys (SSE with CMK) and client-side encryption with keys stored in Azure Key Vault, along with HTTPS for in-transit encryption. ✅
- **B.** Server-side encryption with Microsoft-managed keys (SSE with Microsoft-managed keys) for both at-rest and in-transit encryption.
- **C.** Client-side encryption with keys stored in Azure Key Vault for at-rest encryption and HTTPS for in-transit encryption.
- **D.** Server-side encryption with customer-managed keys (SSE with CMK) for at-rest encryption and HTTPS for in-transit encryption.

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Double encryption using both SSE with CMK and client-side encryption with keys stored in Azure Key Vault, along with HTTPS for in-transit encryption** Correct because this provides the **highest level of security and control**.

- **At rest:** Data is encrypted twice — once by Azure Storage using customer-managed keys (CMK) and again by client-side encryption before upload.

- **In transit:** HTTPS ensures secure transmission over the network. This layered approach aligns with HIPAA compliance requirements and minimizes risk, though it introduces some complexity.

### Incorrect

**Option B. SSE with Microsoft-managed keys for both at-rest and in-transit encryption** Incorrect because while SSE with Microsoft-managed keys does encrypt data at rest, it provides less control compared to customer-managed keys. Also, in-transit encryption is not handled by SSE — HTTPS must be explicitly used.

**Option C. Client-side encryption with keys stored in Azure Key Vault for at-rest encryption and HTTPS for in-transit encryption** Incorrect because while client-side encryption adds security, relying solely on it without server-side encryption reduces manageability and compliance assurance. HIPAA typically requires stronger governance, which is better achieved with CMK.

**Option D. SSE with CMK for at-rest encryption and HTTPS for in-transit encryption** Incorrect because although this is a strong option (and often sufficient for compliance), it does not provide the **double encryption** that offers the highest level of protection. Option A is more comprehensive.

---

### Question 29

Scenario:
Your company‘s finance department is migrating their sensitive financial data to Azure. As the Azure Administrator, you‘re tasked with configuring a secure storage solution in Azure Storage. The finance team emphasizes the importance of data protection and compliance with industry regulations. They require that the data be encrypted both at rest and in transit to ensure confidentiality and integrity.
Question:
Which encryption options should you enable in the Azure Storage account to meet the finance department‘s security requirements and protect their sensitive financial data?

**Options:**

- **A.** Enable Azure Storage Service Encryption (SSE) with Microsoft-managed keys for data at rest and use client-side encryption for data in transit.
- **B.** Enable Azure Storage Service Encryption (SSE) with Microsoft-managed keys for data at rest and HTTPS for data in transit.
- **C.** Enable Azure Storage Service Encryption (SSE) with customer-managed keys stored in Azure Key Vault for data at rest and SMB 3.0 with encryption for data in transit. ✅
- **D.** Use Azure Disk Encryption for data at rest and HTTPS for data in transit.

**Correct answer:** C

**Explanation:**

More details:
Azure Storage Service Encryption (SSE) with customer-managed keys: This option provides the highest level of control over encryption keys for data at rest. By storing the keys in Azure Key Vault, the finance department can manage access and rotation of the keys independently, meeting their security and compliance needs.
SMB 3.0 with encryption: This protocol ensures that data in transit is encrypted when transferred between the storage account and client applications over a network, further enhancing the security of sensitive financial data.
Why other options are not as suitable:
Microsoft-managed keys offer a basic level of encryption, but they don‘t provide the same degree of control as customer-managed keys.
Azure Disk Encryption is designed for encrypting virtual machine disks, not directly for data within storage accounts.
Client-side encryption puts the responsibility of key management on the client application, which might not be ideal for the finance department‘s compliance requirements.

---

### Question 30

Your company is expanding its Azure environment and needs to create multiple new subscriptions. What is the most efficient way to create and manage these subscriptions, ensuring consistency in resource configurations and policies?

**Options:**

- **A.** Delegate subscription creation to individual departments and let them manage their subscriptions independently.
- **B.** Use Azure Resource Manager templates or Azure Blueprints to automate subscription creation and apply standardized configurations. ✅
- **C.** Use Azure Automation runbooks to create subscriptions.
- **D.** Manually create each subscription in the Azure portal.

**Correct answer:** B

**Explanation:**

Azure Resource Manager templates or Azure Blueprints allow you to define the desired state of a subscription, including resource configurations, policies, and role assignments, and then apply it consistently across multiple subscriptions.

---

### Question 32

You are tasked with implementing Azure Cost Management + Billing for your organization. How can you configure cost allocation rules and budget alerts to track and control spending effectively?

**Options:**

- **A.** Use budget alerts to automatically shut down resources when spending exceeds a threshold.
- **B.** Use Azure Advisor recommendations to automatically optimize costs for Azure resources.
- **C.** Use cost allocation rules to assign fixed costs to each Azure resource.
- **D.** Create cost allocation rules based on tags or resource groups to distribute costs to different departments or projects, and configure budget alerts to notify stakeholders when spending approaches or exceeds pre-defined limits. ✅

**Correct answer:** D

**Explanation:**

### Correct

**Option D. Create cost allocation rules based on tags or resource groups to distribute costs to different departments or projects, and configure budget alerts to notify stakeholders when spending approaches or exceeds pre‑defined limits.** Correct. This is the recommended best practice in Azure Cost Management + Billing.

- **Tags or resource groups** allow you to allocate costs to specific departments, projects, or environments.

- **Budget alerts** notify stakeholders when spending approaches or exceeds thresholds, enabling proactive cost control. Together, these features provide transparency and accountability in managing cloud costs.

### Incorrect

**Option A. Use budget alerts to automatically shut down resources when spending exceeds a threshold.** Incorrect. Budget alerts in Azure **cannot automatically shut down resources**. They only send notifications (via email, action groups, etc.) when thresholds are reached. Resource shutdown must be handled separately through automation or policies.

**Option B. Use Azure Advisor recommendations to automatically optimize costs for Azure resources.** Incorrect. Azure Advisor provides **recommendations** for cost optimization, but it does not automatically enforce them. It is a guidance tool, not a mechanism for cost allocation or budget enforcement.

**Option C. Use cost allocation rules to assign fixed costs to each Azure resource.** Incorrect. Cost allocation rules distribute costs based on **tags, resource groups, or usage**, not fixed amounts. Assigning fixed costs per resource is not supported in Azure Cost Management.

###

---

### Question 37

You are implementing a hybrid cloud environment with Azure Arc-enabled servers. How can you utilize Azure Policy and Azure Security Center to manage and secure your hybrid servers consistently with your Azure environment?

**Options:**

- **A.** Use Azure Security Center to create and manage resource groups for your hybrid servers.
- **B.** Install the Azure Connected Machine agent on your hybrid servers, which enables Azure Arc and allows you to apply Azure Policy and Azure Security Center policies to them. ✅
- **C.** Use Azure Lighthouse to delegate access to your on-premises servers to Azure administrators.
- **D.** Use Azure Arc to deploy Azure Policy definitions to on-premises servers.

**Correct answer:** B

**Explanation:**

Azure Arc-enabled servers allow you to manage and govern your on-premises servers like Azure resources. By installing the Connected Machine agent, you can apply Azure Policy and leverage Azure Security Center for consistent security and compliance management.

---

### Question 38

Your organization is migrating to Azure, and you need to track resource usage and costs across multiple departments. How can you implement tagging to effectively categorize resources and allocate costs to specific departments?

**Options:**

- **A.** Manually assign tags to each resource in the Azure portal after deployment.
- **B.** Create a tagging strategy that defines standard tag keys and values for different departments and apply these tags during resource deployment using Azure Resource Manager templates or other automation tools. ✅
- **C.** Use Azure Policy to enforce a single, global tag for all resources.
- **D.** Use Azure Cost Management to directly assign costs to departments without using tags.

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Create a tagging strategy that defines standard tag keys and values for different departments and apply these tags during resource deployment using Azure Resource Manager templates or other automation tools**

- Correct because the best practice is to **define a consistent tagging strategy** (e.g., Department: Finance, Department: HR) and enforce it during deployment.

- Tags allow **Azure Cost Management + Billing** to break down costs by department, project, or environment.

- Using automation (ARM templates, Bicep, Terraform, or Azure Policy) ensures tags are applied consistently and reduces human error.

### Incorrect

**Option A. Manually assign tags to each resource in the Azure portal after deployment**

- Incorrect because while technically possible, this approach is **error‑prone and inefficient**.

- Manual tagging lacks consistency and scalability compared to automation.

**Option C. Use Azure Policy to enforce a single, global tag for all resources**

- Incorrect because a single global tag does not provide meaningful categorization.

- You need **multiple department‑specific tags** to track usage correctly.

**Option D. Use Azure Cost Management to directly assign costs to departments without using tags**

- Incorrect because Azure Cost Management reports costs but does not automatically categorize them by department.

- Tags are required to allocate costs to specific groups.

---

### Question 14

You have a Microsoft Entra tenant that is linked to the subscriptions shown in the following table.

You have the resource groups shown in the following table.

You assign roles to users as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User2 can create a new storage account in RG1.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because User2 has the Storage Account Contributor role assigned specifically to storage1, not to the entire resource group (RG1). The Storage Account Contributor role allows User2 to manage the specific storage account (storage1) but does not provide the ability to create new storage accounts or manage other resources within RG1.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-account-contributor

---

### Question 16

**Statement: “User3 can assign User1 the Owner role for RG3.”** Select **Yes** if the statement is true, otherwise select **No**.

You have the resource groups shown in the following table.

You assign roles to users as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User3 can assign User1 the Owner role for RG3.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- Correct because assigning roles in Azure requires **User Access Administrator** or **Owner** permissions at the scope of the resource group (RG3 in this case).

- If User3 has sufficient permissions (for example, Owner or User Access Administrator at RG3 or higher scope), they can assign User1 the **Owner role** for RG3.

- The exam scenario confirms that User3 has the necessary rights, so the statement is true.

### Incorrect

**Option B. No**

- Incorrect because this would only be true if User3 lacked the required role assignment permissions.

- Since the scenario specifies that User3 has the ability to assign roles at RG3, denying this capability would contradict the role-based access control (RBAC) rules in Azure.

###

---

### Question 19

**You have two Azure virtual machines and two DNS zones. You link **fabrikam.com** to **vnet1** with auto‑registration enabled. For **contoso.com**, you assign VM1 and VM2 the Owner role. Statement to evaluate:** “The DNS A record for VM1 is added to fabrikam.com and has the IP address of 10.0.1.4.”

You create the Azure DNS zones shown in the following table.

You perform the following actions:

- To fabrikam.com, you add a virtual network link to vnet1 and enable auto registration.

- For contoso.com, you assign vm1 and vm2 the Owner role.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“The DNS A record for vm1 is added to fabrikam.com and has the IP address of 10.0.1.4.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

- **Option A. Yes** Correct because when you enable **auto‑registration** on a private DNS zone (fabrikam.com) and link it to a virtual network (vnet1), the DNS A records for VMs connected to that VNet are automatically registered. Since VM1 is in vnet1 and has the IP address 10.0.1.4, its A record will be added to fabrikam.com with that IP.

### Incorrect

- **Option B. No** Incorrect because denying the statement would ignore the fact that auto‑registration ensures VM1’s IP (10.0.1.4) is automatically added to the DNS zone fabrikam.com. The Owner role assignment on contoso.com is irrelevant here, as the statement only concerns fabrikam.com.

###

---

### Question 20

You have two Azure subscriptions named Sub1 and Sub2. Sub1 is in a management group named MG1. Sub2 is in a management group named MG2.

You have the resource groups shown in the following table.

You have the virtual machines shown in the following table.

You assign roles to users as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User2 can manage disks and disk snapshots of VM3.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because **managing disks and disk snapshots** requires specific permissions such as **Contributor** or **Virtual Machine Contributor** roles at the resource group or subscription level.

- Based on the scenario, **User2 does not have sufficient role assignments** that grant management rights over VM3’s disks.

- Therefore, User2 cannot perform disk or snapshot management tasks for VM3.

### Incorrect

**Option A. Yes**

- Incorrect because User2’s assigned role does not include permissions to manage VM3’s disks.

- Without the appropriate Contributor‑level rights on the resource group or subscription containing VM3, User2 cannot manage storage resources associated with the VM.

###

---

### Question 23

Your organization wants to implement Azure Policy to enforce governance and compliance standards across its Azure environment. Which policy definition types can you use to create Azure Policy rules?

**Options:**

- **A.** Built-in policy definitions ✅
- **B.** Customized Policy Document
- **C.** Custom policy definitions ✅
- **D.** Policy exemptions

**Correct answer:** A, C

**Explanation:**

You can use the following policy definition types to create Azure Policy rules:

**Built-in policy definitions:** These are pre-defined policies provided by Microsoft that cover common security, compliance, and management scenarios.

**Custom policy definitions:** These are policies that you create to enforce specific requirements that are unique to your organization.

**Key Points:**

**Policy exemptions:** Policy exemptions are used to exclude specific resources or scopes from the enforcement of a particular policy. They are not a type of policy definition themselves, but rather a way to manage the application of policies.

**Customized Policy Document:** This term is not a standard Azure Policy terminology.

By utilizing both built-in and custom policy definitions, you can effectively implement and enforce the governance and compliance standards that are essential for your Azure environment.

---

### Question 26

You have created an ARM template that deploys a resource group. You want to ensure that this resource group is not accidentally deleted. Which Azure feature can you use to prevent accidental deletion of the resource group and its associated resources?

**Options:**

- **A.** Azure Management Groups
- **B.** Azure Policy
- **C.** Resource locks ✅
- **D.** Azure Blueprints

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Resource locks**

- Correct because **Resource Locks** (Delete or ReadOnly) are specifically designed to prevent accidental deletion or modification of resources.

- Applying a **Delete lock** at the resource group level ensures that neither the resource group nor its resources can be deleted until the lock is removed.

- This directly meets the requirement of preventing accidental deletion.

### Incorrect

**Option A. Azure Management Groups**

- Incorrect because management groups are used for organizing subscriptions and applying governance at scale.

- They do not prevent deletion of individual resource groups.

**Option B. Azure Policy**

- Incorrect because Azure Policy enforces compliance rules (e.g., requiring tags, restricting VM sizes).

- It cannot prevent deletion of a resource group or its resources.

**Option D. Azure Blueprints**

- Incorrect because Blueprints are used to deploy and govern sets of resources consistently across environments.

- They do not provide deletion protection for resource groups.

---

### Question 29

Scenario:
Your company has been rapidly expanding its cloud footprint on Azure, deploying numerous resources across multiple subscriptions. As a result, you‘re experiencing increasing challenges in understanding, managing, and optimizing your Azure costs.
Specifically, you‘re facing the following issues:
1. Unexpected cost spikes: You‘ve noticed sudden increases in your monthly Azure bill that you can‘t readily explain.
2. Resource Overprovisioning: You suspect that some of your resources are overprovisioned and not being utilized efficiently.
3. Lack of Cost Visibility: You need a way to break down your Azure costs by resource type, subscription, and department to better understand your spending patterns.
4. Budget Overruns: You need to establish budgets for different departments and projects to prevent unexpected cost overruns.
Question:
Which combination of Azure Cost Management and Billing features would BEST address these challenges and help you gain better control over your Azure spending?

**Options:**

- **A.** Azure Advisor recommendations, Azure budgets, and Azure Cost Management APIs
- **B.** Azure reservations, Azure Cost Management exports, and Azure Cost Management APIs
- **C.** Cost analysis, Azure reservations, and Azure Cost Management exports
- **D.** Cost analysis, Azure Advisor recommendations, and Azure budgets ✅

**Correct answer:** D

**Explanation:**

The best answer is Cost analysis, Azure Advisor recommendations, and Azure budgets. Here‘s why:
Cost analysis: This feature provides a detailed breakdown of your Azure costs, allowing you to identify cost drivers, analyze spending trends, and compare costs across different time periods, subscriptions, and resource groups. This addresses the lack of cost visibility.
Azure Advisor recommendations: This tool analyzes your resource usage and provides personalized recommendations for optimizing costs, such as rightsizing VMs, deleting unused resources, or purchasing reserved instances. This addresses resource overprovisioning and helps prevent unexpected cost spikes.
Azure budgets: This feature enables you to set spending limits for your Azure resources and receive alerts when you approach or exceed those limits. This helps you stay on top of your spending and prevent budget overruns.
Why other options are less ideal:
While Azure reservations can help reduce costs, they are not the most effective solution for analyzing spending patterns or identifying overprovisioned resources.
Azure Cost Management APIs can be useful for automating cost management tasks, but they are not the primary tools for cost analysis or budget setting.
This combination focuses more on cost reporting and optimization but lacks the proactive alerting and budget control features of Azure budgets.
Key Points:
This scenario highlights the challenges that organizations face in managing cloud costs as their Azure footprint grows.
It emphasizes the importance of utilizing the various features offered by Azure Cost Management and Billing to gain insights into spending patterns, optimize resource utilization, and prevent unexpected costs.

---

### Question 31

You are troubleshooting a network connectivity issue between two Azure VMs in different VNets. You have verified that the VMs have the correct IP addresses and subnet configurations.
Which Azure tool can you use to visualize the network topology and trace the traffic flow between the VMs?

**Options:**

- **A.** Azure Advisor
- **B.** Azure Network Watcher ✅
- **C.** Azure Monitor
- **D.** Azure Security Center

**Correct answer:** B

**Explanation:**

Azure Network Watcher is the primary toolset for diagnosing and troubleshooting network issues in Azure. It provides various capabilities like Connection Monitor, which can visualize the network topology and trace the path of network traffic between VMs.

---

### Question 33

Scenario:
Your company, a financial institution, stores large volumes of sensitive customer data in Azure Blob Storage. To optimize costs and comply with data retention policies, you need to automate the lifecycle management of this data. Specifically, you need to:
Transition older data to cooler storage tiers based on last accessed time.
Permanently delete sensitive customer data after a specified retention period.
Preserve the ability to recover accidentally deleted data for a limited time.
Question:
Which Azure features or tools should you use to implement this automated data lifecycle management process?

**Options:**

- **A.** Azure Information Protection, Azure Security Center, and Azure Policy
- **B.** Azure Blob Storage access tiers, Azure Blob versioning, and Azure Resource Manager templates
- **C.** Azure Blob Storage lifecycle management policies, Azure Blob soft delete, and Azure Monitor ✅
- **D.** Azure Blob Inventory, Azure Event Grid, and Azure Data Factory

**Correct answer:** C

**Explanation:**

More details:
Azure Blob Storage lifecycle management policies: These policies allow you to create rules to automatically transition blobs to cooler storage tiers (Cool, Archive) based on criteria like last accessed time. You can also define rules to permanently delete blobs after a specified period, aligning with your data retention policies.
Azure Blob soft delete: This feature enables you to recover blobs that have been accidentally deleted within a retention period you configure. It provides a safety net for data recovery in case of unintended deletions.
Azure Monitor: Azure Monitor allows you to track and analyze the effectiveness of your lifecycle management policies. You can create alerts to notify you of any issues or unexpected behavior, ensuring your policies are working as intended.
Why other options are not suitable:
While Azure Blob Inventory provides insights into storage usage, it doesn‘t automate lifecycle management. Azure Event Grid can trigger actions, but it needs to be coupled with other tools to define the lifecycle rules. Azure Data Factory is used for orchestrating data movement and transformation, but it‘s not the primary tool for lifecycle management within Azure Storage.
Access tiers are part of the lifecycle management strategy, but they need to be combined with lifecycle management policies to be automated. Versioning is useful for maintaining historical versions of blobs, but it doesn‘t directly address automatic deletion or transition to cooler tiers.
These tools focus on data security and compliance, not on the automated movement or deletion of data based on lifecycle criteria.

---

### Question 39

**Question:** You want to monitor the status of your Azure Backup jobs and receive notifications for failed or completed backups. Which Azure service can you use to track backup job status and configure alerts?

**Options:**

- **A.** A. Azure Advisor
- **B.** B. Azure Monitor ✅
- **C.** C. Azure Backup Explorer
- **D.** D. Azure Log Analytics

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Azure Monitor**

- **Correct** because **Azure Monitor** integrates with Azure Backup to track job status and generate alerts.

- You can configure **Backup Alerts** in Azure Monitor to notify administrators when jobs fail, succeed, or complete.

- This is the recommended service for monitoring and alerting across Azure resources, including backup jobs.

### Incorrect

**Option A. Azure Advisor**

- Incorrect because **Azure Advisor** provides recommendations for cost optimization, performance, reliability, and security.

- It does not monitor backup job status or generate alerts for backup operations.

**Option C. Azure Backup Explorer**

- Incorrect because **Backup Explorer** is used for **reporting and analytics** on backup data (e.g., trends, usage, compliance).

- It does not provide real-time monitoring or alerting capabilities for job status.

**Option D. Azure Log Analytics**

- Incorrect because **Log Analytics** can collect and query logs, but it is not the primary service for configuring alerts.

- It works in conjunction with Azure Monitor, but the direct answer for monitoring and alerting is **Azure Monitor**.

###

---

### Question 44

Your organization is migrating to Azure, and you need to track resource usage and costs across multiple departments. How can you implement tagging to effectively categorize resources and allocate costs to specific departments?

**Options:**

- **A.** Use Azure Cost Management to directly assign costs to departments without using tags.
- **B.** Use Azure Policy to enforce a single, global tag for all resources.
- **C.** Create a tagging strategy that defines standard tag keys and values for different departments and apply these tags during resource deployment using Azure Resource Manager templates or other automation tools. ✅
- **D.** Manually assign tags to each resource in the Azure portal after deployment.

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Create a tagging strategy that defines standard tag keys and values for different departments and apply these tags during resource deployment using Azure Resource Manager templates or other automation tools**

- Correct because the best practice is to define a **consistent tagging strategy** (e.g., Department: Finance, Department: HR) and enforce it during deployment.

- Tags allow **Azure Cost Management + Billing** to break down costs by department, project, or environment.

- Using automation (ARM templates, Bicep, Terraform, or Azure Policy) ensures tags are applied consistently and reduces human error.

### Incorrect

**Option A. Use Azure Cost Management to directly assign costs to departments without using tags**

- Incorrect because Azure Cost Management reports costs but does not automatically categorize them by department.

- Tags are required to allocate costs to specific groups.

**Option B. Use Azure Policy to enforce a single, global tag for all resources**

- Incorrect because a single global tag does not provide meaningful categorization.

- You need **multiple department‑specific tags** to track usage correctly.

**Option D. Manually assign tags to each resource in the Azure portal after deployment**

- Incorrect because while technically possible, this approach is error‑prone and inefficient.

- Manual tagging lacks consistency and scalability compared to automation.

###

---

### Question 3

You have a Microsoft Entra tenant named adatum.com that contains the groups shown in the following table.

Adatum.com contains the users shown in the following table.

You assign a Microsoft Entra ID P2 license to Group1 as shown in the following exhibit.

Group2 is NOT directly assigned a license.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“You can remove the Microsoft Entra ID P2 license from User1.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because User1 received the Microsoft Entra ID P2 license through group-based licensing via Group1. Licenses assigned through a group cannot be removed directly from an individual user. To revoke the license from User1, you must either remove User1 from Group1 or unassign the license from Group1 entirely.

Group-based licensing enforces inheritance, meaning individual license removal is not possible for users who inherit their license through a group assignment.

Reference(s):

https://learn.microsoft.com/en-us/entra/fundamentals/concept-group-based-licensing

---

### Question 4

You have a Microsoft Entra tenant named adatum.com that contains the groups shown in the following table.

Adatum.com contains the users shown in the following table.

You assign a Microsoft Entra ID P2 license to Group1 as shown in the following exhibit.

Group2 is NOT directly assigned a license.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User2 is assigned the Microsoft Entra ID P2 license.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because User2 is a member of Group2, which is nested under Group1. While Group1 has been assigned the Microsoft Entra ID P2 license, group-based licensing does not support nested group inheritance.

This means that User2 will not inherit the license from Group1 through Group2. For User2 to receive the Microsoft Entra ID P2 license, the license must be explicitly assigned to Group2 or directly to User2.

Reference(s):

https://learn.microsoft.com/en-us/entra/fundamentals/concept-group-based-licensing

---

### Question 5

You have a Microsoft Entra tenant named adatum.com.

Adatum.com contains the groups in the following table.

You create two user accounts that are configured as shown in the following table.

Of which groups is **User2** a member?

**Options:**

- **A.** Group1 only
- **B.** Group2 only
- **C.** Group3 only
- **D.** Group1 and Group2 only ✅
- **E.** Group1 and Group3 only
- **F.** Group2 and Group3 only

**Correct answer:** D

**Explanation:**

**Group1 and Group2 only** is **correct** because User2 meets the membership rules for both Group1 and Group2 based on their city and department attributes.

- Group1 (Dynamic user): The membership rule specifies that users are added if their city starts with “m”.

- User2’s city is Melbourne, which starts with “M”. Therefore, User2 satisfies the rule for Group1.

- Group2 (Dynamic user): The membership rule specifies that users whose department is not “human resources” are included.

- User2’s department is Marketing, which satisfies the notIn [“human resources”] rule. Therefore, User2 is included in Group2.

- Group3 (Assigned membership): Membership is manually assigned.

- User2 has not been manually added to Group3, so they are not a member of Group3.

Additionally, the Microsoft 365 license does not impact group membership. Licenses are only for accessing services and do not affect dynamic or assigned group memberships.

Therefore, User2 is a member of Group1 and Group2 only.

**Reference(s):**

https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-membership

https://learn.microsoft.com/en-us/entra/identity/users/groups-create-rule

---

### Question 6

You have an Azure subscription. The subscription contains a virtual machine that runs Windows 10.

You need to join the virtual machine to an Active Directory domain.

You need to complete the Azure Resource Manager (ARM) template.

Which value should you choose for **Dropdown 1**?

**Options:**

- **A.** “Extensions“,
- **B.** “Microsoft.Compute/VirtualMachines“,
- **C.** “Microsoft.Compute/virtualMachines/extensions“, ✅

**Correct answer:** C

**Explanation:**

**“Microsoft.Compute/virtualMachines/extensions”** is **correct** because. This namespace specifies that the resource being managed is an extension applied to an Azure virtual machine.

**“Extensions”** is **incorrect** because it is not a valid Azure Resource Manager resource type.

**“Microsoft.Compute/VirtualMachines”** is **incorrect** because it refers to virtual machines themselves, not their extensions.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/virtual-machines/extensions/overview

- https://learn.microsoft.com/en-us/azure/templates/microsoft.compute/virtualmachines/extensions

- https://learn.microsoft.com/en-us/azure/virtual-machines/extensions/dsc-template#domain-join

---

### Question 16

You have a Microsoft Entra tenant that contains the users shown in the following table.

The tenant contains the groups shown in the following table.

Self-service password reset (SSPR) needs to be configured for the tenant.

Which users can configure SSPR?

**Options:**

- **A.** Admin1 only
- **B.** Admin2 only
- **C.** Admin3 only
- **D.** Admin1 and Admin2 only ✅
- **E.** Admin2 and Admin3 only
- **F.** Admin1, Admin2, and Admin3

**Correct answer:** D

**Explanation:**

### Correct

**Option D. Admin1 and Admin2 only** Explanation: This is correct. In Microsoft Entra (Azure AD), **Global Administrators** and **Password Administrators** can configure **Self‑Service Password Reset (SSPR)**. Admin1 and Admin2 hold roles that allow them to configure tenant‑wide SSPR settings.

### Incorrect

**Option A. Admin1 only** Incorrect. While Admin1 may have sufficient privileges, Admin2 also has the required role. Limiting to Admin1 alone ignores Admin2’s ability to configure SSPR.

**Option B. Admin2 only** Incorrect. Same reasoning — Admin1 also has the required privileges.

**Option C. Admin3 only** Incorrect. Admin3 does not hold a role that allows configuring SSPR. Admin3 may be a User Administrator or another limited role, but not one with SSPR configuration rights.

**Option E. Admin2 and Admin3 only** Incorrect. Admin3 cannot configure SSPR, so this combination is invalid.

**Option F. Admin1, Admin2, and Admin3** Incorrect. Admin3 does not have the required permissions, so including Admin3 makes this option wrong.

###

---

### Question 17

You have a Microsoft Entra tenant named adatum.com.

Adatum.com contains the groups in the following table.

You create two user accounts that are configured as shown in the following table.

Of which groups is **User1** a member?

**Options:**

- **A.** Group1 only ✅
- **B.** Group2 only
- **C.** Group3 only
- **D.** Group1 and Group2 only
- **E.** Group1 and Group3 only
- **F.** Group1, Group2, and Group3

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Group1 only**

- Correct because User1 is explicitly assigned membership in **Group1**.

- In Microsoft Entra (Azure AD), group membership is determined by either direct assignment or dynamic rules.

- Since the scenario specifies User1’s configuration, only Group1 applies.

### Incorrect

**Option B. Group2 only**

- Incorrect because User1 is not assigned to Group2.

- Unless a dynamic rule or nested membership exists (not mentioned here), User1 cannot be a member of Group2.

**Option C. Group3 only**

- Incorrect because User1 is not assigned to Group3.

- No configuration details suggest User1 belongs to Group3.

**Option D. Group1 and Group2 only**

- Incorrect because User1 is not a member of Group2.

- This option incorrectly assumes multiple memberships.

**Option E. Group1 and Group3 only**

- Incorrect because User1 is not a member of Group3.

- Only Group1 applies.

**Option F. Group1, Group2, and Group3**

- Incorrect because User1 is not assigned to Group2 or Group3.

- This option overstates membership.

---

### Question 26

**Scenario:** You have an Azure subscription with a storage account named **storage1** that contains blobs storing images. Client access is granted using **Shared Access Signatures (SAS)**. You need to ensure that users receive a **warning message** when they generate a SAS that exceeds a **seven‑day time period**.

**Options:**

- **A.** Enable a read-only lock.
- **B.** Configure an alert rule.
- **C.** Add a lifecycle management rule.
- **D.** Set Allow recommended upper limit for shared access signature (SAS) expiry interval to Enabled. ✅

**Correct answer:** D

**Explanation:**

### Correct

**Option D. Set ****Allow recommended upper limit for shared access signature (SAS) expiry interval**** to Enabled**

- **Correct because**:

- Azure Storage provides a **recommended upper limit setting** for SAS expiry intervals.

- By enabling this setting, administrators can enforce a **warning** when users attempt to generate SAS tokens longer than the recommended maximum (seven days).

- This does not block SAS creation but ensures compliance by alerting users.

- This is the precise configuration required in this scenario.

### Incorrect

**Option A. Enable a read‑only lock**

- Incorrect because resource locks prevent deletion or modification of resources, not SAS expiry enforcement.

**Option B. Configure an alert rule**

- Incorrect because alert rules monitor metrics or logs, not SAS expiry intervals. They cannot generate warnings during SAS creation.

**Option C. Add a lifecycle management rule**

- Incorrect because lifecycle rules manage blob tiering and deletion based on age, not SAS expiry duration.

###

---

### Question 30

You have an Azure subscription that contains a user named User1 and the resources shown in the following table.

NSG1 is associated to networkinterface1.

User1 has role assignments for NSG1 as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User1 can modify the DNS settings of networkinterface1.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because User1 has the Contributor role assigned only at the NSG1 resource scope, not at the networkinterface1 scope. The Contributor role on NSG1 allows User1 to manage the Network Security Group (NSG1), but it does not extend permissions to manage or modify DNS settings of the associated network interface (networkinterface1).

Additionally, the Reader role at the Subscription level only grants read permissions and does not allow modification of resources. Similarly, the Storage Account Contributor role at the Resource Group (RG1) level is specific to storage accounts and does not provide permissions to modify network interface settings.

Therefore, User1 cannot modify the DNS settings of networkinterface1.

**Reference(s):**

https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

https://learn.microsoft.com/en-us/azure/role-based-access-control/overview

https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal

---

### Question 31

You have an Azure subscription that contains a user named User1 and the resources shown in the following table.

NSG1 is associated to networkinterface1.

User1 has role assignments for NSG1 as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User1 can create an inbound security rule to filter inbound traffic to networkinterface1.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is **correct** because User1 has the Contributor role explicitly assigned to NSG1 (Network Security Group). The Contributor role allows full management permissions over the NSG, including the ability to create, modify, and delete inbound and outbound security rules to control traffic flow.

Since NSG1 is associated with networkinterface1, any inbound security rules configured on NSG1 will apply to networkinterface1. Therefore, User1 has the required permissions to create an inbound security rule to filter inbound traffic to networkinterface1.

Reference(s):

https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

https://learn.microsoft.com/en-us/azure/role-based-access-control/overview

https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview

---

### Question 32

You configure the custom role shown in the following exhibit.

Based on the information presented, select the answer choice that completes the following statement correctly.

**“To ensure that role1 can be assigned only to a resource group named RG1, modify the __________________ section.”**

**Options:**

- **A.** actions
- **B.** roletype
- **C.** notActions
- **D.** dataActions
- **E.** notDataActions
- **F.** assignableScopes ✅

**Correct answer:** F

**Explanation:**

**assignableScopes** is the **correct** option because this section defines where a role can be assigned within Azure. By specifying the resource group scope (e.g., /subscriptions/{subscriptionId}/resourceGroups/RG1) in the assignableScopes section, the custom role role1 can be restricted to be assigned only to RG1.

This ensures that the role cannot be assigned to other subscriptions, resource groups, or resources outside the specified scope.

**actions** is **incorrect** because it defines control plane permissions for resource management but does not restrict where the role can be assigned.

**roletype** is **incorrect** because it only specifies whether the role is built-in or custom and does not affect the scope of assignment.

**notActions** is **incorrect** because it is used to exclude specific actions from the role, not to define assignment scope.

**dataActions** is **incorrect** because it controls data-level permissions, not role assignment scope.

**notDataActions** is **incorrect** because it specifies excluded data-level operations and does not define assignment scope.

**Reference(s):**

https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#virtual-machine-administrator-login

---

### Question 34

You have a Microsoft Entra tenant that contains the identities shown in the following table.

You have a custom security attribute named Attr1.

You need to assign Attr1 to all the supported identities.

To which identities can you assign Attr1?

**Options:**

- **A.** User1 only
- **B.** Group1 only
- **C.** User1 and Group1 only
- **D.** User1 and Principal1 only ✅
- **E.** User1, Group1, and Principal1

**Correct answer:** D

**Explanation:**

**User1 and Principal1 only** is **correct** because custom security attributes in Microsoft Entra ID can only be assigned to **users** and **service principals** (enterprise applications). Security groups are not supported objects for custom security attributes.

**Reference(s):**

- https://learn.microsoft.com/en-us/entra/fundamentals/custom-security-attributes-overview

---

### Question 36

Your network contains an on-premises Active Directory Domain Services (AD DS) domain.

The domain contains the identities shown in the following table.

You have an Azure subscription that contains a storage account named storage1. The file shares in storage1 have an identity source of AD DS and Default share-level permissions set to Enable permissions for all authenticated users and groups.

You create an Azure Files share named share1 that has the roles shown in the following table.

You have a Microsoft Entra tenant that contains a cloud-only user named User3.

You use Microsoft Entra Connect to sync OU1 from the AD DS domain to the Microsoft Entra tenant.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User2 can access content in share1.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is **correct** because it is part of OU1 and OU1 is synced to Microsoft Entra ID. Also, User2 is assigned SMB File Reader role so it can access the content in share1.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/storage/files/storage-files-identity-ad-ds-assign-permissions?tabs=azure-portal

---

### Question 37

Your network contains an on-premises Active Directory Domain Services (AD DS) domain.

The domain contains the identities shown in the following table.

You have an Azure subscription that contains a storage account named storage1. The file shares in storage1 have an identity source of AD DS and Default share-level permissions set to Enable permissions for all authenticated users and groups.

You create an Azure Files share named share1 that has the roles shown in the following table.

You have a Microsoft Entra tenant that contains a cloud-only user named User3.

You use Microsoft Entra Connect to sync OU1 from the AD DS domain to the Microsoft Entra tenant.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User3 can access content in share1.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** as this user is a cloud-only user, and there is no indication that User3 has been assigned any permissions on share1. Without explicit role assignments, User3 cannot access share1.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/storage/files/storage-files-identity-ad-ds-assign-permissions?tabs=azure-portal

---

### Question 40

You have a Microsoft Entra tenant named contoso.com.
You collaborate with an external partner named fabrikam.com.
You plan to invite users in fabrikam.com to the contoso.com tenant.
You need to ensure that invitations can be sent only to fabrikam.com users.
What should you do in the Microsoft Entra admin center?

**Options:**

- **A.** From Cross-tenant access settings, configure the Tenant restrictions settings.
- **B.** From Cross-tenant access settings, configure the Microsoft cloud settings.
- **C.** From External collaboration settings, configure the Guest user access restrictions settings.
- **D.** From External collaboration settings, configure the Collaboration restrictions settings. ✅

**Correct answer:** D

**Explanation:**

From External collaboration settings, configure the Collaboration restrictions settings is the correct answer. In Microsoft Entra, you can restrict who can be invited as a guest by configuring Collaboration restrictions. By specifying the allowed domains, such as fabrikam.com, you can ensure that invitations can only be sent to users from that domain.
From Cross-tenant access settings, configure the Tenant restrictions settings is incorrect because tenant restrictions are used to control which tenants users can access, not to restrict guest invitations.
From Cross-tenant access settings, configure the Microsoft cloud settings is incorrect because these settings are used for managing cross-tenant access policies between Microsoft cloud environments, not for restricting guest user invitations.
From External collaboration settings, configure the Guest user access restrictions settings is incorrect because this setting controls what guest users can do once they are in your tenant, not who can be invited.
Reference(s):
https://learn.microsoft.com/en-us/entra/external-id/external-collaboration-settings-configure

---

### Question 41

You have an Azure subscription that contains the resources shown in the following table.

You plan to use an Azure key vault to provide a secret to app1.

What should you create for app1 to access the key vault?

**Options:**

- **A.** Managed identity ✅
- **B.** Private endpoint
- **C.** Service principal
- **D.** User account

**Correct answer:** A

**Explanation:**

**Managed identity** is the **correct** answer. To securely provide a secret from an Azure Key Vault to app1, you should create a managed identity for app1. Managed identities allow Azure resources to securely access other Azure services (like Key Vault) without needing to manage credentials. Once the managed identity is created, it can be granted the necessary permissions to access the Key Vault and retrieve secrets.

**Private endpoint** is **incorrect** because this is used for securing the network access to the Key Vault but does not handle authentication for accessing secrets.

**Service principal **is **incorrect** because while service principals can be used to access resources, using a managed identity is a simpler and more secure method for Azure resources.

**User account **is **incorrect** because user accounts are not typically used for resource-to-resource access in Azure.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/key-vault/general/assign-access-policy?tabs=azure-portal

- https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview

---

### Question 45

You have a Microsoft Entra tenant.

You plan to perform a bulk import of users.

You need to ensure that imported user objects are added automatically as the members of a specific group based on each user’s department. The solution must minimize administrative effort.

Which **two** actions should you perform?

**Options:**

- **A.** Create groups that use the Assigned membership type.
- **B.** Create an Azure Resource Manager (ARM) template.
- **C.** Create groups that use the Dynamic User membership type. ✅
- **D.** Write a PowerShell script that parses an import file.
- **E.** Create an XML file that contains user information and the appropriate attributes.
- **F.** Create a CSV file that contains user information and the appropriate attributes. ✅

**Correct answer:** C, F

**Explanation:**

**Create groups that use the Dynamic User membership type** is the **correct** answer because dynamic membership rules allow users to be automatically added to groups based on specific attributes, such as department. This minimizes administrative effort since the users will be automatically placed into the correct group based on their department attribute without manual intervention.

**Create a CSV file that contains user information and the appropriate attributes** is the **correct** answer because CSV is the supported format for bulk importing users into Microsoft Entra. The CSV file will contain the necessary user information, including department attributes, which are used to assign users to the appropriate dynamic groups.

**Create groups that use the Assigned membership type **is **incorrect** because assigned groups require manual assignment of users, which does not minimize administrative effort.

**Create an Azure Resource Manager (ARM) template** is **incorrect** because ARM templates are used to deploy Azure resources, not for user or group management.

**Write a PowerShell script that parses an import file **is **incorrect** because while it can be used, it would increase administrative effort, which is against the goal of minimizing effort.

**Create an XML file that contains user information and the appropriate attributes** is **incorrect** because CSV is the recommended format for bulk user import, not XML.

**Reference(s):**

- https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-membership

- https://learn.microsoft.com/en-us/entra/identity/users/groups-bulk-import-members

---

### Question 52

You have an Azure subscription that is linked to a Microsoft Entra tenant named contoso.com. The tenant is synced to the on-premises Active Directory domain. The domain contains the users shown in the following table.

You enable self-service password reset (SSPR) for all users and configure SSPR to have the following authentication methods:

- Number of methods required to reset: 2

- Methods available to users: Mobile phone, Security questions

- Number of questions required to register: 3

- Number of questions required to reset: 3

You select the following security questions:

- What is your favorite food?

- In what city was your first job?

- What was the name of your first pet?

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“SecAdmin1 must answer the following question during the self-service password reset:**

**In what city was your first job?”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because, although self-service password reset (SSPR) is enabled for all users, the regular SSPR policy does not apply to users in administrative roles, such as Security Administrator. Administrators must go through a two-gate policy to reset their password, which differs from the standard SSPR process configured for non-admin users. Since SecAdmin1 is in an administrative role, they are excluded from using security questions and instead must follow the enhanced SSPR process that applies to Azure AD administrators. Additionally, SSPR is enabled by default for admin roles.

**Reference(s):**

- https://support.microsoft.com/en-gb/account-billing/reset-your-work-or-school-password-using-security-info-23dde81f-08bb-4776-ba72-e6b72b9dda9e

- https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-policy#administrator-reset-policy-differences

---

### Question 53

You have an Azure subscription that is linked to a Microsoft Entra tenant named contoso.com. The tenant is synced to the on-premises Active Directory domain. The domain contains the users shown in the following table.

You enable self-service password reset (SSPR) for all users and configure SSPR to have the following authentication methods:

- Number of methods required to reset: 2

- Methods available to users: Mobile phone, Security questions

- Number of questions required to register: 3

- Number of questions required to reset: 3

You select the following security questions:

- What is your favorite food?

- In what city was your first job?

- What was the name of your first pet?

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“BillAdmin1 must answer the following question during the self-service password reset:**

**What is your favorite food?”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because BillAdmin1 has been assigned the Billing Administrator role, which falls under the category of administrative roles in Azure AD. By default, Azure applies a two-gate password reset policy for all administrator accounts. This two-gate policy requires two pieces of authentication data, such as an email address, authenticator app, or phone number, and does not permit the use of security questions for administrators. Therefore, BillAdmin1 would not be prompted to answer a security question, such as “What is your favorite food?” during the password reset process.

**Reference(s):**

- https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-sspr-deployment

- https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-sspr-policy#administrator-reset-policy-differences

---

## Practice Set 7

Source: https://skillcertpro.com/az-104-exam-questions/7/

### Question 11

**You have a Microsoft Entra tenant linked to Azure subscriptions and resource groups. Roles are assigned to users. For the statement: “User1 can resize VM1.” Select Yes or No.**

You have the resource groups shown in the following table.

You assign roles to users as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User1 can resize VM1.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- Correct because resizing a VM requires **Contributor-level permissions** (or higher) on the resource group or subscription where the VM resides.

- If User1 has been assigned a role such as **Virtual Machine Contributor** or **Contributor** at the resource group level that contains VM1, then User1 can perform operations like start, stop, restart, and **resize** the VM.

- The statement is true if the role assignment aligns with these permissions.

### Incorrect

**Option B. No**

- Incorrect because denying the ability to resize VM1 would only be true if User1 had insufficient permissions (e.g., Reader role).

- Since the scenario specifies that User1 has the appropriate role assignment, the answer “No” does not meet the goal.

###

---

### Question 18

**You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.** **Another administrator plans to create several network security groups (NSGs) in the subscription.** **You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.** **Solution: You configure a custom policy definition, and then you assign the Azure policy to the subscription.** **Does this meet the goal?**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- Correct because **Azure Policy** can enforce rules across resources in a subscription.

- By creating a **custom policy definition** that requires NSGs to include a rule blocking TCP port 8080, and assigning it at the subscription level, you ensure that any NSG created will automatically comply.

- This meets the stated goal of enforcing a consistent security configuration across all virtual networks.

### Incorrect

**Option B. No**

- Incorrect because saying “No” ignores the fact that Azure Policy is specifically designed to enforce compliance and automatically apply rules at scale.

- Without Azure Policy, administrators would have to manually configure NSGs or rely on scripts, which does not meet the requirement of automatic enforcement.

---

### Question 19

**You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.** **Another administrator plans to create several network security groups (NSGs) in the subscription.** **You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.** **Solution: You assign a built‑in Azure policy definition to the subscription.** **Does this meet the goal?**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because the **built‑in Azure policy definitions** do not include a rule that automatically blocks TCP port 8080 between virtual networks.

- Built‑in policies cover common compliance and governance scenarios (like requiring tags, enforcing allowed VM sizes, or ensuring diagnostics are enabled), but they do not enforce custom NSG rules such as blocking a specific port.

- To meet the goal, you would need to create and assign a **custom policy definition** that enforces the NSG rule for TCP port 8080.

### Incorrect

**Option A. Yes**

- Incorrect because assigning a built‑in policy alone cannot enforce the requirement.

- Built‑in policies cannot automatically block TCP port 8080 between VNets; only a **custom policy definition** can achieve this.

---

### Question 20

You have an Azure subscription named Subscription1 that contains the following resource group:

- Name: RG1

- Region: West US

- Tag: “tag1”: “value1”

You assign an Azure policy named Policy1 to Subscription1 by using the following configurations:

- Exclusions: None

- Policy definition: Append a tag and its value to resources

- Assignment name: Policy1

- Parameters:

- Tag name: tag2

- Tag value: value2

After Policy1 is assigned, you create a storage account that has the following configurations:

- Name: storage1

- Region: West US

- Resource group: RG1

- Tags: “tag3”: “value3”

Which tags are assigned to **RG1**?

**Options:**

- **A.** “tag1“ : “value1“ only ✅
- **B.** “tag2“ : “value2“ only
- **C.** “tag1“ : “value1“ and “tag2“ : “value2“

**Correct answer:** A

**Explanation:**

### Correct

**Option A. “tag1” : “value1” only**

- Correct because the **Append tag policy** applies to **newly created resources** (like the storage account), not to existing resources such as RG1.

- RG1 already had the tag “tag1” : “value1” before the policy was assigned, and the policy does not retroactively add tags to existing resources.

- Therefore, RG1 retains only its original tag.

### Incorrect

**Option B. “tag2” : “value2” only**

- Incorrect because RG1 already had “tag1” : “value1” and policies do not remove existing tags.

- Also, the append policy does not apply retroactively to RG1.

**Option C. “tag1” : “value1” and “tag2” : “value2”**

- Incorrect because while the storage account created after the policy assignment would get “tag2” : “value2” appended, RG1 itself does not get updated with the new tag.

- The policy does not modify existing resource groups.

###

---

### Question 24

**You have a Microsoft Entra tenant named contoso.onmicrosoft.com that contains the users shown in the table.** **You enable password reset for contoso.onmicrosoft.com as shown in the Password Reset exhibit.** **You configure the authentication methods for password reset as shown in the Authentication Methods exhibit.** **For the following statement, select Yes if the statement is true. Otherwise, select No.** **“User3 can add security questions to the password reset process.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because **security questions are not supported in Microsoft Entra self‑service password reset (SSPR)**.

- The available authentication methods for SSPR include **email, mobile phone, office phone, and mobile app notifications/codes**, but not security questions.

- Therefore, User3 cannot add security questions to the password reset process.

### Incorrect

**Option A. Yes**

- Incorrect because answering “Yes” assumes that security questions are a valid authentication method in Entra SSPR.

- This is a common exam trap: while some identity systems allow security questions, Microsoft Entra does not.

###

---

### Question 25

**You have a Microsoft Entra tenant named contoso.onmicrosoft.com that contains the users shown in the table.** **You enable password reset for contoso.onmicrosoft.com as shown in the Password Reset exhibit.** **You configure the authentication methods for password reset as shown in the Authentication Methods exhibit.** **For the following statement, select Yes if the statement is true. Otherwise, select No.** **“After User2 answers three security questions correctly, he can reset his password immediately.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because **Microsoft Entra Self‑Service Password Reset (SSPR)** does not support **security questions** as an authentication method.

- The supported methods include **email, mobile phone, office phone, and Microsoft Authenticator app notifications/codes**.

- Therefore, User2 cannot reset his password using security questions, even if he answers three correctly.

### Incorrect

**Option A. Yes**

- Incorrect because answering “Yes” assumes that security questions are a valid authentication method in Entra SSPR.

- This is a common exam trap: while some legacy identity systems allow security questions, Microsoft Entra does not.

###

---

### Question 32

You have the following custom role-based access control (RBAC) role.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“Users that are assigned Role1 can assign Role1 to users.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is the **correct** answer here. The custom role “Role1” includes various permissions under the “actions” section, but the “notActions” section explicitly denies permissions related to **Microsoft.Authorization/*/Delete**, **Microsoft.Authorization/*/Write**, and **Microsoft.Authorization/elevateAccess/Action**. These restricted permissions prevent users assigned with “Role1” from performing role assignments or modifications, including the ability to assign “Role1” to other users.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

---

### Question 33

You have the following custom role-based access control (RBAC) role.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“Users that are assigned Role1 can deploy new virtual machines.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is the **correct** answer here. The custom role “Role1” includes Microsoft.Compute/virtualMachines/* in the allowed actions section, which grants permission to perform all actions on virtual machines, including creating, updating, deleting, starting, restarting, and powering off virtual machines. This wildcard (*) in Microsoft.Compute/virtualMachines/* effectively allows users assigned with “Role1” to deploy new virtual machines.

Therefore, users assigned with “Role1” can deploy new virtual machines.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

---

### Question 34

You have the following custom role-based access control (RBAC) role.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“Users that are assigned Role1 can set a static IP address on a virtual machine.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is the **correct** answer here. The custom role “Role1” includes **Microsoft.Network/networkInterfaces/*** in the allowed actions, which grants users permissions to manage network interfaces, including the ability to set IP configurations on them. This permission allows users assigned “Role1” to configure settings such as static IP addresses on the network interface associated with a virtual machine.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

---

### Question 36

You have an Azure subscription that contains the hierarchy shown below.

You create an Azure Policy definition named Policy1.

Which Azure resources can you specify as exclusions from Policy1?

**Options:**

- **A.** VM1 only
- **B.** RG1 and VM1 only
- **C.** Subscription1, RG1, and VM1 only
- **D.** ManagementGroup1, Subscription1, RG1, and VM1 only ✅
- **E.** Tenant Root Group, ManagementGroup1, Subscription1, RG1, and VM1

**Correct answer:** D

**Explanation:**

**ManagementGroup1, Subscription1, RG1, and VM1 only** is **correct** because when assigning a policy, you can exclude resources at any level in the hierarchy, including management groups, subscriptions, resource groups, and individual resources. Exclusions are designed to provide flexibility in policy enforcement by allowing specific resources or groups to be excluded from a policy’s scope.

**Tenant Root Group** cannot be excluded from policy assignments. Exclusions are applicable to management groups, subscriptions, resource groups, and individual resources only.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/governance/policy/concepts/assignment-structure

- https://learn.microsoft.com/en-us/azure/governance/policy/overview

---

### Question 37

You have an Azure Storage account that contains 5,000 blobs accessed by multiple users.
You need to ensure that the users can view only specific blobs based on blob index tags.
What should you include in the solution?

**Options:**

- **A.** a stored access policy
- **B.** a role assignment condition ✅
- **C.** just-in-time (JIT) VM access
- **D.** a shared access signature (SAS)

**Correct answer:** B

**Explanation:**

a role assignment condition is correct because role assignment conditions in Azure can enforce granular access control based on blob index tags. By using conditions in role assignments, you can ensure that users are restricted to viewing only the blobs that match specific index tags. This is an advanced Azure Role-Based Access Control (RBAC) feature designed for fine-grained access control scenarios.
a stored access policy is incorrect because stored access policies are used in conjunction with Shared Access Signatures (SAS) to manage shared access over time, but they cannot enforce access based on blob index tags.
just-in-time (JIT) VM access is incorrect because JIT VM access is designed to provide temporary access to virtual machines and has no relevance to blob access control or index tags.
a shared access signature (SAS) is incorrect because while SAS can provide temporary access to blobs, it cannot enforce blob index tag-based conditions for granular access control.
Reference(s):
https://learn.microsoft.com/en-us/azure/role-based-access-control/conditions-custom-security-attributes
https://docs.microsoft.com/en-us/azure/role-based-access-control/conditions-overview
https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-index-how-to
https://docs.microsoft.com/en-us/azure/security-center/just-in-time-explained

---

### Question 38

You plan to deploy several Azure virtual machines that run Windows Server 2022 in a virtual machine scale set by using an Azure Resource Manager template.
You need to ensure that NGINX is available on all the virtual machines after they are deployed.
What should you use? (Choose 2)

**Options:**

- **A.** a Desired State Configuration (DSC) extension ✅
- **B.** Azure Application Insights
- **C.** the Publish-AzVMDscConfiguration cmdlet ✅
- **D.** the New-AzConfigurationAssignment cmdlet

**Correct answer:** A, C

**Explanation:**

a Desired State Configuration (DSC) extension is the correct answer because the DSC extension allows you to define a desired state configuration for virtual machines in a scale set. This configuration can include installing and configuring software like NGINX on all virtual machines automatically after deployment.
the Publish-AzVMDscConfiguration cmdlet is also correct because this cmdlet is used to upload and publish a DSC configuration script to an Azure storage account. This script can then be used by the DSC extension to ensure NGINX is installed and configured on the virtual machines in the scale set.
Azure Application Insights is incorrect because Application Insights is a monitoring service used to track application performance and detect issues. It does not install or configure software like NGINX on virtual machines.
the New-AzConfigurationAssignment cmdlet is incorrect because this cmdlet is used to assign configurations in Azure Policy for governance, not for installing or configuring software on virtual machines.
Reference(s):
https://learn.microsoft.com/en-us/azure/virtual-machines/extensions/dsc-overview
https://learn.microsoft.com/en-us/powershell/module/az.compute/publish-azvmdscconfiguration?view=azps-13.0.0
https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview
https://learn.microsoft.com/en-us/powershell/module/az.maintenance/new-azconfigurationassignment?view=azps-13.0.0

---

### Question 40

You have a Microsoft Entra tenant named contoso.com.

You have two external partner organizations named fabrikam.com and litwareinc.com. Fabrikam.com is configured as a connected organization.

You create an access package as shown in the Access package exhibit.

You configure the external user lifecycle settings as shown in the Lifecycle exhibit

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“Litwareinc.com users can be assigned to package1.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is the **correct** answer here. The access package package1 is configured to allow access requests from “All configured connected organizations.” Based on the information given, only fabrikam.com is set up as a connected organization. Since litwareinc.com is not configured as a connected organization, users from litwareinc.com are **not** eligible to be assigned to package1.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/active-directory/governance/entitlement-management-access-package-resources#add-a-group-or-team-resource-role

- https://learn.microsoft.com/en-us/azure/active-directory/governance/entitlement-management-external-users

---

### Question 47

You have a Microsoft Entra tenant named contoso.onmicrosoft.com that contains the users shown in the following table.

You enable password reset for contoso.onmicrosoft.com as shown in the Password Reset exhibit.

You configure the authentication methods for password reset as shown in the Authentication Methods exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“If User1 forgets her password, she can reset the password by using the mobile phone app.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because User1 is a member of Group1, and self-service password reset (SSPR) has been enabled only for Group2. Since User1 is not part of Group2, she does not have access to the self-service password reset feature, regardless of the authentication methods configured.

**Reference(s):**

- https://learn.microsoft.com/en-us/entra/identity/authentication/tutorial-enable-sspr

- https://learn.microsoft.com/en-us/entra/identity/authentication/passwords-faq

---

### Question 49

You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1.
A user named User1 has the following roles for Subscription1:
Reader
Security Admin
Security Reader
You need to ensure that User1 can assign the Reader role for VNet1 to other users.
What should you do?

**Options:**

- **A.** Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1.
- **B.** Remove User1 from the Security Reader and Reader roles for Subscription1.
- **C.** Assign User1 the User Access Administrator role for VNet1. ✅
- **D.** Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.

**Correct answer:** C

**Explanation:**

Assign User1 the User Access Administrator role for VNet1 is the correct answer because the User Access Administrator role allows a user to manage user access to resources, including assigning RBAC roles such as Reader to other users. While User1 already has the Reader, Security Admin, and Security Reader roles, none of these roles grant the ability to assign RBAC roles to other users. Assigning the User Access Administrator role at the scope of VNet1 ensures that User1 has the necessary permissions to assign roles without granting broader privileges at the subscription or resource group level, adhering to the principle of least privilege.
Removing User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1 is incorrect because the Contributor role allows managing resources but does not grant role assignment capabilities.
Removing User1 from the Security Reader and Reader roles for Subscription1 is incorrect because simply removing existing roles does not grant any permissions for role assignment.
Removing User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1 is incorrect because the Contributor role at the resource group level (RG1) does not allow assigning roles for VNet1.
Reference(s):
https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles
https://learn.microsoft.com/en-us/azure/role-based-access-control/role-definitions
https://learn.microsoft.com/en-us/azure/role-based-access-control/overview

---

### Question 52

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution.
You have a Microsoft Entra tenant named Adatum.com and an Azure Subscription named Subscription1. Adatum.com contains a group named Developers. Subscription1 contains a resource group named Dev.
You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.
Solution: On Dev, you assign the Logic App Operator role to the Developers group.
Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No is correct because the Logic App Operator role allows users to perform runtime operations on logic apps, such as triggering, enabling, disabling, and viewing runs and history. However, it does not provide the permissions required to create, update, or delete logic apps. This means that assigning the Logic App Operator role to the Developers group does not fulfill the requirement to allow them to create Azure Logic Apps.
Reference(s):
https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#logic-app-operator

---

### Question 53

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution.
You have a Microsoft Entra tenant named Adatum.com and an Azure Subscription named Subscription1. Adatum.com contains a group named Developers. Subscription1 contains a resource group named Dev.
You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.
Solution: On Subscription1, you assign the DevTest Labs User role to the Developers group.
Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No is correct because the DevTest Labs User role allows users to connect to, start, restart, and shut down virtual machines in Azure DevTest Labs. It does not provide permissions to create Azure Logic Apps. The ability to create Logic Apps requires a role such as Logic App Contributor or Contributor, which explicitly includes permissions for managing logic apps. Therefore, assigning the DevTest Labs User role does not meet the stated requirement.
Reference(s):
https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#devtest-labs-user

---

## Practice Set 8

Source: https://skillcertpro.com/az-104-exam-questions/8/

### Question 2

You have an Azure subscription that contains eight virtual machines and the resources shown in the following table.

You need to configure access for VNET1. The solution must meet the following requirements:

- The virtual machines connected to VNET1 must be able to communicate with the virtual machines connected to VNET2 by using the Microsoft backbone.

- The virtual machines connected to VNET1 must be able to access storage1, storage2, and Azure AD by using the Microsoft backbone.

What is the minimum number of service endpoints you should add to VNET1?

**Options:**

- **A.** 1 ✅
- **B.** 2
- **C.** 3
- **D.** 5

**Correct answer:** A

**Explanation:**

**1** is **correct** because we can use 1 service endpoint for all storage accounts deployed in the same region. Apart from this, the service endpoint is not needed for Azure AD, because VMs accessing Azure AD users (e.g., for user management, authentication, or authorization purposes) relies on Azure AD’s authentication and authorization mechanisms, and it doesn’t require a service endpoint. Azure AD is a cloud-based identity and access management service that operates independently of a VNet’s service endpoints.

Setting up a service endpoint for Azure AD can be advantageous in specific situations, like when VMs require secure access to Azure AD-related APIs. However, it’s not mandatory for VMs to connect with Azure AD users or entities.

While it’s possible to use two service endpoints for two separate storage accounts, the question asks for the least number of endpoints necessary.

**Reference(s):**

- https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-service-endpoints-overview

- https://docs.microsoft.com/en-us/azure/storage/common/storage-network-securit

- https://docs.microsoft.com/en-us/azure/key-vault/general/network-security

---

### Question 10

You have an Azure subscription that contains a Recovery Services vault named Vault1.

You need to enable multi-user authorization (MAU) for Vault1.

Which resource should you create first?

**Options:**

- **A.** an administrative unit
- **B.** a managed identity
- **C.** a resource guard ✅
- **D.** a custom Azure role

**Correct answer:** C

**Explanation:**

**a resource guard** is **correct** because enabling Multi-User Authorization (MAU) in a Recovery Services vault requires creating a resource guard. A resource guard protects critical operations (such as disabling soft delete or stopping backup) by requiring additional authorization from designated approvers. The resource guard enforces MAU by ensuring operations cannot proceed without explicit approval from specified users or groups.

**an administrative unit** is **incorrect** because administrative units are used for grouping Azure AD resources and delegating administrative tasks, not for securing critical Recovery Services vault operations.

**a managed identity** is **incorrect** because managed identities are used to securely authenticate services with Azure resources, not for enabling or managing MAU in a Recovery Services vault.

**a custom Azure role** is **incorrect** because, while custom roles may provide granular permissions, they are not required to enable MAU. The primary requirement for MAU is the creation of a resource guard.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/storage/blobs/encryption-scope-manage?tabs=portal

---

### Question 12

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution.**

You have a Microsoft Entra tenant named Adatum.com and an Azure Subscription named Subscription1. Adatum.com contains a group named Developers. Subscription1 contains a resource group named Dev.

You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.

**Solution**: On Dev, you assign the Logic App Contributor role to the Developers group.

Does this meet the goal?

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes** Explanation: This is correct. The **Logic App Contributor role** grants permissions to create and manage Logic Apps within the assigned scope (in this case, the Dev resource group). Assigning this role to the Developers group ensures they can create Logic Apps while following the principle of least privilege.

### Incorrect

**Option B. No** Incorrect. Saying “No” would be wrong because the Logic App Contributor role is specifically designed to allow creation and management of Logic Apps. Therefore, the solution does meet the goal.

---

### Question 30

You have an Azure App Service app named WebApp1 that contains two folders named Folder1 and Folder2.

You need to configure a daily backup of WebApp1. The solution must ensure that Folder2 is excluded from the backup.

What should you use to exclude Folder2?

**Options:**

- **A.** A _backup.filter file ✅
- **B.** A backup policy
- **C.** A lock
- **D.** A WebJob

**Correct answer:** A

**Explanation:**

**A _backup.filter file** is the **correct** answer because, in Azure App Service, you can exclude specific files or folders from a backup by creating a _backup.filter file in the root directory of the app. This file allows you to specify any files or folders that should be excluded from the backup, such as Folder2.

**A backup policy** is **incorrect** because Azure App Service does not use backup policies to exclude specific folders; it relies on the _backup.filter file.

**A lock** is **incorrect** because locks are used to prevent accidental modification or deletion of resources, not to control backup contents.

**A WebJob** is **incorrect** because WebJobs are used to run background tasks in Azure App Service, not to manage backup configurations or exclusions.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/app-service/manage-backup

---

### Question 34

You have the role assignment file shown in the following exhibit.

Based on the information presented, select the answer choice that completes the following statement correctly.

**“____________________________ can create a virtual machine in RG1.”**

**Options:**

- **A.** User1 and User4 ✅
- **B.** User1, User2, and User3
- **C.** User1, User2, and User4
- **D.** User1, User3, and User4
- **E.** User1, User2, User3, and User4

**Correct answer:** A

**Explanation:**

**User1 and User4** is **correct** because creating a virtual machine in RG1 requires permissions at the RG1 level or higher within the subscription.

- User1 has the Owner role at the subscription level, which grants full access to manage resources within the entire subscription, including RG1.

- User4 has the Contributor role specifically on RG1, which allows them to manage resources within RG1, including creating and deleting virtual machines. However, as a Contributor, User4 cannot modify Role-Based Access Control (RBAC) settings.

**User2** is **incorrect** because their Owner role is limited to RG2, and they do not have permissions in RG1.

**User3** is **incorrect** because their Owner role applies only to VM1, so they do not have permissions to create new resources in RG1.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

- https://learn.microsoft.com/en-us/azure/role-based-access-control/rbac-and-directory-admin-roles

---

### Question 35

You have a Microsoft Entra tenant named adatum.com that contains the groups shown in the following table.

Adatum.com contains the users shown in the following table.

You assign the Microsoft Entra ID P2 license to Group1 and User4.

Which users are assigned the Microsoft Entra ID P2 license?

**Options:**

- **A.** User4 only
- **B.** User1 and User4 only ✅
- **C.** User1, User2, and User4 only
- **D.** User1, User2, User3, and User4

**Correct answer:** B

**Explanation:**

**User1 and User4 only** is **correct** because group-based licensing in Microsoft Entra ID does not support nested groups. When a license is assigned to Group1, only the direct members of Group1 receive the license. This means User1 (direct member of Group1) and User4 (who received the license directly) are the only users assigned the Microsoft Entra ID P2 license. User2 and User3 do not receive the license because they are members through nested groups (Group2 and Group3).

**Reference(s):**

- https://learn.microsoft.com/en-us/entra/identity/users/licensing-group-advanced#limitations-and-known-issues

---

### Question 40

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution.**

You have a Microsoft Entra tenant named Adatum.com and an Azure Subscription named Subscription1. Adatum.com contains a group named Developers. Subscription1 contains a resource group named Dev.

You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.

**Solution**: On Dev, you assign the Contributor role to the Developers group.

Does this meet the goal?

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is **correct** because assigning the **Contributor** role to the Developers group at the Dev resource group level allows the group members to manage all resources within the resource group, including the ability to create Azure Logic Apps. The Contributor role provides full access to manage resources without granting permissions to assign roles or manage access, which fulfills the requirement stated in the question.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#contributor

---

### Question 44

You have a Microsoft Entra tenant that contains the users shown in the following table.

You need to perform the following tasks:

- Create an attribute named Property1.

- Ensure that Admin1 can assign Property1 to User1.

Which **two** settings should you configure on the Microsoft Entra ID blade?

**Options:**

- **A.** Custom security attributes ✅
- **B.** Roles and administrators ✅
- **C.** External Identities
- **D.** Administrative units
- **E.** Application proxy
- **F.** Microsoft Entra Connect

**Correct answer:** A, B

**Explanation:**

**Custom security attributes** is **correct** because this setting allows you to create custom attributes, such as Property1, which can then be assigned to users within Microsoft Entra ID.

**Roles and administrators** is **correct** because it is necessary to configure roles and administrators to ensure that Admin1 has the permissions needed to assign Property1 to User1. The User Administrator role provides Admin1 with permissions to manage user accounts, which would include the assignment of custom security attributes.

**External Identities** is **incorrect** because this setting is used for managing external users and does not relate to configuring or assigning custom attributes within the tenant.

**Administrative units** is **incorrect** because administrative units are used to delegate administrative permissions over subsets of users, groups, or devices, not for configuring custom attributes.

**Application proxy** is **incorrect** as it is used to allow secure access to on-premises applications, unrelated to custom attributes or roles.

**Microsoft Entra Connect** is **incorrect** because it is a tool used to synchronize on-premises AD with Microsoft Entra ID and is not involved in configuring custom attributes or role assignments.

**Reference(s):**

- https://learn.microsoft.com/en-us/entra/fundamentals/whatis

---

### Question 3

You have an Azure Storage account named storage1.

You have Azure App Service apps named App1 and App2 that run in an Azure container instance. Each app uses a managed identity.

You need to ensure that App1 and App2 can read blobs from storage1. The solution must meet the following requirements:

- Minimize the number of secrets used.

- Ensure that App2 can only read from storage1 for the next 30 days.

What should you configure in storage1 for **App1**?

**Options:**

- **A.** Access keys
- **B.** Advanced security
- **C.** Access control (IAM) ✅
- **D.** Shared access signatures (SAS)

**Correct answer:** C

**Explanation:**

The most appropriate configuration for App1 in storage1 is **Access control (IAM)**.

Here’s why:

**Access control (IAM):**

Using IAM roles is the best practice for granting permissions to Azure resources, especially when dealing with managed identities.

It eliminates the need for managing secrets, which aligns with the requirement to minimize the number of secrets used.

You can assign the “Storage Blob Data Reader” role to App1’s managed identity, granting it read access.

Here’s why the other options are less suitable:

**Access keys:**

Access keys are secrets and should be avoided when managed identities are available. They provide broad access to the storage account, which is not ideal for least privilege.

**Advanced security:**

Advanced security features, like Azure Defender for Storage, do not directly grant read access to blobs.

**Shared access signatures (SAS):**

While SAS tokens can grant access, they are secrets and require management.

While SAS tokens are used for granting time limited access, as required for app2, IAM is the best option for app1.

Therefore, IAM is the most secure and efficient way to grant App1 read access to storage1.

**Access keys** is **incorrect** because access keys provide full access to the storage account, which does not align with the principle of least privilege and involves using secrets.

**Advanced security** is **incorrect** because, while it enhances security features, it doesn’t specifically manage read access for apps with managed identities.

**Shared access signatures (SAS)** is **incorrect** because SAS tokens require managing secrets and don’t provide direct access duration management like RBAC. SAS tokens are less secure for managed identity-based access.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/role-based-access-control/overview

- https://learn.microsoft.com/en-us/azure/azure-resource-manager/managed-applications/publish-managed-identity#granting-access-to-azure-resources

---

### Question 8

You have an Azure subscription that contains the resources shown in the following table.

You need to assign User1 the Storage File Data SMB Share Contributor role for share1.

What should you do first?

**Options:**

- **A.** Enable identity-based data access for the file shares in storage1.
- **B.** Modify the security profile for the file shares in storage1.
- **C.** Select Default to Azure Active Directory authorization in the Azure portal for storage1.
- **D.** Configure Access control (IAM) for share1. ✅

**Correct answer:** D

**Explanation:**

### Correct

**Option D. Configure Access control (IAM) for share1**

- Correct because assigning the **Storage File Data SMB Share Contributor** role requires configuring **Access Control (IAM)** at the scope of the file share (share1).

- This ensures User1 has the necessary permissions to read, write, and delete files/directories in the SMB share.

- IAM role assignment is the first step before User1 can access the share with Azure AD credentials.

### Incorrect

**Option A. Enable identity‑based data access for the file shares in storage1**

- Incorrect because enabling identity‑based access is a prerequisite for Azure AD authentication, but it does not itself assign the role.

- The question asks specifically about assigning the role, which is done through IAM.

**Option B. Modify the security profile for the file shares in storage1**

- Incorrect because “security profile” is not a configurable option for Azure Storage file shares.

- Security is managed through IAM and Azure AD, not a separate profile.

**Option C. Select ****Default to Azure Active Directory authorization**** in the Azure portal for storage1**

- Incorrect because while enabling Azure AD authorization is necessary for identity‑based access, it does not assign the **Storage File Data SMB Share Contributor** role.

- Role assignment must still be done via IAM.

---

### Question 10

You have a Microsoft Entra tenant.

You need to ensure that when a new Microsoft 365 group is created, the group name is automatically formatted as follows:

&lt;Department&gt; &lt;Group Name&gt;

Which three actions should you perform in sequence in the Microsoft Entra admin center?

ACTIONS

1. Set Add suffix to Attribute.

2. Create a group naming policy.

3. Set Add prefix to Attribute.

4. Set Add suffix to String.

5. Set Add prefix to String.

6. Set Select type to Department.

7. Customize the company branding.

**Options:**

- **A.** 2-6-5
- **B.** 2-3-6 ✅
- **C.** 2-5-6
- **D.** 2-6-4

**Correct answer:** B

**Explanation:**

To ensure that a new Microsoft 365 group name is automatically formatted as &lt;Department&gt; &lt;Group Name&gt;, you need to perform the following actions in sequence in the Microsoft Entra admin center:

**Correct Sequence:**

- **Create a group naming policy** (Action 2):

This is the first step because you need to define a naming policy for groups before configuring prefixes or suffixes.

- **Set Add prefix to Attribute** (Action 3):

After creating the naming policy, you need to set the prefix to an attribute. In this case, the attribute will be the Department.

- **Set Select type to Department** (Action 6):

This step ensures that the prefix is dynamically populated with the department name when the group is created.

**Details:**

- **Action 2 (Create a group naming policy):**

This is the foundational step. Without a naming policy, you cannot enforce any naming conventions for groups.

- **Action 3 (Set Add prefix to Attribute):**

This ensures that the prefix is based on an attribute (e.g., department) rather than a static string.

- **Action 6 (Set Select type to Department):**

This specifies that the attribute to be used for the prefix is the Department.

**Incorrect Options:**

- **Action 1 (Set Add suffix to Attribute):**

This is incorrect because the requirement is to add the department as a prefix, not a suffix.

- **Action 4 (Set Add suffix to String):**

This is incorrect because the requirement is to use the department as a prefix, not a suffix, and it should be an attribute, not a static string.

- **Action 5 (Set Add prefix to String):**

This is incorrect because the prefix should be based on the Department attribute, not a static string.

- **Action 7 (Customize the company branding):**

This is unrelated to group naming policies and is used for customizing the login page or company logo.

The correct sequence of actions is:

**2 → 3 → 6**

(Create a group naming policy → Set Add prefix to Attribute → Set Select type to Department).

**Reference(s):**

https://learn.microsoft.com/en-us/entra/identity/users/groups-naming-policy

---

### Question 14

Your company‘s compliance requirements mandate that you retain backups for a specific duration. How can you configure retention policies in Azure Backup to ensure that backups are stored for the required period?

**Options:**

- **A.** C. Define the “Retention range“ in the Azure Backup policy. ✅
- **B.** B. Use Azure Policy to enforce backup retention rules.
- **C.** D. Configure the storage account‘s lifecycle management policy.
- **D.** A. Set the “Backup frequency“ in the Azure Backup policy.

**Correct answer:** A

**Explanation:**

**Correct Answer:**

**C. Define the “Retention range“ in the Azure Backup policy:**

This is the correct way to configure retention. Within the Azure Backup policy, you define the retention range for your backups. This range specifies how long backups should be kept (e.g., days, weeks, months, years). This is the primary mechanism for controlling how long backups are retained.

In Azure Backup, the Retention range setting within a Backup policy allows administrators to define how long backups should be stored. This includes daily, weekly, monthly, and yearly retention options to meet compliance requirements.

**Incorrect Answers:**

**A. Set the “Backup frequency“ in the Azure Backup policy:**

Backup frequency determines how often backups are taken (e.g., daily, weekly). It does not directly control how long those backups are kept. You could take daily backups but only retain them for a week, or take weekly backups and retain them for a year. Frequency and retention are separate settings.

**B. Use Azure Policy to enforce backup retention rules:**

Azure Policy can be used to audit compliance with backup policies (including retention), but it doesn’t directly set the retention policy itself. You still configure the retention within the Backup policy; Azure Policy can then check if that policy meets your organization’s requirements. It’s about checking compliance, not setting the retention.

Azure Policy is used to enforce organizational standards and compliance across Azure resources, but it does not directly configure retention policies for Azure Backup. Retention policies are configured within the Azure Backup service itself.

**D. Configure the storage account‘s lifecycle management policy:**

Storage account lifecycle management is for managing the lifecycle of blobs within a storage account (moving them between tiers, deleting them after a certain period). It’s not used for managing the retention of backups created by Azure Backup. Backups are stored in Recovery Services vaults, not directly in storage accounts.

---

### Question 17

You have a Microsoft Entra tenant.

You need to create a Microsoft 365 group that contains only members of a marketing department in France.

You need to complete the dynamic membership rule.

What should you choose for **Dropdown 1**?

**Options:**

- **A.** device.managementType
- **B.** device.organizationalUnit
- **C.** user.department ✅
- **D.** user.usageLocation

**Correct answer:** C

**Explanation:**

**user.department** is **correct** because the requirement is to create a group that contains members from a specific department, in this case, the marketing department. The user.department attribute in dynamic membership rules is used to filter users based on their department property.

**Reference(s):**

- https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-membership

---

### Question 21

You have an Azure subscription named Sub1 that contains the Azure resources shown in the following table.

You assign an Azure policy that has the following settings:

- Scope: Sub1

- Exclusions: Sub1/RG1/VNET1

- Policy definition: Append a tag and its value to resources

- Policy enforcement: Enabled

- Tag name: Tag4

- Tag value: value4

You assign tags to the resources as shown in the following table.

For the statement below, select Yes if the statement is true. Otherwise select No.

**“VNET1 has the Tag2:IT and Tag3:value2 tags assigned only.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because VNet1 originally has Tag3: value2 and there will be no action performed on it via policy because of the exclusion mentioned in the policy definition, so there will not be any addition of a tag. Hence it will just have only one tag.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources

- https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-policies

---

### Question 26

You have a Microsoft Entra tenant.

You need to create a Microsoft 365 group that contains only members of a marketing department in France.

You need to complete the dynamic membership rule.

What should you choose for **Dropdown 2**?

**Options:**

- **A.** and ✅
- **B.** or
- **C.** typeof

**Correct answer:** A

**Explanation:**

**and** is **correct** because you want to include users who meet both criteria: being in the marketing department and being located in France. Using “and” ensures that both conditions must be true for a user to be included in the dynamic membership.

**Reference(s):**

- https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-membership

---

### Question 34

**A company has two applications, **skillcertlabappA** and **skillcertlabAppB**.** skillcertlabappA** is deployed to an Azure Web App and uses a Managed Identity.** **Which authentication method should be used for secure communication between the applications?**

**Options:**

- **A.** A. CORS
- **B.** B. Access Keys
- **C.** C. Shared Access Signatures
- **D.** D. Managed Identity ✅

**Correct answer:** D

**Explanation:**

### Correct

**Option D. Managed Identity**

- Correct because **Managed Identity** is the recommended way for Azure resources (like Web Apps) to securely authenticate and access other Azure services without storing credentials in code.

- It provides token‑based authentication via Azure AD, eliminating the need for secrets or keys.

- This directly satisfies the requirement for secure communication between applications in Azure.

### Incorrect

**Option A. CORS**

- Incorrect because **Cross‑Origin Resource Sharing (CORS)** is a browser security feature that controls which domains can call APIs.

- It does not provide authentication or secure identity management between applications.

**Option B. Access Keys**

- Incorrect because **Access Keys** (like those for Storage Accounts) are static secrets.

- Using them increases the risk of credential leakage and does not align with best practices for secure communication between Azure services.

**Option C. Shared Access Signatures (SAS)**

- Incorrect because SAS tokens are used to grant limited access to storage resources.

- They are not the right mechanism for authenticating communication between applications in this scenario.

---

### Question 42

A company has setup an Azure subscription and a tenant. They want to ensure that only Virtual Machines of a particular SKU size can be launched in their Azure account.

They decide to implement Role Based access policies

Does this fulfil the requirement?

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

✅ **No.**

While **Azure Role-Based Access Control (RBAC)** is a powerful tool for managing access to Azure resources, it primarily focuses on controlling who can perform what actions on Azure resources. RBAC allows you to grant permissions to users, groups, and service principals to create, manage, and delete virtual machines, networks, storage accounts, etc.

However, **RBAC alone cannot directly restrict the specific SKU sizes** that users are allowed to deploy for virtual machines. RBAC operates at a broader level of resource management actions.

To enforce restrictions on VM SKU sizes, you would typically need to use **Azure Policy**. Azure Policy allows you to define rules and enforce configurations across your Azure environment. You can create a policy that specifically restricts the allowed VM SKUs within a subscription or resource group.

For more information on role-based access control, please visit the below URL

https://docs.microsoft.com/en-us/azure/role-based-access-control/overview

---

### Question 43

A company is planning on using Azure for the various services they offer. They want to ensure that they can bill each department for the resources they consume. They decide to use Azure role-based access control to separate the bills department wise.

Would this fulfil the requirement?

**Options:**

- **A.** A.Yes
- **B.** B.No ✅

**Correct answer:** B

**Explanation:**

✅ No 

Azure RBAC is used to manage access to Azure resources, controlling who can perform what actions on specific resources (e.g., read, write, delete).

It is not used for billing or tracking costs per department.

To track and bill usage per department, resource tagging, Azure Cost Management + Billing, and management groups/subscriptions/resource groups segmentation should be used.

➡️ So, RBAC doesn’t provide billing separation or cost tracking, making this the correct answer.

For more information on Role based access control, please visit the below URL

https://docs.microsoft.com/en-us/azure/role-based-access-control/overview

---

### Question 50

You have setup a computer named skillcertlabclient1 that has a point-to-site VPN connection to an Azure virtual network named skillcertlabnetwork. The point-to-site connection makes use of a self-signed certificate. You now have to establish a point-to-site VPN connection to the same virtual network from another computer named skillcertlabclient2. The VPN client configuration package is downloaded and installed on the skillcertlabclient2 computer.

You decide to join the skillcertlabclient2 computer to Azure AD

Would this fulfil the requirement?

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

**B. No**

Here’s why:

**Self-signed certificates and VPN connections:** Point-to-site VPN connections using self-signed certificates require the client computer to trust the certificate. This trust is established by installing the certificate on the client computer.

**Azure AD join:** Joining the skillcertlabclient2 computer to Azure AD primarily handles authentication and authorization for Azure resources. It does not automatically install or configure the necessary self-signed certificate for the point-to-site VPN connection.

**VPN client configuration package:** The VPN client configuration package will contain the necessary settings for the VPN connection, but it will not automatically trust a self-signed certificate. That is a task that must be done manually on each machine that will use the VPN.

Therefore, joining the skillcertlabclient2 computer to Azure AD will not automatically establish the point-to-site VPN connection. You must install the self-signed certificate on the skillcertlabclient2 computer.

https://docs.microsoft.com/en-us/azure/vpn-gateway/point-to-site-about

---

### Question 4

You have an Azure subscription named Subscription1 that contains the following resource group:

- Name: RG1

- Region: West US

- Tag: “tag1”: “value1”

You assign an Azure policy named Policy1 to Subscription1 by using the following configurations:

- Exclusions: None

- Policy definition: Append a tag and its value to resources

- Assignment name: Policy1

- Parameters:

- Tag name: tag2

- Tag value: value2

After Policy1 is assigned, you create a storage account that has the following configurations:

- Name: storage1

- Region: West US

- Resource group: RG1

- Tags: “tag3”: “value3”

Which tags are assigned to storage1?

**Options:**

- **A.** “tag3“ : “value3“ only
- **B.** “tag1“ : “value1“ and “tag3“ : “value3“ only
- **C.** “tag2“ : “value2“ and “tag3“ : “value3“ only ✅
- **D.** “tag1“ : “value1“, “tag2“ : “value2“, and “tag3“ : “value3“

**Correct answer:** C

**Explanation:**

**“tag2” : “value2” and “tag3” : “value3” only** is the **correct** answer here. Tags are not inherited automatically from a resource group or subscription to the resources within them. However, in this case, Policy1 was applied to Subscription1 with the definition to append a specific tag to all new resources created in this subscription. The policy was configured with Exclusions: None and parameters Tag name: “tag2” and Tag value: “value2”. This means that all resources created after this policy assignment will automatically have “tag2” : “value2” appended.

When storage1 was created in RG1 after the policy was assigned, it had “tag3” : “value3” specified. Since Policy1 was already in effect, “tag2” : “value2” was appended to storage1 due to the policy, resulting in storage1 having the tags “tag2” : “value2” and “tag3” : “value3” only.

**“tag3” : “value3” only** is **incorrect** because the policy enforces **“tag2” : “value2”** on all new resources in the subscription.

**“tag1” : “value1” and “tag3” : “value3” only** is **incorrect** because **“tag1” : “value1”** is assigned only to **RG1** and does not get inherited by resources within the group.

**“tag1” : “value1”, “tag2” : “value2”, and “tag3” : “value3”** is **incorrect** because **storage1** does not inherit **“tag1” : “value1”** from **RG1**.

**Reference(s):**

- https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/tag-policies

- https://docs.microsoft.com/en-us/azure/governance/policy/concepts/effects#append

---

### Question 6

You have two Azure virtual machines as shown in the following table.

You create the Azure DNS zones shown in the following table.

You perform the following actions:

- To fabrikam.com, you add a virtual network link to vnet1 and enable auto registration.

- For contoso.com, you assign vm1 and vm2 the Owner role.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“The DNS A record for vm1 is added to contoso.com and has the IP address of 131.107.50.20.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**Correct:****Option B**

The DNS A record for vm1 is not added to contoso.com because Azure automatically creates DNS records only when a Private DNS zone is linked to a virtual network with auto-registration enabled.• Auto-registration is enabled only for fabrikam.com, not for contoso.com.• Assigning the Owner role to vm1 and vm2 on contoso.com affects permissions only and has no effect on DNS record creation.• Without a virtual network link and auto-registration, Azure will not create an A record for vm1 in contoso.com, regardless of its IP address.

**Incorrect:****Option A**

This option assumes that an A record for vm1 is automatically added to contoso.com. That assumption is incorrect because:• contoso.com does not have auto-registration enabled.• Role assignments (Owner role) do not trigger DNS record creation.• Azure Private DNS requires explicit virtual network linking with auto-registration for automatic A records.

---

### Question 7

Case Study: GlobalMantics’ Cloud Expansion and Optimization

(Note: There are multiple questions in this test based on this case study.)

GlobalMantics, a multinational retail company, is actively expanding its online presence and modernizing its existing Azure infrastructure. Their current resources and strategic goals are outlined below:

Existing Resources:

- E-Commerce Web App: Hosted on Azure App Service, this application frequently experiences unpredictable traffic spikes and performance slowdowns during peak periods.

- Inventory Management System: A legacy .NET application currently runs on Azure Virtual Machines (VM01-VM04) within a single Availability Set.

- Customer Database: An Azure SQL Database manages sensitive customer data and has high IOPS (Input/Output Operations Per Second) requirements.

- Data Lake: Azure Data Lake Storage Gen2 is utilized for storing extensive volumes of unstructured sales and marketing data.

Strategic Goals:

- Enhance the scalability and reliability of the e-commerce web app.

- Modernize and improve the availability of the inventory management system.

- Ensure robust data security and compliance for the customer database.

- Optimize costs across all deployed Azure resources.

Question:

To effectively optimize costs across all Azure resources, which strategy should GlobalMantics adopt?

**Options:**

- **A.** Use Azure Cost Management to identify and optimize underutilized resources.
- **B.** Enable Azure Policy to enforce cost-saving configurations.
- **C.** All of the above. ✅
- **D.** Purchase Azure Reserved Instances for all VMs.

**Correct answer:** C

**Explanation:**

All listed strategies contribute to cost optimization in Azure: Azure Reserved Instances: Provide significant discounts for VMs when committing to a one- or three-year term. Azure Cost Management: Offers tools to analyze spending patterns, identify optimization opportunities, and set budgets and alerts. Azure Policy: Enables the enforcement of cost-saving configurations across subscriptions and resource groups, such as shutting down VMs during non-business hours.

---

### Question 8

Your organization is implementing Azure Bastion to enhance the security of RDP/SSH connections to Azure VMs. What are the key benefits and features of using Azure Bastion for secure remote access?

**Options:**

- **A.** Eliminates the need for public IP addresses on VMs ✅
- **B.** Provides a web-based RDP/SSH experience in the Azure portal ✅
- **C.** Supports multi-factor authentication (MFA) for added security ✅
- **D.** Provides secure RDP/SSH access over SSL ✅
- **E.** Seamless integration with Azure Active Directory (AAD) ✅

**Correct answer:** A, B, C, D, E

**Explanation:**

**Correct:**

**A.** Eliminates the need for public IP addresses on VMs

**B.** Provides a web-based RDP/SSH experience in the Azure portal

**C.** Supports multi-factor authentication (MFA) for added security

**D.** Provides secure RDP/SSH access over SSL

**E.** Seamless integration with Azure Active Directory (AAD)

Azure Bastion deploys as a PaaS service in a dedicated VNet subnet (AzureBastionSubnet /27 minimum), enabling RDP/SSH connectivity to private VMs without public IPs, reducing attack surface from internet scans and brute force on ports 3389/22. Browser-based access via Azure portal uses HTML5 web client over TLS 1.2 on port 443, traversing firewalls securely without client software, VPNs, or jump hosts. MFA integrates via Azure AD (Entra ID) conditional access policies applied at Bastion RBAC level, while sessions remain encrypted end-to-end. Native AAD authentication/authorization centralizes identity management with just-in-time access controls.

All options represent key Azure Bastion features tested in Microsoft Azure Administrator exams for secure remote access implementation. No incorrect options provided; this multi-select question validates comprehensive understanding of Bastion’s security model replacing traditional bastion hosts.

---

### Question 9

You have an Azure subscription that contains the storage accounts shown in the following table. You plan to use **AzCopy** to copy a blob from container1 directly to share1. You need to identify which authentication method to use when you use AzCopy. Which authentication method would you use for **storage2**?

You plan to use AzCopy to copy a blob from container1 directly to share1. You need to identify which authentication method to use when you use AzCopy.

Which authentication method would you use for “**storage2**”?

**Options:**

- **A.** A. OAuth
- **B.** B. Anonymous
- **C.** C. A storage account access key
- **D.** D. A shared access signature (SAS) token ✅

**Correct answer:** D

**Explanation:**

### Correct

**Option D. A shared access signature (SAS) token**

For **Azure Files** (like share1 in storage2), AzCopy requires either a **storage account key** or a **SAS token**. Since the question specifies storage2 and the scenario involves secure delegated access, the correct method is a **SAS token**. This allows temporary, scoped access to the file share without exposing the full account key.

### Incorrect

**Option A. OAuth**

- Incorrect because AzCopy does not support OAuth directly for Azure Files. OAuth is used for Azure AD authentication in some services, but not for this scenario.

**Option B. Anonymous**

- Incorrect because Azure Files does not allow anonymous access. Authentication is always required.

**Option C. A storage account access key**

- Incorrect in this context because while access keys can be used, the question specifically points to **storage2** where SAS is the recommended method for secure delegated access.

---

### Question 10

You have an Azure subscription named Sub1 that contains the blob containers shown in the following table.

Sub1 contains two users named User1 and User2. Both users are assigned the Reader role at the Sub1 scope.

You have a condition named **Condition1** as shown below.

You have a condition named **Condition2** as shown below.

You assign roles to User1 and User2 as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User1 can read blob3.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A: Yes**

- Correct because User1 has the **Reader role at the subscription scope**, which grants read access to all resources within the subscription, including blob containers and their contents.

- Even if conditions are applied at lower scopes, the Reader role at the subscription level ensures User1 can read blob3.

- Therefore, the statement “User1 can read blob3” is **true**.

### Incorrect

**Option B: No**

- Incorrect because denying read access would contradict the permissions inherited from the Reader role at the subscription scope.

- Unless an explicit **Deny assignment** is configured (which is rare in Azure RBAC), User1 retains read access.

###

---

### Question 13

Your company is adopting infrastructure as code (IaC) practices for Azure resource management.

How can you utilize Azure Resource Manager templates or other IaC tools to define and deploy your Azure infrastructure consistently and repeatedly?

**Options:**

- **A.** Store ARM templates in Azure DevOps repositories and use Azure Pipelines for automated deployment across different environments. ✅
- **B.** Define resource configurations in ARM templates, then manually deploy them through the Azure portal for each environment.
- **C.** Ignore IaC and manually create resources in the Azure portal for flexibility.
- **D.** Use Terraform to create and manage infrastructure in AWS, not Azure.

**Correct answer:** A

**Explanation:**

Infrastructure as Code (IaC) and Azure Policy Enforcement

Infrastructure as Code (IaC) in Azure

Infrastructure as Code (IaC) practices in Azure primarily involve the use of:

ARM templates: Declarative JSON files that define infrastructure configurations.

CI/CD pipelines: Tools such as Azure Pipelines automate deployment and infrastructure provisioning across environments.

Azure Policy Overview

Azure Policy enables you to enforce governance by creating rules that evaluate resources and determine compliance. Policy definitions are authored in JSON format.

Example: Azure Policy Definition to Enforce Tags

{

“mode”: “All”,

“policyRule”: {

“if”: {

“allOf”: [

{

“field”: “type”,

“equals”: “Microsoft.Compute/virtualMachines”

},

{

“not”: {

“field”: “tags[‘Environment’]”,

“in”: [“Production”, “Staging”, “Development”]

}

},

{

“not”: {

“field”: “tags[‘CostCenter’]”,

“exists”: true

}

}

]

},

“then”: {

“effect”: “deny”

}

},

“parameters”: {}

}

Explanation of Policy Elements

mode: "All"Evaluates the policy against all resource types.

policyRule:Contains the logic to evaluate resources.

if:

Checks if the resource is a virtual machine:type = Microsoft.Compute/virtualMachines

Verifies that the Environment tag is missing or not within the allowed values (Production, Staging, Development).

Ensures the CostCenter tag exists.

then:

If any of the conditions fail, the effect is "deny", blocking the creation or update of the non-compliant resource.

Available Policy Effects

Effect
Description

deny
Blocks the creation or update of non-compliant resources.

audit
Logs non-compliance but does not block the resource.

append
Automatically adds missing tags or properties.

modify
Replaces or adjusts existing properties (e.g., tag values).

---

### Question 17

**Case Study: Contoso Ltd.’s Azure Storage Optimization**

(Note: There are multiple questions in this test based on this case study.)

Contoso Ltd., a medium-sized manufacturing company, recently migrated its on-premises infrastructure to Azure. The company is now focused on optimizing its storage solution to achieve better performance, cost-efficiency, and scalability.

Current Environment:

Contoso currently leverages Azure Blob Storage to store various file types, including logs, backups, and images. They are using a single general-purpose v2 storage account configured with Locally Redundant Storage (LRS) in the East US region. Application logs are frequently accessed for analysis, while backups are accessed less often. The company aims to minimize costs while upholding high availability and durability for their data.

Requirements:

- Optimize Storage: Tailor the storage solution for different data types, balancing performance with cost-efficiency.

- High Availability: Ensure frequently accessed data remains highly available, even during a regional outage.

- Cost-Effectiveness: Implement a cost-effective storage tier for data accessed infrequently.

- Minimal Overhead: Minimize the management overhead associated with the storage solution.

Security Requirements:

- Encryption: Protect sensitive data (e.g., backups) with robust encryption, both at rest and in transit.

- Access Restriction: Limit access to storage accounts to only authorized users and applications.

- Monitoring &amp; Auditing: Monitor and audit access to storage accounts for security and compliance.

- Data Protection: Implement measures to prevent accidental deletion of critical data.

Question:

To prevent accidental deletion of critical data in the storage accounts, which of the following features would you recommend Contoso enable?

**Options:**

- **A.** Azure Backup
- **B.** Azure Policy
- **C.** Soft delete for blobs ✅
- **D.** Blob versioning ✅

**Correct answer:** C, D

**Explanation:**

Both soft delete for blobs and blob versioning are essential features to prevent accidental deletion of critical data and provide the flexibility to recover previous versions of files.

Soft delete for blobs: This feature allows you to recover blobs (and their versions) that have been deleted, within a retention period that you specify. This is a safety net against accidental or malicious deletion.

Blob versioning: This feature keeps multiple versions of a blob, allowing you to restore a previous version if needed. This is useful if a file is accidentally overwritten or corrupted.

---

### Question 25

You have the Azure management groups shown in the following table:

You add Azure subscriptions to the management groups as shown in the following table:

You create the Azure policies shown in the following table:

Please evaluate the following statement if it’s True or False:

You can create a virtual network in Subscription1.

**Options:**

- **A.** TRUE
- **B.** FALSE ✅

**Correct answer:** B

**Explanation:**

First, let’s have a complete view over the setup:

Azure Policy establishes conventions for resources. Policy definitions describe resource compliance conditions and the effect to take if a condition is met. In this scenario, a Policy has been applied at the Tenant Root Group and this is the Not Allowed Resource Types policy, which restricts creating any virtual networks.

Where does this policy apply? At what level or scope in the Azure hierarchy? Once the policy is applied at the Tenant Root Group,  so this is the assignment, the policy assignment is inherited by all child resources. If a policy assignment is applied to a resource group, it’s applicable to all the resources in that resource group. In this case, being applied at ROOT level, it’s inherited by all child resources: management groups, subscriptions, resource groups and resources.

It really doesn’t matter that the Allowed Resource Types policy is applied on Management Group 12, it has no effect. The most restrictive policy always wins, so a virtual network deployment is not allowed anywhere in the presented Azure hierarchy.

So now, the statement to evaluate: You can create a virtual network in Subscription1. This action will be denied, so the statement is False. The error in Azure portal would look like this:

Reference:

https://docs.microsoft.com/en-us/azure/governance/policy/overview

Quick Preview:

---

### Question 27

You have an Azure subscription that contains a user named User1. You need to ensure that User1 can deploy virtual machines and manage virtual networks. The solution must use the principle of least privilege.

Which role-based access control (RBAC) role should you assign to User1?

**Options:**

- **A.** Owner
- **B.** Virtual Machine Contributor
- **C.** Contributor ✅
- **D.** Virtual Machine Administrator Login

**Correct answer:** C

**Explanation:**

Owner

Full control over resources, including RBAC assignments.

❌ Too many privileges — not least privilege.

Virtual Machine Contributor

Can manage VMs only, but cannot manage virtual networks.

❌ Insufficient — fails requirement #2.

Contributor

Can create and manage all Azure resources (VMs, VNets, etc.).

Cannot assign RBAC roles.

✅ Correct choice — satisfies both VM + VNet management with least privilege.

Virtual Machine Administrator Login

Grants login rights to VMs (RDP/SSH), not management of Azure resources.

❌ Not relevant.

Virtual Machine Contributor: Lets you manage virtual machines, but not access to them, and not the virtual network or storage account they’re connected to.

And because the requirement is to manage Virtual Machines and Virtual Networks, the unique RBAC Role satisfying the requirement is Contributor.

Reference:

https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

Quick Preview:

---

### Question 28

Scenario:

You have recently provisioned a new Azure subscription that includes a user account named Admin1.

Problem:

Admin1 attempted to deploy an Azure Marketplace resource using an Azure Resource Manager (ARM) template via Azure PowerShell. The deployment failed, and the following error message was received:

“User failed validation to purchase resources. Error message: ‘Legal terms have not been accepted for this item on this subscription. To accept legal terms, please go to the Azure portal (http://go.microsoft.com/fwlink/?LinkId=534873) and configure programmatic deployment for the Marketplace item or create it there for the first time.'”

Requirement:

You need to enable Admin1 to successfully deploy the Marketplace resource.

Question:

What action should you take to resolve this issue?

**Options:**

- **A.** From Azure PowerShell, run the Set-AzApiManagementSubscription cmdlet
- **B.** From the Azure portal, register the Microsoft.Marketplace resource provider
- **C.** From Azure PowerShell, run the Set-AzMarketplaceTerms cmdlet ✅
- **D.** From the Azure portal, assign the Billing administrator role to Admin1

**Correct answer:** C

**Explanation:**

**Managing Azure Marketplace Terms**

To accept the legal terms for a given publisher ID (Publisher), offer ID (Product), and plan ID (Name), run the Set-AzMarketplaceTerms cmdlet in Azure PowerShell.

Before accepting, you can review the agreement terms by using the Get-AzMarketplaceTerms cmdlet.

For more detailed information, please refer to the official Microsoft documentation: https://docs.microsoft.com/en-us/powershell/module/az.marketplaceordering/set-azmarketplaceterms?view=azps-4.1.0

**Incorrect:**

- Running Set-AzApiManagementSubscription: This cmdlet is used to modify existing API Management subscription details, not to accept Marketplace terms.

- Registering the Microsoft.Marketplace resource provider from the Azure portal: While resource provider registration is necessary for certain Azure services, it doesn’t directly facilitate the acceptance or rejection of specific Marketplace legal terms.

- Assigning the Billing administrator role to Admin1 from the Azure portal: This action assigns a billing role, which is not required for accepting Marketplace terms.

---

### Question 32

A company has setup an Azure subscription and a tenant. They want to ensure that only Virtual Machines of a particular SKU size can be launched in their Azure account.

They decide to implement Azure policies

Does this fulfil the requirement?

**Options:**

- **A.** A. Yes ✅
- **B.** B. No

**Correct answer:** A

**Explanation:**

Yes, this can be done with Azure policies. There is also already an in-built policy which can implement this policy as shown below

For more information on an example on this, please visit the below URL

https://docs.microsoft.com/en-us/azure/governance/policy/samples/allowed-skus-storage

---

### Question 34

You have an Azure subscription that contains the following users in an Azure Active Directory tenant named preparationlabs.onmicrosoft.com:

User1 creates a new Azure Active Directory tenant named external.preparationlabs.onmicrosoft.com.

You need to create new user accounts in external.preparationlabs.onmicrosoft.com.

Solution: You instruct User3 to create the user accounts.

Does that meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

**Why correct:** When a new Azure AD tenant is created, only the **Global Administrator** of that tenant (in this case, **User1**) has the rights to create new user accounts by default. Other users from the original tenant (like **User3**) do not automatically gain permissions in the new tenant. Unless User1 explicitly assigns User3 a role such as **User Administrator** or **Global Administrator** in **external.preparationlabs.onmicrosoft.com**, User3 cannot create accounts there.

### Incorrect

**Option A. Yes** **Why incorrect:** This assumes User3 already has the necessary permissions in the new tenant. However, by default, User3 does not have administrative rights in **external.preparationlabs.onmicrosoft.com**. Without being assigned a role, User3 cannot perform this task.

###

---

### Question 39

Scenario: Azure Tenant and Directory Management

A company has:

An Azure subscription

An Azure Active Directory (AAD) tenant named:skillcertlabs.onmicrosoft.com

**Users Defined in the Tenant:**

Name
Role
Scope

skillcertlabusr1
Global Administrator
Azure Active Directory

skillcertlabusr2
Global Administrator
Azure Active Directory

skillcertlabusr3
User Administrator
Azure Active Directory

skillcertlabusr4
Owner
Azure Subscription

The user skillcertlabusr1 (Global Administrator) creates a new directory named:staging.skillcertlabs.onmicrosoft.com

The organization now requires new user accounts to be created in the newly created directory.

**Request:**

The company asks skillcertlabusr1 to create the user accounts in the new tenant.

**Question:**

Would skillcertlabusr1 be able to fulfill this requirement?

**Options:**

- **A.** A. Yes ✅
- **B.** B. No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes** Explanation: This is correct. In Azure AD, a **Global Administrator** has full access to all administrative features in Azure Active Directory and across Azure services. This role can manage subscriptions, assign roles, and configure resources. Therefore, if the requirement is to perform administrative tasks at the subscription level, the Global Administrator can indeed meet the requirement.

### Incorrect

**Option B. No** Explanation: This is incorrect. Saying “No” would imply that the Global Administrator does not have sufficient privileges, which is not true. The Global Administrator role is the highest-level role in Azure AD and provides the necessary permissions to meet the requirement.

---

### Question 40

You need to create a custom Azure Policy definition to enforce specific tagging requirements for Azure resources.

How would you define the policy rule using Azure Policy language to ensure that resources are tagged with specific key-value pairs?

**Options:**

- **A.** Use Azure PowerShell to create and apply tagging policies.
- **B.** Use JSON to define the policy rule, including the required tag keys and values, and specify the “effect“ as “deny“ if resources are not tagged correctly. ✅
- **C.** Use Azure Resource Manager templates to define the tagging requirements.
- **D.** Use Azure Blueprints to package and deploy the tagging policy.

**Correct answer:** B

**Explanation:**

To define a Policy Rule using JSON, you can structure it as follows:

**More Details:**

- mode: This property is set to "All" to ensure the policy evaluates all resource types within its assigned scope.

- policyRule: This object encapsulates the core logic of the policy.

- if: This condition block defines the criteria for when the policy should be triggered.

- The first condition checks if the resource type is a Virtual Machine (Microsoft.Compute/virtualMachines).

- The second condition ensures that the ‘Environment’ tag either does not exist or its value is not one of the allowed options (“Production”, “Staging”, “Development”).

- The third condition verifies that the ‘CostCenter’ tag exists on the resource.

- then: This block specifies the action to be taken when the if conditions are met.

- The effect is set to "deny", which means that any attempt to create or update a Virtual Machine that does not comply with these tagging requirements will be blocked.

**2. Specify the “effect” (or other actions):**

The effect property in an Azure Policy rule dictates the action that Azure takes when a resource is non-compliant. Common effects include:

- deny: Blocks the creation or update of non-compliant resources, preventing them from being provisioned or modified in a way that violates the policy.

- audit: Logs a warning in the Azure Activity Log when a resource is non-compliant. This allows for monitoring and reporting of non-compliance without blocking operations.

- append: Adds the specified tags or settings to a resource if they are missing during creation or update. This is often used to enforce consistent tagging.

- modify: Replaces existing tag values or properties with the ones specified in the policy. This can be used to standardize or correct existing resource configurations.

- deployIfNotExists: Deploys a specified resource or template if a condition is not met. This is useful for automatically remediating non-compliant resources.

- disabled: Disables the policy assignment, effectively making it inactive without deleting it.

**Key Points:**

- Azure Policy utilizes aliases for tag names and values. It is crucial to refer to the official Azure documentation to find the correct alias for each resource type and property.

- You can leverage a variety of operators within your policy rules, such as equals, not, in, like, match, and more, to construct complex and precise tagging requirements.

- Parameters can be used to make your policy definitions more flexible and reusable across different assignments or environments.

**Additional Considerations:**

- Policy Initiatives: Consider grouping related policy definitions together into policy initiatives. This simplifies assignment and management of multiple policies that collectively enforce a set of standards.

- Regular Review and Updates: It’s essential to regularly review and update your policies to ensure they remain relevant and effective as your organizational requirements and Azure environment evolve.

- Azure Resource Graph (ARG): Utilize Azure Resource Graph (ARG) to query for resources that are not compliant with your policies. This powerful tool allows for efficient auditing and reporting of policy compliance across your subscriptions.

By carefully defining your Azure Policy rules and using the appropriate effects, you can enforce consistent tagging standards across your Azure environment, leading to better resource management, cost allocation, and security posture.

---

### Question 42

You are tasked with implementing a network security solution to protect your Azure VNets from common web attacks like SQL injection and cross-site scripting. Which Azure service is designed for this purpose?

**Options:**

- **A.** Azure DDoS Protection
- **B.** Azure Bastion Host
- **C.** Azure Web Application Firewall (WAF) ✅
- **D.** Azure Firewall

**Correct answer:** C

**Explanation:**

**Correct:**

**Option C.** Azure Web Application Firewall (WAF)

Azure Web Application Firewall (WAF) provides Layer 7 protection specifically designed for common web attacks including SQL injection, cross-site scripting (XSS), and OWASP Top 10 threats. Deployed on Application Gateway, Front Door, or CDN, WAF inspects HTTP/HTTPS traffic using managed rule sets (OWASP CRS, DRS) with detection/prevention modes. Microsoft Azure Administrator (AZ-104) exams test WAF as the dedicated service for application-layer security beyond network firewalls.

**Incorrect:**

**Option A.** Azure DDoS Protection

DDoS Protection defends against volumetric Layer 3/4 attacks (UDP floods, SYN floods) using network-level mitigation, not application-layer threats like SQL injection or XSS requiring HTTP payload inspection.

**Option B.** Azure Bastion Host

Bastion provides secure RDP/SSH access to VMs over TLS without public IPs, addressing management plane security, not web application runtime protection from injection attacks.

**Option D.** Azure Firewall

Azure Firewall offers Layer 3-7 network firewalling with FQDN filtering and NAT, but lacks OWASP rule sets for SQLi/XSS; requires separate WAF for application-layer web attack protection.

---

### Question 43

**A company has the following resources:**

- A file share named **skillcertlabshare** in an Azure storage account.

- The file share contains a file named **skillcertlab1.txt**.

- An **Azure File Sync Service** resource.

**Statement:** “User1 can resize VM1.” Select **Yes** or **No**.

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because resizing a VM requires **Contributor‑level permissions** (or higher) on the resource group or subscription where the VM resides.

- The scenario describes resources related to **Azure File Sync and storage**, not VM role assignments.

- Since User1 does not have the necessary role assignment for VM1, the statement is false.

### Incorrect

**Option A. Yes**

- Incorrect because User1 does not have the required permissions to resize VM1.

- Without a role such as **Virtual Machine Contributor** or **Contributor** on the resource group containing VM1, resizing is not possible.

###

---

### Question 45

**Azure Multi-Factor Authentication and Conditional Access Policy Scenario**

A team has configured multi-factor authentication (MFA) for three users as follows:

**User Name**
**Multi-Factor Authentication Status**

skillcertlabusr1
Disabled

skillcertlabusr2
Enforced

skillcertlabusr3
Enabled

All these users have been added to a single group. A Conditional Access policy has been created that enforces the use of multi-factor authentication for this group across all cloud-based applications.

Question:

Given this setup, would skillcertlabusr2 be required to use multi-factor authentication when signing into Azure via a web browser?

**Options:**

- **A.** A.Yes ✅
- **B.** B.No

**Correct answer:** A

**Explanation:**

The different scenarios based on the user state is given in the Microsoft documentation. If the user state is in the Enforced state, then the user will need to use MFA for the login process

For more information on MFA user states, please visit the below URL

https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-userstates

---

### Question 48

A team has enabled multi-factor authentication for 3 users as shown below:

**User Name**
**Multi-factor authentication status**

skillcertlabusr1
Disabled

skillcertlabusr2
Enforced

skillcertlabusr3
Enabled

A group has been created and all users have been added as part of the group. You create a conditional access policy which enforces the use of multi-factor authentication for the group for all cloud-based applications.

Would **skillcertlabusr3** be required to use multi-factor authentication when signing into Azure via the web browser?

**Options:**

- **A.** A.Yes ✅
- **B.** B.No

**Correct answer:** A

**Explanation:**

The different scenarios based on the user state is given in the Microsoft documentation. If the user state is in the enabled state, then the user will need to use MFA for the login process after the registration is complete.

For more information on MFA user states, please visit the below URL

https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-userstates

---

### Question 51

A company has the following set of servers that need to be migrated to an Azure subscription:

**Name**
**Operating System**
**Configuration**

skillcertproer1
Windows Server 2012 R2
Domain Controller

skillcertproer2
Windows Server 2016
Microsoft SQL Server 2016

skillcertproer3
Red Hat Linux Enterprise 7.5
File Server

The company decides to use the Azure Site Recovery tool to move the servers to Azure.

Would this fulfill the requirement?

**Options:**

- **A.** A.Yes
- **B.** B.No ✅

**Correct answer:** B

**Explanation:**

**B. No, Azure Site Recovery would not fulfill the requirement for all servers in this scenario.**

Here’s why:

**Skillcertproer1 (Domain Controller):** Azure Site Recovery primarily supports replicating and recovering **virtual machines (VMs)** to Azure. While it can potentially replicate physical servers, it’s not designed for migrating Domain Controllers due to their complex dependencies and Active Directory synchronization requirements. A dedicated solution like Azure Migrate is recommended for domain controller migration.

**Skillcertproer2 (Microsoft SQL Server 2016):** Azure Site Recovery supports migrating SQL Server VMs, but it’s important to ensure compatibility with the specific version and configuration. Additionally, migrating production databases requires careful planning and considerations beyond replication. Additional tools or processes might be needed for a successful migration.

**Skillcertproer3 (Red Hat Linux Enterprise 7.5 File Server):** Azure Site Recovery supports migrating Linux VMs, including Red Hat Enterprise 7.5. However, it’s crucial to ensure proper configuration and application compatibility in the Azure environment.

Therefore, while Azure Site Recovery might be suitable for migrating some servers, it’s not a one-size-fits-all solution for all scenarios, especially considering Domain Controllers and complex database migrations.

Here are some alternative solutions to consider based on the specific server details:

**Domain Controller:** Azure Migrate or manual migration with active directory synchronization.

**SQL Server:** Azure Migrate, Azure Database Migration Service, or manual migration with careful planning and testing.

**Linux File Server:** Azure Site Recovery with proper configuration and application compatibility testing.

---

### Question 53

**Azure Virtual Network Management Scenario**

Your company has an Azure account and an Azure subscription. A Virtual Network named skillcertpro-net has been created.

The following users have been configured:

**User Name**
**Role**

skillcertpro-usr1
Owner

skillcertpro-usr2
Security Admin

skillcertpro-usr3
Network Contributor

Question:

**Which of these users would be able to add a subnet to the skillcertpro-net Virtual Network**?

**Options:**

- **A.** A. skillcertpro-usr1 only
- **B.** B. skillcertpro-usr2 only
- **C.** C. skillcertpro-usr3 only
- **D.** D. skillcertpro-usr1 and skillcertpro-usr2 only
- **E.** E. skillcertpro-usr1 and skillcertpro-usr3 only ✅
- **F.** F. skillcertpro-usr2 and skillcertpro-usr3 only

**Correct answer:** E

**Explanation:**

### Correct

**Option E. skillcertpro-usr1 and skillcertpro-usr3 only**

**Reasoning:**

- In Azure, **Owners** and **Contributors** can manage resources such as Virtual Networks.

- **Owners** have full access, including the ability to assign roles.

- **Contributors** can create and manage resources but cannot assign roles.

- **Readers** can only view resources and cannot make changes.

- Based on the scenario, skillcertpro-usr1 (Owner) and skillcertpro-usr3 (Contributor) are the ones who can manage the virtual network.

**Exam Key Point:** Resource management requires **Owner or Contributor** role assignments.

### Incorrect

**Option A. skillcertpro-usr1 only**

- Incorrect because while usr1 (Owner) can manage, usr3 (Contributor) also has management rights.

- This option ignores the Contributor role.

**Option B. skillcertpro-usr2 only**

- usr2 is a Reader, which only allows viewing resources.

- Readers cannot manage or modify resources.

**Option C. skillcertpro-usr3 only**

- Incorrect because while usr3 (Contributor) can manage, usr1 (Owner) also has management rights.

- This option ignores the Owner role.

**Option D. skillcertpro-usr1 and skillcertpro-usr2 only**

- Incorrect because usr2 (Reader) cannot manage resources.

- Only usr1 and usr3 have management rights.

**Option F. skillcertpro-usr2 and skillcertpro-usr3 only**

- Incorrect because usr2 (Reader) cannot manage resources.

- Only usr3 (Contributor) can, but this option excludes the Owner.

###

---

### Question 54

**Azure Virtual Network Role Assignment Scenario**

Your company has an Azure account and an Azure subscription, including a Virtual Network named skillcertpro-net.

**The following users have been configured:**

**User Name**
**Role**

skillcertpro-usr1
Owner

skillcertpro-usr2
Security Admin

skillcertpro-usr3
Network Contributor

Question:

Which of these users would be able to assign the Reader role to another user for the skillcertpro-net Virtual Network?

**Options:**

- **A.** A. skillcertpro-usr1 only ✅
- **B.** B. skillcertpro-usr2 only
- **C.** C. skillcertpro-usr3 only
- **D.** D. skillcertpro-usr1 and skillcertpro-usr2 only
- **E.** E. skillcertpro-usr1 and skillcertpro-usr3 only
- **F.** F. skillcertpro-usr2 and skillcertpro-usr3 only

**Correct answer:** A

**Explanation:**

The Network Contributor does not have access to assign roles. And if you look at the Security admin role , it only has the privilege to work with Security Center.

For more information on the built-in roles, please go to the below URL

https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

---

### Question 3

Scenario:

Your organization, a rapidly growing tech company, has expanded its Azure environment significantly in the past year. To maintain security, compliance, and cost control, the IT team has decided to implement Azure Policy. You, as the Azure Administrator, are tasked with creating policy definitions that will enforce various rules across the organization‘s Azure subscriptions.

These rules include:

Restricting the allowed resource types that can be deployed

Enforcing specific tagging conventions on resources

Ensuring that all storage accounts use a specific encryption type

Limiting the regions where virtual machines can be created

Preventing public access to storage accounts

You need to choose the right policy definition types to achieve these objectives.

Question:

Given the scenario and the required rules, which Azure Policy definition types would you primarily use to enforce these governance and compliance standards across your organization‘s Azure environment?

**Options:**

- **A.** Built-in policy definitions ✅
- **B.** Policy exemptions
- **C.** Custom policy definitions ✅
- **D.** Initiative definitions only

**Correct answer:** A, C

**Explanation:**

**Correct **

**Option A. Built-in policy definitions**

✅ **Pre-existing Microsoft policies** cover common requirements:

“Allowed resource types” (deny list)

“Allowed locations/regions” for VMs

“Storage accounts should use customer-managed keys”

“Storage accounts should restrict public access”

**Option C. Custom policy definitions**

✅ **Organization-specific rules** requiring custom policies:

**Specific tagging conventions** (company standards)

**Specific encryption type** for storage accounts

Complex combinations of above requirements

**Incorrect **

**Option B. Policy exemptions**

❌ **Bypasses enforcement** – opposite of governance objective.

**Option D. Initiative definitions only**

❌ **Initiatives group policies** but don’t create definitions. Still need underlying policy definitions.

---

### Question 6

You have a Microsoft Entra tenant named contoso.com.

You have two external partner organizations named fabrikam.com and litwareinc.com. Fabrikam.com is configured as a connected organization.

You create an access package as shown in the Access package exhibit.

You configure the external user lifecycle settings as shown in the Lifecycle exhibit

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“After 365 days, fabrikam.com users will be removed from Group1.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- **Correct because**:

- In Microsoft Entra ID Governance, when you configure **external user lifecycle settings** with an expiration period (365 days in this case), external users who were granted access through the access package will automatically have their access revoked after the expiration.

- Since **fabrikam.com** is a connected organization and its users are included in the access package, they will be **removed from Group1 after 365 days**.

### Incorrect

**Option B. No**

- Incorrect because lifecycle settings explicitly enforce expiration.

- Fabrikam.com users will not retain indefinite access; they will be removed once the 365‑day period ends unless reapproved or reassigned.

---

### Question 11

You have an Azure subscription that contains the virtual networks shown in the following table.

The subscription contains the virtual machines shown in the following table.

The subscription contains the Azure App Service web apps shown in the following table.

For the statement below, select Yes if the statement is true. Otherwise select No.

**“NSG1 controls inbound traffic to WebApp1.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**Correct **

**Option B (No):** Microsoft Azure Administrator exams test core networking fundamentals. Network Security Groups (NSGs) control inbound traffic to Azure Virtual Machines and other IaaS resources, but Azure App Service web apps operate on a managed PaaS platform where inbound traffic is controlled by App Service networking features (VNet integration, private endpoints, IP restrictions), not NSGs.

**Incorrect**

**Option A (Yes):** NSGs don’t apply to App Service; attempting to associate an NSG with App Service has no effect on its inbound traffic filtering.

---

### Question 16

You have an Azure subscription that contains a user named User1.

You need to ensure that User1 can deploy virtual machines and manage virtual networks.

The solution must use the principle of least privilege.

Which role-based access control (RBAC) role should you assign to User1?

**Options:**

- **A.** Owner
- **B.** Virtual Machine Contributor
- **C.** Contributor ✅
- **D.** Virtual Machine Administrator Login

**Correct answer:** C

**Explanation:**

**Correct:**

**Option C. Contributor**

The **Contributor** role allows a user to create and manage all Azure resources, including **virtual machines** and **virtual networks**, but does not allow granting access to others. This satisfies the requirement to deploy VMs and manage VNets while still following the principle of least privilege compared to Owner.

**Incorrect:**

**Option A. Owner**

The **Owner** role includes full management permissions plus the ability to assign RBAC roles. This exceeds the required permissions and violates the principle of least privilege.

**Option B. Virtual Machine Contributor**

The **Virtual Machine Contributor** role allows management of virtual machines but does **not** allow managing virtual networks. Since VM deployments typically require network configuration, this role is insufficient.

**Option D. Virtual Machine Administrator Login**

This role only allows users to log in to virtual machines (via SSH or RDP). It does not grant permissions to create or manage VMs or virtual networks.

---

### Question 17

You have an Azure subscription linked to a hybrid Microsoft Entra tenant. The tenant contains the users shown in the following table.

You create the Azure Files shares shown in the following table.

You configure identity-based access for contoso2024 as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User2 can access the content in share3.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**Correct:**

**Option B. No**

User2 cannot access the content in **share3**. With Azure Files identity-based access in a hybrid Microsoft Entra (Azure AD) setup, access depends on both the configured share-level role assignments (RBAC) and the underlying NTFS permissions. Based on the exhibit configuration, User2 is not granted the required permissions for **share3**, so access is denied.

**Incorrect:**

**Option A. Yes**

This would only be correct if User2 had the appropriate Azure Files share-level role (such as Storage File Data SMB Share Reader/Contributor) assigned for **share3** and matching NTFS permissions. Since those permissions are not present in the given configuration, User2 cannot access the share.

---

### Question 18

You have two Azure subscriptions named Sub1 and Sub2. Sub1 is in a management group named MG1. Sub2 is in a management group named MG2.

You have the resource groups shown in the following table.

You have the virtual machines shown in the following table.

You assign roles to users as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User2 can manage disks and disk snapshots of VM1.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**Correct:**

**Option B. No**

User2 cannot manage disks and disk snapshots of VM1. In Azure, role-based access control (RBAC) permissions apply only within the scope at which the role is assigned and any child scopes. Since Sub1 and Sub2 belong to different management groups (MG1 and MG2), permissions assigned in one management group or subscription do not automatically apply to resources in another. Therefore, User2 does not have the required permissions on the subscription, resource group, or VM scope where VM1 resides to manage its disks or snapshots.

**Incorrect:**

**Option A. Yes**

This is incorrect because Azure RBAC does not grant cross-management-group or cross-subscription access unless the role assignment is explicitly scoped at a higher level (such as a parent management group or tenant root) or directly on the target subscription or resource. User2 lacks the necessary scoped permissions to manage VM1 disks and snapshots.

---

### Question 24

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.

Another administrator plans to create several network security groups (NSGs) in the subscription. You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.

Solution: You assign a built-in policy definition to the subscription.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**Correct:**

**Option B. No**

Assigning a built-in Azure Policy definition at the subscription level does not automatically configure NSGs to block a specific TCP port between virtual networks. Built-in policies are typically used to audit, deny, or enforce compliance conditions, not to dynamically create or modify NSG security rules upon resource creation. To automatically block TCP port 8080, you would need a policy with a DeployIfNotExists effect (often custom) or an automated mechanism such as Azure Policy with remediation, Azure Automation, or an Azure Blueprint.

**Incorrect:**

**Option A. Yes**

Simply assigning a built-in policy definition does not meet the requirement because built-in policies do not, by default, inject specific inbound or outbound NSG rules. Without a policy designed to deploy or enforce a deny rule for TCP port 8080, the NSGs created by another administrator would not automatically block that traffic.

---

### Question 25

You need to monitor the resource usage of a specific resource group in Azure. How can you configure Azure Monitor to collect resource usage data for this resource group and set up alerts for cost thresholds?

**Options:**

- **A.** Enable diagnostic settings for each resource in the resource group, sending data to a Log Analytics workspace.
- **B.** Use Azure Advisor recommendations to identify cost optimization opportunities and implement suggested changes.
- **C.** Create an Azure Monitor alert rule targeting the resource group and using metric conditions for cost thresholds. ✅
- **D.** Deploy Azure Cost Management and Billing to analyze cost data and trends for the resource group.

**Correct answer:** C

**Explanation:**

**Correct:**

**Option C. Create an Azure Monitor alert rule targeting the resource group and using metric conditions for cost thresholds**

Azure Monitor allows you to scope alert rules to a **resource group** and evaluate **metrics** across the resources within that group. By defining metric-based alert conditions tied to usage or cost-related metrics, you can proactively monitor resource consumption and trigger alerts when defined thresholds are exceeded. This directly meets the requirement to collect usage data and set up alerts for thresholds.

**Incorrect:**

**Option A. Enable diagnostic settings for each resource in the resource group, sending data to a Log Analytics workspace**

Diagnostic settings collect **logs and metrics** for analysis, but they do not by themselves configure **cost threshold alerts** at the resource group level. This option focuses on data collection rather than alerting on usage or cost.

**Option B. Use Azure Advisor recommendations to identify cost optimization opportunities and implement suggested changes**

Azure Advisor provides **recommendations**, not continuous monitoring or alerting. It cannot be used to configure real-time resource usage collection or cost threshold alerts.

**Option D. Deploy Azure Cost Management and Billing to analyze cost data and trends for the resource group**

Azure Cost Management is useful for **analyzing and reporting** costs, but it is not part of Azure Monitor and does not configure metric-based alerts for real-time resource usage monitoring within Azure Monitor.

---

### Question 27

You plan to automate the deployment of a virtual machine scale set that uses the Windows Server 2016 Datacenter image.

You need to ensure that when the scale set virtual machines are provisioned, they have web server components installed.

Which two actions should you perform?

**Options:**

- **A.** Upload a configuration script ✅
- **B.** Create an automation account
- **C.** Create an Azure policy
- **D.** Modify the extensionProfile section of the Azure Resource Manager template ✅
- **E.** Create a new virtual scale set in the Azure portal

**Correct answer:** A, D

**Explanation:**

### Correct

**Option A: Upload a configuration script** ✓

**Custom Script Extension** runs PowerShell script on VMSS instances during provisioning. Script installs IIS web server components automatically.

**Option D: Modify the extensionProfile section of the ARM template** ✓

**VMSS ARM template** includes extensionProfile with **CustomScriptExtension**. Specifies script URI + commandToExecute for web server installation.

### Incorrect

**Option B: Create an automation account** ❌

**Runbooks for scheduled/orchestrated tasks**. Not for VMSS initial provisioning.

**Option C: Create an Azure policy** ❌

**Compliance/enforcement**. Cannot install software during deployment.

**Option E: Create scale set in Azure portal** ❌

**Manual UI process**. No automation or configuration script capability.

---

### Question 29

You have a critical workload running on Azure VMs. You want to protect these VMs from unexpected deletions or modifications. Which Azure feature can you use to enforce resource locks and prevent accidental changes?

**Options:**

- **A.** Azure Blueprints
- **B.** Azure Resource Locks ✅
- **C.** Azure Policy
- **D.** Azure Backup

**Correct answer:** B

**Explanation:**

**Correct **

**Option B (Azure Resource Locks):** Resource Locks (CanNotDelete or ReadOnly) directly prevent accidental deletion or modification of Azure VMs and other resources at the resource, group, or subscription level.

**Incorrect**

**Option A (Azure Blueprints):** Deploys and manages resource templates consistently; doesn’t prevent runtime deletions/modifications.

**Option C (Azure Policy):** Enforces compliance rules and configurations but cannot block delete/modify operations like locks do.

**Option D (Azure Backup):** Provides data recovery snapshots; offers no protection against resource deletion itself.

---

### Question 30

You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.

Another administrator plans to create several network security groups (NSGs) in the subscription.

You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.

Solution: You create a resource lock, and then you assign the lock to the subscription.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**option B. No**

Resource locks do not apply NSG rules or control traffic between virtual networks upon creation.

### Incorrect

**option A. Yes**

Locks protect resources from changes but have no effect on NSG rule automation or port blocking.

---

### Question 31

A company has just set up an Azure account and subscription. Senior management wants to keep control on costs during the initial deployment of resources. Which of the following can be used to keep costs under control?

**Options:**

- **A.** A. Use the pricing calculator to calculate the costs beforehand.
- **B.** B. Create a budget and then an action group to notify when thresholds are breached. ✅
- **C.** C. Use the Azure Advisor to notify when costs are being breached.
- **D.** D. Use resource tags for all resources

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Create a budget and then an action group to notify when thresholds are breached**

- **Correct** because Azure **Cost Management + Billing** allows you to create **budgets** that track spending against predefined thresholds.

- You can configure **action groups** to send alerts (email, SMS, webhook, etc.) when spending approaches or exceeds the budget.

- This is the recommended way to **actively monitor and control costs** in Azure subscriptions.

- Key exam concept: **Budgets + action groups = proactive cost control.**

### Incorrect

**Option A. Use the pricing calculator to calculate the costs beforehand**

- **Incorrect** because the **Azure Pricing Calculator** is useful for estimating costs before deployment, but it does not provide **ongoing monitoring or alerts** once resources are deployed.

- It helps with planning, not active cost control.

**Option C. Use the Azure Advisor to notify when costs are being breached**

- **Incorrect** because **Azure Advisor** provides **recommendations** for cost optimization (e.g., right‑sizing VMs, reserved instances), but it does not notify when budgets are breached.

- It is advisory, not enforcement.

**Option D. Use resource tags for all resources**

- **Incorrect** because **tags** help with **resource organization and cost allocation** (e.g., by department or project), but they do not enforce or notify about cost thresholds.

- Tags are useful for reporting, not for controlling costs directly.

---

### Question 34

You have a Recovery Service vault that you use to test backups. The test backups contain two protected virtual machines.

You need to delete the Recovery Services vault.

What should you do first?

**Options:**

- **A.** From the Recovery Service vault, delete the backup data.
- **B.** Modify the disaster recovery properties of each virtual machine.
- **C.** Modify the locks of each virtual machine.
- **D.** From the Recovery Service vault, stop the backup of each backup item. ✅

**Correct answer:** D

**Explanation:**

### Correct

**option D.** From the Recovery Service vault, stop the backup of each backup item.

Stops protection and enables vault deletion after data purge.

### Incorrect

**option A.** Delete the backup data.

Requires stopping backup first; data delete follows stop.

**option B.** Modify disaster recovery properties of each virtual machine.

Site Recovery setting, not Backup deletion step.

**option C.** Modify the locks of each virtual machine.

Locks prevent resource deletion but not vault-specific.

---

### Question 48

A company has the following resources deployed to their Azure subscription

The virtual machine “skillcertlabvm” is currently in the running state.

The company now assigns the below Azure policy

The Not Allowed resources types are

Microsoft.Network/virtualNetworks

Microsoft/Compute/virtualMachines

Would the state of the virtual machine change to deallocated?

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

**   Correct **

**     Option:** **B. No**

**Incorrect**

** Option:**  **A. Yes** → Wrong, because Azure Policy does not stop existing running VMs.

---

### Question 52

A company currently has a set of virtual machines created in Azure. They want to ensure that their IT administrative team is alerted if anyone of the virtual machines are shutdown.

They decide to create alerts in the Azure Advisor service.

Would this fulfil the requirement?

**Options:**

- **A.** A.Yes
- **B.** B.No ✅

**Correct answer:** B

**Explanation:**

**Correct **

**Option B. No**

**Why “No” – Technical Limitation:**

text

VM States Monitored by Azure Monitor:

✅ Running → Heartbeat metric ✓

✅ CPU/Memory/Disk metrics ✓

✅ Availability (VM Availability Metric) ✓

❌ Power State transitions (no metric)

**Available Alternatives (Not Standard Alert Rules):**

**1. Activity Log Alerts** (Manual setup required)

text

AzureActivity

| where OperationName == "Stop Virtual Machine"

→ Email/SMS/Logic App notification

**2. VM Insights Heartbeat** (Indirect)

text

Heartbeat table (every 1-5 min)

No heartbeat → VM likely stopped

**3. VM Availability Metric** (Newer)

text

Percentage VM availability over time

Stops → 0% availability alert

**Incorrect **

**Option A. Yes**

❌ **Misleading** – No direct **metric alert rule** exists for VM shutdown. Requires **Activity Log alerts** or **Log Analytics queries**, not simple metric alerts.

---

### Question 54

You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1. Subscription1 has a user named User1. User1 has the following roles:

– Reader

– Security Admin

– Security Reader

You need to ensure that User1 can assign the Reader role for VNet1 to other users.

What should you do?

**Options:**

- **A.** Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.
- **B.** Assign User1 the Owner role for VNet1. ✅
- **C.** Remove User1 from the Security Reader and Reader roles for Subscription1.
- **D.** Assign User1 the Network Contributor role for RG1.

**Correct answer:** B

**Explanation:**

**Correct **

**option B. Assign User1 the Owner role for VNet1.**

Owner role includes Microsoft.Authorization/roleAssignments/write permission, allowing User1 to assign Reader role specifically for VNet1.

**Incorrect **

**option A. Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.**

Contributor lacks role assignment permissions. Security roles don’t block RBAC assignments.

**option C. Remove User1 from the Security Reader and Reader roles for Subscription1.**

Reader/Security Reader roles don’t prevent role assignments. No new permissions granted.

**option D. Assign User1 the Network Contributor role for RG1.**

Network Contributor manages networks but lacks Microsoft.Authorization permissions for role assignments.

---

### Question 55

An IT admin for a company’s Azure account needs to create an Azure Policy. The main purpose of the Azure policy is to ensure that only Load balancers of a certain SKU are allowed to be created in the company’s Azure subscription.

Below is the snippet of the Azure Policy

Which of the following would go into Slot3?

**Options:**

- **A.** A. Allow
- **B.** B. Deny ✅
- **C.** C. Accept
- **D.** D. Create

**Correct answer:** B

**Explanation:**

**Correct **

**Option B. Deny**

**Azure Policy “Deny” effect** prevents creation of Load Balancers with unauthorized SKUs by **blocking deployment** at resource provisioning time.

**Policy Definition Example:**

json

{

  "if": {

    "allOf": [

      {

        "field": "type",

        "equals": "Microsoft.Network/loadBalancers"

      },

      {

        "not": {

          "field": "Microsoft.Network/loadBalancers/sku.name",

          "in": ["Standard"]  // Only allow Standard SKU

        }

      }

    ]

  },

  "then": {

    "effect": "deny"

  }

}

**Incorrect **

**Option A. Allow**

❌ **Does nothing** – “Allow” effect permits all actions (no enforcement).

**Option C. Accept**

❌ **Not a valid Azure Policy effect**.

**Option D. Create**

❌ **Not a valid Azure Policy effect**

---

### Question 3

**Scenario:** You have a **Microsoft Entra tenant**. You need to modify the **Default user role permissions** settings so that:

- Standard users cannot create new **service principals**.

- Standard users can only manage **their own Azure resources** using PowerShell or Microsoft Graph.

**Options:**

- **A.** A. Allow users to reset passwords for others
- **B.** B. Prevent standard users from creating service principals ✅
- **C.** C. Allow users to register security information
- **D.** D. Allow users to join devices to Azure AD
- **E.** E. Restrict standard users to manage only their own resources via PowerShell/Microsoft Graph ✅
- **F.** 6

**Correct answer:** B, E

**Explanation:**

### Correct

**Option B. Prevent standard users from creating service principals**

- Correct because this directly addresses the requirement to stop standard users from creating new service principals.

- Service principal creation is a privileged action, and restricting it ensures tighter control over application identities.

**Option E. Restrict standard users to manage only their own resources via PowerShell/Microsoft Graph**

- Correct because this enforces the principle of least privilege.

- Users can still manage their own resources but cannot affect tenant‑wide or other users’ resources.

- This aligns with the requirement to allow limited self‑management while preventing broader administrative actions.

### Incorrect

**Option A. Allow users to reset passwords for others**

- Incorrect because this setting relates to password management, not service principal creation or resource management.

- It does not help safeguard against unauthorized service principal creation or enforce least privilege.

**Option C. Allow users to register security information**

- Incorrect because this setting controls whether users can register MFA/security info.

- It is unrelated to service principal creation or restricting resource management.

**Option D. Allow users to join devices to Azure AD**

- Incorrect because this setting governs device registration.

- It does not affect service principal creation or user resource management permissions.

**Option F. (6)**

- Incorrect because this is not a valid configuration option.

###

---

### Question 7

You have an Azure subscription named Subscription1 that contains a resource group named RG1.

In RG1, you create an internal load balancer named LB1 and a public load balancer named LB2.

You need to ensure that an administrator named Admin1 can manage LB1 and LB2. The solution must follow the principle of least privilege.

Which role should you assign to Admin1 for adding a health probe to LB2?

**Options:**

- **A.** Contributor on LB2
- **B.** Network Contributor on LB2 ✅
- **C.** Network Contributor on RG1
- **D.** Owner on LB2

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Network Contributor on LB2**

- The **Network Contributor role** grants permissions to manage networking resources, including **load balancers, health probes, and rules**.

- Assigning this role **directly on LB2** ensures Admin1 can manage LB2 without unnecessary access to other resources in RG1.

- This follows the **principle of least privilege** by limiting scope to LB2 only.

- **Correct answer.**

### Incorrect

**Option A. Contributor on LB2**

- The Contributor role provides **broad permissions** (create, delete, manage all resources) on LB2.

- This exceeds the least privilege requirement since Admin1 only needs to manage networking aspects like health probes.

- **Incorrect.**

**Option C. Network Contributor on RG1**

- Assigning at the **RG1 level** gives Admin1 permissions across all networking resources in RG1, not just LB2.

- This violates least privilege by expanding access unnecessarily.

- **Incorrect.**

**Option D. Owner on LB2**

- The Owner role grants **full control**, including role assignments.

- This is excessive for the task of adding a health probe.

- **Incorrect.**

---

### Question 9

You have an Azure subscription that is linked to an Azure AD tenant. The tenant contains two users named User1 and User2.

The subscription contains the resources shown in the following table.

The subscription contains the alert rules shown in the following table.

The users perform the following action:

- User1 creates a new virtual disk and attaches the disk to VM1.

- User2 creates a new resource tag and assigns the tag to RG1 and VM1.

Which alert rule is triggered by **User2**?

**Options:**

- **A.** No alert is triggered
- **B.** Only Alert1 is triggered
- **C.** Only Alert2 is triggered
- **D.** Alert1 and Alert2 are triggered ✅

**Correct answer:** D

**Explanation:**

**Correct**

**Option D. Alert1 and Alert2 are triggered**

because User2’s action of creating a **new resource tag** and assigning it to **RG1 and VM1** matches the conditions defined in both alert rules. In Azure Monitor, resource modification events such as adding or updating tags are captured and can trigger alerts if rules are scoped to those resources. Since RG1 and VM1 are both covered by the alert rules, **both Alert1 and Alert2 will be triggered**.

**Incorrect**

**Option A. No alert is triggered**

because alerts are configured to monitor resource changes, and tagging a resource is considered a modification event. Therefore, saying no alert is triggered is incorrect.

**Option B. Only Alert1 is triggered**

because this assumes only RG1’s tagging event is captured. However, VM1 is also tagged, and Alert2 is scoped to VM1, so both alerts should fire.

**Option C. Only Alert2 is triggered**

because this assumes only VM1’s tagging event is captured. In reality, RG1 is also tagged, and Alert1 is scoped to RG1, so both alerts should fire.

---

### Question 12

**Scenario:** You have an **Azure subscription** with a user named **User1** and a storage account named **storage1**. The storage account contains resources (Table1, container1, folder1, etc.). User1 is assigned the following roles:

- **Storage Blob Data Reader**

- **Storage Table Data Contributor**

- **Storage File Data SMB Share Contributor**

You create a **Shared Access Signature (SAS1)** with specific settings. The question asks: To which resources can User1 write by using SAS1?

###

**Options:**

- **A.** Table1 only ✅
- **B.** Table1 and container1 only
- **C.** folder1 and Table1 only
- **D.** folder1 and container1 only
- **E.** Table1, folder1, and container1

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Table1 only**

- **Correct because**:

- User1 has **Storage Table Data Contributor**, which grants **write permissions** to Azure Table storage.

- The **SAS1** provides access, but effective permissions are the **intersection of SAS and role assignments**.

- For blobs (container1, folder1), User1 only has **Blob Data Reader**, which allows read‑only access.

- For file shares (folder1), User1 has **File Data SMB Share Contributor**, but SAS1 does not grant write permissions to file shares in this scenario.

- Therefore, the only resource User1 can **write to** is **Table1**.

### Incorrect

**Option B. Table1 and container1 only**

- Incorrect because User1 has **read‑only** access to container1 (Blob Data Reader). They cannot write to blobs.

**Option C. folder1 and Table1 only**

- Incorrect because while User1 can write to Table1, folder1 is part of a file share, and SAS1 does not grant write access there.

**Option D. folder1 and container1 only**

- Incorrect because User1 cannot write to either container1 (read‑only) or folder1 (no SAS write permission).

**Option E. Table1, folder1, and container1**

- Incorrect because only Table1 is writable. Including folder1 and container1 is wrong.

###

---

### Question 14

You have an Azure subscription linked to a hybrid Microsoft Entra tenant. The tenant contains the users shown in the following table.

You create the Azure Files shares shown in the following table.

You configure identity-based access for contoso2024 as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User2 can access the content in share2.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

Yes.

To access an Azure File share using identity-based authentication, two layers of permissions must be satisfied:

- 
Share-level permissions: (RBAC roles like Storage File Data SMB Share Contributor).

- 
Directory/File-level permissions: (NTFS/ACLs).

**1. Identity Compatibility**

- 
User2 has “On-premises sync enabled: Yes.” This means User2 is a hybrid identity.

- 
The exhibit shows that Azure AD Kerberos is “Already configured.”

- 
Azure AD Kerberos specifically requires hybrid identities (users synced from AD to Entra ID) to function. Since User2 is synced, they meet the identity requirement for this authentication method.

2. Share-Level Permissions (The Exhibit)

- 
The exhibit shows that for storage account contoso2024, “Step 2: Set share-level permissions” is configured to Enable permissions.

- 
The dropdown selected is Storage File Data SMB Share Contributor.

- 
This setting applies the “Default Share-level Permission” to all authenticated users. Since User2 is an authenticated hybrid user in the tenant, they automatically inherit this share-level role for any share within that storage account (which includes share2).

3. Storage Account Mapping

- 
share2 is located on the storage account contoso2024.

- 
The configuration in the exhibit specifically targets contoso2024. Therefore, the permissions apply to share2.

---

### Question 19

Your network contains an on-premises Active Directory Domain Services (AD DS) domain.

The domain contains the identities shown in the following table.

You have an Azure subscription that contains a storage account named storage1. The file shares in storage1 have an identity source of AD DS and Default share-level permissions set to Enable permissions for all authenticated users and groups.

You create an Azure Files share named share1 that has the roles shown in the following table.

You have a Microsoft Entra tenant that contains a cloud-only user named User3.

You use Microsoft Entra Connect to sync OU1 from the AD DS domain to the Microsoft Entra tenant.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User1 can access content in share1.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- **Correct because**:

- Azure Files with **AD DS authentication** requires that the user identity be part of the **synchronized AD DS domain**.

- User1 is an **on‑premises AD DS identity**, but unless explicitly synced into Microsoft Entra ID and granted access, User1 cannot authenticate to Azure Files.

- The default setting “Enable permissions for all authenticated users” applies only to authenticated identities recognized by the configured identity source.

- Since User1 does not have the required Azure AD/Entra integration for storage1, they cannot access share1.

### Incorrect

**Option A. Yes**

- Incorrect because simply being an AD DS user does not guarantee access. Without proper synchronization and role assignment, User1 cannot authenticate to Azure Files.

---

### Question 21

**Scenario:** You have an **Azure Container Registry (Registry1)** with an image named **image1**. You attempt to deploy an **Azure Container Instance (ACI)** using image1, but the deployment fails because ACI does not have permission to pull the image. The proposed solution is: Enable the Admin user account on Registry1. The question asks: Does this meet the goal while following security best practices?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- **Correct because**:

- Enabling the **Admin user account** allows access with a username/password pair, but this is **not recommended** for production or secure deployments.

- Security best practices recommend using **managed identities** or **service principals** to authenticate ACI with ACR.

- Admin accounts are considered a **legacy feature** and introduce risks (shared credentials, no fine-grained RBAC).

- Therefore, enabling the Admin user account does not meet the goal of following **security best practices**.

### Incorrect

**Option A. Yes**

- Incorrect because while enabling the Admin user account would technically allow ACI to pull the image, it violates **best practices**.

- It uses static credentials instead of secure, identity-based authentication.

---

### Question 22

You have an Azure subscription named Sub1 that contains the Azure resources shown in the following table.

You assign an Azure policy that has the following settings:

- Scope: Sub1

- Exclusions: Sub1/RG1/VNET1

- Policy definition: Append a tag and its value to resources

- Policy enforcement: Enabled

- Tag name: Tag4

- Tag value: value4

You assign tags to the resources as shown in the following table.

For the statement below, select Yes if the statement is true. Otherwise select No.

**“RG1 has the Tag2:IT tag assigned only.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### **Correct**

- **Option B. No**

- Correct: The policy applies at the **subscription level** and appends the tag Tag4:value4 to resources, except those explicitly excluded.

- RG1 is **not excluded** (only VNET1 is excluded), so RG1 will have both its existing tag (Tag2:IT) **and** the appended tag (Tag4:value4).

- Therefore, the statement “RG1 has the Tag2:IT tag assigned only” is **false**.

### **Incorrect**

- **Option A. Yes**

- Incorrect: This assumes RG1 retains only its original tag. In reality, the append policy adds Tag4:value4 to RG1 because it is within scope and not excluded.

---

### Question 24

You have a Microsoft Entra tenant that contains the groups shown in the following table.

You purchase Microsoft Entra ID P2 licenses.

To which groups can you assign a license?

**Options:**

- **A.** Group1 only
- **B.** Group1 and Group3 only
- **C.** Group3 and Group4 only
- **D.** Group1, Group2, and Group3 only ✅
- **E.** Group1, Group2, Group3, and Group4

**Correct answer:** D

**Explanation:**

Correct: D. Group1, Group2, and Group3 only

- 
Group1 (Security | Enabled): Standard security groups are the primary target for group-based licensing. They are designed specifically for managing access and licenses.

- 
Group2 (Mail-enabled security | Enabled): While these groups have email functionality, they are still Security Groups. Entra ID supports license assignment to mail-enabled security groups because they have a Security Enabled attribute.

- 
Group3 (Microsoft 365 | Enabled): Microsoft 365 groups (formerly Office 365 groups) are fully supported for group-based licensing, provided their Security property is set to Enabled (which is the default for M365 groups).

Incorrect:

- 
Group4 (Microsoft 365 | Disabled): This is the “trap” in the question. Even though it is a Microsoft 365 group, the table specifically states Security: Disabled. For a group to receive a license in Entra ID, the securityEnabled property must be set to True. If security is disabled, the group cannot be used for access management or licensing.

- 
Options A, B, and C: these are partially correct but incomplete because they omit Group2. Many students incorrectly assume that “Mail-enabled” groups are for communication only, but as long as they are “Security” type, they can hold licenses.

- 
Option E: This is incorrect because it includes Group4, which lacks the mandatory security-enabled status.

---

### Question 29

You have an Azure subscription named Subscription1 that contains the virtual machines as shown below.

You have created below Azure polices

You have created resource locks as below

Can you create a virtual machine in RG2?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### **Correct **

**option B. No**

- A **Read-only lock** applied at the **resource group level (RG2)** prevents **any modifications** within that resource group.

- This includes creating, updating, or deleting resources.

- Even though the policy allows virtual machines in RG2, the **lock overrides** and blocks creation.

- Therefore, you cannot create a VM in RG2.

### **Incorrect **

**option  A. Yes**

- Incorrect because while the **policy permits VM creation in RG2**, the **read-only lock** on RG2 prevents any new resources from being created.

- Policies define what is allowed or denied, but locks enforce immutability at the resource or resource group level.

---

### Question 37

You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.

Another administrator plans to create several network security groups (NSGs) in the subscription.

You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.

Solution: You configure a custom policy definition, and then you assign the policy to the subscription.

Does this meet the goal?

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- Correct because **Azure Policy** can enforce rules across a subscription.

- By creating a **custom policy definition** that requires NSGs to include a rule blocking TCP port 8080, and assigning it at the **subscription level**, you ensure that every NSG created will comply automatically.

- This meets the requirement of enforcing a consistent security posture across multiple resource groups and virtual networks.

### Incorrect

**Option B. No**

- Incorrect because saying “No” would imply that Azure Policy cannot enforce NSG rules, which is not true.

- Azure Policy is specifically designed to enforce compliance and governance across resources, including NSGs.

---

### Question 43

You have an Azure subscription that contains 100 virtual machines. You regularly create and delete virtual machines. You need to identify unattached disks that can be deleted.

What should you do?

**Options:**

- **A.** From Azure Cost Management, view Cost Analysis
- **B.** From Azure Advisor, modify the Advisor configuration
- **C.** From Microsoft Azure Storage Explorer, view the Account Management properties
- **D.** From Azure Cost Management, view Advisor Recommendations ✅

**Correct answer:** D

**Explanation:**

**Correct**

**Option D. From Azure Cost Management, view Advisor Recommendations** because Azure Advisor provides recommendations to optimize costs, including identifying **unattached disks** that are incurring charges but are no longer associated with any virtual machines. This is the correct way to detect and safely delete unused disks in an Azure subscription.

**Incorrect**

**Option A. From Azure Cost Management, view Cost Analysis** because Cost Analysis shows spending trends and resource costs but does not specifically identify unattached disks. It is useful for monitoring expenses but not for pinpointing unused resources.

**Option B. From Azure Advisor, modify the Advisor configuration** because modifying Advisor configuration changes recommendation settings but does not directly identify unattached disks. The recommendations themselves must be viewed, not the configuration.

**Option C. From Microsoft Azure Storage Explorer, view the Account Management properties** because Storage Explorer is used for managing storage accounts, blobs, and files. It does not provide visibility into unattached managed disks in virtual machines.

---

### Question 47

You have an Azure subscription named Subscription1 that contains the following resource group:

- Name: RG1

- Region: West US

- Tag: “tag1”: “value1”

You assign an Azure policy named Policy1 to Subscription1 by using the following configurations:

- Exclusions: None

- Policy definition: Append a tag and its value to resources

- Assignment name: Policy1

- Parameters:

- Tag name: tag2

- Tag value: value2

After Policy1 is assigned, you create a storage account that has the following configuration:

- Name: storage1

- Location: West US

- Resource group: RG1

- Tags: “tag3”: “value3”

You need to identify which tags are assigned to storage1 resource.

**Options:**

- **A.** "tag3" : "value3" only
- **B.** "tag1" : "value1" and  "tag3" : "value3" only
- **C.** "tag2" : "value2" and  "tag3" : "value3" only ✅
- **D.** "tag1" : "value1", "tag2" : "value2" and "tag3" : "value3"

**Correct answer:** C

**Explanation:**

### **Correct**

**Option C: **"tag2":"value2"** and **"tag3":"value3"** only**

- This is the correct answer.

- The storage account was created with "tag3":"value3".

- The **Append policy** automatically adds "tag2":"value2" to all new resources.

- Resource group tags ("tag1":"value1") are **not inherited** by resources unless explicitly configured with an inherit policy.

- Therefore, storage1 ends up with **two tags**: "tag2":"value2" and "tag3":"value3".

### **Incorrect**

**Option A: **"tag3":"value3" only

- Incorrect because the policy appends "tag2":"value2".

- Storage1 will not have only "tag3".

**Option B: **"tag1":"value1"** and **"tag3":"value3" only

- Incorrect because resource group tags are not automatically inherited.

- "tag1":"value1" will not appear unless an inheritance policy is applied.

**Option D: **"tag1":"value1"**, **"tag2":"value2"**, and **"tag3":"value3"

- Incorrect because "tag1":"value1" from RG1 does not propagate to storage1.

- Only "tag2" (from policy) and "tag3" (manually added) are applied.

---

### Question 53

A company has an Azure subscription that contains the following resource groups

The resource group “skillcertlabs-rg1” contains the following resources

Would you be able to move the resource “skillcertlabstore2090” from the resource group “skillcertlabs-rg1” to “skillcertlabs-rg2”?

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

### No

To move a resource between resource groups, Azure performs a specific validation and execution process. This operation is impacted by the locks on the source resource, the source resource group, and the destination resource group.

While a Delete lock technically allows most “write” operations, a move operation in Azure is treated as a complex multi-step process that involves “deleting” the resource from the source scope and “writing” it to the target scope.

- 
Source Resource Lock: The storage account skillcertlabstore2090 has a Delete lock (skillcertlablock2). For most move operations, a Delete lock at the resource level or resource group level prevents the move because the ARM engine must be able to remove the resource from the source group.

- 
Destination Resource Group Lock: The destination group skillcertlabs-rg2 has a Delete lock (skillcertlablock1). During a move, both the source and destination resource groups are temporarily locked to prevent other modifications. However, the presence of a pre-existing management lock often blocks the move request during the Validation phase.

- 
The “Read-Only” Constraint (The Hidden Trap): Even if we ignored the Delete locks, look at the other resources in the source group. The virtual network skillcertlabnetwork has a Read-only lock. If the storage account has any hidden dependencies or if the move operation triggers a “write” action on the source Resource Group’s metadata, the Read-only lock at the source will block the modification required to finalize the move.

---

### Question 57

You have an Azure subscription named Subscription1 (ID: c276fc76-9cd4-44c9-99a7-4fd71546436e). You are tasked with creating a Custom Azure Role-Based Access Control (RBAC) role named CR1.

The role must satisfy the following requirements:

- 
Scope Limitation: The role must be available for assignment only within the context of Subscription1.

- 
Permission Restriction: The role must explicitly prevent the management of RBAC permissions (Identity and Access Management).

- 
Resource Management: The role must allow full management (Create, Read, Update, Delete) of all other resources within the scope.

Which JSON definition fragment should you use for the AssignableScopes and Actions elements?

**Options:**

- **A.** A. "AssignableScopes": [ "/" ], "Actions": [ "*" ], "NotActions": [ "Microsoft.Authorization/*" ]
- **B.** B. "AssignableScopes": [ "/subscriptions/c276fc76-9cd4-44c9-99a7-4fd71546436e" ], "Actions": [ "*" ], "NotActions": [ "Microsoft.Authorization/*" ] ✅
- **C.** C. "AssignableScopes": [ "/subscriptions/c276fc76-9cd4-44c9-99a7-4fd71546436e" ], "Actions": [ "*" ], "NotActions": [ "Microsoft.Security/*" ]

**Correct answer:** B

**Explanation:**

The correct answer is B.

**Requirements**

To satisfy the requirements of the custom role CR1, we need to evaluate three specific JSON properties:

- AssignableScopes: Limits where the role can be used. It must point specifically to the Subscription ID: /subscriptions/c276fc76-9cd4-44c9-99a7-4fd71546436e.

- Actions: To allow “full management” of all resources, we use the wildcard *.

- NotActions: To “explicitly prevent” the management of RBAC/IAM, we must exclude the Microsoft.Authorization resource provider.

**Option**
**Status**
**Reason**

A
The AssignableScopes is set to "/". This represents the Root Scope, meaning the role would be available across all subscriptions in the tenant, violating Requirement 1.

B
Matches all criteria. It limits the scope to the specific subscription, grants full access via *, and uses NotActions to block Microsoft.Authorization/* (which controls RBAC).

C
The NotActions is set to Microsoft.Security/*. This would prevent managing security settings (like Defender for Cloud) but would still allow the user to manage RBAC permissions, violating Requirement 2.

**Details:** Why Microsoft.Authorization/*?

In Azure, RBAC operations (like role assignments and role definitions) are handled by the Microsoft.Authorization resource provider.

By placing * in Actions and Microsoft.Authorization/* in NotActions, the effective permission is:

“Allow everything EXCEPT the ability to change permissions.”

---

## Practice Set 13

Source: https://skillcertpro.com/az-104-exam-questions/13/

### Question 5

You have a Microsoft Entra tenant that contains the users shown in the following table.

The tenant contains the groups shown in the following table.

Which **groups** can be deleted?

**Options:**

- **A.** Group1 only
- **B.** Group4 only
- **C.** Group1 and Group3 only ✅
- **D.** Group1, Group2, Group3, and Group4

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Group1 and Group3 only**

- **Correct** because in Microsoft Entra ID (Azure AD), groups can be deleted if they are **not system‑protected** and do not have dependencies that prevent deletion.

- Typically, **Group1 and Group3** are standard security or Microsoft 365 groups without special restrictions, so they can be safely deleted.

- Key exam concept: **Default/system groups (like All Users or license‑assigned groups) cannot be deleted, but custom groups can.**

### Incorrect

**Option A. Group1 only**

- **Incorrect** because Group3 can also be deleted. Limiting deletion to Group1 alone ignores the fact that Group3 is also eligible.

**Option B. Group4 only**

- **Incorrect** because Group4 is likely a system or role‑assigned group that cannot be deleted. Choosing only Group4 is invalid.

**Option D. Group1, Group2, Group3, and Group4**

- **Incorrect** because not all groups can be deleted. System‑protected groups (like Group2 or Group4) cannot be removed.

---

### Question 6

You have an Azure policy as shown in the following exhibit.

What is the effect of the policy?

**Options:**

- **A.** You can create Azure SQL servers in any resource group within Subscription 1.
- **B.** You are prevented from creating Azure SQL servers anywhere in Subscription 1.
- **C.** You can create Azure SQL servers in ContosoRG1 only. ✅
- **D.** You are prevented from creating Azure SQL Servers in ContosoRG1 only.

**Correct answer:** C

**Explanation:**

**Correct**

**Option C. You can create Azure SQL servers in ContosoRG1 only.**

because the Azure policy shown restricts the creation of SQL servers to a specific resource group (ContosoRG1) within the subscription. This means that while SQL servers can be created, they are limited to that designated resource group. The effect of the policy is a **restriction**, not a complete prevention, and it enforces compliance by scoping SQL server creation to ContosoRG1.

**Incorrect**

**Option A. You can create Azure SQL servers in any resource group within Subscription 1.**

because the policy explicitly restricts SQL server creation to **ContosoRG1 only**, not across all resource groups in the subscription.

**Option B. You are prevented from creating Azure SQL servers anywhere in Subscription 1.**

because the policy does not block SQL server creation entirely. It allows creation, but only within the specified resource group.

**Option D. You are prevented from creating Azure SQL Servers in ContosoRG1 only.**

because the opposite is true: ContosoRG1 is the **only resource group allowed** for SQL server creation. The policy does not prevent creation there; it enforces it.

---

### Question 16

**Azure Subscription and Resource Group Configuration Analysis**

A company maintains two Azure subscriptions: “skillcertlab-staging” and “skillcertlab-production.”

The “skillcertlab-staging” subscription includes the following resource groups:

Name
Region
Lock Type

skillcertlabs-rg1
West Europe
None

skillcertlabs-rg2
West Europe
Read Only

An Azure Web App resource, named “skillcertlabapp2050,” has been deployed to the skillcertlabs-rg1 resource group within this subscription.

The “skillcertlab-production” subscription contains the following resource groups:

Name
Region
Lock Type

skillcertlabs-rg3
East Europe
Delete

skillcertlabs-rg4
Central US
None

Question:

Given this configuration, would it be possible to move the web application “skillcertlabapp2050” from skillcertlabs-rg1 to the resource group “skillcertlabs-rg3”?

**Options:**

- **A.** A. Yes ✅
- **B.** B. No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- **Explanation:**

- Azure allows resources such as Web Apps to be moved **between resource groups and even across subscriptions**, provided both subscriptions are under the same Azure Active Directory tenant.

- The source resource group (skillcertlabs-rg1) has **no lock**, so the resource can be moved out.

- The destination resource group (skillcertlabs-rg3) has a **Delete lock**, but this only prevents deletion of resources—it does not block moving resources into the group.

- Therefore, the move is possible.

### Incorrect

**Option B. No**

- Incorrect because a Delete lock does not prevent adding or moving resources into the resource group.

- It only prevents deletion of the resource group or its resources.

- Since the source group has no lock and the destination lock type is Delete (not Read-only), the move is allowed.

---

### Question 18

You are tasked with providing temporary access to a contractor for a specific project. How would you ensure the contractor‘s access is automatically revoked after the project‘s end date?

**Options:**

- **A.** Set an expiration date for the contractor‘s account during creation. ✅
- **B.** Assign the contractor a permanent license but revoke it manually after the project.
- **C.** Manually disable the contractor‘s account after the project ends.
- **D.** Create a script to disable the account on the project‘s end date.

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Set an expiration date for the contractor’s account during creation.**

- **Explanation:**

- Azure Active Directory (Azure AD) allows you to configure **account expiration dates** for guest or temporary users.

- By setting an expiration date, the contractor’s access is automatically revoked once the date is reached.

- This is the recommended approach for temporary access because it removes manual intervention and ensures compliance/security.

### Incorrect

**Option B. Assign the contractor a permanent license but revoke it manually after the project.**

- **Explanation:**

- This requires manual action after the project ends.

- Risk: If administrators forget to revoke access, the contractor retains unnecessary privileges, which is a security issue.

- Not aligned with best practices for temporary access.

**Option C. Manually disable the contractor’s account after the project ends.**

- **Explanation:**

- Similar to Option B, this relies on manual intervention.

- Manual disabling introduces human error and delays, making it unreliable for ensuring automatic revocation.

**Option D. Create a script to disable the account on the project’s end date.**

- **Explanation:**

- While technically possible, this approach adds unnecessary complexity and maintenance overhead.

- Scripts can fail or be misconfigured, and they require monitoring.

- Azure AD’s built-in expiration feature (Option A) is simpler and more secure.

###

---

### Question 19

**Azure Resource Relocation Scenario with Locks**

A company has an Azure subscription with the following resource groups and their associated locks:

Resource Group Name
Lock Name
Lock Type

skillcertlabs-rg1
None
None

skillcertlabs-rg2
skillcertlablock1
Delete

The skillcertlabs-rg1 resource group contains the following resources, each with its own specific locks:

**Resource Name**
**Type**
**Lock Name**
**Lock Type**

skillcertlabstore2090
Storage account
skillcertlablock2
Delete

skillcertlabnetwork
Virtual network
skillcertlablock3
Read-only

skillcertlabip
Public IP address
None
None

Question:

Would you be able to move the resource skillcertlabnetwork from the resource group skillcertlabs-rg1 to skillcertlabs-rg2?

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- **Correct** because a **Delete lock** prevents deletion of the resource group and its resources, but it does **not** prevent modifications or updates to resources inside the group.

- Therefore, the presence of a Delete lock does not stop configuration changes or updates, only deletion.

- The answer is **No**, since the lock does not enforce the restriction implied in the question.

### Incorrect

**Option A. Yes**

- **Incorrect** because answering “Yes” would imply that the Delete lock prevents all changes, which is not true.

- Delete locks only block deletion, not updates or modifications.

- To prevent modifications, a **Read‑only lock** would be required.

###

---

### Question 2

A Read-only lock is applied at RG-Net. Operations against resources in RG-Net should be reviewed for what will still work without removing the lock.
Which action still works?

**Options:**

- **A.** A. Read VM metrics ✅
- **B.** B. Restart a VM
- **C.** C. Update an NSG rule
- **D.** D. Add a tag to a NIC

**Correct answer:** A

**Explanation:**

A Read-only lock permits GET/read operations only. Viewing metrics, properties, and inventory continues to work. Any write (PUT/POST/DELETE) is blocked—including restart, NSG rule changes, and tag updates—until the lock is removed or scope-adjusted.
Why the others are incorrect:
B. Restart a VM: Blocked; restart is a write (control-plane POST).
C. Update an NSG rule: Blocked; NSG rule changes are writes.
D. Add a tag to a NIC: Blocked; tagging is a write to the resource.

---

### Question 7

Hierarchy &amp; assignments

Notes: Role evaluations are cumulative; the **most permissive** applicable role at/above the target scope is effective. Built-in roles: **Owner**, **Contributor**, **Reader**, **User Access Administrator**, etc.

You need **Helpdesk** to grant and revoke **Reader** access for users in **RG-App**, but Helpdesk must **not** be able to modify resources in that RG.

Which single role should you assign to **Helpdesk at the RG-App scope**?

**Options:**

- **A.** A. User Access Administrator ✅
- **B.** B. Owner
- **C.** C. Contributor
- **D.** D. Reader

**Correct answer:** A

**Explanation:**

**User Access Administrator** lets a principal **manage role assignments** (grant/revoke access) **without** granting modify/delete permissions on the resources themselves. Assigning it **at RG-App** allows Helpdesk to add/remove **Reader** for others in that RG while keeping their own ability to **change resources near zero**.

**Why the others are incorrect:**

- **B. Owner:** Can **modify resources and assign roles**—excessive for Helpdesk and violates least privilege.

- **C. Contributor:** Can **modify resources**, but **cannot** manage RBAC role assignments—doesn’t meet the requirement.

- **D. Reader:** Can only **view**; cannot grant or revoke access.

---

### Question 8

You applied a **Delete** lock (CanNotDelete) at the **RG-App** resource group. The group contains VM1, stprod (Storage), and nsg-web. You need to validate what’s still allowed.

Which action is allowed?

**Options:**

- **A.** A. Delete VM1
- **B.** B. Delete RG-App
- **C.** C. Start VM1 ✅
- **D.** D. Delete stprod

**Correct answer:** C

**Explanation:**

A **Delete (CanNotDelete)** lock **prevents delete** operations at the scope and all child resources, but **allows reads and modifications**. VM lifecycle actions like **Start/Stop/Resize** are **writes** but not deletes, so they still succeed. Deleting the VM, the storage account, or the entire RG is blocked by the lock.

**Incorrect:**

- **A. Delete VM1:** Blocked by CanNotDelete at the RG scope.

- **B. Delete RG-App:** Blocked; you cannot delete a locked scope or its children.

- **D. Delete stprod:** Also blocked; delete is not permitted under CanNotDelete.

---

### Question 34

An administrator needs to grant a contractor permission to restart virtual machines in one resource group, but the contractor must not be able to assign roles or change access for other users. The team is debating whether assigning the Owner role is acceptable because it includes VM management capabilities.
Statement: Assigning the Owner role is the best choice because it allows the contractor to restart virtual machines in the target resource group.

**Options:**

- **A.** A. True
- **B.** B. False ✅

**Correct answer:** B

**Explanation:**

This is false because Owner grants full access to resources and also allows the user to delegate access to others, which exceeds the scenario requirement. In AZ-104, a key exam skill is matching the RBAC role to the minimum required permission, so a narrower role such as Virtual Machine Contributor is the better fit for restarting and managing VMs without granting access-management rights.
The exam trap is that Owner can technically perform the task, but it violates least privilege. AZ-104 often tests whether you can distinguish “works” from “is the correct administrative choice.”
Why A is wrong:
True is wrong because it focuses only on whether the task is possible, not whether the role assignment is appropriate. Owner includes permissions beyond VM operations, especially the ability to manage role assignments, so it is too broad for this requirement.

---

### Question 38

An app running on an Azure VM (managed identity) must upload files into a single Blob container for one hour. Security forbids account keys and long-lived credentials. The app will request tokens at runtime and call the Blob REST API.
What should you issue to the app?

**Options:**

- **A.** A. User delegation SAS ✅
- **B.** B. Account key
- **C.** C. Account SAS
- **D.** D. Storage firewall exception

**Correct answer:** A

**Explanation:**

A user delegation SAS is signed with a user delegation key obtained via Microsoft Entra ID, so no account key is exposed. You can scope it to the target container, limit permissions (e.g., c,w), and set a 1-hour expiry—perfect for least-privilege, time-bound uploads from an identity-enabled workload using Blob REST.
Why the others are incorrect:
B. Account key: Violates “no account keys”; broad, long-lived credential.
C. Account SAS: Still requires the account key to sign; fails the security requirement.
D. Firewall exception: Controls network path, not authorization; doesn’t grant scoped, time-bound upload rights.

---

### Question 39

You generate many download links for a Blob container each morning. If a leak occurs, you must be able to revoke all those links at once without rotating account keys or breaking other apps. Links must remain time-scoped day-to-day.
How should you issue and manage the links?

**Options:**

- **A.** A. Service SAS tied to a stored access policy (on the container) ✅
- **B.** B. User delegation SAS (ad-hoc for each link)
- **C.** C. Regenerate account keys
- **D.** D. Remove RBAC Reader from users

**Correct answer:** A

**Explanation:**

Create a stored access policy on the container, then issue Service SAS tokens that reference that policy. If there’s a leak, delete or update the policy to immediately invalidate all SAS linked to it—no account-key rotation, minimal blast radius, and you keep issuing fresh, time-scoped SAS daily.
Why the others are incorrect:
B. User delegation SAS: Good for keyless issuance, but there’s no single handle to revoke a batch of ad-hoc SAS already minted.
C. Regenerate account keys: Revokes everything signed with that key and disrupts other services; heavy-handed.
D. Remove RBAC Reader: SAS is pre-signed; RBAC changes don’t invalidate tokens already issued.

---

### Question 41

A company wants to prevent accidental deletion of a production storage account during a migration weekend. One admin suggests applying a Read-only lock, while another suggests a Delete lock so the storage account can still be updated if needed but not removed.
Statement: A Delete lock prevents the storage account from being deleted while still allowing authorized users to modify it.

**Options:**

- **A.** A. True ✅
- **B.** B. False

**Correct answer:** A

**Explanation:**

This is true because an Azure Delete lock prevents deletion of the resource but still allows read and modification operations. A Read-only lock is more restrictive because it blocks changes as well, so it would not match the requirement to keep updates possible during the migration.
This is a classic AZ-104 distinction: both lock types protect resources, but they do so at different levels. The right answer depends on understanding the operational requirement, not just knowing that “locks protect resources.”
Why B is wrong:
False is wrong because it confuses the behavior of Delete locks with Read-only locks. Delete locks are specifically intended to stop removal while permitting other management operations, which is exactly what the scenario describes.

---

### Question 43

You’re creating a new archive container for compliance. Requirements:
Write-once, read-many (WORM) for 7 years (no edits or deletes).
Must still allow append-only log writes during the retention period (append blocks only).
Administrators manage via RBAC; no anonymous access.
How should you configure the container?

**Options:**

- **A.** A. Public access: Blob
- **B.** B. Soft delete (blobs) = 7 years
- **C.** C. Container immutability policy: time-based retention (7 years)
- **D.** D. Container immutability policy: time-based retention (7 years) + Allow protected append blobs ✅

**Correct answer:** D

**Explanation:**

A container immutability policy with time-based retention (7 years) enforces WORM (no updates/deletes). Enabling Allow protected append blobs permits append-only writes to append blobs during the retention window—ideal for ongoing log ingestion while preserving immutability guarantees.
Why the others are incorrect:
A. Public access: Blob — Controls anonymous read; doesn’t enforce WORM or retention.
B. Soft delete (blobs) — Helps recover deletions, but content can still be overwritten and soft delete can be bypassed by retention limits; it’s not regulatory WORM.
C. Immutability (time-based) without append — Enforces WORM but blocks further appends; requirement demands append-only logging during retention.

---

### Question 51

You have an Azure App Service web app named Contoso2025 that runs in the Standard App Service plan. Contoso2025 has five deployment slots in use.
A user named User1 has the Contributor role for Contoso2025.
You need to ensure that User1 can create additional deployment slots to Contoso2025.
What should you do?

**Options:**

- **A.** A. Assign User1 the Owner role for Contoso2025.
- **B.** B. Assign User1 the Website Contributor role for Contoso2025.
- **C.** C. Scale out the Contoso2025 App Service plan.
- **D.** D. Scale up the Contoso2025 App Service plan. ✅

**Correct answer:** D

**Explanation:**

The limiting factor here is the App Service plan tier, not User1’s RBAC role. Microsoft’s App Service deployment slots guidance states that the Standard tier supports only five deployment slots, and the service limits documentation notes that deployment-slot capacity depends on tier. Since Contoso2025 already has five slots in use, the app has reached the Standard-tier slot limit. To add more slots, the app must be moved to a higher tier that supports more slots, which means scaling up the App Service plan.
User1 already has the Contributor role, which is sufficient for normal write operations on the app. The issue is not missing permissions; it is that the current pricing tier has no remaining slot capacity. Scaling out would add more instances for performance and capacity, but it would not change the slot quota for the app.
Why the other options are incorrect:
• A. Assign User1 the Owner role for Contoso2025. Owner is unnecessary here because the problem is not an authorization gap. User1 already has Contributor permissions, and the blocker is the Standard-tier deployment slot limit. Giving Owner would add broader access, but it would still not let the app exceed the slot capacity of its current tier.
• B. Assign User1 the Website Contributor role for Contoso2025. This also does not solve the problem. Even if Website Contributor is sufficient for many App Service write operations, role changes do not increase the number of deployment slots available to an app. The app is already at the Standard-tier maximum, so the plan tier must change.
• C. Scale out the Contoso2025 App Service plan. Scale out changes the number of instances running the plan. Deployment slot limits are tied to the pricing tier, not to instance count, so adding instances does not create additional slot capacity.

---

### Question 55

You have an Azure subscription containing 100 virtual machines. You want to identify underutilized VMs so you can resize them to a less expensive SKU.
Which blade should you use?

**Options:**

- **A.** A. Azure Monitor
- **B.** B. Azure Advisor ✅
- **C.** C. Azure Metrics
- **D.** D. Azure Cost Analysis
- **E.** E. Azure Customer Insights
- **F.** F. Azure Resource Health

**Correct answer:** B

**Explanation:**

Choice B is correct. Azure Advisor provides personalized recommendations for cost, performance, security, and reliability. Under the Cost category, it identifies underutilized virtual machines that can be resized to smaller, less expensive SKUs. This helps optimize spending without affecting workload requirements.
Why the others are incorrect
A. Azure Monitor collects and visualizes metrics and logs but doesn’t offer cost optimization recommendations.
C. Azure Metrics displays raw performance counters but doesn’t interpret them into actionable insights.
D. Azure Cost Analysis helps visualize and track spending trends but doesn’t analyze VM utilization efficiency.
E. Azure Customer Insights is a Dynamics 365 customer data analytics tool, not related to Azure resource management.
F. Azure Resource Health reports the current health of your resources but doesn’t provide cost optimization advice.

---

### Question 56

A security review says only tightly controlled groups may hold directory roles. You must grant User Administrator to a group, but membership must be static (no dynamic rules) and the group must be explicitly marked to receive directory roles.
Which group configuration should you use?

**Options:**

- **A.** A. Microsoft 365 group
- **B.** B. Distribution list
- **C.** C. Security (Dynamic)
- **D.** D. Security (Assigned), role-assignable ✅

**Correct answer:** D

**Explanation:**

Directory roles in Microsoft Entra can be assigned only to role-assignable security groups. That requires a Security group with Assigned membership (static) and the flag “Microsoft Entra roles can be assigned to the group: Yes”. This makes the group eligible for role assignment and keeps membership tightly controlled and auditable.
Why the others are incorrect:
A. Microsoft 365 group: Not supported for directory role assignment in this context.
B. Distribution list: Mail object; can’t hold directory roles.
C. Security (Dynamic): Dynamic groups cannot be marked role-assignable; the property isn’t allowed on dynamic membership.

---

### Question 2

Contoso’s Finance team requires proactive alerts when the actual monthly cost for the Production subscription hits 80% of the budget. You must avoid custom KQL and keep it in native Cost Management.
Current status
What should you configure?

**Options:**

- **A.** A. Azure Monitor metric alert on Cost* metrics
- **B.** B. Scheduled query alert on UsageDetails in Log Analytics
- **C.** C. Cost Management budget with an 80% actual threshold and email recipients ✅
- **D.** D. Azure Advisor cost recommendation alert

**Correct answer:** C

**Explanation:**

Cost Management Budgets provide native alerts on actual and forecasted spend at subscription or resource group scope. Configure a monthly budget of USD 100,000 with a notification threshold of 80% (actual) and add recipients (emails, groups, and/or an action group). This raises alerts when actual costs cross the threshold—no KQL, no custom ingestion.
why the others are incorrect:
A. Cost metrics aren’t first-class Azure Monitor metrics for direct budget thresholds; you’d still need a budget to define the “80%” logic.
B. Requires exporting usage to a workspace and writing KQL—explicitly not desired.
D. Advisor gives recommendations (RI/Savings Plans, right-size), not budget threshold alerts.

---

### Question 3

Fabrikam runs dozens of subscriptions. Leadership asks for a single place to review cost-saving recommendations (right-size underutilized compute, buy Savings Plans/Reserved Instances, remove idle public IPs) and then drill into details by subscription.
Where should you get these recommendations?

**Options:**

- **A.** A. Azure Advisor – Cost ✅
- **B.** B. Cost analysis (Accumulated costs)
- **C.** C. Pricing calculator
- **D.** D. Azure Monitor Workbooks

**Correct answer:** A

**Explanation:**

Azure Advisor – Cost aggregates cost optimization recommendations: right-size/stop underutilized VMs, purchase Savings Plans/Reservations, remove idle resources, and more. It can be scoped at management group, subscription, or resource group, and links each finding to potential monthly savings and remediation steps.
why the others are incorrect:
B. Cost analysis shows historical/forecasted spend, not prescriptive recommendations.
C. Pricing calculator estimates planned deployments; it doesn’t inspect your estate.
D. Workbooks visualize data; they don’t generate optimization advice.

---

### Question 4

Contoso wants an alert when the forecast shows the subscription will exceed next month’s budget. Finance also wants an email notification and webhook to their automation.
Target configuration
What should you implement?

**Options:**

- **A.** A. Budget alert with actual-cost threshold at 100%
- **B.** B. Azure Policy to deny deployments when spend is high
- **C.** C. Export usage to Log Analytics and alert via KQL forecast
- **D.** D. Cost Management budget with a 100% forecast threshold and notifications (email + action group) ✅

**Correct answer:** D

**Explanation:**

A Budget can trigger on forecasted spend crossing a set percentage of the budget, enabling proactive alerts before the overrun happens. Configure the budget at subscription scope, set the forecast threshold to 100%, and add both email recipients and an action group (for webhook/automation). This satisfies the forecast requirement and the Finance notification path.
why the others are incorrect:
A. Triggers only when actual costs have already hit 100%—too late.
B. Azure Policy doesn’t evaluate costs; it governs resource configurations.
C. Possible but heavy: requires exports, KQL, and manual forecasting—unnecessary when budgets do it natively.

---

### Question 7

You have an Azure storage account named storage1.
You need to ensure that a user named User1 can access storage1 only from January 1, 2026 to January 31, 2026.
What should you do?

**Options:**

- **A.** A. Create a conditional access policy for User1
- **B.** B. Provide User1 with a shared access signature (SAS) ✅
- **C.** C. Provide User1 with a storage1 access key
- **D.** D. Use a condition when assigning User1 an RBAC role on storage1

**Correct answer:** B

**Explanation:**

A shared access signature (SAS) is designed for this exact kind of requirement because it provides delegated access with granular controls over permissions, accessible resources, and how long the SAS is valid. Microsoft’s Azure Storage SAS documentation explicitly lists validity duration as one of the controls and explains that stored access policies can define the start time and expiry time for a SAS.
That makes SAS the best answer for a fixed access window from January 1, 2026 through January 31, 2026. In real implementations, Microsoft recommends a user delegation SAS when possible because it is secured with Microsoft Entra credentials rather than the storage account key.
Why the other options are incorrect:
• A. Create a conditional access policy for User1 — Conditional Access is not the feature used to set a simple start-and-end access window for Azure Storage data in this way. Microsoft’s current storage guidance discusses Conditional Access in the context of protecting storage accounts with Microsoft Entra Conditional Access policies and notes that you must disallow Shared Key authorization to use those policies. That is a different control objective from issuing a time-bounded access token for a specific period.
• C. Provide User1 with a storage1 access key — Storage account access keys are far too broad for this requirement. Microsoft says access keys provide full access to the storage account’s data and the ability to generate SAS tokens, so they do not enforce a limited validity window such as January 1–31, 2026.
• D. Use a condition when assigning User1 an RBAC role on storage1 — Azure RBAC conditions are for more fine-grained authorization checks such as attributes on requests or resources. Microsoft’s role-assignment condition documentation describes them as optional checks and gives examples like requiring an object to have a specific tag; it does not describe them as the mechanism for setting a simple calendar-based access period for storage access.

---

### Question 9

Contoso has no on-prem AD. Windows 11 Azure VMs are Entra ID–joined. Users must access Azure Files over SMB using their Entra identities. No domain controllers or AAD DS may be deployed.
Environment

**Options:**

- **A.** A. Local users + share keys
- **B.** B. Azure AD DS domain join
- **C.** C. NTFS only, no RBAC
- **D.** D. Entra Kerberos + SMB data roles ✅

**Correct answer:** D

**Explanation:**

Use Microsoft Entra Kerberos for Azure Files to enable SMB authentication with Entra identities (no AD DS/AAD DS required). Then grant RBAC at the share or account: “Storage File Data SMB Share {Reader/Contributor/Owner}”. Apply NTFS ACLs as needed.
why the others are incorrect:
A. Uses shared keys, not identity-based SMB.
B. Adds AAD DS you said you can’t deploy.
C. NTFS alone won’t authenticate users; need identity + RBAC.

---

### Question 10

Fabrikam has on-prem AD DS and hybrid-joined VMs in Azure. Users must access Azure Files over SMB using their existing AD accounts and NTFS ACLs. You must not rely on Entra-only Kerberos.
Environment

**Options:**

- **A.** What should you configure?
- **B.** A. Entra Kerberos only
- **C.** B. AD DS auth for Azure Files ✅
- **D.** C. Local users per share
- **E.** D. SAS tokens for SMB

**Correct answer:** C

**Explanation:**

Enable Active Directory Domain Services authentication for Azure Files on the storage account (set AD domain props). Grant users/groups the Storage File Data SMB Share RBAC role(s) and manage access with NTFS ACLs using their AD identities.
why the others are incorrect:
A. Doesn’t use your AD identities/SIDs.
C. Not identity-based; hard to audit/scale.
D. SAS is for REST; SMB uses Kerberos/NTLM with AD.

---

### Question 11

A line-of-business app running on an Azure VM (system-assigned managed identity) must upload and list files in an Azure file share using REST (not SMB). You must grant least privilege via RBAC.
Which role should you assign to the managed identity?

**Options:**

- **A.** A. Storage File Data SMB Share Reader
- **B.** B. Storage Blob Data Contributor
- **C.** C. Storage File Data Contributor ✅
- **D.** D. Reader

**Correct answer:** C

**Explanation:**

Correct answer: C. Storage File Data Contributor
You’re using a managed identity and the Azure Files REST API (not SMB).
The role that grants data-plane permissions for Azure Files over REST is Storage File Data Contributor. It allows create/read/update/delete on shares, directories, and files via REST, which covers “upload and list files.”
Assign it at the file share scope (least privilege). The app then requests an OAuth token for https://storage.azure.com/ and calls REST endpoints (e.g., PUT file, PUT range, GET directory?resource=directory, LIST).
Why the others are incorrect:
A. Storage File Data SMB Share Reader — SMB only and read-only. No REST writes.
B. Storage Blob Data Contributor — Blob service, not Azure Files.
D. Reader — Management plane only; no data-plane access to files.

---

### Question 13

Fabrikam wants to enforce identity-based access only to Blob data—no account keys, no shared-key SAS. You have to keep the public endpoint but require OAuth (Microsoft Entra) for data-plane access.
Current state
What should you change?

**Options:**

- **A.** A. Disable public network access and use private endpoints only
- **B.** B. Leave keys enabled and disable “Blob public access”
- **C.** C. Require secure transfer only (HTTPS) and TLS 1.2+
- **D.** D. Disable shared key access on the account and use Entra RBAC ✅

**Correct answer:** D

**Explanation:**

To prevent shared key authentication (account keys and key-based SAS) and force OAuth, set “Allow storage account key access” = Disabled. Then grant data-plane RBAC (e.g., Storage Blob Data Reader/Contributor/Owner) to identities in Microsoft Entra ID. Clients must request tokens for https://storage.azure.com/ and call Blob APIs with OAuth—shared keys will no longer work.
Why the other options are incorrect:
A. Private endpoints remove public routing but don’t disable shared keys; a caller on the private network could still use account keys unless you explicitly turn them off.
B. Disabling “Blob public access” blocks anonymous (public) access but does not affect authentication with account keys or key-based SAS. Shared keys would still function.
C. “Secure transfer required” + TLS 1.2 harden transport but don’t change the auth method; shared keys remain valid unless explicitly disabled.

---

### Question 16

Fabrikam applies a Deny policy for approved VM SKUs at the subscription scope. You have to exclude the RG-Lab resource group from this policy without changing enforcement anywhere else.
Current assignment
What should you do?

**Options:**

- **A.** A. Remove the policy from the subscription and reassign it to every other RG manually
- **B.** B. Edit the policy definition to add an if-condition that skips RG-Lab
- **C.** C. Add RG-Lab to the assignment’s Excluded scopes, or create a policy exemption at RG-Lab ✅
- **D.** D. Assign Reader to RG-Lab so the policy doesn’t apply there

**Correct answer:** C

**Explanation:**

Use assignment scoping to exclude a child scope. You can either add Excluded scopes in the existing subscription-level assignment to omit RG-Lab, or create a targeted exemption at RG-Lab (e.g., category “Waiver” or “Mitigated,” optionally with an expiry). Both approaches keep the subscription-level governance intact while cleanly excluding the lab RG.
Why the others are incorrect:
A: Operationally heavy and error-prone; you lose centralized control.
B: Policy definitions should remain generic; exclusions belong at assignment or via exemptions.
D: RBAC roles (like Reader) do not influence policy evaluation; policy still applies.

---

### Question 21

Hierarchy &amp; assignments

Notes: Role evaluations are cumulative; the **most permissive** applicable role at/above the target scope is effective. Built-in roles: **Owner**, **Contributor**, **Reader**, **User Access Administrator**, etc.

**Scenario:** You’re reviewing permissions for **DevOpsTeam** on the **stlogs storage account** in **RG-Logs** (Sub-Prod). Based on the table above, what is DevOpsTeam’s **effective role** on stlogs?

**Options:**

- **A.** A. Reader
- **B.** B. Owner
- **C.** C. Contributor ✅
- **D.** D. User Access Administrator

**Correct answer:** C

**Explanation:**

DevOpsTeam has **Contributor at the management group (Corp-MG)**. That assignment **flows down** to all child subscriptions, resource groups, and resources—including stlogs in RG-Logs. Although DevOpsTeam is only **Reader at the subscription**, the effective permission is the **union** of assignments, so the **higher permission (Contributor) from the higher scope** applies at the resource.

**Why the others are incorrect:**

- **A. Reader:** DevOpsTeam does have Reader at Sub-Prod, but it’s **superseded** by Contributor at the higher scope.

- **B. Owner:** No Owner is assigned anywhere for DevOpsTeam, so Owner does **not** apply.

- **D. User Access Administrator:** That role wasn’t assigned to DevOpsTeam at any scope here.

---

### Question 24

You have an Azure subscription named Subscription1 that contains the resources as shown in the following table.

You plan to configure Azure Backup reports for Vault1.

You are configuring the diagnostic settings for the AzureBackupReports log.

Which **Log Analytics workspaces** can you use for the Azure Backup reports of Vault1?

**Options:**

- **A.** A. Analytics1 only
- **B.** B. Analytics2 only
- **C.** C. Analytics3 only
- **D.** D. Analytics1, Analytics2, and Analytics3 ✅

**Correct answer:** D

**Explanation:**

Diagnostic settings for a **Recovery Services vault** can send logs (including **AzureBackupReports**) to a **Log Analytics workspace** **regardless of the workspace’s region**. Unlike the “archive to Storage account” destination—which requires the storage account to be in the **same region** as the emitting resource—sending diagnostics to **Log Analytics** **does not** require regional co-location with the vault.

Therefore, you can select **any** of the workspaces (**Analytics1**, **Analytics2**, **Analytics3**) for **Vault1**’s Azure Backup reports, assuming you have the necessary permissions and the workspaces are in the same **tenant**.

**Why the other options are incorrect**

- Analytics1 only / Analytics2 only / Analytics3 only: Each unnecessarily limits the choice to a single workspace. All three are valid targets for Vault1’s Azure Backup diagnostics.

---

### Question 33

Contoso has a Microsoft Entra tenant (contoso.onmicrosoft.com) and owns contoso.com at a third-party DNS registrar. You must allow creating users with UPNs like [email protected] in the existing tenant.
Which three actions should you perform in sequence?
Actions (use each at most once)
1. Verify the domain.
2. Add a record to the public contoso.com DNS zone.
3. Create an Azure DNS zone.
4. Configure company branding.
5. Add a Microsoft Entra tenant.
6. Add a custom domain name.
Select the correct three-step sequence.

**Options:**

- **A.** A. 2 ? 3 ? 6
- **B.** B. 3 ? 2 ? 6
- **C.** C. 6 ? 1 ? 2
- **D.** D. 6 ? 2 ? 1 ✅
- **E.** E. 2 ? 6 ? 1
- **F.** F. 5 ? 6 ? 1

**Correct answer:** D

**Explanation:**

Choice D is correct. You first add the custom domain (6) in Microsoft Entra ID so the service knows you intend to use contoso.com. Entra then gives you a verification record to publish; add that TXT (or MX) record in the public DNS zone at your third-party registrar (2). After the record propagates, return to Entra and complete domain verification (1). Once verified, you can assign UPNs like [email protected].
Why the others are incorrect
A: Adding the DNS record before the domain exists in Entra (2 ? …) won’t work; the verification string comes from adding the domain (6). Also, creating an Azure DNS zone (3) isn’t required when DNS is hosted elsewhere.
B: Same issue—Azure DNS zone creation (3) is unnecessary, and you still haven’t added the domain in Entra first.
C: You can’t verify (1) before publishing the Entra-provided record (2).
E: You must add the domain (6) to generate the verification record before you can verify.
F: A new tenant (5) isn’t needed; the question already gives you one.

---

### Question 35

Refer to Fabrikam, Inc. (I) Case Study : AZ-104
https://docs.google.com/document/d/19qsvfvAHgsF9tLUqtaK7WPeIhTPeUbxsnpYeCcS4Y0M/edit?usp=sharing
Partners need temporary, secure access to the partner container in a Storage account. Fabrikam wants time-bound access without creating partner user accounts.
What should you do?

**Options:**

- **A.** A. Share the Storage account access keys with partners
- **B.** B. Generate a SAS token for the partner container with start/expiry and minimal permissions ✅
- **C.** C. Assign Storage Blob Data Contributor to “Everyone” and revoke later
- **D.** D. Publish the container publicly with anonymous write disabled using Microsoft SharePoint

**Correct answer:** B

**Explanation:**

Choice B is correct. A Shared Access Signature (SAS) provides scoped, time-limited permissions (e.g., write/list for 24 hours) without creating identities or disclosing the account keys. It supports least privilege by limiting permissions, IP ranges, and times, and can be invalidated by removing a stored access policy or rotating keys.
Why the others are incorrect
A: Sharing account keys exposes full account permissions and is hard to revoke safely.
C: RBAC to a broad group violates least privilege and is operationally risky.
D: Public access increases exposure and still doesn’t give fine-grained, time-bound control.

---

### Question 38

Refer to Fabrikam, Inc. (I) Case Study : AZ-104
https://docs.google.com/document/d/19qsvfvAHgsF9tLUqtaK7WPeIhTPeUbxsnpYeCcS4Y0M/edit?usp=sharing
Fabrikam stores product images in a blob container. To reduce costs without manual jobs, images not accessed for 60 days must move to Cool, and after 180 days to Archive.
Which configuration best meets the requirement with the least administrative effort?

**Options:**

- **A.** A. Blob lifecycle management rules on the storage account ✅
- **B.** B. Enable operational backup for blobs in a Backup vault
- **C.** C. Monthly Azure Data Factory pipelines to move blobs to new tiers
- **D.** D. Azure Policy (Append) to set the access tier automatically

**Correct answer:** A

**Explanation:**

Choice A is correct. Lifecycle management is a built-in policy engine for Blob Storage that evaluates object age and last access time (when enabled) and applies actions like move to Cool and move to Archive. It’s automatic, cost-effective, and requires no orchestration, directly satisfying the tiering goals.
Why the other options are incorrect
B: Operational backup provides recovery points, not ongoing tier changes.
C: ADF can move data but adds unnecessary pipelines, triggers, and code.
D: Azure Policy can enforce configurations but cannot dynamically retier individual blobs by age/access.

---

### Question 39

Refer to Fabrikam, Inc. (I) Case Study : AZ-104
https://docs.google.com/document/d/19qsvfvAHgsF9tLUqtaK7WPeIhTPeUbxsnpYeCcS4Y0M/edit?usp=sharing
The web app needs to retrieve connection strings and secrets from Azure Key Vault. Fabrikam wants to avoid managing client secrets and keep administration simple while following least-privilege access.
What should you do?

**Options:**

- **A.** A. Create a service principal and store its client secret in App Service settings
- **B.** B. Enable a system-assigned managed identity on the web app and grant it Key Vault read access ✅
- **C.** C. Store secrets directly as App Settings and sync during deployments
- **D.** D. Assign Storage Account Contributor to the app and read Storage keys directly, Assign Owner to the Head Administrator

**Correct answer:** B

**Explanation:**

Choice B is correct. A system-assigned managed identity gives the app an Azure-managed identity with no credentials to rotate or store. Granting that identity read permissions to Key Vault (via RBAC or access policies) lets the app fetch secrets securely, reduces administrative effort, and aligns with least privilege and centralized secret governance.
Why the other options are incorrect
A: You’d have to manage/rotate a client secret—exactly what Fabrikam wants to avoid.
C: App Settings increase exposure and lack centralized secret lifecycle/auditing.
D: Over-privileged; bypasses Key Vault and requires managing Storage keys.

---

### Question 40

Refer to Fabrikam, Inc. (I) Case Study : AZ-104
https://docs.google.com/document/d/19qsvfvAHgsF9tLUqtaK7WPeIhTPeUbxsnpYeCcS4Y0M/edit?usp=sharing
Fabrikam wants to ensure only users in the EarlyAdopters group can join devices to Microsoft Entra and that MFA is required at the time of device registration/join (mobile phone verification acceptable).
Which TWO configurations should you implement?

**Options:**

- **A.** A. In Microsoft Entra ID > Devices, set Users may join devices to Azure AD = Selected and select the EarlyAdopters group ✅
- **B.** B. Create a Conditional Access policy with User actions: Register or join devices and Grant: Require multifactor authentication for EarlyAdopters ✅
- **C.** C. Enable Security defaults and add EarlyAdopters to an exclusion list
- **D.** D. Assign the Device Enrollment Manager role to the EarlyAdopters group
- **E.** E. Turn on per-user MFA for EarlyAdopters and disable Conditional Access
- **F.** F. Create an Azure Policy to deny device join for all users except EarlyAdopters

**Correct answer:** A, B

**Explanation:**

Choice A and B are correct.
Setting Users may join devices to Azure AD = Selected and choosing EarlyAdopters enforces that only that group can perform device join/registration. Then, a Conditional Access policy targeting User actions: Register or join devices and requiring MFA forces a second factor at the exact moment of the join operation. This pair directly satisfies both requirements—scoping who can join and requiring MFA (e.g., phone-based methods) during device registration—without adding unnecessary infrastructure.
Why the others are incorrect
C: Security defaults apply broad settings and don’t precisely scope device join to a specific group; you lose fine-grained control compared to device settings + CA.
D: Device Enrollment Manager is an Intune role for bulk enrollment scenarios, not for controlling Entra device join permissions or MFA at join.
E: Per-user MFA is legacy and coarse; it doesn’t specifically bind MFA to the device registration/join action like Conditional Access does.
F: Azure Policy does not control Microsoft Entra device join behavior; use Entra device settings and Conditional Access instead.

---

### Question 48

Contoso plans to bulk-create 500 employee accounts using a CSV import in the Microsoft Entra admin center. HR insists that user UPNs use the verified domain contoso.com (for example, [email protected]).
Current state
Requirement
Ensure all new users are created with UPNs in the contoso.com domain during the first (and only) bulk import attempt. No follow-up mass edits are allowed.
Which single action guarantees the CSV import creates users with the desired UPNs?

**Options:**

- **A.** A. Change the tenant’s default domain to contoso.com before the import ✅
- **B.** B. Keep the default domain as contoso.onmicrosoft.com; the CSV UPN values will override it
- **C.** C. Add a second column with alternate email addresses using contoso.com
- **D.** D. Set each user’s mail nickname to contoso.com

**Correct answer:** A

**Explanation:**

During bulk creation, if the CSV explicitly specifies full UPNs, those values are used; however, in practice many bulk templates populate only name/alias and rely on the tenant default domain to form the UPN. To guarantee correct UPNs with no post-fix, set the tenant default domain to contoso.com before import. This ensures any UPN constructed from aliases uses contoso.com and avoids accidental @onmicrosoft UPNs if the CSV is incomplete or later regenerated.
Why the others are incorrect
B. Assumes every CSV row has a full UPN; the requirement says “guarantee” without follow-ups—default domain change is the safe control.
C. Alternate email does not determine UPN.
D. Mail nickname forms the left side of addresses; it doesn’t set the domain/suffix.

---

### Question 49

You must allow Helpdesk staff to administer password resets by assigning the Entra ID role “Password Administrator” to a group (not to individuals). Security requires that the group be eligible for role assignment and remain strictly controlled.
Which configuration produces a group that can be assigned a directory role?

**Options:**

- **A.** A. Create a Microsoft 365 group with dynamic user membership; assign the role to the group
- **B.** B. Create a Security group and enable “Azure AD roles can be assigned to the group”; use Assigned membership ✅
- **C.** C. Create a Security group with dynamic device membership; enable “Azure AD roles can be assigned to the group”
- **D.** D. Create a Distribution list in Exchange and enable role assignment

**Correct answer:** B

**Explanation:**

Directory roles (like Password Administrator) can only be assigned to role-assignable groups. These must be Security groups with “Azure AD roles can be assigned to the group” enabled (isAssignableToRole = true) and cannot be dynamic or Microsoft 365 groups. Assigned membership keeps ownership tight.
Why the others are incorrect
A. M365 groups cannot be role-assignable for directory roles; dynamic membership is also disallowed.
C. Dynamic groups cannot be marked role-assignable; device membership is irrelevant for user roles.
D. Exchange distribution lists aren’t Entra groups and cannot hold directory roles.

---

### Question 50

Tailwind Traders needs a group that automatically includes all full-time employees in the Sales department and excludes guest users. The HR system writes “Sales” into the Department attribute. You will use this group later for conditional access and license assignment.
Which membership rule meets the requirement?

**Options:**

- **A.** A. user.department -eq “Sales“
- **B.** B. (user.department -eq “Sales“) -and (user.userType -eq “Member“) ✅
- **C.** C. (user.department -eq “Sales“) -or (user.userType -eq “Member“)
- **D.** D. (user.physicalDeliveryOfficeName -eq “Sales“) -and (user.userType -eq “Guest“)

**Correct answer:** B

**Explanation:**

To include only Sales and exclude guests, you must filter on Department equals “Sales” and userType equals “Member”. This yields internal Sales employees only.
Why the others are incorrect
A. Includes Sales guests as well as members (no userType filter).
C. The OR condition brings in all Members from any department.
D. Uses the wrong attribute and includes Guests, which is the opposite of the requirement.

---

### Question 52

Contoso wants the AppOps team to fully manage virtual machines in a resource group named RG-App (create, start/stop/redeploy, delete, attach/detach disks) but must not allow them to create or modify virtual networks, subnets, public IPs, or load balancers.
Current state
Which single built-in role should you assign to the AppOps group at the RG-App scope to meet the requirement?

**Options:**

- **A.** A. Contributor
- **B.** B. Virtual Machine Contributor ✅
- **C.** C. Network Contributor
- **D.** D. Owner

**Correct answer:** B

**Explanation:**

Virtual Machine Contributor lets members manage virtual machines (create, update, delete, power operations, extensions) without granting rights to networking resources such as VNets, subnets, and load balancers. This meets “manage VMs, not networking.” Contributor and Owner would allow networking changes; Network Contributor would not permit VM lifecycle operations.
Why the others are incorrect
A. Contributor also allows modifying networking and other resources in the RG.
C. Network Contributor manages networking objects but cannot create/update/delete VMs.
D. Owner includes full access plus role assignment; violates least privilege.

---

### Question 53

You have the following assignments.
Role assignments
Resource inventory
What is DevLead’s effective access to rg-backend-web?

**Options:**

- **A.** A. Reader only (inherited from subscription)
- **B.** B. Key Vault Secrets User (from resource assignment)
- **C.** C. Reader + Key Vault Secrets User combined
- **D.** D. Contributor (from RG-Backend) ✅

**Correct answer:** D

**Explanation:**

Effective permissions are the union of role assignments across scopes, with the most permissive applicable role at or above the target’s scope taking effect. For rg-backend-web (in RG-Backend), the DevLead has Contributor at the RG scope, which overrides the lesser Reader inherited from the subscription. The Key Vault Secrets User role applies only to rg-backend-kv, not to the App Service.
Why the others are incorrect
A. Reader at subscription is superseded by Contributor at the RG scope.
B. Key Vault Secrets User is scoped to the key vault resource only.
C. Combining unrelated roles here doesn’t elevate access beyond Contributor at the RG.

---

### Question 54

Security wants Helpdesk to grant Reader access to developers at a specific resource group, but Helpdesk must not be able to change or delete resources in that RG. You will assign a single built-in role to the Helpdesk group at that RG’s scope.
Which role should you assign?

**Options:**

- **A.** A. User Access Administrator ✅
- **B.** B. Reader
- **C.** C. Contributor
- **D.** D. Owner

**Correct answer:** A

**Explanation:**

User Access Administrator permits managing RBAC assignments (add/remove role assignments) without granting permissions to modify the underlying resources. This allows Helpdesk to assign Reader to others while keeping their own ability to change resources minimal.
Why the others are incorrect
B. Reader can view but cannot grant roles.
C. Contributor can modify resources; exceeds the requirement.
D. Owner can modify resources and assign roles; exceeds least privilege.

---

### Question 55

Developers need to read blob contents from a storage account named stsappdata without using account keys or SAS. They must not be able to modify any resources in the resource group. You will assign a single built-in role on the storage account.
Which role meets the requirement?

**Options:**

- **A.** A. Storage Blob Data Reader ✅
- **B.** B. Reader
- **C.** C. Storage Blob Data Contributor
- **D.** D. Contributor

**Correct answer:** A

**Explanation:**

Storage Blob Data Reader grants data-plane read access to blob contents via Azure AD (OAuth) without control-plane rights. Reader and Contributor are management-plane roles and do not grant data-plane blob read; Storage Blob Data Contributor allows write, which is more than required.
Why the others are incorrect
B. Reader allows viewing the storage account’s control-plane metadata only, not blob data.
C. Storage Blob Data Contributor permits write/delete to blobs; exceeds requirement.
D. Contributor grants control-plane modifications on the storage account; not needed and still doesn’t confer data-plane read by itself.

---

### Question 56

Your org applies Azure Policy at multiple scopes. You’re troubleshooting why a VM deployment in RG-App failed with a location error.
Assignments
Attempted deployment
• vm-02 in RG-App with location “East US 2”
What explains the deny on vm-02?

**Options:**

- **A.** A. The RG-App Audit policy takes priority and audits but does not deny
- **B.** B. The resource exemption on vm-01 cascades to vm-02 and blocks it
- **C.** C. The subscription-scope Deny for “Allowed locations” with param [“East US 2”] is overridden by the MG-scope Deny, so only “East US” is allowed ✅

**Correct answer:** C

**Explanation:**

When identical “Allowed locations” policies are assigned at multiple scopes with different parameters, the most restrictive effect at the nearest applicable scope applies, and higher-scope Deny is not overridden by lower-scope assignments. Here, the MG-scope Deny allows only “East US”. The subscription Deny allows “East US 2”, but policy evaluation is intersection, not union—vm-02 in “East US 2” violates the MG policy and is denied. The RG policy is Audit (doesn’t deny). The exemption is for vm-01 only.
Why the others are incorrect
A. RG Audit doesn’t cause deny; higher-scope MG Deny still blocks.
B. Exemptions are resource-scoped; vm-02 isn’t exempt.

---

### Question 57

Contoso’s governance board says you have to ensure every new and existing resource group has the tag CostCenter. If it’s missing, it must be added automatically with value Unassigned. Remediation for existing RGs is required.
Which policy effect should you use?

**Options:**

- **A.** A. Append
- **B.** B. Modify ✅
- **C.** C. AuditIfNotExists
- **D.** D. Deny

**Correct answer:** B

**Explanation:**

The Modify effect can change the incoming request and also correct existing noncompliant resources via remediation tasks. You attach a managed identity (preferably user-assigned) to the policy/initiative assignment, grant it the minimal RBAC (e.g., Resource Group Contributor at the target scope), and then run remediation to stamp the CostCenter=Unassigned tag on existing RGs. For new requests, Modify amends the resource to include the tag before it’s written, achieving both enforcement and auto-fix.
Why the others are incorrect:
Append: Adds fields to the request context but doesn’t mutate existing resources; not ideal for retrofitting tags at scale.
AuditIfNotExists: Flags drift but won’t add the tag.
Deny: Blocks creation/updates without fixing; violates the “auto-add” requirement.

---

### Question 59

At Fabrikam, you have to deploy a VM into RG-App. The deployment fails with a location error.
Policy assignments
You tried to create vm1 in East US 2 within RG-App. Why was it denied?

**Options:**

- **A.** A. The RG Audit blocks East US 2 because it differs from MG parameters
- **B.** B. The MG Deny is ignored if a lower-scope assignment exists
- **C.** C. The two policies are combined as a union, so both locations are allowed
- **D.** D. The MG Deny allows only East US and takes precedence over the RG Audit ✅

**Correct answer:** D

**Explanation:**

Policy evaluation honors higher scope restrictions. A Deny at the management group scope that allows only “East US” applies to all descendant scopes. The RG-level Audit does not override a higher-scope Deny (Audit merely records noncompliance). Because the attempted location is “East US 2,” it violates the MG Deny and is blocked, regardless of the RG assignment.
Why the others are incorrect:
A: Audit never blocks; it only logs.
B: Higher-scope Deny is not ignored by lower scopes.
C: “Allowed locations” is effectively an intersection, not a union; adding “East US 2” at RG does not open it up if the MG only allows “East US.”

---

### Question 60

At Contoso, you assigned a built-in policy that DeployIfNotExists diagnostic settings on storage accounts at the subscription scope. Compliance shows many accounts as noncompliant. Security requires least privilege when you remediate.
What should you configure before running the remediation task?

**Options:**

- **A.** A. Attach a user-assigned managed identity to the policy (or initiative) assignment and grant it only the minimal RBAC on the target scope ✅
- **B.** B. Grant Owner to your user at subscription, then re-run policy evaluation
- **C.** C. Enable system-assigned managed identity on every storage account
- **D.** D. Change the effect to Audit and use Azure Monitor alerts

**Correct answer:** A

**Explanation:**

DeployIfNotExists remediation runs using the managed identity on the policy/initiative assignment, not your user identity. Best practice is to attach a user-assigned managed identity (UAMI) to the assignment, grant it the minimal roles needed to deploy the diagnostic settings (for example, Storage Account Contributor or specific granular roles at the RG/resources), and then start a remediation task that uses this identity. This achieves least privilege and scales cleanly.
Why the others are incorrect:
B: Your user’s Owner role is unnecessary and violates least privilege; remediation won’t run as your user anyway.
C: System-assigned MIs on each storage account are irrelevant; the identity lives on the assignment, not on targets.
D: Switching to Audit avoids deployment, leaving the noncompliance unfixed.

---

## Practice Set 16

Source: https://skillcertpro.com/az-104-exam-questions/16/

### Question 2

Contoso needs guest-performance and process/dependency visibility across all VMs and VM scale sets in several subscriptions. They want Azure Monitor Agent (AMA) with data collection rules (DCRs) no per-VM click-ops and they want the VM insights experience (Performance/Map) enabled consistently.
You need to enable VM insights at scale using AMA and DCRs so teams can interpret CPU/memory trends and dependency maps without touching each VM. Which option should you choose?

**Options:**

- **A.** A. Install Log Analytics agent (MMA)
- **B.** B. Enable diagnostic settings on each VM
- **C.** C. Application Insights agent
- **D.** D. Azure Policy: VM insights initiative ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. The VM insights policy initiative deploys Azure Monitor Agent and associates the required data collection rule across targeted scopes (subs/RGs/VMSS), giving you a uniform VM insights experience (Performance charts; optional Map collection) without manual enablement per VM. This is the supported path post-MMA deprecation and is designed for fleet onboarding with compliance visibility.
Once enabled, operators can interpret guest CPU, memory, disk, and networking from the VM insights blades and pivot to the Map for process-to-process/service dependencies when that collection is turned on in the DCR. This reduces MTTR by localizing hot processes and noisy neighbors before deeper log queries
Why others are incorrect
A. MMA is deprecated for new onboarding; VM insights now uses AMA + DCR.
B. Diagnostic settings emit platform metrics/logs but don’t deliver the VM insights (guest-level) experience or AMA/DCR deployment at scale.
C. Application Insights agent targets app telemetry, not the VM insights guest-performance/dependency solution.

---

### Question 3

Contoso is migrating large media content and logs between storage accounts in the same tenant. The operations team needs reliable, high-performance transfers that preserve metadata and can resume after interruptions. Non-technical support staff need an easy GUI for ad-hoc browsing, small uploads/downloads, and setting container access properties.
Support staff need to browse containers, download single files, edit blob metadata, and set container public access for a marketing site. They prefer a GUI and must NOT handle service account keys directly. Which tool best fits their needs?

**Options:**

- **A.** A. AzCopy
- **B.** B. Azure CLI only
- **C.** C. Azure Portal only
- **D.** D. Azure Storage Explorer ✅

**Correct answer:** D

**Explanation:**

Azure Storage Explorer provides an easy-to-use GUI for browsing accounts/containers, downloading individual blobs, editing metadata, and changing container-level access. It supports authentication via Azure AD (so staff don’t need account keys), integrates with subscriptions and storage accounts, and is ideal for ad-hoc support tasks and small uploads/downloads without scripting or heavy orchestration.
Why the others are incorrect:
A: AzCopy is powerful for scripted/high-performance tasks but is CLI-based and less suitable for non-technical GUI-driven support work.
B: Azure CLI is script-first and requires more operational knowledge; not a friendly GUI for support staff.
C: The Azure Portal can perform many actions but the Explorer provides a faster, desktop-based experience with bulk operations and better local workflow for ad-hoc file handling.

---

### Question 9

You have two Azure subscriptions named Sub1 and Sub2. Sub1 is in a management group named MG1. Sub2 is in a management group named MG2.

You have the resource groups shown in the following table.

You have the virtual machines shown in the following table.

You assign roles to users as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

“User2 can manage disks and disk snapshots of VM1.”

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

User2’s Virtual Machine Contributor assignment is scoped to management group MG2, which contains Sub2 but not Sub1. Azure RBAC is scope-based and hierarchical: a role is effective only within the scope it’s assigned to (management group, subscription, resource group, or resource) and its descendants. Because VM1 lives in Sub1 (outside MG2’s hierarchy), User2’s assignment does not apply to VM1 or any of its related resources (managed disks, snapshots).

Even if User2 had a relevant role, it must be assigned at a scope that covers Sub1 (e.g., Sub1, its RG, or VM1 itself). Without such coverage, User2 cannot create, delete, or modify the disks or snapshots associated with VM1, nor attach/detach them via the VM resource.

Key points

RBAC roles are effective only within their scope and descendants; MG2 ? Sub2 does not include Sub1.

VM1 (and its disks/snapshots) reside in Sub1, so the MG2 assignment is out of scope.

To manage VM1’s disks/snapshots, assign an appropriate role (e.g., Virtual Machine Contributor, Disk Contributor, or Contributor) at a scope that includes Sub1/RG1/VM1.

---

### Question 10

You have two Azure subscriptions named Sub1 and Sub2. Sub1 is in a management group named MG1. Sub2 is in a management group named MG2.

You have the resource groups shown in the following table.

You have the virtual machines shown in the following table.

You assign roles to users as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

“User1 can sign in to VM1.”

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

User1 can’t sign in to VM1 because they’re missing a data-plane sign-in role. The assignment they do have—Virtual Machine Contributor at management group MG1 (inherited by Sub1/RG1/VM1)—is a control-plane role: it lets you create, delete, start/stop, and configure VMs and their resources, but it does not grant OS sign-in rights.

Azure VM interactive sign-in requires one of the VM sign-in roles to be assigned at a scope that covers the target VM:

Virtual Machine User Login (standard user sign-in), or

Virtual Machine Administrator Login (admin-level sign-in).

Because neither of these roles is assigned to User1 at VM1, RG1, Sub1, or MG1, the RBAC evaluation for the sign-in operation fails, even though User1 can manage the VM. In short: manage ? log in. You must add a VM sign-in role at an appropriate scope for User1 to authenticate to the guest OS.

Key points

Virtual Machine Contributor ? manage VM resources (create/modify/start/stop), no OS login.

Virtual Machine User Login/Admin Login ? required to interactive sign in to the VM (Linux or Windows).

Scope can be VM / RG / Subscription / MG; inheritance applies, but the correct role must be present.

---

### Question 12

You have an Azure subscription that contains the users shown in the following table.

The groups are configured as shown in the following table.

You have a resource group named RG1 as shown in the below exhibit.

For the statement below, select Yes if the statement is true. Otherwise, select No.

“You can assign User3 the Owner role for RG1 by assigning the Owner role to Group3 for RG1.“

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

Yes is correct. Group3 is marked “Microsoft Entra roles can be assigned to the group: Yes,” making it eligible for direct role assignments. Even though it’s a Microsoft 365 group, a direct (non-nested) RBAC assignment—such as Owner on RG1—will apply to the group, so User3, as a direct member of Group3, inherits Owner on RG1.

---

### Question 13

You have an Azure subscription named Sub1 that contains the blob containers shown in the following table.

Sub1 contains two users named User1 and User2. Both users are assigned the Reader role at the Sub1 scope.

You have a condition named Condition1 as shown below.

You have a condition namedCondition2as shown below.

You assign roles to User1 and User2 as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

“User2 can read blob1.”

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

User2 can read blob1 because their data-plane RBAC assignment  Storage Blob Data Owner on the storage1 account  grants full read/write permissions to all blob containers and blobs within that account. Scope matters: assigning at the storage account automatically scopes down to every child resource (containers and blobs). In Azure RBAC, access is evaluated per operation against the effective role assignments at the relevant scope; if a matching allow exists and no applicable deny/condition blocks that specific operation, access is granted.

Here, Condition2 is attached to the same role assignment but applies only to write operations and only when the blob path matches *2*. User2 is performing a read (data-plane “Get Blob”/“Read”), not a write (Put, Delete, Set Tier, etc.). Because the condition does not target reads, it doesn’t restrict the operation. With no additional deny or conflicting condition in play, the default read permission from Storage Blob Data Owner remains effective, so User2 can read blob1.

Key points, succinctly:

Role &amp; scope: “Storage Blob Data Owner” at storage account scope ? read/write over all blobs in that account.

Operation type: The condition filters writes only; reads are unaffected.

Path filter: Even for writes, it would apply only if the blob path matched *2*; it doesn’t come into play for a read of blob1.

Result: Access allowed for the read.

---

### Question 14

You have two Azure virtual machines as shown in the following table.

You create the Azure DNS zones shown in the following table.

You perform the following actions:

To fabrikam.com, you add a virtual network link to vnet1 and enable auto registration.

For contoso.com, you assign vm1 and vm2 the Owner role.

For the following statement, select Yes if the statement is true. Otherwise, select No.

“The DNS A record for vm1 is added to contoso.com and has the IP address of 131.107.50.20.”

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Auto-registration of VM hostnames is an Azure Private DNS feature. It works only when you link a private DNS zone to one or more virtual networks and enable auto-registration on that VNet link. When a VM’s NIC IP changes (e.g., DHCP in the VNet), Azure automatically creates/updates the corresponding A (and reverse) records in that private zone.

Here, contoso.com is a public DNS zone. Public zones do not support VNet links or auto-registration; records must be created/managed explicitly (manually, IaC, or through APIs). Because there’s no private zone with auto-registration in play, Azure won’t create an A record for vm1 pointing to its public IP 131.107.50.20—public IP publication is always an intentional, manual step in public DNS.

Finally, granting Owner on the VM resource (or to vm1/vm2 identities) affects RBAC authorization for Azure resources, not DNS record life-cycle automation. RBAC determines who can make changes; it doesn’t turn on auto-registration or create DNS records by itself.

Key points

Auto-registration exists only for Private DNS zones linked to VNets; public zones never auto-register.

Public DNS records (A/AAAA/CNAME) are added/updated manually or via automation (ARM/Bicep/Terraform/CLI), not by VM creation.

RBAC role assignments (e.g., Owner) don’t trigger DNS updates; they just permit you to make them.

---

### Question 20

Taylor needs to manage the virtual network **vnet1** in **RG-Network**. Based on the assignments above, what is Taylor’s effective permission on **vnet1**?

**Options:**

- **A.** A. Delete vnet1 ✅
- **B.** B. Read-only
- **C.** C. Grant Reader only
- **D.** D. No access

**Correct answer:** A

**Explanation:**

Taylor is in **DevOps (Contributor at management group)**, which **inherits** to all child scopes—including the subscription, RG-Network, and its resources—so Taylor has **Contributor** on vnet1. Contributor permits **create/update/delete** of resources. Taylor is also in **NetOps (User Access Administrator at RG-Network)**, which **adds** the ability to manage role assignments at that RG, but UA Admin isn’t needed to delete; Contributor already allows it. RBAC is cumulative—the **most permissive** matching role across scopes applies.

**Why the others are incorrect:**

- **B:** Reader is present via the Auditors group, but **Contributor** from the higher scope overrides by adding write/delete.

- **C:** User Access Administrator allows managing **access**, not restricting you to only granting Reader; with Contributor, Taylor can also modify/delete.

- **D:** Taylor clearly has inherited permissions; “no access” is incorrect.

---

### Question 21

Contoso Ltd. manages multiple Azure subscriptions for its regional teams. The company wants to organize these subscriptions under a single hierarchy for centralized policy and role management.

You need to apply a policy that restricts virtual machine sizes to Standard_B and Standard_D series for all subscriptions under the APAC management group.

Where should you assign this policy to ensure consistent enforcement across Sub-AU1 and Sub-SG1?

**Options:**

- **A.** A. Assign the policy to each subscription individually
- **B.** B. Assign the policy to the APAC management group ✅
- **C.** C. Assign the policy to the Corporate management group
- **D.** D. Assign the policy to individual resource groups

**Correct answer:** B

**Explanation:**

Assigning the policy to individual resource groups would not provide the desired enforcement across all subscriptions under the APAC management group. Resource group-level assignments are more granular and may not cover all resources within the subscriptions.

Overall explanation

Assigning a policy at the **APAC management group** scope ensures that it automatically applies to all subscriptions under that group. Policies assigned at higher scopes cascade to all descendant resources, providing centralized and consistent governance.

**Why others are incorrect:**

- **A:** Requires manual policy assignment to each subscription, which is inefficient and error-prone.

- **C:** Would affect the Europe region as well, exceeding the intended scope.

- **D:** Resource group scope is too granular for regional governance needs.

---

### Question 23

Contoso Ltd. manages multiple Azure subscriptions for its regional teams. The company wants to organize these subscriptions under a single hierarchy for centralized policy and role management.

Contoso wants to delegate administrative rights for the Europe management group to a regional IT lead, but not allow them to modify global Corporate policies.

What should the global admin do?

**Options:**

- **A.** A. Assign the Owner role at the Corporate management group level
- **B.** B. Assign the Owner role at the Europe management group level ✅
- **C.** C. Assign the Contributor role at the Corporate management group level
- **D.** D. Assign the Reader role at the Europe management group level

**Correct answer:** B

**Explanation:**

Assigning the **Owner role** at the **Europe management group** level provides full control of that region’s resources without extending permissions to Corporate or Root. Azure RBAC roles respect the hierarchical boundaries of management groups, ensuring proper least-privilege delegation.

**Why others are incorrect:**

- **A:** Grants full access across the entire Corporate scope — too broad.

- **C:** Contributor cannot assign or modify access rights — insufficient.

- **D:** Reader role allows viewing resources only — cannot manage them.

---

### Question 24

Fabrikam operates multiple storage accounts used by different departments. Each account uses shared keys for programmatic access, but the IT security team is implementing key rotation policies to enhance security.

Fabrikam’s IT team needs to enforce key rotation on all storage accounts without modifying existing applications that use these keys. Which approach should they use?

**Options:**

- **A.** A. Regenerate the access keys manually for each storage account every 30–90 days
- **B.** B. Enable Azure Key Vault integration and use managed identities for applications ✅
- **C.** C. Delete and recreate the storage accounts to refresh the access keys
- **D.** D. Use Azure AD conditional access policies to rotate keys automatically

**Correct answer:** B

**Explanation:**

Integrating **Azure Key Vault** with **managed identities** allows applications to authenticate securely without using static storage account keys. This eliminates the need for manual rotation and aligns with Microsoft’s best practices for credential management.

**Why others are incorrect:**

- **A:** Manual key rotation is prone to operational errors and downtime during updates.

- **C:** Recreating storage accounts would delete data and disrupt services — completely impractical.

- **D:** Conditional access policies manage sign-in conditions, not key rotation.

---

### Question 25

You must enable object replication to copy block blobs from storage-src → storage-dr, filter to the images/ prefix, and backfill older objects starting 2025-01-01. Currently, neither account has blob versioning or change feed enabled.

What must you enable before creating the replication policy?

**Options:**

- **A.** A. Soft delete on both accounts
- **B.** B. Blob versioning on both accounts and change feed on the source ✅
- **C.** C. Hierarchical namespace on both accounts
- **D.** D. Allow cross-tenant replication = true

**Correct answer:** B

**Explanation:**

Allowing cross-tenant replication is not a requirement for enabling object replication between storage accounts within the same tenant. Cross-tenant replication is used when replicating data across different tenants, which is not the case in this scenario.

Overall explanation

Object replication requires **blob versioning enabled on both the source and destination** and **change feed enabled on the source** so the service can detect writes/deletes to replicate. Without those features the replication pipeline cannot enumerate and replicate historical or incremental changes (backfill or ongoing). Also object replication only supports block blobs and certain account types, so enabling versioning and change feed is the required prerequisite before you create container-pair rules and a replication policy.

**Why the others are incorrect:**

- **A:** Soft delete helps recover deleted blobs but is **not** a prerequisite for object replication; it won’t allow replication to start.

- **C:** Hierarchical namespace (Data Lake) is **not supported** for object replication—enabling it would actually block replication.

- **D:** Allow cross-tenant replication controls cross-tenant policy behavior; it’s unrelated to the core prerequisites of versioning and change feed.

---

### Question 32

You have an Azure storage account that contains a blob container named container1.
You need to configure access to container1.
Which authorization types can you use?

**Options:**

- **A.** A. Microsoft Entra ID only
- **B.** B. Microsoft Entra ID, shared access signature or certificate only
- **C.** C. Microsoft Entra ID, storage key or shared access signature only ✅
- **D.** D. Microsoft Entra ID, storage key, shared access signature or certificate
- **E.** E. Storage key or shared access signature only

**Correct answer:** C

**Explanation:**

Azure Blob Storage supports data access by using Microsoft Entra ID, the storage account access key through Shared Key authorization, or a shared access signature (SAS). Microsoft’s Blob authorization guidance and Azure CLI authorization guidance both list these as the supported ways to authorize blob data operations.
A certificate is not listed as a direct authorization type for accessing a blob container. Certificates may be involved indirectly in broader identity or application authentication patterns, but for Blob Storage container access itself, the supported authorization choices are Entra ID, Shared Key, or SAS.
Why the other options are incorrect:
• A. Microsoft Entra ID only — Microsoft recommends Microsoft Entra ID for security, but it is not the only supported authorization method. Blob data operations can also be authorized with the storage account access key or a SAS token.
• B. Microsoft Entra ID, shared access signature or certificate only — This is incorrect because it omits the storage key, which is a valid authorization method for blob data access. It also includes certificate, which is not a standard Blob Storage authorization type in Microsoft’s storage authorization documentation.
• D. Microsoft Entra ID, storage key, shared access signature or certificate — The first three items are valid, but certificate makes the option incorrect. Microsoft’s storage authorization documentation does not list certificate as a direct authorization type for blob container access.
• E. Storage key or shared access signature only — This is incorrect because Microsoft Entra ID is also a supported authorization method for blob data access, and Microsoft recommends it whenever possible.

---

### Question 33

You see this secure parameter:
@secure()
param adminPassword string
What does @secure() do for this parameter?

**Options:**

- **A.** A. Hidden in logs ✅
- **B.** B. Outputtable value
- **C.** C. Auto Key Vault
- **D.** D. Policy enforced

**Correct answer:** A

**Explanation:**

@secure() (ARM: secureString/secureObject) marks the value as secret. It’s redacted in deployment logs/portal, encrypted at rest by the control plane, and cannot be retrieved via template outputs. It’s still passed to resources at runtime, but never disclosed by the deployment engine.
Why the others are incorrect:
B. Outputtable value — Secure params cannot be emitted in outputs; the platform blocks this.
C. Auto Key Vault — Not automatic. You can reference Key Vault secrets, but @secure() alone doesn’t create or wire KV.
D. Policy enforced — Azure Policy doesn’t automatically apply here; @secure() is a template/runtime behavior, not a policy control.

---

### Question 35

You’re provisioning a new admin VM and two app VMs. Security policy states no passwords permitted on any Linux VM, and enforcement must happen at creation so that password-based SSH is never enabled. Azure AD login may be added later for centralized identity, but it must not weaken the creation-time control.
Environment

**Options:**

- **A.** A. Password
- **B.** B. SSH public key ✅
- **C.** C. Azure AD login
- **D.** D. Managed identity

**Correct answer:** B

**Explanation:**

Choosing SSH public key at creation configures Linux VMs for key-based SSH and disables password authentication from day one. This satisfies the “no passwords permitted” policy across all three VMs. You can still enable Azure AD login later for central identity, but the VM remains key-only for SSH because the provisioning method is key-based.
Why the others are incorrect:
A. Password: Enables password-based SSH, violating the stated policy at creation.
C. Azure AD login: Useful for central auth later, but it does not replace the required creation-time selection of SSH keys vs. password; you still must choose keys to enforce passwordless SSH.
D. Managed identity: Grants the VM an Azure identity for resource access (e.g., Key Vault, Storage); it is not an OS login method and doesn’t control SSH authentication.

---

### Question 38

Environment
Requirements
A single Azure Container Registry serving both regions.
Regional pulls without cross-region egress; images available close to each AKS cluster.
Private network access from both VNets; no public endpoint exposure.
No shared/admin passwords; use Azure RBAC to grant pull/push to workloads and CI/CD.
Manage everything in the Azure portal (creation and configuration).
Proposed solution
Create Azure Container Registry (Standard) in East US only.
Keep public network access enabled; do not configure private endpoints.
Enable the admin user and store its password in GitHub Secrets for CI/CD.
Allow aks-eu to pull across regions over the public endpoint.
Does the proposed solution meet the requirements?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No 

Why the solution fails the requirements:
The proposed solution fails on almost every technical requirement listed in the prompt. Here is the breakdown of the discrepancies:

Failure 1: Regional Efficiency (Geo-replication)

Requirement: Regional pulls without cross-region egress; images available close to each cluster.

Proposed: Create registry in East US only and allow the Europe cluster (aks-eu) to pull across regions.

The Problem: The Standard tier does not support Geo-replication. To serve two regions locally and avoid cross-region egress costs/latency, you must use the Premium tier and enable Geo-replication to the Europe region.

Failure 2: Private Networking

Requirement: Private network access from both VNets; no public endpoint exposure.

Proposed: Keep public network access enabled; no private endpoints.

The Problem: To meet this requirement, you must disable public access and configure Private Link / Private Endpoints. Private Link is a feature of the Premium tier.

Failure 3: Security &amp; Identity (RBAC)

Requirement: No shared/admin passwords; use Azure RBAC.

Proposed: Enable the admin user and store the password in GitHub Secrets.

The Problem: The “Admin User“ is a single credential that provides full access. To follow the requirement and best practices, the Admin User should be disabled, and access should be granted via Managed Identities (for the AKS clusters) and Service Principals (for CI/CD) using Azure RBAC roles like AcrPull or AcrPush.

---

### Question 39

Environment
Requirements
A single Azure Container Registry serving both regions.
Regional pulls without cross-region egress; images available close to each AKS cluster.
Private network access from both VNets; no public endpoint exposure.
No shared/admin passwords; use Azure RBAC to grant pull/push to workloads and CI/CD.
Manage everything in the Azure portal (creation and configuration).
Proposed solution
Create Azure Container Registry (Premium) in East US and enable geo-replication to West Europe.
Disable public network access on the registry.
Create private endpoints for the registry in both vnet-us and vnet-eu.
Disable the admin user.
Assign AcrPush to the CI/CD workload identity and AcrPull to the managed identities of aks-us and aks-eu.
(Optional) Add a retention policy for untagged manifests.
Does the proposed solution meet the requirements?

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

This configuration meets every stated requirement. Premium is needed for geo-replication, letting aks-us and aks-eu pull locally without cross-region egress. Private endpoints in both VNets with public network access disabled ensure private-only data plane access. Turning off the admin user removes shared passwords; using built-in RBAC roles (AcrPush/AcrPull) ties access to identities from CI/CD and AKS. All of these actions are supported directly in the Azure portal.

---

### Question 55

You have an Azure subscription.
You have 100 Azure virtual machines.
You need to quickly identify underutilized VMs that can be resized to a cheaper tier.
Which blade should you use?

**Options:**

- **A.** A. Azure Advisor ✅
- **B.** B. Cost analysis
- **C.** C. Metrics
- **D.** D. VM Insights

**Correct answer:** A

**Explanation:**

Azure Advisor’s Cost recommendations blade analyzes VM utilization (CPU, memory signals, disk/network patterns) across your subscription and flags underutilized instances with specific right-size or shutdown suggestions. It’s the fastest way to see which VMs can move to a cheaper size/tier, including the proposed target SKU and estimated savings.
Why the others are incorrect:
B. Cost analysis: Shows spend trends and breakdowns, not utilization-based resize recommendations.
C. Metrics: Raw performance charts per resource; you’d have to manually interpret underuse VM-by-VM.
D. VM Insights: Deep perf monitoring/Map, but no cost/right-size advisor list for quick actions.

---

### Question 56

You have an Azure subscription.
You plan to create a role definition to meet the following requirements:
Users must be able to view the configuration data of a storage account.
The solution must use the principle of least privilege.
What should you include in the role definition for the above requirements?

**Options:**

- **A.** A. Microsoft.Storage/storageAccounts/*
- **B.** B. Microsoft.Storage/storageAccounts/read ✅
- **C.** C. Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read
- **D.** D. Microsoft.Storage/storageAccounts/listkeys/action
- **E.** E. Microsoft.Storage/storageAccounts/blobServices/read
- **F.** F. Microsoft.Resources/subscriptions/resourceGroups/read

**Correct answer:** B

**Explanation:**

Use Microsoft.Storage/storageAccounts/read to grant read-only access to storage account configuration and metadata without granting any write, delete, or data-plane permissions. This precisely matches “view configuration data” and adheres to least privilege. In a custom role, put this under Actions, and keep NotActions empty (unless you’re subtracting from broader wildcards).
Why the other options are incorrect
A: Microsoft.Storage/storageAccounts/* — Grants all control-plane operations (write/delete). Violates least privilege.
C: …/blobServices/containers/blobs/read — Data-plane read of blob content; doesn’t provide storage configuration visibility.
D: …/listkeys/action — Lets users retrieve account keys (highly privileged). Beyond “view config.”
E: …/blobServices/read — Reads blob service settings only; doesn’t cover full storage account configuration (encryption, networking at account scope, etc.).
F: Microsoft.Resources/subscriptions/resourceGroups/read — RG metadata only; doesn’t allow reading storage account configuration.

---

### Question 60

Contoso’s cloud team has standardized a tagging policy requiring every resource to include:
Department,
CostCenter, and
Environment.
They’ve applied an Azure Policy at the subscription level to enforce tagging, and assigned the Tag Contributor role to specific resource groups for operational staff.
During a review, Erin, who is a Contributor on RG-Apps, tries to apply a missing CostCenter tag to a virtual machine using the Azure portal. The operation fails with a policy violation message stating the tag is required.
What should Erin do to successfully apply the tag?

**Options:**

- **A.** A. Assign herself the Tag Contributor role
- **B.** B. Modify the Azure Policy to disable enforcement
- **C.** C. Add the required tag key/value that complies with the policy ✅
- **D.** D. Use Azure CLI to bypass the policy enforcement

**Correct answer:** C

**Explanation:**

Azure Policy enforces organizational standards such as required tags. The Contributor role can modify tags as long as the update complies with policy requirements. To resolve the failure, Erin must add the CostCenter tag with an approved value so that the resource meets compliance. Policies cannot be bypassed through CLI or the portal.
Why the others are incorrect:
A: Erin already has sufficient rights as a Contributor; adding Tag Contributor wouldn’t override policy restrictions.
B: Only users with Policy Contributor or Owner can modify policies; Erin isn’t authorized, and it’s not recommended.
D: Azure CLI obeys Azure Policy—there’s no way to bypass enforcement through tools.

---

## Practice Set 17

Source: https://skillcertpro.com/az-104-exam-questions/17/

### Question 2

Priya must work on **vm1** in **RG-App**. What can Priya do on **vm1** given the assignments above?

**Options:**

- **A.** A. Start vm1
- **B.** B. Assign Owner
- **C.** C. View properties/metrics ✅
- **D.** D. Delete vm1

**Correct answer:** C

**Explanation:**

Priya has **Reader** at RG-App, which allows **read-only** actions: view properties, metrics, logs, and inventory. Reader **does not** permit starting, stopping, modifying, or deleting resources, and it **does not** allow granting access—those require roles like **Contributor** (for writes) or **User Access Administrator/Owner** (for RBAC changes). No other higher-scope roles apply to Priya in this scenario.

**Why the others are incorrect:**

- **A:** **Start** is a write/control operation; Reader can’t perform it.

- **B:** Assigning roles requires **User Access Administrator** or **Owner** at the scope; Reader can’t grant access.

- **D:** **Delete** is a write operation; Reader cannot delete resources.

---

### Question 3

You have a Microsoft Entra tenant that contains the users shown in the following table.

The tenant contains the groups shown in the following table.

Self-service password reset (SSPR) needs to be configured for the tenant.

For which group can SSPR be enabled?

**Options:**

- **A.** A. Group1 only
- **B.** B. Group2 only
- **C.** C. Group3 only
- **D.** D. Group1 or Group2 only ✅
- **E.** E. Group1 or Group3 only
- **F.** F. Group1, Group2, or Group3

**Correct answer:** D

**Explanation:**

Choice D is correct. **Self-Service Password Reset (SSPR)** in Microsoft Entra ID can be scoped to **selected groups** or **all users**. When configuring SSPR for selected users, the feature supports **security groups** and **Microsoft 365 groups**, because these group types are recognized as valid dynamic or static membership containers in Entra ID.

- **Group1**, being a **security group**, is supported because it represents a set of user objects that can be managed collectively for access and policy assignments, including SSPR eligibility.

- **Group2**, a **Microsoft 365 group**, is also supported, as it is backed by Azure AD and behaves like a security-enabled group in most Entra administrative functions.

However, **Group3**, a **mail-enabled security group**, is not valid for SSPR scoping. These groups are hybrid (Exchange-based) objects primarily used for mail routing and distribution, not for Azure AD access or policy scoping. Microsoft Entra does not allow them to be targeted for password reset policy configuration.

Why the others are incorrect

A: Incomplete—Microsoft 365 groups are also supported.

B: Incomplete—Security groups are supported too.

C: Incorrect—Mail-enabled security groups are not valid for SSPR targeting.

E: Incorrect—Mail-enabled security groups are not supported for SSPR.

F: Incorrect—Group3 cannot be used for SSPR scope.

---

### Question 6

Contoso must move a production VM to a different **subscription** under the same Azure AD tenant to align with new billing. The VM will remain in the **same region** and attached to the same VNet. A short maintenance window is acceptable. You want to use a **native, supported move** that preserves the VM and its dependent resources (NIC, public IP, disks) with minimal changes.

You need to move **prod-web-01** and its dependencies to a **different subscription** in the **same region**, using a **supported move** with minimal manual steps. **Which option should you choose?**

**Options:**

- **A.** A. Azure Resource Mover
- **B.** B. Move resources (to another subscription) ✅
- **C.** C. Azure Site Recovery (ASR)
- **D.** D. Azure Migrate

**Correct answer:** B

**Explanation:**

**Moving resources across subscriptions** (same region) is a **native ARM move** that keeps the VM and its dependent resources together. It’s performed via the portal’s **Move → Move to another subscription** (or **Move-AzResource**), automatically handling references so that NICs, public IPs, and disks move with the VM. This fits the scenario’s **same-region** and **short downtime** requirements without introducing a new migration stack.

**Azure Resource Mover** is designed primarily for **cross-region** moves; using it for a same-region subscription change would add needless orchestration. ASR and Azure Migrate are migration tools that replicate and (re)create VMs, which is unnecessary when a **first-party ARM move** is supported.

Why others are incorrect

A. Azure Resource Mover targets **region-to-region** moves; it’s not required for a **same-region subscription** move.

C. ASR focuses on **replication/failover** workflows and creates new target VMs rather than performing an ARM move.

D. Azure Migrate is for **on-prem/other-cloud-to-Azure** or complex migrate scenarios, not a native **subscription move** within the same region.

---

### Question 8

Tailwind Traders still runs a legacy VM with **unmanaged disks (page blobs)** and wants to standardize on **managed disks** for easier scaling, snapshotting, and RBAC. They prefer a **native, in-place conversion** with minimal changes.

You need to convert **tt-legacy-web-01** to **managed disks** with **minimal operational effort** and without rebuilding the VM. **Which option should you choose?**

**Options:**

- **A.** A. Azure Migrate
- **B.** B. Snapshot each VHD and create managed disks manually
- **C.** C. az vm convert ✅
- **D.** D. Azure Site Recovery (ASR) failover to a new VM

**Correct answer:** C

**Explanation:**

**az vm convert** performs an **in-place conversion** of a VM’s **unmanaged OS and data disks** to **managed disks**, preserving the existing VM identity and references. This avoids re-creation steps, reduces risk, and aligns with the requirement to **minimize operational effort**.

By staying with the same VM and simply changing the disk control plane from storage accounts to managed disks, you gain easier lifecycle management (snapshots, scaling, RBAC) without redesigning the deployment.

Why others are incorrect

A. Azure Migrate targets server discovery and migration scenarios; it’s unnecessary for a simple in-place **disk control plane** change.

B. Manual snapshot-and-recreate works but is **heavier operationally** and error-prone compared to the native conversion.

D. ASR replicates and **creates a new VM**, not an in-place conversion; it adds complexity you don’t need.

---

### Question 36

Contoso is onboarding 4,500 new employees across regions. You have to assign Microsoft 365 E3 automatically on join and remove it on exit, with minimal admin effort and no scripts. Contractors must be excluded by rule.
What should you implement?

**Options:**

- **A.** A. Direct user assignment
- **B.** B. Role assignment
- **C.** C. Nested groups
- **D.** D. Dynamic group + group-based licensing ✅

**Correct answer:** D

**Explanation:**

Create a dynamic security group that includes only users who match your HR attributes (for example, user.userType -eq “Member“ and department -eq “Sales“). Assign the Microsoft 365 E3 license to that group using group-based licensing. Membership changes drive license add/remove automatically, so hires get licensed at join and leavers lose the license when they drop out of scope no scripts or manual steps.
Why the others are incorrect:
A: Direct assignment doesn’t scale; every hire/termination requires manual license updates.
B: Directory roles manage admin privileges, not end-user product licensing.
C: Group-based licensing does not support nested group expansion; indirect members won’t receive licenses.

---

### Question 53

A new resource group named RG-Finance was created by Arjun, who has the Owner role at the subscription level. He notices that none of the resources inside inherit the subscription-level tags. Arjun wants to apply consistent tags automatically whenever new resources are created.
What’s the best solution to ensure all future resources in RG-Finance receive the correct tags automatically?

**Options:**

- **A.** A. Manually apply tags to each resource after creation
- **B.** B. Use an Azure Policy with the “inherit tags from resource group” effect ✅
- **C.** C. Enable tag inheritance in the Azure Resource Manager (ARM)
- **D.** D. Assign the Tag Contributor role at the resource level

**Correct answer:** B

**Explanation:**

Azure Policy can automatically apply or inherit tags from a parent scope, such as a resource group. The “inherit tags from resource group” policy ensures consistency and compliance across all deployed resources, reducing manual errors.
Why the others are incorrect:
A: Manual tagging is prone to human error and doesn’t scale.
C: Azure Resource Manager doesn’t natively support automatic tag inheritance without Policy.
D: The Tag Contributor role allows editing tags but doesn’t automate their creation or inheritance.

---

### Question 54

Contoso is migrating large media content and logs between storage accounts in the same tenant. The operations team needs reliable, high-performance transfers that preserve metadata and can resume after interruptions. Non-technical support staff need an easy GUI for ad-hoc browsing, small uploads/downloads, and setting container access properties.
You must copy 25 TB of large blobs (100+ GB files) from storage-src to storage-dest, preserve blob metadata and MD5 hashes, and be able to resume if a transfer breaks. You need the fastest, scriptable, production-ready tool to run from a VM.
Which tool should you use?

**Options:**

- **A.** A. AzCopy ✅
- **B.** B. Azure Storage Explorer
- **C.** C. Azure Portal upload blade
- **D.** D. Azure Data Factory

**Correct answer:** A

**Explanation:**

AzCopy is a command-line, high-performance tool built for large-scale blob transfers. It supports automatic concurrency tuning, checksum/MD5 verification, metadata preservation, and resume capability for interrupted copies (/V and –overwrite/sync options). It’s scriptable for automation on a VM or runbook and is the recommended tool when throughput, reliability, and resumability matter for terabyte-scale moves.
Why the others are incorrect:
B: Storage Explorer is GUI-focused and convenient for small ad-hoc tasks, but it’s too slow and manual for multi-terabyte bulk transfers.
C: The portal upload is intended for small uploads; it lacks advanced resume, performance, and scripting features.
D: Data Factory can move data at scale and integrate pipelines, but it’s heavier to provision and orchestrate for a one-time, checksum-preserving lift-and-shift compared with AzCopy’s simplicity and speed.

---

### Question 57

You have an Azure subscription named Subscription1 that contains a resource group named RG1 with the following properties:
Region: West US
Tag: “tag1“: “value1“
You assign an Azure Policy named Policy1 to Subscription1 using these settings:
Exclusions: None
Policy definition: Append a tag and its value to resources
Assignment name: Policy1
Parameters:
Tag name: tag2
Tag value: value2
After assigning the policy, you create a storage account with the following configuration:
Name: storage1
Region: West US
Resource group: RG1
Tags: “tag3“: “value3“
Which tags are assigned to storage1?

**Options:**

- **A.** A. “tag3“: “value3“ only
- **B.** B. “tag1“: “value1“ and “tag3“: “value3“ only
- **C.** C. “tag2“: “value2“ and “tag3“: “value3“ only ✅
- **D.** D. “tag1“: “value1“, “tag2“: “value2“, and “tag3“: “value3“
- **E.** E. “tag2“: “value2“ only
- **F.** F. “tag1“: “value1“ only

**Correct answer:** C

**Explanation:**

Choice C is correct. Azure tags are not inherited automatically from a resource group or subscription. This means that when you create a new resource—such as storage1—it does not automatically receive the tag “tag1“: “value1“ from RG1.
However, Policy1 was assigned at the subscription level with a definition type of “Append a tag and its value to resources“. Because the policy has no exclusions and is applied to all resources in Subscription1, it automatically appends the defined tag (“tag2“: “value2“) to any resource created after the policy is in effect.
When storage1 was created, it already included “tag3“: “value3“ in its configuration. The policy then appended “tag2“: “value2“, resulting in the following tags:
“tag2“: “value2“  
“tag3“: “value3“
Final tag set on storage1:
“tag2“: “value2“ (added by policy)
“tag3“: “value3“ (defined during creation)
Why the others are incorrect
A: Incorrect — “tag3“: “value3“ is present, but the policy appends “tag2“: “value2“.
B: Incorrect — resource group tags (“tag1“: “value1“) are not inherited automatically.
D: Incorrect — “tag1“: “value1“ from RG1 does not apply to new resources.
E: Incorrect — “tag3“: “value3“ is user-defined and remains.
F: Incorrect — no inheritance of RG1’s tag.

---

### Question 59

Refer to Northwind Traders (I) Case Study : AZ-104:
https://docs.google.com/document/d/1epkoAw5-c-Dg62nsP1g5j7KMVQZUnQNaeU21ZD-K0Z0/edit?usp=sharing
Northwind must ensure that only the Pilot group can join devices to Microsoft Entra. At the moment of device registration/join, users must complete MFA (mobile phone verification is acceptable). You want the simplest, supportable configuration.
Which TWO configurations should you implement?

**Options:**

- **A.** A. Turn on Security defaults for the tenant
- **B.** B. In Entra ID > Devices, set Users may join devices to Azure AD = Selected and choose Pilot ✅
- **C.** C. Create a Conditional Access policy targeting User actions: Register or join devices and require MFA ✅
- **D.** D. Assign the Device Enrollment Manager role to the Pilot group

**Correct answer:** B, C

**Explanation:**

Choice B and C are correct. The device setting scopes who can perform Azure AD device join—selecting Pilot enforces the “only Pilot can join devices” requirement. A Conditional Access policy with the User actions: Register or join devices control forces MFA at the exact time of join, meeting the mobile-phone verification requirement without burdening other sign-ins.
Why the others are incorrect
A: Security defaults apply broad protections but don’t narrowly scope device join to a specific group or enforce MFA specifically at join.
D: Device Enrollment Manager is an Intune role for bulk enrollment scenarios and does not control Entra device join or MFA at join.

---

### Question 3

Fabrikam wants a single, simple experience where users register both MFA and SSPR together to reduce helpdesk calls. They will roll this out to all licensed users and want to avoid separate campaigns and portals.
“To enable a unified SSPR + MFA registration flow, turn on __________.”

**Options:**

- **A.** A. Security defaults
- **B.** B. SSPR (Selected)
- **C.** C. Registration campaign
- **D.** D. Combined registration ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Combined security info registration merges MFA and SSPR enrollment into one wizard, reducing friction, improving completion rates, and aligning recovery methods across both features. It requires no separate campaigns and becomes the default registration path for users in scope.
Why the other options are incorrect
A: Security defaults enforce baseline protections but don’t deliver the combined registration UI; experience remains fragmented.
B: Enabling SSPR for a scope controls who can reset, not how they register; it doesn’t unify MFA+SSPR enrollment.
C: Registration campaigns prompt users but still rely on the existing registration flows; they don’t replace the combined experience toggle.

---

### Question 18

Adventure Works runs **hybrid identity** with several user groups. IT wants users to reset passwords **via the cloud** and ensure **hybrid users’** resets update **on-premises AD**. They also want to keep **cloud-only** groups working as-is. Choose the control that solves this **for all hybrid groups** without changing sign-in method.

Which option should you choose?

**Options:**

- **A.** A. Enable SSPR (All)
- **B.** B. PTA + Seamless SSO
- **C.** C. Enable password writeback in AAD Connect ✅
- **D.** D. Require 2 SSPR methods

**Correct answer:** C

**Explanation:**

Choice C is correct. **Password writeback in Azure AD Connect** enables **cloud-initiated resets** to be **written back** to the **on-premises AD** for **hybrid users** (Finance, Sales, Field Engineers). It preserves the existing sign-in topology (PTA/Fed/Seamless SSO unchanged) and leaves **cloud-only** users (Marketing) unaffected because their resets are already authoritative in Entra ID. This is the **supported**, low-friction way to unify SSPR behavior across hybrid and cloud-only populations.

Why the other options are incorrect

A: Turning on SSPR alone allows cloud resets but **won’t update on-prem AD** for hybrid users—core requirement unmet.

B: Changing or reconfiguring sign-in (PTA/Seamless SSO) does **not** provide writeback; it only affects **authentication path**, not **password flow**.

D: Requiring two methods raises assurance but **doesn’t enable writeback**; the problem isn’t method strength—it’s synchronization to **on-prem**.

---

### Question 22

You have an Azure subscription named Sub1 that contains the Azure resources shown in the following table.

You assign an Azure policy that has the following settings:

- Scope: Sub1

- Exclusions: Sub1/RG1/VNET1

- Policy definition: Append a tag and its value to resources

- Policy enforcement: Enabled

- Tag name: Tag4

- Tag value: value4

You assign tags to the resources as shown in the following table.

For the statement below, select Yes if the statement is true. Otherwise select No.

**“Storage1 has the Tag1:subscription, Tag2:IT, Tag3:value1, and Tag4:value4 tags assigned.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Choice No is correct.

Azure Policy with the “Append a tag and its value to resources” definition automatically adds the specified tag to all resources within the scope of the assignment unless they are explicitly excluded. In this case, the scope is the entire subscription (Sub1), with an exclusion only for VNET1. Since Storage1 resides within Sub1 and is not excluded, the policy will automatically append the Tag4:value4 tag to it.

However, Storage1 already has Tag3:value1 assigned manually and does not contain Tag1 or Tag2. The policy only appends Tag4, and does not overwrite or create other tags unless explicitly defined. Therefore, Storage1 ends up with only Tag3:value1 (manual tag) and Tag4:value4 (policy-applied tag). It does not have Tag1:subscription or Tag2:IT.

In summary:

Tag1 and Tag2 were never assigned to Storage1.

Tag3 exists because it was manually applied.

Tag4 is appended automatically by policy.

As a result, Storage1 has two tags (Tag3 and Tag4), not four.

---

### Question 26

You want automated tiering/deletion to reduce costs while meeting data retention patterns. Rules should be **prefix-targeted** and include **versions** where needed.

Environment

Which option should you choose?

**Options:**

- **A.** A. Manual tier changes by script
- **B.** B. Set account default tier to Cool
- **C.** C. Lifecycle rules with prefix filters and age-based actions ✅
- **D.** D. Immutable policy for 1 year

**Correct answer:** C

**Explanation:**

Choice C is correct. **Lifecycle management** supports **per-prefix filters** and **actions** (move to Cool/Archive, delete) based on **last modified** (and **versions**, if selected). You can target **base blobs only** or **base + versions** and apply different day thresholds per prefix to meet each pattern.

Why the other options are incorrect

A: Scripts are manual and error-prone; the requirement is **automated policy**.

B: A default Cool tier is **global** and blunt; it doesn’t handle **per-prefix rules** or deletions.

D: **Immutability** locks data and **prevents lifecycle deletions** while the policy is active.

---

### Question 29

You’re designing vault placement for multiple workloads. **Backup must occur in the same region as the resource**, but you want to minimize the number of vaults while staying within support boundaries.

**Environment**

****

Which option should you choose?

**Options:**

- **A.** A. One vault in Australia East for all rows
- **B.** B. One vault per resource group
- **C.** C. Two vaults: one in Australia East, one in Australia Southeast
- **D.** D. Three vaults: one per workload ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. **Backups are region-scoped**: a vault must reside **in the same region** as the protected resource. That means **VM set A** and **Azure Files** (both in **Australia East**) can share **one vault** there, while **VM set B** requires a **separate vault** in **Australia Southeast**. That yields **two** vaults. However, you asked to **minimize vaults while staying within boundaries** and to **keep workloads isolated**; creating **three vaults (one per workload)** enforces **clear separation** (prod vs DR vs files) for RBAC, lifecycle, and retention differences without mixing recovery points. (If absolute minimization were the only goal, two vaults would suffice—one per region—but the table’s isolation line favors three.)

Why the other options are incorrect

A: A single vault in **Australia East** can’t back up resources in **Australia Southeast**.

B: Vaults don’t need to follow **resource group** boundaries; this may **over- or under-scope** protection.

C: Two per region satisfies placement but **mixes prod and files** into one vault, weakening isolation the table calls out.

---

### Question 32

Refer to Northwind Traders (I) Case Study : AZ-104:
https://docs.google.com/document/d/1epkoAw5-c-Dg62nsP1g5j7KMVQZUnQNaeU21ZD-K0Z0/edit?usp=sharing
Northwind must enable Microsoft 365/Azure sign-in from the on-prem AD while preventing user passwords or password hashes from being stored in Azure. Users should have seamless sign-on on domain-joined devices with the least operational overhead.
Which authentication method should you implement?

**Options:**

- **A.** A. Azure AD Connect with Password Hash Sync (PHS) + Seamless SSO
- **B.** B. Azure AD Connect with Pass-through Authentication (PTA) + Seamless SSO ✅
- **C.** C. AD FS federation with Web Application Proxies (WAP)
- **D.** D. Cloud-only users and password writeback

**Correct answer:** B

**Explanation:**

Choice B is correct. Pass-through Authentication validates passwords on-premises via lightweight PTA agents, so no password hashes are stored in Azure. Adding Seamless SSO provides transparent sign-in for domain-joined devices. Compared to AD FS, PTA is simpler to deploy and operate (fewer servers, no external federation endpoints) while still meeting the constraint against storing hashes in the cloud.
Why the others are incorrect
A: PHS stores password hashes in Azure (contradicts the requirement), even though it’s simple.
C: AD FS avoids storing hashes in Azure but adds significant infrastructure (farm + WAP), certificates, and management overhead.
D: Cloud-only identities break the single-identity model and do not deliver hybrid sign-on from the existing AD.

---

### Question 34

Refer to Northwind Traders (I) Case Study : AZ-104:
https://docs.google.com/document/d/1epkoAw5-c-Dg62nsP1g5j7KMVQZUnQNaeU21ZD-K0Z0/edit?usp=sharing
Blueprint files will live in an Azure Blob container. Northwind must give partners temporary, secure access for upload/download without creating partner user accounts. Public access on the storage account is disabled, and admin effort should be minimal.
Which approach best meets the requirement?

**Options:**

- **A.** A. Generate an account-level SAS for the storage account and share it with partners indefinitely
- **B.** B. Invite partner users as B2B guests and assign Storage Blob Data Contributor to the container
- **C.** C. Generate a container-level SAS for the partner container using a stored access policy with start/expiry times and limited permissions (and optional IP ranges) ✅
- **D.** D. Enable SFTP for the storage account and create local SFTP users for each partner, provide global administrator privileges for each partner to foster collaboration

**Correct answer:** C

**Explanation:**

Choice C is correct. A container-level SAS scoped by a stored access policy delivers time-bound, least-privilege access without creating identities. You can constrain permissions (read/write/list), set start/expiry, limit by IP, and revoke access centrally by removing/altering the stored access policy—meeting the “temporary” and “no partner accounts” requirements while keeping administration lightweight.
Why the others are incorrect
A: An account-level SAS is overly broad and risky; if leaked, it exposes multiple containers/services and is harder to revoke granularly.
B: B2B guest access creates partner identities (explicitly disallowed) and adds lifecycle overhead.
D: SFTP with local users adds key/user management; still creates accounts and increases operational burden.

---

### Question 36

Contoso has hundreds of partner guests already in the tenant. Security requires MFA for all guest/external users when accessing Microsoft 365 apps, but member users should not be impacted. The solution should use built-in capabilities and remain easy to target and report on.
Requirements
• Target only guest/external users
• Enforce MFA for app access
• No change to members’ sign-in flow
Which option should you choose?

**Options:**

- **A.** A. Enable Security defaults
- **B.** B. Conditional Access (Guests): Grant ? Require MFA ✅
- **C.** C. Per-user MFA for all accounts
- **D.** D. Turn off “Guests can invite” tenant setting

**Correct answer:** B

**Explanation:**

Choice B is correct. A Conditional Access policy scoped to Guest or external users with Grant ? Require multifactor authentication enforces MFA only for that user category. CA is evaluated at sign-in, supports app targeting, provides report-only testing, and surfaces clear sign-in logs for auditing—meeting the need for precision and manageability without affecting members.
Why the other options are incorrect
A: Security defaults apply broad baseline policies and can’t precisely scope to guests only; members would be impacted.
C: Per-user MFA is coarse, harder to manage at scale, and easily drifts; it also risks enabling MFA on member accounts, violating the requirement.
D: The “Guests can invite” toggle controls who can send invitations, not sign-in requirements. It doesn’t enforce MFA for existing or future guests.

---

### Question 49

Finance needs invoice access and cost analysis for a single subscription to reconcile monthly charges. They must not have permission to create, modify, or delete Azure resources. The solution should use built-in roles with minimal overhead.
Requirements
• View invoices and charges
• Analyze costs for the subscription
• No resource management rights
Which option should you choose?

**Options:**

- **A.** A. Reader
- **B.** B. Cost Management Reader
- **C.** C. Billing Reader ✅
- **D.** D. Contributor

**Correct answer:** C

**Explanation:**

Choice C is correct. Billing Reader is a billing-scope role that grants access to invoices/charges and cost details without any resource management permissions. It’s the correct separation of duties: billing visibility without Azure RBAC write capabilities on resources.
Why the other options are incorrect
A: Reader (Azure RBAC) can view resources but not billing artifacts like invoices.
B: Cost Management Reader can view cost analysis but does not grant invoice access; you still need a billing role for invoices.
D: Contributor can modify resources—violates the “no changes” requirement and still doesn’t provide invoices.

---

### Question 53

You’re converting a Bicep file so it can deploy a role assignment at the subscription level (not the resource group). The rest of the template uses modules targeting RG scope. You want a single line that sets the correct deployment scope for this file.
“To deploy at the subscription level, set __________ at the top of the Bicep file.”

**Options:**

- **A.** A. existing
- **B.** B. module
- **C.** C. targetScope ✅
- **D.** D. output

**Correct answer:** C

**Explanation:**

Choice C is correct. In Bicep, targetScope = ‘subscription‘ (or ‘tenant‘, ‘managementGroup‘, ‘resourceGroup‘) declares where the deployment is executed. This affects symbol resolution, what resource types are legal, and which built-in deployment outputs are available. By setting targetScope explicitly, you avoid confusing errors like “Invalid resource type for the deployment scope” and ensure your role assignments or policy definitions are authored at the correct scope. You can still consume modules at other scopes by passing a scope to the module, but the file’s default behavior becomes subscription-scoped.
Why the other options are incorrect
A: existing marks an existing resource declaration; it doesn’t set deployment scope.
B: module declares a module; modules inherit or are passed a scope but don’t define the file’s scope.
D: output returns values from a deployment; it’s unrelated to where the deployment runs.

---

### Question 54

A production resource group hosts multiple mission-critical services managed by different teams. Leadership wants to prevent accidental deletion of the resource group and its resources while still allowing day-to-day configuration changes and deployments. The control must be quick to apply and enforced regardless of RBAC permissions.
Which option should you choose?

**Options:**

- **A.** A. Delete lock on the resource group ✅
- **B.** B. Read-only lock on the resource group
- **C.** C. Assign Owner to the platform team
- **D.** D. Azure Policy (deny delete)

**Correct answer:** A

**Explanation:**

Choice A is correct. A Delete (CanNotDelete) lock at the resource group scope blocks delete operations on the RG and all contained resources, while still allowing updates (PUT/PATCH). Locks are enforced by the Resource Manager control plane and can’t be overridden by RBAC—even Owners must remove the lock first—so they’re ideal for preventing accidental deletions without freezing normal changes.
Why the other options are incorrect
B: A Read-only lock blocks both deletes and writes, which would break routine updates and deployments—too restrictive for the requirement.
C: Granting Owner is a permission change, not a guardrail; Owners could still delete the RG or resources.
D: Azure Policy can deny based on resource state/properties, but it’s not a reliable, universal delete blocker for an entire RG; locks are the recommended, deterministic mechanism for delete protection.

---

### Question 55

You need to configure a new Azure App Service named WebApp1.
The solution must meet these requirements:
Verify a custom domain name: app.contoso.com
Automatically scale up to eight instances
Minimize cost and administrative effort
Which pricing plan should you choose?

**Options:**

- **A.** A. Basic
- **B.** B. Free
- **C.** C. Shared
- **D.** D. Standard ✅

**Correct answer:** D

**Explanation:**

Choice D is correct.
The Standard App Service plan supports both custom domain bindings and auto-scaling up to 10 instances. It strikes the required balance of functionality and cost—sufficient for production workloads that need scaling but don’t require Premium-level capacity or isolated environments.
Why the others are incorrect
A: Basic supports custom domains but only manual scaling, not automatic scaling.
B: Free allows no custom domains or scaling beyond a single shared instance.
C: Shared also cannot bind custom domains or scale automatically; it shares compute across tenants.

---

### Question 60

A partner’s ad-hoc SAS tokens for several containers were accidentally posted in a wiki. Security wants the ability to instantly revoke those tokens and centrally control expiry/permissions going forward without rotating account keys or breaking other apps. You must implement a tenant-friendly pattern that scales across containers.
Which option should you choose?

**Options:**

- **A.** A. Create stored access policies on each container and issue SAS tokens bound to those policies ✅
- **B.** B. Rotate the storage account keys
- **C.** C. Issue service SAS tokens directly (no policy) with short expiry
- **D.** D. Use RBAC (Storage Blob Data Reader) instead of SAS

**Correct answer:** A

**Explanation:**

Choice A is correct. A stored access policy (at the container/share/queue/table) lets you bind service SAS tokens to a server-side policy (via a signed identifier). You can then revoke access immediately by deleting/renaming the policy or by bringing the policy’s expiry into the past; any SAS tied to that policy becomes invalid at once. Policies also give you centralized control over permissions and expiry for all SAS issued against that container—meeting the need to revoke quickly and manage at scale without rotating account keys.
Why the other options are incorrect
B: Rotating account keys would invalidate all service SAS signed with that key, causing broad disruption; the requirement explicitly says don’t rotate keys. It’s also not granular per container/partner.
C: Ad-hoc service SAS (no policy) cannot be centrally revoked; you must wait for each token to expire. Short lifetimes reduce risk but don’t allow instant revocation.
D: RBAC governs requests authenticated with Entra ID, not SAS. SAS bypasses RBAC, so assigning roles won’t revoke leaked SAS tokens.

---

## Practice Set 19

Source: https://skillcertpro.com/az-104-exam-questions/19/

### Question 1

You’re applying locks to protect the same RGs used in Q1. Requirements are below.

“To meet **RG-Prod**’s goal, configure a __________ lock at the **resource group** scope.”

**Options:**

- **A.** A. Read-only
- **B.** B. Delete ✅
- **C.** C. None
- **D.** D. Policy

**Correct answer:** B

**Explanation:**

Choice B is correct. A **Delete** (CanNotDelete) lock at the RG scope **blocks deletes** on the group **and** its resources while **still allowing updates**, which fits RG-Prod’s requirement to prevent accidental removals without freezing deployments.

Why the other options are incorrect

A: **Read-only** blocks **writes and deletes**, stopping normal updates — too restrictive.

C: **None** leaves high delete risk unmitigated.

D: **Policy** is not a lock; it doesn’t deterministically block deletes across all resource types.

---

### Question 2

You have a Microsoft Entra tenant that contains a user named User1 and a group named Group1.
You need to enable User1 the ability to add members to Group1. Your solution should minimize administrative effort.
What should you do?

**Options:**

- **A.** A. Add Group1 to new administrative unit and assign built-in Microsoft Entra role to User1
- **B.** B. Assign custom Microsoft Entra role to User1
- **C.** C. Modify Group1 owners ✅
- **D.** D. Modify Group1 properties

**Correct answer:** C

**Explanation:**

The simplest and least administrative way to let User1 add members to Group1 is to make User1 an owner of Group1. Microsoft states that group owners manage group membership and can add or remove members from the group. Microsoft’s PowerShell documentation also says group owners can modify the group.
This is less effort than creating an administrative unit or building a custom role. Administrative units are used to scope administrative permissions, and Microsoft notes that adding a group to an administrative unit brings the group itself into the administrative scope, not the members of the group. A custom role would work in some cases, but it requires extra design and assignment work that the question explicitly says to minimize.
Why the other options are incorrect:
• A. Add Group1 to new administrative unit and assign built-in Microsoft Entra role to User1 — This is more complex than necessary. Administrative units are intended to scope admin permissions, and Microsoft says that putting a group into an administrative unit brings the group into scope, but not the group’s members. That means this is not the simplest way to let one user manage membership for one specific group.
• B. Assign custom Microsoft Entra role to User1 — A custom role can be built for group management scenarios, but it requires creating and maintaining a custom permission set. Since group ownership already provides the needed ability to manage membership for that specific group, a custom role adds unnecessary administrative overhead.
• D. Modify Group1 properties — Changing group properties does not by itself delegate membership management to User1. The relevant control is ownership, because Microsoft ties the ability to add or remove members to the group owner role.

---

### Question 3

User Ops-Lead is a member of group RG-Owners, which has the Owner role on network-prod-rg. A deny assignment from a managed application in that RG denies Delete on virtual network resources. Ops-Lead also has a direct Reader assignment at the subscription. Ops-Lead attempts to delete a VNet in network-prod-rg.
What is the result?

**Options:**

- **A.** A. Delete succeeds because Owner overrides Reader
- **B.** B. Delete fails because Reader at subscription blocks delete
- **C.** C. Delete succeeds because group Owner overrides deny
- **D.** D. Delete fails because the deny assignment blocks delete ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. In Azure RBAC, deny assignments take precedence over allow assignments, regardless of whether the allow is direct or via group, and regardless of higher-level Reader/Contributor/Owner roles. Because a deny on Delete exists at the RG affecting VNets, effective permissions exclude Delete for Ops-Lead, and the operation fails—even though the user is in an Owner group. Reader at the subscription neither adds nor removes that deny; it simply grants read elsewhere.
Why the other options are incorrect
A: Owner does not override a deny; deny wins.
B: The Reader role doesn’t “block” delete when an allow exists—deny is the blocking factor, not Reader.
C: Group membership doesn’t bypass denies; all allows are evaluated and then deny removes the operation from the effective set.

---

### Question 14

Your company purchases a new Azure subscription.

You create a file named Deploy.json as shown in the below exhibit.

You connect to the subscription and run the following cmdlet:

New-AzDeployment -Location westus -TemplateFile “deploy.json”

For the statement below, select Yes if the statement is true. Otherwise, select No.

**“You can deploy a virtual machine to RG2.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Choice No is correct.

A **ReadOnly lock** on **RG2** blocks all **write operations** (PUT/PATCH/DELETE) on the resource group and everything inside it. Because an ARM/Bicep deployment into a resource group performs **write operations** (for example, creating Microsoft.Compute/virtualMachines, updating NICs, writing Microsoft.Resources/deployments records), the deployment will **fail** while the lock is in place. The lock is **inherited** by all child resources, so it doesn’t matter that you’re only trying to add a new VM—the lock on the RG prevents it.

Key points to remember

- **Scope &amp; inheritance:** A lock applied at the **resource group** level applies to **all resources** within that group.

- **Operation types affected:** ReadOnly allows GET/READ operations only; **creates, updates, deletes, and most state-changing POSTs** (like Start/Stop on a VM) are blocked.

- **RBAC vs. locks:** Having **Owner** or other high privileges does **not** bypass a management lock. Even owners must **remove the lock** (a write on the lock resource) before making changes.

- **Template ordering pitfall:** If your template **adds a ReadOnly lock early** and then tries to deploy more resources **in the same run**, subsequent writes will fail. Apply the lock **after** all resources are successfully deployed, or use **separate deployments**.

- **When you want changes but no deletion:** Use **CanNotDelete** instead of ReadOnly if your goal is to prevent accidental deletes while still allowing updates and deployments.

How to proceed:

- Temporarily **remove the ReadOnly lock**, deploy the VM, then **reapply** the lock.

- Better: run a **two-phase pipeline** — phase 1 deploys/updates resources; phase 2 applies the lock (idempotent).

- If ongoing updates are expected, consider switching to **CanNotDelete** and use **policy/approval** for change control rather than a blanket ReadOnly lock.

---

### Question 17

You’re consolidating governance under a single Entra tenant called **Tailwind-Prod**. Three existing subscriptions must be handled differently based on billing and identity constraints.

Subscriptions

For **Sub-B**, which option should you choose?

**Options:**

- **A.** A. Change directory ✅
- **B.** B. Transfer billing ownership
- **C.** C. Rename subscription
- **D.** D. Move resources to a new subscription

**Correct answer:** A

**Explanation:**

Choice A is correct. **Change directory** re-homes the **entire subscription** into the **Tailwind-Prod** tenant so it inherits that tenant’s **policies, PIM, and RBAC**, while **preserving existing resources** and their IDs. It avoids app redeploys and keeps data paths intact. You must satisfy prerequisites (e.g., supported offer type; remove unsupported features like certain enterprise apps/managed identities that block the move), but when feasible it’s the **least disruptive** way to consolidate **governance and identity** at the subscription level.

Why the other options are incorrect

B: **Billing transfer** changes **who pays**, not the **tenant** that governs RBAC/PIM/Policy; Sub-B would remain in Partner-Ops.

C: **Rename** affects only display name and doesn’t re-scope identity/governance.

D: **Move resources** works per resource type and is operationally heavy, with sequencing/unsupported-type risks; you’d rebuild access/policy anyway.

---

### Question 18

You’re finishing the **SalesAccess** group from the previous question. Membership must **track HR** automatically and **prevent manual “one-off” adds** that cause audit exceptions. Owners should manage policy, not individual users.

Which option should you choose **for SalesAccess**?

**Options:**

- **A.** A. Assigned membership
- **B.** B. Dynamic membership rule ✅
- **C.** C. Membership requests
- **D.** D. Mail-enabled security group

**Correct answer:** B

**Explanation:**

Choice B is correct. A **dynamic membership rule** enforces **attribute-based** membership (e.g., user.department -eq “Sales”). Entra computes membership and **auto-adds/removes** users as HR changes flow in (from provisioning or manual updates). Because the group is **dynamic**, **manual edits are disallowed**—which directly enforces the governance goal and eliminates shadow adds. The group remains a **security group** for RBAC, but its population is **policy-driven** instead of owner-curated.

Why the other options are incorrect

A: **Assigned** groups require **manual** adds/removes and are prone to drift; they violate the “no manual edits” goal.

C: **Membership requests** apply to M365 groups’ collaboration governance and don’t create an **attribute policy**; they still allow exceptions.

D: **Mail-enabled security** changes mail behavior, not the **membership model**; it doesn’t implement attribute rules.

---

### Question 20

You’re standardizing external access to three blob paths. Security forbids distributing account keys. Some partners need **AAD-backed** delegation; others need **central, instant revoke** across many issued tokens.

**Access needs**

****

Which option should you choose **for media/raw/**?

**Options:**

- **A.** A. User delegation SAS ✅
- **B.** B. Service SAS (adhoc)
- **C.** C. Account SAS
- **D.** D. Public access + IP allowlist

**Correct answer:** A

**Explanation:**

Choice A is correct. A **user delegation SAS** is signed with a **user delegation key obtained via Entra ID** for the **Blob service**. It avoids account keys, ties issuance to **AAD authorization**, and yields **fine-grained, time-scoped** tokens ideal for app-to-blob scenarios like CDN origin pulls. Because it’s derived from AAD, revocation aligns with **AAD token lifetimes** and the delegation key’s lifetime.

Why the other options are incorrect

B: A **service SAS (ad-hoc)** is signed with an **account key** and **can’t be centrally revoked**; you must wait for expiry or rotate keys.

C: An **account SAS** spans services and is signed with **account keys**; too broad and harder to contain if leaked.

D: **Public access** is disallowed and can’t enforce AAD-based delegation.

---

### Question 23

You’re standardizing data operations for three paths. Some flows must be **headless** and run on servers without Entra sign-in; others should be **GUI-driven** with user auth. You want resilient, **resume-capable** transfers and to avoid distributing account keys.

Operations table

For **logs/app/**, which option should you choose?

**Options:**

- **A.** A. AzCopy with SAS ✅
- **B.** B. Storage Explorer (Entra ID)
- **C.** C. AzCopy with managed identity
- **D.** D. Portal “Upload”

**Correct answer:** A

**Explanation:**

Using the Portal “Upload” feature would require user interaction and authentication, which is not suitable for headless operations. This option does not align with the need for standardized data operations that include both headless and GUI-driven flows.

Overall explanation

Choice A is correct. **AzCopy with a SAS** fits a **headless Windows Server** where interactive Entra sign-in isn’t available. You can script resilient, **recursive** transfers (/S), get **automatic retries/resume**, and run on a schedule. SAS scope/expiry keeps exposure minimal and avoids distributing account keys to the host.

Why the other options are incorrect

B: **Storage Explorer** is GUI-centric and requires a user session; it’s not ideal for **scheduled, headless** jobs.

C: **Managed identity** works only where the runtime can present an identity (e.g., VM/VMSS/Container Apps); a generic server without Entra-bound identity can’t use it.

D: **Portal uploads** are manual and fragile for **large, recurring** folder trees.

---

### Question 24

You need **central, policy-like** cost controls for the same three subscriptions. Finance wants budgets with **email + Teams** notifications, and leadership wants **Advisor savings recommendations** reviewed monthly.

**Cost controls**

****

Which option should you choose to meet these needs **without custom code**?

**Options:**

- **A.** A. Cost exports to Storage + Logic Apps
- **B.** B. Budgets with Action Groups (Azure Monitor) ✅
- **C.** C. Azure Advisor only
- **D.** D. Activity Log alerts

**Correct answer:** B

**Explanation:**

Choice B is correct. **Azure Budgets** generate **threshold signals** that you wire to **Action Groups** (email, Teams via webhook/Logic App, ITSM). Budgets can be scoped **per subscription** (Sub-A/C) and **at a management group** to **cover Sub-B and future prod subscriptions** with the same rule. This yields **centralized, reusable, auditable** alerts without code. You can also schedule **Advisor** review separately; budgets handle hard **thresholding and notifications**, while Advisor suggests **savings** (RI/SP, right-size) that you review monthly.

Why the other options are incorrect

A: Exports + Logic Apps are custom and brittle; budgets already emit **first-class signals** with Action Groups.

C: Advisor provides **recommendations**, not budget thresholds or multi-channel alerts.

D: Activity Log alerts don’t express **spend thresholds** and won’t cover cost overruns.

---

### Question 25

You’re standardizing SSPR across mixed identities. Security requires that **hybrid users’** resets update **on-prem AD**. Cloud-only users should keep working with **no changes**. Registration should remain **combined** with MFA to reduce prompts.

Cohorts / state

Which option should you choose?

**Options:**

- **A.** A. Enable password writeback in Azure AD Connect ✅
- **B.** B. Require 2 SSPR methods
- **C.** C. Switch to PTA + Seamless SSO
- **D.** D. Per-user MFA

**Correct answer:** A

**Explanation:**

Choice A is correct. **Password writeback** lets cloud-initiated SSPR **synchronize changes to on-prem AD** for hybrid users. Once enabled (with proper permissions on the sync agent and SSPR allowed for the cohort), **Finance** and **Sales** password resets flow back to AD, while **Marketing** (cloud-only) continues to reset in Entra ID—no change needed. This preserves your sign-in topology, keeps **combined registration** intact, and delivers one consistent SSPR experience with the correct authoritative target per cohort.

Why the other options are incorrect

B: Increasing methods strengthens proof but **doesn’t perform writeback** to on-prem AD.

C: Changing the sign-in method **does not** itself enable password writeback; it alters auth flow, not reset propagation.

D: Per-user MFA settings are unrelated to **where passwords are written**; they don’t provide writeback.

---

### Question 27

Three SMB shares have different protection goals. You need to choose the **most direct feature** for each without putting broad secrets on clients.

**Shares &amp; goals**

****

For **projects**, which option should you choose?

**Options:**

- **A.** A. Enable share snapshots
- **B.** B. Enable share soft delete (e.g., 14 days) ✅
- **C.** C. Enable point-in-time restore
- **D.** D. Enable immutability policy

**Correct answer:** B

**Explanation:**

Choice B is correct. **Share soft delete** protects the **entire file share** from accidental deletion by retaining a recoverable copy for a chosen **retention period** (e.g., 14 days). If someone deletes the **projects** share, you can **undelete the share** instantly without reseeding data or re-creating permissions. It’s the only Azure Files feature that specifically addresses **whole-share deletion** with a built-in grace period.

Why the other options are incorrect

A: **Share snapshots** capture file-system state for **in-place previous versions** and point-in-time file restore, but they **don’t bring back a deleted share** once it’s gone.

C: **Point-in-time restore** uses snapshots to restore **files/directories** within an **existing** share to a prior timestamp; it does not recover a **deleted** share.

D: **Immutability** locks content for retention/compliance (WORM); it does not provide an **undelete** path and may **prevent** expected modifications.

---

### Question 36

You manage an Azure subscription containing a Recovery Services vault named Vault1. To strengthen protection against accidental or malicious actions (for example, disabling soft delete or deleting backup items), you need to enable Multi-User Authorization (MAU) for Vault1.
Which resource should you create first?

**Options:**

- **A.** A. an administrative unit
- **B.** B. a managed identity
- **C.** C. a resource guard ✅
- **D.** D. a custom Azure role

**Correct answer:** C

**Explanation:**

Choice C is correct.
Before you can enable Multi-User Authorization (MAU) on a Recovery Services vault, you must first create a Resource Guard. The Resource Guard is a separate Azure resource that provides an additional layer of protection for privileged operations such as disabling soft delete, modifying backup policies, or stopping protection. Once a Resource Guard is created, it is linked to the vault and configured with an authorization list—typically a subset of users or groups who can approve critical actions. This ensures that high-impact operations require explicit consent from multiple parties, thereby implementing the principle of separation of duties and reducing insider threat risks.
Why the others are incorrect (expanded)
A: Administrative unit — Used in Microsoft Entra ID to delegate administrative rights over user or group subsets; it has no relationship to Recovery Services vault operations or MAU configuration.
B: Managed identity — Provides secure identity for apps or services to authenticate to Azure resources without credentials. It does not participate in MAU or resource protection workflows.
D: Custom Azure role — While roles and RBAC control access to Azure resources, MAU relies on a Resource Guard, not on role definitions, to enforce additional authorization. You may still use roles to control who can approve MAU operations, but that comes after the Resource Guard is deployed.

---

### Question 37

Tailwind Traders is starting a pilot with Fabrikam and must allow external collaboration only with users from fabrikam.com. Security wants a tenant-wide control so that invitations to any other external domains are blocked in Microsoft 365 workloads. Admin overhead should be minimal and centrally enforced.
Which option should you choose?

**Options:**

- **A.** A. Allowlist domain in External collaboration ✅
- **B.** B. Disable guest access in Teams
- **C.** C. Block external sharing in SharePoint admin center
- **D.** D. Conditional Access: block non-corporate email domains

**Correct answer:** A

**Explanation:**

Choice A is correct. External collaboration ? Collaboration restrictions lets you set “Allow invitations to only the specified domains” and add fabrikam.com. This is a directory-level control in Entra ID that governs who can be invited across connected services (Teams, SharePoint/OneDrive, etc.), giving a single, tenant-wide allowlist. It eliminates drift between service-specific settings and ensures any new workloads respect the same invite boundary without extra configuration.
Why the other options are incorrect
B: Disabling guest access in Teams affects Teams only and blocks all guests, not just non-Fabrikam domains. It doesn’t enforce a tenant-wide domain policy for invitations.
C: SharePoint admin sharing limits affect SharePoint/OneDrive scope, not tenant-wide invitations. Other services (e.g., Teams, Azure resources) may still invite guests.
D: Conditional Access governs access at sign-in, not who can be invited. You could still create guests from disallowed domains; they’d simply be blocked at sign-in—misaligned with the requirement to prevent invitations.

---

### Question 42

Refer to Adventure Works Cycles (I) Case Study : AZ-104
https://docs.google.com/document/d/1Zz2_H3e1z8UQOVK2kl8Z0uCT-FnpZrAK3cg2kKdd3fs/edit?usp=sharing
You must (1) deny public network access on all Storage accounts and (2) ensure required tags (Owner, CostCenter, Environment) are present on every resource with minimal admin effort. Dev RG is excluded.
Which TWO policy assignments best meet the requirements?

**Options:**

- **A.** A. Assign “Storage accounts should disable public network access” with Deny at subscription; exclude Dev RG ✅
- **B.** B. Assign “Require a tag and its value” for each required tag with Deny at subscription; exclude Dev RG ✅
- **C.** C. Assign “Inherit a tag from the resource group” with Modify for all tags; no remediation task
- **D.** D. Use RBAC to block creation of storage accounts without tags
- **E.** E. Create activity log alerts for storage public access

**Correct answer:** A, B

**Explanation:**

A enforces the platform control: the built-in policy denies creation/update of Storage accounts with Public network access enabled, satisfying the “disable public access” guardrail while honoring the RG exclusion.
B guarantees tags exist by denying non-compliant deployments (fast feedback, low ops). Where you prefer auto-fix, you can pair Modify with a remediation task—but the question prioritizes minimal admin effort and clear enforcement, which Deny provides out of the box.
Why the others are incorrect
C: Modify can auto-append tags, but without a remediation task existing resources won’t be updated; also “inherit RG tags” may not match required tag values policy-wide.
D: RBAC doesn’t validate resource properties like tags or public access; Policy is the right control plane.
E: Alerts don’t prevent misconfiguration; they only notify after the fact.

---

### Question 44

Refer to Adventure Works Cycles (I) Case Study : AZ-104
https://docs.google.com/document/d/1Zz2_H3e1z8UQOVK2kl8Z0uCT-FnpZrAK3cg2kKdd3fs/edit?usp=sharing
Security requires multi-user authorization for destructive actions such as Key Vault purge and disabling backup protections, while keeping workloads functional day-to-day.
What should you create and link?

**Options:**

- **A.** A. Resource Guard and link it to the vaults’ critical operations ✅
- **B.** B. Managed identity on the vault
- **C.** C. Custom RBAC roles for purge
- **D.** D. Administrative unit in Entra ID

**Correct answer:** A

**Explanation:**

A is correct. Resource Guard enforces Multi-User Authorization (MAU) by requiring an independent approver before critical operations (e.g., Key Vault purge, disable soft delete/backup) can proceed. You create a Resource Guard, configure protected operations, and link it to the Key Vault and Backup/Recovery Services vault(s). Day-to-day reads/writes continue normally; only sensitive actions require approval—achieving separation of duties without breaking workloads.
Why the others are incorrect
B: Managed identity is for workload authentication, not approval workflows for destructive ops.
C: Custom roles can restrict permissions but don’t implement a two-person rule across services.
D: Administrative units scope directory admin, not cross-service MAU for vault operations.

---

### Question 47

Contoso is opening its tenant to a single strategic partner, fabrikam.com. Security wants to block all other external domains, keep Teams/SharePoint collaboration working for Fabrikam, and avoid per-service exceptions. They also want a control that is tenant-wide, auditable, and easy to reverse if the pilot ends.
Requirements
• Only allow invitations to fabrikam.com
• Block invitations to any other domain
• Apply tenant-wide across Microsoft 365 workloads
Which option should you choose?

**Options:**

- **A.** A. Disable guest access in Teams
- **B.** B. Conditional Access: Require MFA for guests
- **C.** C. Turn off external sharing in SharePoint
- **D.** D. External collaboration restrictions: Allow invitations to only specified domains and add fabrikam.com ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. External collaboration restrictions (tenant-level) control who can be invited across services. Setting “Allow invitations to only specified domains” with fabrikam.com creates a single allowlist that all connected workloads respect (Teams, SharePoint/OneDrive, etc.). This prevents creation of non-Fabrikam guests rather than merely blocking them at sign-in, delivers a clear audit trail, and can be rolled back cleanly by switching to allow all or using a denylist.
Why the other options are incorrect
A: Turning off Teams guest access affects only Teams and blocks even Fabrikam guests; it’s not tenant-wide and breaks the requirement.
B: Conditional Access enforces sign-in conditions (e.g., MFA) but doesn’t govern who can be invited; non-Fabrikam guests could still be created.
C: SharePoint external sharing limits only SharePoint/OneDrive and won’t prevent guest invitations in other services.

---

### Question 49

Multiple App Service apps, plans, and Application Insights resources live in apps-prod-rg. The DevOps team needs to deploy/manage only those resources, and any new resources in that RG should be covered automatically. They must not gain rights in other RGs or subscriptions.
Requirements
• Scope rights to apps-prod-rg only
• Inherit to existing and future resources in that RG
• Avoid subscription-wide impact
Which option should you choose?

**Options:**

- **A.** A. Assign role at the management group
- **B.** B. Assign role at the subscription
- **C.** C. Assign role at the resource group ✅
- **D.** D. Assign role at each individual resource

**Correct answer:** C

**Explanation:**

Choice C is correct. Assigning at the resource group gives automatic inheritance to all current and future resources in that RG while excluding other RGs/subscriptions. This is the cleanest way to keep DevOps permissions scoped and future-proof: one assignment, inherited downward, no bleed-over to adjacent workloads.
Why the other options are incorrect
A: Management group scopes cascade to all subscriptions/RGs under it—far too broad.
B: Subscription scope grants access to every RG in that subscription.
D: Per-resource assignments meet least privilege but cause operational sprawl and miss future resources unless constantly maintained.

---

### Question 50

Finance mandates that every resource inherits environment and costCenter from its resource group. This must apply at scale across multiple subscriptions, auto-apply on new deployments, and retro-fix existing resources — without touching CI/CD templates. Some managed services require documented exceptions.
Requirements
• Auto-apply tags from RG to resources
• Backfill existing resources
• Central scope; allow exemptions where justified
Which option should you choose?

**Options:**

- **A.** A. Set tags on RGs and expect inheritance
- **B.** B. Add tags in ARM/Bicep templates
- **C.** C. Policy (Modify) at management-group scope + remediation + exemptions ✅
- **D.** D. Advisor recommendations

**Correct answer:** C

**Explanation:**

Choice C is correct. Tags don’t inherit natively, so you enforce inheritance with Azure Policy (Modify) that copies RG tags to resources. Assign at the management group to cover all child subscriptions/RGs, run a remediation task to backfill existing resources, and use policy exemptions for managed services that can’t accept the change. This achieves auto-apply, retro-fix, and central governance without changing deployment pipelines.
Why the other options are incorrect
A: RG tags do not cascade to child resources on their own.
B: Template tagging works for new deployments only and requires pipeline edits; it won’t backfill.
D: Advisor surfaces guidance but doesn’t enforce or apply tags.

---

### Question 54

You want new prod subscriptions to inherit baseline Azure Policy (tagging, SKU restrictions) and role assignments automatically the moment they’re added, without re-assigning at each subscription. Only prod subscriptions should get these controls.
“To ensure automatic inheritance for all current and future prod subscriptions, create a __________ and assign policy/roles at that level.”

**Options:**

- **A.** A. Resource group
- **B.** B. Subscription
- **C.** C. Management group ✅
- **D.** D. Tenant root group

**Correct answer:** C

**Explanation:**

Choice C is correct. A management group is the hierarchical scope above subscriptions where policy and RBAC assignments inherit to all child subscriptions. By creating a Prod management group and placing prod subscriptions under it, every current and future prod subscription automatically receives the same policies/roles. This matches least effort + maximum consistency while keeping non-prod in separate MGs with different baselines.
Why the other options are incorrect
A: A resource group is below a subscription and can’t apply controls across subscriptions.
B: Assigning at a subscription doesn’t catch new prod subscriptions automatically.
D: The tenant root group would apply to all subscriptions (prod and non-prod), not just prod.

---

### Question 55

You have a Microsoft Entra tenant that contains the following users:
User1 has a Department set to Sales and a Country set to USA
User2 has a Department set to Marketing and a Country set to USA
User3 has a Department set to Sales and a Country set to DE
User4 has a Department set to Marketing and a Country set to DE
You create a group named Group1 that has the following dynamic membership rule.
user.country -eq “USA“ -and user.department -eq “Marketing“ -or user.department -eq “Sales“
Which users are members of Group1?

**Options:**

- **A.** A. User1 and User2 only
- **B.** B. User1 and User3 only
- **C.** C. User2 and User3 only
- **D.** D. User1, User2, and User3 only ✅
- **E.** E. User1, User2, User3 and User4

**Correct answer:** D

**Explanation:**

Microsoft documents that in dynamic membership rules, -and has higher precedence than -or. That means this rule is evaluated as:
(user.country -eq “USA“ -and user.department -eq “Marketing“) -or (user.department -eq “Sales“)
Evaluating each user against that logic:
User1 matches because department = Sales.
User2 matches because country = USA and department = Marketing.
User3 matches because department = Sales, even though the country is DE.
User4 does not match because the first clause fails (country is not USA) and the second clause fails (department is not Sales).
So the members of Group1 are User1, User2, and User3. If you wanted the country requirement to apply to both Marketing and Sales, Microsoft notes that you should use parentheses, for example: user.country -eq “US“ -and (user.department -eq “Marketing“ -or user.department -eq “Sales“).
Why the other options are incorrect:
• A. User1 and User2 only — This excludes User3, but User3 still matches because the rule includes a separate -or user.department -eq “Sales“ clause. Since -and is evaluated before -or, the Sales condition stands on its own and is not restricted to USA.
• B. User1 and User3 only — This excludes User2, but User2 satisfies the first part of the rule because User2 is in USA and in Marketing. That makes User2 a valid member even without the Sales clause.
• C. User2 and User3 only — This excludes User1, but User1 matches because any user with department = Sales is included by the final -or condition. The country value does not block User1.
• E. User1, User2, User3 and User4 — User4 does not match. User4 is Marketing, but not in USA, so the first clause fails, and User4 is not in Sales, so the second clause fails too.

---

### Question 57

You want a single logical registry that serves low-latency pulls in Europe and Australia using regional endpoints, keeps replicas close to the builders/runtimes, and avoids creating/seeding multiple registries. Security will harden access separately (private endpoints/identities).
Which option should you choose?

**Options:**

- **A.** A. Enable admin user and use PATs
- **B.** B. Configure webhooks
- **C.** C. Private endpoint only
- **D.** D. Geo-replication ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Geo-replication keeps one ACR name while provisioning regional replicas that serve pushes/pulls locally in each geography. Images replicate within the same registry namespace, so builders and consumers hit nearest endpoints, reducing latency and egress. You avoid multi-registry sprawl, version drift, and duplicated pipelines while maintaining central RBAC/policies. Harden with private endpoints and managed identities separately as needed.
Why the other options are incorrect
A: The admin user is a broad static credential and doesn’t address regional performance or replication.
B: Webhooks notify clients of events; they don’t replicate images or add regional endpoints.
C: A private endpoint secures network access but doesn’t create regional replicas or reduce cross-region pulls on its own.

---

### Question 60

You plan access-based lifecycle rules: move blobs to Cool after 30 days since last access, and to Archive after 180 days since last access. No scripts—policy only.
“To enable access-based lifecycle actions, first turn on __________ at the account.”

**Options:**

- **A.** A. Immutability policy
- **B.** B. Versioning
- **C.** C. Change feed
- **D.** D. Last access time tracking ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Last access time tracking records when a blob was last read so lifecycle rules can evaluate days since last access for automatic tiering to Cool/Archive. Without it, rules can only use last modified time.
Why the other options are incorrect
A: Immutability locks retention and can block deletes/tiering; it doesn’t provide access timestamps.
B: Versioning enables version restore and copy behaviors, not access-based tiering.
C: Change feed tracks events but isn’t the signal lifecycle uses for “since last access.”

---

## Practice Set 20

Source: https://skillcertpro.com/az-104-exam-questions/20/

### Question 3

Your AppOps team must start/stop/redeploy VMs, reset local admin passwords, and attach disks, but must not modify VNets, load balancers, or storage accounts. You want a single built-in role that matches least privilege for compute management.
“To let AppOps manage VMs without granting network or storage rights, assign __________ at the appropriate scope.”

**Options:**

- **A.** A. Owner
- **B.** B. Virtual Machine Contributor ✅
- **C.** C. Contributor
- **D.** D. Reader

**Correct answer:** B

**Explanation:**

Choice B is correct. Virtual Machine Contributor grants broad compute-plane control (create/update/delete VMs, restart, redeploy, reset password/SSH, attach existing disks) while excluding network and storage resource management. It hits the least-privilege target for VM operations without granting permissions over VNets, load balancers, or storage accounts, which should remain with their respective owners/roles.
Why the other options are incorrect
A: Owner includes full control, including RBAC management—far beyond the requirement.
C: Contributor grants write across all resource types in scope, including networking and storage—too broad.
D: Reader is view-only; it can’t operate VMs.

---

### Question 7

Contoso is launching Project Aquila in Australia East. Dev identities must be cloud-only (no sync) and provisioned today. Blob access must use data-plane RBAC only (no keys/SAS) and be revocable by removing users from one group. Build agents egress via NAT Gateway (dynamic IP), so public IP allowlists are not viable.
Environment
Storage: GPv2 (Blob), private endpoints, Australia East
Identity: Cloud-only users, Entra ID
Access control: Data-plane RBAC only; no keys/SAS
Network: Dynamic egress (NAT Gateway)
You must onboard 50 developers and grant least-privilege blob access with a single change point. Scope must be the storage account; no keys/SAS; no on-prem sync. Which approach should you use?

**Options:**

- **A.** A. M365 group as Owner at the resource group; share the account keys.
- **B.** B. Cloud-only users; security group; assign Storage Blob Data Contributor at the storage account; no keys/SAS. ✅
- **C.** C. Sync via AAD Connect; security group; assign Contributor at subscription scope.
- **D.** D. Per-user Storage Account Contributor at the storage account; rotate keys.

**Correct answer:** B

**Explanation:**

Choice B is correct. You satisfy “no sync” by creating cloud-only identities. A single security group gives one control point for access grant/revoke and supports clean offboarding. Assigning Storage Blob Data Contributor is a data-plane role that grants blob read/write/delete without management-plane privileges; scoping it at the storage account keeps blast radius minimal while inheriting to containers. Eliminating keys/SAS removes shared secret distribution, rotation debt, and audit blind spots, and works regardless of NAT-GW dynamic egress. This is precisely the RBAC-first model Microsoft recommends for Storage data operations.
Why the others are incorrect
A: Owner at RG is full control-plane access across many resources (gross over-privilege). Sharing account keys bypasses Entra ID, breaks least privilege, complicates rotation, and weakens auditing.
C: Violates “no sync.” Contributor at subscription is massively over-scoped and grants management actions unrelated to blob data needs.
D: Per-user role assignments explode admin overhead and still grant control-plane rights; key rotation is irrelevant when keys/SAS are disallowed and RBAC is required.

---

### Question 8

A partner (Fabrikam) needs read-only access for 60 days to a single blob container in West Europe. Partner egress is a fixed public IP (203.0.113.24/32). Your tenant must restrict invitations to fabrikam.com and only allow guest sign-ins from that IP. SAS is disallowed by policy. Access must be least-privilege and time-governed.
Requirements
External collaboration: allow fabrikam.com only
IP restriction for guests: enforce 203.0.113.24/32 (Named location + CA)
Scope: container, data-plane read-only
Governance: access review (60-day window)
No SAS
Which configuration meets all requirements?

**Options:**

- **A.** A. Storage firewall rule; Reader at resource group; share SAS.
- **B.** B. Cross-tenant sync; Reader at subscription; user-delegation SAS.
- **C.** C. Allow all domains; rely on private endpoint; Storage Account Contributor at account.
- **D.** D. Restrict invites to fabrikam.com; Named location 203.0.113.24/32; Conditional Access for Guests (require sign-in from named location); guest group with Storage Blob Data Reader at the container; schedule an access review. ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. External collaboration settings block non-fabrikam domains at invite time, ensuring only approved tenants can be added. A Named location matching the partner’s /32 combined with a Conditional Access policy scoped to guest users forces token issuance only when sign-ins originate from the partner IP—this handles the network condition that RBAC alone cannot enforce. Assigning Storage Blob Data Reader at the container level grants least-privilege, data-plane read without control-plane rights or writes/deletes. An Access Review automates recertification/removal at 60 days, keeping entitlements time-bound. The design completely avoids SAS and leverages Entra ID tokens + RBAC, meeting the policy constraint.
Why the others are incorrect
A: Uses SAS (explicitly disallowed); RG Reader is control-plane and mis-scoped; firewall rules don’t restrict guest identity or source IP alone.
B: Subscription-level Reader is far too broad; still relies on SAS; cross-tenant sync doesn’t enforce IP requirements.
C: Opens invites to any domain; account-level Contributor is excessive (write/delete/control-plane); private endpoints don’t validate guest identity or partner IP by themselves.

---

### Question 10

Scenario
A data lake team wants to protect against accidental overwrites and deletions of blobs and also guard against entire container deletion. They want a 30-day recovery window and must be able to self-restore without backup.
Which THREE actions together meet the goal?

**Options:**

- **A.** A. Enable Blob soft delete (30 days) ✅
- **B.** B. Enable Container soft delete (30 days) ✅
- **C.** C. Enable Blob versioning ✅
- **D.** D. Enable Change feed
- **E.** E. Enable Immutable (time-based) policies on the container
- **F.** F. Set delete retention to 0 days to minimize cost

**Correct answer:** A, B, C

**Explanation:**

To survive deletes and overwrites at the blob level, you need Blob soft delete and Blob versioning. Blob soft delete preserves deleted data for a configured retention window (e.g., 30 days), enabling self-service undeletion; versioning retains prior versions, allowing recovery from accidental overwrites. To protect against container-level deletion, you must enable Container soft delete, which keeps the container and its content recoverable within the same retention period. The trio (A+B+C) provides comprehensive, in-place protection without requiring backups or external tooling.
Why the other options are incorrect
D: Change feed records events for downstream processing/audit but doesn’t make data recoverable by itself.
E: Immutability (WORM) locks data against changes/deletes; it’s for compliance retention, not general “oops” recovery, and would block legitimate modification workflows.
F: A 0-day retention disables soft delete protection and defeats the recovery requirement.

---

### Question 11

Scenario
Prod resources in rg-prod must be protected from accidental deletion while allowing day-to-day updates (scale, extension installs, backups). Teams must keep operating without change windows.
Proposed solution
Apply a ReadOnly lock at the rg-prod scope.
Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Choice No is correct. ReadOnly locks block all write operations (PUT/PATCH/DELETE). That prevents scaling, extension updates, VM agent changes, Policy remediation, and many backup/restore tasks—violating the need to keep operations running. To protect against accidental deletes while permitting writes, use a CanNotDelete lock at the required scope (resource or RG). CanNotDelete prevents deletion but still allows updates, matching the operational requirement. If only specific resources need protection (e.g., vnet/shared kv), apply the lock at resource scope to minimize blast radius; otherwise use RG scope for broad coverage.
Why Yes is incorrect
A ReadOnly lock is overly restrictive for continuous operations. It blocks legitimate write workflows (autoscale, extension deployments, backup jobs) and becomes a friction point that teams will attempt to bypass, undermining governance.

---

### Question 13

Hybrid tenant (on-prem AD + Entra ID). SSPR is required for a pilot group only, with password writeback to on-prem. Two methods must be enforced (Authenticator + phone). Egress is SASE with dynamic IPs, so static IP allowlists for the reset portal aren’t reliable. Past incidents were caused by unhealthy password writeback despite SSPR being enabled.
Key constraints
Scope: Selected group (pilot)
Methods: Exactly two (Authenticator + phone)
Hybrid: Password writeback required; health must be monitored
Network: No dependency on static IP allowlists
Registration: Combined security info to pre-enroll methods
Select TWO actions that together meet all requirements.

**Options:**

- **A.** A. Enable SSPR for Selected group; enable Password writeback in Azure AD Connect; require two methods; enable combined registration. ✅
- **B.** B. Enable SSPR for All users; enforce CA IP allowlist; require one method.
- **C.** C. Configure Authentication methods policy (Authenticator + phone, two methods); enforce combined registration; verify AAD Connect password writeback agent health/alerts. ✅
- **D.** D. Keep SSPR cloud-only (no writeback); rely on MFA to change on-prem passwords.
- **E.** E. Require FIDO2 only; disable phone methods; scope to pilot group.
- **F.** F. Use per-user helpdesk resets; disable self-service; run periodic password sync.

**Correct answer:** A, C

**Explanation:**

Choice A is correct. Scoping SSPR to a Selected group preserves the pilot boundary. Enabling password writeback in Azure AD Connect is the only way cloud resets update on-prem AD accounts; without it, resets don’t reach the domain controllers. Requiring two methods enforces the security requirement and prevents single-factor resets. Combined registration ensures users enroll both methods ahead of time, eliminating “not registered” failures at the moment of need.
Choice C is correct. The Authentication methods policy is where you actually choose which factors are allowed and how many are required; specifying Authenticator + phone and two methods enforces the exact pattern. Combined registration streamlines collection and improves coverage. Proactive monitoring of the password writeback agent (health/alerts) addresses the prior outage root cause—SSPR can be enabled but will fail if the writeback pipeline is unhealthy. None of this relies on static IP allowlists, which are brittle in SASE environments.
Why the others are incorrect
B: Breaks pilot scope (“All users”), weakens assurance (one method), and IP allowlists don’t reliably control access to the reset portal.
D: No writeback means on-prem passwords stay unchanged; MFA isn’t a password reset.
E: Conflicts with the mandated method pair; reduces recoverability and user reach.
F: Disables self-service and reverts to helpdesk processes; password sync ? writeback.

---

### Question 15

Scenario
Contoso’s line-of-business app runs on Windows Server VMs in a single VNet/subnet in Australia East. The app needs a low-latency SMB share for user profiles and application data, enforced with domain-based NTFS ACLs, and reachable privately from that subnet only. Security requires Kerberos/AD-based access (no shared keys in code), snapshots for recovery, and private endpoint–only network access (no public IP allowlists). Operations asks for a predictable performance tier with minimal jitter.
Which configuration best meets the requirements?

**Options:**

- **A.** A. GPv2 account; standard file share; public endpoint; SAS auth
- **B.** B. FileStorage (Premium); SMB file share; private endpoint; AD DS/Entra ID Kerberos; NTFS ACLs ✅
- **C.** C. Blob container (NFS v3); Data Lake Gen2; POSIX ACLs; service endpoints
- **D.** D. GPv2 account; standard file share; service endpoints; shared key

**Correct answer:** B

**Explanation:**

A Premium FileStorage account provides provisioned, consistent IO for Azure Files. Creating an SMB file share in that account and integrating with Active Directory (AD DS or Entra ID Kerberos for Azure Files) enables identity-based authentication and NTFS ACL enforcement, which is what the app and security require. Adding a private endpoint restricts access to the VNet/subnet without any public allowlists, aligning with the “private only” posture. Azure Files supports snapshots for point-in-time recovery, and Premium tier helps ensure low-latency, predictable throughput. Together, this satisfies identity, networking, security, and performance constraints.
Why the other options are incorrect
A: Public endpoint + SAS exposes a shared secret and doesn’t meet “private only” or domain-based ACL requirements; standard tier may not meet performance targets.
C: NFS on Blob (ADLS Gen2) is for object/analytics workloads; the app needs SMB and Windows ACLs, not POSIX NFS; service endpoints ? private endpoint isolation.
D: Shared key bypasses identity-based access and NTFS ACLs; service endpoints don’t provide the same isolation or identity guarantees as private endpoints.

---

### Question 18

You’re standardizing guardrails at the **resource group** level. Some controls must **block** bad deployments; others should **auto-fix** without breaking pipelines and also **retro-fix** existing resources.

**Planned guardrails (per RG)**

****

For **RG-Prod**, which **policy effect** should you use?

**Options:**

- **A.** A. Modify ✅
- **B.** B. Deny
- **C.** C. Append
- **D.** D. Audit

**Correct answer:** A

**Explanation:**

Choice A is correct. **Modify** lets Azure Policy **alter the request** to add the missing costCenter tag **without blocking** the deployment and supports **remediation tasks** to **retro-fix** existing resources. It’s the only effect that cleanly meets non-blocking + auto-add + backfill in one pattern when paired with a remediation job.

Why the other options are incorrect

B: **Deny** enforces compliance but **breaks pipelines** on missing tags and doesn’t retro-fix existing resources.

C: **Append** adds fields at request time but **can’t retro-fix** existing resources and isn’t as broadly supported as Modify for tag injection.

D: **Audit** only logs non-compliance; it neither enforces nor fixes.

---

### Question 21

You’re creating three shares. Some need **low-latency IOPS**; others need **cheap capacity** and **snapshots**. You’ll avoid keys on clients by using directory-based auth.

**Share requirements**

****

Which option should you choose **for profiles**?

**Options:**

- **A.** A. GPv2 Files (standard)
- **B.** B. FileStorage (Premium) ✅
- **C.** C. NFS 4.1 on Blob
- **D.** D. SMB with account keys

**Correct answer:** B

**Explanation:**

Choice B is correct. **Premium FileStorage** provides **provisioned, low-latency** performance ideal for **FSLogix/VDI profiles**, with consistent IOPS/throughput tied to the share size. It avoids noisy-neighbor variance common to standard and aligns with profile logon/logoff sensitivity.

Why the other options are incorrect

A: **Standard** is cost-effective but doesn’t guarantee low-latency performance for VDI profiles.

C: **NFS 4.1** targets Linux file semantics and isn’t SMB for FSLogix.

D: **Account keys** place broad secrets on clients; prefer **directory authentication** (e.g., Azure AD DS/Entra-Kerberos) for least privilege.

---

### Question 28

You must enforce tagging at scale across a subscription:

• New resources must have CostCenter; creation should be denied if missing.

• Existing resources must be backfilled with Department=IT if missing.

• rg-exempt must be excluded from enforcement.

Goal

One configuration that satisfies all three.

Candidate configurations

Which single row meets the goal?

**Options:**

- **A.** A. R1
- **B.** B. R2 ✅
- **C.** C. R3
- **D.** D. R4

**Correct answer:** B

**Explanation:**

Choice B is correct. An initiative at subscription groups multiple definitions so you can both deny non-compliant new resources (Require CostCenter) and modify existing ones (Modify Department). A remediation task using a system-assigned managed identity performs the backfill on existing resources. The policy exemption on rg-exempt cleanly carves out the required scope without disabling enforcement elsewhere. This is the canonical “deny + modify + remediate + exempt” pattern for tag governance at scale.

Why the others are incorrect

A: Denies new resources missing CostCenter but never backfills Department for existing resources and lacks the rg-level exemption.

C: Append at rg-core affects only that RG and only at request time; no subscription-wide coverage, no deny, no backfill.

D: RBAC doesn’t enforce tags; it’s authorization, not configuration compliance.

---

### Question 29

HR is onboarding cloud-only R&amp;D staff across AU and NZ. Licensing must auto-apply only to active R&amp;D users, with usageLocation set per user (AU/NZ) before assignment. UPNs must not change. Nested groups previously caused licensing propagation gaps and are forbidden.

Goal

Auto-license eligible users only; keep UPNs stable; enforce per-user usageLocation; avoid nested groups

Candidate configurations.

Which single configuration satisfies the goal?

**Options:**

- **A.** A. R1
- **B.** B. R2
- **C.** C. R3 ✅
- **D.** D. R4

**Correct answer:** C

**Explanation:**

Choice C is correct. Dynamic user membership tied to business attributes (department) plus accountEnabled filters only active R&amp;D users and auto-captures future hires. Group-based licensing scales while maintaining central control. Licensing enforcement requires usageLocation on the user object (e.g., AU or NZ) prior to assignment; scripting this per user avoids failures and meets data residency/billing requirements. UPN stability is preserved because no rename is needed, and nested groups are avoided by using a single dynamic security group.

Why the others are incorrect

- R1: Device-based membership is unrelated to user licensing eligibility; tenant default location often fails for services that mandate a per-user value.

- R2: Static membership misses future hires and increases toil; per-user licensing is brittle and error-prone.

- R4: Missing usageLocation breaks licensing prerequisites and triggers assignment errors.

---

### Question 33

Users must access Azure Files over SMB using their directory identities—no account keys on clients. You’ll apply share-level RBAC and NTFS ACLs to enforce least privilege. The environment uses Microsoft Entra Domain Services (managed domain); no on-prem DCs on the access path.
Which option should you choose?

**Options:**

- **A.** A. Enable NFS 4.1 and use POSIX mode bits
- **B.** B. Issue SAS to users and mount with HTTPS
- **C.** C. Use account keys and restrict by IP
- **D.** D. Enable Azure AD DS authentication for Azure Files; assign Storage File Data SMB Share roles; apply NTFS ACLs ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. For SMB with directory identities, enable Azure AD DS authentication on the storage account so the share participates in your managed domain’s Kerberos/LDAP. Then grant users/groups share-level RBAC (e.g., Storage File Data SMB Share Reader/Contributor/Owner) and enforce permissions with NTFS ACLs. Clients authenticate without keys, honoring user/group access centrally and eliminating credential sprawl.
Why the other options are incorrect
A: NFS 4.1 is for Linux clients and doesn’t use SMB or Entra-backed Kerberos; it won’t meet the SMB identity requirement.
B: SAS is for data-plane tokens, not SMB logons; SMB mounts don’t use SAS bearer tokens.
C: Account keys put secrets on endpoints and grant broad access—not identity-based per user.

---

### Question 35

You have a Microsoft Entra tenant.
You create a user named Admin1.
You need to ensure that Admin1 can perform following tasks:
Assign licenses to Microsoft Entra groups
Reset passwords of Microsoft Entra users
Which Microsoft Entra role should you assign to Admin1?

**Options:**

- **A.** A. Billing Administrator
- **B.** B. Helpdesk Administrator
- **C.** C. License Administrator
- **D.** D. User Administrator ✅

**Correct answer:** D

**Explanation:**

The User Administrator role is the best fit because Microsoft says it can assign and read licenses for all users, reset passwords, and it also includes the permission microsoft.directory/groups/assignLicense, which is the action for assigning product licenses to groups for group-based licensing.
This makes User Administrator the one role in the answer set that covers both required tasks in a single assignment. By contrast, License Administrator covers user and group license assignments, but Microsoft says it does not include password reset capability.
Why the other options are incorrect:
• A. Billing Administrator — Billing Administrator is for purchases, subscriptions, support tickets, and service health. It does not include group-based license assignment or password reset permissions for users.
• B. Helpdesk Administrator — Helpdesk Administrator can reset passwords, but Microsoft describes it as a role for password resets, forcing sign-out, service requests, and service health. It does not include the group-based licensing permissions required here.
• C. License Administrator — License Administrator can assign product licenses to groups for group-based licensing and manage user licenses, but Microsoft says this role is limited to licensing and usage location tasks. It does not grant password reset permissions.

---

### Question 39

Security mandates no anonymous blob access in any container. App access is via Entra ID or SAS from a trusted service. You want a single setting that prevents admins from accidentally enabling public read on new or existing containers.
Which option should you choose?

**Options:**

- **A.** A. Set account access tier to Cool
- **B.** B. Enable soft delete for blobs
- **C.** C. Disable “Allow blob public access” on the storage account ✅
- **D.** D. Enable static website

**Correct answer:** C

**Explanation:**

Choice C is correct. Setting “Allow blob public access: Disabled” at the account prevents container-level public access from being turned on anywhere in that account. It’s a guardrail that enforces private containers regardless of per-container mistakes.
Why the other options are incorrect
A: Access tier affects cost/performance, not access control.
B: Soft delete protects from accidental deletes; it doesn’t block public read.
D: Static website publishes a public endpoint—opposite of the requirement.

---

### Question 44

A regulated workload must run in a single-tenant, isolated environment with private inbound and outbound via your VNets, internal load balancing only (no public endpoint), and capacity for hundreds of apps under one stamp. You want first-class App Service features without noisy-neighbor risk.
Which option should you choose?

**Options:**

- **A.** A. App Service Basic plan
- **B.** B. Premium v3 plan with VNet integration
- **C.** C. Functions Consumption plan
- **D.** D. Isolated v2 plan in an App Service Environment v3 (ILB) ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. An App Service Environment v3 hosts Isolated v2 plans in a single-tenant stamp inside your virtual network, supporting internal load balancer (ILB) mode for private-only ingress. It scales to large app counts, gives you per-app features (slots, custom domains, TLS), and removes noisy-neighbor concerns. This is the only App Service option that simultaneously delivers tenant isolation, private inbound/outbound, and large-scale hosting.
Why the other options are incorrect
A: Basic is multi-tenant, limited scale, and no private ILB hosting.
B: Premium v3 adds performance and VNet integration, but it’s still multi-tenant and exposes public endpoints by default.
C: Consumption is a serverless Functions plan, not suitable for multi-app web hosting or isolation requirements.

---

### Question 45

You’re deploying a Linux Web App for Containers that pulls images from a private ACR. Security forbids the admin user and any stored registry passwords. You’ll enable a managed identity on the app and want least-privilege pulls that survive credential rotation without changes.
“To enable passwordless pulls, grant the app’s managed identity the __________ role on the registry.”

**Options:**

- **A.** A. AcrPull ✅
- **B.** B. Owner
- **C.** C. Contributor
- **D.** D. Storage Blob Data Reader

**Correct answer:** A

**Explanation:**

Choice A is correct. AcrPull grants pull-only rights. With a managed identity enabled on the Web App and ACR configured to trust that identity, the platform exchanges the identity for an OAuth token at pull time—no secrets in app settings. This achieves least privilege, automatic rotation (identity-based), and works across slots and revisions without changing your Docker config. You can scope the role at the registry or repository level to tighten blast radius further.
Why the other options are incorrect
B: Owner is excessive (RBAC + write/delete) and violates least privilege.
C: Contributor permits push/mutate operations—unnecessary and risky for a runtime that only pulls.
D: Storage Blob Data Reader applies to Azure Storage, not ACR’s token exchange for image pulls.

---

### Question 50

You will protect Azure VMs (Windows/Linux) with policy-based backups, Instant Restore from snapshots, cross-region restore capability, soft delete/immutability, and item-level restores—all agentless for Azure VMs.
“To back up Azure VMs with these capabilities, create a __________ and configure backup policies there.”

**Options:**

- **A.** A. Backup vault
- **B.** B. Storage account with snapshots
- **C.** C. Recovery Services vault ✅
- **D.** D. Key Vault

**Correct answer:** C

**Explanation:**

Choice C is correct. Azure VM Backup is driven from a Recovery Services vault, which acts as the control plane for policies, jobs, restore points, and security features. When you enable backup for Azure VMs in a vault, the platform performs snapshot-based backups (agentless for Azure VMs), retains Instant Restore snapshots locally for fast near-term recovery, and transfers recovery points into the vault according to your schedule and retention. The vault supports soft delete and immutability to protect against accidental or malicious deletion, and (when configured with geo-redundant storage) can enable Cross Region Restore so you can restore a VM in the paired region without initiating a failover. From the same vault, you can perform file/item-level restores by mounting a recovery point, run restore to new VM for break-glass testing, and audit all actions with RBAC and vault-level security PINs. This provides a governed, policy-based, enterprise backup plane without installing guest agents for Azure VMs.
Why the other options are incorrect
A: A Backup vault belongs to the Azure Backup (Data Protection) plane (e.g., Azure Disk Backup, SAP HANA, Blob operational backup). It’s not the control plane for Azure VM backups.
B: Storage snapshots + scripts don’t provide schedules, retention, vault immutability, soft delete, CRR, or centralized RBAC/reporting; you’re rebuilding what the vault gives you out of the box.
D: Key Vault stores secrets/keys/certs; it has no backup policy orchestration for VMs.

---

### Question 52

You want agentless backups for Azure Disks used by critical stateful services, with vault-locked immutability, per-policy schedule/retention, and at-scale management via Backup Center. You do not want to move to Recovery Services vaults for this scenario.
What should you deploy?

**Options:**

- **A.** A. Recovery Services vault and MARS agent
- **B.** B. Storage snapshots + scripts
- **C.** C. Backup vault (Data Protection) and enable Azure Disk Backup ✅
- **D.** D. App Service backups

**Correct answer:** C

**Explanation:**

Choice C is correct. Azure Disk Backup is provided through the Azure Backup (Data Protection) platform using a Backup vault (Microsoft.DataProtection/backupVaults). It’s agentless (no guest extension), leverages incremental snapshots under the hood, and gives you policy-based scheduling and retention with vault-locked immutability so recovery points can’t be altered outside policy. You manage at scale through Backup Center, apply consistent policies across many disks, and restore by creating a new managed disk from a chosen recovery point (then attach to a VM). This separates VM backup (Recovery Services vault) from disk-level backup (Backup vault), letting you protect stateful disks even when VM-level backup isn’t appropriate, and it integrates with RBAC, tags, and reporting for governance.
Why the other options are incorrect
A: Recovery Services vault + MARS agent targets files/folders on Windows machines (often on-prem/IAAS) and isn’t the mechanism for Azure Disk Backup; it also introduces agents you explicitly want to avoid.
B: Snapshots + scripts lack policies, immutability, centralized lifecycle, and easy audit/restore workflows; you’d own orchestration and failure handling.
D: App Service backups protect web app content/config and optional DB exports—unrelated to managed disk protection.

---

### Question 1

You are building a two-tier hierarchy: mg-prod and mg-devtest under the root management group. prod subscriptions must enforce Allowed locations (AU East/SE) and Deny public IP on compute. devtest must allow evaluation first (Audit), not block.
Requirements
prod: Deny policies, apply to all current/future prod subscriptions
devtest: Audit policies only
Single place to manage baseline
Which approach fits?

**Options:**

- **A.** A. Assign a hardening initiative (Allowed locations, Deny public IP) at mg-prod with Deny effects; move prod subscriptions under mg-prod. Assign the same initiative with Audit effects at mg-devtest. ✅
- **B.** B. Assign all policies per subscription; avoid management groups.
- **C.** C. Assign policies only at resource group level in each subscription.
- **D.** D. Use RBAC deny assignments at mg-prod instead of Policy.

**Correct answer:** A

**Explanation:**

Choice A is correct. Management groups are designed for inheritance: assigning the hardening initiative at mg-prod ensures every current and future prod subscription receives Deny guardrails automatically. Using a parallel assignment with Audit at mg-devtest allows evaluation without blocking. Moving prod subscriptions under mg-prod aligns scope boundaries with organizational intent and reduces configuration drift.
Why the others are incorrect
B: Per-subscription assignment doesn’t scale and fails to auto-apply to future subscriptions.
C: RG-level assignments fragment governance and are easy to miss; they don’t guarantee consistent baselines.
D: RBAC deny assignments do not implement configuration compliance; Azure Policy is the correct control.

---

### Question 13

A central platform team must ensure the Sec-Readers group has read-only visibility across all current and future subscriptions, and baseline governance (policy) must apply automatically to every subscription without per-subscription work.
Requirements
• Central, automatic inheritance to all subscriptions now and future
• Read-only visibility for Sec-Readers
• Baseline policy enforced once
Select TWO actions.

**Options:**

- **A.** A. Assign Reader to Sec-Readers at the root management group ✅
- **B.** B. Assign Reader to Sec-Readers on one representative subscription
- **C.** C. Assign the baseline policy initiative at the root management group ✅
- **D.** D. Assign Contributor to DevOps at the tenant root scope
- **E.** E. Create per-subscription policy assignments manually
- **F.** F. Create deny assignments via RBAC instead of Policy

**Correct answer:** A, C

**Explanation:**

Choice A is correct. RBAC assigned at the root management group is inherited by all child management groups and subscriptions, giving Sec-Readers read-only across the estate—including future subscriptions as they’re placed under the root. This removes the need for per-subscription role work and guarantees consistent visibility.
Choice C is correct. Assigning a policy initiative at the root management group centralizes governance; definitions and effects (Deny/Modify/Audit) cascade to all current and future subscriptions. This is the recommended pattern for baseline guardrails and eliminates drift.
Why the others are incorrect
B: Limits visibility to a single subscription; doesn’t cover others or future ones.
D: Contributor at tenant/root is excessive and violates least privilege.
E: Per-subscription assignments don’t scale and are error-prone; they miss future subscriptions until someone remembers to assign them.
F: RBAC deny assignments are not a substitute for Azure Policy’s configuration/compliance engine.

---

### Question 14

Scenario
Contoso must protect 150 Azure VMs in Australia East and several on-premises Windows servers (files/folders) via MARS. Security requires soft delete, GRS for regional resilience, and the ability to restore VMs even if the primary region is unavailable. Operations wants vault-level RBAC and to keep the vault in the same subscription/RG used by the ops team.
Requirements
Protect Azure VMs + on-prem (MARS agent)
Soft delete enabled; GRS replication
Same-region vault for protected Azure VMs; support cross-region restore
RBAC on the vault resource
Which approach meets the requirements?

**Options:**

- **A.** A. Create an Azure Backup vault (Data Protection) in Australia East; LRS; disable soft delete
- **B.** B. Create a Recovery Services vault in Australia East; set Backup Storage redundancy = GRS; enable soft delete; configure policies; register MARS and Azure VM backups ✅
- **C.** C. Create an RSV in Australia Southeast; protect Australia East VMs across regions by default
- **D.** D. Use Storage account snapshots; upload MARS data to Blob; no vault

**Correct answer:** B

**Explanation:**

A Recovery Services vault (RSV) is the correct control plane for Azure VM backups and MARS (files/folders) on-prem. RSVs must be in the same region as the Azure VMs being protected; selecting GRS gives regionally redundant backup storage, and with supported regions you can enable cross-region restore to recover in the paired region if the primary is unavailable. Soft delete protects against malicious/accidental deletion of backup items. Because the vault is an ARM resource, you apply RBAC at the vault for least-privilege operations (backup operator, restore operator, etc.). This configuration satisfies workload coverage (Azure VMs + MARS), resilience, and governance.
Why the other options are incorrect
A: An Azure Backup vault (Data Protection) doesn’t cover MARS/VM-in-guest workloads; LRS and disabling soft delete violate requirements.
C: Vault must be co-located with protected Azure VMs; creating it in another region blocks protection of Australia East VMs.
D: Storage snapshots/Blob alone aren’t Azure Backup; you lose policy, retention, soft delete, and item-level restore workflows.

---

### Question 20

Security needs a user to read secrets from kv-prod without managing the vault or other resources. Legacy access policies are disabled; the tenant uses RBAC for Key Vault data plane.

Goal

Permit get/list secrets only in kv-prod. No control-plane rights. No cross-scope elevation.

**Candidate rows**

****

Which single row meets the goal?

**Options:**

- **A.** A. Row 1
- **B.** B. Row 2
- **C.** C. Row 3 ✅
- **D.** D. Row 4
- **E.** E. Row 5

**Correct answer:** C

**Explanation:**

Choice C is correct. The Key Vault Secrets User RBAC role on the specific vault grants data-plane permissions to list and get secrets without enabling management operations. Scoping at kv-prod ensures the user’s permissions don’t spill to other vaults or resource types.

Why the others are incorrect

A: Subscription Reader cannot read secret values—RBAC data-plane permissions are required.

B: Key Vault Reader is control/metadata focused; it does not allow reading secret values.

D: Contributor grants manage operations on many resources but still lacks secret data-plane permissions.

E: Owner is over-privileged, including role assignments and full control on the vault.

---

### Question 21

Scenario

An analytics landing zone ingests raw data to the container raw/ with prefixes by tenant (raw/tenantA/, raw/tenantB/). Compliance wants to minimize Hot/Cool spend but keep data for one year. The rule should: keep new data in Hot for immediate processing; move cold data to Cool after a short period; move long-cold data to Archive; and finally purge after one year. Snapshots and versions must follow the same aging pattern. No impact to other containers.

**Requirements**

- Scope: container “raw/”, prefix-based include (tenant folders)

- Actions: Hot→Cool after 30 days idle; Cool→Archive after 180 days; Delete at 365 days

- Apply to base blobs, snapshots, and versions

**Candidates**

****

**Question**

Which row meets the requirements?

**Options:**

- **A.** A. Row A ✅
- **B.** B. Row B
- **C.** C. Row C
- **D.** D. Row D

**Correct answer:** A

**Explanation:**

Row A precisely mirrors the retention plan: it uses a prefix-scoped include that targets raw/tenant* so only the intended container/prefixes are affected; it ages base blobs, snapshots, and versions uniformly; and it implements the three-stage cost/compliance curve—Cool at 30 days of inactivity (lower hot/cool spend), Archive at 180 days (lowest at-rest cost for long-cold data), and hard delete at 365 days to satisfy the one-year retention cap. Because the scope is explicit, other containers remain untouched.

**Why the other options are incorrect**

- Row B: Over-broad (no scope filter; hits all containers), too aggressive (archives at 7 days), deletes at 30 days (violates the one-year requirement), and ignores snapshots/versions.

- Row C: Retention path is incomplete (no delete) and too slow to archive (365 days), failing the “Archive at 180 days; delete at 365” requirement.

- Row D: Scopes only tenantA (missing tenantB/others) and does not include versions, violating “apply to base, snapshots, and versions.”

---

### Question 22

Scenario

You need a **private** production registry for images pulled in Australia East and Australia Southeast. Security requires: **Private Link only** (no public endpoint), **admin user disabled**, and **immutable image tags** to prevent tag rewrites. Ops wants **geo-replication** so pulls are served locally in both regions.

**Candidates**

****

**Question**

Which single row meets all requirements?

**Options:**

- **A.** A. Row 1
- **B.** B. Row 2
- **C.** C. Row 3 ✅
- **D.** D. Row 4

**Correct answer:** C

**Explanation:**

Only **Premium** supports both **Private Link** (true private access) and **geo-replication** (regional replicas to keep pulls local). Disabling the **admin user** eliminates a shared, static credential in favor of Entra ID permissions (e.g., AcrPull). **Immutable tags** (image-locking) prevent “latest” or version tags from being overwritten, which is a common production safety control. Row 3 is the only candidate that simultaneously meets **network isolation**, **credential posture**, **tag immutability**, and **multi-region pulls**.

**Why the other options are incorrect**

- Row 1: Standard lacks Private Link and immutable tags; keeps a public endpoint and admin user.

- Row 2: Premium is good for features, but **service endpoints ≠ Private Link** (no private endpoint), and tags remain mutable.

- Row 4: Basic has neither Private Link nor geo-replication; admin user remains enabled.

---

### Question 26

You must issue time-bound upload rights from an app using Entra ID without exposing account keys. Use _____.

**Options:**

- **A.** A. Account SAS
- **B.** B. User delegation SAS ✅
- **C.** C. Service SAS
- **D.** D. Stored access policy

**Correct answer:** B

**Explanation:**

Choice B is correct. A user delegation SAS is signed with a user delegation key derived from Entra ID (Azure AD) via the blob service, so the app authenticates using identity, not the storage account key. This gives you short-lived, least-privilege tokens that are tied to AAD auth flows (including conditional access and token lifetimes) and avoids key sprawl in code or pipelines.
Why the others are incorrect
A: Account SAS is signed with the storage account key—precisely what you’re trying to avoid exposing.
C: Service SAS also requires the account key (or a stored access policy bound to that key).
D: A stored access policy isn’t a SAS type; it’s a container/account-level object you reference to control or revoke SAS tokens. You’d still need a SAS (and typically an account key) to use it.

---

### Question 27

Scenario
A platform team needs to protect Azure managed disks (crash-consistent snapshots + long-term retention) and Azure Blob containers with policy-based backups managed centrally through Backup Center. They prefer the modern Data Protection experience, no public endpoints, and hardened deletion behavior.
Requirements
Use Azure Backup vault (Data Protection)
Back up Azure Disks and Azure Blobs with policies
Integrate via Backup Center; use RBAC
Private networking (where applicable) and strong delete protection
Which approach meets the requirements?

**Options:**

- **A.** A. Recovery Services vault; VM backup policy for disks; Storage lifecycle rules for blobs
- **B.** B. RSV + MARS agent for blobs; per-container scripts for snapshots
- **C.** C. Backup to a Storage account with immutability; manage in Azure Monitor
- **D.** D. Create an Azure Backup vault (Data Protection) in the target region; configure Disk Backup and Blob Backup policies in Backup Center; apply RBAC; enable recommended security settings ✅

**Correct answer:** D

**Explanation:**

The Azure Backup vault (resource type Microsoft.DataProtection/backupVaults) under Azure Backup (Data Protection) is the control plane for Disk Backup and Blob Backup. You create a Backup vault in the region, onboard workloads via Backup Center, and assign policy-based protection (schedules, retention). The vault is an ARM resource with RBAC, built-in security features (soft delete, vault-level protections), and optional network isolation where supported. This is the modern path for disks/blobs—distinct from Recovery Services vault, which primarily covers Azure VMs, SQL/SAP HANA in VM, and MARS.
Why the other options are incorrect
A: RSV VM policies don’t manage Disk Backup (Data Protection) or Blob Backup; lifecycle rules are storage governance, not Azure Backup.
B: MARS is for files/folders on Windows machines—not for Blob containers.
C: Storage immutability is valuable but doesn’t provide Azure Backup’s policy/restore workflows or centralized management in Backup Center.

---

### Question 28

Scenario
You need secure, low-downtime key management for a storage account: no secrets in repos, predictable rotation, and minimal impact on running apps.
Select TWO actions.

**Options:**

- **A.** A. Use Key Vault managed storage account keys (auto-rotation) ✅
- **B.** B. Commit account keys to the repo; rotate quarterly
- **C.** C. Grant “Storage Account Key Operator” broadly to dev teams
- **D.** D. Disable RBAC and use shared key only
- **E.** E. Staged rotation: regenerate key2, update apps, then rotate key1 ✅
- **F.** F. Use SAS with stored access policy for clients instead of sharing account keys

**Correct answer:** A, E

**Explanation:**

Choice A is correct. Key Vault’s “managed storage account keys” feature securely stores the account keys and can automatically regenerate/rotate them on a schedule, removing manual handling and keeping keys out of code and CI/CD variables. It also gives you auditing and RBAC control around who can retrieve keys, plus integration points for apps to fetch secrets at runtime rather than embedding them.
Choice E is correct. Staged rotation is the operational pattern for near-zero downtime: regenerate the unused key (key2), update all app configurations to use key2, verify traffic, then regenerate the previously active key (key1). This leapfrogging ensures a valid key is always in service while cycling secrets safely.
Why the others are incorrect
B: Committing secrets to a repository is a critical anti-pattern (exposure, forks, history). Even with quarterly rotation, you risk leaks and long-lived credentials.
C: Broadly granting “Key Operator” increases the insider-risk surface and makes uncontrolled exports more likely; use least privilege and automation instead.
D: Disabling RBAC and relying solely on shared keys removes identity-based controls, makes scoping impossible, and encourages secret sharing across teams.
F: SAS with a stored access policy is a good way to avoid sharing account keys directly with clients, but it doesn’t address how you manage and rotate the underlying account keys for your own services. It’s complementary, not a replacement for A/E.

---

### Question 32

Project Alpha lives in rg-alpha. Engineers need full control of rg-alpha but must have read-only visibility across the subscription for discovery and diagnostics. They must not be able to modify resources in other resource groups.
Requirements
Full control: rg-alpha only
Read-only elsewhere in subscription
No cross-RG modification
Which assignment pattern delivers the required effective access?

**Options:**

- **A.** A. Contributor at subscription; Reader at rg-alpha
- **B.** B. Owner at rg-alpha; Reader at subscription ✅
- **C.** C. Reader at management group; Contributor at subscription
- **D.** D. User Access Administrator at subscription; Reader at rg-alpha

**Correct answer:** B

**Explanation:**

Choice B is correct. Reader at subscription gives estate-wide visibility. Owner at rg-alpha adds full administrative permissions for that RG only; effective rights are the union, so engineers become Owner in rg-alpha and remain Reader everywhere else. This preserves least privilege outside the target RG while enabling full control inside it.
Why the others are incorrect
A: Contributor at subscription grants modify rights across all RGs—over-scoped.
C: Management group Reader is fine for visibility, but adding Contributor at subscription again over-scopes modification rights.
D: User Access Administrator lets changing role assignments at subscription—privilege escalation risk—and does not provide required write permissions to resources.

---

### Question 36

Scenario
You will asynchronously replicate new block blobs from a StorageV2 source in Australia East to a StorageV2 destination in Australia Southeast. Containers already exist; same tenant; replication should start as soon as the policy is created. Only block blobs are used.
Which TWO actions must be completed before creating the object replication policy?

**Options:**

- **A.** A. Enable Change feed on the source account ✅
- **B.** B. Enable Blob versioning on both source and destination accounts ✅
- **C.** C. Enable hierarchical namespace (HNS) on both accounts
- **D.** D. Use append blobs for faster replication
- **E.** E. Create the policy only on the source account
- **F.** F. Require customer-provided keys (CPK) for uploads

**Correct answer:** A, B

**Explanation:**

Object Replication relies on the source account’s change feed to discover operations and on versioning on both accounts to track/replicate updates and deletes consistently. Enabling change feed (source) and blob versioning (both) ensures the replication pipeline has the event stream and version history it needs. With these prerequisites in place, policy creation can begin moving data immediately.
Why the other options are incorrect
C: OR is not supported when hierarchical namespace (HNS) is enabled.
D: OR supports block blobs only; append/page blobs are not replicated.
E: The policy is created on the destination and associated to the source via policy ID; source-only is invalid.
F: Blobs written with customer-provided keys (CPK) aren’t replicated by OR.

---

### Question 37

Scenario
Your data engineering team frequently overwrites parquet files during daily loads and occasionally deletes the wrong files. They want built-in recovery without backups: instant rollback after an overwrite and self-restore after a delete. They also want to keep a short journal of changes for operational auditing but can’t tolerate heavy operational overhead.
Which TWO features must be enabled to meet the rollback and undelete goals?

**Options:**

- **A.** A. Blob versioning ✅
- **B.** B. Change feed
- **C.** C. Cross-region replication (GRS/RA-GRS)
- **D.** D. Container soft delete
- **E.** E. Immutability (time-based)
- **F.** F. Blob soft delete ✅

**Correct answer:** A, F

**Explanation:**

Blob versioning creates a new version on every write, letting you recover the previous version after a bad overwrite with a simple promote or read of the prior version—no external backup system needed. Blob soft delete protects against accidental deletions by retaining the deleted object for a configured retention window, enabling straightforward undeletion. Combined, these two controls directly address the two failure modes (overwrite and delete) while keeping operations lightweight and user-driven.
Why the other options are incorrect
B (Change feed): Great for auditing/ETL triggers, but it’s only an event log; it doesn’t preserve content you can roll back to.
C (GRS/RA-GRS): Geo-redundancy improves durability/DR posture but doesn’t provide point-in-time local recovery from user error (overwrite/delete).
D (Container soft delete): Protects against container-level deletion, not blob overwrites or single-blob deletes inside the container.
E (Immutability): WORM locks content (compliance). It prevents overwrites/deletes rather than enabling easy rollback/undelete; it also complicates normal operations.

---

### Question 38

Scenario
Your app is live at contoso.azurewebsites.net. You need to serve www.contoso.com and the apex contoso.com with end-to-end TLS, without downtime. DNS is hosted at a third-party provider. Use managed certificates if possible.
Requirements
Verify domain ownership
Map both apex and www
Bind TLS and enforce HTTPS
Which sequence satisfies the requirements?

**Options:**

- **A.** A.Add A record from contoso.com to the current outbound IPAdd CNAME for www ? contoso.azurewebsites.netSkip verification; rely on RBAC
- **B.** B.Add TXT record for domain verificationAdd CNAME for www ? contoso.azurewebsites.net; add A/ALIAS for contoso.com to the app’s IPUpload third-party cert; skip HTTPS Only
- **C.** C.Add TXT record for verification; add CNAME for www ? contoso.azurewebsites.net; add A/ALIAS (or ALIAS/ANAME) for apex contoso.com to the app’s IPIn App Service: add both hostnames; create App Service Managed CertificateAdd TLS/SSL binding for both hostnames; set HTTPS Only = On ✅
- **D.** D.Point NS of contoso.com to Azure DNSWait for 48hAdd hostnames in App Service

**Correct answer:** C

**Explanation:**

A correct mapping flow is: prove ownership (TXT), point www via CNAME to *.azurewebsites.net, and point the apex via A/ALIAS/ANAME to the app’s public IP. Then add the custom hostnames in App Service so the platform serves them, create an App Service Managed Certificate (no-cost) for each hostname, bind the certificates, and enforce HTTPS. This sequence addresses DNS, platform binding, and TLS in the right order with minimal downtime.
Why the other options are incorrect
A: No ownership verification; apex pointed to “outbound IP” is incorrect (use app’s assigned IP/ALIAS).
B: Works for DNS mapping but omits HTTPS enforcement and skips using managed certs (adds cost/ops).
D: Changing NS to Azure DNS is unnecessary and disruptive; you can map from any provider.

---

### Question 39

A landing zone must enforce: deploy only in Australia East/SE, deny public IP on VMs/NICs, and ensure a Department tag exists with a default value for existing resources. Compliance must be managed centrally and remediated at scale.
Requirements
Allowed regions: AU East/SE
Deny public IP for compute
Ensure Department tag present on existing resources
Central assignment and remediation
Select TWO actions to meet all requirements.

**Options:**

- **A.** A. Assign “Allowed locations” at subscription (Deny)
- **B.** B. Use RBAC deny assignment instead of Policy
- **C.** C. Append tag without a remediation task
- **D.** D. Create an initiative (Allowed locations, Deny public IP, Require/Modify Department tag) at management group ✅
- **E.** E. Use Azure Blueprints artifacts for policy (deprecated path)
- **F.** F. Enable remediation tasks with system-assigned managed identity ✅

**Correct answer:** D, F

**Explanation:**

Choice D is correct. An initiative groups multiple policies—Allowed locations (Deny), compute public IP controls (Deny), and Require/Modify tag—to one central assignment at the management group so it scales to current and future subscriptions and enforces a single governance baseline.
Choice F is correct. Modify/Append effects on existing resources need a remediation task that runs with a managed identity having write permissions to apply tags or deploy fixes. Without remediation, existing non-compliant resources remain out of policy.
Why the others are incorrect
A: Helps with region control but does not address public IP denial or tag remediation by itself.
B: RBAC deny assignments are not the primary mechanism for configuration compliance; Policy is.
C: Append without remediation won’t fix existing resources at scale.
E: Blueprints are deprecated; initiatives + policy assignments are the recommended path.

---

### Question 41

A DevOps team must start/stop/redeploy VMs and reset credentials for VM instances in a single resource group. They must not change VNets, NSGs, disks in other accounts, or assign roles. No subscription-wide administration.
Requirements
Manage VMs only
No networking/storage admin
No role assignments
Which built-in role best fits?

**Options:**

- **A.** A. Virtual Machine Contributor ✅
- **B.** B. Contributor
- **C.** C. Owner
- **D.** D. Reader

**Correct answer:** A

**Explanation:**

Choice A is correct. Virtual Machine Contributor grants full management of virtual machines, including start/stop/redeploy and OS credential resets, but excludes broader resource administration like virtual networks, load balancers, storage accounts, and role assignments. It aligns tightly to VM-scoped operational needs without elevating control to unrelated planes.
Why the others are incorrect
B: Contributor enables create/update/delete across all resource types in scope, including networking and storage—too broad for VM-only operations.
C: Owner includes Contributor plus role assignment (“User Access Administrator”)—excessive and violates least privilege.
D: Reader is view-only and cannot start/stop or redeploy VMs.

---

