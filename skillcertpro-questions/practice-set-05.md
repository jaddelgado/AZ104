# Practice Set 5

Source: [https://skillcertpro.com/az-104-exam-questions/5/](https://skillcertpro.com/az-104-exam-questions/5/)
Total questions: 55

---

### Question 1

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.
You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.
You receive a notification that VM1 will be affected by maintenance.
You need to move VM1 to a different host immediately.
Solution: From the VM1 Updates blade, select One-time update.
Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No is correct because the One-time update option applies maintenance updates to the virtual machine, but it doesn‘t guarantee moving the VM to a new host to avoid impending maintenance.
To immediately move the VM to a different host, you would need to Redeploy the virtual machine, which moves it to a new host within the same region.
Reference(s):
https://learn.microsoft.com/en-us/azure/virtual-machines/maintenance-configurations

---

### Question 2

You have an Azure App Services web app named App1.
You plan to deploy App1 by using Web Deploy.
You need to ensure that the developers of App1 can use their Microsoft Entra credentials to deploy content to App1. The solution must use the principle of least privilege.
What should you do?

**Options:**

- **A.** Assign the Owner role to the developers.
- **B.** Configure app-level credentials for FTPS.
- **C.** Configure user-level credentials for FTPS.
- **D.** Assign the Website Contributor role to the developers. ✅

**Correct answer:** D

**Explanation:**

Assign the Website Contributor role is the correct answer here. The Website Contributor role provides the necessary permissions to manage the web app, including deploying content, without giving the developers excessive privileges such as those granted by the Owner role. This ensures the solution follows the principle of least privilege.
Assign the Owner role to the developers is incorrect because the Owner role gives full control over the resource, including the ability to delete or modify access permissions, which violates the principle of least privilege.
Configure app-level credentials for FTPS is incorrect  because using app-level credentials does not involve using Microsoft Entra credentials and does not follow the principle of least privilege.
Configure user-level credentials for FTPS is incorrect  because this does not involve using Microsoft Entra credentials and provides too much access for just deploying content.
Reference(s):
https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#website-contributor

---

### Question 3

You have two Azure virtual machines as shown in the following table.

You create the Azure DNS zones shown in the following table.

You perform the following actions:

- To fabrikam.com, you add a virtual network link to vnet1 and enable auto registration.

- For contoso.com, you assign vm1 and vm2 the Owner role.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“The DNS A record for vm2 is added to fabrikam.com and has the IP address of 10.0.1.5.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is **correct** because fabrikam.com is a private DNS zone, and auto-registration is enabled for vnet1, which is the virtual network that vm2 is connected to. This means that the private IP address (10.0.1.5) of vm2 will be automatically added as an A record to the fabrikam.com private DNS zone.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/dns/private-dns-autoregistration

---

### Question 4

You have an Azure Storage account named storage1 that contains a container named container1. The container1 container stores thousands of image files.

You plan to use an Azure Resource Manager (ARM) template to create a blob inventory rule named rule1.

You need to ensure that only blobs whose names start with the word “finance” are stored daily as a CSV file in container1.

You need to complete rule1.

Which value should you choose for **Placeholder 1**?

**Options:**

- **A.** appendBlob
- **B.** blockBlob ✅
- **C.** pageBlob

**Correct answer:** B

**Explanation:**

**blockBlob** is the **correct** answer. Block blobs are designed to store large amounts of unstructured data, such as images or backups, which is the use case described here with thousands of image files. Additionally, block blobs are more suitable for use cases where data needs to be frequently accessed, stored, or replaced (such as in a daily CSV file). This fits the requirements for the blob inventory rule where you need to filter blobs whose names start with “finance.”

**appendBlob** is **incorrect** because it is generally used for log data where the need is to continuously append new data. It is not optimized for image storage or daily CSV storage.

**pageBlob** is **incorrect** because page blobs are typically used for storing virtual hard disks (VHDs) for Azure virtual machines, not for storing images or daily CSV files.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction

- https://learn.microsoft.com/en-us/rest/api/storageservices/understanding-block-blobs–append-blobs–and-page-blobs

---

### Question 5

You have an Azure Storage account named storage1 that contains a container named container1. The container1 container stores thousands of image files.

You plan to use an Azure Resource Manager (ARM) template to create a blob inventory rule named rule1.

You need to ensure that only blobs whose names start with the word “finance” are stored daily as a CSV file in container1.

You need to complete rule1.

Which value should you choose for **Placeholder 2**?

**Options:**

- **A.** container1/*
- **B.** container1/finance ✅
- **C.** finance

**Correct answer:** B

**Explanation:**

**container1/finance** is the **correct** answer. According to the documentation, the prefix match string in a blob policy must always start with the container name followed by the desired blob name prefix. In this case, “container1” is the container, and “finance” is the required blob prefix, making container1/finance the appropriate match string for blobs starting with the word “finance.”

**container1/*** is **incorrect** because it would match all blobs within the container and not only those starting with “finance.”

**finance** is **incorrect** because it does not include the container name as required by the blob policy format.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-faq#the-blob-prefix-match-string-didn-t-apply-the-policy-to-the-expected-blobs

---

### Question 6

You have an Azure Storage account named storage1 that stores images.
You need to create a new storage account and replicate the images in storage1 to the new account by using object replication.
You need to configure the new account.
Which account type should you choose?

**Options:**

- **A.** StorageV2 only
- **B.** StorageV2 or FileStorage only
- **C.** StorageV2 or BlobStorage only ✅
- **D.** StorageV2, BlobStorage, or FileStorage

**Correct answer:** C

**Explanation:**

StorageV2 or BlobStorage only is correct because object replication is supported by both general-purpose v2 storage accounts (StorageV2) and premium block blob storage accounts (BlobStorage). These account types meet the requirements for object replication, allowing replication of blobs between the source and destination accounts.
StorageV2 only is incorrect because while StorageV2 supports object replication, premium block blob storage accounts (BlobStorage) also support object replication, and they should not be excluded from the correct answer.
StorageV2 or FileStorage only and StorageV2, BlobStorage, or FileStorage are incorrect because FileStorage accounts do not support blob storage, which is necessary for object replication.
Reference(s):
https://learn.microsoft.com/en-us/azure/storage/blobs/object-replication-overview

---

### Question 7

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.
You have an Azure container registry named Registry1 that contains an image named image1.
You receive an error message when you attempt to deploy a container instance by using image1.
You need to be able to deploy a container instance by using image1.
Solution: You create a private endpoint connection for Registry1.
Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No is correct because while a private endpoint connection allows secure access to the container registry over a private network, it does not resolve all potential issues with deploying a container instance. The error might be related to permissions, image availability, or networking configuration rather than the absence of a private endpoint. Other issues like missing Azure Container Instance permissions, registry access policies, or image tags could prevent deployment.
A more appropriate solution would be ensuring that the container instance has the proper permissions to pull images from the registry. This can be done by checking if the container instance has the necessary identities (system-assigned or user-assigned) and permissions to access the container registry.
Reference(s):
https://learn.microsoft.com/en-us/azure/container-registry/container-registry-private-link

---

### Question 8

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.
You have an Azure container registry named Registry1 that contains an image named image1.
You receive an error message when you attempt to deploy a container instance by using image1.
You need to be able to deploy a container instance by using image1.
Solution: You assign the AcrPull role to ACR-Tasks-Network for Registry1.
Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No is correct because assigning the AcrPull role to ACR-Tasks-Network does not resolve the error when deploying a container instance. The AcrPull role allows a service or identity to pull images from the container registry, but ACR-Tasks-Network is typically used for managing tasks within the Azure Container Registry (ACR). This role is unrelated to the container instances ability to pull images from the registry. The container instance itself or the identity running the container instance should have the AcrPull role assigned for successful image deployment.
A better solution would involve assigning the AcrPull role to the identity or service principal running the container instance, ensuring it has permission to pull images from the registry.
Reference(s):
https://learn.microsoft.com/en-us/azure/container-registry/container-registry-roles?tabs=azure-cli
https://learn.microsoft.com/en-us/azure/container-instances/container-instances-managed-identity

---

### Question 9

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.
You have an Azure Storage account named storage1.
You need to enable a user named User1 to list and regenerate storage account keys for storage1.
Solution: You assign the Storage Account Key Operator Service Role to User1.
Does this meet the goal?

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

Yes is correct because the Storage Account Key Operator Service Role grants the necessary permissions to list and regenerate storage account keys without providing broader access to the storage account‘s data. This role is specifically designed for key management tasks, allowing the user to perform actions related to storage account keys.
Assigning this role to User1 will enable them to list and regenerate the keys for storage1 as required.
Reference(s):
https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-account-key-operator-service-role
https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal

---

### Question 10

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.
You have an Azure Storage account named storage1.
You need to enable a user named User1 to list and regenerate storage account keys for storage1.
Solution: You assign the Reader and Data Access role to User1.
Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No is correct because the Reader and Data Access role allows a user to view storage account data and metadata but does not provide the necessary permissions to list or regenerate storage account keys. To achieve the goal of allowing User1 to list and regenerate storage account keys, the appropriate role would be the Storage Account Key Operator Service Role or a more privileged role like Contributor.
The Reader and Data Access role is insufficient for key management tasks.
Reference(s):
https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-account-key-operator-service-role

---

### Question 11

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.
You have an Azure container registry named Registry1 that contains an image named image1.
You receive an error message when you attempt to deploy a container instance by using image1.
You need to be able to deploy a container instance by using image1.
Solution: You select Use dedicated data endpoint for Registry1.
Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No is correct because selecting “Use dedicated data endpoint“ for Registry1 is primarily used to isolate data plane traffic from management plane traffic in a container registry. While it improves network security and performance, it does not directly address issues related to deploying a container instance using an image. The error message could be caused by other factors, such as missing permissions, improper image tags, or incorrect access configurations for the Azure Container Instance. Using a dedicated data endpoint does not resolve these issues.
A more suitable solution would involve verifying the necessary access permissions and configurations to ensure the container instance can pull the image from the registry.
Reference(s):
https://learn.microsoft.com/en-us/azure/container-registry/container-registry-private-link

---

### Question 12

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.
You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.
You receive a notification that VM1 will be affected by maintenance.
You need to move VM1 to a different host immediately.
Solution: From the Overview blade, you move the virtual machine to a different resource group.
Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No is correct because moving a virtual machine to a different resource group does not trigger the immediate relocation of the virtual machine to a different host. It simply changes the resource group in which the virtual machine is organized. The physical host on which the virtual machine runs is managed by Azure‘s underlying infrastructure and is not something you can control directly.To address the immediate relocation of a virtual machine to a different host in response to maintenance, you should use the “Redeploy“ option available in the Azure portal.
Reference(s):
https://learn.microsoft.com/en-us/troubleshoot/azure/virtual-machines/redeploy-to-new-node-windows

---

### Question 13

You have an Azure subscription that uses Azure Container Instances.
You have a computer that has Azure Command-Line Interface (CLI) and Docker installed.
You create a container image named image1.
You need to provision a new Azure container registry and add image1 to the registry.
Which command should you run to provision a new container registry?

**Options:**

- **A.** az acr build
- **B.** az acr create ✅
- **C.** az container create
- **D.** docker create

**Correct answer:** B

**Explanation:**

az acr create is the correct answer here. This command is used to create a new Azure Container Registry (ACR). Once the container registry is created, you can push your container images (such as image1) to the registry. This satisfies the requirement of provisioning a new Azure Container Registry.
az acr build is incorrect because this command is used to build and push a Docker container image to an Azure Container Registry, but it does not provision the registry itself.
az container create is incorrect because this command is used to create a container instance, not a container registry.
docker create is incorrect because this Docker command is used to create a new container from an image on your local machine, not to provision a container registry in Azure.
Reference(s):
https://learn.microsoft.com/en-us/cli/azure/acr?view=azure-cli-latest

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

### Question 15

You have an Azure subscription that contains two peered virtual networks named VNet1 and VNet2.
You have a Network Virtual Appliance (NVA) named NetVA1.
You need to ensure that the traffic from VNet1 to VNet2 is inspected by using NetVA1.
What should you use?

**Options:**

- **A.** a local network gateway
- **B.** a route table that has custom routes ✅
- **C.** a service endpoint
- **D.** IP address reservations

**Correct answer:** B

**Explanation:**

A route table that has custom routes is the correct answer here. To ensure that the traffic from VNet1 to VNet2 is inspected by NetVA1, you need to use a custom route in the route table. You can create a route that forces traffic from VNet1 to pass through the Network Virtual Appliance (NetVA1) for inspection before it reaches VNet2. This is achieved by setting the next hop in the custom route to the IP address of NetVA1.
A local network gateway is incorrect because it is used for configuring connections between an Azure virtual network and an on-premises network, not for routing traffic between peered virtual networks.
A service endpoint is incorrect because service endpoints provide secure access to Azure services but are not used for routing traffic through a Network Virtual Appliance.
IP address reservations is incorrect because IP reservations are used to reserve public IP addresses, and they do not help with routing or traffic inspection between virtual networks.
Reference(s):
https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview
https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview
https://learn.microsoft.com/en-us/azure/virtual-wan/scenario-route-through-nva

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

### Question 17

**You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.** **You receive a notification that VM1 will be affected by maintenance.** **You need to move VM1 to a different host immediately.** **Solution: From the Overview blade, move VM1 to another subscription.** **Does this meet the goal?**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because moving VM1 to another subscription does **not** immediately move the VM to a different host.

- Subscription moves involve resource reallocation and often require redeployment, but they do not address host maintenance.

- To move VM1 to a different host immediately, you would use the **Redeploy** option from the VM blade, which migrates the VM to a new host within the same region.

### Incorrect

**Option A. Yes**

- Incorrect because answering “Yes” assumes that subscription moves can solve host maintenance issues.

- In reality, subscription moves are administrative actions and do not change the physical host where the VM is running.

---

### Question 18

You have an Azure subscription that contains a container group named Group1. Group1 contains two Azure container instances as shown in the following table.

You need to ensure that container2 can use CPU resources without negatively affecting container1.

What should you do?

**Options:**

- **A.** Increase the resource limit of container1 to three CPUs.
- **B.** Increase the resource limit of container2 to six CPUs.
- **C.** Remove the resource limit for both containers. ✅
- **D.** Decrease the resource limit of container2 to two CPUs.

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Remove the resource limit for both containers**

- **Correct** because in Azure Container Instances (ACI), when resource limits are set, containers compete for CPU resources within those limits.

- By removing the resource limits, both containers can dynamically share available CPU cycles. This ensures that **container2** can use CPU resources without throttling or negatively impacting **container1’s guaranteed allocation**.

- Key exam concept: **Removing resource limits allows fair CPU sharing in container groups.**

### Incorrect

**Option A. Increase the resource limit of container1 to three CPUs**

- **Incorrect** because increasing container1’s limit only gives it more resources. It does not prevent container2 from being throttled or competing unfairly.

**Option B. Increase the resource limit of container2 to six CPUs**

- **Incorrect** because simply increasing container2’s limit does not guarantee fair CPU usage. Container1 could still be negatively affected if limits are enforced.

**Option D. Decrease the resource limit of container2 to two CPUs**

- **Incorrect** because lowering container2’s limit restricts its CPU usage further. This is the opposite of the requirement, as it reduces container2’s ability to use CPU resources effectively.

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

### Question 21

You need to upload large files to **Azure Blob Storage** efficiently. Which tools or libraries would you recommend for optimizing the upload process and ensuring reliable data transfer?

**Options:**

- **A.** Azure Storage Estimator
- **B.** Azure Blob Storage client library for .NET ✅
- **C.** Azure Data Box
- **D.** AzCopy ✅

**Correct answer:** B, D

**Explanation:**

### Correct

**Option B. Azure Blob Storage client library for .NET**

- Correct because the **Blob Storage client libraries** (for .NET, Python, Java, etc.) support advanced features like **chunked uploads, retries, and parallel transfers**.

- They are designed to handle large files efficiently and ensure reliability during data transfer.

- Developers can integrate these libraries directly into applications for programmatic control.

**Option D. AzCopy**

- Correct because **AzCopy** is a command-line utility optimized for transferring large amounts of data to and from Azure Blob Storage.

- It supports **parallelism, resumable uploads, and high-performance transfers**, making it ideal for bulk or large file uploads.

- Recommended by Microsoft for production-scale data movement.

### Incorrect

**Option A. Azure Storage Estimator**

- Incorrect because the **Storage Estimator** is a planning tool used to estimate costs and capacity requirements.

- It does not upload files or optimize transfers.

**Option C. Azure Data Box**

- Incorrect because **Data Box** is a physical appliance used for **offline bulk data transfer** to Azure.

- It is not intended for routine large file uploads over the network, but rather for scenarios involving **massive datasets** where online transfer is impractical.

###

---

### Question 22

You are evaluating different backup and recovery solutions for your Azure environment.

Which factors should you consider when choosing the appropriate backup and recovery strategy, including RPO/RTO requirements, data types, cost considerations, and regulatory compliance?

**Options:**

- **A.** Scalability of the solution ✅
- **B.** Types of data to be backed up ✅
- **C.** RPO and RTO requirements ✅
- **D.** Regulatory compliance requirements ✅
- **E.** Cost of the backup and recovery solution ✅

**Correct answer:** A, B, C, D, E

**Explanation:**

### Correct

**Option A: Scalability of the solution**

- Correct.

- Backup solutions must scale with growing workloads and data volumes.

- Azure Backup and Recovery Services Vaults should be able to handle enterprise-level scaling without manual intervention.

**Option B: Types of data to be backed up**

- Correct.

- Different data types (VMs, databases, files, blobs) may require different backup strategies.

- For example, SQL databases may need point-in-time recovery, while file shares may need snapshot-based backups.

**Option C: RPO and RTO requirements**

- Correct.

- **Recovery Point Objective (RPO)** defines how much data loss is acceptable.

- **Recovery Time Objective (RTO)** defines how quickly systems must be restored.

- These metrics directly influence the choice of backup frequency, replication, and recovery methods.

**Option D: Regulatory compliance requirements**

- Correct.

- Compliance with industry standards (GDPR, HIPAA, ISO) often dictates encryption, retention policies, and geographic storage location.

- Azure Backup supports compliance features like encryption-at-rest and geo-redundant storage.

**Option E: Cost of the backup and recovery solution**

- Correct.

- Backup storage, replication, and recovery operations incur costs.

- Administrators must balance performance and compliance needs with budget constraints.

### Incorrect

- In this case, **none of the listed options are incorrect**.

- All five factors (Scalability, Data Types, RPO/RTO, Compliance, Cost) are essential considerations when designing a backup and recovery strategy in Azure.

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

### Question 24

You have an Azure subscription. You create the Azure Storage account shown in the following exhibit:

Please select the answer choice that completes the following statement based on the information presented in the graphic.

The minimum number of copies of the storage account will be ………. .

**Options:**

- **A.** 1
- **B.** 2
- **C.** 3 ✅
- **D.** 4

**Correct answer:** C

**Explanation:**

### Correct

**Option C. 3**

- This is the correct answer.

- By default, when you create an Azure Storage account with **Locally Redundant Storage (LRS)**, Azure maintains **three copies** of your data within a single datacenter.

- These three copies ensure durability and protection against hardware failures.

- The minimum number of copies is therefore **3**, not 1, 2, or 4.

### Incorrect

**Option A. 1**

- Incorrect because Azure never stores just a single copy of data.

- At least three copies are maintained for redundancy.

**Option B. 2**

- Incorrect because two copies would not meet Azure’s durability requirements.

- The minimum is three copies, even for LRS.

**Option D. 4**

- Incorrect because four copies are not the minimum.

- Some replication options (like **ZRS or GRS**) may involve more than three copies across zones or regions, but the minimum baseline is **3**.

---

### Question 25

You‘re working with an ARM template that deploys multiple resources. You need to ensure that a specific resource (e.g., a storage account) is created before other resources that depend on it. Which ARM template concept should you use to enforce this dependency order?

**Options:**

- **A.** DependsOn ✅
- **B.** Tags
- **C.** Resources
- **D.** Outputs

**Correct answer:** A

**Explanation:**

The ‘dependsOn‘ property in ARM templates ensures that resources are created in the correct order, with dependencies enforced.

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

### Question 27

**You have an Azure subscription named Subscription1. In Subscription1, you create an alert rule named Alert1.** **The Alert1 action group is configured to send emails to all users part of the Admins_Group.** **Alert1 alert criteria is triggered every minute.** **The number of email messages that Alert1 will send in an hour is _____.**

**Options:**

- **A.** 0
- **B.** 4
- **C.** 6
- **D.** 12
- **E.** 60 ✅

**Correct answer:** E

**Explanation:**

### Correct

**Option E. 60**

- Correct because the alert is triggered **once every minute**.

- In one hour, there are **60 minutes**, so the alert will send **60 email notifications** to the Admins_Group.

- This matches the configured frequency of the alert criteria.

### Incorrect

**Option A. 0**

- Incorrect because the alert is configured to trigger every minute, so it will not send zero emails.

**Option B. 4**

- Incorrect because 4 emails per hour would imply one alert every 15 minutes, which is not the case here.

**Option C. 6**

- Incorrect because 6 emails per hour would imply one alert every 10 minutes. The configuration clearly states every minute.

**Option D. 12**

- Incorrect because 12 emails per hour would imply one alert every 5 minutes. Again, the alert is triggered every minute.

---

### Question 28

Your organization has multiple Azure subscriptions, and you need to enable communication between virtual machines in different subscriptions.

Which Azure networking feature would you use to establish connectivity between these VMs?

**Options:**

- **A.** Azure Bastion Host
- **B.** Virtual Network Peering ✅
- **C.** ExpressRoute Global Reach
- **D.** VNet-to-VNet VPN Gateway

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Virtual Network Peering**

- Correct because **VNet Peering** allows seamless communication between virtual networks across **different subscriptions** and even across regions.

- Once peered, resources in both VNets can communicate with each other using private IP addresses, as if they were part of the same network.

- This is the recommended solution for VM-to-VM connectivity across subscriptions.

### Incorrect

**Option A. Azure Bastion Host**

- Incorrect because Bastion provides **secure RDP/SSH connectivity** to VMs directly through the Azure portal without exposing public IPs.

- It does not establish network-level communication between VMs across subscriptions.

**Option C. ExpressRoute Global Reach**

- Incorrect because ExpressRoute Global Reach is used to connect **on-premises networks** via ExpressRoute circuits, not for VM communication across Azure subscriptions.

**Option D. VNet-to-VNet VPN Gateway**

- Incorrect because while a **VPN Gateway** can connect VNets across subscriptions, it is more complex, incurs additional costs, and is typically used for hybrid or cross-region scenarios.

- VNet Peering is simpler and more efficient for this requirement.

###

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

### Question 30

You are configuring a storage account for a web application that requires frequent access to static content like images and CSS files. Which storage access tier would be the most cost-effective option for this scenario?

**Options:**

- **A.** Archive
- **B.** Premium
- **C.** Hot ✅
- **D.** Cool

**Correct answer:** C

**Explanation:**

The Hot access tier is the most cost-effective option for a web application that requires frequent access to static content. It balances performance and cost by optimizing for frequently accessed data, ensuring fast retrieval of images and CSS files for your website visitors while keeping storage costs reasonable.

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

### Question 32

Your company’s e‑commerce website is hosted on **Azure App Services**. You need to track performance metrics such as **response time, HTTP errors, and requests per second**. Which Azure service is best suited for collecting and analyzing this data?

**Options:**

- **A.** Azure Network Watcher
- **B.** Azure Log Analytics
- **C.** Azure Application Insights ✅
- **D.** Azure Monitor

**Correct answer:** C

**Explanation:**

**Correct**

**Option C. Azure Application Insights**

- Correct because **Application Insights** is designed for monitoring application performance.

- It provides telemetry such as **response times, request rates, dependency calls, and HTTP errors**.

- It integrates directly with **Azure App Services**, making it the best choice for tracking web app performance metrics in real time.

**Incorrect**

**Option A. Azure Network Watcher**

- Incorrect because Network Watcher focuses on **network diagnostics and monitoring** (packet capture, NSG flow logs, connection troubleshooting).

- It does not provide application‑level performance metrics like response times or HTTP errors.

**Option B. Azure Log Analytics**

- Incorrect because Log Analytics is used to **query and analyze logs** collected from Azure Monitor.

- While useful for deeper analysis, it is not the primary service for collecting application performance metrics.

**Option D. Azure Monitor**

- Incorrect because Azure Monitor is the **umbrella service** for monitoring across Azure resources.

- It collects metrics and logs but does not provide the **application‑specific telemetry** that Application Insights offers.

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

### Question 34

Your company is experiencing intermittent connectivity issues between Azure virtual machines (VMs) in different subnets within the same virtual network (VNet). You suspect that a Network Security Group (NSG) rule might be blocking traffic. You need to quickly diagnose the problem to minimize downtime.
Which Azure Network Watcher feature should you use to troubleshoot this issue?

**Options:**

- **A.** VPN Diagnostics
- **B.** IP Flow Verify ✅
- **C.** Packet Capture
- **D.** Connection Monitor

**Correct answer:** B

**Explanation:**

The  is IP Flow Verify.
Here‘s why:
IP Flow Verify: This feature allows you to specify a source and destination IP address, port, and protocol, and then verifies if a connection would be allowed or denied by the NSGs associated with the network interfaces. This is ideal for the scenario where you suspect an NSG rule might be blocking traffic.
Why other options are incorrect:
Connection Monitor: This feature is used to monitor network connectivity between two endpoints over time. While it can provide insights into connectivity issues, it‘s not the most direct way to diagnose an NSG rule problem.
Packet Capture: This feature captures network traffic and can be useful for in-depth analysis, but it‘s not the quickest way to determine if an NSG rule is blocking traffic.
VPN Diagnostics: This feature is designed to troubleshoot issues with VPN connections, which is not relevant to the current scenario.
Key steps for using IP Flow Verify:
1. Go to the Network Watcher blade in the Azure portal.
2. Select “IP Flow Verify“ from the tools menu.
3. Specify the source and destination IP addresses, port, protocol, and direction.
4. Select the network interface of the VM where the connection originates.
5. Click “Check“ to verify if the connection will be allowed or denied.
6. The results will indicate if the connection is allowed or denied by any NSGs in the path.

---

### Question 35

**You are developing a web application that requires background processing tasks to be executed periodically.** **Which Azure App Service feature can you use to schedule and manage these background tasks?**

**Options:**

- **A.** Scheduler
- **B.** Logic Apps
- **C.** Azure Functions
- **D.** WebJobs ✅

**Correct answer:** D

**Explanation:**

### Correct

**Option D. WebJobs**

- Correct because **WebJobs** is the Azure App Service feature designed to run background tasks within the context of an App Service.

- WebJobs can be triggered manually, continuously, or on a schedule (using CRON expressions or Azure Scheduler integration).

- This makes them ideal for periodic background processing tasks tied to a web application.

### Incorrect

**Option A. Scheduler**

- Incorrect because Azure Scheduler was a **retired service**. It is no longer available and cannot be used for new workloads.

**Option B. Logic Apps**

- Incorrect because Logic Apps are used for **workflow automation and integration** across services.

- While they can schedule tasks, they are not the native App Service feature for background jobs.

**Option C. Azure Functions**

- Incorrect because Functions are a **serverless compute option**. They can run scheduled tasks, but they are not part of App Service’s built‑in background task feature.

- The exam specifically asks for the **App Service feature**, which is WebJobs.

###

---

### Question 36

You are setting up alerts for your Azure resources. You want to receive notifications via email and SMS when certain performance thresholds are exceeded. How can you configure these alert notifications in Azure Monitor?

**Options:**

- **A.** Azure Service Health
- **B.** Azure Logic Apps
- **C.** Azure Monitor Action Groups ✅
- **D.** Azure Functions

**Correct answer:** C

**Explanation:**

Azure Monitor Action Groups are the most direct and efficient way to configure multiple notification channels for alerts.

---

### Question 37

**You have an Azure subscription. You create the Azure Storage account shown in the exhibit. Based on the information presented, select the answer choice that completes the following statement correctly.**

“To reduce the cost of infrequently accessed data in the storage account, you must modify the __________ setting.”

Please select the answer choice that completes the following statement based on the information presented in the graphic.

To reduce the cost of infrequently accessed data in the storage account, you must modify the ……….  setting.

**Options:**

- **A.** Access tier (default) ✅
- **B.** Performance
- **C.** Account kind
- **D.** Replication

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Access tier (default)**

- Correct because the **Access tier (Hot, Cool, Archive)** setting determines the cost model for data stored in Azure Blob Storage.

- For **infrequently accessed data**, switching from **Hot** to **Cool** or **Archive** reduces storage costs.

- Hot tier = optimized for frequent access (higher cost).

- Cool tier = lower cost, moderate access latency.

- Archive tier = lowest cost, but retrieval can take hours.

- Therefore, modifying the **Access tier (default)** is the right way to reduce costs for infrequently accessed data.

### Incorrect

**Option B. Performance**

- Incorrect because Performance refers to **Standard vs Premium storage**.

- Premium is optimized for low‑latency workloads, not cost savings for infrequent access.

**Option C. Account kind**

- Incorrect because Account kind defines the **type of storage account** (General Purpose v2, BlobStorage, etc.).

- While GPv2 supports tiering, the actual cost optimization comes from modifying the **Access tier**, not the account kind itself.

**Option D. Replication**

- Incorrect because Replication (LRS, GRS, RA‑GRS, ZRS) affects **durability and availability across regions**, not cost optimization for infrequently accessed data.

###

---

### Question 38

Case Study:
Contoso Ltd. has an e-commerce platform hosted on Azure. The platform uses multiple Azure Virtual Machines (VMs) to handle web traffic. Recently, the company has noticed that during promotional events, the traffic spikes significantly, causing performance issues and slow response times. During non-promotional periods, the traffic is relatively low, and having many VMs running results in unnecessary costs.
Contoso Ltd. wants to implement a solution that automatically adjusts the number of VMs based on the load to ensure optimal performance during high traffic periods and cost efficiency during low traffic periods. They have decided to use Azure Virtual Machine Scale Sets (VMSS) with autoscale configurations.
Requirements:
1. Increase the number of VMs when the average CPU usage across the VMs exceeds 75% for 5 minutes.
2. Decrease the number of VMs when the average CPU usage falls below 30% for 10 minutes.
3. Ensure there are always a minimum of 2 VMs running at any time.
4. Limit the maximum number of VMs to 20.
Question: Which of the following steps should you take to meet Contoso Ltd.‘s requirements?

**Options:**

- **A.** Configure a Load Balancer with manual scaling settings. Set the minimum number of VMs to 2 and the maximum to 20. Define rules based on CPU usage to manually add and remove VMs as needed.
- **B.** Manually adjust the number of VMs in the scale set based on observed traffic patterns. Set a calendar-based schedule to increase the number of VMs during promotional periods and decrease during non-promotional periods.
- **C.** Create a VMSS and configure autoscale rules based on the average CPU usage metric. Set the minimum number of VMs to 2 and the maximum to 20. Define a rule to add VMs when the CPU usage is above 75% for 5 minutes, and another rule to remove VMs when the CPU usage is below 30% for 10 minutes. ✅
- **D.** Create a VMSS and configure autoscale rules based on the average memory usage metric. Set the minimum number of VMs to 2 and the maximum to 20. Define a rule to add VMs when the memory usage is above 75% for 5 minutes, and another rule to remove VMs when the memory usage is below 30% for 10 minutes.

**Correct answer:** C

**Explanation:**

Here‘s why this is the correct approach:
1. VMSS and Autoscale Configuration:
Azure Virtual Machine Scale Sets (VMSS) are designed to automatically scale the number of VMs based on predefined rules. This fits Contoso Ltd.‘s requirement for dynamically adjusting the number of VMs based on load.
2. Metric-Based Scaling:
CPU Usage: The case study specifies using CPU usage as the metric for scaling. Autoscale rules based on average CPU usage are appropriate because CPU utilization is a direct indicator of the VMs‘ workload. High CPU usage suggests that the VMs are under heavy load, while low CPU usage indicates less demand.
3. Scaling Rules:
Increase VMs when CPU usage is above 75% for 5 minutes: This rule ensures that additional VMs are added when the load increases significantly, helping maintain performance during peak traffic.
Decrease VMs when CPU usage is below 30% for 10 minutes: This rule reduces the number of VMs during low traffic periods, which helps control costs by not running unnecessary VMs.
4. Minimum and Maximum VM Limits:
Minimum of 2 VMs: This ensures high availability and fault tolerance by having at least two VMs running at all times.
Maximum of 20 VMs: This sets a cap on the number of VMs, preventing excessive scaling and potential cost overruns.
5. Efficiency and Cost-Effectiveness:
By automatically scaling VMs up and down based on real-time demand, Contoso Ltd. can ensure optimal performance during peak times and cost efficiency during off-peak times. This approach minimizes manual intervention and ensures that resources are used effectively.

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

### Question 40

Your organization is expanding its presence in Southeast Asia. You need to create a new storage account that will be accessed primarily by users in that region.
How can you ensure optimal performance and compliance with data sovereignty regulations?

**Options:**

- **A.** Create the storage account in the Southeast Asia region. ✅
- **B.** Create the storage account in the East US region.
- **C.** Create the storage account in the West Europe region.
- **D.** Create the storage account in any Azure region.

**Correct answer:** A

**Explanation:**

Creating the storage account in the Southeast Asia region ensures optimal performance by minimizing latency and adhering to data sovereignty regulations by keeping data within the required geographic boundaries.

---

### Question 41

You are managing a large-scale Azure environment with hundreds of virtual machines. You need a way to track the health and availability of these VMs at a glance. Which Azure Monitor feature provides a visual representation of the health status of your VMs?

**Options:**

- **A.** Azure Service Health
- **B.** Azure Monitor Alerts
- **C.** Azure Monitor Metrics
- **D.** Azure Monitor VM Insights ✅

**Correct answer:** D

**Explanation:**

Azure Monitor VM Insights is specifically designed to aggregate health and performance data from VMs, including a visual map for quick assessment of overall health.

---

### Question 42

**You are implementing a hub‑and‑spoke network topology in Azure. How would you design the virtual networks, subnets, and routing configurations to establish a centralized hub for shared services and connect multiple spoke virtual networks for different workloads or applications?**

**Options:**

- **A.** Create a single virtual network and use Azure Firewall to control traffic between subnets.
- **B.** Create separate virtual networks for the hub and each spoke, and peer the virtual networks. Configure user-defined routes (UDRs) in the spoke networks to route traffic through the hub. ✅
- **C.** Create a virtual network for the hub and subnets for each spoke within the same virtual network. Use network security groups (NSGs) to control traffic between subnets.
- **D.** Create a single virtual network with multiple subnets, one for each workload or application.

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Create separate virtual networks for the hub and each spoke, and peer the virtual networks. Configure user‑defined routes (UDRs) in the spoke networks to route traffic through the hub.**

- Correct because the **hub‑and‑spoke topology** in Azure requires a **dedicated hub VNet** for shared services (firewall, VPN gateway, etc.) and **separate spoke VNets** for workloads.

- **VNet peering** connects the hub and spokes, while **UDRs** ensure traffic from spokes flows through the hub for centralized inspection and control.

- This design provides scalability, centralized governance, and cost efficiency.

### Incorrect

**Option A. Create a single virtual network and use Azure Firewall to control traffic between subnets.**

- Incorrect because a single VNet with subnets does not represent a true hub‑and‑spoke model.

- While Azure Firewall can control traffic, this design lacks the separation and scalability of multiple VNets.

**Option C. Create a virtual network for the hub and subnets for each spoke within the same virtual network. Use NSGs to control traffic between subnets.**

- Incorrect because NSGs only provide basic traffic filtering at the subnet/NIC level.

- This design does not achieve the **isolation and flexibility** of separate VNets with peering.

**Option D. Create a single virtual network with multiple subnets, one for each workload or application.**

- Incorrect because this is essentially a **flat network design**.

- It does not provide the centralized hub for shared services or the separation of workloads that the hub‑and‑spoke architecture requires.

---

### Question 43

You need to configure a jumpbox VM to provide secure access to other VMs in a virtual network.
Which security best practices would you implement to harden the jumpbox VM and minimize the risk of unauthorized access? (Select all that apply.)

**Options:**

- **A.** Enable automatic updates without review
- **B.** Enable just-in-time (JIT) VM access ✅
- **C.** Install a web server on the jumpbox VM
- **D.** Use multi-factor authentication (MFA) ✅
- **E.** Use Network Security Groups (NSGs) to restrict traffic ✅

**Correct answer:** B, D, E

**Explanation:**

The following security best practices should be implemented to harden the jumpbox VM and minimize unauthorized access:
Use multi-factor authentication (MFA): MFA adds an extra layer of security by requiring a second form of authentication (e.g., a code from your phone) in addition to your password.
Enable just-in-time (JIT) VM access: JIT VM access helps reduce the attack surface by only opening the necessary ports to the jumpbox VM when needed.
Use Network Security Groups (NSGs) to restrict traffic: NSGs act as firewalls for your virtual network, allowing you to control inbound and outbound traffic.
The following options should not be implemented:
Enable automatic updates without review: While automatic updates are important, they should always be reviewed before installation on production systems like the jumpbox VM to avoid potential issues or vulnerabilities.
Install a web server on the jumpbox VM: Installing unnecessary software on the jumpbox VM increases its attack surface and introduces potential vulnerabilities.
Therefore, the correct options to choose are:
Use multi-factor authentication (MFA)
Enable just-in-time (JIT) VM access
Use Network Security Groups (NSGs) to restrict traffic

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

### Question 45

Your company uses Azure App Service to host multiple web applications with the following custom domains: www.app1.com, app2.contoso.com, and shop.fabrikam.com. You need to ensure secure HTTPS access for all these applications.
How would you configure custom domain SSL bindings and manage SSL certificates for these applications in App Service?

**Options:**

- **A.** Create separate App Service Managed Certificates for each custom domain (www.app1.com, app2.contoso.com, shop.fabrikam.com) and bind them accordingly. ✅
- **B.** Purchase a wildcard SSL certificate from a third-party provider for *.com and upload it to App Service. Bind the certificate to all applications.
- **C.** Create a single App Service Managed Certificate for *.com and bind it to all applications.
- **D.** Create a single App Service Managed Certificate for *.contoso.com and bind it to app2.contoso.com, then create separate App Service Managed Certificates for www.app1.com and shop.fabrikam.com.

**Correct answer:** A

**Explanation:**

The  is Create separate App Service Managed Certificates for each custom domain (www.app1.com, app2.contoso.com, shop.fabrikam.com) and bind them accordingly.
Here‘s why:
Security Best Practices: It‘s recommended to use separate certificates for each domain for enhanced security and isolation. If a certificate is compromised, it affects only one domain.
Flexibility: Separate certificates allow for independent management of renewals, updates, and potential revocations for each domain.
App Service Managed Certificates: This is the simplest and most cost-effective option for obtaining and managing SSL certificates within Azure.
Why other options are incorrect:
A wildcard certificate for *.com would not be valid for the subdomain app2.contoso.com.
While technically possible, this mixes wildcard and individual certificates, adding unnecessary complexity.
While purchasing a wildcard certificate is possible, using App Service Managed Certificates is generally more efficient and cost-effective within the Azure ecosystem.
Key Steps for Implementation:
1. Create App Service Managed Certificates: For each domain, navigate to your App Service in the Azure portal, go to “TLS/SSL settings,“ and add an App Service Managed Certificate. Ensure domain validation is successful.
2. Bind Certificates: Under “Custom domains,“ add each custom domain and select the corresponding App Service Managed Certificate for binding.
3. Enforce HTTPS: In the “TLS/SSL settings,“ enable “HTTPS Only“ to redirect all HTTP traffic to HTTPS.

---

### Question 46

You need to implement a mechanism to track and analyze usage patterns for Azure resources, such as virtual machine utilization or storage consumption. How can you leverage Azure Monitor Logs and Azure Log Analytics to collect and analyze resource usage data?

**Options:**

- **A.** A. Configure Azure Log Analytics to collect logs directly from virtual machine event logs only.
- **B.** B. Enable Azure Monitor Logs to send platform metrics to Azure Event Hubs for storage and processing.
- **C.** C. Set up diagnostic settings on Azure resources to send platform logs and metrics to a Log Analytics workspace for centralized analysis. ✅
- **D.** D. Ignore Azure Monitor and manually export logs from each resource for analysis.

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Set up diagnostic settings on Azure resources to send platform logs and metrics to a Log Analytics workspace for centralized analysis**

- Correct because this is the standard way to collect and analyze resource usage data in Azure.

- **Diagnostic settings** allow you to configure resources (VMs, storage accounts, etc.) to send telemetry (logs and metrics) to a **Log Analytics workspace**.

- Once data is in Log Analytics, you can query it using **Kusto Query Language (KQL)**, build dashboards, and analyze usage patterns.

- This approach provides centralized monitoring and supports advanced analytics across multiple resources.

### Incorrect

**Option A. Configure Azure Log Analytics to collect logs directly from virtual machine event logs only**

- Incorrect because while Log Analytics can collect VM event logs, this option is too narrow.

- It ignores other Azure resource metrics (like storage or networking) and does not provide a complete view of usage patterns.

**Option B. Enable Azure Monitor Logs to send platform metrics to Azure Event Hubs for storage and processing**

- Incorrect because Event Hubs is typically used for **streaming telemetry to external systems** (like SIEM or third-party analytics).

- While valid for integration scenarios, it is not the primary method for analyzing usage patterns within Azure Monitor and Log Analytics.

**Option D. Ignore Azure Monitor and manually export logs from each resource for analysis**

- Incorrect because this is inefficient and does not leverage Azure’s built-in monitoring capabilities.

- Manual export lacks automation, scalability, and centralized analysis, making it unsuitable for enterprise environments.

###

---

### Question 47

You are using Azure Monitor to collect metrics and logs from various Azure services. Which data storage options are available for storing the collected data in Azure Monitor, and what are the considerations for choosing the appropriate storage option?

**Options:**

- **A.** Azure Data Lake Storage ✅
- **B.** Log Analytics workspace ✅
- **C.** Azure SQL Database
- **D.** Azure Cosmos DB
- **E.** Azure Storage accounts ✅

**Correct answer:** A, B, E

**Explanation:**

Log Analytics is the primary storage for Azure Monitor data, particularly for logs. For long-term archival and cost optimization, you can use Azure Storage or Azure Data Lake Storage.

---

### Question 48

You‘re deploying an internal application on Azure VMs, and you need to provide name resolution for these VMs within your virtual network. Which Azure service is designed specifically for internal name resolution in Azure VNets?

**Options:**

- **A.** Azure Firewall
- **B.** Azure Traffic Manager
- **C.** Azure DNS
- **D.** Azure Private DNS Zone ✅

**Correct answer:** D

**Explanation:**

Azure Private DNS Zones are specifically designed to provide internal name resolution within a virtual network. They allow you to define custom domain names that can be resolved to internal IP addresses, facilitating communication between VMs and other resources within the VNet.

---

### Question 49

You want to create a custom metric to track a specific aspect of your application‘s behavior. How can you create and publish custom metrics in Azure Monitor to track these application-specific data points?

**Options:**

- **A.** Enable diagnostic settings for your application resources and send custom metric data to a Log Analytics workspace.
- **B.** Use Azure Application Insights to automatically collect custom metrics along with application performance data.
- **C.** Utilize Azure Metrics Advisor to automatically detect anomalies in your custom metric data and alert you to potential issues.
- **D.** Create a custom metric definition in Azure Monitor and use the Azure Monitor REST API to publish metric values. ✅

**Correct answer:** D

**Explanation:**

Custom metrics are created using a metric definition in Azure Monitor. You then use the Azure Monitor REST API to programmatically send the values of your custom metric data points to Azure Monitor for storage and analysis.

---

### Question 50

A company currently has an Azure Web App in place located in the Central US region. After deployment of the application to users across the world, some of the users are complaining of slow response times. Which of the following can be done to improve the response times for the web application to users across the world?

**Options:**

- **A.** A. Scale up the App service plan
- **B.** B. Configure an Azure Content Delivery Network endpoint ✅
- **C.** C. Scale out the App Service plan
- **D.** D. Place the web application onto Azure BLOB storage

**Correct answer:** B

**Explanation:**

You can better response times for users across the world by using the Azure Content Delivery service. The Microsoft documentation mentions the following

Options A and C are incorrect since scaling here is not the issue

Option D is incorrect since using Azure Web Apps is the right service for the web application

For more information on the Azure CDN service, please visit the below URL

https://docs.microsoft.com/en-us/azure/cdn/cdn-overview

---

### Question 51

A company has setup a web application on a set of Azure virtual machines. The web application will be used by users across the world. The company is planning on setting up a Content Delivery profile to ensure that users get the ideal response times no matter where they are located.

Which of the following would they setup as the Origin Type for the CDN Endpoint?

**Options:**

- **A.** A. Storage
- **B.** B. Cloud Service
- **C.** C. Web App
- **D.** D. Custom Origin ✅

**Correct answer:** D

**Explanation:**

Since the company is using a web application hosted on an Azure virtual machine, this constitutes a custom origin. The Microsoft documentation mentions the following on Origin types.

Since this is clear from the documentation, all other options are incorrect

For more information on creating endpoints, please visit the below URL

https://docs.microsoft.com/en-us/azure/cdn/cdn-create-endpoint-how-to

---

### Question 52

A company has setup a web application on a set of Azure virtual machines. The web application will be used by users across the world. The company is planning on setting up a Content Delivery profile to ensure that users get the ideal response times no matter where they are located.

Which of the following would they need to fill out additionally to complete the configuration of the CDN Endpoint?

**Options:**

- **A.** A. Storage Account Keys
- **B.** B. Cloud Service Name
- **C.** C. App Service Plan
- **D.** D. Origin hostname ✅

**Correct answer:** D

**Explanation:**

Since this is clear from the implementation, all other options are incorrect

For more information on creating endpoints, please visit the below URL

https://docs.microsoft.com/en-us/azure/cdn/cdn-create-endpoint-how-to

---

### Question 53

Your company has an Azure subscription that is used by multiple departments in your company. The subscription contains around 5 resource groups. Each department uses resources in several resource groups. Your supervisor has requested to send a report that details the costs for each department. Which of the following actions would you need to perform for this purpose? Choose 3 answers from the options given below.

**Options:**

- **A.** A. Assign a tag to each resource group
- **B.** B. Use the Resource costs blade of each resource group
- **C.** C. Download the usage report ✅
- **D.** D. Assign a tag to each resource ✅
- **E.** E. From the Costs Analysis blade, filter the view by tag ✅

**Correct answer:** C, D, E

**Explanation:**

The benefit of tagging and billing is given in the Microsoft documentation

Option A is incorrect since here the resources are used across various departments and are not constrained via resource groups

Option B is incorrect since the costing on a tag basis needs to be seen from Cost Analysis

For more information on using tags, please visit the below URL

https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-using-tags

---

### Question 54

You have an Azure subscription that contains an Azure Storage account.

You plan to create an Azure container instance named container1 that will use a Docker image named Image1. Image1 contains a Microsoft SQL Server instance that requires persistent storage.

You need to configure a storage service for Container1.

What should you use?

**Options:**

- **A.** Azure Files ✅
- **B.** Azure Blob storage
- **C.** Azure Queue storage
- **D.** Azure Table storage

**Correct answer:** A

**Explanation:**

Azure file shares can be used as persistent volumes for stateful containers. Containers deliver “build once, run anywhere” capabilities that enable developers to accelerate innovation. For the containers that access raw data at every start, a shared file system is required to allow these containers to access the file system no matter which instance they run on.

https://docs.microsoft.com/en-us/azure/storage/files/storage-files-introduction

INCORRECT ANSWERS:

Azure Blob storage –  Blob storage is optimized for storing massive amounts of unstructured data.

Azure Queue storage – Queue storage is for storing messages in distributed applications.

Azure Table storage – Table storage is for storing semi-structured data.

---

### Question 55

**You have an app named App1 that runs on two Azure virtual machines named VM1 and VM2.** **You plan to implement an Azure Availability Set for App1. The solution must ensure that App1 is available during planned maintenance of the hardware hosting VM1 and VM2.** **What should you include in the Availability Set?**

**Options:**

- **A.** one update domain
- **B.** two fault domains
- **C.** one fault domain
- **D.** two update domains ✅

**Correct answer:** D

**Explanation:**

### Correct

**Option D. Two update domains**

- Correct because **update domains** ensure that not all VMs in an availability set are rebooted simultaneously during planned maintenance.

- By configuring **two update domains**, VM1 and VM2 will be placed in separate update domains.

- This guarantees that when Azure performs planned maintenance, only one VM is updated at a time, keeping App1 available on the other VM.

### Incorrect

**Option A. One update domain**

- Incorrect because with only one update domain, both VMs would be rebooted together during maintenance.

- This would cause downtime for App1, violating the requirement.

**Option B. Two fault domains**

- Incorrect because **fault domains** protect against hardware failures (like rack or power unit failures), not planned maintenance.

- While fault domains improve resiliency, they do not guarantee availability during maintenance events.

**Option C. One fault domain**

- Incorrect because a single fault domain provides no redundancy against hardware failures and does not address planned maintenance downtime.

###

---
