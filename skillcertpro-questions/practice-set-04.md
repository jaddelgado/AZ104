# Practice Set 4

Source: [https://skillcertpro.com/az-104-exam-questions/4/](https://skillcertpro.com/az-104-exam-questions/4/)
Total questions: 58

---

### Question 1

You need to configure lifecycle management policies for Azure Blob Storage to automatically transition objects to different storage tiers based on their age or usage patterns.
How would you implement these policies to optimize storage costs and data management?

**Options:**

- **A.** Set policies using Azure CLI
- **B.** Configure rules in Azure Portal
- **C.** Implement policy using ARM templates
- **D.** Use Azure Storage lifecycle management ✅

**Correct answer:** D

**Explanation:**

Azure Storage lifecycle management policies allow you to define rules that automatically transition objects to different storage tiers based on their age or usage patterns, optimizing storage costs and data management.

---

### Question 2

Global Web Enterprises (GWE) has expanded its web applications to multiple Azure regions but faces inconsistent performance and latency. You’ve been tasked with configuring **Azure Front Door** to optimize global performance.

**Question:** To optimize GWE’s web application performance globally, how can you configure Azure Front Door to route traffic effectively? (Select all that apply)

**Options:**

- **A.** Enable Azure CDN integration to cache static content and accelerate delivery. ✅
- **B.** Create multiple Front Door origins and assign each origin to a specific Azure region. ✅
- **C.** Utilize Front Door‘s built-in health probes to monitor backend health and automatically failover to healthy origins. ✅
- **D.** Configure Front Door to prioritize specific regions for specific types of content (e.g., videos from a region with lower bandwidth costs). ✅
- **E.** Configure Traffic Manager profiles within each origin to manage traffic distribution.
- **F.** Implement routing rules based on geographic location to direct users to the closest region. ✅

**Correct answer:** A, B, C, D, F

**Explanation:**

### Correct

**Option A. Enable Azure CDN integration to cache static content and accelerate delivery.**

- Correct because integrating Azure CDN with Front Door caches static assets closer to users worldwide.

- This reduces latency and improves performance for globally distributed users.

**Option B. Create multiple Front Door origins and assign each origin to a specific Azure region.**

- Correct because defining multiple origins allows Front Door to route traffic to the nearest backend region.

- This ensures users connect to the closest available endpoint, reducing round-trip latency.

**Option C. Utilize Front Door’s built-in health probes to monitor backend health and automatically failover to healthy origins.**

- Correct because health probes ensure high availability.

- If one region becomes unhealthy, traffic is automatically rerouted to a healthy origin, maintaining reliability.

**Option D. Configure Front Door to prioritize specific regions for specific types of content (e.g., videos from a region with lower bandwidth costs).**

- Correct because Front Door supports routing rules that can prioritize traffic based on content type or cost optimization.

- This allows fine-grained control over how traffic is distributed globally.

**Option F. Implement routing rules based on geographic location to direct users to the closest region.**

- Correct because geo-based routing ensures users are served from the nearest region, minimizing latency.

- This is one of the primary features of Azure Front Door for global optimization.

### Incorrect

**Option E. Configure Traffic Manager profiles within each origin to manage traffic distribution.**

- Incorrect because Azure Front Door already provides global load balancing and routing.

- Traffic Manager is a separate DNS-based load balancing service, and combining it with Front Door in this scenario is redundant and unnecessary.

---

### Question 3

Your organization wants to utilize Azure Front Door for global load balancing and web application acceleration. What are the key benefits and features of Azure Front Door, and how does it enhance the security of your web applications?

**Options:**

- **A.** Custom domain support ✅
- **B.** DDoS protection ✅
- **C.** Global load balancing with anycast routing ✅
- **D.** Web Application Firewall (WAF) ✅
- **E.** SSL offloading ✅

**Correct answer:** A, B, C, D, E

**Explanation:**

### Correct

**Option A. Custom domain support**

- Correct because Azure Front Door allows you to configure **custom domains** for your applications.

- This ensures branding consistency and secure delivery with HTTPS certificates managed through Azure.

**Option B. DDoS protection**

- Correct because Azure Front Door is built on Azure’s global edge network, which provides **built-in DDoS protection**.

- This helps safeguard applications against volumetric attacks and ensures availability.

**Option C. Global load balancing with anycast routing**

- Correct because Azure Front Door uses **anycast routing** to direct client requests to the nearest available Front Door POP (Point of Presence).

- This reduces latency and improves responsiveness by routing traffic to the lowest-latency endpoint.

**Option D. Web Application Firewall (WAF)**

- Correct because Azure Front Door integrates with **Azure WAF**, which protects applications from common web vulnerabilities such as SQL injection, cross-site scripting (XSS), and OWASP Top 10 threats.

- This enhances application security at the edge.

**Option E. SSL offloading**

- Correct because Azure Front Door supports **SSL/TLS termination at the edge**, reducing the load on backend servers.

- This improves performance while maintaining secure communication with clients.

---

### Question 4

You need to allocate additional storage to an existing Azure VM. Which Azure Storage service should you use to attach extra disks to the VM and expand its storage capacity?

**Options:**

- **A.** Azure File Storage
- **B.** Azure Blob Storage
- **C.** Azure Managed Disks ✅
- **D.** Azure Disks

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Azure Managed Disks**

**Why correct:** Azure Managed Disks are the recommended storage option for attaching extra disks to Azure VMs. They provide simplified management, high availability, and durability. You can easily add managed disks to a VM to expand its storage capacity without worrying about the underlying storage account.

### Incorrect

**Option A. Azure File Storage** **Why incorrect:** Azure File Storage is designed for file shares accessible via SMB protocol. It is not used to attach disks directly to VMs.

**Option B. Azure Blob Storage** **Why incorrect:** Blob Storage is object storage for unstructured data (e.g., images, backups, logs). It cannot be directly attached as a disk to a VM.

**Option D. Azure Disks** **Why incorrect:** While Azure Disks exist conceptually, the actual recommended and supported way to attach disks to VMs is through **Azure Managed Disks**, which abstracts and manages Azure Disks for you. Choosing “Azure Disks” alone is incomplete and not the best practice answer for the exam.

###

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

### Question 6

Your organization is implementing a disaster recovery strategy for its critical Azure resources.
How can you utilize Azure Backup and Azure Site Recovery together to create a comprehensive disaster recovery solution that protects both data and infrastructure?

**Options:**

- **A.** Use Azure Backup for backing up data and Azure Site Recovery for replicating and failing over VMs. ✅
- **B.** Use a combination of Azure Blob Storage and Azure Files for data backup and manual VM recreation for infrastructure recovery.
- **C.** Use Azure Backup for all disaster recovery needs, both data and infrastructure.
- **D.** Use Azure Site Recovery for all disaster recovery needs, both data and infrastructure.

**Correct answer:** A

**Explanation:**

Azure Backup and Azure Site Recovery complement each other. Backup protects data from corruption or accidental deletion, while Site Recovery ensures infrastructure availability by replicating and failing over VMs.

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

### Question 8

You are implementing Azure Monitor to monitor the health and performance of your Azure resources. How can you utilize Azure Monitor alerts to proactively detect and respond to critical issues or anomalies in your environment?

**Options:**

- **A.** Use Azure Monitor alerts to create dashboards for visualizing resource metrics.
- **B.** Use Azure Monitor alerts to automatically scale resources based on utilization.
- **C.** Define alert rules based on specific metric conditions, configure actions like email notifications or webhook calls, and set severity levels for prioritization. ✅
- **D.** Use Azure Monitor alerts to collect and analyze logs from Azure resources.

**Correct answer:** C

**Explanation:**

Azure Monitor alerts allow you to define conditions based on metrics or logs, trigger actions (e.g., notifications, automation) when conditions are met, and prioritize alerts for effective incident response.

---

### Question 9

Scenario:

Your company is adopting Bicep as its preferred language for defining Azure infrastructure as code (IaC). You have been tasked with creating a Bicep template to deploy a new Azure web app with the following requirements:

The web app should be deployed to a new resource group.

The web app should be hosted in an App Service Plan with the Basic SKU.

The web app should use the latest version of the .NET runtime.

The web app should have a custom domain name.

You want to parameterize the web app name, resource group name, and custom domain name.

Question:

Which of the following Bicep code snippets would correctly define the web app resource and its associated properties to meet the requirements?

**Options:**

- **A.** param webAppName string = ‘mywebapp‘param resourceGroupName string = ‘myresourcegroup‘param customDomainName string = ‘contoso.com‘resource webApp ‘Microsoft.Web/sites@2022-03-01‘ = {    name: webAppName    location: ‘eastus‘     properties: {        serverFarmId: appServicePlan.id        siteConfig: {            netFrameworkVersion: ‘v6.0‘        }    }}
- **B.** param webAppName string = ‘mywebapp‘param resourceGroupName string = ‘myresourcegroup‘param customDomainName string = ‘contoso.com‘resource webApp ‘Microsoft.Web/sites@2022-03-01‘ = {    name: webAppName    location: resourceGroup().location    properties: {        serverFarmId: appServicePlan.id        siteConfig: {            netFrameworkVersion: ‘v4.0‘        }        hostNameSslStates: [            {                name: customDomainName                sslState: ‘SniEnabled‘            }        ]    }}
- **C.** param webAppName string = ‘mywebapp‘param resourceGroupName string = ‘myresourcegroup‘param customDomainName string = ‘contoso.com‘resource webApp ‘Microsoft.Web/sites@2022-03-01‘ = {    name: webAppName    location: resourceGroup().location    properties: {        serverFarmId: appServicePlan.id        siteConfig: {            linuxFxVersion: ‘DOTNETCORE|6.0‘        }        hostNameBindings: [            {                name: customDomainName            }        ]    }} ✅

**Correct answer:** C

**Explanation:**

**Correct** **Option C. Snippet using **linuxFxVersion: 'DOTNETCORE|6.0'** and **hostNameBindings Correct because this snippet properly configures the web app to use the **latest .NET runtime (6.0)** via linuxFxVersion, which is the correct property for modern .NET Core applications hosted on Linux in Azure App Service. It also uses hostNameBindings to associate the custom domain name, which is the right approach for binding domains to web apps. This meets all requirements with minimal administrative effort.

**Incorrect** **Option A. Snippet using **netFrameworkVersion: 'v6.0'** with **siteConfig Incorrect because netFrameworkVersion is used for legacy .NET Framework apps, not .NET Core/.NET 6.0. The property linuxFxVersion is required for modern .NET runtimes.

**Option B. Snippet using **netFrameworkVersion: 'v4.0'** and **hostNameSslStates Incorrect because it specifies an outdated runtime (v4.0), which does not meet the requirement of using the latest .NET runtime. While hostNameSslStates can configure SSL, it is not the correct property for binding a custom domain in this context.

---

### Question 10

Your company is migrating on-premises resources to Azure. How can you use Azure Site Recovery to protect and replicate virtual machines, ensuring business continuity and disaster recovery?

**Options:**

- **A.** Set up Azure Site Recovery to replicate on-premises VMs to Azure, creating recovery plans for failover in case of disaster. ✅
- **B.** Use Azure Site Recovery to configure load balancing for on-premises VMs.
- **C.** Use Azure Site Recovery to back up on-premises VMs to Azure Blob Storage.
- **D.** Use Azure Site Recovery to migrate on-premises VMs to Azure without any data replication.

**Correct answer:** A

**Explanation:**

Azure Site Recovery is a disaster recovery service that replicates VMs from on-premises or Azure to another Azure region, allowing for failover in case of primary site issues.

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

### Question 12

Your organization is using Azure DNS for name resolution. Which DNS record types can you manage in Azure DNS to control how domain names are resolved to IP addresses and other resources?

**Options:**

- **A.** TXT record ✅
- **B.** SRV record ✅
- **C.** MX record ✅
- **D.** CNAME record ✅
- **E.** A record ✅
- **F.** AAAA record ✅

**Correct answer:** A, B, C, D, E, F

**Explanation:**

Azure DNS supports a wide range of DNS record types, including A, AAAA, CNAME, MX, TXT, and SRV, to provide comprehensive name resolution and control over how domain names are resolved to various resources.

---

### Question 13

Your organization wants to monitor the health and performance of its network infrastructure in Azure. Which Azure service provides tools for monitoring network connectivity, traffic flows, and performance across virtual networks and subnets?

**Options:**

- **A.** Azure Traffic Manager
- **B.** Azure Application Gateway
- **C.** Azure Network Watcher ✅
- **D.** Azure Front Door

**Correct answer:** C

**Explanation:**

Azure Network Watcher provides the comprehensive tools you need to monitor and troubleshoot your Azure network infrastructure.

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

### Question 15

You are using Azure Site Recovery to replicate Azure VMs. Which network configurations and considerations are important to ensure successful replication and failover of VMs between Azure regions?

**Options:**

- **A.** NSG (Network Security Group) rules ✅
- **B.** Subnet configurations ✅
- **C.** Network connectivity between source and target regions ✅
- **D.** Reserved IP addresses ✅
- **E.** Virtual networks in both regions ✅

**Correct answer:** A, B, C, D, E

**Explanation:**

### Correct

**Option A. NSG (Network Security Group) rules** Correct because NSGs control inbound and outbound traffic to VMs. Proper NSG rules must be configured to allow replication traffic and ensure failover VMs can communicate after recovery.

**Option B. Subnet configurations** Correct because subnets must be properly defined in both source and target regions to ensure replicated VMs can be placed in the correct network segments during failover.

**Option C. Network connectivity between source and target regions** Correct because replication requires reliable connectivity between the source and target regions. Without proper connectivity, replication traffic cannot flow, and failover will fail.

**Option D. Reserved IP addresses** Correct because Azure Site Recovery requires consistent IP addressing for failover scenarios. Reserved IPs ensure that critical workloads retain the same IP addresses after failover, minimizing disruption.

**Option E. Virtual networks in both regions** Correct because failover VMs must be connected to a virtual network in the target region. Properly configured VNets in both regions are essential for replication and recovery.

###

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

### Question 17

You need to restore an Azure VM from a backup. The VM was accidentally deleted, and you want to restore it to its previous state. Which Azure Backup feature can you use to perform this recovery operation?

**Options:**

- **A.** Restore VM from backup ✅
- **B.** Azure Resource Manager (ARM) templates
- **C.** Azure Site Recovery
- **D.** Azure Backup Vault

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Restore VM from backup**

- This is the correct feature. Azure Backup provides the ability to **restore an entire VM** from a recovery point if the VM was deleted or corrupted.

- The restore process recreates the VM with the same configuration and data as at the time of backup.

- This directly meets the requirement of restoring the VM to its previous state.

### Incorrect

**Option B. Azure Resource Manager (ARM) templates**

- ARM templates are used for **deploying infrastructure as code**, not for restoring deleted VMs from backup.

- They can recreate resources but won’t restore the VM’s data and state from a backup.

**Option C. Azure Site Recovery**

- Site Recovery is designed for **disaster recovery and replication** to another region, not for restoring a deleted VM from backup.

- It ensures business continuity but does not provide point‑in‑time recovery from backups.

**Option D. Azure Backup Vault**

- The Backup Vault is where backups are stored, but it is not the feature used to perform the restore.

- The actual restore operation is done using the **Restore VM from backup** functionality.

###

---

### Question 18

Your organization is adopting a zero-trust security model and wants to implement micro-segmentation for its Azure virtual networks. Which Azure networking features or services can you utilize to achieve micro-segmentation and isolate workloads within the virtual network?

**Options:**

- **A.** A. Network Security Groups (NSGs) ✅
- **B.** B. Application Security Groups (ASGs) ✅
- **C.** C. Azure Firewall ✅
- **D.** D. Network virtual appliances (NVAs) ✅
- **E.** E. Azure Virtual Network Manager

**Correct answer:** A, B, C, D

**Explanation:**

### Correct

**Option A. Network Security Groups (NSGs)**

- Correct because NSGs allow fine‑grained control of inbound and outbound traffic at the subnet or NIC level.

- They are a fundamental tool for micro‑segmentation, enabling workload isolation by restricting communication paths.

**Option B. Application Security Groups (ASGs)**

- Correct because ASGs simplify micro‑segmentation by grouping VMs with similar functions and applying NSG rules to the group.

- This avoids the need to manage individual IP addresses and makes segmentation more scalable.

**Option C. Azure Firewall**

- Correct because Azure Firewall provides centralized, stateful traffic filtering across VNets.

- It supports application and network rules, enabling segmentation and isolation between workloads in a zero‑trust model.

**Option D. Network Virtual Appliances (NVAs)**

- Correct because NVAs (third‑party firewalls or routers deployed in Azure) can enforce custom segmentation policies.

- They are often used for advanced scenarios where NSGs or Azure Firewall alone are insufficient.

### Incorrect

**Option E. Azure Virtual Network Manager**

- Incorrect because Azure Virtual Network Manager is primarily used for **centralized policy management and connectivity orchestration across multiple VNets**.

- While useful for managing security policies at scale, it is not directly used for workload‑level micro‑segmentation within a single VNet.

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

### Question 20

You are implementing cost management strategies for your Azure environment. How can you use Azure Cost Management and Billing to track resource usage, forecast costs, and optimize spending?

**Options:**

- **A.** Use Azure Cost Management to analyze cost trends, identify spending anomalies, set budget alerts, and optimize resource utilization. ✅
- **B.** Use Azure Cost Management to create and manage resource groups for different departments.
- **C.** Use Azure Cost Management to deploy Azure resources across multiple regions.
- **D.** Use Azure Cost Management to manually allocate costs to specific departments.

**Correct answer:** A

**Explanation:**

Azure Cost Management provides comprehensive cost tracking, analysis, and optimization capabilities, helping you understand your Azure spending patterns and identify areas for cost savings.

---

### Question 21

Your organization is adopting a multi-cloud strategy and wants to manage Azure resources alongside resources in other cloud providers. How can you utilize Azure Arc to extend Azure management and governance capabilities to resources running in other cloud environments?

**Options:**

- **A.** C. Implement Azure Arc enabled servers to onboard non-Azure servers (e.g., on-premises or in AWS) and apply Azure management policies and monitoring. ✅
- **B.** D. Azure Arc is only applicable to managing Kubernetes clusters in other cloud providers.
- **C.** B. Leverage Azure Arc to directly control the underlying infrastructure of other cloud providers.
- **D.** A. Use Azure Arc to migrate all resources from other cloud providers to Azure.

**Correct answer:** A

**Explanation:**

Azure Arc bridges the gap between Azure and other cloud platforms (or on-premises), allowing you to extend Azure management capabilities (like policies, monitoring) to resources located elsewhere.

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

### Question 23

Your team is developing a web application that requires access to Azure Storage resources. Which authorization mechanism would you use to grant the application the necessary permissions without compromising security?

**Options:**

- **A.** Shared Access Signatures (SAS)
- **B.** Shared Key Authentication
- **C.** None of the above
- **D.** Managed Identities ✅

**Correct answer:** D

**Explanation:**

Managed Identities offer the most secure and manageable way to grant your web application access to Azure Storage resources without the need to embed credentials in your code.

---

### Question 24

You are configuring Azure Site Recovery for a multi-tier application with dependencies between VMs. How can you ensure that the VMs are recovered in the correct order to maintain application functionality during a disaster?

**Options:**

- **A.** Manual failover
- **B.** Custom scripts
- **C.** Recovery Plans ✅

**Correct answer:** C

**Explanation:**

Recovery Plans are the Azure Site Recovery feature specifically designed to orchestrate the failover and recovery of multi-tier applications with dependencies, ensuring the correct boot order.

---

### Question 25

You are managing a complex Azure environment with multiple virtual networks. How can you utilize Azure Virtual Network Manager to centrally manage and govern your virtual networks, simplify connectivity, and enforce consistent configurations across your network infrastructure?

**Options:**

- **A.** Configure UDRs
- **B.** Implement NSGs
- **C.** Define Network Groups ✅
- **D.** Use Azure Policy

**Correct answer:** C

**Explanation:**

Defining Network Groups in Azure Virtual Network Manager allows for centralized management, simplified connectivity, and consistent policy enforcement.

---

### Question 26

You are setting up Azure Blob Storage to store large scientific datasets.

Which storage tier would you choose to optimize for infrequent access and minimize storage costs while still ensuring data durability?

**Options:**

- **A.** Premium tier
- **B.** Archive tier
- **C.** Cool tier ✅
- **D.** Hot tier

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Cool tier**

- Correct.

- The **Cool tier** is designed for data that is infrequently accessed but must remain durable and available when needed.

- It offers lower storage costs compared to the **Hot tier**, while still ensuring high durability and availability.

- This makes it ideal for large scientific datasets that are not accessed frequently but must be retained securely.

### Incorrect

**Option A. Premium tier**

- Incorrect.

- The **Premium tier** is optimized for low-latency, high-throughput workloads where data is accessed frequently.

- It is the most expensive option and not suitable for infrequent access scenarios.

**Option B. Archive tier**

- Incorrect.

- The **Archive tier** provides the lowest storage cost but is intended for data that is rarely accessed and can tolerate **hours of retrieval latency**.

- Since scientific datasets may still need occasional access with reasonable performance, Archive is not the right choice here.

**Option D. Hot tier**

- Incorrect.

- The **Hot tier** is optimized for frequently accessed data.

- It has higher storage costs compared to the Cool tier, making it inefficient for infrequent access scenarios.

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

### Question 28

You are implementing Azure Storage for a media streaming application. Which storage access tier would you choose to optimize for streaming scenarios and reduce egress costs?

**Options:**

- **A.** Hot tier ✅
- **B.** Premium tier
- **C.** Archive tier
- **D.** Cool tier

**Correct answer:** A

**Explanation:**

The hot tier is optimized for frequently accessed data, providing low latency and high performance, making it ideal for streaming scenarios.

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

### Question 31

Your company‘s security policy requires you to restrict access to your Azure App Service web app to specific IP addresses or virtual networks. How can you configure network restrictions for your App Service to meet this requirement?

**Options:**

- **A.** Configure Network Security Groups (NSGs)
- **B.** Use a Web Application Firewall (WAF)
- **C.** Use Azure Traffic Manager
- **D.** Configure IP restrictions in the Networking settings ✅

**Correct answer:** D

**Explanation:**

Configuring IP restrictions in the Networking settings of Azure App Service allows you to limit access to specific IP addresses or virtual networks, enhancing security.

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

### Question 33

Your organization wants to implement a backup strategy for Azure VMs. Which Azure service can you use to create backups of your VMs, store them in a recovery vault, and restore them in case of data loss or accidental deletion?

**Options:**

- **A.** Azure Backup ✅
- **B.** Azure Blob Storage
- **C.** Azure Files
- **D.** Azure Site Recovery

**Correct answer:** A

**Explanation:**

Azure Backup allows you to create backups of your VMs, storing them in a recovery vault for reliable disaster recovery.

---

### Question 34

You are developing an ARM template to deploy a load balancer for a web application. You need to configure health probes to monitor the health of the backend web servers. Which load balancer resource type and associated properties in the ARM template would you use to define the health probe configuration?

**Options:**

- **A.** Microsoft.Network/loadBalancers/loadBalancingRules
- **B.** Microsoft.Network/loadBalancers/probes ✅
- **C.** Microsoft.Network/loadBalancers/backendAddressPools
- **D.** Microsoft.Network/loadBalancers/inboundNatRules

**Correct answer:** B

**Explanation:**

The ‘Microsoft.Network/loadBalancers/probes‘ resource type and associated properties in ARM templates are used to define health probe configurations for load balancers.

---

### Question 35

You are configuring a VM to run a web application that requires incoming traffic on a specific port. How would you configure the network security group (NSG) associated with the VM‘s network interface to allow this traffic?

**Options:**

- **A.** Add an inbound security rule to allow traffic on the required port ✅
- **B.** Configure a service endpoint for the required port
- **C.** Disable the NSG to allow all traffic
- **D.** Configure a network route table for the required port

**Correct answer:** A

**Explanation:**

Adding an inbound security rule in the NSG allows specific traffic to reach the VM, ensuring the web application can function correctly.

---

### Question 36

Given the organization’s complex network environment and diverse security requirements, which Azure Firewall configuration would be the MOST suitable for achieving comprehensive network traffic control and threat protection?

**Options:**

- **A.** Deploy Azure Firewall Premium in a central VNet and leverage its advanced threat intelligence and intrusion detection/prevention capabilities for comprehensive protection.
- **B.** Deploy a single Azure Firewall instance in a central VNet and use network virtual appliance (NVA) routing to direct traffic from all VNets to the firewall.
- **C.** Deploy Azure Firewall instances individually in each VNet, with separate configurations for each environment‘s specific security rules.
- **D.** Deploy Azure Firewall in a hub-and-spoke topology, with a central firewall instance in the hub VNet and peered spokes for each application or workload VNet. ✅

**Correct answer:** D

**Explanation:**

### Correct

**Option D. Deploy Azure Firewall in a hub-and-spoke topology**

- Correct because the **hub-and-spoke model** is the recommended architecture for enterprises with multiple VNets.

- A **central firewall in the hub VNet** provides unified security policy enforcement, simplified management, and cost efficiency.

- Spoke VNets (application/workload VNets) peer with the hub, ensuring all traffic flows through the firewall for inspection and control.

- This design scales well and supports diverse workloads while maintaining centralized governance.

### Incorrect

**Option A. Deploy Azure Firewall Premium in a central VNet**

- Incorrect because while Azure Firewall Premium offers advanced features (TLS inspection, IDPS, threat intelligence), simply placing it in a central VNet without a hub-and-spoke design does not ensure comprehensive traffic control across multiple VNets.

- The missing piece is the **hub-and-spoke topology**, which provides structured connectivity.

**Option B. Deploy a single Azure Firewall instance with NVA routing**

- Incorrect because relying on **NVA routing** adds unnecessary complexity.

- Azure Firewall already integrates with Azure routing; introducing NVAs complicates management and is not the recommended approach for large-scale environments.

**Option C. Deploy Azure Firewall instances individually in each VNet**

- Incorrect because deploying separate firewalls in each VNet increases cost, administrative overhead, and policy fragmentation.

- It does not provide centralized control, which is critical in enterprise environments.

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

### Question 39

You‘re using Azure Load Balancer for your web application. You notice that one of the backend VMs is unhealthy and causing application errors. How can you automatically remove this unhealthy VM from the load balancer‘s rotation?

**Options:**

- **A.** Increase the timeout value for the load balancer
- **B.** Configure health probes in the load balancer ✅
- **C.** Disable the VM‘s network interface
- **D.** Manually remove the VM from the backend pool

**Correct answer:** B

**Explanation:**

Azure Load Balancer uses health probes to monitor the health of backend VMs. By configuring health probes, you can automatically remove unhealthy VMs from rotation, ensuring that only healthy VMs receive traffic.

---

### Question 40

Your organization is transitioning from using ARM templates to Bicep for infrastructure as code (IaC). What are the key advantages of using Bicep over ARM templates, and what are the considerations or potential challenges involved in this transition?

**Options:**

- **A.** Modularization ✅
- **B.** Transpiles to ARM templates ✅
- **C.** Simplified syntax ✅
- **D.** AI support
- **E.** No error messages

**Correct answer:** A, B, C

**Explanation:**

**Simplified syntax:** Bicep offers a cleaner and more concise syntax compared to ARM templates, making it easier to write and read.

**Modularization:** Bicep supports modularization, allowing you to break down your infrastructure into smaller, reusable modules. This improves code organization and maintainability.

**Transpiles to ARM templates:** Bicep code is transpiled into ARM templates at deployment time, ensuring compatibility with existing Azure resources and tools.

However, there are some considerations and potential challenges involved in the transition from ARM templates to Bicep:

**Learning curve:** While Bicep’s syntax is simpler, there might be a learning curve associated with adopting a new language.

**Community support:** While Bicep is gaining popularity, it might not have the same level of community support and resources as ARM templates.

**Tooling and integrations:** The ecosystem of tools and integrations for Bicep might be less mature compared to ARM templates.

Overall, the transition to Bicep can offer significant benefits in terms of code readability, maintainability, and modularity. However, it’s important to carefully consider the potential challenges and ensure that your organization has the necessary resources and expertise to support the transition.

---

### Question 41

You have a multi-tier application with VMs in different VNets. You need to enable secure communication between these VMs while minimizing the attack surface. Which Azure networking feature is designed for this purpose?

**Options:**

- **A.** Azure Application Gateway
- **B.** Azure Private Link
- **C.** Azure Virtual Network Peering ✅
- **D.** Network Security Groups (NSGs)

**Correct answer:** C

**Explanation:**

The Azure networking feature designed for secure communication between VMs in different VNets while minimizing the attack surface is **Azure Virtual Network Peering**.

Here’s a breakdown of why Azure Virtual Network Peering is the best option:

**Secure Communication:** Azure Virtual Network Peering allows you to connect two or more virtual networks within the same Azure subscription or across different subscriptions. This creates a private, secure connection between the VMs in the different VNets, isolating them from the public internet and reducing the attack surface.

**Reduced Attack Surface:** By using Virtual Network Peering, you can avoid exposing your VMs to the public internet, which can significantly reduce the risk of attacks.

**Flexibility:** Virtual Network Peering provides flexibility in terms of connectivity options. You can choose between full mesh peering or hierarchical peering to connect your VNets based on your specific requirements.

The other options are not as suitable:

**Azure Application Gateway:** While Application Gateway provides load balancing and web application firewall capabilities, it is not specifically designed for secure communication between VMs in different VNets.

**Azure Private Link:** Private Link is used to privately connect your virtual networks to services within Azure or to your own on-premises services. While it can provide secure access to services, it is not the best option for general-purpose communication between VMs.

**Network Security Groups (NSGs):** NSGs are used to filter network traffic to and from your VMs. While they can be used to restrict access to certain resources, they do not provide the same level of connectivity and security as Virtual Network Peering.

By using Azure Virtual Network Peering, you can establish secure and private communication between your VMs in different VNets, minimizing the attack surface and protecting your application from unauthorized access.

---

### Question 42

**You are designing a data archiving solution using Azure Blob Storage. How can you utilize blob lifecycle management policies to automatically move older data to archive tier storage and reduce storage costs?**

**Options:**

- **A.** Use Azure Storage lifecycle management policies ✅
- **B.** Set rules in Azure Blob Storage to transition data to the archive tier
- **C.** Implement blob lifecycle management policies using Azure Portal
- **D.** Define a lifecycle management policy with ‘Delete‘ action for old data

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Use Azure Storage lifecycle management policies**

- Correct because Azure Blob Storage supports **lifecycle management policies** that automatically transition data between tiers (Hot, Cool, Archive) based on rules such as age or last access time.

- This is the official and recommended way to reduce storage costs for older data.

### Incorrect

**Option B. Set rules in Azure Blob Storage to transition data to the archive tier**

- Incorrect because while this sounds close, it is not the precise terminology used in Azure. The exam expects recognition of **lifecycle management policies**, not generic “rules.”

**Option C. Implement blob lifecycle management policies using Azure Portal**

- Incorrect because although you can configure policies in the Azure Portal, the exam question is asking about the **feature itself**, not the interface. The correct answer is the feature name: **Azure Storage lifecycle management policies**.

**Option D. Define a lifecycle management policy with ‘Delete’ action for old data**

- Incorrect because the requirement is to **archive** older data, not delete it. The Delete action removes data permanently, which does not meet the goal of archiving.

---

### Question 43

You are configuring an **internal load balancer** for your Azure VMs. You need to ensure that only clients within the same **virtual network** can access the load-balanced resources. **Question:** How would you restrict access to the internal load balancer?

**Options:**

- **A.** Assign a public IP address to the load balancer.
- **B.** Configure a User Defined Route (UDR) for the load balancer.
- **C.** Use a private frontend IP address for the load balancer. ✅
- **D.** Configure a Network Security Group (NSG) on the load balancer‘s subnet.

**Correct answer:** C

**Explanation:**

### **Correct**

- **Option C. Use a private frontend IP address for the load balancer**

- Correct: An **internal load balancer** is restricted to the virtual network when configured with a **private frontend IP address**.

- This ensures that only resources inside the same VNet (or peered VNets if configured) can access the load‑balanced endpoints.

- This is the **standard method** to restrict access to internal traffic only.

### **Incorrect**

- **Option A. Assign a public IP address**

- Incorrect: A public IP would expose the load balancer to the internet, violating the requirement to restrict access to the VNet.

- **Option B. Configure a User Defined Route (UDR)**

- Incorrect: UDRs control traffic routing between subnets or VNets, but they do not restrict access to the load balancer itself.

- **Option D. Configure an NSG on the subnet**

- Incorrect: NSGs can restrict traffic at the subnet or NIC level, but the **primary mechanism** for restricting access to an internal load balancer is using a **private frontend IP**. NSGs can complement security but are not the direct answer here.

###

---

### Question 44

**You are planning for disaster recovery of your Azure VMs. You need to determine the recovery point objective (RPO) and recovery time objective (RTO) for your applications. What do these terms mean, and how do they influence your disaster recovery strategy?**

**Options:**

- **A.** RPO is the acceptable amount of time it takes for a backup to complete; RTO is the acceptable time for applications to be unavailable during a restore operation.
- **B.** RPO is the maximum tolerable data loss in a disaster; RTO is the maximum acceptable downtime before significant business impact. ✅
- **C.** RPO is the point in time to which data must be recovered; RTO is the time by which applications must be restored to full functionality.
- **D.** RPO is the frequency with which data is replicated to the secondary region; RTO is the time it takes to fail over to the secondary region.

**Correct answer:** B

**Explanation:**

### Correct

**Option B. RPO is the maximum tolerable data loss in a disaster; RTO is the maximum acceptable downtime before significant business impact**

- Correct because:

- **Recovery Point Objective (RPO):** Defines how much data loss is acceptable, measured in time. For example, an RPO of 1 hour means you can afford to lose up to 1 hour of data.

- **Recovery Time Objective (RTO):** Defines how quickly systems must be restored after a disruption. For example, an RTO of 30 minutes means the application must be back online within 30 minutes.

- These metrics directly influence your **Azure disaster recovery strategy**:

- A low RPO requires frequent backups or replication.

- A low RTO requires fast failover mechanisms like **Azure Site Recovery**.

### Incorrect

**Option A. RPO is the acceptable amount of time it takes for a backup to complete; RTO is the acceptable time for applications to be unavailable during a restore operation**

- Incorrect because RPO is not about backup duration—it is about **data loss tolerance**. RTO is not about restore operation time alone but about **total downtime tolerance**.

**Option C. RPO is the point in time to which data must be recovered; RTO is the time by which applications must be restored to full functionality**

- Incorrect because while this sounds close, it is incomplete. RPO is not just a “point in time” but the **maximum tolerable data loss window**. RTO is not just “time to restore” but the **maximum downtime allowed before business impact**.

**Option D. RPO is the frequency with which data is replicated to the secondary region; RTO is the time it takes to fail over to the secondary region**

- Incorrect because replication frequency is a method to achieve a desired RPO, but it is not the definition of RPO itself. Similarly, failover time contributes to RTO but does not define it.

---

### Question 45

You have an Azure virtual machine named VM1 that runs Windows Server 2016.

You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.

Solution: You create an Azure Log Analytics workspace and configure the data settings. You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source.

Does this meet the goal?

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

Alerts in Azure Monitor can identify important information in your Log Analytics repository. They are created by alert rules that automatically run log searches at regular intervals, and if results of the log search match particular criteria, then an alert record is created and it can be configured to perform an automated response.

The Log Analytics agent collects monitoring data from the guest operating system and workloads of virtual machines in Azure, other cloud providers, and on- premises. It collects data into a Log Analytics workspace.

https://docs.microsoft.com/en-us/azure/azure-monitor/learn/tutorial-response

https://docs.microsoft.com/en-us/azure/azure-monitor/platform/agents-overview

---

### Question 46

You have an Azure virtual machine named VM1 that runs Windows Server 2016.

You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.

Solution: You create an Azure storage account and configure shared access signatures (SASs). You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the storage account as the source.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Instead you create an Azure Log Analytics workspace and configure the data settings. You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source.

https://docs.microsoft.com/en-us/azure/azure-monitor/platform/agents-overview

---

### Question 47

You have an Azure subscription named Subscription1 that contains the virtual networks in the following table:

Subscription1 contains the virtual machines in the following table:

In Subscription1, you create a load balancer with the following options:

– Name: LB1

– SKU: Basic

– Type: Internal

– Subnet: Subnet11

– Virtual network: VNET1

Please evaluate the following statement and decide if it is True or False.

LB1 can balance the traffic between VM1 and VM2.

**Options:**

- **A.** TRUE ✅
- **B.** FALSE

**Correct answer:** A

**Explanation:**

A load balancer is deployed at a VNET level and can load balance traffic for VMs deployed in that respective VNET. In this scenario, as VM1 and VM2 are deployed on Subnet11, which is part of VNET1, LB1 can balance the traffic between VM1 and VM2.

Reference:

https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview

Quick Preview:

---

### Question 48

Your company has an Azure virtual machine that runs Windows Server 2016. You have to create an alert in Azure whenever two error events are logged to the System log on the virtual machine within an hour.

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because Azure Monitor alerts cannot directly evaluate **multiple error events within a specific time window** from the VM’s System log.

- While you can configure alerts based on metrics or log queries, the requirement of “two error events within an hour” is not natively supported by a simple alert rule.

- To achieve this, you would need to send the logs to **Log Analytics** and then create a **custom query** with an alert rule.

- Therefore, the straightforward answer to whether you can directly configure this alert is **No**.

### Incorrect

**Option A. Yes**

- Incorrect because answering “Yes” implies that Azure Monitor can natively configure an alert for “two error events within an hour” directly from the VM System log.

- This is not possible without additional configuration (Log Analytics workspace + KQL query).

- The exam trap here is assuming Azure Monitor alerts can handle complex event counts without log analytics.

###

---

### Question 49

**Your company has an Azure virtual machine that runs Windows Server 2016. You have to create an alert in Azure whenever two error events are logged to the System log on the virtual machine within an hour. Is this possible?**

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because Azure Monitor alerts can be configured to trigger based on **single conditions** (e.g., when a metric threshold is exceeded or when a specific log query returns results).

- However, Azure Monitor does not natively support **complex event correlation** such as “two error events within one hour” directly.

- To achieve this, you would need to use **Log Analytics with Kusto queries** to aggregate events and then configure an alert based on that query. The simple “Yes” option is misleading because it suggests this can be done directly without additional configuration.

### Incorrect

**Option A. Yes**

- Incorrect because while alerts can be created for error events, Azure Monitor does not provide a straightforward way to trigger alerts based on **multiple occurrences within a specific time window** without using advanced queries.

- Simply answering “Yes” ignores the need for **Log Analytics query logic** to count events and apply the time constraint.

---

### Question 50

You have to configure Application Insights for a set of applications. Each application has different requirements. Below are the requirements for each application

skillcertlabapp1 – Be able to see if users are progressing through the entire business process for the application

skillcertlabapp2 – Here one should be able to analyse the load times and other properties that could influence conversion rates for the application

skillcertlabapp3 – Here one should be able to analyse how many users return to the application

skillcertlabapp4 – Here one should be able to see the places where users repeat the same action over and over again

Which of the following feature of Application Insights could be used for the application skillcertlabapp1?

**Options:**

- **A.** A. Impact
- **B.** B. Retention
- **C.** C. User Flows
- **D.** D. Funnels ✅

**Correct answer:** D

**Explanation:**

This can be accomplished with the Funnels feature of Application Insights.

The Microsoft documentation mentions the following

Since this is clearly mentioned in the Microsoft documentation, all other options are incorrect

For more information on the Funnels feature, please visit the following URL

https://docs.microsoft.com/en-us/azure/azure-monitor/app/usage-funnels

---

### Question 51

**You have to configure Application Insights for a set of applications. Each application has different requirements. Below are the requirements for each application.** **skillcertlabapp1 – Be able to see if users return to the application.** **Which Application Insights feature should be used?**

**Options:**

- **A.** A. Impact
- **B.** B. Retention ✅
- **C.** C. User Flows
- **D.** D. Funnels

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Retention**

- Correct because the **Retention** feature in Application Insights shows how many users return to the application after their first visit.

- It helps track user engagement over time and is specifically designed to measure whether users come back, which matches the requirement.

### Incorrect

**Option A. Impact**

- Incorrect because **Impact** is used to analyze how a particular feature or change affects users.

- It does not measure whether users return to the application.

**Option C. User Flows**

- Incorrect because **User Flows** visualize the paths users take through the application (e.g., navigation sequences).

- While useful for understanding behavior, it does not directly measure return visits.

**Option D. Funnels**

- Incorrect because **Funnels** track conversion rates through a defined sequence of steps (e.g., checkout process).

- They are not designed to measure user retention.

---

### Question 52

You have an Azure virtual machine named VM1 and a Recovery Services vault named Vault1. You create a backup policy named Policy1 as shown in the exhibit. You configure the backup of VM1 to use Policy1 on Wednesday December 31 at 5:00PM (17:00). You need to identify the number of available recovery points for VM1. How many recovery points are available on January 8 at 2:00PM (14:00) and January 15 at 2:00PM (14:00)? (Select two)

**Options:**

- **A.** January 8 at 2:00PM (14:00) - 5
- **B.** January 8 at 2:00PM (14:00) - 6
- **C.** January 8 at 2:00PM (14:00) - 8 ✅
- **D.** January 8 at 2:00PM (14:00) - 10
- **E.** January 15 at 2:00PM (14:00) - 5
- **F.** January 15 at 2:00PM (14:00) - 15 ✅

**Correct answer:** C, F

**Explanation:**

### Correct

- **Option C. January 8 at 2:00PM (14:00) – 8** Correct because from **December 31 to January 8**, there are **8 daily backups** created (one per day). Since the retention policy keeps them, all 8 recovery points are available by January 8.

- **Option F. January 15 at 2:00PM (14:00) – 15** Correct because by **January 15**, there have been **15 daily backups** since the initial backup on December 31. The retention policy ensures they remain available, so 15 recovery points exist at that time.

### Incorrect

- **Option A. January 8 – 5** Incorrect because there are more than 5 backups by January 8; the correct count is 8.

- **Option B. January 8 – 6** Incorrect because the math shows 8 backups, not 6.

- **Option D. January 8 – 10** Incorrect because only 8 backups exist by January 8, not 10.

- **Option E. January 15 – 5** Incorrect because by January 15, there are 15 backups, not 5.

---

### Question 53

You have an Azure Linux virtual machine that is protected by Azure Backup. One week ago, two files were deleted from the virtual machine. You need to restore the deleted files to an on-premises Windows Server 2016 computer as quickly as possible.

Which four actions should you perform in sequence?

1 – Download and run the script to mount a drive on the local computer

2 – Select a restore point that contains the deleted files

3 – From the Azure portal, click Restore VM from the vault

4 – From the Azure portal, click File Recovery from the vault

5 – Mount a VHD

6 – Copy the files by using AzCopy

7 – Copy the files by using File Explorer

**Options:**

- **A.** 4 -> 3 -> 2 -> 7
- **B.** 4 -> 2 -> 1 -> 7 ✅
- **C.** 3 -> 4 -> 1 -> 6
- **D.** 3 -> 2 -> 1 -> 6

**Correct answer:** B

**Explanation:**

Let’s run through the step-by-step process.

Azure Backup provides the capability to restore Azure virtual machines (VMs) and disks from Azure VM backups, also known as recovery points.To restore files or folders from the recovery point, you first need to go to the virtual machine, select Backup and then STEP1 – File Recovery:

Once you select File Recovery, the File Recovery menu opens and you would need to STEP 2 – Select a Recovery Point.

A recovery point is a VM backup, so you should select here a date and time, before the accidental delete happened.

Next, in the same File Recovery menu, you would need to STEP 3 – Download script. In this step, a script will be downloaded that you will execute. The script will mount the disks from the selected recovery point as local drives on the machine where it is run.

Once the disk or disks are mounted and available to use, there is one more step to fulfil and access the deleted file, and this is STEP 4 – Copy the files by using File Explorer. You can use File Explorer to copy the two files on your local machine, just like you would do, for example, from an USB stick inserted into your laptop or PC.

Reference:

https://docs.microsoft.com/en-us/azure/backup/backup-azure-restore-files-from-vm

Quick Preview:

---

### Question 54

You have to configure Application Insights for a set of applications. Each application has different requirements. Below are the requirements for each application

skillcertlabapp1 – Be able to see if users are progressing through the entire business process for the application

skillcertlabapp2 – Here one should be able to analyse the load times and other properties that could influence conversion rates for the application

skillcertlabapp3 – Here one should be able to analyse how many users return to the application

skillcertlabapp4 – Here one should be able to see the places where users repeat the same action over and over again

Which of the following feature of Application Insights could be used for the application skillcertlabapp4?

**Options:**

- **A.** A. Impact
- **B.** B. Retention
- **C.** C. User Flows ✅
- **D.** D. Funnels

**Correct answer:** C

**Explanation:**

This can be accomplished with the User Flows feature of Application Insights.

The Microsoft documentation mentions the following

Since this is clearly mentioned in the Microsoft documentation, all other options are incorrect

For more information on the User Flows feature, please visit the following URL

https://docs.microsoft.com/en-us/azure/azure-monitor/app/usage-flows

---

### Question 55

You create a virtual machine scale set named Scale1. Scale1 is configured as shown in the following exhibit.

If scale is first utilized at 25 percent for six minutes after it is deployed, and then utilized at 50 percent for six minutes, Scale1 will be running?

**Options:**

- **A.** 2 virtual machines ✅
- **B.** 4 virtual machines
- **C.** 6 virtual machines
- **D.** 10 virtual machines
- **E.** 20 virtual machines

**Correct answer:** A

**Explanation:**

### Correct

**Option A. 2 virtual machines**

- Scale sets in Azure use **autoscale rules** based on CPU thresholds and duration.

- In this scenario:

- At **25% utilization for six minutes**, the CPU is below the scale‑out threshold (commonly &gt;75%) and above the scale‑in threshold (commonly &lt;30%).

- At **50% utilization for six minutes**, the CPU is still below the scale‑out threshold.

- Since neither condition triggers scale‑out or scale‑in, the scale set remains at its **default/minimum instance count (2 VMs)**.

### Incorrect

**Option B. 4 virtual machines**

- Incorrect because scale‑out is not triggered at 25% or 50% utilization.

- Scale‑out requires CPU &gt;75% for the configured duration.

**Option C. 6 virtual machines**

- Incorrect because no autoscale rule is met to increase to 6 VMs.

**Option D. 10 virtual machines**

- Incorrect because the utilization never reaches the scale‑out threshold.

- The scale set does not expand to maximum capacity.

**Option E. 20 virtual machines**

- Incorrect because maximum scaling is not triggered.

- The workload is too low to justify scaling beyond the minimum.

###

---

### Question 56

You plan to create the Azure web apps shown in the table. **What is the minimum number of App Service plans you should create for the web apps?**

What is the minimum number of App Service plans you should create for the web apps?

**Options:**

- **A.** 1
- **B.** 2 ✅
- **C.** 3
- **D.** 4

**Correct answer:** B

**Explanation:**

### Correct

**Option B. 2**

- Azure App Service plans define the **region, pricing tier, and operating system** for web apps.

- Web apps can share an App Service plan **only if they have the same requirements** (region + OS + pricing tier).

- In the given scenario, at least two distinct configurations exist (for example, different regions or OS types), so **two App Service plans are required**.

- This ensures compliance with deployment requirements while minimizing cost.

- **Correct answer.**

### Incorrect

**Option A. 1**

- A single App Service plan cannot host apps across **different regions or OS types**.

- Choosing one plan would violate deployment requirements.

- **Incorrect.**

**Option C. 3**

- While possible, three App Service plans are **not the minimum** required.

- This would unnecessarily increase cost and management overhead.

- **Incorrect.**

**Option D. 4**

- Four App Service plans would mean each app has its own plan.

- This is excessive and not required unless each app had unique region/OS/tier requirements.

- **Incorrect.**

###

---

### Question 57

You have an Azure subscription that contains an Azure Availability Set named WEBPROD-AS-USE2 as shown in the following exhibit.

You add 14 virtual machines to WEBPROD-AS-USE2.

If the server rack in the Azure datacenter that hosts WEBPROD-AS-USE2 experience a power failure, the maximum number of unavailable virtual machines will be?

**Options:**

- **A.** 2
- **B.** 7 ✅
- **C.** 10
- **D.** 14

**Correct answer:** B

**Explanation:**

There are 2 fault domains. The 14 VMs are shared across the 2 fault domains, so 7 VMs in each fault domain. A rack failure will affect one fault domain so 7 VMs will be offline.

https://docs.microsoft.com/en-us/azure/virtual-machines/windows/manage-availability

---

### Question 58

You need to create an Azure Storage account that meets the following requirements:

– Minimizes costs

– Supports hot, cool, and archive blob tiers

– Provides fault tolerance if a disaster affects the Azure region where the account resides

How should you complete the command?

**Options:**

- **A.** az storage account create -n storageaccount1 -g RG1 --kind BlobStorage --sku Standard_GRS
- **B.** az storage account create -n storageaccount1 -g RG1 --kind Storage --sku Standard_GRS
- **C.** az storage account create -n storageaccount1 -g RG1 --kind StorageV2 --sku Standard_GRS ✅
- **D.** az storage account create -n storageaccount1 -g RG1 --kind StorageV2 --sku Standard_LRS
- **E.** az storage account create -n storageaccount1 -g RG1 --kind StorageV2 --sku Standard_GAGRS

**Correct answer:** C

**Explanation:**

Bash

az storage account create -n storageaccount1 -g RG1 --kind StorageV2 --sku Standard_GRS

This command creates a Storage V2 account with the Standard_GRS SKU, which meets all the specified requirements:

**Minimizes costs:** The Standard_GRS SKU offers cost-effective storage for long-term archival data.

**Supports hot, cool, and archive blob tiers:** Storage V2 accounts support all three tiers, allowing you to optimize storage costs based on data access frequency.

**Provides fault tolerance:** Azure Storage V2 is highly available and durable, with automatic replication across multiple regions to protect against data loss in case of a regional disaster.

https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy?toc=/azure/storage/blobs/toc.json#redundancy-in-a-secondary-region

---
