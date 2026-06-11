# Practice Set 2

Source: [https://skillcertpro.com/az-104-exam-questions/2/](https://skillcertpro.com/az-104-exam-questions/2/)
Total questions: 52

---

### Question 1

You need to implement network security groups (NSGs) to filter network traffic to and from Azure virtual machines.
How would you configure NSG rules to allow specific inbound and outbound traffic while blocking unauthorized access?

**Options:**

- **A.** Create NSG rules with specific source and destination IP addresses and ports, allowing only necessary traffic. Deny all other traffic by default. ✅
- **B.** Apply NSGs directly to virtual machines without considering subnet-level configuration.
- **C.** Rely solely on Azure Firewall to control traffic, disregarding the role of NSGs.
- **D.** Create NSG rules with broad source and destination ranges, allowing all traffic.

**Correct answer:** A

**Explanation:**

NSGs are stateful firewalls that filter traffic based on source/destination IP, port, and protocol. The recommended practice is to have a “deny all“ rule at the bottom to block any traffic not explicitly allowed.

---

### Question 2

Your company is hosting a mission-critical web application on an Azure Virtual Machine (VM) within a virtual network (VNet). The application listens on ports 80 (HTTP) and 443 (HTTPS). To enhance security, you need to restrict inbound traffic to these specific ports and only allow access from a designated set of IP addresses belonging to your company‘s office locations. You want to avoid exposing the VM to unnecessary internet traffic while ensuring authorized users can access the application seamlessly.
Question:
Which Azure networking feature would you use to implement this traffic filtering based on port numbers and source IP addresses for your web application VM?

**Options:**

- **A.** Azure Firewall
- **B.** Network Security Groups (NSGs) ✅
- **C.** Azure Application Gateway
- **D.** Azure Load Balancer

**Correct answer:** B

**Explanation:**

The  is Azure Network Security Groups (NSGs). Here‘s why:
NSGs: These act as virtual firewalls for your Azure resources, allowing you to define inbound and outbound security rules based on source and destination IP addresses, ports, and protocols. You can apply NSGs to subnets or individual network interfaces (NICs). In this scenario, you would create an NSG associated with the VM‘s NIC and configure rules to allow traffic only on ports 80 and 443 from the specified source IP addresses.
Why other options are less suitable:
Azure Firewall: While powerful, Azure Firewall is designed for broader network traffic management and threat protection. It might be overkill for this simple port-based filtering scenario.
Azure Load Balancer: Load balancers are primarily used for distributing traffic across multiple VMs and are not designed for fine-grained network security rule enforcement.
Azure Application Gateway: Application Gateways are web traffic load balancers that operate at Layer 7. While they can provide some filtering capabilities, they are more focused on web application-specific features like SSL termination and WAF, and may not be the most straightforward solution for basic port-based filtering.
Key Points:
This scenario emphasizes the importance of network security in Azure and the ability to control traffic flow to specific resources.
It tests your understanding of different Azure networking features and their appropriate use cases for securing virtual machines.

---

### Question 3

Scenario:
Your company is experiencing rapid growth and needs to deploy standardized sets of Azure resources (VMs, networks, storage accounts, etc.) across various environments (development, testing, production). This is a time-consuming process prone to manual errors and inconsistencies between environments.
Your team needs a solution that will:
1. Automate the deployment process to save time and reduce the chance of errors.
2. Standardize the configuration of resources across different environments to ensure consistency and reliability.
3. Streamline the management of infrastructure changes throughout the development lifecycle.
Question:
Which Azure tool would be the MOST efficient for defining and deploying these standardized infrastructure configurations across your different environments?

**Options:**

- **A.** Azure portal manual deployment
- **B.** Azure CLI commands
- **C.** Azure PowerShell scripts
- **D.** Azure Resource Manager (ARM) templates ✅

**Correct answer:** D

**Explanation:**

The  is Azure Resource Manager (ARM) templates. Here‘s why:
Declarative Infrastructure as Code: ARM templates are JSON files that define the desired state of your Azure resources. This declarative approach allows you to define your entire infrastructure in code, making it easy to version control, automate, and deploy consistently.
Modularity and Reusability: ARM templates can be broken down into smaller, reusable components (linked templates), making it easier to manage complex infrastructure.
Parameterization: You can parameterize ARM templates to customize deployments for different environments, providing flexibility while maintaining standardization.
Integration with DevOps Tools: ARM templates integrate seamlessly with Azure DevOps, enabling automated deployment pipelines for continuous integration and delivery (CI/CD).
Why other options are less suitable:
Azure PowerShell scripts: While powerful, PowerShell scripts require scripting knowledge and are less declarative than ARM templates.
Azure CLI commands: Similar to PowerShell, CLI commands require scripting and can be more difficult to manage for complex deployments.
Azure portal manual deployment: This is a time-consuming and error-prone approach, unsuitable for large-scale, standardized deployments.
Key Points:
ARM templates are the preferred method for defining and deploying infrastructure as code in Azure.
This scenario highlights the importance of automation, standardization, and infrastructure as code for efficient and reliable cloud infrastructure management.

---

### Question 4

Scenario:
Your company‘s mission-critical database, hosted on an Azure Virtual Machine (VM), experienced a data corruption incident due to an accidental overwrite. You need to restore the database to a point in time before the corruption occurred to minimize data loss and business impact.
Fortunately, you have been diligently backing up the VM using Azure Backup. However, you are unsure which specific feature of Azure Backup will allow you to recover the database to a particular timestamp before the corruption happened.
Question:
Which Azure Backup feature can you utilize to restore your database to a specific point in time and recover from the data corruption incident?

**Options:**

- **A.** Full VM Backup
- **B.** Geo-redundant backup
- **C.** Incremental Backup
- **D.** Point-in-time restore (PITR) ✅

**Correct answer:** D

**Explanation:**

The  is Point-in-time restore (PITR). Here‘s why:
Point-in-time restore (PITR): This feature allows you to restore your database to any specific point in time within the retention period of your backups. By selecting the appropriate timestamp, you can revert the database to a state before the data corruption occurred.
Why other options are less suitable:
Full VM Backup: While full VM backups are essential, they only allow you to restore the entire VM to the latest backup point, not to a specific point in time.
Incremental Backup: Incremental backups capture only the changes since the last backup, which is useful for optimizing storage, but not for restoring to a specific timestamp.
Geo-redundant backup: This feature replicates your backups to a secondary region for added protection, but it doesn‘t directly address the need to restore to a specific point in time.
Key Points:
Azure Backup‘s point-in-time restore capability is crucial for recovering from data corruption incidents, as it allows for granular restoration of data to a specific moment in the past.
This scenario emphasizes the importance of understanding the different features offered by Azure Backup to ensure that your backup strategy meets your specific recovery needs.

---

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

### Question 6

You are designing a VNet with multiple subnets. Some subnets need to be accessible from the internet, while others should remain private. How can you configure the appropriate access for each subnet?

**Options:**

- **A.** Azure Bastion Host
- **B.** Azure Firewall
- **C.** Azure DDoS Protection
- **D.** Network Security Groups (NSGs) ✅

**Correct answer:** D

**Explanation:**

Network Security Groups (NSGs) are the core Azure tool for managing traffic flow at the subnet level. They allow for granular control of inbound and outbound rules to define which subnets can be accessed from the internet and which should remain private.

---

### Question 7

Scenario:
Your company operates a high-traffic e-commerce website hosted on multiple Azure Virtual Machines (VMs). These VMs house critical customer data, product information, and order history. To protect against data loss due to accidental deletion, hardware failures, or malicious attacks, you need to implement a robust backup solution.
Your backup solution must meet the following requirements:
1. Regular Backups: You need to schedule automatic backups of the VMs at regular intervals to ensure that your data is consistently protected.
2. Data Retention: You need to retain multiple backup copies for a defined period to enable recovery from different points in time.
3. Minimal Downtime: The backup process should not disrupt the website‘s operation or impact its performance.
4. Easy Recovery: In the event of data loss, you need to be able to quickly restore the VMs to a previous state.
Question:
Which Azure service would you choose to implement a backup solution that fulfills these requirements for your e-commerce website‘s VMs?

**Options:**

- **A.** Azure Storage
- **B.** Azure Site Recovery
- **C.** Azure Blob Storage
- **D.** Azure Backup ✅

**Correct answer:** D

**Explanation:**

The best answer is Azure Backup. Here‘s why:
Azure Backup: This service is specifically designed for backing up Azure VMs, files, and folders. It provides automated backup scheduling, long-term data retention options, and point-in-time recovery capabilities. Azure Backup also offers application-consistent backups for various workloads, including SQL Server and SAP HANA.
Why other options are less suitable:
Azure Blob Storage: While you can store backup data in Blob Storage, it doesn‘t provide the automated scheduling, retention policies, or recovery features that Azure Backup offers.
Azure Site Recovery: This service is primarily used for disaster recovery and replicating VMs to another region, not for traditional backup and restore scenarios.
Azure Files: This service is for cloud file shares and doesn‘t offer the VM-level backup and restore capabilities needed in this case.
Key Points:
Azure Backup is the most appropriate service for backing up Azure VMs due to its comprehensive feature set designed for this specific purpose.
This scenario emphasizes the importance of regular backups and data recovery strategies for protecting critical e-commerce applications in Azure.

---

### Question 8

Your development team is working on a new cloud-native application that requires highly scalable and available storage.
Which Azure Storage account type would be the best fit for their needs?

**Options:**

- **A.** Blob storage
- **B.** BlockBlobStorage
- **C.** File storage
- **D.** General-purpose v2 ✅

**Correct answer:** D

**Explanation:**

General-purpose v2 storage accounts are the most versatile and scalable option, making them suitable for a wide range of cloud-native applications that require different types of storage services.

---

### Question 9

You are designing a Bicep file to deploy a web application that requires multiple Azure services (e.g., App Service, SQL Database, Storage Account). Which Bicep modules or constructs can you use to organize your code, manage dependencies, and improve the overall readability and maintainability of the file?

**Options:**

- **A.** Modules ✅
- **B.** Conditions
- **C.** Variables
- **D.** Outputs

**Correct answer:** A

**Explanation:**

Modules in Bicep enable you to organize code into reusable components, improving readability and maintainability while managing dependencies.

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

### Question 11

You are responsible for managing Azure costs for your organization. How can you utilize Azure reservations and Azure Hybrid Benefit to optimize costs for virtual machines and SQL databases?

**Options:**

- **A.** Purchase Azure reservations for all your virtual machines and SQL databases, regardless of their usage patterns.
- **B.** Only purchase Azure reservations for your most expensive virtual machines and SQL databases.
- **C.** Analyze your usage patterns and purchase Azure reservations for virtual machines and SQL databases with predictable, consistent usage. Use Azure Hybrid Benefit for VMs with eligible on-premises licenses. ✅
- **D.** Use Azure Hybrid Benefit for all your virtual machines, even if they are not running on eligible Windows Server or SQL Server licenses.

**Correct answer:** C

**Explanation:**

Azure reservations provide discounts for pre-paying for VM and SQL Database usage, while Azure Hybrid Benefit allows you to bring your own licenses for additional savings. Choosing the right combination is key to optimizing costs.

---

### Question 12

You have a hybrid environment with on-premises and Azure VMs. You want both environments to be able to resolve names for resources in both locations. Which Azure feature would you use to integrate DNS resolution between on-premises and Azure?

**Options:**

- **A.** Azure DNS Forwarder
- **B.** Azure DNS Private Resolver ✅
- **C.** Azure Private Link
- **D.** Azure Bastion Host

**Correct answer:** B

**Explanation:**

Azure DNS Private Resolver is the recommended solution for integrating DNS resolution between on-premises environments and Azure virtual networks. It provides bi-directional name resolution, allowing resources in both locations to seamlessly communicate with each other using domain names.

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

### Question 14

You have an Azure subscription. You have 100 Azure virtual machines. You need to quickly identify underutilized virtual machines that can have their service tier changed to a less expensive offering.

Which blade should you use from Azure Portal?

**Options:**

- **A.** Monitor
- **B.** Advisor ✅
- **C.** Metrics
- **D.** Customer Insights

**Correct answer:** B

**Explanation:**

Advisor helps you optimize and reduce your overall Azure spend by identifying idle and underutilized resources. You can get cost recommendations from the Cost tab on the Advisor dashboard.

Reference:

https://docs.microsoft.com/en-us/azure/advisor/advisor-cost-recommendations

Quick Preview:

---

### Question 15

You have the Azure virtual machines shown in the following table. You have a Recovery Services vault that protects VM1 and VM2. You need to protect VM3 and VM4 by using Recovery Services. What should you do first?

You have a Recovery Services vault that protects VM1 and VM2.

You need to protect VM3 and VM4 by using Recovery Services.

What should you do first?

**Options:**

- **A.** Create a new Recovery Services vault ✅
- **B.** Create a storage account
- **C.** Configure the extensions for VM3 and VM4
- **D.** Create a new backup policy

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Create a new Recovery Services vault**

- Correct because Recovery Services vaults are **region‑specific**.

- If VM3 and VM4 are in a different region than the existing vault, you must first create a new Recovery Services vault in that region before enabling backup.

- Only after the vault exists can you configure backup policies and extensions for those VMs.

### Incorrect

**Option B. Create a storage account**

- Incorrect because Azure Backup does not require a separate storage account.

- The Recovery Services vault itself manages storage for backups.

**Option C. Configure the extensions for VM3 and VM4**

- Incorrect because backup extensions are installed **after** a Recovery Services vault is available in the same region.

- Without the vault, extensions cannot be configured.

**Option D. Create a new backup policy**

- Incorrect because a backup policy defines **schedule and retention**, but it requires a Recovery Services vault first.

- You cannot apply a policy until the vault exists in the correct region.

###

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

### Question 17

You have an Azure subscription named Subscription1. You create an Azure Storage account named contosostorage, and then you create a file share named data.

Which UNC path should you include in a script that references files from the data file share?

\\  ……….  .  ………. \ ……….

Please select the correct order that forms the path, from the below options:

(1) blob

(2) contosostorage

(3) file

(4) portal.azure.com

(5) blob.core.windows.net

(6) data

(7) file.core.windows.net

(8) subscription1

**Options:**

- **A.** 2 – 5 – 6
- **B.** 2 – 7 – 6 ✅
- **C.** 2 – 4 – 6
- **D.** 6 – 5 – 1

**Correct answer:** B

**Explanation:**

### Correct

**Option B. 2 – 7 – 6**

- Correct because the proper UNC path for Azure Files is:

Code

\\&lt;storage-account-name&gt;.file.core.windows.net\&lt;file-share-name&gt;

- In this case:

- **2 = contosostorage** (storage account name)

- **7 = file.core.windows.net** (Azure Files endpoint)

- **6 = data** (file share name)

- So the correct UNC path is:

Code

\\contosostorage.file.core.windows.net\data

### Incorrect

**Option A. 2 – 5 – 6**

- Incorrect because blob.core.windows.net is used for **Blob storage**, not File shares.

- The UNC path must reference the **File service**, not Blob.

**Option C. 2 – 4 – 6**

- Incorrect because portal.azure.com is the Azure management portal, not a storage endpoint.

- It cannot be used in UNC paths for accessing file shares.

**Option D. 6 – 5 – 1**

- Incorrect because this mixes the file share name (data) with the Blob endpoint (blob.core.windows.net) and blob.

- This is not a valid UNC path for Azure Files.

###

---

### Question 18

Your company needs to deploy an application to a set of three virtual machines. You have to ensure that at any point in time two virtual machines are always available in the event of a data centre failure.

**Options:**

- **A.** A. Yes ✅
- **B.** B. No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- Correct because Azure provides **Availability Zones** and **Availability Sets** to ensure high availability.

- By deploying the three VMs across multiple Availability Zones (or within an Availability Set with fault domains and update domains), you can guarantee that at least two VMs remain available even if one zone or domain fails.

- This meets the requirement of maintaining availability during a data centre failure scenario.

### Incorrect

**Option B. No**

- Incorrect because Azure does offer mechanisms to achieve this level of resilience.

- Saying “No” would imply that Azure cannot guarantee two VMs remain available, which is not true when configured correctly with Availability Zones or Availability Sets.

###

---

### Question 19

You have several Azure virtual machines on a virtual network named vNET2. You configure an Azure Storage account as shown in the following exhibit:

Please select the option that is true for the following statement:

The virtual machines on 10.2.9.0/24 subnet will have network connectivity to the file shares in the storage account.

**Options:**

- **A.** always
- **B.** during a backup
- **C.** never ✅

**Correct answer:** C

**Explanation:**

Subnet 10.2.9.0/24 hasn’t been enabled under vNET2, only VMs in 10.2.0.0/24 will have access to file shares in this storage account.

Reference:

https://docs.microsoft.com/en-us/azure/storage/common/storage-network-security

Quick Preview:

---

### Question 20

You have an Azure subscription named Sub1.

You plan to deploy a multi-tiered application that will contain the tiers shown in the following table.

You need to recommend a networking solution to meet the following requirements:

Ensure that communication between the web servers and the business logic tier spreads equally across the virtual machines.

Protect the web servers from SQL injection attacks.

Which Azure resource should you recommend to protect the web servers from SQL injection attacks.?

**Options:**

- **A.** An application gateway that uses the Standard tier
- **B.** An application gateway that uses the WAF tier ✅
- **C.** An internal load balancer
- **D.** A public load balancer

**Correct answer:** B

**Explanation:**

Azure Web Application Firewall (WAF) on Azure Application Gateway provides centralized protection of your web applications from common exploits and vulnerabilities. Web applications are increasingly targeted by malicious attacks that exploit commonly known vulnerabilities.

https://docs.microsoft.com/en-us/azure/web-application-firewall/ag/ag-overview

INCORRECT ANSWERS:

Application gateway with Standard tier – It is a web traffic load balancer, the requirement is to protect from SQL injection attacks, that needs a WAF capability.

An internal load balancer – This is to load balance internal traffic.

Public load balancer – It is a public facing load balancer, the requirement is to protect from SQL injection attacks, that needs a WAF capability.

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

### Question 22

You have the Azure virtual networks shown in the following table. To which virtual networks can you establish a peering connection from VNet1?

To which virtual networks can you establish a peering connection from VNet1?

**Options:**

- **A.** VNet2 andVNet3 only
- **B.** VNet2 only
- **C.** VNet3 and VNet4 only ✅
- **D.** VNet2, VNet3, and VNet4

**Correct answer:** C

**Explanation:**

### Correct

**Option C. VNet3 and VNet4 only**

- This is correct.

- VNet peering requires that the virtual networks **do not have overlapping IP address spaces**.

- In the exam scenario, VNet1’s address space overlaps with VNet2, so peering cannot be established with VNet2.

- VNet3 and VNet4 have non-overlapping address spaces, so peering is possible with them.

### Incorrect

**Option A. VNet2 and VNet3 only**

- Incorrect because VNet2 has an overlapping IP address space with VNet1, making peering impossible.

**Option B. VNet2 only**

- Incorrect for the same reason: overlapping IP address space prevents peering.

**Option D. VNet2, VNet3, and VNet4**

- Incorrect because while VNet3 and VNet4 are valid, VNet2 is not due to overlapping address space.

---

### Question 23

You deploy an Azure Kubernetes Service (AKS) cluster that has the network profile shown in the following exhibit:

Services in the AKS cluster will be assigned an IP address in the ………. subnet.

**Options:**

- **A.** 10.244.0.0/16
- **B.** 10.0.0.0/16 ✅
- **C.** 172.17.0.1/16

**Correct answer:** B

**Explanation:**

### Correct

**Option B. 10.0.0.0/16**

- Correct.

- In AKS, when using the **Azure CNI (Container Networking Interface)**, services are assigned IP addresses from the **virtual network subnet** (in this case, 10.0.0.0/16).

- This allows pods and services to have routable IPs within the VNet, enabling direct communication with other Azure resources.

- Therefore, services will use IPs from the **10.0.0.0/16 subnet**.

### Incorrect

**Option A. 10.244.0.0/16**

- Incorrect.

- This range is used when AKS is deployed with the **kubenet network plugin**, where pods are assigned IPs from an internal overlay network (10.244.0.0/16 by default).

- However, the question specifies services, and with Azure CNI, services use the VNet subnet (10.0.0.0/16), not the overlay.

**Option C. 172.17.0.1/16**

- Incorrect.

- This is a **Docker default bridge network range**, not used by AKS services.

- It is unrelated to AKS networking in Azure.

###

---

### Question 24

You have an Azure subscription that contains the resources in the following table.

To which subnets can you apply NSG1?

**Options:**

- **A.** the subnets on VNet1 only
- **B.** the subnets on VNet2 and VNet3 only
- **C.** the subnets on VNet2 only
- **D.** the subnets on VNet3 only ✅
- **E.** the subnets on VNet1, VNet2, and VNet3

**Correct answer:** D

**Explanation:**

A resource can only be created in a virtual network that exists in the same region and subscription as the resource.

https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-vnet-plan-design-arm

INCORRECT ANSWERS:

the subnets on VNet2 – VNet2 is not in the same region as NSG1

the subnets on VNet1 – VNet1 is not in the same region as NSG1

---

### Question 25

You create an Azure VM named VM1 that runs Windows Server 2019. VM1 is configured as shown in the exhibit:

You need to enable Desired State Configuration for VM1.

What should you do first?

**Options:**

- **A.** Connect to VM1
- **B.** Start VM1 ✅
- **C.** Capture a snapshot of VM1
- **D.** Configure a DNS name for VM1

**Correct answer:** B

**Explanation:**

If we take a closer look at the exhibit, we can see that the virtual machine’s status is Stopped (Deallocated). The DSC extension for Windows requires that the target virtual machine is able to communicate with Azure, so you would first need to start the VM.

Reference:

https://docs.microsoft.com/en-us/azure/virtual-machines/extensions/dsc-windows

Quick Preview:

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

### Question 29

You have an Azure subscription that contains the resources shown in the following table:

The Not allowed resource types Azure policy is assigned to RG1 and uses the following parameters:

– Microsoft.Network/virtualNetworks

– Microsoft.Compute/virtualMachines

In RG1, you need to create a new virtual machine named VM2, and then connect VM2 to VNET1.

What should you do first?

**Options:**

- **A.** Remove Microsoft.Compute/virtualMachines from the policy ✅
- **B.** Create an Azure Resource Manager template
- **C.** Add a subnet to VNET1
- **D.** Remove Microsoft.Network/virtualNetworks from the policy

**Correct answer:** A

**Explanation:**

The Not allowed resource types Azure policy denies the deployment of specified resource types. In this specific scenario, the Azure policy denies the deployment of virtual machines – Microsoft.Compute/virtualMachines and virtual networks Microsoft.Network/virtualNetworks in the Azure subscription.

The question requires that you create a new virtual machine named VM2, and then connect VM2 to VNET1. So you need to be allowed to create a new VM (VM2) in this Azure subscription and then attach it to an existing Azure virtual network – VNET1. As you don’t need to create a new virtual network, as you are requested to attach the new VM to your existing virtual network, the only thing that you need to do is to remove Microsoft.Compute/virtualMachines from the Azure policy.

Reference:

https://docs.microsoft.com/en-us/azure/governance/policy/samples/built-in-policies

Quick Preview:

---

### Question 30

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

You have an Azure subscription that contains the resources shown in the following table:

VM1 connects to VNET1. You need to connect VM1 to VNET2.

Solution: You turn off VM1, and then you add a new network interface to VM1.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### **Correct**

- **Option B. No**

- Correct: Simply turning off VM1 and adding a new NIC does **not** meet the goal.

- A NIC can only be created in the same region as its virtual network. If VNET2 is in a different region than VNET1, you cannot attach a NIC from VNET2 to VM1.

- To connect VM1 to VNET2, you would need to either:

- Use **VNet peering** between VNET1 and VNET2, or

- Recreate VM1 in the region of VNET2 and attach a NIC from that VNET.

- Therefore, the proposed solution does not satisfy the requirement.

### **Incorrect**

- **Option A. Yes**

- Incorrect: Adding a NIC alone does not guarantee connectivity to VNET2. Regional restrictions prevent attaching a NIC from a different VNET unless both are in the same region.

- Even if in the same region, additional configuration (IP addressing, routing, NSGs) would be required.

---

### Question 31

Your company wants to deploy a blogging solution on Azure. Below are the key deployment requirements

– Ability to connect to Azure BLOB storage as the origin

– Ensure that users across the world get the same performance when they access the blogging site

You provide a solution of using the cloud tiering service. Does this solution meet the requirement?

**Options:**

- **A.** A.Yes
- **B.** B.No ✅

**Correct answer:** B

**Explanation:**

The cloud tiering feature is used to ensure volumes have a percentage of free space when you use the Azure File Sync service. The ideal solution to use here is the Content Delivery service

For more information on cloud tiering, one can go to the below URL

https://docs.microsoft.com/en-us/azure/storage/files/storage-sync-cloud-tiering

---

### Question 32

You have an Azure subscription that contains the resources in the following table:

You install the Web Server server role (IIS) on VM1 and VM2, and then add VM1 and VM2 to LB1.

LB1 is configured as shown in the LB1 exhibit:

Rule1 is configured as shown in the Rule1 exhibit below:

Please evaluate the following statements and select Yes if the statement is true, otherwise select No:

If Probe1.htm is present on VM1 and VM2, LB1 will balance TCP port 80 between VM1 and VM2.

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

When using load-balancing rules with Azure Load Balancer, you need to specify health probes to allow Load Balancer to detect the backend endpoint status. The configuration of the health probe and probe responses determine which backend pool instances will receive new flows.

Simply put, in our case, the load balancer will try to open a connection on Probe1.htm, on TCP port 80. Why TCP port 80? Well, if you take a look at the load balancing rule configuration, you can see that the health probe configuration is HTTP 80, which is the same with TCP 80. So, coming back to our discussion, the load balancer checks the status of both VM1 and VM2, by initiating connections on Probe1.htm. If the connection is successful, then the load balancer knows that both VMs are in a good condition and are eligible to receive traffic.

That is actually the role of the health probe. Just think, it doesn’t make any sense for the load balancer to send any traffic to a VM that is not online, that is not in a good condition, because the traffic will be lost.

So now, taking a look again at the statement we need to evaluate,

If Probe1.htm is present on VM1 and VM2, LB1 will balance TCP port 80 between VM1 and VM2.

we can conclude that the statement is True. The load balancer receives traffic from the internet, on TCP port 80 and forwards the traffic on TCP port 80 as well …

To what destination? To virtual machines that are part of the backend pool …

and only to healthy VMs, so VMs that pass the health check process, defined by the health probes:

Reference:

https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-custom-probe-overview

Quick Preview:

---

### Question 33

You have an Azure subscription named Subscription1 that contains the quotas shown in the following table:

You deploy virtual machine to Subscription1 as shown in the following table:

You plan to deploy the virtual machines shown in the following table:

True or False.

You can deploy VM3 to West US.

**Options:**

- **A.** TRUE ✅
- **B.** FALSE

**Correct answer:** A

**Explanation:**

Quota is calculated based on the total number of cores in use, both allocated and deallocated. This means that with VM1 and VM20 deployed, currently 2+16=18 vCPUs are already used, out of 20 vCPUs total – the quota.

As VM3 size is 1 vCPU, VM3 can be deployed to West US, reaching 19 vCPUs out of maxim 20 vCPUs.

Reference:

https://docs.microsoft.com/en-us/azure/virtual-machines/windows/quotas

Quick Preview:

---

### Question 34

You have an Azure subscription that contains the resources in the following table:

You install the Web Server server role (IIS) on VM1 and VM2, and then add VM1 and VM2 to LB1.

LB1 is configured as shown in the LB1 exhibit:

Rule1 is configured as shown in the Rule1 exhibit below:

Please evaluate the following statements and select Yes if the statement is true, otherwise select No:

If you delete Rule1, LB1 will balance all the requests between VM1 and VM2 for all the ports.

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

This statement is actually wrong. The load balancing rule is the “glue” that puts all the pieces together. If you have no load balancing rule configured, there will be no load balancing at all, and no traffic will actually reach VM1 or VM2.

The load balancing rule includes the following:

– the public IP address of the load balancer, this is the IP address that the traffic will first connect to

– protocol and port number of traffic to be received and sent to the backend pool

– backend pool

– health probe

– other configurations …

Again, if no load balancing rules are defined, there will be no load balancing happening at all.

Reference:

https://docs.microsoft.com/en-us/azure/load-balancer/components

Quick Preview:

---

### Question 35

You have an Azure subscription named Subscription1 that contains the quotas shown in the following table:

You deploy virtual machine to Subscription1 as shown in the following table:

You plan to deploy the virtual machines shown in the following table:

True or False.

You can deploy VM5 to West US.

**Options:**

- **A.** TRUE
- **B.** FALSE ✅

**Correct answer:** B

**Explanation:**

Quota is calculated based on the total number of cores in use, both allocated and deallocated. This means that with VM1 and VM20 deployed, currently 2+16=18 vCPUs are already used, out of 20 vCPUs total – the quota.

As VM5 size is 16 vCPU, VM5 can’t be deployed to West US, because it will be over the quota, reaching 18+16=34 vCPUs out of maxim 20 vCPUs.

Reference:

https://docs.microsoft.com/en-us/azure/virtual-machines/windows/quotas

Quick Preview:

---

### Question 36

You have an Azure subscription named Subscription1 that contains an Azure Log Analytics workspace named Workspace1. You need to view the error from a table named Event.

Which query should you run in Workspace1?

**Options:**

- **A.** Get-Event Event | where {$_. EventType == "error"}
- **B.** Event | search "error" ✅
- **C.** search in (Event)* | where EventType eq "error"
- **D.** Get-Event Event | where {$_.EventTye eq "error"}

**Correct answer:** B

**Explanation:**

The same query can be written in two forms Event | search “error” Or search in (Event) “error”

Further Learning:

https://docs.microsoft.com/en-us/azure/azure-monitor/log-query/log-query-overview

Quick Preview:

---

### Question 37

You have an Azure subscription that contains an Azure Availability Set named WEBPROD-AS-USE2 as shown in the following exhibit:

You add 14 virtual machines to WEBPROD-AS-USE2.

If the server rack in the Azure data center that hosts WEBPROD-AS-USE2 experiences a power failure, the maximum number of unavailable virtual machines will be ………. .

**Options:**

- **A.** 2
- **B.** 7 ✅
- **C.** 10
- **D.** 14

**Correct answer:** B

**Explanation:**

### Correct

**Option B. 7**

- Correct because Availability Sets distribute VMs across **fault domains** and **update domains**.

- In Azure, an Availability Set can have up to **3 fault domains** and **20 update domains**.

- With 14 VMs spread across fault domains, the maximum number of VMs affected by a single rack (fault domain) failure is **one-third of the total VMs**.

- Therefore, **7 VMs** (half of 14, since they are balanced across domains) would be unavailable in case of a rack power failure.

### Incorrect

**Option A. 2**

- Incorrect because 2 VMs is far too low.

- Fault domains are designed to spread workloads, but with 14 VMs, more than 2 would be impacted if one domain fails.

**Option C. 10**

- Incorrect because 10 exceeds the maximum distribution logic.

- Azure ensures VMs are balanced across fault domains, so no single failure can affect this many.

**Option D. 14**

- Incorrect because not all VMs would be unavailable.

- Availability Sets guarantee distribution across multiple racks/fault domains, so a single rack failure cannot take down all 14.

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

### Question 39

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

You have an Azure subscription that contains the virtual machines shown in the following table:

You deploy a load balancer that has the following configurations:

– Name: LB1

– Type: Internal

– SKU: Standard

– Virtual network: VNET1

You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.

Solution: You create a Standard SKU public IP address, associate the address to the network interface of VM1, and then stop VM2.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

In scenarios with pre-populated backend pools, just like this scenario, we can use IP and virtual network for your backend pool. All backend pool management is done directly on the backend pool object.

Also, there are some limitations that you need to be aware of. The one that applies to this scenario is that you can only use  Standard public SKU IP address for your VMs that you want to attach to your Backend Pool.

As VM2 has a Basic SKU public IP address, the deployment will fail. If you try to deploy this scenario in Azure portal, you will even get a message displayed from Azure, highlighted in red in the exhibit below:

You can only attach virtual machines that have a standard SKU public IP configuration … or no public IP configuration.

Reference:

https://docs.microsoft.com/en-us/azure/load-balancer/backend-pool-management

Quick Preview:

---

### Question 40

You plan to deploy an Azure container instance by using the following Azure Resource Manager template:

If Internet Information Services (IIS) in the container fails  ……….

**Options:**

- **A.** the container will restart automatically. ✅
- **B.** the container will only restart manually.
- **C.** the container must be redeployed.

**Correct answer:** A

**Explanation:**

The container restart policy configured in the ARM template is OnFailure, which ensures that containers are restarted automatically if the application fails – IIS.

Reference:

https://docs.microsoft.com/en-us/azure/container-instances/container-instances-restart-policy

Quick Preview:

---

### Question 41

You have an Azure subscription that contains a virtual machine named VM1. VM1 hosts a line-of-business application that is available 24 hours a day. VM1 has one network interface and one managed disk. VM1 uses the D4s v3 size.

You plan to make the following changes to VM1:

– Change the size to D8s v3.

– Add a 500-GB managed disk.

– Add the Puppet Agent extension.

– Enable Desired State Configuration Management.

Which change will cause downtime for VM1?

**Options:**

- **A.** Enable Desired State Configuration Management.
- **B.** Add the Puppet Agent extension.
- **C.** Add a 500-GB managed disk.
- **D.** Change the size to D8s v3. ✅

**Correct answer:** D

**Explanation:**

As per official documentation, resizing the VM will lead to VM restart.

Reference:

https://docs.microsoft.com/en-us/azure/virtual-machines/windows/resize-vm

Quick Preview:

---

### Question 42

You have an Azure subscription that includes the following Azure file shares:

You have the following on-premises servers:

You create a Storage Sync Service named Sync1 and an Azure File Sync group named Group1. Group1 uses share1 as a cloud endpoint.

You register Server1 and Server2 in Sync1. You add D:\Folder1 on Server1 as a server endpoint of Group1.

Please evaluate if the following statement is True or False.

Share2 can be added as a cloud endpoint for Group1.

**Options:**

- **A.** TRUE
- **B.** FALSE ✅

**Correct answer:** B

**Explanation:**

Group1 already has a cloud endpoint named Share1.

A sync group must contain one cloud endpoint, which represents an Azure file share and one or more server endpoints.

Reference:

https://docs.microsoft.com/en-us/azure/storage/files/storage-sync-files-deployment-guide?tabs=azure-portal%2Cproactive-portal

Quick Preview:

N

---

### Question 43

You have an Azure subscription. The subscription contains virtual machines that run Windows Server 2016 and are configured as shown in the following table:

You create a public Azure DNS zone named adatum.com and a private Azure DNS zone named az104exam.com.

You create a virtual network link for az104exam.com as shown in the following exhibit:

True or False.

When VM1 starts, a record for VM1 is added to the az104exam.com DNS zone.

**Options:**

- **A.** TRUE ✅
- **B.** FALSE

**Correct answer:** A

**Explanation:**

A virtual network link was created for az104exam.com and auto registration is enabled, so a record is added for VM1, once it starts.

Reference:

https://docs.microsoft.com/en-us/azure/dns/private-dns-virtual-network-links

Quick Preview:

---

### Question 44

You create a virtual machine scale set named Scale1. Scale1 is configured as shown in the following exhibit:

If Scale1 is first utilized at 25% for 6 minutes after it is deployed, and then utilized at 50% for 6 minutes, Scale1 will be running ………. .

**Options:**

- **A.** 2 virtual machines ✅
- **B.** 4 virtual machines
- **C.** 6 virtual machines
- **D.** 8 virtual machines
- **E.** 10 virtual machines

**Correct answer:** A

**Explanation:**

The Autoscale scale in rule decreases the number of VMs by 4 if the CPU threshold is 30% or lower. The initial instance count is 4 and thus cannot be reduced to 0 as the minimum instances is set to 2. So the number of instances running is 2 after running for 6 minutes as 25%. Instances are only added when the CPU threshold reaches 80%, so 2 instances remain.

Further Learning:

https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-autoscale-overview

Quick Preview:

---

### Question 45

You have an Azure subscription that contains the resource groups shown in the following table:

RG1 contains the resources shown in the following table:

VM1 is running and connects to NIC1 and Disk1. NIC1 connects to VNET1. RG2 contains a public IP address named IP2 that is in the East US location. IP2 is not assigned to a virtual machine.

True or False

If you move IP2 to RG1, the location of IP2 will change.

**Options:**

- **A.** TRUE
- **B.** FALSE ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. FALSE**

- **Why correct:** In Azure, moving a resource between resource groups **does not change its location**. The location of a resource is tied to where it was originally provisioned (in this case, East US). Resource groups are logical containers and can span multiple regions, so moving IP2 from RG2 to RG1 will not alter its location.

### Incorrect

**Option A. TRUE**

- **Why incorrect:** This would imply that moving a resource between resource groups changes its region. That is not the case in Azure. The resource’s location remains fixed unless you explicitly recreate or migrate it to another region.

---

### Question 46

You have an Azure Resource Manager template named Template1 that is used to deploy an Azure virtual machine.

Template1 contains the following text:

The variables section in Template1 contains the following text: “location”: “westeurope”. The resources section in Template1 contains the following text:

You need to deploy the virtual machine to the West US location by using Template1.

What should you do?

**Options:**

- **A.** Modify the location in the resource section to westus ✅
- **B.** Select West US during the deployment
- **C.** Modify the location in the variables section to westus

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Modify the location in the resource section to westus**

- In an ARM template, the **location property must be set in the resource section** (e.g., for the VM or other resources).

- Changing the location in the **resource section** ensures the resource is deployed in the specified region (westus).

- This is the correct answer because the resource section is where Azure determines the deployment location.

### Incorrect

**Option B. Select West US during the deployment**

- While you can override parameters during deployment, if the template hardcodes location in the resource section or variables, simply selecting West US during deployment will not work unless the template is parameterized correctly.

- Incorrect because the question specifies modifying Template1, not deployment-time selection.

**Option C. Modify the location in the variables section to westus**

- Variables are used for substitution but do not directly control deployment unless referenced in the resource section.

- Changing the variable alone will not affect deployment unless the resource section uses that variable for location.

- Incorrect because the location must be explicitly set in the **resource section**.

---

### Question 47

**You have peering configured as shown in the exhibit. To change the status of the peering connection of VNET1 to ****Connected****, what must you do first?**

To change the status of the peering connection of VNET1 to connected, what must you do first?

**Options:**

- **A.** Add a service endpoint
- **B.** Add a subnet
- **C.** Delete peering1 ✅
- **D.** Modify the address space.

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Delete peering1**

- Correct because when a peering connection is misconfigured (for example, overlapping address spaces or incorrect settings), the status remains Disconnected.

- To fix this, you must **delete the existing peering configuration (peering1)** and then recreate it with the correct settings.

- Only after deleting and re‑establishing the peering will the status change to Connected.

### Incorrect

**Option A. Add a service endpoint**

- Incorrect because service endpoints extend VNet connectivity to Azure services (like Storage or SQL Database).

- They do not affect VNet peering status.

**Option B. Add a subnet**

- Incorrect because adding a subnet inside a VNet does not resolve peering issues.

- Peering depends on address space configuration and peering settings, not subnet creation.

**Option D. Modify the address space**

- Incorrect because while overlapping address spaces can prevent peering from connecting, simply modifying the address space does not automatically fix the peering.

- You must delete and recreate the peering after adjusting the address space.

###

---

### Question 48

You have an Azure subscription named Subscription1. Subscription1 contains resource groups RG1 and RG2. RG1 has a web app named WebApp1 located in West Europe. You move WebApp1 to RG2. What is the effect of the move?

RG1 has a web app named WebApp1. WebApp1 is located in West Europe.

You move WebApp1 to RG2.

What is the effect of the move?

**Options:**

- **A.** The App Service plan for WebApp1 remains in West Europe. Policy2 applies to WebApp1. ✅
- **B.** The App Service plan for WebApp1 moves to North Europe. Policy2 applies to WebApp1.
- **C.** The App Service plan for WebApp1 remains in West Europe. Policy1 applies to WebApp1.
- **D.** The App Service plan for WebApp1 moves to North Europe. Policy1 applies to WebApp1.

**Correct answer:** A

**Explanation:**

### Correct

**Option A. The App Service plan for WebApp1 remains in West Europe. Policy2 applies to WebApp1.**

- Correct because when you move a resource between resource groups in the same subscription, the **region does not change**.

- The App Service plan remains in **West Europe**, where it was originally created.

- After the move, the resource inherits the policies of the **new resource group (RG2)**, so **Policy2** applies.

### Incorrect

**Option B. The App Service plan for WebApp1 moves to North Europe. Policy2 applies to WebApp1.**

- Incorrect because moving a resource between resource groups does not change its region.

- The App Service plan cannot be moved across regions; it stays in **West Europe**.

**Option C. The App Service plan for WebApp1 remains in West Europe. Policy1 applies to WebApp1.**

- Incorrect because after moving WebApp1 to RG2, **Policy2** applies, not Policy1.

- Policies are enforced at the resource group level, so the new group’s policy takes effect.

**Option D. The App Service plan for WebApp1 moves to North Europe. Policy1 applies to WebApp1.**

- Incorrect because this assumes both a region change and incorrect policy application.

- Neither is true: the region stays the same, and the policy changes to RG2’s policy.

###

---

### Question 49

You have an on-premises network that you plan to connect to Azure by using a site-to-site VPN.

In Azure, you have an Azure virtual network named VNet1 that uses an address space of 10.0.0.0/16 VNet1 contains a subnet named Subnet1 that uses an address space of 10.0.0.0/24. You need to create a site-to-site VPN to Azure.

Which four actions should you perform in sequence?

(1) Create a local gateway

(2) Create a VPN gateway

(3) Create a gateway subnet

(4) Create a custom DNS server

(5) Create a VPN connection

(6) Create an Azure Content Delivery Network (CDN) profile

**Options:**

- **A.** 3 - 2 - 1 - 5 ✅
- **B.** 3 - 1 - 2 - 5
- **C.** 2 - 3 - 1 - 5
- **D.** 3 - 2 - 5 - 1

**Correct answer:** A

**Explanation:**

### Correct

**Option A. 3 – 2 – 1 – 5**

- **Step 3: Create a gateway subnet** → Required before deploying a VPN gateway. The gateway subnet is a special subnet dedicated to the VPN gateway.

- **Step 2: Create a VPN gateway** → The VPN gateway is deployed into the gateway subnet and provides the secure tunnel endpoint in Azure.

- **Step 1: Create a local gateway** → Represents the on-premises VPN device and its public IP address in Azure.

- **Step 5: Create a VPN connection** → Establishes the actual site-to-site tunnel between the Azure VPN gateway and the on-premises local gateway.

- This is the correct sequence to set up a site-to-site VPN.

### Incorrect

**Option B. 3 – 1 – 2 – 5**

- This sequence creates the local gateway before the VPN gateway.

- While technically possible, the correct order is to create the gateway subnet and VPN gateway first, then define the local gateway.

- Incorrect option.

**Option C. 2 – 3 – 1 – 5**

- This attempts to create the VPN gateway before the gateway subnet.

- A VPN gateway **cannot be created without a gateway subnet**, so this order is invalid.

- Incorrect option.

**Option D. 3 – 2 – 5 – 1**

- This sequence tries to create the VPN connection before defining the local gateway.

- A VPN connection requires both the Azure VPN gateway and the local gateway to exist first.

- Incorrect option.

---

### Question 50

You have an Azure subscription that contains the resources shown in the following table.

In RG2, you need to create a new virtual machine named VM2 that will connect to VNET1, VM2 will use a network interface named VM2_interface.

In which region should you create VM2 and VM2_interface?

**Options:**

- **A.** VM2: West US
- **B.** VM2: East US ✅
- **C.** VM2_interface: West US
- **D.** VM2_interface: East US ✅

**Correct answer:** B, D

**Explanation:**

Each NIC attached to a VM must exist in the same location and subscription as the VM. Each NIC must be connected to a VNet that exists in the same Azure location and subscription as the NIC.

https://docs.microsoft.com/en-us/azure/virtual-machines/network-overview?toc=/azure/virtual-machines/linux/toc.json&amp;bc=/azure/virtual-machines/linux/breadcrumb/toc.json#network-interfaces

INCORRECT ANSWERS:

VM2: West US  The region does not match with VNET1 region

VM2_interface: West US  The region does not match with VNET1 region

---

### Question 51

You plan to create an Azure virtual machine named VM1 that will be configured as shown in the following exhibit.

The planned disk configurations for VM1 are shown in the following exhibit.

You need to ensure that VM1 can be created in an Availability Zone.

Which two settings should you modify?

**Options:**

- **A.** Use managed disks ✅
- **B.** OS disk type
- **C.** Availability options ✅
- **D.** Size
- **E.** Image

**Correct answer:** A, C

**Explanation:**

### Correct

**Option A. Use managed disks**

- Correct because **Availability Zones require managed disks**.

- Unmanaged disks cannot be used with zonal deployments. Switching to managed disks ensures compatibility with Availability Zone placement.

**Option C. Availability options**

- Correct because you must explicitly configure the VM’s **availability option** to use an **Availability Zone**.

- By default, VMs may be deployed without zone awareness. Selecting the correct availability option ensures the VM is placed in a zone for high availability.

### Incorrect

**Option B. OS disk type**

- Incorrect because the disk type (Standard HDD, Standard SSD, Premium SSD) affects performance and cost but does not determine zone placement.

- While Premium SSDs are often recommended for zonal deployments, simply changing disk type does not enable zone support.

**Option D. Size**

- Incorrect because VM size determines compute resources (CPU, memory, etc.), not availability zone compatibility.

- As long as the chosen size is supported in the region, it does not affect zone placement.

**Option E. Image**

- Incorrect because the VM image (Windows, Linux, custom image) does not control zone placement.

- Any supported image can be deployed in an Availability Zone if managed disks and availability options are correctly configured.

###

---

### Question 52

You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.

You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request.

What should you configure?

**Options:**

- **A.** Floating IP (direct server return) to Enabled
- **B.** Floating IP (direct server return) to Disabled
- **C.** a health probe
- **D.** Session persistence to Client IP and Protocol ✅

**Correct answer:** D

**Explanation:**

With Sticky Sessions (or source IP affinity) when a client starts a session on one of your web servers, session stays on that specific server. To configure An Azure Load-Balancer For Sticky Sessions set Session persistence to Client IP.

Reference:

https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-distribution-mode

Quick Preview:

---
