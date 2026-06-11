# Practice Set 1

Source: [https://skillcertpro.com/az-104-exam-questions/](https://skillcertpro.com/az-104-exam-questions/)
Total questions: 55

---

### Question 1

You have an Azure subscription that contains an Azure virtual machine named VM‑01. VM‑01 runs an application that does not support multiple active instances. At the end of each month, CPU usage for VM‑01 peaks when the application runs. You need to create a scheduled runbook to increase the processor performance of VM‑01 at the end of each month. **What task should you include in the runbook?**

**Options:**

- **A.** Add the Azure Performance Diagnostics agent to VM-01
- **B.** Modify the VM size property of VM-01 ✅
- **C.** Add VM-01 to a scale set
- **D.** Increase the vCPU quota for the subscription
- **E.** Add a Desired State Configuration (DSC) extension to VM-01

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Modify the VM size property of VM‑01**

- This is the correct approach.

- To increase processor performance, you must **resize the VM** to a larger SKU with more vCPUs.

- Azure Automation runbooks can be scheduled to perform this resize operation at the end of each month, ensuring the VM has sufficient compute resources during peak load.

- This aligns with best practices since the application does not support scaling out to multiple instances.

### Incorrect

**Option A. Add the Azure Performance Diagnostics agent to VM‑01**

- Installing diagnostics agents only helps with monitoring and troubleshooting performance issues.

- It does not increase CPU capacity or improve performance.

**Option C. Add VM‑01 to a scale set**

- Scale sets are used for horizontal scaling (multiple instances).

- Since the application does not support multiple active instances, this option is not valid.

**Option D. Increase the vCPU quota for the subscription**

- Increasing the subscription quota allows you to provision more vCPUs overall, but it does not directly change the performance of VM‑01.

- The quota is a subscription‑level limit, not a VM‑specific setting.

**Option E. Add a Desired State Configuration (DSC) extension to VM‑01**

- DSC is used for configuration management (ensuring software and settings are consistent).

- It does not affect CPU performance or VM sizing.

---

### Question 2

Your company needs to deploy an application to a set of three virtual machines. You have to ensure that at any point in time two virtual machines are always available in the event of a data centre failure.

You decide to deploy the virtual machines as part of a single availability zone.

Would this fulfil the requirement?

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- This is correct because with **three virtual machines**, you cannot guarantee that **two will always remain available** in the event of a **data center failure**.

- Azure availability zones and availability sets are designed to provide redundancy, but a **data center failure** is a broader outage scenario.

- To meet the requirement, you would need to deploy across **multiple availability zones** or regions, not just rely on three VMs in one data center.

###  Incorrect

**Option A. Yes**

- Incorrect because simply deploying three VMs does not ensure that two will always be available during a **data center failure**.

- If all three VMs are in the same data center, a failure would take down all of them.

- Even if spread across availability sets, this does not protect against a full data center outage.

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

### Question 4

Your company currently has a Virtual Network defined in Azure. The Virtual Network has a default subnet that contains 2 Virtual machines named demovm and demovm1. There is a requirement to inspect all network traffic between the Virtual Machines for a duration of 3 hours.

You propose a solution to create a metric chart for Network In and Network Out

Does this solution fulfil the requirement?

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

This is used to just see the number of packets coming into and out of the Virtual machine but will not do a detailed packet inspection.

For more information on monitoring Virtual Machine, please go ahead and visit the below URL

https://docs.microsoft.com/en-us/azure/virtual-machines/windows/monitor

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

### Question 6

You plan to use Azure Network Watcher to perform the following tasks:

Task1: Identify a security rule that prevents a network packet from reaching an Azure virtual machine.

Task2: Validate outbound connectivity from an Azure virtual machine to an external host.

Which feature should you use for task2?

**Options:**

- **A.** Connection Troubleshoot ✅
- **B.** Next hop
- **C.** NSG flow logs
- **D.** Traffic Analytics

**Correct answer:** A

**Explanation:**

The connection troubleshoot capability enables you to test a connection between a VM and another VM, an FQDN, a URI, or an IPv4 address. The test returns similar information returned when using the connection monitor capability, but tests the connection at a point in time, rather than monitoring it over time, as connection monitor does

https://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-monitoring-overview

INCORRECT ANSWERS:

Next hop — Next hop helps you determine if traffic is being directed to the intended destination, or whether the traffic is being sent nowhere.

NSG flow logs — NSG flow logs is a feature of Azure Network Watcher that allows you to log information about IP traffic flowing through an NSG.

Traffic Analytics  It provides visibility into user and application activity in cloud networks.

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

an Azure Storage account and an access policy  Storage account is used to store the blobs. Not recommended to store sensitive data like passwords.

a Recovery Services vault and a backup policy  Recovery services vault is to store backups.

Azure Active Directory (AD) Identity Protection and an Azure policy  Identity protection is to detect and investigate identity based risks.

---

### Question 8

You have an Azure subscription that contains a web app named webapp1.

You need to add a custom domain named http://www.preparationlabs.com to webapp1.

What should you do first?

**Options:**

- **A.** Create a DNS record ✅
- **B.** Add a connection string
- **C.** Upload a certificate.
- **D.** Stop webapp1.

**Correct answer:** A

**Explanation:**

First purchase a domain name, and make sure you have access to the DNS registry for your domain provider. Then you can map the custom domain to your Azure web app. To add a custom domain to your app, you need to verify your ownership of the domain by adding a verification ID as a TXT record with your domain provider.

https://docs.microsoft.com/en-us/Azure/app-service/app-service-web-tutorial-custom-domain

INCORRECT ANSWERS:

Add a connection string  Custom domain is not related to application settings or connection strings.

Upload a certificate.  Uploading a certificate will make application to access on https protocol

Stop webapp1.  No need to stop the web site to add a custom domain.

---

### Question 9

You have a deployment template named Template1 that is used to deploy 10 Azure web apps.

You need to identify what to deploy before you deploy Template1. The solution must minimize Azure costs.

What should you identify?

**Options:**

- **A.** five Azure Application Gateways
- **B.** one App Service plan ✅
- **C.** 10 App Service plans
- **D.** one Azure Traffic Manager
- **E.** one Azure Application Gateway

**Correct answer:** B

**Explanation:**

You must create an app service plan before deploying web apps. One app service plan can have multiple web apps. To reduce the costs, create one app service and use it for 10 web apps.

https://docs.microsoft.com/en-us/azure/app-service/overview-hosting-plans

INCORRECT ANSWERS:

five Azure Application Gateways  Application gateway is a traffic load balancer. It is not a pre-requisite to create web apps.

10 App Service plans  App service plan is mandatory to create a web app. However, 10 app service plans will increase the cost.

one Azure Traffic Manager  Traffic manager is also a load balancer, not a pre-requisite to create web apps.

one Azure Application Gateway – Application gateway is a traffic load balancer. It is not a pre-requisite to create web apps.

---

### Question 10

Your company has an account and subscription in Azure. They have the requirement of creating multiple Linux servers for their test environment. Some of these servers need to have web servers such as NGINX pre-installed. The installation needs to be carried out in an automated fashion.

Which of the following file would you need to create for the automated deployment?

**Options:**

- **A.** A. template.yaml
- **B.** B. deployment.json
- **C.** C. cloud-init.txt ✅
- **D.** D. deploy.xml

**Correct answer:** C

**Explanation:**

The Microsoft documentation mentions the following

Cloud-init is a widely used approach to customize a Linux VM as it boots for the first time. You can use cloud-init to install packages and write files, or to configure users and security. As cloud-init runs during the initial boot process, there are no additional steps or required agents to apply your configuration.

Since this is clearly given in the Microsoft documentation, all other options are invalid.

For more information on automating VM deployment, one can go to the below URL

https://docs.microsoft.com/en-us/azure/virtual-machines/linux/tutorial-automate-vm-deployment

---

### Question 11

You have an Azure subscription that contains a policy-based virtual network gateway named GW1 and a virtual network named VNet1.

You need to ensure that you can configure a point-to-site connection from an on-premises computer to VNet1.

Which two actions should you perform?

**Options:**

- **A.** Delete GW1 ✅
- **B.** Add a service endpoint to VNet1
- **C.** Reset GW1
- **D.** Create a route-based virtual network gateway ✅
- **E.** Add a connection to GW1
- **F.** Add a public IP address space to VNet1

**Correct answer:** A, D

**Explanation:**

We need to setup a RouteBased VPN. An Azure Vnet gateway type cannot be changed from policy-based to route-based or the other way. The gateway must be deleted and recreated, a process taking around 60 minutes.

https://docs.microsoft.com/en-us/azure/vpn-gateway/point-to-site-about

https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-vpn-faq#can-i-update-my-policy-based-vpn-gateway-to-route-based

---

### Question 12

You have an Azure subscription named Subscription1 that contains a virtual machine named VM1.

You create an Azure key vault named KeyVault1. You need to use KeyVault1 to enable Azure Disk Encryption on VM1.

The solution must support backing up VM1 by using Azure Backup.

Which key vault settings should you configure?

**Options:**

- **A.** Access policies ✅
- **B.** Secrets
- **C.** Keys
- **D.** Locks

**Correct answer:** A

**Explanation:**

The Azure platform needs access to the encryption keys or secrets in your key vault to make them available to the VM for booting and decrypting the volumes.

If you did not enable your key vault for disk encryption, deployment, or template deployment at the time of creation, you must update its advanced access policies.

https://docs.microsoft.com/en-us/azure//virtual-machines/windows/disk-encryption-key-vault#set-key-vault-advanced-access-policies

INCORRECT ANSWERS:

Secrets  It is to create or edit secrets

Keys  It is to create or edit keys

Locks  It is to prevent deletion of resources in Azure.

---

### Question 13

You have an Azure DNS zone named preparationlabs.com.

You need to delegate a subdomain named research.preparationlabs.com to a different DNS server in Azure.

What should you do?

**Options:**

- **A.** Create an NS record named research in the preparationlabs.com zone. ✅
- **B.** Create an PTR record named research in the preparationlabs.com zone.
- **C.** Modify the SOA record of preparationlabs.com.
- **D.** Create an A record named *.research in the preparationlabs.com zone.

**Correct answer:** A

**Explanation:**

You need to create a name server (NS) record for the zone.

https://docs.microsoft.com/en-us/azure/dns/delegate-subdomain

INCORRECT ANSWERS:

Create an PTR record named research in the preparationlabs.com zone.- A DNS PTR record is exactly the opposite of the ‘A’ record, which provides the IP address associated with a domain name.

Modify the SOA record of preparationlabs.com – The DNS start of authority (SOA) record stores important information about a domain or zone such as the email address of the administrator

Create an A record named *.research in the preparationlabs.com zone – This is a wildcard DNS record that answers DNS requests for any subdomain you haven’t already defined

---

### Question 14

You have an Azure subscription that contains a virtual network named VNet1. VNet1 contains four subnets named Gateway, Perimeter, NVA, and Production.

The NVA subnet contains two network virtual appliances (NVAs) that will perform network traffic inspection between the Perimeter subnet and the Production subnet.

You need to implement an Azure load balancer for the NVAs. The solution must meet the following requirements:

-&gt; The NVAs must run in an active-active configuration that uses automatic failover.

-&gt; The NVA must load balance traffic to two services on the Production subnet. The services have different IP addresses.

Which three actions should you perform?

**Options:**

- **A.** Deploy a basic load balancer
- **B.** Deploy a standard load balancer ✅
- **C.** Add two load balancing rules that have HA Ports and Floating IP enabled ✅
- **D.** Add two load balancing rules that have HA Ports enabled and Floating IP disabled
- **E.** Add a frontend IP configuration, a backend pool, and a health probe
- **F.** Add a frontend IP configuration, two backend pools, and a health probe ✅

**Correct answer:** B, C, F

**Explanation:**

### Correct

**Option B. Deploy a standard load balancer**

- Correct because only a **Standard Load Balancer** supports **high availability (HA ports)**, multiple frontends, and zone redundancy.

- A **Basic Load Balancer** does not support these advanced features and cannot meet the requirements for active‑active NVAs.

**Option C. Add two load balancing rules that have HA Ports and Floating IP enabled**

- Correct because enabling **HA Ports** allows the load balancer to handle traffic across all ports, which is required for NVAs inspecting traffic.

- **Floating IP** ensures seamless failover between NVAs in an active‑active setup.

- Two rules are needed since traffic must be balanced to two different services with distinct IP addresses.

**Option F. Add a frontend IP configuration, two backend pools, and a health probe**

- Correct because:

- **Frontend IP configuration** provides entry points for traffic.

- **Two backend pools** are required since there are two services in the Production subnet with different IPs.

- **Health probes** ensure automatic failover by monitoring NVA availability.

### Incorrect

**Option A. Deploy a basic load balancer**

- Incorrect because a **Basic Load Balancer** does not support HA Ports, zone redundancy, or multiple frontends.

- It cannot meet the requirements for active‑active NVAs with automatic failover.

**Option D. Add two load balancing rules that have HA Ports enabled and Floating IP disabled**

- Incorrect because disabling **Floating IP** prevents seamless failover.

- NVAs in active‑active mode require Floating IP to allow traffic redirection without session interruption.

**Option E. Add a frontend IP configuration, a backend pool, and a health probe**

- Incorrect because only **one backend pool** is defined here.

- The scenario requires **two backend pools** to balance traffic to two different services with distinct IP addresses.

---

### Question 15

Your on‑premise network consists of two servers named Serve1 and Serve2, both running Windows Server 2019 Datacenter. On Serve1, a file exists named file1.txt. On Serve2, a file exists also named file1.txt, but its contents are different. You set up a file sync service in Azure to sync the folders that contain both versions of file1.txt to a cloud endpoint. First, you setup Serve1 as a server endpoint, then a few hours later, Serve2. What will happen to file1.txt?

**Options:**

- **A.** file1.txt on Serve1 will be moved to another folder
- **B.** file1.txt from Serve1 is renamed file1-Serve1.txt ✅
- **C.** file1.txt will be overwritten as soon as Serve2 server endpoint is added
- **D.** file1.txt on Serve1 will be renamed file1-old.txt

**Correct answer:** B

**Explanation:**

### Correct

**Option B. file1.txt from Serve1 is renamed file1‑Serve1.txt** This is correct. Azure File Sync detects conflicts when files with the same name but different contents exist across endpoints. To preserve both versions, the service renames one of the files (in this case, the earlier one from Serve1) to include the server name suffix. This ensures no data loss and both versions remain accessible.

### Incorrect

**Option A. file1.txt on Serve1 will be moved to another folder** Incorrect because Azure File Sync does not move files into separate folders to resolve conflicts. It uses renaming conventions instead.

**Option C. file1.txt will be overwritten as soon as Serve2 server endpoint is added** Incorrect because Azure File Sync does not overwrite conflicting files automatically. It preserves both versions by renaming one of them.

**Option D. file1.txt on Serve1 will be renamed file1‑old.txt** Incorrect because the renaming convention is not “‑old.txt.” Azure File Sync specifically appends the server name to the file to indicate the source of the conflict.

---

### Question 16

You have two Azure virtual networks named VNet1 and VNet2. VNet1 contains an Azure virtual machine named VM1. VNet2 contains an Azure virtual machine named VM2.

VM1 hosts a frontend application that connects to VM2 to retrieve data.

Users report that the frontend application is slower than usual.

You need to view the average round-trip time (RTT) of the packets from VM1 to VM2.

Which Azure Network Watcher feature should you use?

**Options:**

- **A.** IP flow verify
- **B.** Connection troubleshoot
- **C.** Connection monitor ✅
- **D.** NSG flow logs

**Correct answer:** C

**Explanation:**

Connection Monitor provides you RTT values on a per-minute granularity. The connection monitor capability monitors communication at a regular interval and informs you of reachability, latency, and network topology changes between the VM and the endpoint.

https://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-monitoring-overview#monitoring

INCORRECT ANSWERS:

IP flow verify — IP flow verify checks if a packet is allowed or denied to or from a virtual machine.

Connection troubleshoot — Enable you to troubleshoot network performance and connectivity issues in Azure

NSG flow logs — allows you to log information about IP traffic flowing through an NSG.

---

### Question 17

You deploy an Azure virtual machine named VM1 that is configured to analyze network traffic.

You need to ensure that all network traffic is routed through VM1.

What should you configure?

**Options:**

- **A.** a system route
- **B.** a network security group (NSG)
- **C.** a user-defined route ✅

**Correct answer:** C

**Explanation:**

Azure routes traffic between all subnets within a virtual network, by default. You can create your own routes to override Azure’s default routing. Custom routes are helpful when, for example, you want to route traffic between subnets through a network virtual appliance (NVA).

https://docs.microsoft.com/en-us/azure/virtual-network/tutorial-create-route-table-portal

INCORRECT ANSWERS:

a system route – Azure automatically creates system routes and assigns the routes to each subnet in a virtual network. You can’t create system routes, nor can you remove system routes

a network security group (NSG)  NSGs are used to control traffic between VMs or networks.

---

### Question 18

You have an Azure subscription. You need to transfer 34TB of data from an on-premise Windows 2016 server to your Azure storage account. You need to ensure that the data transfer has zero impact on the network, preserves your existing drives and is the fastest and most secure method. What should be your first step?

**Options:**

- **A.** Start an Import Job via the Azure Portal
- **B.** Order an Azure Databox via the Azure Portal ✅
- **C.** Open a ticket with Microsoft Support
- **D.** Prepare your hard drives using the WAImportExport tool

**Correct answer:** B

**Explanation:**

The Microsoft Azure Data Box cloud solution lets you send terabytes of data into and out of Azure in a quick, inexpensive, and reliable way.

https://docs.microsoft.com/en-us/azure/databox/data-box-overview

INCORRECT ANSWERS:

Start an Import Job via the Azure Portal  This is required for disk shipment that does not support the volume of data in the question.

Open a ticket with Microsoft Support  MS support not required.

Prepare your hard drives using the WAImportExport tool – This is required for disk shipment that does not support the volume of data in the question.

---

### Question 19

You plan to deploy five virtual machines to a virtual network subnet. Each virtual machine will have a public IP address and a private IP address. Each virtual machine requires the same inbound and outbound security rules. What is the minimum number of network interfaces and network security groups that you require?

**Options:**

- **A.** Network Interfaces: 5 ✅
- **B.** Network Interfaces: 10
- **C.** Network Interfaces: 15
- **D.** Network Security Groups: 1 ✅
- **E.** Network Security Groups: 5
- **F.** Network Security Groups: 10

**Correct answer:** A, D

**Explanation:**

### Correct

**Option A. Network Interfaces: 5**

**Option D. Network Security Groups: 1**

**Explanation:**

- Each VM in Azure requires **at least one network interface (NIC)** to connect to a subnet. Since there are **five VMs**, you need **five NICs**.

- Each NIC can be associated with both a private IP and a public IP, so you don’t need multiple NICs per VM.

- Because all VMs require the **same inbound and outbound security rules**, you can create **one Network Security Group (NSG)** and associate it with either the subnet or each NIC. This ensures consistent security across all five VMs.

- Therefore, the minimum required is **5 NICs and 1 NSG**.

### Incorrect

**Option B. Network Interfaces: 10**

- Incorrect because you don’t need two NICs per VM. A single NIC can handle both private and public IP addresses.

**Option C. Network Interfaces: 15**

- Incorrect because assigning three NICs per VM is unnecessary. One NIC per VM is sufficient.

**Option E. Network Security Groups: 5**

- Incorrect because you don’t need a separate NSG for each VM. One NSG can be reused across multiple NICs or applied at the subnet level.

**Option F. Network Security Groups: 10**

- Incorrect because this would be excessive and redundant. The same rules can be applied with a single NSG.

---

### Question 20

You need to deploy two Azure virtual machines named VM1 and VM2 based on the Windows server 2016. The deployment must meet the following requirements:

Provide a Service Level Agreement (SLA) of 99.95 percent availability.

Use managed disks

You propose a solution to create a Traffic Manager for the requirement.

Would the solution meet the goal?

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

Azure Traffic manager is used for traffic distribution based on DNS queries. For achieving high availability, you need to use Availability sets.

For more information on Azure Traffic Manager, please visit the below URL

https://docs.microsoft.com/en-us/azure/traffic-manager/traffic-manager-overview

---

### Question 21

You have an Azure subscription named Subscription1.

You create an Azure Storage account named storageaccount1, and then you create a file share named data.

Which UNC path should you include in a script that references files from the data file share?

**Options:**

- **A.** \\storageaccount1.file.core.windows.net\data ✅
- **B.** \\storageaccount1.blob.core.windows.net\data
- **C.** \\subscription1.file.core.windows.net\storageaccount1\data
- **D.** \\subscription1.blob.core.windows.net\storageaccount1\data

**Correct answer:** A

**Explanation:**

The UNC path format is \\.file.core.windows.net\. For example: \\anexampleaccountname.file.core.windows.net\example-share-name.

https://docs.microsoft.com/en-us/azure/storage/files/storage-how-to-use-files-windows

---

### Question 22

You have an Azure web app named webapp1.

You have a virtual network named VNET1 and an Azure virtual machine named VM1 that hosts a MySQL database. VM1 connects to VNET1.

You need to ensure that webapp1 can access the data hosted on VM1.

What should you do?

**Options:**

- **A.** Deploy an internal load balancer
- **B.** Peer VNET1 to another virtual network
- **C.** Connect webapp1 to VNET1 ✅
- **D.** Deploy an Azure Application Gateway

**Correct answer:** C

**Explanation:**

The VNet Integration feature enables your apps to access resources in or through a VNet. The VNet Integration feature has two variations:

· Regional VNet Integration: When you connect to Azure Resource Manager virtual networks in the same region, you must have a dedicated subnet in the VNet you’re integrating with.

· Gateway-required VNet Integration: When you connect to VNet in other regions or to a classic virtual network in the same region, you need an Azure Virtual Network gateway provisioned in the target VNet.

https://docs.microsoft.com/en-us/azure/app-service/web-sites-integrate-with-vnet

INCORRECT ANSWERS:

Deploy an internal load balancer  Internal load balancer is to load balance traffic.

Peer VNET1 to another virtual network  VNET peering enables to connect VNET1 to another virtual network.

Deploy an Azure Application Gateway  It is a web traffic load balancer

---

### Question 23

You have a public load balancer that balances ports 80 and 443 across three virtual machines.

You need to direct all the Remote Desktop Protocol (RDP) connections to VM3 only.

What should you configure?

**Options:**

- **A.** a new public load balancer for VM3
- **B.** an inbound NAT rule ✅
- **C.** a frontend IP configuration
- **D.** a load balancing rule

**Correct answer:** B

**Explanation:**

Port forwarding lets you connect to virtual machines (VMs) in an Azure virtual network by using an Azure Load Balancer public IP address and port number. To set up port forwarding on an Azure Load Balancer, you must create inbound NAT port-forwarding rules.

https://docs.microsoft.com/en-us/azure/load-balancer/tutorial-load-balancer-port-forwarding-portal

INCORRECT ANSWERS:

a new public load balancer for VM3  We already have a public load balancer.

a frontend IP configuration  Frontend IP configuration allows you to configure a public IP address for the load balancer.

a load balancing rule – A load balancer rule is used to define how incoming traffic is distributed to the all the instances within the backend pool.

---

### Question 24

You have an Azure subscription named **Subscription1** that contains the resources shown in the table. In **storage1**, you create a blob container named **blob1** and a file share named **share1**. **Which resources can be backed up to Vault1?**

In storage1, you create a blob container named blob1 and a file share named share1.

Which resources can be backed up to Vault1?

**Options:**

- **A.** VM1 only ✅
- **B.** VM1 and share1 only
- **C.** VM1 and SQL1 only
- **D.** VM1, storage1 and SQL1 only
- **E.** VM1, blob1, share1 and SQL1

**Correct answer:** A

**Explanation:**

### **Correct**

- **Option A. VM1 only**

- Correct: Azure Backup supports backing up **Azure VMs** directly to a Recovery Services vault.

- In this scenario, **Vault1** can back up **VM1**.

- Blob containers (blob1) and SQL databases (SQL1) cannot be backed up directly to a Recovery Services vault. File shares (share1) can be backed up, but only to a **Backup vault**, not a Recovery Services vault.

### **Incorrect**

- **Option B. VM1 and share1 only**

- Incorrect: File shares can be backed up, but only to a **Backup vault**, not to a Recovery Services vault.

- **Option C. VM1 and SQL1 only**

- Incorrect: SQL databases in Azure are protected differently (via Azure SQL built‑in backup or long‑term retention). They are not backed up to Recovery Services vaults in this way.

- **Option D. VM1, storage1 and SQL1 only**

- Incorrect: Storage accounts themselves are not backed up to Recovery Services vaults. SQL1 also cannot be backed up here.

- **Option E. VM1, blob1, share1 and SQL1**

- Incorrect: Blob containers and SQL databases are not supported in Recovery Services vault backups. File shares require a Backup vault, not Recovery Services vault.

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

### Question 26

You have an Azure subscription named **Subscription1**. You have **5 TB of data** that you need to transfer to Subscription1. You plan to use an **Azure Import/Export job**. What can you use as the destination of the imported data?

**Options:**

- **A.** a virtual machine
- **B.** an Azure Cosmos DB database
- **C.** Azure File Storage ✅
- **D.** the Azure File Sync Storage Sync Service

**Correct answer:** C

**Explanation:**

### **Correct**

- **Option C. Azure File Storage**

- Correct because the **Azure Import/Export service** supports importing data directly into **Azure Storage accounts** (Blob storage or Azure Files).

- This is the intended destination for bulk offline data transfer jobs.

- With 5 TB of data, Azure File Storage is a valid and supported target.

### **Incorrect**

- **Option A. a virtual machine**

- Incorrect because Import/Export jobs cannot write directly to a VM. Data must first be imported into Azure Storage, and then a VM can access it if needed.

- **Option B. an Azure Cosmos DB database**

- Incorrect because Cosmos DB is not supported as a direct destination for Import/Export jobs. Data must be ingested into Cosmos DB through supported APIs or migration tools after being staged in Azure Storage.

- **Option D. the Azure File Sync Storage Sync Service**

- Incorrect because Azure File Sync is used to synchronize on‑premises file servers with Azure Files. It is not a direct destination for Import/Export jobs.

---

### Question 27

You have an Azure subscription.

You create the Azure Storage account shown in the following exhibit.

The minimum number of copies of the data that storage account will contain?

**Options:**

- **A.** 1
- **B.** 2
- **C.** 3 ✅
- **D.** 4

**Correct answer:** C

**Explanation:**

The replication configured for the storage account is LRS.

Locally redundant storage (LRS) copies your data synchronously three times within a single physical location in the primary region. LRS is the least expensive replication option, but is not recommended for applications requiring high availability.

https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy

---

### Question 28

You have an Azure subscription.

You create the Azure Storage account shown in the following exhibit.

To reduce the cost of infrequently accessed data in the storage account, you must modify which setting?

**Options:**

- **A.** Access tier ✅
- **B.** Performance
- **C.** Account Kind
- **D.** Replication

**Correct answer:** A

**Explanation:**

Azure storage offers different access tiers, which allow you to store blob object data in the most cost-effective manner. The available access tiers include:

· Hot – Optimized for storing data that is accessed frequently.

· Cool – Optimized for storing data that is infrequently accessed and stored for at least 30 days.

· Archive – Optimized for storing data that is rarely accessed and stored for at least 180 days with flexible latency requirements (on the order of hours).

To reduce the costs, you can change the access tier to cool or archive.

https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-storage-tiers?tabs=azure-portal

---

### Question 29

You have an Azure subscription named **Subscription1**. You have **5 TB of data** that you need to transfer to Subscription1. You plan to use an **Azure Import/Export job**.

**What can you use as the destination of the imported data?**

**Options:**

- **A.** an Azure Cosmos DB database
- **B.** Azure Blob storage ✅
- **C.** Azure Data Lake Store
- **D.** the Azure File Sync Storage Sync Service

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Azure Blob storage**

- This is correct because the **Azure Import/Export service** supports importing data directly into **Azure Blob storage**.

- You ship encrypted hard drives to Microsoft, and the data is copied into your designated Blob storage account.

- Blob storage is the supported destination for large-scale offline data transfer.

### Incorrect

**Option A. An Azure Cosmos DB database**

- Incorrect because Import/Export does not support Cosmos DB as a destination.

- Cosmos DB requires data migration tools or APIs, not offline disk shipping.

**Option C. Azure Data Lake Store**

- Incorrect because Import/Export jobs cannot directly import into Data Lake Store.

- You would first import into Blob storage and then move data into Data Lake using other services (like Azure Data Factory).

**Option D. The Azure File Sync Storage Sync Service**

- Incorrect because Azure File Sync is used to synchronize on-premises file servers with Azure Files.

- It is not a destination for Import/Export jobs.

---

### Question 30

You have an on-premises server that contains a folder named D:\Important_Data.

You need to copy the contents of D:\Important_Data to the public container in an Azure Storage account named az104data.

Which command should you run?

**Options:**

- **A.** https://az104data.blob.core.windows.net/public
- **B.** azcopy sync D:\Important_Data https://az104data.blob.core.windows.net/public --snapshot
- **C.** azcopy copy D:\Important_Data https://az104data.blob.core.windows.net/public --recursive ✅
- **D.** az storage blob copy start-batch D:\Important_Data https://az104data.blob.core.windows.net/public

**Correct answer:** C

**Explanation:**

The azcopy copy command copies a directory (and all of the files in that directory) to a blob container. The result is a directory in the container by the same name.

Reference:

https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs

Quick Preview:

---

### Question 31

**Your company has an Azure account and a subscription. The subscription contains the virtual networks in the following table.** **Does the proposed configuration meet the goal?**

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because in Azure, virtual networks must have **non‑overlapping address spaces** to be peered or used together without routing conflicts.

- If the table shows overlapping ranges (e.g., 10.1.0.0/16 and another subnet that falls inside this range), the configuration will not meet the goal.

- Therefore, the answer is **No**, since the setup does not satisfy Azure’s requirements for proper VNet configuration.

### Incorrect

**Option A. Yes**

- Incorrect because answering “Yes” would imply that the configuration is valid.

- In reality, overlapping address spaces prevent successful VNet peering or proper subnet allocation, so the goal is not met.

###

---

### Question 32

You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates.

You need to view the date and time when the resources were created in RG1.

Solution: From the Subscriptions blade, you select the subscription, and then click Resource providers.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

From the RG1 blade, click Deployments. You see a history of deployments to the resource group.

https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-tutorial-create-first-template?tabs=azure-powershell

---

### Question 33

**You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates.** **You need to view the date and time when the resources were created in RG1.** **Solution: From the Subscriptions blade, you select the subscription, and then click Programmatic deployment.** **Does this meet the goal?**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because selecting **Programmatic deployment** from the Subscriptions blade shows information about **deployment scripts and automation**, not the creation timestamps of individual resources.

- To view the date and time when resources were created, you should check the **Activity Log** or the **Resource properties** in the resource group.

- Therefore, this solution does **not** meet the stated goal.

### Incorrect

**Option A. Yes**

- Incorrect because answering “Yes” implies that Programmatic deployment provides resource creation details.

- This is not true; Programmatic deployment is used to review template deployments, not to show the exact creation date/time of resources.

- The exam trap here is confusing deployment history with resource creation metadata.

###

---

### Question 34

**You have an on‑premises file server named Server1 that runs Windows Server 2016. You have an Azure subscription that contains an Azure file share. You deploy an Azure File Sync Storage Sync Service, and you create a sync group. You need to synchronize files from Server1 to Azure. Which three actions should you perform in sequence?**

**Options:**

- **A.** A. Create an Azure on-premises data gateway
Install the DFS replication server role on Server1
Create a Recovery Services vault
- **B.** Install the Azure File Sync agent on Server1
B. Register Server1
Add a server endpoint ✅
- **C.** C. Create an Azure on-premises data gateway
Register Server1
Add a server endpoint

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Install the Azure File Sync agent → Register Server1 → Add a server endpoint**

- Correct because these are the **required steps** for enabling synchronization between an on‑premises file server and Azure File Sync:

- **Install the Azure File Sync agent** on Server1 to enable communication with the Azure Storage Sync Service.

- **Register Server1** with the Storage Sync Service so it becomes part of the sync group.

- **Add a server endpoint** to define the local path on Server1 that will sync with the Azure file share.

- This sequence ensures proper synchronization and management of files between on‑premises and Azure.

### Incorrect

**Option A. Data gateway + DFS replication + Recovery Services vault**

- Incorrect because Azure File Sync does not require an **on‑premises data gateway** or **DFS replication**.

- A Recovery Services vault is used for **backup**, not for file synchronization.

**Option C. Data gateway + Register Server1 + Add server endpoint**

- Incorrect because the **Azure on‑premises data gateway** is unrelated to Azure File Sync.

- Without installing the **Azure File Sync agent**, Server1 cannot be registered or connected to the sync group.

---

### Question 35

You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates.

You need to view the date and time when the resources were created in RG1.

Solution: From the RG1 blade, you click Automation script.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

From the RG1 blade, click Deployments. You see a history of deployments to the resource group.

https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-tutorial-create-first-template?tabs=azure-powershell

---

### Question 36

You are using an Azure subscription with data deployed in the following Azure services:

You plan to export data by using Azure Import/Export job named DataExport.

Which data can be exported by using DataExport?

**Options:**

- **A.** DB1
- **B.** Container1 ✅
- **C.** Share1
- **D.** Table1

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Container1**

- Correct because the **Azure Import/Export service** supports importing and exporting data **only from Azure Blob Storage containers**.

- You can ship drives to Microsoft to transfer large amounts of data into or out of Blob Storage.

- This matches the requirement: Container1 (a blob container) can be exported using DataExport.

### Incorrect

**Option A. DB1**

- Incorrect because Azure Import/Export does not support exporting data directly from **Azure SQL Database**.

- Database exports must be handled through **bacpac files** or backup/restore operations, not Import/Export jobs.

**Option C. Share1**

- Incorrect because **Azure Files (file shares)** are not supported by Import/Export.

- To move Azure Files data, you would use **AzCopy** or **Azure File Sync**, not Import/Export.

**Option D. Table1**

- Incorrect because **Azure Table Storage** is not supported by Import/Export.

- Table data can be exported using APIs, AzCopy, or other migration tools, but not via Import/Export jobs.

###

---

### Question 37

Your company has an Azure account and subscription. A virtual machine named demovm is created as part of the subscription. There is a requirement to protect the virtual machine using Azure Backup. You need to apply a rule that the backup’s must be created everyday at 12:00 and stored for a minimum of 45 days. Which of the following is used to store the backup’s?

**Options:**

- **A.** A. Blob container
- **B.** B. File share
- **C.** C. Recovery Services vault ✅
- **D.** D. Storage account

**Correct answer:** C

**Explanation:**

This is clearly given in the Microsoft documentation wherein, in order to back up a VM, you have to first create a recovery services vault.

Since this is clearly mentioned in the documentation, all other options are incorrect

For more information on backup of a VM, please visit the below URL

https://docs.microsoft.com/en-us/azure/backup/quick-backup-vm-portal

---

### Question 38

Your company has an Azure account and subscription. A virtual machine named demovm is created as part of the subscription. There is a requirement to protect the virtual machine using Azure Backup. You need to apply a rule that the backup’s must be created every day at 12:00 and stored for a minimum of 45 days. Which of the following can be used to configure the backup rule?

**Options:**

- **A.** A. A backup policy ✅
- **B.** B. A batch job
- **C.** C. A batch schedule
- **D.** D. A recovery plan

**Correct answer:** A

**Explanation:**

The Microsoft documentation clearly mentions that you need to specify all the schedule information in the backup policy

Since this is clearly mentioned in the documentation, all other options are incorrect

For more information on the backup policies, please visit the below URL

https://docs.microsoft.com/en-us/azure/backup/backup-azure-manage-vms#manage-backup-policies

---

### Question 39

You have created a storage account named skillcertlabstore. You have created a file share named demo using the file service. You need to ensure that users can connect to the file share from their home computers. Which of the following port should be open to ensure the connectivity?

**Options:**

- **A.** A. 80
- **B.** B. 443
- **C.** C. 445 ✅
- **D.** D. 3389

**Correct answer:** C

**Explanation:**

This is clearly given in the Microsoft documentation

For more information on using file shares in Azure, please visit the below URL

https://docs.microsoft.com/en-us/azure/storage/files/storage-how-to-use-files-windows

---

### Question 40

**A company has created a storage account in their Azure subscription. The name of the storage account is **skillcertlabstore**. They have also created a file share named **demo**. They need to access the files. Which endpoint should be used?**

**Options:**

- **A.** A. blob
- **B.** B. blob.core.windows.net
- **C.** C. portal.azure.com
- **D.** D. file
- **E.** E. file.core.windows.net
- **F.** F. skillcertlabstore ✅

**Correct answer:** F

**Explanation:**

### Correct

**Option F. skillcertlabstore**

- Correct because the **storage account name** (skillcertlabstore) is required in the UNC path to access the Azure file share.

- The full path to access the file share would be: \\skillcertlabstore.file.core.windows.net\demo

- Without the storage account name, the endpoint cannot resolve to the correct file share.

### Incorrect

**Option A. blob**

- Incorrect because blob refers to Blob storage, not File storage.

- File shares cannot be accessed using the blob endpoint.

**Option B. blob.core.windows.net**

- Incorrect because this is the endpoint for Blob containers, not file shares.

**Option C. portal.azure.com**

- Incorrect because this is the Azure Portal URL, used for management, not for direct file share access.

**Option D. file**

- Incorrect because file alone is incomplete. It must be combined with the storage account name and domain.

**Option E. file.core.windows.net**

- Incorrect because while this is the correct domain for Azure Files, it is incomplete without the **storage account name** (skillcertlabstore).

###

---

### Question 41

You have an Azure web app named App-01. App-01 has the deployment slots shown in the following table:

In Webapp-01-Test, you test several changes to App-01. You back up App-01. You swap Webapp-01-Test for Webapp-01-Prod and discover that App-01 is experiencing performance issues.

You need to revert to the previous version of App-01 as quickly as possible. What should you do?

**Options:**

- **A.** Redeploy App-01
- **B.** Swap the slots ✅
- **C.** Clone App-01
- **D.** Restore the backup of App-01

**Correct answer:** B

**Explanation:**

When you swap deployment slots, Azure swaps the Virtual IP addresses of the source and destination slots, thereby swapping the URLs of the slots. We can easily revert the deployment by swapping back.

Reference:

https://docs.microsoft.com/en-us/azure/app-service/deploy-staging-slots

Quick Preview:

---

### Question 42

**A company has created a storage account in their Azure subscription. The name of the storage account is **skillcertlabstore**. They have also created a file share named **demo**. They need to access the files. Which endpoint should be used?**

**Options:**

- **A.** A. blob
- **B.** B. blob.core.windows.net
- **C.** C. portal.azure.com
- **D.** D. file
- **E.** E. file.core.windows.net ✅
- **F.** F. skillcertlabstore

**Correct answer:** E

**Explanation:**

### Correct

**Option E. file.core.windows.net**

- Correct because Azure **File shares** are accessed via the **file.core.windows.net** endpoint.

- The full UNC path would be: \\skillcertlabstore.file.core.windows.net\demo

- This is the proper way to access Azure Files, ensuring connectivity to the file share.

### Incorrect

**Option A. blob**

- Incorrect because **blob** refers to Blob storage, not File storage.

- Blob storage is used for unstructured data, not file shares.

**Option B. blob.core.windows.net**

- Incorrect because this is the endpoint for **Blob storage containers**, not file shares.

**Option C. portal.azure.com**

- Incorrect because this is the Azure Portal URL, used for management, not for accessing file shares directly.

**Option D. file**

- Incorrect because file alone is incomplete. The correct endpoint must be file.core.windows.net.

**Option F. skillcertlabstore**

- Incorrect because this is just the **storage account name**, not the endpoint.

- It must be combined with the correct domain (file.core.windows.net) to form the full path.

###

---

### Question 43

You have an Azure Storage account named storage-01. You plan to use AzCopy to copy data to storage-01.

Which of the following are valid storage services in storage-01 that you can copy data to?

**Options:**

- **A.** blob, file, table, and queue
- **B.** blob and file only ✅
- **C.** file and table only
- **D.** file only
- **E.** blob, table, and queue only

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Blob and file only**

- AzCopy is a command-line utility designed specifically for copying data **to and from Azure Blob Storage and Azure File Storage**.

- It does **not** support copying directly to Table storage or Queue storage.

- Therefore, the valid services for AzCopy in this context are **Blob** and **File**.

### Incorrect

**Option A. Blob, file, table, and queue**

- Incorrect because AzCopy does not support Table or Queue storage.

- Including all four services is misleading.

**Option C. File and table only**

- Incorrect because AzCopy supports File but not Table.

- Table storage is excluded from AzCopy operations.

**Option D. File only**

- Incorrect because AzCopy supports both Blob and File, not just File.

- Limiting to File alone ignores Blob support.

**Option E. Blob, table, and queue only**

- Incorrect because Blob is supported, but Table and Queue are not.

- This option mixes valid and invalid services.

---

### Question 44

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

You have an Azure virtual machine named VM1 that runs Windows Server 2016. You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.

Solution: You create an Azure storage account and configure shared access signatures (SASs). You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the storage account as the source.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Events are not be stored in a pure storage account. Instead, you create an Azure Log Analytics workspace and configure the data settings. You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source.

Reference:

https://docs.microsoft.com/en-us/azure/azure-monitor/platform/agents-overview

Quick Preview:

---

### Question 45

You have deployed in Azure an application App1, on two Azure virtual machines named VM1 and VM2. You plan to implement an Azure Availability Set for App1. The solution must ensure that App1 is available during planned maintenance of the servers hosting VM1 and VM2.

What should you include in the Availability Set?

**Options:**

- **A.** one update domain
- **B.** two fault domains
- **C.** one fault domain
- **D.** two update domains ✅

**Correct answer:** D

**Explanation:**

From time to time, Microsoft runs planned maintenance events in order to update their hardware and software. Sometimes, the servers need to be rebooted during the maintenance events, which means that VMs running on these servers will be rebooted as well.

In order to avoid having both VMs rebooted at the same time, you can include two update domains in your availability set configuration. Each VM will be part of a different update domain. A rebooted update domain is given 30 minutes to recover before maintenance is initiated on a different update domain.

Reference:

https://docs.microsoft.com/en-us/azure/virtual-machines/manage-availability

Quick Preview:

---

### Question 46

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

You have an Azure virtual machine named VM1 that runs Windows Server 2016. You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.

Solution: You create an event subscription on VM1. You create an alert in Azure Monitor and specify VM1 as the source.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Proposed solution is not related to what needs to be implemented.

Azure Event Grid allows you to easily build applications with event-based architectures. A subscription tells Event Grid which events on a topic you’re interested in receiving.

Instead, you create an Azure Log Analytics workspace and configure the data settings. You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source.

Reference:

https://docs.microsoft.com/en-us/azure/event-grid/concepts

https://docs.microsoft.com/en-us/azure/azure-monitor/platform/agents-overview

Quick Preview:

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

### Question 48

You have an Azure subscription that contains resources. You need to configure **Azure Backup reports** for **Recovery-Vault-1**. You are configuring the **Diagnostics settings** for the **AzureBackupReports log**. Which Log Analytics workspaces can you use for the Azure Backup reports of Recovery-Vault-1?

- 

You need to configure Azure Backup reports for Recovery-Vault-1.You are configuring the Diagnostics settings for the AzureBackupReports log.

Which Log Analytics workspaces can you use for the Azure Backup reports of Recovery-Vault-1?

**Options:**

- **A.** LAW1
- **B.** LAW2
- **C.** LAW3
- **D.** LAW1, LAW2 and LAW3 ✅

**Correct answer:** D

**Explanation:**

### Correct

**Option D. LAW1, LAW2 and LAW3** Correct. Azure Backup reports can send diagnostic data to **any Log Analytics workspace** within the same subscription and region. Recovery Services vaults are not restricted to a single workspace; you can configure them to send logs to multiple eligible workspaces. Therefore, all listed workspaces (LAW1, LAW2, LAW3) can be used.

### Incorrect

**Option A. LAW1** Incorrect. While LAW1 may be valid, selecting only one workspace ignores the fact that **all three workspaces are eligible**.

**Option B. LAW2** Incorrect. LAW2 alone is valid but incomplete. The question requires identifying all possible workspaces.

**Option C. LAW3** Incorrect. LAW3 alone is also valid but incomplete.

###

---

### Question 49

You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template.

You need to ensure that NGINX is available on all the virtual machines after they are deployed.

What should you use?

**Options:**

- **A.** the Publish-AzVMDscConfiguration cmdlet
- **B.** Azure Application Insights
- **C.** Azure Custom Script Extension ✅
- **D.** the New-AzConfigurationAssignement cmdlet

**Correct answer:** C

**Explanation:**

The Custom Script Extension downloads and executes scripts on Azure virtual machines. This extension is useful for post deployment configuration, software installation, or any other configuration or management tasks.

https://docs.microsoft.com/en-us/azure/virtual-machines/extensions/custom-script-windows#prerequisites

INCORRECT ANSWERS:

the Publish-AzVMDscConfiguration cmdlet  This command uploads a DSC script to Azure blob storage.

Azure Application Insights  This is the framework to monitor performance and log entries for an application in Azure.

the New-AzConfigurationAssignement cmdlet  This command registers maintenance configuration for resource.

---

### Question 50

You have the following peerings configured for vNET6, as shown in the following exhibit:

Hosts on vNET6 can communicate with hosts on ………. .

Please select the option that completes the statement successfully.

**Options:**

- **A.** vNET6 only ✅
- **B.** vNET6 and vNET1 only
- **C.** vNET6, vNET1 and vNET2 only
- **D.** all the virtual networks in the subscription

**Correct answer:** A

**Explanation:**

Peering status to both vNET1 and vNET2 is disconnected, hosts on vNET6 can communicate only to hosts on vNET6.

Further learning:

https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview

Quick Preview:

---

### Question 51

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

You have an Azure subscription named Subscription-Dev. Subscription-Dev contains a resource group named RG-01. RG-01 contains resources that were deployed by using templates.

You need to view the date and time when the resources were created in RG-01.

Solution: From the RG-01 blade, you click Deployments.

Does this meet the goal?

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

While you are in your RG-01 resource group blade, click Deployments. You will be able to see a history of your deployments for RG-01 resource group.

Reference:

https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/deployment-history?tabs=azure-portal

Quick Preview:

---

### Question 52

**A company is planning on deploying an application to a set of Virtual Machines in an Azure network. The company needs to have an SLA of 99.99% for the application hosted on the Virtual Machines. Which option ensures this requirement?**

**Options:**

- **A.** A. Make the virtual machines part of an availability set
- **B.** B. Deploy the virtual machines across availability zones ✅
- **C.** C. Assign a standard public IP address to the virtual machines
- **D.** D. Deploy single virtual machines across multiple regions

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Deploy the virtual machines across availability zones**

- Correct because Azure guarantees **99.99% SLA** when VMs are deployed across **Availability Zones** in the same region.

- This provides redundancy across physically separate datacenters, ensuring high availability even if one zone fails.

- Availability Zones are the only configuration that meets the 99.99% SLA requirement for VMs.

### Incorrect

**Option A. Availability set**

- Incorrect because VMs in an **Availability Set** only provide a **99.95% SLA**, not 99.99%.

- While it protects against hardware failures within a datacenter, it does not meet the higher SLA requirement.

**Option C. Standard public IP address**

- Incorrect because assigning a public IP does not affect SLA for VM availability.

- It only provides connectivity, not redundancy or uptime guarantees.

**Option D. Single VM across multiple regions**

- Incorrect because a single VM cannot span multiple regions.

- Deploying across regions requires separate VM deployments and does not provide a unified SLA of 99.99%.

---

### Question 53

You have an Azure subscription that contains 10 virtual machines on a virtual network.

You need to create a graph visualization to display the traffic flow between the virtual machines.

What should you do from Azure Monitor?

**Options:**

- **A.** From Activity log, use quick insights.
- **B.** From Metrics, create a chart.
- **C.** From Logs, create a new query.
- **D.** From Workbooks, create a workbook. ✅

**Correct answer:** D

**Explanation:**

Workbooks provide a flexible canvas for data analysis and the creation of rich visual reports within the Azure portal. They allow you to tap into multiple data sources from across Azure, and combine them into unified interactive experiences.

Workbooks are currently compatible with the following data sources:

Logs

Metrics

Azure Resource Graph

Alerts (Preview)

Workload Health

Azure Resource Health

Azure Data Explorer

https://docs.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview

Please note, you can also achieve this requirement using Logs by creating a new query. However, Microsoft provided workbooks as a way to go for visualizations.

INCORRECT ANSWERS:

From Activity log, use quick insights  Activity log provides activities performed on a resource

From Metrics, create a chart  Metrics provide usage metrics like CPU, Memory usage etc..

From Logs, create a new query – You can also achieve this requirement using Logs by creating a new query. However, Microsoft provided workbooks as a way to go for visualizations.

---

### Question 54

You have an Azure subscription with VM1. You need to create a daily backup at 11:00 PM and retain copies for 7 days. What two items are required to store the backup and configure the schedule?

**Options:**

- **A.** A Recovery Services Vault ✅
- **B.** A Batch File
- **C.** A Backup Policy ✅
- **D.** A Cron Job

**Correct answer:** A, C

**Explanation:**

### Correct

**Option A. A Recovery Services Vault**

- Correct because the **Recovery Services Vault** is the Azure resource used to store backups of VMs, files, and workloads.

- It provides centralized management, retention, and recovery capabilities.

- Without the vault, backups cannot be stored or managed.

**Option C. A Backup Policy**

- Correct because the **Backup Policy** defines the **schedule (11:00 PM daily)** and **retention period (7 days)**.

- Policies automate backup operations and ensure compliance with recovery requirements.

### Incorrect

**Option B. A Batch File**

- Incorrect because batch files are scripts used for automation at the OS level, not for configuring Azure VM backups.

- Azure Backup is managed through Recovery Services Vault and policies, not OS scripts.

**Option D. A Cron Job**

- Incorrect because cron jobs are Linux scheduling tools.

- Backup scheduling in Azure is handled by **Backup Policies**, not cron jobs.

###

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
