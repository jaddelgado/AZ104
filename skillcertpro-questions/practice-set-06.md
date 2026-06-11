# Practice Set 6

Source: [https://skillcertpro.com/az-104-exam-questions/6/](https://skillcertpro.com/az-104-exam-questions/6/)
Total questions: 53

---

### Question 1

You have a Standard Azure App Service plan named Plan1.

You need to ensure that Plan1 will scale automatically when the CPU usage of the web app exceeds 80 percent.

What should you select for Plan1?

**Options:**

- **A.** Automatic in the Scale out method settings
- **B.** Rules Based in the Scale out method settings ✅
- **C.** Premium P1 in the Scale up (App Service plan) settings
- **D.** Standard S1 in the Scale up (App Service plan) settings
- **E.** Manual in the Scale out method settings

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Rules Based in the Scale out method settings**

- In Azure App Service, **auto-scaling** is configured under the **Scale out (App Service plan)** settings.

- The correct method is **Rules Based scaling**, where you define rules such as:

- Metric: CPU Percentage

- Condition: Greater than 80%

- Action: Add instance(s)

- This ensures automatic scaling when CPU usage exceeds the threshold.

- Correct answer.

### Incorrect

**Option A. Automatic in the Scale out method settings**

- “Automatic” scaling is not a valid option in App Service plans.

- Scaling requires **rules-based configuration**.

- Incorrect.

**Option C. Premium P1 in the Scale up (App Service plan) settings**

- Scale up changes the **pricing tier** (e.g., Standard → Premium).

- This increases resources per instance but does not provide **automatic scaling based on CPU usage**.

- Incorrect.

**Option D. Standard S1 in the Scale up (App Service plan) settings**

- Similar to Premium P1, this is a **scale up** option, not scale out.

- It changes the instance size but does not configure auto-scaling rules.

- Incorrect.

**Option E. Manual in the Scale out method settings**

- Manual scaling requires administrators to **manually adjust instance count**.

- Does not meet the requirement of automatic scaling when CPU exceeds 80%.

- Incorrect.

###

---

### Question 2

You have an Azure subscription named Sub1 that contains the resources shown in the following table.

**Sub1 contains the following alert rule:**

- **Name**: Alert1

- **Scope**: All resource groups in Sub1

– Include all future resources

- **Condition**: All administrative operations

- **Actions**: Action1

**Sub1 contains the following alert processing rule**

- **Name**: Rule1

- **Scope**: Sub1

- **Rule type**: Suppress notifications

- **Apply the rule**: On a specific time

– **Start**: August 10, 2022

– **End**: August 13, 2022

For the statement below, select Yes if the statement is true. Otherwise, select No.

**“If you create a resource group in Sub1 on August 12, 2022, an email message is sent to [email protected].”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because, although Alert1 is configured to send an email to [email protected] for all administrative operations, there is an alert processing rule (Rule1) in place that suppresses notifications between August 10, 2022 and August 13, 2022. Therefore, despite a new resource group being created in Sub1 on August 12, 2022, which is an administrative operation, the suppress rule will prevent the email notification from being sent to [email protected].

**Reference(s):**

- https://docs.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview

- https://docs.microsoft.com/en-us/azure/azure-monitor/platform/action-groups

- https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-action-rules

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

### Question 7

You have an Azure subscription that contains three virtual networks named VNET1, VNET2, and VNET3.

Peering for VNET1 is configured as shown in the following exhibit.

Peering for VNET2 is configured as shown in the following exhibit.

Peering for VNET3 is configured as shown in the following exhibit.

Based on the information presented, select the answer choice that completes the following statement correctly.

**“Packets from VNET2 can be routed to ______________.”**

**Options:**

- **A.** VNET1 only ✅
- **B.** VNET3 only
- **C.** VNET1 and VNET3

**Correct answer:** A

**Explanation:**

**VNET1 only** is the **correct** answer because VNET2 has a direct peering connection with VNET1, which allows routing of packets between these two virtual networks. Since gateway transit is disabled, VNET2 cannot leverage VNET1 as a transit network to reach other networks, such as VNET3. This configuration restricts communication to only those virtual networks with direct peering links.

**VNET3 only** is **incorrect** because there is no direct peering connection between VNET2 and VNET3, and VNET2 cannot route through VNET1 due to the disabled gateway transit.

**VNET1 and VNET3** is **incorrect** because, without gateway transit enabled, VNET2 is restricted to direct communication only with VNET1.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview

- https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-peering-gateway-transit

---

### Question 8

You have an Azure subscription.

You plan to use an Azure Resource Manager template to deploy a virtual network named VNET1 that will use Azure Bastion.

You must complete the following template.

What should you choose for **Placeholder 1**?

**Options:**

- **A.** AzureBastionSubnet ✅
- **B.** AzureFirewallSubnet
- **C.** LAN01
- **D.** RemoteAccessSubnet

**Correct answer:** A

**Explanation:**

**AzureBastionSubnet** is the **correct** answer because, to use Azure Bastion, a subnet specifically named AzureBastionSubnet is required. This subnet name is reserved for Azure Bastion deployments and must be configured in the virtual network where Bastion is being deployed.

**AzureFirewallSubnet** is **incorrect** because this is the reserved subnet name required for Azure Firewall, not Azure Bastion.

**LAN01** is **incorrect** because it is a generic subnet name and does not meet the specific naming requirement for Azure Bastion.

**RemoteAccessSubnet** is **incorrect** because it does not align with the required naming convention for Azure Bastion.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/bastion/tutorial-create-host-portal#createhost

---

### Question 9

You have an Azure subscription.

You plan to use an Azure Resource Manager template to deploy a virtual network named VNET1 that will use Azure Bastion.

You must complete the following template.

What should you choose for **Placeholder 2**?

**Options:**

- **A.** 10.10.10.0/26 ✅
- **B.** 10.10.10.0/28
- **C.** 10.10.10.0/30

**Correct answer:** A

**Explanation:**

**10.10.10.0/26** is the **correct** answer because the AzureBastionSubnet for Azure Bastion requires a subnet prefix of at least **/26** to function properly. This prefix size provides a sufficient number of IP addresses for Azure Bastion to manage connections and maintain operational capacity.

**10.10.10.0/28** is **incorrect** because a /28 subnet does not provide enough IP addresses for Azure Bastion, which requires a minimum of /26.

**10.10.10.0/30** is **incorrect** because a /30 subnet provides only a very limited number of IP addresses, far below the requirements for Azure Bastion.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/bastion/tutorial-create-host-portal#createhost

---

### Question 10

You have Azure virtual machines that run Windows Server and are configured as shown in the following table.

You create a private Azure DNS zone named adatum.com. You configure the adatum.com zone to allow auto registration from VNET1.

Which A record will be added to the adatum.com zone for **VM1**?

**Options:**

- **A.** None
- **B.** Private IP address only ✅
- **C.** Public IP address only
- **D.** Private IP address and public IP address

**Correct answer:** B

**Explanation:**

**Private IP address only** is the **correct** answer because when a private Azure DNS zone (such as adatum.com) is configured for auto-registration in a virtual network (VNET1), only the private IP addresses of virtual machines in that network are automatically registered in the DNS zone. Public IP addresses are not registered in private DNS zones. Therefore, for VM1, only the private IP address 10.1.0.4 will be added as an A record in the adatum.com zone, while the public IP address 52.186.85.63 will not be included.

**None** is **incorrect** because VM1 is part of VNET1, and VNET1 is configured for auto-registration in the adatum.com DNS zone. Therefore, VM1’s private IP address will be registered in the zone.

**Public IP address only** is **incorrect** because public IP addresses are not registered in private DNS zones. Auto-registration only includes the private IP address.

**Private IP address and public IP address** is **incorrect** because only the private IP address will be registered in the **adatum.com** zone. Public IP addresses are excluded from auto-registration.

**Reference(s):**

- https://docs.microsoft.com/en-us/azure/dns/private-dns-overview

- https://docs.microsoft.com/en-us/azure/dns/private-dns-scenarios

- https://docs.microsoft.com/en-us/azure/dns/private-dns-scenarios#scenario-split-horizon-functionality

---

### Question 11

You have an Azure subscription.
You plan to create an Azure container registry named ContReg1.
You need to ensure that you can push and pull signed images for ContReg1.
What should you do for ContReg1?

**Options:**

- **A.** Enable encryption by using a customer-managed key.
- **B.** Create a connected registry.
- **C.** Add a token.
- **D.** Enable content trust. ✅

**Correct answer:** D

**Explanation:**

Enable content trust is the correct answer here. To ensure that you can push and pull signed container images in ContReg1, you need to enable content trust. Content trust ensures that the integrity of the images is maintained by verifying that the images are signed and have not been tampered with. This allows only trusted and signed images to be pushed and pulled from the registry.
Enable encryption by using a customer-managed key is incorrect because encryption protects data at rest but does not address image signing.
Create a connected registry is incorrect because connected registries are used for geo-replication and scaling deployments but do not address signed images.
Add a token is incorrect because tokens are used to manage authentication for accessing the registry, not for image signing.
Reference(s):
https://learn.microsoft.com/en-us/azure/container-registry/container-registry-content-trust
https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview

---

### Question 12

You create an Azure Storage account.

You plan to add 10 blob containers to the storage account.

For one of the containers, you need to use a different key to encrypt data at rest.

What should you do before you create the container?

**Options:**

- **A.** Rotate the access keys.
- **B.** Create an encryption scope. ✅
- **C.** Modify the minimum TLS version.
- **D.** Generate a shared access signature (SAS).

**Correct answer:** B

**Explanation:**

**Create an encryption scope** is the **correct** answer because to use a different key for encrypting data at rest for a specific blob container, you need to create an encryption scope in Azure Storage. Once created, the encryption scope can be assigned to individual containers, allowing them to use a distinct encryption key.

**Rotate the access keys** is **incorrect** because rotating access keys changes the authentication keys used to access the storage account but does not provide a way to use a different encryption key for a specific container.

**Modify the minimum TLS version** is **incorrect** because modifying the TLS version affects the security protocol for data in transit, not the encryption of data at rest.

**Generate a shared access signature (SAS)** is **incorrect** because a SAS provides controlled access to the storage account resources but does not influence encryption settings for data at rest.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/storage/blobs/encryption-scope-overview

- https://learn.microsoft.com/en-us/azure/storage/blobs/encryption-scope-manage?tabs=portal

---

### Question 13

You have an Azure Linux virtual machine that is protected by Azure Backup. One week ago, two files were deleted from the virtual machine. You need to restore the deleted files to an on-premises computer as quickly as possible. Which four actions should you perform in sequence?

ACTIONS

- 
From the Azure portal, click Restore VM from the vault.

- 
Mount a VHD.

- 
From the Azure portal, click File Recovery from the vault.

- 
Copy the files by using AZCopy.

- 
Select a restore point that contains the deleted files.

- 
Copy the files by using local file management tools (e.g., File Explorer, cp, or rsync).

- 
Download and run the script to mount a drive on the local computer.

**Options:**

- **A.** 2-3-5-7
- **B.** 1-5-2-6
- **C.** 3-5-7-6 ✅
- **D.** 6-4-7-2
- **E.** 4-5-1-3
- **F.** 2-4-7-3

**Correct answer:** C

**Explanation:**

**Correct Sequence: 3-5-7-6**

- 
(Action 3) From the Azure portal, click File Recovery from the vault: This is the correct entry point. Unlike a full VM restore, the File Recovery feature allows you to mount specific disks from a recovery point to your local machine to extract individual files.

- 
(Action 5) Select a restore point that contains the deleted files: You must choose a timestamp prior to the accidental deletion to ensure the recovery point contains the required data.

- 
(Action 7) Download and run the script to mount a drive on the local computer: Azure provides a script (Python for Linux, executable for Windows) specifically designed to create an iSCSI connection between your local machine and the recovery point in the Azure Recovery Services vault.

- 
(Action 6) Copy the files by using local file management tools: Once the script successfully connects, the recovery point appears as a drive or mount point on your local machine. Because this could be a Linux or Windows environment, “File Explorer” is often used as a general term for the local OS’s file management capability (e.g., using cp, rsync, or a GUI file browser on Linux).

Why other options are incorrect:

- 
Action 1 (Restore VM): This would initiate a full VM restore, which involves deploying a new VM and potentially overwriting existing resources. It is far slower than granular file recovery.

- 
Action 2 (Mount a VHD): While the recovery process technically mounts a VHD via iSCSI, “Mount a VHD” as a standalone action in the portal is not the standard workflow for File Recovery.

- 
Action 4 (AZCopy): AZCopy is designed for transferring data to/from Azure Storage accounts or Blobs, not for extracting individual files from an iSCSI-mounted backup recovery point.

---

### Question 14

**Scenario:** You have an Azure subscription with several **Azure Container Registries (ACR)**. You plan to use **ACR Tasks** and configure **private endpoint connections**.

**Question:** Which container registries support private endpoints?

You plan to use ACR Tasks and configure private endpoint connections.

Which container registries support **private endpoints**?

**Options:**

- **A.** ContReg1 only ✅
- **B.** ContReg1 and ContReg2 only
- **C.** ContReg1, ContReg2, and ContReg3

**Correct answer:** A

**Explanation:**

### Correct

**Option A: ContReg1 only**

- Private endpoints are supported only for **Premium-tier container registries**.

- ContReg1 is the only registry in the table that is **Premium**, so it supports private endpoints.

- Therefore, the correct answer is **ContReg1 only**.

### Incorrect

**Option B: ContReg1 and ContReg2 only**

- Incorrect because ContReg2 is not Premium.

- Standard and Basic tiers do not support private endpoints.

**Option C: ContReg1, ContReg2, and ContReg3**

- Incorrect because only **Premium-tier registries** support private endpoints.

- Including ContReg2 and ContReg3 is wrong since they are not Premium.

###

---

### Question 15

You have an Azure Storage account named storage1 that contains a blob container named container1.
You need to prevent new content added to container1 from being modified for one year.
What should you configure?

**Options:**

- **A.** The Access control (IAM) settings
- **B.** An access policy ✅
- **C.** The access level
- **D.** The access tier

**Correct answer:** B

**Explanation:**

An access policy is the correct answer because it allows you to configure immutability policies, such as time-based retention or legal hold, on a blob container. To prevent new content in the container from being modified for one year, you would set a time-based retention policy using a stored access policy that specifies the duration of the immutability period.
The Access control (IAM) settings is incorrect because IAM settings control role-based access to the storage account, not the immutability or modification rights of the data itself.
The access level is incorrect because this refers to the public access settings of the container, which determine if blobs are publicly accessible over the internet. It doesn‘t affect the ability to modify data within the container.
The access tier is incorrect because it defines the storage tier (Hot, Cool, or Archive) based on usage and access frequency, but it does not control modification or retention of content.
Reference(s):
https://learn.microsoft.com/en-us/azure/storage/blobs/immutable-storage-overview
https://docs.microsoft.com/en-us/azure/storage/blobs/immutable-time-based-retention-policy-overview

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

### Question 18

You have an Azure subscription.

You create a routing table named RT1.

You need to add a route to RT1 that specifies the next hop IP address.

Which next hop type should you select?

**Options:**

- **A.** Internet
- **B.** Virtual network gateway
- **C.** Virtual network
- **D.** Virtual appliance ✅

**Correct answer:** D

**Explanation:**

### Correct

**Option D. Virtual appliance**

- Correct because when you want to specify a **custom next hop IP address**, you must select **Virtual appliance** as the next hop type.

- This is typically used when routing traffic through a network virtual appliance (NVA) such as a firewall, load balancer, or other custom routing device.

- Azure allows you to define the IP address of the appliance as the next hop, ensuring traffic is redirected appropriately.

### Incorrect

**Option A. Internet**

- Incorrect because the **Internet** next hop type sends traffic directly to the public internet.

- It does not allow you to specify a custom IP address.

**Option B. Virtual network gateway**

- Incorrect because this next hop type is used for routing traffic through a **VPN gateway or ExpressRoute gateway**.

- It does not support specifying a custom IP address.

**Option C. Virtual network**

- Incorrect because this next hop type is used for routing traffic within the **same virtual network**.

- It does not allow you to define a specific next hop IP address.

###

---

### Question 19

**You have an on‑premises server that contains a folder named **D:\Folder1**. You need to copy the contents of **D:\Folder1** to the public container in an Azure Storage account named **contosodata**. Which command should you run?**

**Options:**

- **A.** az storage blob copy start D:\Folder1 https://contosodata.blob.core.windows.net/public
- **B.** azcopy copy D:\folder1 https://contosodata.blob.core.windows.net/public --recursive ✅
- **C.** azcopy sync D:\folder1 https://contosodata.blob.core.windows.net/public --snapshot
- **D.** az storage blob copy start-batch D:\Folder1 https://contosodata.blob.core.windows.net/public

**Correct answer:** B

**Explanation:**

### Correct

**Option B. azcopy copy D:\folder1 ****https://contosodata.blob.core.windows.net/public**** –recursive**

- Correct because **AzCopy** is the recommended tool for copying files from on‑premises to Azure Blob Storage.

- The copy command with the --recursive flag ensures that all files and subfolders inside D:\Folder1 are copied into the specified container.

- This is the exact syntax required for bulk data transfer into Blob Storage.

### Incorrect

**Option A. az storage blob copy start**

- Incorrect because this command is used to copy blobs **within Azure Storage**, not from an on‑premises folder.

- It cannot directly copy local files into Blob Storage.

**Option C. azcopy sync … –snapshot**

- Incorrect because sync is used to synchronize differences between a source and destination, not for initial bulk copy.

- The --snapshot flag is not valid for this scenario.

**Option D. az storage blob copy start-batch**

- Incorrect because start-batch is also intended for copying blobs between Azure storage accounts or containers.

- It does not support copying local files from a server folder.

###

---

### Question 20

**You have an Azure subscription that contains the container images shown in the table. You plan to use the following services: Azure Container Instances, Azure Container Apps, Azure App Service. In which service(s) can you run ****Image2****?**

You plan to use the following services:

- Azure Container Instances

- Azure Container Apps

- Azure App Service

In which service(s) can you run **Image2**?

**Options:**

- **A.** Azure Container Instances only
- **B.** Azure Container Apps only
- **C.** Azure Container Instances and App Services only
- **D.** Azure Container Apps and App Services only
- **E.** Azure Container Instances, Azure Container Apps, and App Services ✅

**Correct answer:** E

**Explanation:**

### Correct

**Option E. Azure Container Instances, Azure Container Apps, and App Services**

- Correct because **Image2** is a supported container image type that can run across all three services:

- **Azure Container Instances (ACI)** → runs containers directly without orchestration.

- **Azure Container Apps** → runs containers in a managed environment with scaling and microservices support.

- **Azure App Service** → supports running custom containers for web apps and APIs.

- Since Image2 is compatible, it can be deployed in all three services.

### Incorrect

**Option A. Azure Container Instances only**

- Incorrect because limiting Image2 to ACI ignores its compatibility with Container Apps and App Service.

**Option B. Azure Container Apps only**

- Incorrect because Image2 is not restricted to Container Apps; it can also run in ACI and App Service.

**Option C. Azure Container Instances and App Services only**

- Incorrect because this excludes Container Apps, which also supports running Image2.

**Option D. Azure Container Apps and App Services only**

- Incorrect because this excludes ACI, which is also a valid option.

###

---

### Question 21

You have an Azure subscription. Users access the resources in the subscription from either home or from customer sites. From home, users must establish a point‑to‑site VPN to access Azure resources. The users on the customer sites access the Azure resources by using site‑to‑site VPNs. You have a line‑of‑business app named App1 that runs on several Azure virtual machines. The virtual machines run Windows Server 2016. You need to ensure that the connections to App1 are spread across all the virtual machines. What are two possible Azure services that you can use?

**Options:**

- **A.** an internal load balancer ✅
- **B.** a public load balancer
- **C.** an Azure Content Delivery Network (CDN)
- **D.** Traffic Manager
- **E.** an Azure Application Gateway ✅

**Correct answer:** A, E

**Explanation:**

### Correct

**Option A. an internal load balancer**

- Correct because an **internal load balancer** distributes traffic across VMs inside a virtual network.

- Since users connect via VPN (point‑to‑site or site‑to‑site), they are effectively “inside” the VNet, so an internal load balancer can spread traffic across all VM instances hosting App1.

**Option E. an Azure Application Gateway**

- Correct because **Application Gateway** is a Layer 7 load balancer that can distribute HTTP/HTTPS traffic across multiple VMs.

- It also provides additional features like SSL termination, Web Application Firewall (WAF), and URL‑based routing.

- This makes it suitable for spreading connections across App1’s VMs while providing advanced traffic management.

### Incorrect

**Option B. a public load balancer**

- Incorrect because a public load balancer distributes traffic from the internet to VMs.

- In this scenario, users connect via VPN (not directly from the internet), so a public load balancer is not required.

**Option C. an Azure Content Delivery Network (CDN)**

- Incorrect because CDN is used to cache and deliver static content (images, scripts, videos) closer to users.

- It does not distribute live application traffic across VMs.

**Option D. Traffic Manager**

- Incorrect because Traffic Manager is a DNS‑based global load balancer used to distribute traffic across endpoints in different regions.

- App1 runs on VMs within one region, so Traffic Manager is not applicable here.

---

### Question 22

**You have a virtual network named VNet1 that has the configuration shown in the exhibit. Based on the information presented, complete the following statement with the correct answer choice.**

“Before a virtual machine on VNet1 can receive an IP address from 192.168.1.0/24, you must first _______________________.”

**Options:**

- **A.** add a network interface
- **B.** add a subnet
- **C.** add an address space ✅
- **D.** delete a subnet
- **E.** delete an address space

**Correct answer:** C

**Explanation:**

### Correct

**Option C. add an address space**

- Correct because the IP range **192.168.1.0/24** must first be defined as part of the **address space** of VNet1.

- Without adding this address space, VNet1 cannot allocate IP addresses from that range to any subnet or VM.

- Once the address space is added, you can then create a subnet within that range and assign IPs to VMs.

### Incorrect

**Option A. add a network interface**

- Incorrect because a NIC is required for VM connectivity, but it cannot be assigned an IP from 192.168.1.0/24 unless that range exists in the VNet’s address space.

**Option B. add a subnet**

- Incorrect because you cannot create a subnet in 192.168.1.0/24 unless the VNet’s address space already includes that range. The prerequisite is adding the address space first.

**Option D. delete a subnet**

- Incorrect because deleting a subnet does not enable allocation of IPs from a new range. It is unrelated to the requirement.

**Option E. delete an address space**

- Incorrect because removing an address space reduces available ranges. The solution requires **adding**, not deleting.

###

---

### Question 23

**You have an Azure subscription that contains the resources in the following table. In Azure, you create a private DNS zone named adatum.com, add a virtual network link to VNet2, and enable auto‑registration. The adatum.com zone is configured as shown in the exhibit.**

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“The A record for VM5 will be registered automatically in the adatum.com zone.”**

In Azure, you create a private DNS zone named adatum.com, add virtual network link to VNet2, and enable auto registration.

The adatum.com zone is configured as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“The A record for VM5 will be registered automatically in the adatum.com zone.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because auto‑registration only applies to **VMs in the linked virtual network (VNet2)**.

- If VM5 is not part of VNet2, its DNS record will not be automatically registered in the private DNS zone.

- The DNS zone adatum.com will only auto‑register records for VMs in the linked VNet with auto‑registration enabled.

### Incorrect

**Option A. Yes**

- Incorrect because answering “Yes” assumes that VM5’s record will be automatically registered regardless of its network.

- In reality, unless VM5 resides in VNet2, its A record will not be created automatically.

###

---

### Question 24

**You have an Azure subscription named Subscription1 that contains the resources as shown in the table.** **You plan to configure Azure Backup reports for Vault1.** **You are configuring the diagnostic settings for the AzureBackupReports log.** **Which Log Analytics workspaces can you use for the Azure Backup reports of Vault1?**

**Options:**

- **A.** Analytics1 only
- **B.** Analytics2 only
- **C.** Analytics3 only
- **D.** Analytics1, Analytics2, and Analytics3 ✅

**Correct answer:** D

**Explanation:**

### Correct

**Option D. Analytics1, Analytics2, and Analytics3**

- Correct because **Azure Backup reports** can send diagnostic data to **any Log Analytics workspace** in the same subscription and region.

- Vault1 is not restricted to a single workspace; all listed workspaces are eligible destinations.

- Therefore, you can configure the diagnostic settings to send logs to **Analytics1, Analytics2, and Analytics3**.

### Incorrect

**Option A. Analytics1 only**

- Incorrect because while Analytics1 may be valid, the solution is not limited to just one workspace.

**Option B. Analytics2 only**

- Incorrect for the same reason — Analytics2 alone is valid but incomplete.

**Option C. Analytics3 only**

- Incorrect because Analytics3 alone is valid but incomplete.

---

### Question 25

**You have an Azure subscription that contains the resources shown in the table.** **You need to create a network interface named NIC1 without creating additional resources.** **In which region can you create NIC1?**

**Options:**

- **A.** East US only ✅
- **B.** East US and West Europe only
- **C.** East US and North Europe only
- **D.** East US, West Europe, and North Europe

**Correct answer:** A

**Explanation:**

### Correct

**Option A. East US only**

- Correct because a **network interface (NIC)** must be created in the **same region as the virtual network (VNet)** it will connect to.

- If the table shows that the existing VNet is in **East US**, then NIC1 can only be created in East US without requiring additional resources.

- Attempting to create NIC1 in another region would require creating a new VNet in that region, which violates the requirement of not creating additional resources.

### Incorrect

**Option B. East US and West Europe only**

- Incorrect because NIC1 cannot be created in West Europe unless a VNet exists there.

- Since only East US has the required VNet, West Europe is invalid.

**Option C. East US and North Europe only**

- Incorrect for the same reason: North Europe does not have a VNet available, so NIC1 cannot be created there without provisioning new resources.

**Option D. East US, West Europe, and North Europe**

- Incorrect because only East US is valid.

- Including West Europe and North Europe assumes NICs can be created independently of VNets, which is not true.

###

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

### Question 27

You have an Azure container registry named contoso2023 as shown below.

You need to enable contoso2023 to use a dedicated data endpoint.

Which **two** settings should you configure for contoso2023?

**Options:**

- **A.** Overview
- **B.** Properties ✅
- **C.** Networking ✅
- **D.** Tasks
- **E.** Access control (IAM)
- **F.** Events

**Correct answer:** B, C

**Explanation:**

### Correct

**Option B. Properties**

- **Correct because**: The **Properties** blade in Azure Container Registry allows you to configure registry features such as enabling the **dedicated data endpoint**. This is where you toggle the setting to use a separate endpoint for data transfer.

**Option C. Networking**

- **Correct because**: The **Networking** settings control how the registry is accessed, including private endpoints and connectivity. To properly enable and secure a dedicated data endpoint, you must configure networking so that traffic routes correctly.

### Incorrect

**Option A. Overview**

- Incorrect because the Overview blade only provides a summary of the registry’s status and usage. It does not allow configuration of endpoints.

**Option D. Tasks**

- Incorrect because Tasks are used for automation (like building and running container images), not for configuring endpoints.

**Option E. Access control (IAM)**

- Incorrect because IAM controls role‑based access permissions, not endpoint configuration.

**Option F. Events**

- Incorrect because Events are related to registry activity notifications, not endpoint setup.

###

---

### Question 28

You have an Azure subscription that contains three virtual machines named VM1, VM2, and VM3. All the virtual machines are in an availability set named AVSet1.
You need to scale up VM1 to a new virtual machine size, but the intended size is unavailable.
What should you do first?

**Options:**

- **A.** Create a proximity placement group.
- **B.** Deallocate VM1. ✅
- **C.** Convert AvSet1 into a managed availability set.
- **D.** Shut down VM2 and VM3.

**Correct answer:** B

**Explanation:**

Deallocate VM1 is the correct answer here. When a specific virtual machine size is unavailable for a VM that is part of an availability set (like AVSet1), the first step is to deallocate the virtual machine. Deallocating the VM releases the hardware allocation, potentially freeing up capacity for the new VM size. Once the VM is deallocated, you can attempt to resize it.
Create a proximity placement group is incorrect because proximity placement groups are used to ensure low-latency placement of VMs but have no direct impact on resizing availability.
Convert AVSet1 into a managed availability set is incorrect because the availability set is already managed by default when using managed disks, and this action wouldn‘t resolve the size availability issue.
Shut down VM2 and VM3 is incorrect because shutting down the other VMs in the availability set does not affect the resizing of VM1.
Reference(s):
https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/resize-vm?tabs=portal

---

### Question 29

You need to create an Azure Storage account named storage1. The solution must meet the following requirements:
Support Azure Data Lake Storage.
Minimize costs for infrequently accessed data.
Automatically replicate data to a secondary Azure region.
Which three options should you configure for storage1?

**Options:**

- **A.** geo-redundant storage (GRS) ✅
- **B.** hierarchical namespace ✅
- **C.** zone-redundant storage (ZRS)
- **D.** the Hot access tier
- **E.** the Cool tier ✅

**Correct answer:** A, B, E

**Explanation:**

geo-redundant storage (GRS) is correct because the requirement states that data must automatically replicate to a secondary Azure region. GRS provides this replication capability, ensuring redundancy across regions.
hierarchical namespace is correct because enabling the hierarchical namespace is necessary to support Azure Data Lake Storage, which uses this feature to organize data in a directory-based structure.
the Cool tier is correct because the Cool access tier minimizes costs for infrequently accessed data. This is aligned with the requirement to reduce costs for such data usage scenarios.
zone-redundant storage (ZRS) is incorrect because ZRS replicates data only within a single region across availability zones and does not provide cross-region replication, which is a requirement in this scenario.
the Hot access tier is incorrect because the Hot tier is optimized for frequently accessed data, which would result in higher costs for infrequently accessed data, contradicting the requirement to minimize costs.
Reference(s):
https://learn.microsoft.com/en-us/azure/storage/common/storage-account-options
https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction

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

### Question 33

You have an Azure subscription that contains an Azure Storage account.

You plan to copy an on-premises virtual machine image to a container named vmimages.

You need to create the container for the planned image.

You need to run the below command.

Which command should you run?

**Options:**

- **A.** azcopy sync https://mystorageacount. blob .core.windows.net/vmimages
- **B.** azcopy make https://mystorageacount.queue.core.windows.net/vmimages
- **C.** azcopy copy https://mystorageacount.table.core.windows.net/vmimages
- **D.** azcopy sync https://mystorageacount.dfs.core.windows.net/vmimages
- **E.** azcopy make https://mystorageacount.blob.core.windows.net/vmimages ✅
- **F.** azcopy copy https://mystorageacount.images.core.windows.net/vmimages

**Correct answer:** E

**Explanation:**

**azcopy make ‘https://mystorageaccount.blob.core.windows.net/vmimages’** is **correct** because the make command in **AzCopy** is specifically used to **create a new container** in an Azure Blob Storage account.

- The **blob** endpoint (blob.core.windows.net) is the correct endpoint for creating containers in **Blob Storage**.

- The container name **vmimages** indicates that it is intended for storing blobs, which aligns with the **blob** endpoint.

- The correct syntax for creating a new blob container using AzCopy is:

azcopy make ‘https://&lt;storage-account-name&gt;.blob.core.windows.net/&lt;container-name&gt;’

azcopy sync ‘https://mystorageaccount.blob.core.windows.net/vmimages’

Sync is used to **synchronize data between a source and a destination**, not to create a container.

azcopy make ‘https://mystorageaccount.queue.core.windows.net/vmimages’

The **queue** endpoint is for Azure Queue Storage, not Blob Storage.

azcopy copy ‘https://mystorageaccount.table.core.windows.net/vmimages’

The **table** endpoint is for Azure Table Storage, not Blob Storage.

azcopy sync ‘https://mystorageaccount.dfs.core.windows.net/vmimages’

The **dfs** endpoint is for Azure Data Lake Storage, not Blob Storage.

azcopy copy ‘https://mystorageaccount.images.core.windows.net/vmimages’

The **images** endpoint is invalid in Azure Storage.

**Reference(s)**:

https://learn.microsoft.com/en-us/azure/storage/common/storage-ref-azcopy-make

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

### Question 35

You have an Azure virtual network named VNet1 that contains the following settings:
IPv4 address space: 172.16.10.0/24
Subnet name: Subnet1
Subnet address range: 172.16.10.0/25
What is the maximum number of virtual machines that can connect to Subnet1?

**Options:**

- **A.** 24
- **B.** 25
- **C.** 123 ✅
- **D.** 128
- **E.** 251

**Correct answer:** C

**Explanation:**

123 is the correct answer. The subnet 172.16.10.0/25 has a total of 128 IP addresses. However, Azure reserves the first four and the last IP address in every subnet for internal use. Therefore, the available IP addresses for virtual machines are:
128 (total IP addresses) – 5 (reserved addresses) = 123 usable IP addresses.
These 123 addresses can be assigned to virtual machines or other resources within the subnet.
172.16.10.0/25 means the subnet has 128 total IP addresses (2^7 = 128).
Azure reserves five IP addresses in each subnet:
The first IP is the network address.
The second through fourth IP addresses are reserved for Azure services.
The last IP address is reserved for the broadcast address.
Thus, 123 addresses remain available for virtual machines.
Reference(s):
https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-faq

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

### Question 38

You have two Azure subscriptions named Sub1 and Sub2 that are linked to separate Microsoft Entra tenants.

You have the virtual networks shown in the following table.

Which virtual networks can you peer with VNet1?

**Options:**

- **A.** VNet2 only
- **B.** VNet2 and VNet3 only
- **C.** VNet2 and VNet4 only
- **D.** VNet2, VNet3, and VNet4 only
- **E.** VNet2, VNet3, VNet4, and VNet5 ✅

**Correct answer:** E

**Explanation:**

**VNet1** can peer with **VNet2, VNet3, VNet4, and VNet5** because global virtual network peering allows you to peer virtual networks across different regions and subscriptions, even when they are linked to different Microsoft Entra tenants.

- **VNet2**: Same region (East US), same subscription (Sub1).

- **VNet3**: Different region (West US), same subscription (Sub1).

- **VNet4**: Same region (East US), different subscription (Sub2).

- **VNet5**: Different region (Central US), different subscription (Sub2).

With global VNet peering, you can enable communication between virtual networks in different regions and subscriptions, as long as the necessary permissions are configured.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview

---

### Question 39

You have an Azure subscription that contains a storage account named storage1.
You need to allow access to storage1 from selected networks and your home office. The solution must minimize administrative effort.
What should you do first for storage1?

**Options:**

- **A.** Add a private endpoint.
- **B.** Modify the Public network access settings. ✅
- **C.** Select Internet routing.
- **D.** Modify the Access Control (IAM) settings.

**Correct answer:** B

**Explanation:**

Modify the Public network access settings is the correct answer here. To allow access to storage1 from selected networks and your home office while minimizing administrative effort, you should first modify the Public network access settings. By selecting the option to allow access only from selected virtual networks and IP addresses, you can define specific networks and IP addresses, such as your home office‘s public IP address, without needing to configure more complex solutions like private endpoints.
Add a private endpoint is incorrect because private endpoints require additional setup and would only allow access through a private network, not minimizing administrative effort.
Select Internet routing is incorrect because this would open the storage account to access from the internet, which doesn‘t fulfill the requirement of limiting access to selected networks and your home office.
Modify the Access Control (IAM) settings is incorrect because IAM controls user and group permissions for accessing resources but does not control network access.
Reference(s):
https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security?tabs=azure-portal
https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security?tabs=azure-portal#public-network-access

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

### Question 42

You have an Azure subscription that contains the resources shown in the following table.

You create a public IP address named IP1.

Which **two** resources can you associate to IP1?

**Options:**

- **A.** VM1
- **B.** LB1 ✅
- **C.** NIC1 ✅
- **D.** VPN1
- **E.** VNet1

**Correct answer:** B, C

**Explanation:**

**LB1 (Load balancer) **and **NIC1 (Network interface)** are the **correct** answers. Public IP addresses can be associated with a load balancer or a network interface to enable external communication with resources like virtual machines or services behind the load balancer.

- **LB1**: A public IP can be associated with a load balancer to distribute incoming traffic across multiple backend resources, such as virtual machines.

- **NIC1**: A public IP can also be associated with a network interface, allowing a virtual machine to have direct access to the internet.

**VM1** is **incorrect** because public IP addresses are associated with network interfaces (like NIC1) rather than directly with virtual machines.

**VPN1** is **incorrect** because virtual network gateways use their own public IPs but are not directly associated with manually created public IPs.

**VNet1** is **incorrect** because virtual networks themselves do not have public IP addresses directly associated with them.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses

- https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-overview

---

### Question 43

You have an Azure subscription that contains two peered virtual networks named VNet1 and VNet2. VNet1 has a VPN gateway that uses static routing,
The on-premises network has a VPN connection that uses the VPN gateway of VNet1.
You need to configure access for users on the on-premises network to connect to a virtual machine on VNet2. The solution must minimize costs.
Which type of connectivity should you use?

**Options:**

- **A.** Azure Firewall with a private IP address
- **B.** service chaining and user-defined routes (UDRs) ✅
- **C.** Azure Application Gateway
- **D.** ExpressRoute circuits to VNet2

**Correct answer:** B

**Explanation:**

Service chaining and user-defined routes (UDRs) is the correct answer. By using service chaining and configuring user-defined routes (UDRs), you can route traffic from the on-premises network, through the VPN gateway on VNet1, to VNet2. This setup leverages the existing peering between VNet1 and VNet2 without requiring additional costly infrastructure like Azure Firewall or ExpressRoute, thereby minimizing costs. UDRs will ensure that the traffic is directed through the correct paths.
Azure Firewall with a private IP address is incorrect because while it could provide routing and security, it is more costly than using UDRs and is not necessary for this scenario.
Azure Application Gateway is incorrect because it is primarily used for managing and load balancing web traffic, not for routing network traffic between VNets or from on-premises networks.
ExpressRoute circuits to VNet2 is incorrect because ExpressRoute is a high-cost solution that provides private connectivity between on-premises and Azure, which is not required since you already have a VPN gateway in place for the on-premises connection.
Reference(s):
https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview
https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview

---

### Question 44

You have an Azure subscription that contains a storage account named storage1.
You need to ensure that the access keys for storage1 rotate automatically.
What should you configure?

**Options:**

- **A.** a backup vault
- **B.** redundancy for storage1
- **C.** lifecycle management for storage1
- **D.** an Azure key vault ✅
- **E.** a Recovery Services vault

**Correct answer:** D

**Explanation:**

An Azure key vault is the correct answer. To ensure that the access keys for storage1 rotate automatically, you should store the keys in Azure Key Vault and enable key rotation policies. Key Vault allows for the secure storage of secrets, including storage account access keys, and provides the ability to configure automatic key rotation.
A backup vault and a Recovery Services vault are incorrect because they are used for backing up data and managing disaster recovery, not for rotating access keys.
Redundancy for storage1 is incorrect because it deals with the replication of storage data across different locations for high availability, not key management.
Lifecycle management for storage1 is incorrect because it manages data retention policies, not access key rotation.
Reference(s):
https://learn.microsoft.com/en-us/azure/key-vault/general/overview
https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal

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

### Question 46

You have an Azure subscription that contains a Standard SKU Azure container registry named ContReg1.
You need to ensure that ContReg1 supports geo-replication.
What should you do first for ContReg1?

**Options:**

- **A.** Enable Admin user.
- **B.** Add a scope map.
- **C.** Add an automation task.
- **D.** Create a cache rule.
- **E.** Upgrade the SKU. ✅

**Correct answer:** E

**Explanation:**

Upgrade the SKU is the correct answer here. Geo-replication in Azure Container Registry is only supported in the Premium SKU. Since ContReg1 is currently using the Standard SKU, the first step to enable geo-replication is to upgrade the SKU to Premium. Once the SKU is upgraded, you can configure geo-replication across multiple regions.
Enable Admin user is incorrect because this is related to authentication and does not enable geo-replication.
Add a scope map is incorrect because scope maps are used for defining permissions for tokens, not for geo-replication.
Add an automation task is incorrect because automation tasks are used for building and pushing images, not for geo-replication.
Create a cache rule is incorrect because cache rules are unrelated to geo-replication.
Reference(s):
https://learn.microsoft.com/en-us/azure/container-registry/container-registry-geo-replication
https://learn.microsoft.com/en-us/azure/container-registry/container-registry-skus

---

### Question 47

You have an Azure subscription named Subscription1 that contains the resources as shown in the following table.

You plan to configure Azure Backup reports for Vault1.

You are configuring the diagnostic settings for the AzureBackupReports log.

Which **storage accounts** can you use for the Azure Backup reports of Vault1?

**Options:**

- **A.** Storage1 only
- **B.** Storage2 only
- **C.** Storage3 only ✅
- **D.** Storage1, Storage2, and Storage3

**Correct answer:** C

**Explanation:**

**Storage3 only** is correct because Azure Backup requires that the storage account used for diagnostic settings (like Azure Backup reports) be in the same region as the Recovery Services vault (Vault1). Since Vault1 is in the **West Europe** region, only **Storage3**, located in **West Europe**, meets this requirement.

**Storage1 only** is incorrect because Storage1 is in the East US region, which does not match the West Europe region of Vault1.

**Storage2 only** is incorrect because Storage2 is in the West US region, which also does not match the West Europe region of Vault1.

**Storage1, Storage2, and Storage3** is incorrect because only Storage3 is in the same region as Vault1. Storage1 and Storage2 are in East US and West US, respectively, and therefore cannot be used.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/backup/backup-azure-files?tabs=backup-center

- https://docs.microsoft.com/en-us/azure/backup/backup-create-rs-vault

---

### Question 48

You have an Azure subscription that contains the virtual machines shown in the following table.

VM1 and VM2 use public IP addresses. From Windows Server 2019 on VM1 and VM2, you allow inbound Remote Desktop connections.

Subnet1 and Subnet2 are in a virtual network named VNET1.

The subscription contains two network security groups (NSGs) named NSG1 and NSG2. NSG1 uses only the default rules. NSG2 uses the default rules and the following custom incoming rule:

- Priority: 100

- Name: Rule1

- Port: 3389

- Protocol: TCP

- Source: Any

- Destination: Any

- Action: Allow

NSG1 is associated to Subnet1. NSG2 is associated to the network interface of VM2.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“From VM1, you can connect to VM2 by using Remote Desktop.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is **correct** because VM1 is in Subnet1 and VM2 is in Subnet2, both of which are part of the same virtual network, VNET1. Azure automatically routes traffic between subnets within the same virtual network, allowing connectivity between VMs across subnets by default. Additionally, NSG2, which is associated with VM2’s network interface, has a custom rule (Rule1) that permits inbound RDP traffic on port 3389 from any source, which includes VM1.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview

- https://learn.microsoft.com/en-us/azure/virtual-network/tutorial-create-route-table-powershell

- https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview

---

### Question 49

You have a virtual network named VNet1 as shown in the following exhibit.

No devices are connected to VNet1.

You plan to peer VNet1 to another virtual network named VNet2. VNet2 has an address space of 10.2.0.0/16.

You need to create the peering.

What should you do first?

**Options:**

- **A.** Add a gateway subnet to VNet1.
- **B.** Create a subnet on VNet1 and VNet2.
- **C.** Modify the address space of VNet1. ✅
- **D.** Configure a service endpoint on VNet2.

**Correct answer:** C

**Explanation:**

**Modify the address space of VNet1** is **correct** because the address spaces of two virtual networks being peered must not overlap. In this case, both VNet1 and VNet2 have the address space 10.2.0.0/16, which causes an overlap and prevents peering. To enable peering, you would first need to modify the address space of VNet1 to a non-overlapping range.

**Add a gateway subnet to VNet1** is **incorrect** because a gateway subnet is only required for VPN Gateway connections, not for simple VNet peering.

**Create a subnet on VNet1 and VNet2** is **incorrect** because the presence of subnets is not a requirement for VNet peering. The issue here is the overlapping address space, which must be resolved first.

**Configure a service endpoint on VNet2** is **incorrect** because service endpoints are used to secure access to Azure services and are not related to VNet peering configuration.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-peering

---

### Question 50

You have an Azure subscription named Sub1.

You plan to deploy a multi-tiered application that will contain the tiers shown in the following table.

You need to recommend a networking solution to meet the following requirement:

- **Ensure that communication between the web servers and the business logic tier spreads equally across the virtual machines.**

Which Azure resource should you recommend for the above requirement?

**Options:**

- **A.** an application gateway that uses the Standard tier
- **B.** an application gateway that uses the WAF tier
- **C.** an internal load balancer ✅
- **D.** a network security group (NSG)
- **E.** a public load balancer

**Correct answer:** C

**Explanation:**

**An internal load balancer** is **correct** because an internal load balancer in Azure is designed to distribute network traffic within a virtual network (VNet) across virtual machines (VMs) without exposing them to the internet. In this scenario, it can be used to balance the load between the front-end web servers and the business logic tier, ensuring that traffic spreads equally across the VMs in the business logic tier. Since the business logic tier is not accessible from the internet, an internal load balancer is the appropriate solution.

**An application gateway that uses the Standard tier** is **incorrect** because an application gateway is primarily designed for web traffic (HTTP/HTTPS) and is typically used in internet-facing scenarios or for application layer load balancing, which is not specified here.

**An application gateway that uses the WAF tier** is **incorrect** for the same reason as above. Additionally, the WAF tier is designed to protect applications from web vulnerabilities, which is unnecessary for internal load balancing between tiers in this setup.

**A network security group (NSG)** is **incorrect** because NSGs are used for filtering network traffic based on security rules and do not provide load balancing capabilities.

**A public load balancer** is **incorrect** because it is used to distribute traffic from the internet to VMs within a VNet. Since the business logic tier is not accessible from the internet, a public load balancer is not suitable.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-overview

---

### Question 51

You have an Azure subscription named Sub1.

You plan to deploy a multi-tiered application that will contain the tiers shown in the following table.

You need to recommend a networking solution to meet the following requirement:

- **Protect the web servers from SQL injection attacks.**

Which Azure resource should you recommend for the above requirement?

**Options:**

- **A.** an application gateway that uses the Standard tier
- **B.** an application gateway that uses the WAF tier ✅
- **C.** an internal load balancer
- **D.** a network security group (NSG)
- **E.** a public load balancer

**Correct answer:** B

**Explanation:**

**An application gateway that uses the WAF tier** is **correct** because the Web Application Firewall (WAF) tier of Azure Application Gateway provides built-in protection against common web vulnerabilities, including SQL injection attacks. By placing an application gateway with WAF in front of the web servers, you can protect them from SQL injection and other security threats.

**An application gateway that uses the Standard tier** is **incorrect** because the Standard tier does not include WAF functionality, which is required to protect against SQL injection.

**An internal load balancer** is **incorrect** because load balancers are used to distribute network traffic and do not offer protection against SQL injection or other web vulnerabilities.

**A network security group (NSG)** is **incorrect** because NSGs control access through rules but do not provide protection against specific types of attacks like SQL injection.

**A public load balancer** is **incorrect** because, like an internal load balancer, it only distributes traffic and does not protect against web vulnerabilities.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/web-application-firewall/ag/ag-overview

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
