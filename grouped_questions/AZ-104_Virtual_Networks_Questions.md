# AZ-104 Practice Questions: Configure and Manage Virtual Networks

This document contains a curated subset of 407 questions extracted from the main practice set, specifically focusing on **Virtual Networks** (VNet Peering, Subnets, DNS Zones, Load Balancers, Application Gateways, NSGs, and Hybrid VPN/ExpressRoute Connectivity).

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

Traffic Analytics – It provides visibility into user and application activity in cloud networks.

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

five Azure Application Gateways – Application gateway is a traffic load balancer. It is not a pre-requisite to create web apps.

10 App Service plans – App service plan is mandatory to create a web app. However, 10 app service plans will increase the cost.

one Azure Traffic Manager – Traffic manager is also a load balancer, not a pre-requisite to create web apps.

one Azure Application Gateway – Application gateway is a traffic load balancer. It is not a pre-requisite to create web apps.

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

Modify the SOA record of preparationlabs.com – The DNS ‘start of authority’ (SOA) record stores important information about a domain or zone such as the email address of the administrator

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

a network security group (NSG) – NSG’s are used to control traffic between VM’s or networks.

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

Deploy an internal load balancer – Internal load balancer is to load balance traffic.

Peer VNET1 to another virtual network – VNET peering enables to connect VNET1 to another virtual network.

Deploy an Azure Application Gateway – It is a web traffic load balancer

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

a new public load balancer for VM3 – We already have a public load balancer.

a frontend IP configuration – Frontend IP configuration allows you to configure a public IP address for the load balancer.

a load balancing rule – A load balancer rule is used to define how incoming traffic is distributed to the all the instances within the backend pool.

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

From Activity log, use quick insights – Activity log provides activities performed on a resource

From Metrics, create a chart – Metrics provide usage metrics like CPU, Memory usage etc..

From Logs, create a new query – You can also achieve this requirement using Logs by creating a new query. However, Microsoft provided workbooks as a way to go for visualizations.

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

VM2: West US – The region does not match with VNET1 region

VM2_interface: West US – The region does not match with VNET1 region

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

## Practice Set 3

Source: https://skillcertpro.com/az-104-exam-questions/3/

### Question 13

You are implementing Azure Private Link for your Azure Storage accounts. How does Private Link enhance the security of your storage access compared to accessing it over the public internet?

**Options:**

- **A.** Provides a private endpoint ✅
- **B.** Increases bandwidth
- **C.** Uses public IP addresses
- **D.** Enforces TLS encryption

**Correct answer:** A

**Explanation:**

Azure Private Link enhances security by providing a private endpoint in your virtual network, ensuring data is accessed privately without exposure to the public internet.

---

### Question 20

You are deploying an Azure virtual network using an ARM template. You need to define a subnet within the virtual network and specify its address prefix. Which property or attribute within the virtual network resource definition would you use to configure the subnet?

**Options:**

- **A.** addressPrefixes
- **B.** addressSpace
- **C.** networkSecurityGroup
- **D.** subnets ✅

**Correct answer:** D

**Explanation:**

The ‘subnets‘ property within the virtual network resource definition is used to configure subnets and their address prefixes.

---

### Question 22

You are configuring Azure Bastion to provide secure access to virtual machines in a private subnet. How would you set up Azure Bastion and connect to VMs without exposing them to the public internet?

**Options:**

- **A.** B. Deploy Azure Bastion in the same private subnet as the VMs and configure a public IP address for it.
- **B.** A. Deploy Azure Bastion in a public subnet and allow inbound RDP/SSH traffic from any source.
- **C.** C. Deploy Azure Bastion in a dedicated subnet (AzureBastionSubnet) with a public IP address. Configure NSG rules to allow access to the Bastion host and restrict RDP/SSH traffic to the private subnet. ✅
- **D.** D. Connect to VMs directly using their private IP addresses from the internet.

**Correct answer:** C

**Explanation:**

Azure Bastion provides secure RDP/SSH access through a web browser. It eliminates the need to expose VMs to the internet, enhancing security.

---

### Question 23

You are troubleshooting network connectivity issues with an Azure VM. Which Azure tools or features can you use to diagnose network problems, trace routes, and verify network settings for the VM?

**Options:**

- **A.** Network Watcher ✅
- **B.** Traffic Manager
- **C.** Application Gateway
- **D.** VPN Gateway

**Correct answer:** A

**Explanation:**

Network Watcher provides a comprehensive set of tools for diagnosing and resolving network issues in Azure VMs.

---

### Question 27

**Your company currently has a Virtual Network defined in Azure. The Virtual Network has a default subnet that contains 2 Virtual Machines named **demovm** and **demovm1**. There is a requirement to inspect all traffic between the Virtual Machines. Can this be achieved?**

**Options:**

- **A.** A. Yes ✅
- **B.** B. No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- Correct because Azure provides the ability to inspect traffic between VMs using **Network Security Group (NSG) flow logs**, **Azure Network Watcher packet capture**, or by deploying a **Network Virtual Appliance (NVA)** such as a firewall.

- These tools allow administrators to monitor and inspect traffic flowing between VMs in the same subnet.

### Incorrect

**Option B. No**

- Incorrect because it is indeed possible to inspect traffic between VMs in Azure.

- Azure networking features explicitly support traffic monitoring and inspection, so answering “No” would be wrong.

---

### Question 32

**Your company has an Azure account and an Azure subscription. They have created a Virtual Network named **skillcertlabs-net**. The following users have been set up with roles. Which users can manage the virtual network?**

**Options:**

- **A.** A. skillcertlabs-usr1 only
- **B.** B. skillcertlabs-usr2 only
- **C.** C. skillcertlabs-usr3 only
- **D.** D. skillcertlabs-usr1 and skillcertlabs-usr2 only
- **E.** E. skillcertlabs-usr1 and skillcertlabs-usr3 only ✅
- **F.** F. skillcertlabs-usr2 and skillcertlabs-usr3 only

**Correct answer:** E

**Explanation:**

### Correct

**Option E. skillcertlabs‑usr1 and skillcertlabs‑usr3 only**

- Correct because:

- **skillcertlabs‑usr1** is assigned the **Owner** role, which grants full permissions to manage all resources, including virtual networks.

- **skillcertlabs‑usr3** is assigned the **Contributor** role, which allows creating, managing, and modifying resources (including resizing, configuring, and deleting the virtual network).

- Together, these two users have the necessary permissions to manage the virtual network.

### Incorrect

**Option A. skillcertlabs‑usr1 only**

- Incorrect because while User1 (Owner) can manage the VNet, this option ignores User3 (Contributor), who also has sufficient permissions.

**Option B. skillcertlabs‑usr2 only**

- Incorrect because User2 has the **Reader** role, which only allows viewing resources. They cannot make changes to the virtual network.

**Option C. skillcertlabs‑usr3 only**

- Incorrect because while User3 (Contributor) can manage the VNet, this option ignores User1 (Owner), who also has full permissions.

**Option D. skillcertlabs‑usr1 and skillcertlabs‑usr2 only**

- Incorrect because User2 (Reader) cannot manage resources. Including them here makes the option invalid.

**Option F. skillcertlabs‑usr2 and skillcertlabs‑usr3 only**

- Incorrect because User2 (Reader) cannot manage the VNet. Only User3 has Contributor rights.

---

### Question 38

A company has an Azure subscription named skillcertlabstaging. They also have a resource group named skillcertlabs-rg. In the resource group they have created an internal load balancer named “skillcertlab-internal” and a public load balancer named “skillcertlab-public”. They want to give a user named “skillcertlabusr” permissions to configure both load balancers. The solution must follow the principle of least privilege.

Which role would you assign to the user to allow the addition of a health probe to the load balancer “skillcertlab-public”?

**Options:**

- **A.** A. Contributor role on skillcertlab-internal
- **B.** B. Network Contributor role on skillcertlab-internal
- **C.** C. Network Contributor role on skillcertlabs-rg ✅
- **D.** D. Owner role on skillcertlab-internal

**Correct answer:** C

**Explanation:**

To add a health probe, the user needs to have access to the IP address of virtual machine. And for this reason, the user also needs to have permission to read the details of the virtual machine.

All of the other options are incorrect since they don’t provide the relevant access to read the details of the virtual machine resource.

For more information on Role based access control, please visit the following URL

https://docs.microsoft.com/en-us/azure/role-based-access-control/overview

---

### Question 43

A company currently has an on-premise data center. The data center has 2 VPN devices. They also have setup a Virtual Network in Azure. They need to setup a site-to-site VPN connection. It needs to be ensured that if a single instance of an Azure gateway fails, or if a single on-premise VPN device fails, then the failure will not cause an interruption longer than 2 minutes.

Based on the requirement what is the minimum number of Local network gateways that would be required to be setup in Azure?

**Options:**

- **A.** A. 1
- **B.** B. 2 ✅
- **C.** C. 3
- **D.** D. 4

**Correct answer:** B

**Explanation:**

An example of high redundancy for VPN gateways is also given in the Microsoft documentation as shown below

Here you would need 2 local gateways, one for each VPN device.

For more information on VPN gateway high availability, please visit the below URL

https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-highlyavailable

---

### Question 46

**Your team is planning on creating an Internal Load Balancer. This load balancer will be used to distribute traffic to Azure Virtual Machines. You need to ensure that user requests are always mapped to the same VM. Which setting should you configure?**

**Options:**

- **A.** A. Set Session Persistence to None
- **B.** B. Set Session Persistence to Client IP ✅
- **C.** C. Create a health probe on port 80
- **D.** D. Enable Floating IP

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Set Session Persistence to Client IP**

- Correct because **Session Persistence (a.k.a. “affinity”)** ensures that requests from the same client IP are consistently directed to the same backend VM.

- This is required when applications need **stateful connections** (e.g., session data stored locally on the VM).

- Setting persistence to **Client IP** guarantees that user requests are always mapped to the same VM.

### Incorrect

**Option A. Set Session Persistence to None**

- Incorrect because with persistence set to None, requests are distributed randomly across backend VMs.

- This breaks session affinity and does not guarantee that a user request will always map to the same VM.

**Option C. Create a health probe on port 80**

- Incorrect because health probes are used to determine VM availability.

- While necessary for load balancer functionality, they do not control session persistence or guarantee mapping to the same VM.

**Option D. Enable Floating IP**

- Incorrect because Floating IP is used for **SQL Always On availability groups** or scenarios requiring direct VM IP mapping.

- It does not enforce session persistence for user requests.

###

---

### Question 56

**Your company has an Azure account and a subscription. The subscription contains the virtual networks in the following table.** **Can the configuration meet the requirement?**

The subscription also contains the virtual machines in the following table

The firewalls on all the virtual machines are configured to allow all ICMP traffic

You add the peerings in the following table.

VM2 can ping VM1

**Options:**

- **A.** A.Yes
- **B.** B.No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because the configuration described in the question (VNet address space and subnet ranges) does **not** support the requirement as stated.

- In AZ‑104, when asked about overlapping or invalid subnet/address space configurations, the answer is typically **No** if the ranges are not properly aligned or if the requirement cannot be met with the given setup.

- Azure requires valid, non‑overlapping address spaces and correctly defined subnets for VNets. If the table shows conflicting or invalid ranges, the requirement cannot be satisfied.

### Incorrect

**Option A. Yes**

- Incorrect because answering “Yes” implies that the current VNet and subnet configuration is valid and meets the requirement.

- This is not true if the address ranges overlap or are misconfigured.

- The exam trap here is assuming that any defined subnet/address space is automatically valid without checking for conflicts.

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

### Question 1

You have an Azure web app named webapp1.

You have a virtual network named VNET1 and an Azure virtual machine named VM1 that hosts a MySQL database. VM1 connects to VNET1.

You need to ensure that webapp1 can access the data hosted on VM1.

What should you do?

**Options:**

- **A.** Connect webapp1 to VNET1. ✅
- **B.** Deploy an internal load balancer.
- **C.** Peer VNET1 to another virtual network.
- **D.** Deploy an Azure Application Gateway.

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Connect webapp1 to VNET1**

- Correct because the web app must be able to communicate with the VM hosting the MySQL database over the **same virtual network**.

- By integrating webapp1 with VNET1 using **VNet integration**, the app can securely access VM1’s private IP address.

- This is the most direct and secure solution to allow connectivity between the web app and the VM database.

### Incorrect

**Option B. Deploy an internal load balancer**

- Incorrect because an internal load balancer distributes traffic among multiple VMs.

- In this case, there is only one VM hosting the database, so a load balancer is unnecessary.

**Option C. Peer VNET1 to another virtual network**

- Incorrect because peering is only required if the resources are in **different VNets**.

- Since both VM1 and the web app can be connected to the same VNet, peering is not needed.

**Option D. Deploy an Azure Application Gateway**

- Incorrect because Application Gateway is a **Layer 7 load balancer** used for web traffic management (HTTP/HTTPS).

- It is not designed for direct database connectivity between a web app and a VM.

---

### Question 3

You have an Azure subscription. The subscription contains virtual machines that connect to a virtual network named VNet1.

You plan to configure Azure Monitor for VM Insights.

You need to ensure that all the virtual machines only communicate with Azure Monitor through VNet1.

What should you create first?

**Options:**

- **A.** a private endpoint
- **B.** an Azure Monitor Private Link Scope (AMPLS) ✅
- **C.** a data collection rule (DCR)
- **D.** a Log Analytics workspace

**Correct answer:** B

**Explanation:**

**an Azure Monitor Private Link Scope (AMPLS)** is the **correct** answer because to ensure that virtual machines only communicate with Azure Monitor through the specified virtual network (VNet1), you need to set up a private link connection. An Azure Monitor Private Link Scope (AMPLS) allows you to create a private endpoint that enables secure communication between your virtual machines and Azure Monitor over the virtual network.

**a private endpoint** is **incorrect** because, while it is part of the setup, it must be associated with an AMPLS to connect the virtual machines to Azure Monitor privately. AMPLS is the primary requirement for establishing private connectivity.

**a data collection rule (DCR)** is **incorrect** because DCRs are used to define which data to collect from resources for Azure Monitor but do not control network connectivity or enable private communication with Azure Monitor.

**a Log Analytics workspace** is **incorrect** because, while required for Azure Monitor for VM Insights, it does not enable private connectivity with Azure Monitor. The AMPLS is necessary to restrict communication through VNet1.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/azure-monitor/logs/private-link-security#advantages

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

### Question 23

You plan to use Azure Network Watcher to perform the following task:

Identify a security rule that prevents a network packet from reaching an Azure virtual machine.

Which feature should you use for the above task?

**Options:**

- **A.** IP flow verify ✅
- **B.** Next hop
- **C.** Packet capture
- **D.** Traffic Analytics

**Correct answer:** A

**Explanation:**

### Correct

**Option A. IP flow verify**

- Correct because **IP flow verify** allows you to test traffic from a source to a destination and determine whether it is allowed or denied by NSG rules.

- It identifies the specific **security rule** that blocks or permits the packet, which directly meets the requirement.

- This is the precise feature in Azure Network Watcher designed for troubleshooting NSG rule enforcement.

### Incorrect

**Option B. Next hop**

- Incorrect because **Next hop** is used to determine the routing path of a packet (e.g., whether traffic goes to the internet, virtual appliance, or VPN gateway).

- It does not identify NSG rules that block traffic.

**Option C. Packet capture**

- Incorrect because **Packet capture** collects traffic data for analysis.

- While useful for diagnosing network behavior, it does not directly identify which NSG rule is blocking traffic.

**Option D. Traffic Analytics**

- Incorrect because **Traffic Analytics** provides insights into traffic flow patterns and usage trends.

- It is not designed to pinpoint specific NSG rules that block packets.

###

---

### Question 27

**You have an Azure subscription that contains the resources in the table.** **VM1 and VM2 are deployed from the same template and host line‑of‑business applications.** **You configure the network security group (NSG) shown in the exhibit.** **You need to prevent users of VM1 and VM2 from accessing websites on the Internet over TCP port 80.** **What should you do?**

**Options:**

- **A.** Change the DenyWebSites outbound security rule.
- **B.** Change the Port_80 inbound security rule.
- **C.** Associate the NSG to Subnet1. ✅
- **D.** Disassociate the NSG from a network interface.

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Associate the NSG to Subnet1**

- Correct because NSG rules only take effect when the NSG is **associated** with either a subnet or a network interface.

- In this scenario, the NSG already contains a rule (DenyWebSites) that blocks outbound traffic on TCP port 80.

- However, unless the NSG is associated with **Subnet1** (where VM1 and VM2 reside), the rule will not apply.

- Associating the NSG ensures that the outbound deny rule is enforced, preventing VM1 and VM2 from accessing websites over port 80.

### Incorrect

**Option A. Change the DenyWebSites outbound security rule**

- Incorrect because the rule already exists to block TCP port 80.

- The issue is not with the rule itself but with the NSG not being associated to the subnet.

**Option B. Change the Port_80 inbound security rule**

- Incorrect because inbound rules control traffic **coming into the VM**, not outbound traffic to the Internet.

- The requirement is to block outbound access to websites.

**Option D. Disassociate the NSG from a network interface**

- Incorrect because disassociating the NSG would remove its effect entirely, leaving VM1 and VM2 unrestricted.

- This would make the problem worse, not solve it.

---

### Question 28

You have an Azure subscription that contains the resources shown in the following table.

NSG1 is configured as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“VM2 can access VM1 by using the HTTPS protocol.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is the **correct** answer here. The HTTPS_VM1_Deny rule with priority 110 specifically blocks HTTPS (TCP port 443) traffic only from the Internet to VM1. Since VM2 is within the same virtual network (VNet1), the default VNet-to-VNet communication rule will allow HTTPS traffic between VM2 and VM1. Therefore, VM2 can access VM1 using the HTTPS protocol.

**Reference(s):**

- https://docs.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview

- https://docs.microsoft.com/en-us/azure/virtual-network/service-tags-overview

---

### Question 31

You have a registered DNS domain named contoso.com.
You create a public Azure DNS zone named contoso.com.
You need to ensure that records created in the contoso.com zone are resolvable from the internet.
What should you do?

**Options:**

- **A.** Modify the SOA record in the DNS domain registrar.
- **B.** Create the SOA record in contoso.com.
- **C.** Modify the NS records in the DNS domain registrar. ✅
- **D.** Create NS records in contoso.com.

**Correct answer:** C

**Explanation:**

Modify the NS records in the DNS domain registrar is the correct answer here. To ensure that records created in the contoso.com Azure DNS zone are resolvable from the internet, you need to update the NS (Name Server) records in your DNS domain registrar. These records should point to the Azure DNS name servers associated with the contoso.com zone in Azure. This change directs external DNS queries for contoso.com to Azure DNS, allowing them to be resolved by the public Azure DNS servers.
Modify the SOA record in the DNS domain registrar is incorrect because the SOA (Start of Authority) record is managed by Azure DNS, and you do not need to modify it in the domain registrar to enable public resolution.
Create the SOA record in contoso.com is incorrect because the SOA record is automatically created and managed by Azure DNS for the zone. No manual action is needed for this record to enable internet resolvability.
Create NS records in contoso.com is incorrect because NS records within the Azure DNS zone are already created automatically. The critical step is to update the NS records at the DNS domain registrar, not within Azure DNS.
Reference(s):
https://learn.microsoft.com/en-us/azure/dns/dns-delegate-domain-azure-dns

---

### Question 35

You have an Azure Load Balancer named LB1.

You assign a user named User1 the roles shown in the following exhibit.

Based on the information provided, select the answer choice that completes the following statement correctly.

**“User 1 can __________________________ the resource group.”**

**Options:**

- **A.** delete a virtual machine from ✅
- **B.** modify the load balancing rules in
- **C.** deploy an Azure Kubernetes Service (AKS) cluster to

**Correct answer:** A

**Explanation:**

**delete a virtual machine from** is the **correct** answer here. User1 has been assigned the **Virtual Machine Contributor** role at the resource group level (inherited), which grants them permissions to manage virtual machines within that resource group. This includes creating, updating, and deleting virtual machines. Therefore, User1 can delete a virtual machine within the specified resource group. However, this role does not grant permissions to modify load balancing rules or deploy resources unrelated to virtual machines, such as an AKS cluster.

**modify the load balancing rules in** is **incorrect** because the **Virtual Machine Contributor** role does not include permissions to modify network settings or load balancing configurations. To modify load balancing rules, User1 would need the **Network Contributor** or **Load Balancer Contributor** role, which is not assigned in this scenario.

**deploy an Azure Kubernetes Service (AKS) cluster to** is **incorrect** because deploying an AKS cluster requires additional permissions beyond those granted by the **Virtual Machine Contributor** role. Typically, the **Contributor** role or specific permissions related to AKS deployment would be needed to create and manage AKS clusters in the resource group.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

---

### Question 39

You have a subnet named Subnet1 that contains Azure virtual machines. A network security group (NSG) named NSG1 is associated to Subnet1. NSG1 only contains the default rules.
You need to create a rule in NSG1 to prevent the hosts on Subnet1 from connecting to the Azure portal. The hosts must be able to connect to other internet hosts.
To what should you set Destination in the rule?

**Options:**

- **A.** Application security group
- **B.** IP Addresses
- **C.** Any
- **D.** Service Tag ✅

**Correct answer:** D

**Explanation:**

Service Tag is the correct answer because Service Tags simplify network security group (NSG) rules by allowing you to reference a group of IP addresses associated with a specific Azure service. In this scenario, to block access to the Azure portal while still allowing access to other internet resources, you would use the AzureCloud service tag as the Destination in your NSG rule. This ensures that traffic specifically destined for the Azure portal is denied without impacting other internet traffic.
Application security group is incorrect because Application Security Groups (ASGs) are used to group virtual machines within the same virtual network to simplify NSG management. They cannot be used to target Azure services like the Azure portal.
IP Addresses is incorrect because blocking access to the Azure portal using IP addresses would require you to manually identify and maintain the list of Azure portal IP ranges, which is not practical or recommended.
Any is incorrect because setting the destination to “Any“ would block all internet traffic, including non-Azure-related services, which does not meet the requirement of allowing access to other internet hosts.
Reference(s):
https://learn.microsoft.com/en-us/azure/virtual-network/service-tags-overview
https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview
https://learn.microsoft.com/en-us/azure/virtual-network/network-security-group-how-it-works

---

### Question 42

**Note:** This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.

You have an Azure subscription that contains the virtual machines shown in the following table.

You deploy a load balancer that has the following configurations:

- Name: LB1

- Type: Internal

- SKU: Standard

- Virtual network: VNET1

You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.

**Solution**: You create a Standard SKU public IP address, associate the address to the network interface of VM1, and then stop VM2.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is the **correct** answer here. To add VM1 and VM2 to the backend pool of a Standard SKU internal load balancer, both virtual machines need to be configured to meet the requirements for a Standard SKU load balancer. Specifically, both VMs must have Standard SKU public IP addresses or no public IP at all. VM2 currently has a Basic SKU public IP, which is incompatible with the Standard SKU load balancer.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/load-balancer/backend-pool-management#limitations

---

### Question 43

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.
You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.
Another administrator plans to create several network security groups (NSGs) in the subscription.
You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.
Solution: From the Resource providers blade, you unregister the Microsoft.ClassicNetwork provider.
Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No is the correct answer here. Unregistering the Microsoft.ClassicNetwork provider has no effect on network security groups (NSGs) created in the Azure Resource Manager (ARM) model, as it is associated with the classic deployment model in Azure. The requirement here is to automatically block TCP port 8080 between virtual networks in the ARM model, which cannot be achieved by unregistering a provider. Instead, you would need to implement a custom policy or directly configure NSG rules.
Reference(s):
https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/overview

---

### Question 45

You have a public load balancer that balances ports 80 and 443 across three virtual machines named VM1, VM2, and VM3.

You need to direct all the Remote Desktop Protocol (RDP) connections to VM3 only.

What should you configure?

**Options:**

- **A.** a new public load balancer for VM3
- **B.** a frontend IP configuration
- **C.** an inbound NAT rule ✅
- **D.** a load balancing rule

**Correct answer:** C

**Explanation:**

**an inbound NAT rule** is **correct** because an inbound NAT rule allows you to direct specific traffic, such as RDP, to a particular virtual machine (VM3 in this case) behind the load balancer. By setting up an inbound NAT rule for port 3389 (RDP), you ensure that all RDP connections go directly to VM3 instead of balancing across all VMs.

**a new public load balancer for VM3** is **incorrect** because creating a separate load balancer is unnecessary for directing RDP connections to VM3. An inbound NAT rule is sufficient to achieve this without additional load balancers.

**a frontend IP configuration** is **incorrect** as a frontend IP configuration is used to define the IP address on which the load balancer is accessible. It does not control how RDP traffic is directed to specific VMs.

**a load balancing rule** is **incorrect** because load balancing rules are intended for distributing traffic across multiple VMs based on specific ports, which is not the goal here. The objective is to direct all RDP traffic to VM3 specifically, not balance it across VMs.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/load-balancer/tutorial-load-balancer-port-forwarding-portal

---

### Question 46

You have an Azure subscription that contains the resources shown in the following table.

All the resources connect to a virtual network named VNet1.

You plan to deploy an Azure Bastion host named Bastion1 to VNet1.

Which resources can be protected by using Bastion1?

**Options:**

- **A.** VM1 only ✅
- **B.** contoso.com only
- **C.** App1 and contoso.com only
- **D.** VM1 and contoso.com only
- **E.** VM1, App1, and contoso.com

**Correct answer:** A

**Explanation:**

**VM1 only** is **correct** because Azure Bastion is designed to provide secure and seamless RDP and SSH connectivity to virtual machines within a virtual network. In this scenario, VM1 is the only virtual machine listed in the table, and thus the only resource that can be accessed and protected via Bastion1. Azure Bastion does not support direct connectivity to web apps (such as App1) or to Microsoft Entra Domain Services domains (like contoso.com).

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/bastion/bastion-overview

---

### Question 48

You plan to use Azure Network Watcher to perform the following task:
Validate outbound connectivity from an Azure virtual machine to an external host.
Which feature should you use for the above task?

**Options:**

- **A.** Connection troubleshoot ✅
- **B.** IP flow verify
- **C.** Next hop
- **D.** NSG flow logs
- **E.** Traffic Analytics

**Correct answer:** A

**Explanation:**

Connection troubleshoot is the correct option because it is specifically designed to validate outbound connectivity from an Azure virtual machine (VM) to an external host. This feature checks the end-to-end connection and identifies if the connection succeeds or fails, providing insights into network latency, packet loss, and the point of failure.
IP flow verify is incorrect because it checks whether a specific packet is allowed or denied by security rules, but it does not validate the entire outbound connection path.
Next hop is incorrect because it shows the next hop a packet will take to reach its destination but does not validate the outbound connection itself.
NSG flow logs is incorrect because it provides a record of traffic through network security groups (NSGs) but does not validate outbound connectivity.
Traffic Analytics is incorrect because it analyzes traffic patterns and usage but does not validate specific outbound connections.
Reference(s):
https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-connectivity-overview
https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-overview

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

### Question 50

You have an Azure subscription that contains 10 network security groups (NSGs), 10 virtual machines, and a Log Analytics workspace named Workspace1. Each NSG is connected to a virtual machine network interface.
You need to configure an Azure Monitor Network Insights alert that will be triggered when suspicious network traffic is detected.
What should you do first?

**Options:**

- **A.** Deploy Connection Monitor.
- **B.** Configure NSG flow logs. ✅
- **C.** Configure data collection endpoints.
- **D.** Configure a private link.

**Correct answer:** B

**Explanation:**

Configure NSG flow logs is the correct answer because Azure Monitor Network Insights relies on NSG flow logs to analyze and detect suspicious network traffic. NSG flow logs capture detailed information about IP traffic flowing through network security groups, including source and destination IPs, ports, and protocols.
Enabling NSG flow logs is a prerequisite for Azure Monitor to process network traffic data and identify anomalies or suspicious activities. These logs are sent to a Log Analytics workspace (e.g., Workspace1) for further analysis.
Deploy Connection Monitor is incorrect because Connection Monitor is used for monitoring network connectivity and performance between Azure resources or between Azure and on-premises resources. It does not directly facilitate alerting based on suspicious network traffic.
Configure data collection endpoints is incorrect because data collection endpoints (DCEs) are primarily used for routing Azure Monitor Agent data. They are not directly related to enabling NSG flow logs or configuring Network Insights alerts.
Configure a private link is incorrect because private links are used to securely access Azure services over a private IP address. They do not play a role in enabling network traffic analysis or triggering alerts for suspicious traffic.
Reference(s):
https://learn.microsoft.com/en-us/azure/network-watcher/nsg-flow-logs-overview
https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-overview
https://learn.microsoft.com/en-us/azure/network-watcher/network-insights-overview

---

### Question 1

**You have VNet1 and VNet2 with subnets and NSGs configured. VM1 is in VNet1, VM2 is in VNet2. VM1 needs to connect to VM2 on TCP port 1433. Statement: “VM1 can connect to the TCP port 1433 services on VM2.” Select Yes or No.**

You have Azure virtual machines that have the network configurations shown in the following table.

For NSG1, you create the inbound security rule shown in the following table.

For NSG2, you create the inbound security rule shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“VM1 can connect to the TCP port 1433 services on VM2.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- Correct because the NSG rules allow inbound traffic on TCP port 1433 to VM2.

- Virtual network peering between VNet1 and VNet2 enables connectivity across VNets.

- Since the NSG rules do not block the traffic and peering is configured, VM1 can successfully connect to VM2 on port 1433.

### Incorrect

**Option B. No**

- Incorrect because there is no restriction preventing VM1 from connecting to VM2 on TCP port 1433.

- Both the NSG configuration and VNet peering support the required connectivity.

###

---

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

### Question 3

You have an Azure subscription. The subscription contains virtual machines that run Windows Server and are configured as shown in the following table.

You create a public Azure DNS zone named adatum.com and a private Azure DNS zone named contoso.com.

You create a virtual network link for contoso.com as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“When VM2 starts, a record for VM2 is added to the contoso.com DNS zone.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is the **correct** answer because the virtual network VNET2 is linked to the private DNS zone contoso.com with **auto-registration enabled**. When a virtual machine (VM2) starts in a linked virtual network, its DNS records are automatically registered in the private DNS zone, even if it does not have a DNS suffix explicitly configured in Windows Server.

Auto-registration ensures that all VMs within the linked virtual network, regardless of their DNS suffix, are registered with the private DNS zone as long as the virtual network is linked and auto-registration is enabled.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/dns/private-dns-overview

- https://learn.microsoft.com/en-us/azure/dns/private-dns-autoregistration

- https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-name-resolution-for-vms-and-role-instances?tabs=redhat

---

### Question 4

You have an Azure subscription. The subscription contains virtual machines that run Windows Server and are configured as shown in the following table.

You create a public Azure DNS zone named adatum.com and a private Azure DNS zone named contoso.com.

You create a virtual network link for contoso.com as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“When VM3 starts, a record for VM3 is added to the adatum.com DNS zone.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is the **correct** answer because the virtual network VNET2 is linked to the contoso.com private DNS zone, not the adatum.com DNS zone. While VM3 has the DNS suffix adatum.com configured at the Windows Server level, the virtual network link and auto-registration are set up for the contoso.com DNS zone, not adatum.com.

For VM3 to have its record automatically registered in the adatum.com DNS zone, VNET2 must be linked to the adatum.com private DNS zone, and auto-registration must be enabled for that zone.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/dns/private-dns-overview

- https://learn.microsoft.com/en-us/azure/dns/private-dns-autoregistration

- https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-name-resolution-for-vms-and-role-instances?tabs=redhat

---

### Question 7

You have an Azure subscription.

You plan to deploy a storage account named storage1 by using the Azure Resource Manager (ARM) template as shown in the below exhibit.

For the statement below, select Yes if the statement is true. Otherwise, select No.

**“Only users located in the East US Azure region can connect to storage1”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is the **correct** answer because the allowBlobPublicAccess property is set to **true**, and the **networkAcls** section has the following configurations:

- “defaultAction”: “Allow”

- “bypass”: “AzureServices”

- “ipRules”: []

When allowBlobPublicAccess is set to true, and no IP-based ACLs or region-based restrictions are configured (ipRules is empty), the storage account is accessible publicly over the internet if someone has the access keys.

The “defaultAction”: “Allow” setting means all traffic is allowed by default, and no restrictions are in place to limit access to users located in the East US Azure region or any specific IP ranges.

To restrict access specifically to the East US region, the network ACLs must be configured with IP rules or virtual network rules that explicitly limit access to that region.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/storage/blobs/anonymous-read-access-configure

- https://learn.microsoft.com/en-us/azure/storage/blobs/versioning-overview

- https://learn.microsoft.com/en-us/azure/storage/blobs/versioning-enable?tabs=portal

- https://learn.microsoft.com/en-us/azure/templates/microsoft.storage/storageaccounts/blobservices?pivots=deployment-language-arm-template#restorepolicyproperties-1

---

### Question 14

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.**

You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer.

The effective network security configurations for VM2 are shown in the following exhibit.

You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.

You verify that the Load Balancer rules are configured correctly.

You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.

**Solution: **You modify the priority of the Allow_131.107.100.50 inbound security rule.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because simply modifying the **priority** of the inbound NSG rule does not guarantee that the traffic will be allowed.

- If there is a **deny rule with higher priority** or if the rule is misconfigured (wrong port, wrong protocol, wrong source/destination), changing the priority alone will not fix the issue.

- To meet the goal, you must ensure that the inbound rule explicitly allows traffic from 131.107.100.50 on **TCP port 443**, and that no higher‑priority deny rules block it.

### Incorrect

**Option A. Yes**

- Incorrect because adjusting the priority without validating the actual rule configuration does not ensure connectivity.

- If the rule is already correct but blocked by another rule, lowering its priority might help, but the exam scenario implies that priority change alone is insufficient.

- The proper solution is to **create or correctly configure an inbound NSG rule** that allows traffic from the given IP on port 443.

###

---

### Question 17

**You have an Azure subscription that contains a virtual network named VNET1 in the East US 2 region. Network interfaces named VM1‑NI and VM2‑NI are connected to VNET1.** **You successfully deploy the following Azure Resource Manager template.** **For the following statement, select Yes if the statement is true. Otherwise, select No.** **“If the East US 2 region becomes unavailable, VM1 or VM2 will be available.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- This is correct because both VM1 and VM2 are deployed in the **East US 2 region**.

- If the entire region becomes unavailable, all resources in that region—including VMs, NICs, and VNET1—will be unavailable.

- Regional outages cannot be mitigated by a single VNET or NIC; high availability requires **cross‑region deployment** (e.g., Azure Site Recovery, paired regions, or geo‑redundant services).

### Incorrect

**Option A. Yes**

- Incorrect because availability is tied to the region where resources are deployed.

- Without replication or failover to another region, VMs in East US 2 cannot remain available if the region itself goes down.

- The statement assumes resiliency that does not exist in this configuration.

###

---

### Question 20

You have an Azure subscription that contains the resources in the following table.

You install the Web Server (IIS) server role on VM1 and VM2, and then add VM1 and VM2 to LB1.

LB1 is configured as shown below.

Rule1 is configured as shown below.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“If you delete Rule1, LB1 will balance all the requests between VM1 and VM2 for all the ports.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because Azure Load Balancer requires **load balancing rules** to define how traffic is distributed across backend pool instances.

- If you delete **Rule1**, LB1 will not automatically balance requests across all ports. Instead, traffic distribution will only occur for ports explicitly defined in existing rules.

- Without a rule, LB1 cannot forward traffic to VM1 and VM2 — meaning requests will not be balanced for all ports.

### Incorrect

**Option A. Yes**

- Incorrect because deleting Rule1 does not cause LB1 to balance traffic across all ports.

- Load Balancer does not default to “all ports balancing”; it only balances traffic according to configured rules.

- This option reflects a misunderstanding of how Azure Load Balancer rules work.

---

### Question 21

You have an Azure subscription that contains the resources in the following table.

You install the Web Server (IIS) server role on VM1 and VM2, and then add VM1 and VM2 to LB1.

LB1 is configured as shown below.

Rule1 is configured as shown below.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“If Probe1.htm is present on VM1 and VM2, LB1 will balance traffic for TCP port 80 between VM1 and VM2.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- Correct because Azure Load Balancer uses **health probes** to determine the availability of backend pool instances.

- If **Probe1.htm** is present and accessible on both VM1 and VM2, the probe will succeed, marking both VMs as healthy.

- With Rule1 configured to balance traffic on **TCP port 80**, LB1 will distribute incoming requests across VM1 and VM2.

### Incorrect

**Option B. No**

- Incorrect because if the probe file exists and is accessible, the load balancer will indeed balance traffic.

- Choosing “No” would imply that LB1 does not balance traffic even when the probe succeeds, which contradicts how Azure Load Balancer operates.

###

---

### Question 22

**You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer. The effective network security configurations for VM2 are shown in the exhibit. You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You verify that the Load Balancer rules are configured correctly. You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.**

**Solution: You create an inbound security rule that denies all traffic from the 131.107.100.50 source and has a priority of 64999.**

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because the solution explicitly **denies traffic** from the source IP 131.107.100.50.

- The requirement is to **allow connections** from that IP over TCP port 443.

- By creating a deny rule, you block the traffic instead of enabling it, which fails to meet the stated goal.

### Incorrect

**Option A. Yes**

- Incorrect because answering “Yes” assumes the deny rule would allow connectivity, which is the opposite of what happens.

- A deny rule prevents traffic, so the connection issue would persist.

---

### Question 24

**You have an Azure subscription that contains the resources in the following table.** **To which subnets can you apply NSG1?**

To which subnets can you apply NSG1?

**Options:**

- **A.** the subnets on VNet1 only
- **B.** the subnets on VNet2 only
- **C.** the subnets on VNet3 only ✅
- **D.** the subnets on VNet2 and VNet3 only
- **E.** the subnets on VNet1, VNet2, and VNet3

**Correct answer:** C

**Explanation:**

### Correct

**Option C. The subnets on VNet3 only**

- Correct because **Network Security Groups (NSGs)** can only be applied to subnets or network interfaces in **Azure Resource Manager (ARM)‑based VNets**.

- If VNet3 is the only ARM‑based virtual network in the table, then NSG1 can be applied only to its subnets.

- VNets created in the **classic deployment model (VNet1, VNet2)** do not support NSGs at the subnet level.

### Incorrect

**Option A. The subnets on VNet1 only**

- Incorrect because VNet1 is a **classic VNet**, and NSGs cannot be applied to subnets in classic VNets.

**Option B. The subnets on VNet2 only**

- Incorrect for the same reason: VNet2 is also a **classic VNet**, so NSGs cannot be applied to its subnets.

**Option D. The subnets on VNet2 and VNet3 only**

- Incorrect because while VNet3 supports NSGs, VNet2 does not.

**Option E. The subnets on VNet1, VNet2, and VNet3**

- Incorrect because NSGs cannot be applied to subnets in VNet1 or VNet2 (classic VNets).

###

---

### Question 25

You have an Azure subscription that contains a virtual network named VNET1 in the East US 2 region. Network interfaces named VM1-NI and VM2-NI are connected to VNET1.

You successfully deploy the following Azure Resource Manager template.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“If an Azure datacenter becomes unavailable, VM1 or VM2 will be available.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct: If a **datacenter outage** occurs, both VM1 and VM2 will be unavailable because they are deployed in the same region (East US 2).

- Azure VMs tied to a single region cannot survive a regional or datacenter failure unless you configure **availability zones, paired regions, or cross‑region disaster recovery**.

- The statement assumes resiliency that does not exist in this setup.

### Incorrect

**Option A. Yes**

- Incorrect: Saying “Yes” implies that at least one VM would remain available during a datacenter outage.

- This is false because both VMs are in the same region and connected to the same VNET.

- Without cross‑region deployment or replication, **all resources in that region fail together**.

---

### Question 26

**Scenario:** You have an Azure subscription with a **virtual network (VNET1)** in the **East US 2 region**. Two network interfaces (**VM1‑NI** and **VM2‑NI**) are connected to VNET1. After deploying the ARM template, you must determine if the statement “VM1 and VM2 can connect to VNET1” is true.

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- **Correct because** both VM1‑NI and VM2‑NI are explicitly connected to **VNET1**.

- In Azure, if a network interface is attached to a VM and that NIC is connected to a virtual network, the VM automatically gains connectivity to that VNet.

- Therefore, VM1 and VM2 can communicate with resources in VNET1 without additional configuration.

### Incorrect

**Option B. No**

- **Incorrect because** there is no restriction preventing VM1 and VM2 from connecting to VNET1.

- Since their NICs are already associated with VNET1, denying connectivity would contradict Azure’s default networking behavior.

###

---

### Question 37

You have an Azure subscription.

You plan to deploy the following file named File1.bicep.

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

**“The name of the virtual network will be the same as the location of the resource group.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because the name of the virtual network in the provided Bicep file is explicitly set as ‘VNET1’. The location parameter is assigned based on the location of the resource group, but this value only determines where the virtual network is deployed, not its name. Therefore, the name of the virtual network will be ‘VNET1’, regardless of the resource group’s location.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/bicep-functions-resourcegroup

---

### Question 41

You have a virtual network named VNET1 that contains the subnets shown in the following table.

You have Azure virtual machines that have the network configurations shown in the following table.

For NSG1, you create the inbound security rule shown in the following table.

For NSG2, you create the inbound security rule shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“VM2 can connect to the TCP port 1433 services on VM3.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is the **correct** answer because there are no Network Security Groups (NSGs) applied to Subnet2, where VM3 resides, or directly to VM3’s network interface. NSG1, applied to Subnet1, allows traffic from Subnet2 (10.10.2.0/24) to Subnet1 (10.10.1.0/24) on TCP port 1433.

The rule in NSG2 that blocks inbound traffic specifically applies to traffic from VM2 (10.10.2.5) to VM1 (10.10.1.5), but not to VM3 (10.10.2.6). Therefore, VM2 can successfully connect to TCP port 1433 services on VM3 without restriction.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview

- https://learn.microsoft.com/en-us/azure/virtual-network/network-security-group-how-it-works

---

### Question 43

You have an Azure subscription that contains the resources shown in the following table.

You need to ensure that data transfers between storage1 and VM1 do NOT traverse the internet

What should you configure for storage1?

**Options:**

- **A.** a shared access signature (SAS)
- **B.** data protection
- **C.** a private endpoint ✅
- **D.** Public network access in the Firewalls and virtual networks settings

**Correct answer:** C

**Explanation:**

**a private endpoint** is **correct** because configuring a private endpoint for storage1 ensures that data transfers between VM1 and storage1 occur entirely within the Azure virtual network. A private endpoint maps the storage account to a private IP address in the virtual network, preventing traffic from traversing the internet and providing a secure connection.

**a shared access signature (SAS)** is **incorrect** because an SAS provides granular access to resources in a storage account but does not ensure that the data transfer stays within the Azure virtual network.

**data protection** is **incorrect** because it relates to enabling recovery options and configuring soft delete features for protecting data but does not control the network path used for data transfer.

**Public network access in the Firewalls and virtual networks settings** is **incorrect** because disabling public network access would block all internet-based traffic but does not ensure that traffic is routed privately within Azure.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview

- https://learn.microsoft.com/en-us/azure/storage/common/storage-private-endpoints

---

### Question 45

You have an Azure subscription that contains the resources shown in the following table.

You create a route table named RT1 in the East US Azure region.

To which resources can you associate RT1?

**Options:**

- **A.** VNet1 only
- **B.** Subnet1 only ✅
- **C.** VNet1 and NIC1 only
- **D.** Subnet1 and NIC1 only
- **E.** VNet1, Subnet1, and NIC1

**Correct answer:** B

**Explanation:**

**Subnet1 only** is the **correct** answer because in Azure, route tables (like RT1) can only be associated with subnets, not with virtual networks (VNet1) or network interfaces (NIC1). When you associate a route table with a subnet, all resources (like virtual machines) within that subnet use the custom routes defined in the route table.

- **VNet1** cannot be directly associated with a route table. Instead, route tables are applied at the subnet level within a virtual network.

- **NIC1** (network interface) cannot be associated with a route table either.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview

- https://learn.microsoft.com/en-us/azure/virtual-network/manage-route-table

---

### Question 49

You have an Azure subscription that contains the virtual networks shown in the following table.

Each virtual network has 50 connected virtual machines.

You need to implement Azure Bastion. The solution must meet the following requirements:

- Support host scaling.

- Support uploading and downloading files.

- Support the virtual machines on both VNet1 and VNet2.

- Minimize the number of addresses on the Azure Bastion subnet.

You need to configure Azure Bastion.

What Public IP should you use?

**Options:**

- **A.** Basic SKU with a dynamic allocation
- **B.** Basic SKU with a static allocation
- **C.** Standard SKU with a static allocation ✅

**Correct answer:** C

**Explanation:**

**Standard SKU with a static allocation** is **correct** because it is required to support host scaling and advanced features such as file upload and download when implementing Azure Bastion. The Standard SKU is necessary to meet these requirements, and static allocation of the Public IP ensures a consistent IP address for accessing the Bastion host, which is recommended for production environments.

**Basic SKU with a dynamic allocation** is **incorrect** because the Basic SKU does not support the necessary features like file upload and download or host scaling.

**Basic SKU with a static allocation** is **incorrect** because, similar to the dynamic allocation, the Basic SKU does not support the advanced features required for this setup.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/bastion/bastion-overview

- https://learn.microsoft.com/en-us/azure/bastion/configuration-settings

---

### Question 55

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution.**

You manage a virtual network named VNet1 that is hosted in the West US Azure region.

VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server.

You need to inspect all the network traffic from VM1 to VM2 for a period of three hours.

**Solution**: From Azure Monitor, you create a metric on Network In and Network Out.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because creating a metric on Network In and Network Out in Azure Monitor will only provide information on the volume of network traffic, not the contents or details of the network traffic. To inspect all network traffic between VM1 and VM2, you would need to use a tool or service that allows for deeper traffic inspection, such as Azure Network Watcher with Packet Capture or a Network Security Group flow log.

**Reference(s):**

- https://docs.microsoft.com/en-us/azure/azure-monitor/platform/metrics-supported

---

## Practice Set 9

Source: https://skillcertpro.com/az-104-exam-questions/9/

### Question 5

You have two Azure subscriptions named Subscription1 and Subscription2. Each subscription is associated with a different Microsoft Entra tenant.

Subscription1 contains a virtual network named VNet1. VNet1 contains an Azure virtual machine named VM1 and has an IP address space of 10.0.0.0/16.

Subscription2 contains a virtual network named VNet2. VNet2 contains an Azure virtual machine named VM2 and has an IP address space of 10.10.0.0/24.

You need to connect VNet1 to VNet2.

What should you do first?

**Options:**

- **A.** Move VM1 to Subscription2.
- **B.** Provision virtual network gateways. ✅
- **C.** Move VNet1 to Subscription2.
- **D.** Modify the IP address space of VNet2.

**Correct answer:** B

**Explanation:**

The first step you should take is to **provision virtual network gateways**.

Here’s why:

**Virtual Network Gateways:**

To connect virtual networks across different subscriptions or even different Azure regions, you need to use virtual network gateways.

These gateways establish secure, encrypted tunnels between the virtual networks.

Before you can establish the connection, you must create virtual network gateways in both VNet1 and VNet2.

Here’s why the other options are not the correct first step:

**Move VM1 to Subscription2 or Move VNet1 to Subscription2:**

Moving resources between subscriptions associated with different Microsoft Entra tenants can be complex and is not the necessary first step for connecting the virtual networks.

This is also not the best practice. Vnet peering between subscriptions is the desired method.

**Modify the IP address space of VNet2:**

While IP address space conflicts can prevent successful connections, this is not the first step. You need to create the gateways first.

Also, the IP address spaces provided do not conflict. 10.0.0.0/16 and 10.10.0.0/24 are separate address spaces.

---

### Question 6

You have the Azure virtual machines shown in the following table.

VNET1, VNET2, and VNET3 are peered.

VM4 has a DNS server that is authoritative for a zone named contoso.com and contains the records shown in the following table.

VNET1 and VNET2 are linked to an Azure private DNS zone named contoso.com that contains the records shown in the following table.

The virtual networks are configured to use the DNS servers shown in the following table.

For the statement below, select Yes if the statement is true. Otherwise select No.

**“From VM2, server1.contoso.com resolves to 131.107.3.3.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Let’s break down this Azure networking and DNS question step-by-step:

**Understanding the Setup**

**Virtual Machines and Networks:**

VM1, VM2, VM3, and VM4 reside in different virtual networks (VNET1, VNET2, VNET3).

The networks are peered, allowing communication between them.

**DNS:**

VM4 (192.168.0.5) hosts a DNS server authoritative for contoso.com.

VNET1 and VNET2 are linked to an Azure Private DNS zone for contoso.com.

DNS server configurations vary:

VNET1: Uses Azure’s default DNS.

VNET2 and VNET3: Use VM4’s DNS server (192.168.0.5).

**DNS Records:**

VM4’s DNS server: server1.contoso.com resolves to 131.107.2.3.

Azure Private DNS zone: server1.contoso.com resolves to 131.107.3.3.

**Analyzing the Statement**

**“From VM2, server1.contoso.com resolves to 131.107.3.3.”**

VM2 uses the custom DNS server of 192.168.0.5.

Therefore, VM2 will query VM4 for DNS resolution.

VM4’s DNS server has the record of server1.contoso.com resolving to 131.107.2.3.

The Azure Private DNS zone records will not be used, as VM2 is configured to use the custom DNS server.

**Answer: No**

VM2 is configured to use the custom DNS server running on VM4. That DNS server has a record of server1.contoso.com resolving to 131.107.2.3. Therefore VM2 will resolve server1.contoso.com to 131.107.2.3, and not 131.107.3.3.

**Reference(s):**

- https://learn.microsoft.com/en-us/answers/questions/1150496/private-dns-vs-custom-dns-for-one-vnet

- https://learn.microsoft.com/en-us/azure/dns/private-dns-virtual-network-links

---

### Question 12

Case Study: GlobalMantics‘ Cloud Expansion and Optimization

(There are multiple questions in this test based on this case study.)

GlobalMantics, a multinational retail company, is expanding its online presence and modernizing its existing Azure infrastructure. They have the following resources and goals:  E-Commerce Web App: Hosted on Azure App Service, experiencing unpredictable traffic spikes and slowdowns during peak times. Inventory Management System: A legacy .NET application running on Azure VMs (VM01-VM04) in a single availability set.

Customer Database: Azure SQL Database with high IOPS requirements and sensitive customer data. Data Lake: Azure Data Lake Storage Gen2 for storing large volumes of unstructured sales and marketing data.

Goals: Improve the scalability and reliability of the e-commerce web app. Modernize and enhance the availability of the inventory management system. Ensure data security and compliance for the customer database. Optimize costs across all Azure resources. Question:

To enhance the scalability and performance of the e-commerce web app during peak traffic, which Azure service should GlobalMantics implement?

**Options:**

- **A.** Azure CDN
- **B.** Azure Application Gateway with autoscaling ✅
- **C.** Azure Front Door
- **D.** Azure Traffic Manager

**Correct answer:** B

**Explanation:**

**Correct Answer:**

**B. Azure Application Gateway with autoscaling:** This is the most appropriate service for the described scenario. Here’s why:

**Scalability:** Application Gateway supports autoscaling. It can automatically scale its instances up or down based on traffic demand, ensuring that the web app can handle traffic spikes.

**Performance:** Application Gateway offers features like SSL offloading, which can improve web app performance.

**Web Application Focus:** Application Gateway is designed specifically for web application traffic. It operates at Layer 7 (application layer), allowing for more sophisticated routing and traffic management compared to a basic load balancer.

**Why other options are less suitable:**

**A. Azure CDN:** Azure CDN (Content Delivery Network) improves performance by caching static content (images, CSS, JavaScript) closer to users. While it’s a valuable service for web apps, it doesn’t directly address the scalability of the application itself during peak traffic. CDN helps with content delivery, not application scaling. It’s a good addition to Application Gateway, but not a replacement for it in this scenario.

**C. Azure Front Door:** Azure Front Door is a global HTTP(S) load balancer. It’s excellent for global traffic management and routing traffic to different regions. However, for scaling the application within a single region (which is what’s implied by “unpredictable traffic spikes”), Application Gateway with autoscaling is more appropriate. Front Door is for global scaling, Application Gateway is for regional/application scaling.

**D. Azure Traffic Manager:** Azure Traffic Manager is a DNS-based traffic routing service. It directs traffic to different instances of your application based on various methods (e.g., performance, geographic). Like Front Door, it’s more suited for global traffic distribution or failover scenarios. It doesn’t provide the same level of application-specific scaling and performance enhancements as Application Gateway.

---

### Question 16

You have an Azure subscription that has offices in the East US and West US Azure regions.

You plan to create the storage account shown below.

Based on the information presented in the graphic, select the answer choice that completes the following statement correctly.

**“To minimize the network costs of accessing adatum22, modify the ____________________ setting.”**

**Options:**

- **A.** Default routing tier ✅
- **B.** Endpoint type
- **C.** Location
- **D.** Network connectivity
- **E.** Performance

**Correct answer:** A

**Explanation:**

**Default routing tier **is **correct** because by default the routing method is set to be through Microsoft global network . But this configuration sometimes increases the network costs if the data you are trying to access is in another region, and in order to reach your system it has to traverse through Microsoft global network to a great extent. In order to minimize this, you can change to Internet routing where it is passed on to the transit ISP at the earliest opportunity.

**Endpoint type** is **incorrect** as changing the endpoint type will not have any effect on the network costs of the traffic coming in or going out from the storage account.

**Location** is **incorrect** because we do not know as of now where the user, who is trying to access the file share is located. So changing the location will not help.

**Network connectivity** is **incorrect** because this defines how you connect to different services in the storage account. If you select Public endpoints then you can access them over the internet otherwise your requests should be coming in from inside the VNet provided VNet integration is already enabled.

**Performance** is **incorrect** because this chooses the tier in which your storage account runs. It basically defines the resources available to the services to handle your data and requests. Changing this may have effect on billing cost but it would not affect the networking cost.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/storage/common/network-routing-preference

---

### Question 19

You have the Azure virtual machines shown in the following table.

VNET1, VNET2, and VNET3 are peered.

VM4 has a DNS server that is authoritative for a zone named contoso.com and contains the records shown in the following table.

VNET1 and VNET2 are linked to an Azure private DNS zone named contoso.com that contains the records shown in the following table.

The virtual networks are configured to use the DNS servers shown in the following table.

For the statement below, select Yes if the statement is true. Otherwise select No.

**“From VM3, server2.contoso.com resolves to 131.107.2.4.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is **correct** as VM3 is connected to VNet3 which is connected to the DNS server VM4 and that DNS server does have an existing A record for server2 which will help in resolving server2.contoso.com to 131.107.2.4.

**Reference(s):**

- https://learn.microsoft.com/en-us/answers/questions/1150496/private-dns-vs-custom-dns-for-one-vnet

- https://learn.microsoft.com/en-us/azure/dns/private-dns-virtual-network-links

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

### Question 25

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.**

You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer.

The effective network security configurations for VM2 are shown in the following exhibit.

You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You verify that the Load Balancer rules are configured correctly.

You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.

**Solution**: You modify the priority of the Allow_131.107.100.50 inbound security rule

Does it meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because if you increase the priority, all 443 traffic will still be blocked by the rule 200. If you decrease the priority, the effect is technically the same as it is currently. Hence this option will not help.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/load-balancer/manage-rules-how-to

---

### Question 27

You have an Azure subscription that contains the virtual networks shown in the following table.

The subscription contains the virtual machines shown in the following table.

Each virtual machine contains only a private IP address.

You create an Azure bastion for VNet1 as shown below.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“The Azure portal can use SSH to connect to VM2 through Bastion1.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is **correct** because VM2 is in VNet2 which is directly peered to VNet1 and Bastion1 is deployed in VNet1. Hence the connection can be easily made to VM2.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/bastion/native-client#deploy-bastion-with-the-native-client-feature

- https://learn.microsoft.com/en-us/azure/bastion/configuration-settings#skus

---

### Question 28

You have an Azure subscription that contains the virtual networks shown in the following table.

The subscription contains the virtual machines shown in the following table.

Each virtual machine contains only a private IP address.

You create an Azure bastion for VNet1 as shown below.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“The Azure portal can be used to connect to VM3 through Bastion1.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because there is no direct connection between VNet1 in which Bastion1 is and VNet3. Hence the connection from Bastion1 will not be possible to VM3.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/bastion/native-client#deploy-bastion-with-the-native-client-feature

- https://learn.microsoft.com/en-us/azure/bastion/configuration-settings#skus

---

### Question 31

You have an Azure subscription that contains the resources shown in the following table.

You need to manage outbound traffic from VNET1 by using Firewall1.

What should you do first?

**Options:**

- **A.** Create a route table. ✅
- **B.** Configure the Hybrid Connection Manager.
- **C.** Create an Azure Network Watcher.
- **D.** Upgrade ASP1 to the Premium SKU.

**Correct answer:** A

**Explanation:**

**Create a route table** is **correct** because to manage outbound traffic from a virtual network (VNET1) using Azure Firewall (Firewall1), you must first create a route table. The route table is used to define how outbound traffic is directed through the Azure Firewall. Specifically, you configure a user-defined route (UDR) in the route table to ensure that outbound traffic is routed through the Azure Firewall. Without this configuration, the traffic will not pass through the firewall, and you won’t be able to control or manage it effectively.

**Configure the Hybrid Connection Manager** is **incorrect** because Hybrid Connection Manager is used to connect Azure App Services to on-premises resources securely. It is not relevant to managing outbound traffic via Azure Firewall.

**Create an Azure Network Watcher** is **incorrect** because Azure Network Watcher is used for monitoring and diagnosing network issues, not for managing or directing outbound traffic through an Azure Firewall.

**Upgrade ASP1 to the Premium SKU** is **incorrect** because upgrading to the Premium SKU of the App Service Plan does not affect the routing of outbound traffic through an Azure Firewall.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/app-service/network-secure-outbound-traffic-azure-firewall

- https://docs.microsoft.com/en-us/azure/virtual-network/tutorial-create-route-table-portal

- https://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-monitoring-overview

---

### Question 32

You have an Azure subscription that contains the virtual networks shown in the following table.

The subnets have the IP address spaces shown in the following table.

You plan to create a container app named contapp1 in the East US Azure region.

You need to create a container app environment named con-env1 that meets the following requirements:

- Uses its own (and existing) virtual network.

- Uses its own (and new) subnet.

- Is connected to the smallest possible subnet.

Which subnet mask should you use?

**Options:**

- **A.** /16
- **B.** /23 ✅
- **C.** /24
- **D.** /26
- **E.** /28

**Correct answer:** B

**Explanation:**

**/23** is **correct** because, as per Microsoft’s official recommendation, a container app environment requires a dedicated subnet with a minimum address space of **/23** when connecting to a virtual network. This allocation ensures sufficient IP addresses (512) for both current and future scaling needs of the container app environment. Additionally, the requirement specifies selecting the **smallest possible subnet** that meets these prerequisites, and **/23** is the optimal choice in this scenario.

Therefore, **/23** satisfies both the **minimum requirement** and the **smallest possible subnet** criteria for deploying a container app environment in an Azure virtual network.

**Reference(s):**

- https://www.calculator.net/ip-subnet-calculator.html?cclass=any&amp;csubnet=17&amp;cip=10.128.1.0&amp;ctype=ipv4&amp;printit=0&amp;x=55&amp;y=24

- https://learn.microsoft.com/en-us/azure/container-apps/vnet-custom?tabs=bash&amp;pivots=azure-portal#restrictions

---

### Question 35

You have a subscription named Subscription1. Subscription1 has one Azure virtual machine named VM1. You can’t seem to login to the server. What tool should you use to verify if the problem is the network security group?

**Options:**

- **A.** Azure Monitor VM metrics
- **B.** IP flow verify tool in Azure Network Watcher ✅
- **C.** Azure Virtual Network logs
- **D.** Azure Traffic Manager traffic view

**Correct answer:** B

**Explanation:**

**Correct Answer:**

**B. IP flow verify tool in Azure Network Watcher:** This is the correct answer. The IP flow verify tool in Network Watcher allows you to test network connectivity to and from a specific VM, including checking if NSG rules are blocking traffic. You specify the source and destination IP addresses and ports, and Network Watcher tells you whether the traffic is allowed or denied by NSGs, and if denied, which rule is causing the block. This is precisely what you need to troubleshoot NSG-related connectivity problems.

**Why other options are incorrect:**

**A. Azure Monitor VM metrics:** VM metrics provide performance data about the VM (CPU, memory, disk, network), but they don’t directly tell you if an NSG is blocking traffic. While network-related metrics might suggest a problem, they don’t pinpoint the NSG rule causing it. Metrics show what’s happening, not why.

**C. Azure Virtual Network logs:** While Network logs (including NSG flow logs) can be helpful for diagnosing network issues, they are not the most immediate tool for verifying NSG problems. Analyzing logs can be time-consuming. The IP flow verify tool provides a real-time, targeted test of NSG rules. Logs are useful for post-mortem analysis or long-term trends, but IP flow verify is best for immediate troubleshooting.

**D. Azure Traffic Manager traffic view:** Traffic Manager is used for global traffic routing and load balancing. It’s not relevant for troubleshooting connectivity problems with a single VM within a VNet. Traffic Manager works at the DNS level, directing traffic to different regions or instances, but it doesn’t inspect network traffic at the VM level.

---

### Question 36

**You have a virtual network named VNet2 that has the configuration shown in the following exhibit. Before a virtual machine on VNet2 can receive an IP address from 10.2.1.0/24 you must first…**

Before a virtual machine on VNET2 can receive an IP address from 10.2.1.0/24 you must first

**Options:**

- **A.** A. Add a network interface
- **B.** B. Add a subnet ✅
- **C.** C. Add an address space
- **D.** D. Delete a subnet
- **E.** E. Delete an address space

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Add a subnet**

- Correct because for a VM to receive an IP address from a specific range (10.2.1.0/24), that range must be defined as a **subnet** within the virtual network.

- Azure VNet IP allocation is always tied to subnets. Without creating the subnet, the VM cannot be assigned an IP from that range.

- This is a foundational step in configuring Azure networking.

### Incorrect

**Option A. Add a network interface**

- Incorrect because while a VM requires a NIC to connect to a subnet, the NIC itself cannot provide IP addresses unless the subnet exists.

- The subnet must be created first.

**Option C. Add an address space**

- Incorrect because the address space (10.2.0.0/16, for example) already exists at the VNet level.

- Adding another address space is unnecessary unless expanding the VNet, not for assigning IPs within an existing range.

**Option D. Delete a subnet**

- Incorrect because deleting a subnet removes available IP ranges, which prevents allocation rather than enabling it.

**Option E. Delete an address space**

- Incorrect because removing an address space reduces available ranges and does not help in assigning IPs.

###

---

### Question 40

A team member has created a point to site VPN connection between a computer named “WorkstationA” and an Azure Virtual Network. Another point to site VPN connection needs to be created between the same Azure Virtual Network and a computer named “WorkstationB”. The VPN client package was generated and installed on “WorkstationB”. You need to ensure you can create a successful point to site VPN connection.

You decide to export and install the client certificate on “WorkstationB”

Would this solution fulfil the requirement?

**Options:**

- **A.** A. Yes ✅
- **B.** B. No

**Correct answer:** A

**Explanation:**

Yes, this is one of the requirements.

**Point-to-Site VPN and Certificates:**

Point-to-site VPN connections in Azure rely on client certificates for authentication.

When a point-to-site VPN is configured, a root certificate is uploaded to Azure, and client certificates are generated from that root.

Each client computer that needs to connect requires a client certificate.

Exporting a valid client certificate and installing it on workstationB will satisfy the need to authenticate to the VPN.

This is also mentioned in the Microsoft documentation

For more information on creating point-to-site VPN connections, please visit the below URL

https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-howto-point-to-site-resource-manager-portal

---

### Question 47

You are configuring Azure Firewall to protect your VNet. You need to allow outbound access to specific FQDNs (Fully Qualified Domain Names) while blocking access to all other internet destinations.

How would you configure Azure Firewall to achieve this?

**Options:**

- **A.** Use application rules in Azure Firewall ✅
- **B.** Use a combination of network and application rules
- **C.** Use network rules in Azure Firewall
- **D.** Use DNAT rules in Azure Firewall

**Correct answer:** A

**Explanation:**

You should use **application rules in Azure Firewall** to allow outbound access to specific FQDNs while blocking all other internet traffic.

Here’s why:

**Application Rules for FQDNs:** Application rules in Azure Firewall are specifically designed to filter traffic based on FQDNs. You can define rules that explicitly allow outbound access to a list of allowed FQDNs. The firewall will then automatically resolve these FQDNs to their corresponding IP addresses and allow traffic only to those destinations.

**Implicit Deny:** Azure Firewall has an implicit deny policy by default. This means that any traffic that is not explicitly allowed by a rule is automatically blocked. Therefore, by creating application rules that only allow access to your specific FQDNs, you effectively block all other internet destinations.

Why the other options are not the best fit:

**Network Rules:** Network rules operate at Layer 3 and Layer 4 of the OSI model, focusing on IP addresses and ports. While you could technically create network rules based on the IP addresses of the FQDNs, this approach is not recommended. IP addresses can change, and you would have to constantly update your firewall rules. Application rules handle FQDN resolution automatically.

**Combination of Network and Application Rules:** While you could use a combination, it’s not necessary and adds complexity. Application rules alone are sufficient to achieve the desired outcome.

**DNAT Rules:** DNAT (Destination Network Address Translation) rules are used to translate the destination IP address of traffic. They are typically used for inbound traffic to redirect connections to internal resources. DNAT rules are not relevant for controlling outbound access based on FQDNs.

---

### Question 49

You are using Azure Application Gateway as a web application firewall (WAF). You want to protect your application from common web attacks like SQL injection and cross-site scripting. How can you configure WAF rules to mitigate these threats?

**Options:**

- **A.** Enable the default WAF policy. ✅
- **B.** Create custom WAF rules to block specific patterns or keywords.
- **C.** Deploy a third-party WAF solution alongside Application Gateway.
- **D.** Use Azure Security Center to automatically detect and mitigate web attacks.

**Correct answer:** A

**Explanation:**

**Correct Options:**

**A. Enable the default WAF policy.**

- Azure Application Gateway’s WAF comes with a **default WAF policy** that includes pre-configured rules to protect against common web vulnerabilities, such as SQL injection and cross-site scripting (XSS). Enabling the default policy is a quick and effective way to mitigate these threats.

**B. Create custom WAF rules to block specific patterns or keywords.**

- In addition to the default rules, you can create **custom WAF rules** to block specific patterns, keywords, or behaviors that are unique to your application. This allows for more granular control and protection tailored to your specific needs.

The **best answer** between **A** and **B** depends on the context of the question and the level of customization required for your WAF configuration. Let’s break it down:

**A. Enable the default WAF policy.**

- **Strengths**:

- The default WAF policy is pre-configured with rules to protect against common web vulnerabilities, such as SQL injection and cross-site scripting (XSS).

- It is quick and easy to enable, requiring minimal configuration.

- Ideal for organizations that need basic protection without the need for customization.

- **Use Case**:

- Best suited for scenarios where you want to quickly enable protection without tailoring the rules to specific application requirements.

**B. Create custom WAF rules to block specific patterns or keywords.**

- **Strengths**:

- Custom WAF rules allow you to define specific patterns, keywords, or behaviors to block, providing granular control over the protection mechanism.

- Ideal for organizations with unique application requirements or specific security concerns that are not covered by the default rules.

- **Use Case**:

- Best suited for scenarios where you need to tailor the WAF rules to address specific threats or application behaviors.

**Best Answer:**

**A. Enable the default WAF policy.**

- **Reason**: The question specifically asks about protecting against **common web attacks like SQL injection and cross-site scripting**, which are already covered by the default WAF policy. Enabling the default policy is the most straightforward and effective way to mitigate these threats without requiring additional configuration.

**Why Not B?**

While creating custom WAF rules (Option B) is a valid approach, it is more relevant when you need to address **specific or unique threats** that are not covered by the default rules. Since the question focuses on **common web attacks**, the default WAF policy (Option A) is sufficient and more aligned with the exam’s focus on using built-in Azure features effectively.

**Incorrect Options:**

**C. Deploy a third-party WAF solution alongside Application Gateway.**

- While third-party WAF solutions can provide additional features, this option is not necessary when using Azure Application Gateway’s built-in WAF. The built-in WAF is sufficient to protect against common web attacks like SQL injection and XSS.

**D. Use Azure Security Center to automatically detect and mitigate web attacks.**

- Azure Security Center provides threat detection and security recommendations but does not directly configure or enforce WAF rules in Application Gateway. WAF rules must be configured within the Application Gateway settings.

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

### Question 52

A company currently has an on-premise data center. The data center has 2 VPN devices. They also have setup a Virtual Network in Azure. They need to setup a site-to-site VPN connection. It needs to be ensured that if a single instance of an Azure gateway fails, or if a single on-premise VPN device fails, then the failure will not cause an interruption longer than 2 minutes.

Based on the requirement what is the minimum number of Public IP addresses that would be required to be setup in Azure?

**Options:**

- **A.** A. 1
- **B.** B. 2 ✅
- **C.** C. 3
- **D.** D. 4

**Correct answer:** B

**Explanation:**

Correct Answer:

✅ B. 2

To meet the high availability (HA) requirement, the company needs to deploy an Active-Active Azure VPN Gateway.

An Active-Active VPN Gateway requires two public IP addresses because it creates two instances of the VPN Gateway in Azure.

These two public IPs are used to establish separate tunnels to both on-premises VPN devices, ensuring redundancy.

This configuration ensures that if one instance of the VPN gateway or one on-premises VPN device fails, the other tunnel remains active, keeping the downtime under 2 minutes.

Thus, the minimum number of public IP addresses required is 2.

Answers:

❌ A. 1Explanation:

A single Azure VPN Gateway in an Active-Passive mode uses only one public IP address.

If the single VPN Gateway instance fails, there will be a longer downtime while Azure automatically fails over to a new instance.

This setup does not meet the 2-minute failover requirement.

❌ C. 3Explanation:

Active-Active VPN Gateways only require 2 public IP addresses, not 3.

Azure does not support a three-instance VPN Gateway setup, making this option unnecessary.

❌ D. 4Explanation:

4 public IP addresses would only be needed if there were 2 separate VPN Gateways, which is not required for this scenario.

The Active-Active configuration only requires 2 public IPs, making 4 excessive and unnecessary.

---

### Question 54

A company needs to deploy the following architecture to Azure

The architecture would consist of a load balancer that should only accept request via private IP addresses and should not flow via the internet. The Load balancer would direct requests to database servers hosted on Virtual machines.

You need to ensure that all requests for the Remote Desktop protocol for the virtual machine are accepted on a custom port number of 3400. Which of the following is the right powershell command to execute for this requirement?

**Options:**

- **A.** A. New-AzLoadBalancerInboundNatRuleConfig ✅
- **B.** B. New-AzLoadBalancerProbeConfig
- **C.** C. New-AzLoadBalancerRuleConfig
- **D.** D. New-AzLoadBalancer

**Correct answer:** A

**Explanation:**

Correct Answer:

✅ A. New-AzLoadBalancerInboundNatRuleConfig

New-AzLoadBalancerInboundNatRuleConfig is the correct command because Inbound NAT rules are used to forward specific traffic (e.g., RDP on port 3400) to a particular VM.

In this scenario, since RDP traffic on port 3400 needs to be directed to the virtual machines, an Inbound NAT Rule is required.

This command helps configure an Inbound NAT Rule that allows RDP traffic on port 3400 to be forwarded to the target VM.

It ensures that RDP traffic can be securely accessed while the Load Balancer remains private (using private IP addresses).

**Ref: ** New-AzLoadBalancerInboundNatRuleConfig

Answers:

❌ B. New-AzLoadBalancerProbeConfigExplanation:

Health probes are used by the load balancer to monitor the health of backend VMs, ensuring traffic is sent only to healthy instances.

The New-AzLoadBalancerProbeConfig command is used to define these health probes but does not configure inbound NAT rules for RDP access on port 3400.

Since the question requires allowing RDP access, this command is incorrect.

**Ref:  New-AzLoadBalancerProbeConfig**

❌ C. New-AzLoadBalancerRuleConfigExplanation:

Load Balancer rules are used to distribute traffic across multiple backend VMs, defining how traffic is forwarded.

The New-AzLoadBalancerRuleConfig command is used to define rules for load-balancing incoming requests, but it is not used to configure NAT rules for RDP access.

Since the requirement is not about distributing RDP traffic across multiple VMs but rather redirecting it to a specific VM, this command is incorrect.

**Ref: New-AzLoadBalancerRuleConfig**

❌ D. New-AzLoadBalancerExplanation:

New-AzLoadBalancer is used to create a new Azure Load Balancer.

However, the question specifically asks for a command to allow RDP access on a custom port (3400), which requires an Inbound NAT rule, not just creating a load balancer.

Since this command does not configure NAT rules or allow RDP access, it is incorrect.

**Ref: New-AzLoadBalancer**

---

## Practice Set 10

Source: https://skillcertpro.com/az-104-exam-questions/10/

### Question 2

**Scenario:** Your company is running a critical line-of-business application on two Azure Virtual Machines (VM1 and VM2) in the same virtual network.

You need to ensure the application remains available during planned maintenance or unexpected failures, with these requirements:

- Update and restart the VMs individually without causing application downtime.

- Automatically distribute incoming traffic to the healthy VM.

**Which of the following Azure services would BEST meet these requirements?**

- **Option A.** Azure Front Door with Availability Zones

- **Option B.** Azure Load Balancer with Availability Sets

- **Option C.** Azure Traffic Manager with Availability Sets

- **Option D.** Azure Application Gateway with Availability Zones

**Options:**

- **A.** Azure Front Door with Availability Zones
- **B.** Azure Load Balancer with Availability Sets ✅
- **C.** Azure Traffic Manager with Availability Sets
- **D.** Azure Application Gateway with Availability Zones

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Azure Load Balancer with Availability Sets** Correct because an **Azure Load Balancer** distributes incoming traffic across multiple VMs in the same virtual network. Combined with **Availability Sets**, it ensures that at least one VM remains available during planned maintenance or unexpected failures. This setup allows you to restart or update VMs individually while traffic is automatically routed to the healthy VM, achieving **zero downtime** for the application.

### Incorrect

**Option A. Azure Front Door with Availability Zones** Incorrect because Azure Front Door is a **global load balancer** designed for routing traffic across multiple regions. It is not the best fit for distributing traffic between VMs in the same virtual network.

**Option C. Azure Traffic Manager with Availability Sets** Incorrect because Azure Traffic Manager is a **DNS-based traffic distribution service** that directs traffic across regions or endpoints. It does not provide real-time load balancing within a single virtual network, so it cannot guarantee zero downtime during VM updates.

**Option D. Azure Application Gateway with Availability Zones** Incorrect because Application Gateway is a **Layer 7 (HTTP/HTTPS) load balancer** with features like SSL termination and WAF. While it can distribute traffic, it is more complex and not necessary for this scenario. The requirement is simple VM-level load balancing, which is best handled by Azure Load Balancer.

---

### Question 3

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution.

You manage a virtual network named VNet1 that is hosted in the West US Azure region.

VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server.

You need to inspect all the network traffic from VM1 to VM2 for a period of three hours.

Solution: From Performance Monitor, you create a Data Collector Set (DCS).

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No

Explanation

Performance Monitor Data Collector Sets (DCS) in Windows Server are primarily for:

Collecting performance counters (CPU, memory, disk, etc.)

Tracking system performance over time

Inspecting all network traffic between two VMs (VM1 → VM2) requires packet-level analysis or flow logging, not just performance counters.

Recommended solutions:

Azure Network Watcher – Packet Capture

Network Security Group (NSG) Flow Logs with Traffic Analytics

Reference(s):

https://docs.microsoft.com/en-us/azure/azure-monitor/insights/network-performance-monitor

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

### Question 14

You try to connect to a Windows Server VM running in Azure, but the connection fails. You begin investigating the problem by taking a look at the Networking settings:

You need to establish a Remote Desktop connection to VM-01. What should you do to fix the problem?

**Options:**

- **A.** Change the priority of the RDP rule
- **B.** Attach another network interface
- **C.** Delete the DenyAllInBound rule
- **D.** Start VM-01 ✅

**Correct answer:** D

**Explanation:**

Taking a closer look at the information available at the network interface level should provide the resolution.

In this case, the NIC Public IP is not available, which means that the VM is not running.

After powering on the VM, the public IP will be populated and we will be able to connect to the Windows Server VM. The first rule, Allow_RDP, allows RDP traffic to the VM.

**Reference:**

https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-public-ip-address

---

### Question 16

**You have an Azure subscription that contains the resources shown in the following table. You need to create a network interface named NIC1. In which location can you create NIC1?**

You need to create a network interface named NIC1.

In which location can you create NIC1?

**Options:**

- **A.** East US and North Europe only
- **B.** East US only ✅
- **C.** East US, West Europe, and North Europe
- **D.** East US and West Europe only

**Correct answer:** B

**Explanation:**

### Correct

**Option B. East US only**

- Correct.

- A **network interface (NIC)** in Azure must be created in the **same region as the virtual network (VNet)** it will connect to.

- If the VNet exists only in **East US**, then NIC1 can only be created in **East US**.

- NICs cannot span regions; they are region‑bound to their associated VNet.

### Incorrect

**Option A. East US and North Europe only**

- Incorrect.

- North Europe is not valid unless a VNet exists there. Since the VNet is only in East US, NIC1 cannot be created in North Europe.

**Option C. East US, West Europe, and North Europe**

- Incorrect.

- Same reasoning: NICs must be in the same region as the VNet. West Europe and North Europe are invalid because the VNet is not in those regions.

**Option D. East US and West Europe only**

- Incorrect.

- West Europe is not valid because the VNet is only in East US.

---

### Question 18

You are running three virtual machines in Azure, deployed in Subnet-01, inside vNET1 virtual network. Each virtual machine has a public IP address. The virtual machines host several applications that are accessible over port 443 to users on the Internet.

Your on-premises network has a site-to-site VPN connection to vNet1.

You discover that the virtual machines can be accessed by using the Remote Desktop Protocol (RDP) from the Internet and from the on-premises network.

You need to prevent RDP access to the virtual machines from the Internet, unless the RDP connection is established from the on-premises network. The solution must ensure that all other applications can still be accessed by the Internet users.

What should you do?

**Options:**

- **A.** Modify the address space of the local network gateway
- **B.** Create a deny rule in a network security group (NSG) that is linked to Subnet-01 ✅
- **C.** Remove the public IP addresses from the virtual machines
- **D.** Modify the address space of Subnet-01

**Correct answer:** B

**Explanation:**

Here’s how the overall picture looks like:

The question states that only RDP traffic coming from the Internet should be denied. RDP traffic coming from the on-premises data center needs to be permitted, so this RDP traffic will traverse through the site-to-site VPN tunnel established between Azure vNET1 and on-prem DC.

In the NSG, you would need to define two rules actually. In the first rule, with a higher priority (lower priority number), you would Allow RDP traffic from on-prem DC. In the second rule, you would deny RDP traffic from any location.

The network security group would like this:

In this example, I have considered that the IP subnet used in the on-prem DC is 192.168.0.0/24, so that is the source of the traffic coming to our three VMs. So this traffic is permitted, but RDP traffic coming from any other source will be denied by the second rule, so this includes traffic from the internet as requested by the question.

Reference:

https://docs.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview

---

### Question 21

You plan to deploy five virtual machines to a virtual network subnet.

Each virtual machine will have a public IP address and a private IP address.

Each virtual machine requires the same inbound and outbound security rules.

What is the minimum number of network security groups that you require?

**Options:**

- **A.** A. 1 ✅
- **B.** B. 2
- **C.** C. 5
- **D.** D. 10

**Correct answer:** A

**Explanation:**

A network security group can have multiple network interfaces assigned to it as shown in the below diagram

Since the question clearly states that the virtual machines all require the same inbound and outbound security rules, hence we should use just the same network security group for all network interfaces

For more information on network security groups, please visit the below URL

https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-vnet-plan-design-arm

---

### Question 23

**Azure Site-to-Site VPN Configuration**

A company has an existing Azure subscription with the following Virtual Network configuration:

**Name**
**Type**
**Address Range**
**Part of Network**

skillcertpro-net
Virtual Network
10.1.0.0/16
N/A

SubnetA
Subnet
10.1.0.0/24
skillcertpro-net

GatewaySubnet
Subnet
10.1.255.0/27
skillcertpro-net

A Site-to-Site VPN connection needs to be established with an on-premise network. The on-premise VPN device has an IP address of 12.10.79.10, and the on-premise network’s IP address range is 10.101.1.0/24.

To proceed, you need to configure the Local Network Gateway as follows:

Which of the following would you enter as the address range for the Local Network gateway?

**Options:**

- **A.** A. 10.1.0.0/24
- **B.** B. 10.1.255.0/27
- **C.** C. 10.101.1.0/24 ✅
- **D.** D. 10.1.0.0/16

**Correct answer:** C

**Explanation:**

### Correct

**Option C. 10.101.1.0/24** Explanation: This is correct. The address range 10.101.1.0/24 is a valid private IP range that can be used for an Azure Virtual Network. It falls within the **10.0.0.0/8 private IP address space**, which is reserved for internal networking and supported by Azure VNets.

### Incorrect

**Option A. 10.1.0.0/24** Incorrect. While 10.1.0.0/24 is technically a valid private IP range, in this exam context it is not the correct answer because the question is testing recognition of the specific valid range provided (10.101.1.0/24).

**Option B. 10.1.255.0/27** Incorrect. This subnet is too small (only 32 IP addresses, with fewer usable hosts). Azure VNets require larger address spaces to support subnets and services.

**Option D. 10.1.0.0/16** Incorrect. Although 10.1.0.0/16 is a valid private range, it overlaps with the smaller 10.1.0.0/24 and does not match the expected correct configuration in this exam scenario.

---

### Question 24

You plan to use Azure Network Watcher to perform the following task:

Identify a security rule that prevents a network packet from reaching an Azure virtual machine.

Which Azure feature should you use for this task?

**Options:**

- **A.** IP flow verify ✅
- **B.** Next hop
- **C.** Packet capture
- **D.** Security group view
- **E.** Traffic Analytics

**Correct answer:** A

**Explanation:**

IP Flow Verify ✅

Checks if a packet is allowed or denied to or from a VM based on NSG rules.

Tells you exactly which security rule blocked or allowed traffic.

Use case: Diagnose why a connection to a VM fails.

Next Hop

Determines the next hop of a packet from a VM to its destination.

Use case: Troubleshoot routing issues.

Not for NSG/security rule analysis. ❌

Packet Capture

Captures network traffic to and from a VM for detailed analysis.

Use case: Inspect packet contents, not NSG rule evaluation. ❌

Security Group View

Shows all NSG rules applied to a VM or subnet.

Use case: Visibility of rules, but does not analyze a specific packet. ❌

Traffic Analytics

Provides aggregated flow and traffic insights.

Use case: Monitoring and reporting, not per-packet rule evaluation. ❌

Reference:

https://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-monitoring-overview

Quick Preview:

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

### Question 26

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer.

The effective network security configurations for VM2 are shown in the following exhibit:

You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.

Solution: You modify the load balancing rule configuration to listen for traffic on TCP port 443.

Does this meet the goal?

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- Correct because if the load balancing rule is not configured to listen on TCP port 443, traffic on that port will fail.

- By modifying the load balancing rule to explicitly listen on port 443, the Load Balancer can properly distribute HTTPS traffic to VM1 and VM2.

- This solution directly addresses the connectivity issue by ensuring the Load Balancer is handling traffic on the required port.

### Incorrect

**Option B. No**

- Incorrect because the failure in this scenario is due to the Load Balancer not listening on port 443.

- Saying “No” would imply that modifying the load balancing rule does not solve the problem, which is not true.

- Once the rule is updated, the traffic from 131.107.100.50 over TCP 443 can be successfully routed.

###

---

### Question 30

**Azure Network Configuration for Intrusion Detection**

Current Network Topology:

A company’s Azure environment currently includes the following virtual networks (VNets):

- skillcertlab-vnet1: 10.1.0.0/16

- skillcertlab-vnet2: 10.2.0.0/16

- skillcertlab-vnet3: 10.3.0.0/16

All virtual networks host various virtual machines (VMs) with diverse workloads.

Requirement:

A new virtual machine, named “skillcertlab-detect,” will be deployed within skillcertlab-vnet2. This VM will have intrusion detection software installed. The critical requirement is to ensure all traffic across all virtual networks (skillcertlab-vnet1, skillcertlab-vnet2, and skillcertlab-vnet3) is routed through the “skillcertlab-detect” virtual machine.

Question:

Which additional Azure resources or configurations are necessary to ensure all network traffic is directed through the virtual machine hosting the intrusion detection software?

**Options:**

- **A.** A. A new route table ✅
- **B.** B. Add an address space
- **C.** C. Add DNS servers
- **D.** D. Add a service endpoint

**Correct answer:** A

**Explanation:**

In order to ensure that traffic is routed via the intrusion-based device, you need to setup a route table and add the route table to the subnets in the other virtual networks.

The diagram of the hub and spoke model also shows the use of a User defined route which is nothing but a custom route table.

Since this is clearly given in the Microsoft documentation, all other options are incorrect

For more information on working with route tables, please visit the below URL

https://docs.microsoft.com/en-us/azure/virtual-network/tutorial-create-route-table-portal

---

### Question 31

You have a Network Security Group (NSG) associated with an Azure subnet.

When you execute Get-AzureRmNetworkSecurityRuleConfig, you receive the following security rules:

Based on these rules, are FTP connections from 1.2.3.4 to 10.0.0.10/32 allowed?

**Options:**

- **A.** Allowed
- **B.** Dropped ✅
- **C.** Forwarded

**Correct answer:** B

**Explanation:**

Traffic will be dropped due to IP mismatch.

https://docs.microsoft.com/en-us/azure/virtual-network/manage-network-security-group

---

### Question 33

A company has the following resources defined in Azure:

- A Virtual Network named skillcertpro-net which connects to an on-premise network using a site-to-site VPN.

- The Virtual Network contains a subnet named SubnetA.

- The subnet is associated with a Network Security Group named skillcertpro-nsg.

- The subnet contains a Basic internal Load Balancer named skillcertprolg.

- The Load Balancer has three Azure Virtual Machines in the backend pool.

The company has a requirement to collect data about the IP addresses that connect to the Load Balancer. They also want their data team to run interactive queries from the Azure portal against the collected data.

Which of the following would be a resource that would need to be created for this purpose?

**Options:**

- **A.** A. An Azure Event Grid
- **B.** B. An Azure Log Analytics Workspace ✅
- **C.** C. An Azure Storage Account
- **D.** D. None of the above.

**Correct answer:** B

**Explanation:**

You can perform Interactive queries using Log Analytics. The below snapshot is taken from the Microsoft documentation

Option A is incorrect since this is used as an Event Hub

Option C is incorrect since this is used primarily for storage purposes

For more information on Log Analytics, please go to the below URL

https://docs.microsoft.com/en-us/azure/azure-monitor/overview

---

### Question 35

You are currently running in your Azure subscription a virtual machine named VM-01. You install and configure a web server and a DNS server on VM-01. VM-01 has the inbound network security rules shown in the following exhibit:

Select the option that completes correctly the following sentence:

Internet users ………. .

**Options:**

- **A.** can connect to only the DNS server on VM-01
- **B.** can connect to only the web server on VM-01 ✅
- **C.** can connect to the web server and DNS server on VM-01
- **D.** cannot connect to the web server and DNS server on VM-01

**Correct answer:** B

**Explanation:**

### Correct

**Option B. can connect to only the web server on VM‑01**

- Correct.

- Inbound NSG rules determine which ports are open to traffic from the internet.

- A web server typically listens on **port 80 (HTTP)** or **443 (HTTPS)**. If the NSG allows inbound traffic on those ports but does not allow DNS traffic (port 53), then internet users can reach the web server but not the DNS server.

### Incorrect

**Option A. can connect to only the DNS server on VM‑01**

- Incorrect.

- DNS requires port **53** (UDP/TCP). If the NSG does not allow inbound traffic on port 53, internet users cannot connect to the DNS server.

**Option C. can connect to the web server and DNS server on VM‑01**

- Incorrect.

- This would only be true if inbound rules allowed both port 80/443 (web) and port 53 (DNS). Since only web traffic is permitted, this is not correct.

**Option D. cannot connect to the web server and DNS server on VM‑01**

- Incorrect.

- The NSG does allow web traffic, so internet users can connect to the web server. Saying they cannot connect at all is wrong.

###

---

### Question 37

Scenario: Your company has multiple VNets in different regions hosting critical applications.

- Applications must communicate securely with each other.

- On‑premises users need access via site‑to‑site VPN.

- Limited public IP addresses available.

- Security and cost optimization are priorities.

**Which combination of Azure services BEST addresses these challenges?**

**Options:**

- **A.** Azure VNet Peering, Azure Firewall, and Azure Load Balancer
- **B.** Azure VNet Peering, Azure Bastion, and Azure VPN Gateway
- **C.** Azure Virtual WAN, Azure Firewall, and Azure VPN Gateway ✅
- **D.** Azure Virtual WAN, Azure Application Gateway, and Azure ExpressRoute

**Correct answer:** C

**Explanation:**

**Correct**

**Option C. Azure Virtual WAN, Azure Firewall, and Azure VPN Gateway**

- Correct because this combination directly addresses all requirements:

- **Azure Virtual WAN** → Provides scalable, cost‑optimized connectivity between VNets across regions and integrates with on‑premises via VPN.

- **Azure Firewall** → Ensures secure traffic filtering and centralized security policies across VNets.

- **Azure VPN Gateway** → Enables secure site‑to‑site connectivity for on‑premises users.

- Together, they minimize the need for multiple public IPs, optimize inter‑VNet traffic costs, and enforce strong security.

**Incorrect**

**Option A. VNet Peering + Firewall + Load Balancer**

- Incorrect because while VNet Peering allows secure communication between VNets, it does not scale well across multiple regions compared to Virtual WAN.

- Load Balancer is for distributing traffic, not for secure site‑to‑site connectivity.

**Option B. VNet Peering + Bastion + VPN Gateway**

- Incorrect because Bastion is for secure remote VM access (RDP/SSH) without public IPs, not for inter‑VNet or site‑to‑site connectivity.

- This setup does not optimize costs for multi‑region traffic.

**Option D. Virtual WAN + Application Gateway + ExpressRoute**

- Incorrect because Application Gateway is for web application layer (HTTP/HTTPS) traffic management, not general VM‑to‑VM or site‑to‑site communication.

- ExpressRoute provides private connectivity but requires dedicated circuits, which increases cost and does not align with the “limited public IPs” and “cost optimization” requirement.

---

### Question 38

You have an Azure subscription that contains several virtual machines (VMs) running in the East US region. You need to configure Azure Site Recovery (ASR) to replicate these VMs to the West US region for disaster recovery purposes. During failover, you want to ensure that the replicated VMs in the West US region are placed in a specific virtual network (VNET) and subnet.

Which of the following actions are REQUIRED to achieve this configuration? (Select all that apply)

**Options:**

- **A.** Customize the properties of each VM in the West US region after failover to ensure they are in the correct VNET and subnet.
- **B.** Create a Recovery Services vault in the West US region. ✅
- **C.** Enable replication for each VM in the East US region, selecting the West US region as the target. ✅
- **D.** Configure a replication policy in ASR, specifying the desired recovery point objective (RPO) and app-consistent snapshot frequency.
- **E.** Create a new virtual network (VNET) in the West US region. ✅
- **F.** Create a network mapping in ASR, associating the source VNET in the East US region with the target VNET and subnet in the West US region. ✅

**Correct answer:** B, C, E, F

**Explanation:**

Create a Recovery Services vault in the West US region

ASR requires a Recovery Services vault in the target region (not the source).

This vault orchestrates replication, failover, and recovery.

Enable replication for each VM in the East US region, selecting West US as the target

You must enable replication VM by VM.

The replication target must be the West US region.

Create a new virtual network (VNET) in the West US region

You need a target VNET in West US for failover VMs to connect to.

Without it, the VMs wouldn’t have a destination network.

Create a network mapping in ASR (East US → West US VNET and subnet)

Network mapping ensures that when failover happens, each VM connects to the correct VNET and subnet in the target region.

This is the step that guarantees your networking requirements are met.

❌ Not Required Actions:

Customize properties of each VM after failover → Optional. If network mapping is already set up, ASR will automatically connect VMs to the right subnet. Manual customization is only needed for special cases.

Configure a replication policy in ASR → Not required (a default policy is created automatically). You only configure one if you want to override default RPO/snapshot settings.

---

### Question 44

**Azure Virtual Machine and DNS Configuration Scenario**

Your company has deployed the following virtual machines to Azure:

**Name**
**IP Address**
**Connected to**

skillcertlabvm1
10.1.0.4
skillcertlabnetwork1/Subnet1

skillcertlabvm2
10.1.10.4
skillcertlabnetwork1/Subnet2

skillcertlabvm3
172.16.0.4
skillcertlabnetwork2/SubnetA

skillcertlabvm4
10.2.0.8
skillcertlabnetwork3/SubnetB

Subsequently, DNS services are installed on the virtual machine skillcertlabvm1.

The DNS server settings are then configured for each virtual network as detailed below:

You have to ensure all virtual machines can resolve DNS names by using the DNS service on the virtual machine skillcertlabvm1.

Which of the following would you implement for this requirement?

**Options:**

- **A.** A. Add service endpoints for the virtual network skillcertlabnetwork2 and skillcertlabnetwork3
- **B.** B. Add a service endpoint for the virtual network skillcertlabnetwork1
- **C.** C. Configure a conditional forwarder for the skillcertlabvm1 virtual machine
- **D.** D. Configure virtual network peering connections between all virtual networks ✅

**Correct answer:** D

**Explanation:**

Since the networks are isolated from each other, you still need to ensure that the machines can communicate across the virtual networks. And this can be accomplished with the help of the virtual network peering connections.

Options A and B are incorrect since service endpoints should be used when you want to connect virtual networks securely to other Azure based services.

Option C is incorrect since this should be used when you want to forward DNS requests to the Azure DNS servers.

For more information on virtual network peering connections, please visit the following URL

https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview

---

### Question 46

Your company currently has a Site-to-Site connection with an Azure Virtual Private network. The VPN device that is allocated on the on-premise side is going to undergo a change in its public IP address. You have to ensure the Site-to-Site VPN connection continues to work after the change. Which of the following steps would you need to carry out after the change in the public IP address on the on-premise VPN device ensuring minimum connection downtime? Choose the answer from the options given below

**Options:**

- **A.** A. Remove the VPN connection
- **B.** B. Stop the VPN connection
- **C.** C. Modify the local gateway IP address ✅
- **D.** D. Modify the VPN gateway address
- **E.** E. Recreate the VPN connection
- **F.** F. Start the VPN connection

**Correct answer:** C

**Explanation:**

C. Modify the local gateway IP address

Explanation:

When the public IP address of the on-premise VPN device changes, the correct action is to update the local gateway IP address in the Azure VPN configuration. This ensures that the Site-to-Site VPN connection is established correctly between Azure and the on-premise network.

Why not the others?

A. Remove the VPN connection: Not required, as you don’t need to remove the connection. Just update the IP address.

B. Stop the VPN connection: Stopping the VPN is unnecessary for just changing the IP address.

D. Modify the VPN gateway address: The VPN gateway in Azure does not change; it’s the on-premise device’s IP that changes.

E. Recreate the VPN connection: Recreating the connection is typically not necessary unless there are configuration changes that can’t be resolved by just updating the IP address.

F. Start the VPN connection: Starting the connection again is not needed unless it’s explicitly stopped.

https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-create-site-to-site-rm-powershell

---

### Question 47

### Azure Network Configuration Analysis

 

A company has established the following Virtual Networks within their Azure subscription:

Name
Address Space

skillcertlab-vnetA
10.1.0.0/16

skillcertlab-vnetB
10.2.0.0/16

The following subnets are configured within these Virtual Networks:

Name
Virtual Network

subnetA
skillcertlab-vnetA

subnetB
skillcertlab-vnetA

subnetC
skillcertlab-vnetB

Additionally, a private hosted zone named skillcertlab.local has been created, with skillcertlab-vnetA designated as its registration network.

The following virtual machines are then deployed into these subnets:

Name
Subnet

skillcertlabvm1
subnetA

skillcertlabvm2
subnetB

skillcertlabvm3
subnetC

Question: Would skillcertlabvm1 be able to resolve hosts in the skillcertlab.local private hosted zone?

**Options:**

- **A.** A.Yes ✅
- **B.** B.No

**Correct answer:** A

**Explanation:**

By default, the virtual network which is registered as the registration network for a private hosted zone, also automatically becomes a resolution network as well. Hence the virtual machines hosted in this network would be able to resolve the host names.

For more information on private hosted zones, please visit the below URL

https://docs.microsoft.com/en-us/azure/dns/private-dns-overview

---

### Question 50

**Azure Virtual Machine Remote Desktop Connectivity Scenario**

A company has the following virtual machines configured within their Azure subscription:

**Name**
**Operating System**
**Connected to**

skillcertlabvm1
Windows Server 2019
SubnetA

skillcertlabvm2
Windows Server 2019
SubnetB

- Public IP addresses are assigned to both virtual machines.

- At the operating system level, incoming Remote Desktop connections have been allowed on both VMs.

- Both SubnetA and SubnetB reside within the same virtual network.

Network Security Group (NSG) Configuration:

- A Network Security Group named skillcertlabnsg1 has been assigned to SubnetA. This NSG contains only the default rules.

- A Network Security Group named skillcertlabnsg2 has been assigned to the network interface of skillcertlabvm2. This NSG includes an additional custom rule with the following details:

- Priority: 100

- Name: skillcertlabrule

- Port: 3389

- Protocol: TCP

- Source: Any

- Destination: Any

- Action: Allow

Question:

Is it possible to establish a Remote Desktop connection from skillcertlabvm1 to skillcertlabvm2?

**Options:**

- **A.** A. Yes ✅
- **B.** B. No

**Correct answer:** A

**Explanation:**

The correct answer is **A. Yes**.

Here’s a breakdown of why it’s possible to remote desktop into skillcertlabvm2 from skillcertlabvm1:

**Subnet connectivity:** Both virtual machines are in the same virtual network, so they can communicate with each other directly.

**Remote Desktop allowed:** Remote Desktop connections are allowed at the operating system level on both virtual machines.

**Network Security Group:** skillcertlabvm2 has a network security group (skillcertlabnsg2) assigned to its network interface. This network security group has an additional rule that allows incoming TCP connections on port 3389 from any source. This rule effectively overrides the default rule in the network security group assigned to SubnetA (skillcertlabnsg1).

Therefore, despite SubnetA having a network security group with only the default rules, the additional rule on skillcertlabvm2’s network interface allows remote desktop connections from skillcertlabvm1.

https://docs.microsoft.com/en-us/azure/virtual-network/security-overview

---

### Question 52

A company currently has an Azure account and subscription. They want to host an application using Virtual Machines and a load balancer. There is a requirement to ensure that the application is made available 99.99% of the time. Which of the following would need to be in place? You also have to minimize costs associated with the solution. Choose 2 answers from the options given below

**Options:**

- **A.** A. Create a Basic Load balancer
- **B.** B. Create a Standard Load balancer ✅
- **C.** C. Add 2 Virtual Machines to the backend pool ✅
- **D.** D. Add a Virtual Machine to the backend pool

**Correct answer:** B, C

**Explanation:**

This is clearly mentioned in the Microsoft documentation

### Correct Answers:

B. Create a Standard Load Balancer

C. Add 2 Virtual Machines to the backend pool ✅

### Explanation

Requirement Recap:

Host an application using Virtual Machines (VMs).

Use a load balancer.

Ensure high availability for the application.

Why Standard Load Balancer (B) and not Basic (A):

Feature
Basic Load Balancer
Standard Load Balancer

Availability Zones
No
Yes

SLA
No SLA
99.99%

Backend pool size
Up to 100 VMs
Up to 1000 VMs

Secure by default
No
Yes (requires NSGs)

Standard Load Balancer supports high availability, better scalability, and works with Availability Zones, which aligns with the requirement.

Why 2 VMs in the backend pool (C) and not just 1 (D):

Load balancers require at least 2 VMs in the backend pool to distribute traffic and provide redundancy.

Adding only 1 VM would not provide high availability, failing the requirement.

https://azure.microsoft.com/en-us/support/legal/sla/load-balancer/v1_0/

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

### Question 2

You have several Azure virtual machines on a virtual network named VNet1.

You configure an Azure Storage account as shown below.

Based on the information presented in the graphic, select the answer choice that completes the following statement.

**“The virtual machines on the 10.2.9.0/24 subnet will have network connectivity to the file shares in the storage account ________________________________.”**

**Options:**

- **A.** always
- **B.** during a backup
- **C.** never ✅

**Correct answer:** C

**Explanation:**

### Correct

**Option C. never**

- **Correct because**:

- Azure Storage accounts can be restricted by **virtual network rules** and **firewall settings**.

- If the subnet **10.2.9.0/24** is **not included** in the storage account’s network rules, then VMs in that subnet will **never** have connectivity to the file shares.

- Connectivity is only possible if the subnet is explicitly allowed in the storage account configuration.

### Incorrect

**Option A. always**

- Incorrect because connectivity is not guaranteed unless the subnet is explicitly permitted.

- If the subnet is excluded, VMs cannot connect at all.

**Option B. during a backup**

- Incorrect because backup operations do not override network restrictions.

- Connectivity rules are enforced consistently, regardless of backup processes.

###

---

### Question 5

Your network contains an on-premises Active Directory Domain Services (AD DS) domain named contoso.com. The domain contains the servers shown in the following table.

You plan to migrate contoso.com to Azure.

You create an Azure virtual network named VNET1 that has the following settings:

- Address space: 10.0.0.0/16

- Subnet:

- Name: Subnet1

- IPv4: 10.0.1.0/24

You need to move DC1 to VNET1. The solution must ensure that the member servers in contoso.com can resolve AD DS DNS names.

How would you configure the **Name resolution**?

**Options:**

- **A.** Configure VNET1 to use a custom DNS server. ✅
- **B.** Configure VNET1 to use the default Azure-provided DNS server.
- **C.** Create an Azure Private DNS zone named contoso.com.
- **D.** Create an Azure public DNS zone named contoso.com.

**Correct answer:** A

**Explanation:**

**Option A: Configure VNET1 to use a custom DNS server**

**DC1 (domain controller)** provides **authoritative DNS** for contoso.com. Set VNET1 **custom DNS server IP** to DC1’s private IP (10.0.1.x). All VMs in VNET1 use **DC1 for AD DS name resolution** – essential for domain joins, authentication, Group Policy.

### Incorrect

**Option B: Default Azure DNS**

**Azure DNS (168.63.129.16)** cannot resolve **private AD DS domain names** (contoso.com internal records).

**Option C: Azure Private DNS zone**

**Hosts static DNS records**. Cannot provide **dynamic AD-integrated DNS** replication or **multi-master updates** required for domain controllers.

**Option D: Azure public DNS zone**

**Internet-facing public records only**. Exposes internal domain publicly – **security risk**.

---

### Question 9

You have an Azure subscription that contains the resources shown in the following table.

NSG1 is configured as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“VM1 can access storage1.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

### **Option A: Yes**

### intra-VNet access permitted by default.

### 
**Option B: No**

### no deny rule blocks storage ports.

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

### Question 12

You have an Azure subscription that contains a virtual network named VNet1.

VNet1 uses two ExpressRoute circuits that connect to two separate on-premises datacenters.

You need to create a dashboard to display detailed metrics and a visual representation of the network topology.

What should you use?

**Options:**

- **A.** Azure Virtual Network Watcher
- **B.** Azure Monitor Network Insights ✅
- **C.** a Data Collection Rule (DCR)
- **D.** Log Analytics

**Correct answer:** B

**Explanation:**

**Correct **

**Option B (Azure Monitor Network Insights):** This provides a comprehensive dashboard with detailed metrics, health monitoring, and visual network topology representations across resources like VNets and ExpressRoute circuits without configuration.

**Incorrect**

**Option A (Azure Virtual Network Watcher):** Offers diagnostic tools and topology views but lacks the integrated dashboard for detailed metrics and comprehensive visual topology across multiple subscriptions.

**Option C (a Data Collection Rule (DCR)):** Configures data collection for Azure Monitor but does not provide dashboards, metrics visualization, or topology views.

**Option D (Log Analytics):** Stores and queries log data but requires custom workbooks for visualization and lacks built-in network topology or dashboard features.

---

### Question 15

Your network contains an on-premises Active Directory Domain Services (AD DS) domain named contoso.com. The domain contains the servers shown in the following table.

You plan to migrate contoso.com to Azure.

You create an Azure virtual network named VNET1 that has the following settings:

- Address space: 10.0.0.0/16

- Subnet:

- Name: Subnet1

- IPv4: 10.0.1.0/24

You need to move DC1 to VNET1. The solution must ensure that the member servers in contoso.com can resolve AD DS DNS names.

How would you configure the** IP address**?

**Options:**

- **A.** Obtain an IP address automatically. ✅
- **B.** Use 10.0.1.3
- **C.** Use 10.0.2.1
- **D.** Use 192.168.2.1

**Correct answer:** A

**Explanation:**

### **Correct**

- **Option A. Obtain an IP address automatically**

- Correct: In Azure, domain controllers (DCs) should be configured to **obtain their IP address automatically via DHCP**.

- Azure assigns a **static private IP** to VMs internally when DHCP is enabled. This ensures proper DNS registration and avoids conflicts.

- Manually assigning IPs (like 10.0.1.3) is not recommended for DCs in Azure because it bypasses Azure’s IP management and can cause DNS resolution issues.

### **Incorrect**

- **Option B. Use **10.0.1.3

- Incorrect: While this IP is within the correct subnet (10.0.1.0/24), manually assigning it is not best practice in Azure. DHCP must be used to ensure proper DNS and IP management.

- **Option C. Use **10.0.2.1

- Incorrect: This IP is outside the defined subnet (10.0.1.0/24). It would not be valid for Subnet1 and would break connectivity.

- **Option D. Use **192.168.2.1

- Incorrect: This IP is outside the VNET1 address space (10.0.0.0/16). It cannot be used in this Azure virtual network.

---

### Question 19

You have an Azure subscription that has the public IP addresses shown in the following table.

You plan to deploy an Azure Bastion Basic SKU host named Bastion1.

Which IP addresses can you use for Bastion1?

**Options:**

- **A.** IP1 only ✅
- **B.** IP1 and IP2 only
- **C.** IP3, IP4, and IP5 only
- **D.** IP1, IP2, IP4, and IP5 only
- **E.** IP1, IP2, IP3, IP4, and IP5

**Correct answer:** A

**Explanation:**

**Correct:**

**Option A. IP1 only**

Azure Bastion **Basic SKU** requires a **Standard SKU, static, IPv4 public IP address** that is **not zone-redundant** and is **dedicated exclusively to the Bastion host**.

Based on the table in the question, **only IP1** meets all these requirements, so it is the only valid choice for deploying Bastion1.

**Incorrect:**

**Option B. IP1 and IP2 only**

IP2 does not meet the Azure Bastion Basic SKU requirements, such as the correct SKU, allocation method, or supported configuration, and therefore cannot be used.

**Option C. IP3, IP4, and IP5 only**

These IP addresses do not satisfy the mandatory Bastion requirements, which include using a Standard SKU static IPv4 public IP.

**Option D. IP1, IP2, IP4, and IP5 only**

Although IP1 is valid, the inclusion of IP2, IP4, and IP5 makes this option incorrect because those IPs are not supported for Azure Bastion Basic.

**Option E. IP1, IP2, IP3, IP4, and IP5**

This option incorrectly assumes that all listed public IPs can be used, but Azure Bastion Basic supports only a very specific public IP configuration, which is met by IP1 alone.

---

### Question 22

You have an Azure subscription. Users access the resources in the subscription from either home or from customer sites. From home, users must establish a point-to-site VPN to access the Azure resources. The users on the customer sites access the Azure resources by using site-to-site VPNs.

You have a line-of-business-app named App1 that runs on several Azure virtual machine. The virtual machines run Windows Server 2016. You need to ensure that the connections to App1 are spread across all the virtual machines.

What are two possible Azure services that you can use?

**Options:**

- **A.** an internal load balancer ✅
- **B.** a public load balancer
- **C.** an Azure Content Delivery Network (CDN)
- **D.** Traffic Manager
- **E.** an Azure Application Gateway ✅

**Correct answer:** A, E

**Explanation:**

### Correct

**option A. Internal load balancer**

Private IP distributes TCP/UDP traffic across VMs.

**option E. Azure Application Gateway**

Internal VNet mode balances HTTP/HTTPS to VM pool.

### Incorrect

**option B. Public load balancer**

Requires public IP endpoint.

**option C. Azure CDN**

Static content caching only.

**option D. Traffic Manager**

DNS routing; no Layer 4/7 distribution.

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

### Question 26

You need to configure a site-to-site VPN connection between your on-premises network and an Azure virtual network. Which VPN gateway type would you choose for the Azure side of the connection, and what are the considerations for selecting the appropriate gateway SKU?

**Options:**

- **A.** A. Point-to-site VPN gateway
- **B.** B. ExpressRoute gateway
- **C.** C. VNet-to-VNet VPN gateway
- **D.** D. Route-based VPN gateway ✅

**Correct answer:** D

**Explanation:**

### Correct

**option D. Route-based VPN gateway**

Route-based gateways use a routing table for traffic direction and support IPsec/IKEv1 or IKEv2, making them essential for site-to-site VPNs with dynamic routing capabilities and SKU options like VpnGw1 through VpnGw5 based on bandwidth needs.

### Incorrect

**option A. Point-to-site VPN gateway **

Designed for individual client connections using SSTP or IKEv2, not for connecting entire on-premises networks.

**option B. ExpressRoute gateway **

Provides private, dedicated fiber connections to Azure, not IPsec VPN over the public internet.

**option C. VNet-to-VNet VPN gateway **

Used for connecting Azure virtual networks to each other, not for on-premises site-to-site links.

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

### Question 35

You are implementing a hybrid cloud environment, and you need to extend your on-premises network to Azure. Which Azure networking service allows you to create a secure tunnel between your on-premises network and Azure virtual networks?

**Options:**

- **A.** ExpressRoute
- **B.** VNet Peering
- **C.** VPN Gateway ✅
- **D.** Azure Bastion

**Correct answer:** C

**Explanation:**

**Correct:**

**Option C. VPN Gateway**

An **Azure VPN Gateway** enables you to create a **secure, encrypted tunnel (site-to-site VPN)** between your on-premises network and an Azure virtual network over the public Internet. This is the standard and cost-effective solution for extending on-premises networks to Azure in a hybrid cloud setup.

**Incorrect:**

**Option A. ExpressRoute**

ExpressRoute provides a **private, dedicated connection** between on-premises infrastructure and Azure, not a VPN tunnel. While it is secure and suitable for hybrid environments, it does not create a VPN tunnel and is typically used for high-bandwidth, low-latency requirements.

**Option B. VNet Peering**

VNet peering connects **Azure virtual networks to each other**, not on-premises networks to Azure.

**Option D. Azure Bastion**

Azure Bastion is used for **secure RDP/SSH access to virtual machines** through the Azure portal and does not provide network connectivity between on-premises and Azure networks.

---

### Question 36

**Scenario:** You have an Azure subscription with virtual machines (VM1 and VM2). You deploy a **Standard Internal Load Balancer (LB1)** in **VNET1**. You need to ensure VM1 and VM2 can be added to the backend pool of LB1. The proposed solution is: Create two Standard public IP addresses and associate a Standard SKU public IP address to the NIC of each VM. The question asks: Does this meet the goal?.

You deploy a load balancer that has the following configurations:

Name: LB1

Type: Internal

SKU: Standard

Virtual network: VNET1

You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.

Solution: You create two Standard public IP addresses and associate a Standard SKU public IP address to the network interface of each virtual machine.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- **Correct because**:

- LB1 is an **Internal Load Balancer (ILB)**, which balances traffic **inside the virtual network**.

- To add VM1 and VM2 to the backend pool, they only need to be in the **same VNet/subnet** as the load balancer and use **Standard SKU NICs/IPs**.

- Associating **public IP addresses** is unnecessary for internal load balancers.

- In fact, adding public IPs does not enable backend pool membership—it only exposes the VMs externally, which is not required here.

- The correct approach is to ensure VM1 and VM2 have **NICs with Standard SKU private IPs** in VNET1.

### Incorrect

**Option A. Yes**

- Incorrect because while public IPs can be associated with VMs, they do not affect backend pool membership for an **internal load balancer**.

- This solution does not meet the goal and introduces unnecessary exposure of VMs to the internet.

###

---

### Question 40

You have a virtual network named skillcertpro-net as shown in the exhibit.

You need to peer skillcertpro-net to another virtual network named skillcertpro-net-2 in the same region. skillcertpro-net-2 has an address space of 10.2.0.0/16. You have to ensure that you can create the peering connection. Which of the following would you carry out to fulfil this requirement?

**Options:**

- **A.** A. Modify the address space of skillcertpro-net. ✅
- **B.** B. Configure a service endpoint on skillcertpro-net-2.
- **C.** C. Add a gateway subnet to skillcertpro-net.
- **D.** D. Create a subnet on skillcertpro-net and skillcertpro-net-2.

**Correct answer:** A

**Explanation:**

**Correct **

**Option A. Modify the address space of skillcertpro-net.**

**VNet Peering Prerequisites:**

text

✅ Non-overlapping address spaces ✓

✅ Same region (stated ✓)

✅ Both directions configured

✅ /0 not allowed

**Why Address Space Modification:**

**Scenario:** skillcertpro-net-2 likely has subnet within skillcertpro-net‘s range (e.g., 10.0.1.0/24 inside 10.0.0.0/16).

**Solution:** Expand skillcertpro-net to 10.1.0.0/16 or shrink to 10.0.0.0/23, ensuring no overlap.

**Incorrect **

**Option B. Configure service endpoint**

❌ **Wrong feature** – Service Endpoints optimize **PaaS service access** (Storage, SQL), **not VNet-to-VNet connectivity**.

**Option C. Add gateway subnet**

❌ **Wrong use case** – Gateway Subnet required for **VPN/ExpressRoute**, **not VNet peering** (direct backbone routing).

**Option D. Create subnet**

❌ **Irrelevant** – Subnets don’t affect peering eligibility. **Address space overlap** is VNet-level issue.

---

### Question 43

Your company has three offices. The offices are located in Miami, Los Angeles, and New York. Each office contains datacenter.

You have an Azure subscription that contains resources in the East US and West US Azure regions. Each region contains a virtual network. The virtual networks are peered. You need to connect the datacenters to the subscription. The solution must minimize network latency between the data centers.

What should you create?

**Options:**

- **A.** three Azure Application Gateways and one On-premises data gateway
- **B.** two virtual hubs and one virtual WAN ✅
- **C.** three virtual WANs and one virtual hub
- **D.** three On-premises data gateways and one Azure Application Gateway

**Correct answer:** B

**Explanation:**

### Correct

**option B – two virtual hubs and one virtual WAN**

Create one Virtual WAN containing two virtual hubs (East US, West US). Connect datacenters via site-to-site VPN/ExpressRoute to nearest hub. Virtual WAN automatically optimizes routing and minimizes latency through hub-to-hub mesh connectivity.

### Incorrect

**option A – three Azure Application Gateways and one On-premises data gateway**

Application Gateways handle web traffic load balancing, not hybrid datacenter connectivity.

**option C – three virtual WANs and one virtual hub**

Virtual WANs are containers; multiple WANs cannot share hubs. Architecture is reversed.

**option D – three On-premises data gateways and one Azure Application Gateway**

On-premises data gateways connect Power BI/PowerApps to on-premises data, not network connectivity to Azure VNets.

---

### Question 44

A company plans to use Azure Network watcher to perform the following tasks

“Find out if a network security rule is preventing a network packet from reaching a virtual machine hosted in an Azure virtual network”

“Find out if there is outbound connectivity between an Azure virtual machine and an external host”

Which of the following network watcher feature would you use for the following requirement?

“Find out if a network security rule is preventing a network packet from reaching a virtual machine hosted in an Azure virtual network”

**Options:**

- **A.** A. IP Flow Verify ✅
- **B.** B. Next Hop
- **C.** C. Packet Capture
- **D.** D. Traffic Analysis

**Correct answer:** A

**Explanation:**

**Correct **

**Option A. IP Flow Verify** ✓

✅ **Verifies if traffic is allowed/denied** between source VM → destination IP/port/protocol

✅ Shows **exact NSG rule blocking traffic**

✅ **Core diagnostic tool**

**Incorrect**

**Option B. Next Hop**

❌ **Routing diagnostics only** – Shows next hop for VM traffic (UDR, NVA routing). Doesn’t verify traffic allowance.

**Option C. Packet Capture**

❌ **Traffic capture tool** – Captures actual packets for analysis. Not for verifying specific flows.

**Option D. Traffic Analysis**

❌ **Deprecated/renamed** – Now part of **Traffic Analytics** (NSG flow logs analysis). Not a direct Network Watcher tool.

---

### Question 49

You have a virtual network named VNet1 that has the configuration shown in the following exhibit:

Before a virtual machine on VNet1 can receive an IP address from 10.2.1.0/24, you must first ………. .

**Options:**

- **A.** add a network interface
- **B.** add a subnet ✅
- **C.** add an address space
- **D.** delete a subnet
- **E.** delete an address space

**Correct answer:** B

**Explanation:**

**Correct:**

**Option B. add a subnet**

In Azure, IP addresses are assigned to virtual machines from a subnet, not directly from the virtual network address space. Even if VNet1 includes the 10.2.1.0/24 range in its address space, a VM cannot receive an IP address from that range until a subnet using 10.2.1.0/24 is created. Subnets are mandatory for IP allocation.

**Incorrect:**

**Option A. add a network interface**

A network interface is required for a VM, but it does not determine the IP address range. The IP address is allocated from the subnet associated with the network interface. Without an appropriate subnet, adding a NIC alone is insufficient.

**Option C. add an address space**

The 10.2.1.0/24 range already exists in the virtual network’s address space (as implied by the question). Address spaces define the overall IP ranges for the VNet, but IPs are not assigned directly from them—only from subnets.

**Option D. delete a subnet**

Deleting a subnet does not enable IP address assignment. It would reduce available IP ranges and could break existing resources rather than allow a VM to receive an IP address.

**Option E. delete an address space**

Removing an address space would further restrict available IP ranges in the virtual network and prevent IP assignment instead of enabling it.

---

### Question 51

A company is planning on hosting the following infrastructure in Azure

A web server listening on port 80

The web server would be hosted on an Azure Windows virtual machine

The web server would connect to a database server

The database server would be hosted using the Azure SQL database service

The company needs to ensure that when users go to the URL http://skillcertlab.com on the Internet , they are directed to the web server running on the virtual machine. Which of the following service could help fulfil this requirement?

**Options:**

- **A.** A. Azure Load Balancer
- **B.** B. Azure DNS ✅
- **C.** C. Azure Application Gateway
- **D.** D. Azure Virtual Network Peering

**Correct answer:** B

**Explanation:**

**Correct **

**Option B (Azure DNS):** Azure DNS provides domain name resolution for the web server, enabling external clients to reach the Windows VM listening on port 80 via a friendly hostname rather than a raw IP address.

**Incorrect**

**Option A:** Azure Load Balancer (Layer 4) handles TCP/UDP traffic distribution across multiple VMs; single web server doesn’t require load balancing.

**Option C:** Azure Application Gateway (Layer 7) provides web application firewall, URL routing, SSL termination; overkill for basic port 80 web server hosting.

**Option D:** Azure Virtual Network Peering connects VNets for resource communication; irrelevant for external web server accessibility.

---

### Question 53

You are developing a Bicep file to deploy a network security group (NSG). You need to define inbound and outbound security rules to control network traffic. How would you structure the NSG resource definition and specify the rule properties within the Bicep file?

**Options:**

- **A.** Define the ‘securityRules‘ property within the NSG resource definition ✅
- **B.** Group rules logically using the ‘securityRules‘ property
- **C.** Specify the ‘direction‘, ‘priority‘, ‘name‘, and ‘access‘ properties for each rule
- **D.** Use the ‘dependsOn‘ property to manage dependencies between rules

**Correct answer:** A

**Explanation:**

**Correct:**

**Option A. Define the ‘securityRules’ property within the NSG resource definition**

In a Bicep file, inbound and outbound rules for a Network Security Group are defined directly inside the NSG resource using the securityRules array. This is the correct structure for specifying NSG rules in declarative infrastructure code.

**Incorrect:**

**Option B. Group rules logically using the ‘securityRules’ property**

While securityRules does contain all rules, “grouping rules logically” is a conceptual description rather than a concrete requirement or structural instruction in Bicep. The platform does not support logical grouping beyond listing rules in the array.

**Option C. Specify the ‘direction’, ‘priority’, ‘name’, and ‘access’ properties for each rule**

These properties are indeed required for individual security rules, but this option alone does not answer how to structure the NSG resource definition. The key structural requirement is defining the securityRules property within the NSG resource.

**Option D. Use the ‘dependsOn’ property to manage dependencies between rules**

NSG rules do not have dependencies on each other. The dependsOn property is used for resource-level dependencies, not for ordering or managing NSG rule definitions.

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

### Question 56

**Scenario:** A team member has created a **Point‑to‑Site (P2S) VPN connection** between a computer named WorkstationA and an Azure Virtual Network. Another P2S VPN connection needs to be created between the same computer. The statement asks whether this is possible.

**Options:**

- **A.** A.Yes ✅
- **B.** B.No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- **Correct because**:

- A single client computer can establish **multiple Point‑to‑Site VPN connections** to different Azure Virtual Networks.

- Each connection requires its own **VPN client configuration package**.

- The only requirement is that the **address spaces of the VNets must not overlap**, otherwise routing conflicts occur.

- This is a supported Azure scenario, often used when connecting to multiple VNets for different workloads.

### Incorrect

**Option B. No**

- **Incorrect because**:

- Azure does not restrict a client machine to only one P2S VPN connection.

- The limitation is not on the number of connections but on proper configuration (non‑overlapping address ranges, certificates, and routing).

- Saying “No” ignores the fact that Azure supports multiple P2S connections from the same client.

###

---

## Practice Set 12

Source: https://skillcertpro.com/az-104-exam-questions/12/

### Question 1

You have several Azure virtual machines on a virtual network named VNet1.

You configure an Azure Storage account as shown below.

Based on the information presented in the graphic, select the answer choice that completes the following statement.

**“Azure Backup will be able to back up the unmanaged disks of the virtual machines in the storage account ________________________________.”**

**Options:**

- **A.** always
- **B.** during a backup
- **C.** never ✅

**Correct answer:** C

**Explanation:**

### Correct

**Option C. never**

- This is correct because **Azure Backup does not support backing up unmanaged disks stored in a storage account**.

- Azure Backup can protect **managed disks** attached to VMs, but unmanaged disks (stored as page blobs in a storage account) are not supported for backup through Recovery Services vaults.

- Therefore, the statement must be completed with **“never.”**

### Incorrect

**Option A. always**

- Incorrect because Azure Backup cannot back up unmanaged disks at all.

- Saying “always” would imply full support, which is not true.

**Option B. during a backup**

- Incorrect because this suggests that unmanaged disks could be backed up only at the time of backup operations.

- In reality, Azure Backup does not support unmanaged disks under any condition.

###

---

### Question 2

You have an Azure subscription that contains the virtual networks shown in the following table.

You need to deploy an Azure firewall named AF1 to RG1 in the West US Azure region.

To which virtual networks can you deploy AF1?

**Options:**

- **A.** VNET1 only ✅
- **B.** VNET1 and VNET2 only
- **C.** VNET1 and VNET4 only
- **D.** VNET1, VNET2, and VNET4 only
- **E.** VNET1, VNET2, VNET3, and VNET4

**Correct answer:** A

**Explanation:**

### Correct

**Option A. VNET1 only**

- Correct because an **Azure Firewall** must be deployed into a **dedicated subnet named AzureFirewallSubnet** within a **virtual network located in the same region as the resource group**.

- Since AF1 is being deployed to **RG1 in West US**, only **VNET1** (which is in West US) qualifies.

- VNETs in other regions (East US, Central US, etc.) cannot host AF1 directly because Azure Firewall is region‑specific.

### Incorrect

**Option B. VNET1 and VNET2 only**

- Incorrect because VNET2 is in a different region (not West US).

- Azure Firewall cannot span multiple regions; it must be deployed regionally.

**Option C. VNET1 and VNET4 only**

- Incorrect because VNET4 is also in a different region.

- Only VNET1 matches the West US requirement.

**Option D. VNET1, VNET2, and VNET4 only**

- Incorrect because both VNET2 and VNET4 are outside West US.

- This option incorrectly assumes cross‑region deployment is possible.

**Option E. VNET1, VNET2, VNET3, and VNET4**

- Incorrect because Azure Firewall cannot be deployed across all listed VNETs.

- Only VNET1 is valid since it matches the West US region.

###

---

### Question 5

Your organization is implementing Azure Virtual WAN to connect branch offices and remote users to Azure resources. Which components and features of Azure Virtual WAN are involved in establishing secure and scalable connectivity for your global network?

**Options:**

- **A.** A. Virtual WAN hubs ✅
- **B.** B. Azure Firewall ✅
- **C.** C. ExpressRoute gateways ✅
- **D.** D. Virtual network gateways ✅
- **E.** E. Azure Front Door

**Correct answer:** A, B, C, D

**Explanation:**

### **Correct**

**Option A. Virtual WAN hubs**

- Centralized hubs act as the core of Azure Virtual WAN, connecting branch offices, remote users, and Azure resources.

- They provide scalable, managed connectivity across regions.

- Correct because hubs are the backbone of Virtual WAN architecture.

**Option B. Azure Firewall**

- Azure Firewall can be integrated into Virtual WAN hubs to enforce security policies across traffic flows.

- Provides centralized protection and compliance for branch‑to‑Azure and branch‑to‑branch traffic.

- Correct because it ensures secure connectivity.

**Option C. ExpressRoute gateways**

- ExpressRoute gateways allow private, dedicated connections between on‑premises networks and Azure.

- Within Virtual WAN, they provide high‑performance, secure connectivity for enterprise workloads.

- Correct because ExpressRoute is a supported connectivity option in Virtual WAN.

**Option D. Virtual network gateways**

- VPN gateways are used to connect branch offices and remote users securely to Azure via IPsec tunnels.

- In Virtual WAN, these gateways are managed centrally through hubs.

- Correct because VPN gateways are a fundamental component of Virtual WAN connectivity.

### **Incorrect**

**Option E. Azure Front Door**

- Azure Front Door is a global application delivery service for web traffic (load balancing, acceleration, WAF).

- It is not part of Azure Virtual WAN’s networking and connectivity components.

- Incorrect because it focuses on application delivery, not branch/remote network connectivity.

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

### Question 8

You have an Azure subscription that contains multiple virtual machines in the West US Azure region.

You need to use Traffic Analytics in Azure Network Watcher to monitor virtual machine traffic.

Which two resources should you create?

**Options:**

- **A.** a storage account ✅
- **B.** a Microsoft Sentinel workspace
- **C.** a Log Analytics workspace ✅
- **D.** a Data Collection Rule (DCR) in Azure Monitor
- **E.** an Azure Monitor workbook

**Correct answer:** A, C

**Explanation:**

**Correct**

**Option A. a storage account**

because Traffic Analytics requires a **storage account** to store NSG flow logs. These logs capture traffic information from the virtual machines, which Traffic Analytics then processes.

**Option C. a Log Analytics workspace**

because Traffic Analytics uses a **Log Analytics workspace** to analyze and visualize the NSG flow logs. This workspace provides the query and reporting capabilities needed to monitor VM traffic effectively.

Together, these two resources (storage account + Log Analytics workspace) are mandatory for enabling Traffic Analytics in Azure Network Watcher.

**Incorrect**

**Option B. a Microsoft Sentinel workspace**

because Sentinel is a SIEM solution for security analytics, not required for Traffic Analytics. While Sentinel can ingest data from Log Analytics, it is not a prerequisite for Traffic Analytics.

**Option D. a Data Collection Rule (DCR) in Azure Monitor**

because DCRs are used for configuring data collection in Azure Monitor, but Traffic Analytics specifically relies on NSG flow logs stored in a storage account and analyzed in Log Analytics.

**Option E. an Azure Monitor workbook**

because workbooks are visualization tools for monitoring data. They can be used after Traffic Analytics is set up, but they are not required resources to enable Traffic Analytics itself.

---

### Question 10

You have an Azure subscription. The subscription contains virtual machines that run Windows Server and are configured as shown in the following table.

You create a public Azure DNS zone named adatum.com and a private Azure DNS zone named contoso.com.

You create a virtual network link for contoso.com as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“When VM1 starts, a record for VM1 is added to the contoso.com DNS zone.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Correct**

**Option A. Yes**

because when a VM is started in a virtual network linked to a private DNS zone (in this case, **contoso.com**), Azure automatically registers the VM’s hostname in that private DNS zone. Since VM1 is part of the linked network, its record will be added to the **contoso.com** DNS zone upon startup.

**Incorrect**

**Option B. No**

because this assumes that VM1’s record would not be added to the private DNS zone. However, Azure DNS private zones automatically integrate with the linked virtual network, ensuring that VM records are registered when they start. Therefore, saying “No” contradicts the expected behavior of Azure DNS zone integration.

---

### Question 15

Contoso Ltd. has deployed a virtual network named **VNET1** with the following subnet and NSG configuration:

**Subnet-to-NSG Mapping**

**Subnet Name**
**Address Range**
**Associated NSG**

Subnet1
10.10.1.0/24
NSG1

Subnet2
10.10.2.0/24
None

**Virtual Machine Configuration**

**VM Name**
**Subnet**
**IP Address**
**Associated NSG**

VM1
Subnet1
10.10.1.5
NSG2

VM2
Subnet2
10.10.2.5
None

VM3
Subnet2
10.10.2.6
None

**NSG Inbound Rules**

**NSG1 (applied to Subnet1):**

**Priority**
**Source**
**Destination**
**Port**
**Action**

101
10.10.2.0/24
10.10.1.0/24
TCP/1433
Allow

**NSG2 (applied to VM1 NIC):**

**Priority**
**Source**
**Destination**
**Port**
**Action**

101
10.10.2.5
10.10.1.5
TCP/1433
Block

For the following statement, select Yes if the statement is true. Otherwise, select No.

**Statement:** “VM2 can connect to the TCP port 1433 services on VM1.”

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No**

NSG Evaluation Order

- **NSG1** allows traffic from Subnet2 to Subnet1 on TCP/1433.

- **NSG2**, applied directly to **VM1’s NIC**, **blocks traffic from VM2’s IP (10.10.2.5)** to VM1 on TCP/1433.

When multiple NSGs apply (subnet-level and NIC-level), **both must allow the traffic**. If **either blocks**, the traffic is denied.

Why VM2 Cannot Connect

- VM2 has **no NSG**, so it sends traffic unrestricted.

- NSG1 (on Subnet1) **allows** traffic from VM2’s subnet.

- NSG2 (on VM1 NIC) **explicitly blocks** traffic from VM2’s IP to VM1 on TCP/1433.

- Therefore, **connection is denied**.

---

### Question 17

Your organization has sensitive data stored in Azure VMs and wants to protect against **data exfiltration from VNets**. Which **current Azure security services and features** can you implement to **detect and prevent unauthorized data transfers**?

**Options:**

- **A.** A. Azure Firewall Premium ✅
- **B.** B. Microsoft Sentinel
- **C.** C. Azure Network Security Groups (NSGs) ✅
- **D.** D. Microsoft Purview Information Protection
- **E.** E. Microsoft Defender for Cloud ✅

**Correct answer:** A, C, E

**Explanation:**

**Correct**

**A. Azure Firewall Premium**

- Azure Firewall Premium provides **advanced threat protection** including **TLS inspection, FQDN filtering, and threat intelligence-based filtering**.

- It can **block outbound traffic to unauthorized destinations**, which is a direct control against **data exfiltration**.

- **Azure Firewall (especially Premium SKU)** is the recommended solution for **network-level exfiltration prevention**.

**C. Azure Network Security Groups (NSGs)**

- NSGs allow you to **control inbound and outbound traffic** at the subnet or NIC level.

- While NSGs are **basic packet filters** compared to Azure Firewall, they can still **block outbound traffic to untrusted networks**.

- Exam trap: NSGs are **not application-aware** and cannot inspect traffic deeply, but they are still valid for **basic exfiltration prevention**.

**E. Microsoft Defender for Cloud**

- Defender for Cloud provides **continuous monitoring, anomaly detection, and adaptive network hardening**.

- It can detect **suspicious outbound traffic patterns** and recommend **NSG/Firewall rules** to prevent exfiltration.

- Exam note: Defender for Cloud is now a **core security service** in AZ-104 objectives, replacing older references to standalone monitoring tools.

**Incorrect:**

**B. Microsoft Sentinel**

- Sentinel is a **SIEM/SOAR solution**.

- It provides **monitoring, detection, and incident response** but does not directly **block or prevent traffic**.

- Sentinel is useful for **detecting suspicious activity after the fact**, but the question asks about **detecting and preventing exfiltration from VNets** — Sentinel is not a prevention tool at the network layer.

 

**D. Microsoft Purview Information Protection**

- Purview Information Protection (formerly AIP) is about **classifying, labeling, and protecting documents/emails**.

- It helps prevent **data leakage at the file level**, but it does not control **network traffic leaving VNets**.

- Exam trap: Purview is often confused with network exfiltration controls, but it’s focused on **data governance and sensitivity labels**, not VM/VNet traffic.

---

### Question 18

You have an Azure subscription that contains the virtual networks shown in the following table.

The subscription contains the virtual machines shown in the following table.

The subscription contains the Azure App Service web apps shown in the following table.

For the statement below, select Yes if the statement is true. Otherwise select No.

**“WebApp2 can communicate with VM1.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- By default, an Azure App Service web app (like WebApp2) runs in a multi-tenant environment and does **not** have direct network connectivity to VMs in a virtual network unless **VNet integration** or **Private Endpoints** are configured.

- Since the question does not mention any VNet integration or service endpoints, WebApp2 cannot directly communicate with VM1.

- Therefore, the statement is **false**.

### Incorrect

**Option A. Yes**

- This would only be true if WebApp2 had been configured with **VNet integration** into the same virtual network as VM1, or if VM1 had a **public IP address** accessible from WebApp2.

- The scenario does not mention such configurations.

- Assuming default settings, WebApp2 cannot reach VM1 directly, so “Yes” is incorrect.

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

### Question 26

You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer.

The effective network security configurations for VM2 are shown in the following exhibit.

You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.

You verify that the Load Balancer rules are configured correctly.

You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.

Solution: You delete the BlockAllOther441 inbound security rule.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No.

Analysis of the NSG Rules

To determine if deleting the rule helps, we must look at the logic of the existing rules in the exhibit:

- 
Rule 1 (Priority 100): Named Allow_131.107.100.50. This rule specifically allows traffic from the source 131.107.100.50 on Port 443.

- 
Rule 2 (Priority 200): Named BlockAllOther441. This rule denies traffic on Port 443 from “Any” source.

Why the solution fails

Azure NSG rules are processed in Priority order (lowest number first). Once a packet matches a rule, processing stops for that packet.

- 
Traffic from 131.107.100.50: When a packet arrives from this specific IP address targeting port 443, it hits Rule 1 (Priority 100) first.

- 
The Match: Since the IP and Port match Rule 1, the traffic is Allowed.

- 
The Outcome: Rule 2 (Priority 200) is never even evaluated for this specific traffic because a match was already found at Priority 100.

Therefore, the BlockAllOther441 rule is not the reason the connection is failing for that specific IP address. Deleting it will not change the behavior for 131.107.100.50, as that traffic is already permitted by the higher-priority rule.

Why the connection is actually failing

Since the NSG for VM2 is already configured to allow the traffic, the failure likely exists elsewhere in the architecture:

- 
VM1 Configuration: The question states App1 is on VM1 and VM2. The NSG for VM1 might be blocking the traffic.

- 
Guest OS Firewall: The Windows or Linux firewall inside VM2 might be blocking port 443.

- 
Load Balancer Health Probes: If the Load Balancer determines the VMs are “Unhealthy,” it will not route traffic to them, regardless of the NSG rules.

---

### Question 27

You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer.

The effective network security configurations for VM2 are shown in the following exhibit.

You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.

You verify that the Load Balancer rules are configured correctly.

You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.

Solution: You create an inbound security rule that denies all traffic from the 131.107.100.50 source and has a cost of 64999.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No.

To determine if the solution works, we must evaluate the current state of NSG2 shown in the second exhibit and how the proposed change affects it.

1. Current Status (Exhibit 2):

- 
There is already an Allow rule (Priority 100) named Allow_131.107.100.50 that permits traffic from the source 131.107.100.50 on Port 443.

- 
Despite this rule, connections are failing. In an Azure Load Balancer scenario, this usually happens because the NSG rule is missing for the other VM (VM1) or the return traffic/health probes are being blocked.

2. The Proposed Solution:

- 
The solution suggests creating a Deny rule for the same source (131.107.100.50) with a priority of 64999.

- 
In Azure NSGs, rules are processed in priority order: lower numbers are processed first.

- 
Since the existing Allow rule has a priority of 100, it will always be evaluated before a rule with priority 64999.

3. Result:

- 
The new Deny rule will effectively do nothing because the traffic will have already been allowed by the higher-priority rule (Priority 100).

- 
Furthermore, adding a Deny rule is the opposite of the goal, which is to ensure connections can be established.

---

### Question 30

Your company is expanding globally, and you need to create virtual networks in different Azure regions. How can you connect these virtual networks to form a unified global network and enable seamless communication between resources in different regions?

**Options:**

- **A.** Azure Virtual WAN ✅
- **B.** VNet Peering
- **C.** ExpressRoute
- **D.** VPN Gateway

**Correct answer:** A

**Explanation:**

**Correct**

**Option A. Azure Virtual WAN**

- Azure Virtual WAN is designed to connect multiple virtual networks across different regions into a unified global network.

- It provides centralized management, optimized routing, and seamless communication between resources in different regions.

- This is the best solution for global expansion scenarios where multiple VNets need to be interconnected efficiently.

**Incorrect**

**Option B. VNet Peering**

- VNet Peering allows direct connectivity between two VNets, but it is limited in scalability.

- While you can peer VNets across regions (Global VNet Peering), managing many VNets globally becomes complex and does not provide the centralized management that Virtual WAN offers.

- Not the recommended solution for large-scale global expansion.

**Option C. ExpressRoute**

- ExpressRoute provides a private connection between on-premises infrastructure and Azure, bypassing the public internet.

- It is not intended for connecting VNets across multiple Azure regions.

- Useful for hybrid connectivity, but not the right choice for forming a unified global Azure network.

**Option D. VPN Gateway**

- VPN Gateway enables secure connections between on-premises networks and Azure VNets or between VNets.

- While it can connect VNets, it is not optimized for large-scale, multi-region global networking.

- It introduces more complexity and latency compared to Azure Virtual WAN.

---

### Question 33

Your organization needs to secure access to Azure Storage accounts so that they are accessible only from specific VNets and public access is restricted. Which **Azure storage security feature** should you use to achieve this?

**Options:**

- **A.** A. Private Endpoints (Azure Private Link) ✅
- **B.** B. Microsoft Entra ID
- **C.** C. Network Security Groups (NSGs)
- **D.** D. Azure Firewall

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Private Endpoints (Azure Private Link)**

- **Correct because**:

- Private Endpoints provide secure connectivity to Azure Storage accounts via a **private IP address** in your VNet.

- This ensures traffic stays within the Microsoft backbone network and **blocks public endpoint access**.

- It directly meets the requirement of restricting access to **specific VNets** while preventing public exposure.

### Incorrect

**Option B. Microsoft Entra ID**

- Incorrect because Entra ID (Azure AD) provides **identity and access management**, not network‑level restrictions. It controls authentication/authorization but does not restrict access by VNet.

**Option C. Network Security Groups (NSGs)**

- Incorrect because NSGs control traffic between **subnets and VMs**, not access to **PaaS services like Azure Storage**. NSGs cannot enforce VNet‑only access to storage accounts.

**Option D. Azure Firewall**

- Incorrect because Azure Firewall provides centralized traffic filtering and protection, but it is not the recommended solution for restricting storage account access to VNets. It adds complexity and cost compared to Private Endpoints.

###

---

### Question 34

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

You have an Azure subscription that contains the resources shown in the following table:

VM1 connects to VNET1. You need to connect VM1 to VNET2.

Solution: You move VM1 to RG2, and then you add a new network interface to VM1.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because moving a VM to a different **resource group (RG2)** does not affect its network connectivity. Resource groups are logical containers and have no impact on networking.

- Adding a new network interface alone does not connect VM1 to VNET2 unless that NIC is explicitly associated with VNET2.

- Even then, a VM cannot be directly connected to two different VNets unless **VNet peering** or **multi-NIC configuration with proper subnet/VNet association** is set up.

- Therefore, this solution does **not** meet the stated goal.

### Incorrect

**Option A. Yes**

- Incorrect because the proposed steps do not establish connectivity between VM1 and VNET2.

- Simply moving VM1 to RG2 and adding a NIC does not automatically connect it to VNET2.

- The correct approach would involve either:

- Creating a NIC in VNET2 and attaching it to VM1 (if multi-NIC is supported), **or**

- Configuring **VNet peering** between VNET1 and VNET2 so VM1 can communicate with resources in VNET2.

---

### Question 35

You have an Azure subscription that contains the resources in the following table:

You install the Web Server server role (IIS) on VM1 and VM2, and then add VM1 and VM2 to LB1.

LB1 is configured as shown in the LB1 exhibit:

Rule1 is configured as shown in the Rule1 exhibit below:

Please evaluate the following statements and select Yes if the statement is true, otherwise select No:

VM1 is in the same availability set as VM2.

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- Correct because Azure Load Balancer requires that backend VMs (VM1 and VM2) be in the **same availability set** or part of a **virtual machine scale set**.

- This ensures the load balancer can distribute traffic across multiple **fault domains** and **update domains**, providing high availability.

- Since VM1 and VM2 are successfully added to LB1 and configured under Rule1, they must be in the same availability set.

### Incorrect

**Option B. No**

- Incorrect because if VM1 and VM2 were in **different availability sets**, they could not both be added to the same load balancer backend pool.

- Azure enforces this requirement to guarantee resiliency and proper load balancing.

-

---

### Question 36

**Case Study: Contoso Ltd.’s Azure Storage Optimization**

(Note: There are multiple questions in this test based on this case study.)

Contoso Ltd., a medium-sized manufacturing company, recently migrated its on-premises infrastructure to Azure. The company is now focused on optimizing its storage solution to achieve better performance, cost-efficiency, and scalability.

Current Environment:

Contoso currently leverages Azure Blob Storage to store various file types, including logs, backups, and images. They are using a single general-purpose v2 storage account configured with Locally Redundant Storage (LRS) in the East US region. Application logs are frequently accessed for analysis, while backups are accessed less often. The company aims to minimize costs while upholding high availability and durability for their data.

Requirements:

- Optimize Storage: Tailor the storage solution for different data types, balancing performance with cost-efficiency.

- High Availability: Ensure frequently accessed data remains highly available, even in the event of a regional outage.

- Cost-Effectiveness: Implement a cost-effective storage tier for data accessed infrequently.

- Minimal Overhead: Minimize the management overhead associated with the storage solution.

Security Requirements:

- Encryption: Protect sensitive data (e.g., backups) with robust encryption, both at rest and in transit.

- Access Restriction: Limit access to storage accounts to only authorized users and applications.

- Monitoring &amp; Auditing: Monitor and audit access to storage accounts for security and compliance.

- Data Protection: Implement measures to prevent accidental deletion of critical data.

Question:

To restrict access to Contoso’s storage accounts, which of the following network security controls would be most appropriate?

**Options:**

- **A.** Use Azure Private Link to create private endpoints for the storage accounts, accessible only within Contoso‘s virtual network. ✅
- **B.** Implement Network Security Groups (NSGs) to allow traffic only from specific IP addresses or ranges.
- **C.** All of the above.
- **D.** Enable Azure Firewall and create rules to control inbound and outbound traffic to the storage accounts.

**Correct answer:** A

**Explanation:**

The correct answer is A. Use Azure Private Link to create private endpoints for the storage accounts, accessible only within Contoso‘s virtual network.

The case study emphasizes protecting sensitive data and limiting access to authorized users/applications within their infrastructure.

- 
Private Endpoints: When you use a Private Endpoint, the storage account is assigned a private IP address from your VNet. This effectively brings the storage service into your private network.

- 
Security Benefit: It eliminates exposure to the public internet entirely. Traffic between your VNet and the storage account travels over the Microsoft backbone network, satisfying the “Access Restriction” requirement with the highest level of security.

- 
Case Study Alignment: It provides the “robust encryption in transit” and “access restriction” required without the complexity of managing large lists of IP addresses.

**Incorrect:**

B. Implement Network Security Groups (NSGs)

- 
NSGs are used to filter traffic entering or leaving a subnet. They cannot be applied directly to an Azure Storage Account (PaaS). While you could use an NSG to control traffic from a VM toward a storage account, it doesn’t “restrict access to the storage account” itself from other sources or the public internet effectively on its own.

D. Enable Azure Firewall

- 
While Azure Firewall can filter traffic, it is generally used for protecting the perimeter of a VNet or controlling outbound traffic (Egress). Implementing a full Azure Firewall instance just to restrict access to storage accounts introduces significant management overhead and cost, which violates the requirement for “Minimal Overhead.”

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

### Question 40

You have an Azure web app named **webapp1**. You have a virtual network named **VNET1** and an Azure virtual machine named **VM1** that hosts a MySQL database. VM1 connects to VNET1.

You need to ensure that **webapp1** can access the data hosted on **VM1**.

**Options:**

- **A.** Deploy an internal load balancer
- **B.** Peer VNET1 to another virtual network
- **C.** Connect webapp1 to VNET1 ✅
- **D.** Deploy an Azure Application Gateway

**Correct answer:** C

**Explanation:**

**Correct**

**Option C. Connect webapp1 to VNET1**

Reasoning:

- To allow **webapp1** (an Azure App Service) to access **VM1** (hosting MySQL inside VNET1), you must integrate the web app with the virtual network.

- This is achieved using **VNet Integration** for Azure App Service, which enables secure communication between the web app and resources inside the VNet.

- Once connected, webapp1 can directly reach VM1’s private IP address in VNET1.

**Incorrect**

**Option A. Deploy an internal load balancer**

- Incorrect because: An internal load balancer distributes traffic among VMs, but it does not enable connectivity between a web app and a VM in a VNet.

**Option B. Peer VNET1 to another virtual network**

- Incorrect because: Peering VNET1 to another VNet does not solve the problem. The requirement is for webapp1 to connect to VM1 inside VNET1, not to another VNet.

**Option D. Deploy an Azure Application Gateway**

- Incorrect because: Application Gateway is a Layer 7 load balancer for web traffic. It is not required for simple connectivity between a web app and a VM hosting a database.

---

### Question 41

You have an Azure subscription named Subscription1. Subscription1 contains the virtual machines in the following table:

Subscription1 contains a virtual network named VNet1 that has the subnets in the following table:

VM3 has multiple network adapters, including a network adapter named NIC3. IP forwarding is enabled on NIC3. Routing is enabled on VM3. You create a route table named RT1 that contains the routes in the following table:

You apply RT1 to Subnet1 and Subnet2.

Please evaluate the scenario and decide if the following statement is True or False.

VM3 can establish a network connection to VM1.

**Options:**

- **A.** TRUE ✅
- **B.** FALSE

**Correct answer:** A

**Explanation:**

TRUE.

To determine if VM3 can connect to VM1, we have to look at the routing path from the perspective of the source (VM3) and the destination (VM1).

1. The Path from VM3 to VM1

- 
VM3 is located on Subnet3 (10.0.3.0/24).

- 
VM1 is located on Subnet1 (10.0.1.0/24).

- 
The route table RT1 is applied only to Subnet1 and Subnet2. It is NOT applied to Subnet3.

- 
Therefore, VM3 uses the System Default Route to find VM1. In Azure, all subnets within the same VNet can communicate by default via the VNET Local route.

- 
Result: Traffic from VM3 can successfully reach VM1.

2. The Return Path (VM1 back to VM3)

- 
For a “network connection” to be established (like TCP), the return traffic must also be able to flow back.

- 
VM1 is on Subnet1, which has RT1 applied.

- 
We must check if RT1 breaks the path to VM3 (10.0.3.4).

- 
RT1 has routes for:

- 
10.0.1.0/24 (Subnet1 itself)

- 
10.0.2.0/24 (Subnet2)

- 
RT1 does not have a specific route for 10.0.3.0/24.

- 
When there is no matching UDR, Azure falls back to the System Default Route (VNET Local).

- 
Result: VM1 uses the default system route to send traffic back to Subnet3.

---

### Question 42

Your company goes ahead and registers a domain name of skillcertpro.com. You then go ahead and create an Azure DNS zone named skillcertpro.com. You then add an A record to the zone for a host named www that has an IP address of 123.10.9.147. But the users complain that they cannot resolve the URL www.skillcertpro.com to 123.10.9.147. This issue needs to be resolved.

You propose a solution to modify the SOA record in the skillcertpro.com zone

**Options:**

- **A.** A.Yes
- **B.** B.No ✅

**Correct answer:** B

**Explanation:**

No

- 
SOA (Start of Authority) Record: This record contains administrative information about the zone (such as the primary name server, the email of the zone administrator, and timers for refreshing). Modifying the SOA record does not create a link between your domain registrar and Azure.

- 
Automatic Generation: In Azure DNS, the SOA record is created automatically when you create the zone. While you can modify some of its properties (like the TTL or email), doing so will not fix the lack of resolution from the internet.

2. The Correct Solution: Name Server (NS) Delegation

To resolve the issue, you must perform Domain Delegation. This is a two-step process:

- 
Retrieve Name Servers: When you created the skillcertpro.com zone in Azure, Azure assigned it a specific set of four name servers (e.g., ns1-01.azure-dns.com, ns2-01.azure-dns.net, etc.).

- 
Update the Registrar: You must go to the website of the domain registrar where you purchased skillcertpro.com and replace their default name servers with the four Azure name servers.

Until this delegation is complete, the global DNS hierarchy does not know that Azure DNS is the “authoritative” source for your domain. When a user types www.skillcertpro.com, the request still goes to the registrar’s old servers, which have no knowledge of your new “A” record.

---

### Question 45

You have two Azure virtual networks named VNet1 and VNet2. VNet1 contains an Azure virtual machine named VM1. VNet2 contains an Azure virtual machine named VM2.

VM1 hosts a frontend application that connects to VM2 to retrieve data. Users report that the frontend application is slower than usual. You need to view the average round-trip time (RTT) of the packets from VM1 to VM2.

Which Azure Network Watcher feature should you use?

**Options:**

- **A.** IP flow verify
- **B.** Connection troubleshoot ✅
- **C.** Connection monitor
- **D.** NSG flow logs

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Connection troubleshoot**

- Correct because **Connection troubleshoot** in Azure Network Watcher allows you to test connectivity between two endpoints (VM1 → VM2).

- It provides **latency metrics**, including **average round‑trip time (RTT)**, packet loss, and hop details.

- This directly addresses the requirement to measure RTT between the two VMs.

### Incorrect

**Option A. IP flow verify**

- Incorrect because **IP flow verify** checks whether traffic is allowed or denied by **NSG rules**.

- It does not measure RTT or latency.

**Option C. Connection monitor**

- Incorrect because **Connection monitor** provides **continuous monitoring** of connectivity over time.

- While useful for long‑term tracking, it is not the tool for immediate RTT measurement in troubleshooting scenarios.

**Option D. NSG flow logs**

- Incorrect because **NSG flow logs** capture traffic flow information for auditing and analysis.

- They do not provide RTT or latency metrics.

###

---

### Question 46

You have a virtual network named VNet1 that has the configuration shown in the following exhibit:

Before a virtual machine on VNet1 can receive an IP address from 192.168.1.0/24, you must first ………. .

**Options:**

- **A.** add a network interface
- **B.** add a subnet
- **C.** add an address space ✅
- **D.** delete a subnet
- **E.** delete an address space

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Add an address space**

- A virtual network (VNet) in Azure must have an **address space** defined before any subnets or IP assignments can be created.

- Without defining the CIDR block (e.g., 192.168.1.0/24), Azure cannot allocate IP addresses to VMs.

- Once the address space is added, you can then create subnets and assign IPs to network interfaces.

- This is the prerequisite step that enables IP allocation from the specified range.

### Incorrect

**Option A. Add a network interface**

- Incorrect because a network interface (NIC) can only be created **after** the VNet and subnet exist.

- The NIC itself does not define the IP range; it consumes IPs from the subnet.

**Option B. Add a subnet**

- Incorrect because you cannot add a subnet until the **address space** is defined.

- Subnets are subdivisions of the address space, so the address space must come first.

**Option D. Delete a subnet**

- Incorrect because deleting a subnet does not help in assigning IPs.

- This action would remove existing configurations instead of enabling new IP allocation.

**Option E. Delete an address space**

- Incorrect because removing an address space would prevent IP allocation entirely.

- You need to **add**, not delete, the address space to make IPs available.

---

### Question 50

You have an Azure subscription that contains a virtual network named VNET1 in the East US 2 region. You have the following resources in an Azure Resource Manager template.

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

1. VM1 and VM2 can connect to VNET1.

2. If an Azure datacenter becomes unavailable, VM1 or VM2 will be available.

3. If the East US 2 region becomes unavailable, VM1 or VM2 will be available.

**Options:**

- **A.** Yes, Yes, Yes
- **B.** Yes, Yes, No ✅
- **C.** No, Yes, Yes
- **D.** No, No, Yes

**Correct answer:** B

**Explanation:**

### **Correct**

**Option B. Yes, Yes, No**

- **Statement 1: VM1 and VM2 can connect to VNET1 → Yes**

- Both VMs are deployed in the same region and can connect to the virtual network.

- **Statement 2: If an Azure datacenter becomes unavailable, VM1 or VM2 will be available → Yes**

- Azure provides availability zones within a region. If one datacenter fails, resources in another zone remain available.

- **Statement 3: If the East US 2 region becomes unavailable, VM1 or VM2 will be available → No**

- Regional outages affect all resources in that region. Unless geo‑redundancy or disaster recovery is configured, VMs in East US 2 will not be available.

### **Incorrect**

**Option A. Yes, Yes, Yes**

- Incorrect because statement 3 is wrong. Regional outages make all resources in that region unavailable.

**Option C. No, Yes, Yes**

- Incorrect because statement 1 is wrong. VMs in the same region can connect to VNET1.

**Option D. No, No, Yes**

- Incorrect because both statement 1 and 2 are wrong here. VMs can connect to VNET1, and availability zones protect against datacenter failures.

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

### Question 54

A company has deployed the following Azure Load Balancer resources to their Azure subscription

Name SKU

skillcertlabload1 Basic

skillcertlabload2 Standard

The load balancers would need to load balance requests across six virtual machines.

Each load balancer would have to load balance requests across three virtual machines.

Which of the following has to be implemented to ensure skillcertlabload2 can load balance requests across the three virtual machines?

**Options:**

- **A.** A. Ensure the virtual machines are running the same operating system
- **B.** B. Ensure the virtual machines are created in the same resource group
- **C.** C. Ensure the virtual machines are created in the same virtual network ✅
- **D.** D. Ensure the virtual machines are created in the same availability set or virtual machine scale set

**Correct answer:** C

**Explanation:**

Correct: C. Ensure the virtual machines are created in the same virtual network

- 
Standard SKU Flexibility: Unlike the Basic SKU, the Standard SKU Load Balancer is designed for greater scale and flexibility. It can support any virtual machine within a single Virtual Network, regardless of whether those VMs are standalone, in different Availability Sets, or in different Virtual Machine Scale Sets.

- 
Backend Pool Requirements: The only hard boundary for a Standard Load Balancer’s backend pool is the Virtual Network (VNet). As long as the three virtual machines are in the same VNet, skillcertlabload2 can distribute traffic to them.

Incorrect:

- 
A. Same Operating System: Azure Load Balancers operate at Layer 4 (TCP/UDP). They do not inspect the OS of the backend pool. You can mix Windows and Linux VMs in the same backend pool without issue.

- 
B. Same Resource Group: While it is common practice to keep related resources together, it is not a technical requirement. A Load Balancer can target VMs in different Resource Groups, provided they are in the same subscription/tenant and the same VNet.

- 
D. Same Availability Set or VMSS: This is a requirement for the Basic SKU (skillcertlabload1). The exam often uses this as a distractor. Because the question asks specifically about the Standard SKU (skillcertlabload2), this restriction does not apply. The Standard SKU allows you to mix and match Availability Sets within the same pool.

---

### Question 3

**Note:** This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.

You have an Azure subscription that contains the virtual machines shown in the following table.

You deploy a load balancer that has the following configurations:

- Name: LB1

- Type: Internal

- SKU: Standard

- Virtual network: VNET1

You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.

**Solution**: You create a Basic SKU public IP address, associate the address to the network interface of VM1, and then start VM1.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct 

Option B: No

- 
Why it is correct: The proposed solution fails because of a strict SKU mismatch. In Azure, the SKU of the Load Balancer must match the SKU of the resources (specifically Public IP addresses) associated with the Virtual Machines in its backend pool.

- 
The Conflict: * The Load Balancer (LB1) is a Standard SKU.

- 
The solution attempts to use a Basic SKU Public IP address.

- 
Rule: Standard SKU Load Balancers require Standard SKU Public IP addresses. You cannot mix Basic and Standard SKUs within the same data path.

### Incorrect 

Option A: Yes

- 
Why it is incorrect: As mentioned above, attempting to add a VM with a Basic SKU IP to a Standard SKU Load Balancer will result in a validation error in the Azure Portal or CLI. Furthermore, Basic SKU IPs are being phased out in favor of Standard SKU IPs, which offer better security (Closed by default) and Zone Redundancy.

 

###

---

### Question 12

You plan to use Azure Network Watcher to perform the following task:

Validate outbound connectivity from an Azure virtual machine to an external host.

Which Azure feature should you use for this task?

**Options:**

- **A.** Connection troubleshoot ✅
- **B.** IP flow verify
- **C.** Next hop
- **D.** NSG flow logs
- **E.** Traffic Analytics

**Correct answer:** A

**Explanation:**

**Correct**

**Option A. Connection troubleshoot**

The **Connection troubleshoot** feature in Azure Network Watcher is specifically designed to validate connectivity between an Azure VM and an external host. It tests both inbound and outbound connections, providing detailed diagnostics on whether traffic can reach its destination and identifying where connectivity might fail. This directly addresses the requirement to validate **outbound connectivity from a VM to an external host**.

**Incorrect**

**Option B. IP flow verify** This feature checks whether a packet is allowed or denied by NSG rules for a given source/destination IP, port, and protocol. It does not validate full outbound connectivity to an external host; it only verifies NSG rule behavior.

**Option C. Next hop** This feature shows the next hop type (e.g., Internet, Virtual Appliance, Virtual Network) for a packet leaving a VM. It helps troubleshoot routing but does not validate end‑to‑end connectivity to an external host.

**Option D. NSG flow logs** Flow logs capture traffic flow information through NSGs for monitoring and analytics. They provide visibility into traffic patterns but do not actively validate outbound connectivity.

**Option E. Traffic Analytics** Traffic Analytics provides insights into traffic flow trends and security risks using NSG flow logs. It is useful for monitoring but does not perform direct connectivity validation.

---

### Question 13

You have an Azure subscription that contains the resources in the following table:

In Azure, you create a private DNS zone named preparationlabs.com. You set the registration virtual network to VNet2. The preparationlabs.com zone is configured as shown in the following exhibit:

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

1. The A record for VM5 will be registered automatically in the preparationlabs.com zone.

2. VM5 can resolve VM9.preparationlabs.com.

3. VM6 can resolve vm9.preparationlabs.com.

**Options:**

- **A.** Yes, Yes, Yes
- **B.** No, Yes, Yes
- **C.** No, No, Yes ✅
- **D.** Yes, No, No

**Correct answer:** C

**Explanation:**

### Correct

**Option C. No, No, Yes**

- Correct because:

- **VM5 A record auto-registration → No**

- Auto-registration only occurs for VMs in the **registration VNet (VNet2)**.

- If VM5 is not in VNet2, its record will not be automatically registered.

- **VM5 resolving VM9.preparationlabs.com  → No**

- VM5 cannot resolve names in the private DNS zone unless its VNet is linked for resolution.

- If VM5’s VNet is not linked, resolution fails.

- **VM6 resolving VM9.preparationlabs.com  → Yes**

- VM6 is in VNet2 (the registration VNet).

- VNet2 is linked to the private DNS zone, so VM6 can resolve VM9.preparationlabs.com..

### Incorrect

**Option A. Yes, Yes, Yes**

- Incorrect because VM5’s record will not be auto-registered (wrong for statement 1).

- VM5 cannot resolve VM9 if its VNet is not linked (wrong for statement 2).

**Option B. No, Yes, Yes**

- Incorrect because VM5 cannot resolve VM9 (wrong for statement 2).

- Only VM6 can resolve VM9.

**Option D. Yes, No, No**

- Incorrect because VM5’s record is not auto-registered (wrong for statement 1).

- VM6 can resolve VM9 (wrong for statement 3).

###

---

### Question 14

A company has the following resources defined in Azure

A Virtual Network named skillcertpro-net which connects to an on-premise network using a site-to-site VPN

The Virtual Network contains a subnet named SubnetA

The subnet is associated with a network security group named skillcertpro-nsg

The subnet contains a basic internal load balancer named skillcertprolg

The Load balancer has three Azure virtual machines in the backend pool

The company has the requirement to collect data about the IP addresses that connects to the Load balancer. The company also wants their data team to run interactive queries from the Azure portal against the collected data

On which of the following resources would you need to enable diagnostics?

**Options:**

- **A.** A. The Load Balancer ✅
- **B.** B. The Network Security Group
- **C.** C. The Azure Virtual Machines
- **D.** D. None of the above

**Correct answer:** A

**Explanation:**

### Correct

**Option A. The Load Balancer**

- An **Azure Load Balancer** distributes incoming network traffic across multiple Azure Virtual Machines in a subnet.

- It ensures **high availability** and **scalability** of applications.

- In this scenario, the load balancer is the correct resource to manage traffic distribution.

- **Correct answer.**

### Incorrect

**Option B. The Network Security Group (NSG)**

- NSGs are used to **filter inbound and outbound traffic** at the subnet or NIC level.

- They enforce security rules but do not distribute traffic.

- **Incorrect.**

**Option C. The Azure Virtual Machines**

- VMs are the compute resources that run applications.

- They do not inherently distribute traffic; they are the targets of traffic distribution.

- **Incorrect.**

**Option D. None of the above**

- This is incorrect because the **Load Balancer** is explicitly required to distribute traffic.

- **Incorrect.**

---

### Question 15

You have an Azure subscription that contains three virtual networks named VNET1, VNET2, and VNET3.

Peering for VNET1 is configured as shown in the following exhibit.

Peering for VNET2 is configured as shown in the following exhibit.

Peering for VNET3 is configured as shown in the following exhibit.

The packets from VNET1 can be routed between which virtual networks?

**Options:**

- **A.** VNET2 only
- **B.** VNET3 only
- **C.** VNET2 and VNET3 only ✅

**Correct answer:** C

**Explanation:**

### Correct

**Option C. VNET2 and VNET3 only**

- Correct because Azure **VNet peering is not transitive**.

- If VNET1 is directly peered with both VNET2 and VNET3, then traffic from VNET1 can flow to both of them.

- However, packets cannot automatically route between VNET2 and VNET3 through VNET1 unless a direct peering exists between them.

- Therefore, the correct answer is that packets from VNET1 can be routed to **VNET2 and VNET3 only**.

### Incorrect

**Option A. VNET2 only**

- Incorrect because VNET1 is also peered with VNET3.

- Limiting the answer to only VNET2 ignores the valid routing path to VNET3.

**Option B. VNET3 only**

- Incorrect because VNET1 is also peered with VNET2.

- Limiting the answer to only VNET3 ignores the valid routing path to VNET2.

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

### Question 20

Scenario: Monitoring Connection Attempts to an Azure Virtual Machine

Your company has an Azure subscription with the following resource providers registered:

Authorization

Automation

Resources

Compute

Network

Storage

Billing

Web

You have a virtual machine named skillcertlabvm configured with the following settings:

Configuration Item
Value

Private IP Address
10.1.0.4

Network Security Group
skillcertlabnsg

Public IP Address
None

Subnet
10.1.0.0/24

Location
East US

**Requirement:**

You must record all successful and failed connection attempts to the virtual machine.

**Question:**

Which of the following actions should you implement to meet this requirement?Select three answers from the options provided.

**Options:**

- **A.** A. Ensure to register the Microsoft.Insights resource provider
- **B.** B. Ensure to add the Network Watcher connection monitor ✅
- **C.** C. Enable the Azure Network Watcher service in the East US region ✅
- **D.** D. Create a storage account
- **E.** E. Enable the Azure Network Watcher flow logs ✅

**Correct answer:** B, C, E

**Explanation:**

### Correct

**Option B. Ensure to add the Network Watcher connection monitor**

- Correct because the connection monitor in **Azure Network Watcher** allows you to monitor connectivity between your VM and endpoints.

- This helps validate network performance and troubleshoot connectivity issues.

**Option C. Enable the Azure Network Watcher service in the East US region**

- Correct because Network Watcher must be enabled in the region where the VM resides before you can use monitoring features.

- Without enabling Network Watcher in the VM’s region, monitoring tools like connection monitor cannot function.

**Option E. Enable the Azure Network Watcher flow logs**

- Correct because flow logs capture information about IP traffic through network security groups (NSGs).

- This is essential for analyzing traffic patterns and ensuring network security and performance.

### Incorrect

**Option A. Ensure to register the Microsoft.Insights resource provider**

- Incorrect because while Microsoft.Insights is used for monitoring and diagnostics, the question specifically relates to **network monitoring for a VM**.

- The required provider here is **Network Watcher**, not Insights.

**Option D. Create a storage account**

- Incorrect because creating a storage account is not directly required for enabling VM network monitoring.

- Storage accounts may be used to store logs, but they are not the primary step in enabling monitoring for the VM.

---

## Practice Set 14

Source: https://skillcertpro.com/az-104-exam-questions/14/

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

### Question 6

Fabrikam has already enabled Azure Site Recovery from Central US to South Central US. They want to validate recovery without user impact, confirm runbooks and networking, and then discard the test environment when done.
What should you run?

**Options:**

- **A.** A. Test failover to an isolated VNet ✅
- **B.** B. Planned failover
- **C.** C. Unplanned failover
- **D.** D. Restart source VMs

**Correct answer:** A

**Explanation:**

A test failover creates recovery VMs in an isolated test network so you can validate boot, app dependencies, and automation without affecting production and without DNS cutover. When validation is complete, you clean up the test environment. It’s the standard, non-disruptive ASR drill.
Why the others are incorrect:
B: Planned failover shuts down source VMs and performs a coordinated failover—disruptive; used for real cutovers.
C: Unplanned failover is for outages and can proceed with potential data loss depending on replication state; not a safe drill.
D: Restarting source VMs doesn’t validate DR; it leaves recovery orchestration, networking, and runbooks untested.

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

### Question 9

You have an Azure container registry named contoso2023 as shown below.

You need to enable contoso2023 to use a dedicated data endpoint.

Which **two** settings should you configure for contoso2023?

**Options:**

- **A.** A. Overview
- **B.** B. Properties ✅
- **C.** C. Networking ✅
- **D.** D. Tasks
- **E.** E. Access control (IAM)
- **F.** F. Events

**Correct answer:** B, C

**Explanation:**

A dedicated data endpoint for Azure Container Registry is a **Premium SKU** feature. You turn it on in **Properties**, and then finalize network exposure in **Networking**:

- **Properties**

- Upgrade the registry to **Premium** (if not already).

- Enable the **Dedicated data endpoint** feature so data-plane operations (push/pull, layer transfers) use the dedicated endpoint rather than sharing the control-plane endpoint.

- **Networking**

- Decide how clients reach the data endpoint: keep Public network access, restrict via selected networks, or **disable public access and use Private Link**.

- Create/verify **Private endpoints** and DNS if you’re going private-only, so pulls/pushes resolve to the dedicated data endpoint over private IP.

This two-blade flow (Properties → Networking) is what’s required to both **enable** the capability and **expose/secure** it appropriately.

**Why the other options are incorrect**

- **Overview (A):** Read-only summary; you can’t enable dedicated data endpoints here.

- **Tasks (D):** CI/CD automation (run tasks); unrelated to endpoint enablement.

- **Access control (IAM) (E):** Controls who can manage/use the registry, not which endpoints it serves.

- **Events (F):** Webhooks/eventing; not used to enable the data endpoint.

---

### Question 10

You have a virtual network named VNet1 as shown in the following exhibit.

No devices are connected to VNet1.

You plan to peer VNet1 to another virtual network named VNet2. VNet2 has an address space of 10.2.0.0/16.

You need to create the peering.

What should you do first?

**Options:**

- **A.** A. Add a gateway subnet to VNet1
- **B.** B. Create a subnet on VNet1 and VNet2
- **C.** C. Modify the address space of VNet1 ✅
- **D.** D. Configure a service endpoint on VNet2
- **E.** E. Enable virtual network encryption on both VNets
- **F.** F. Add a DNS server to VNet1

**Correct answer:** C

**Explanation:**

VNet peering requires **non-overlapping IP spaces**. Since VNet2 uses **10.2.0.0/16** and (from the exhibit) VNet1 also uses an overlapping range, the peering cannot be created until you **change VNet1’s address space** to a **non-overlapping** CIDR. After updating the space, you can create the peering normally.

**Why the other options are incorrect**

- A: A **gateway subnet** is for VPN/ER gateways, not required to establish standard VNet peering.

- B: **Subnets** aren’t required to create a peering; the blocker is the **overlap**, not subnet presence.

- D: **Service endpoints** secure access to PaaS services; unrelated to peering prerequisites.

- E: **VNet encryption** is optional and not a prerequisite for peering.

- F: **DNS settings** don’t affect the ability to create peering.

---

### Question 18

Spoke1 must reach **on-prem** through **HubVNet’s** VPN gateway. You will use VNet peering (not a new gateway in Spoke1).

What should you configure on the peering?

**Options:**

- **A.** A. Allow forwarded traffic only
- **B.** B. Enable gateway transit on Hub; use remote gateways on Spoke1 ✅
- **C.** C. Add private endpoints in both VNets
- **D.** D. Enable service endpoints to the gateway

**Correct answer:** B

**Explanation:**

To share a **hub VPN gateway** with a **spoke** over peering, set the **Hub→Spoke peering** to **Allow gateway transit** and the **Spoke→Hub peering** to **Use remote gateways**. This lets Spoke1 send traffic to on-prem via Hub’s gateway without deploying its own gateway.

**Why the others are incorrect:**

- **A:** “Allow forwarded traffic” relates to NVAs and user-defined routes; it doesn’t advertise the hub gateway to the spoke.

- **C:** Private Endpoints provide private access to **PaaS** services, not VNet-to-VNet or on-prem routing.

- **D:** Service endpoints are for accessing Azure PaaS from a VNet; they don’t enable gateway sharing over peering.

---

### Question 19

You have an Azure subscription that contains the resources shown in the following table.

You create a public IP address named IP1.

Which **two** resources can you associate to IP1?

**Options:**

- **A.** A. VM1
- **B.** B. LB1 ✅
- **C.** C. NIC1 ✅
- **D.** D. VPN1
- **E.** E. VNet1

**Correct answer:** B, C

**Explanation:**

An Azure **public IP** can be attached to:

- a **Load Balancer** frontend (public LB), and

- a **network interface (NIC)** for a VM (direct public IP on the VM via its NIC).

So **LB1** and **NIC1** are valid association targets for **IP1**.

**Why the other options are incorrect**

- **VM1:** Public IPs attach to the **NIC**, not to the VM object directly.

- **VPN1:** A **Virtual Network Gateway** does use a **Public IP** resource, but it must be specified on the gateway’s **IP configuration at creation** (and must meet SKU/region constraints). You don’t arbitrarily “associate” a general-purpose IP1 post hoc unless it’s chosen as the gateway’s public IP during (or via supported update of) the gateway configuration. In typical exam context, NIC/LB are the straightforward supported associations.

- **VNet1:** Virtual networks themselves cannot have public IPs.

---

### Question 20

Goal: From **AppSubnet**, send **internet** traffic through **NVA1**, keep on-prem routes via the hub gateway.

Constraint: Use **user-defined routes** (RouteTable1) on **AppSubnet**.

You have to force all **internet** traffic from **AppSubnet** through **NVA1** while leaving private/on-prem routes unaffected.

What route should you add to **RouteTable1**?

**Options:**

- **A.** A. 0.0.0.0/0 ? Virtual appliance 10.10.100.4 ✅
- **B.** B. Service endpoints to Internet
- **C.** C. Peering with gateway transit only
- **D.** D. 0.0.0.0/0 ? Internet

**Correct answer:** A

**Explanation:**

A user-defined **default route** to **Virtual appliance (NVA1)** forces all internet-bound traffic from AppSubnet to the firewall first. System/propagated routes for **on-prem prefixes** remain more specific (e.g., /16, /24), so they take precedence and still go via the VPN gateway.

**Why the others are incorrect:**

- **B:** Service endpoints secure access to **Azure PaaS**, not internet egress routing.

- **C:** Gateway transit shares gateway routes, but **doesn’t** force-tunnel internet via an NVA.

- **D:** Next hop **Internet** bypasses the NVA, sending traffic out directly—opposite of the requirement.

---

### Question 21

Goal: From **AppSubnet**, send **internet** traffic through **NVA1**, keep on-prem routes via the hub gateway.

Constraint: Use **user-defined routes** (RouteTable1) on **AppSubnet**.

BGP from the hub is advertising a **default route (0.0.0.0/0)** that is appearing in AppSubnet’s effective routes, bypassing NVA1 during tests. You have to ensure **RouteTable1** on **AppSubnet** ignores propagated gateway routes and keeps using the UDR to NVA1 for internet.

What should you configure on **RouteTable1**?

**Options:**

- **A.** A. Add a more specific /1 route to NVA1
- **B.** B. Add service endpoints to Storage
- **C.** C. Add 0.0.0.0/0 ? Internet
- **D.** D. Disable BGP route propagation ✅

**Correct answer:** D

**Explanation:**

Turning **off route propagation** on **RouteTable1** prevents BGP/gateway-learned routes (including a default route) from being added to the subnet’s effective routes. Your UDR **0.0.0.0/0 → NVA1** then cleanly dictates internet egress through the firewall, while specific on-prem prefixes can be added as needed (or handled on subnets where propagation remains enabled).

**Why the others are incorrect:**

- **A:** Crafting /1 routes is a brittle workaround and can still clash with propagated routes; it’s not the supported fix.

- **B:** Service endpoints don’t affect **routing** to internet/on-prem; they’re for PaaS access control.

- **C:** Forcing next hop **Internet** defeats the requirement to go via the NVA.

---

### Question 23

Traffic from WebVM (10.10.0.4) to AppVM (10.10.1.4) on TCP 443 is failing. The NIC and subnet each have an NSG rule:

What is the effective result for **WebVM → AppVM:443**?

**Options:**

- **A.** A. Allowed (subnet allow wins)
- **B.** B. Allowed (default AllowVNetInBound)
- **C.** C. Denied (NIC deny overrides) ✅
- **D.** D. Denied (final DenyAllInBound)

**Correct answer:** C

**Explanation:**

Azure evaluates **both** the subnet NSG and the NIC NSG; a flow must be **allowed by both** to pass. Although the **subnet** has a higher-priority **Allow 443** (100), the **NIC** has a matching **Deny** (200). On the NIC, that deny is the highest matching rule, so the NIC’s evaluation is **deny**, making the **effective** decision **deny** overall.

**Why the others are incorrect:**

- **A:** A subnet allow doesn’t overrule a NIC deny; both scopes must allow the flow.

- **B:** **AllowVNetInBound** applies only if **no higher-priority** matching rule exists; here, explicit rules match first.

- **D:** The default **DenyAllInBound** isn’t what blocks the flow; a **specific NIC deny** already matched.

---

### Question 24

VNetB clients can’t resolve storage1.blob.core.windows.net to the private endpoint IP. You have to fix name resolution without enabling public access.

What should you do?

**Options:**

- **A.** A. Link VNetB to the private DNS zone ✅
- **B.** B. Enable service endpoints to Storage
- **C.** C. Add NSG allow rules on VNetB subnets
- **D.** D. Re-enable public network access on Storage1

**Correct answer:** A

**Explanation:**

Private Endpoints rely on **service-specific private DNS zones**. Your Blob PE created/uses privatelink.blob.core.windows.net. Because only **VNetA** is linked to that zone, VNetB can’t resolve the PE’s private name. **Link the zone to VNetB** (or use DNS forwarders) so VNetB resolves the Blob FQDN to the **private IP** and reaches the PE while public access stays disabled.

**Why the others are incorrect:**

- **B:** Service endpoints secure traffic to Azure Storage **public endpoints**; they don’t resolve or route to **Private Endpoints**.

- **C:** NSGs filter traffic but don’t fix **DNS resolution**; name still won’t map to the private IP.

- **D:** Re-enabling public access bypasses the private path and violates the **private-only** requirement.

---

### Question 25

You need to peer **HubVNet** and **Spoke2**, but peering validation fails. You have to fix this before creating the peering.

What should you do first?

**Options:**

- **A.** A. Create VNet-to-VNet VPN
- **B.** B. Add service endpoints
- **C.** C. Create the peering anyway
- **D.** D. Change Spoke2 address space ✅

**Correct answer:** D

**Explanation:**

VNet peering requires **non-overlapping CIDRs** between the two VNets being peered. Here, **Spoke2 (10.0.1.0/24)** sits **inside** **HubVNet (10.0.0.0/16)**, so peering is blocked. Fix by changing Spoke2 to a non-overlapping range (for example, 10.2.0.0/16 or 10.1.1.0/24), then create the peering.

**Why the others are incorrect:**

- **A:** VNet-to-VNet VPN also requires **non-overlapping** address spaces; it won’t bypass the overlap.

- **B:** Service endpoints affect access to **PaaS** services, not VNet-to-VNet connectivity or overlap.

- **C:** You can’t force peering through validation—Azure blocks overlapping prefixes.

---

### Question 26

Contoso needs an internet-facing VIP for the **API** tier that stays on a static public IP and load-balances traffic on **443** to the FrontEnd VMs. You have to keep the design simple and L4-based.

What should you create?

**Options:**

- **A.** A. Internal load balancer
- **B.** B. Public load balancer ✅
- **C.** C. NAT gateway
- **D.** D. Traffic Manager

**Correct answer:** B

**Explanation:**

A **public load balancer** provides a **public frontend IP** and distributes inbound **TCP/UDP** traffic (L4) across backend VMs. Assign a static public IP, add a health probe (e.g., 443), and a load-balancing rule to the API backend pool. This meets the internet exposure, static IP, and L4 requirements with minimal components.

**Why the others are incorrect:**

- **A:** An **internal** load balancer has a **private** frontend only; it doesn’t publish a public VIP.

- **C:** **NAT gateway** is for **outbound** internet from subnets; it doesn’t provide inbound load balancing.

- **D:** **Traffic Manager** is **DNS-based** global routing across endpoints; it doesn’t terminate or L4-balance a single VM set in one VNet.

---

### Question 27

The **App** tier must stay private and serve a custom **TCP 8080 (non-HTTP)** service to **FrontEnd VMs** and **on-prem** clients over VPN/ExpressRoute. You have to load-balance across the BackEnd VMs **without** any public IP.

What should you create?

**Options:**

- **A.** A. Public load balancer
- **B.** B. Application Gateway
- **C.** C. Internal load balancer ✅
- **D.** D. Private endpoint

**Correct answer:** C

**Explanation:**

An **internal load balancer** exposes a **private frontend IP** inside the VNet and distributes **L4 (TCP/UDP)** to the backend pool. It’s ideal for private tiers and works with on-prem via VPN/ER. Configure a private frontend, health probe on 8080, and a load-balancing rule to the App VMs—no public exposure required.

**Why the others are incorrect:**

- **A:** A **public** load balancer would publish a public IP, violating the **private-only** requirement.

- **B:** **Application Gateway** is **L7 HTTP/S**; it doesn’t L4-balance arbitrary TCP services like a raw 8080 listener unless it’s HTTP/S.

- **D:** **Private endpoint** is for **Azure PaaS** services; it doesn’t front **IaaS VMs** or provide load balancing.

---

### Question 28

You have an Azure subscription named Sub1.

You plan to deploy a multi-tiered application that will contain the tiers shown in the following table.

You need to recommend a networking solution to meet the following requirement:

- **Protect the web servers from SQL injection attacks.**

Which Azure resource should you recommend for the above requirement?

**Options:**

- **A.** A. Application Gateway (Standard)
- **B.** B. Application Gateway (WAF v2) ✅
- **C.** C. Internal Load Balancer (Standard)
- **D.** D. Network Security Group (NSG)
- **E.** E. Public Load Balancer (Standard)
- **F.** F. Azure Firewall Premium

**Correct answer:** B

**Explanation:**

**Application Gateway (WAF v2)** provides a **Web Application Firewall** that inspects **HTTP/S** traffic at **Layer 7** using the **OWASP Core Rule Set** to detect and block common web attacks, including **SQL injection**, **XSS**, command injection, and more. Deployed in front of the web tier, it acts as a reverse proxy/termination point, applies managed rules and custom rules (IP, geo, header, URI, request body), supports end-to-end TLS, and can be run in **Prevention** mode to actively block malicious requests rather than simply log them.

**Why the other options are incorrect**

- **A. Application Gateway (Standard):** No WAF capability; cannot inspect/block SQLi payloads.

- **C. Internal Load Balancer:** L4 distribution only; no HTTP inspection/security.

- **D. NSG:** L3/L4 allow/deny rules; cannot parse HTTP requests or detect SQLi.

- **E. Public Load Balancer:** L4 only; no app-layer protection.

- **F. Azure Firewall Premium:** Adds TLS inspection and IDPS but is not a purpose-built **web** application firewall/reverse proxy. For web-app attacks like SQLi, **WAF** on Application Gateway is the recommended control.

---

### Question 29

You now need **Azure Files** private access from VNetA to Storage1. Only a **Blob** private endpoint exists today, and public network access must remain disabled.

What should you do?

**Options:**

- **A.** A. Use the existing Blob private endpoint for Files
- **B.** B. Add a service endpoint for Files
- **C.** C. Allow SMB over Internet temporarily
- **D.** D. Create a File private endpoint (separate subresource) ✅

**Correct answer:** D

**Explanation:**

Azure Storage exposes **separate subresources** for Private Endpoints (Blob, **File**, Queue, Table). A Blob PE does **not** cover Azure Files. Create a **File** private endpoint and ensure the **Files** private DNS zone (privatelink.file.core.windows.net) is present/linked so SMB name resolution maps to the private IP. Public access can remain disabled.

**Why the others are incorrect:**

- **A:** One PE doesn’t span multiple subresources; Blob ≠ Files.

- **B:** Service endpoints use public endpoints and won’t meet **private-only** access.

- **C:** Opening SMB over Internet breaks the **private-only** requirement and security posture.

---

### Question 30

You have an Azure subscription that contains the virtual machines shown in the following table.

The subscription contains a storage account named contoso2024 as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“VM1 can connect to contoso2024 by using 131.107.10.10.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

With **Selected networks** enabled, a storage account will accept traffic only from:

- **Explicit IP allowlist entries**, and/or

- **VNet rules** (subnets with Microsoft.Storage service endpoint or private endpoint paths)

In this scenario, **131.107.10.10**—the **public IP** of **VM1**—is explicitly included in the storage account’s **IP allowlist**, and **VNet1/Subnet1** is also permitted. Either allowance is sufficient for connectivity. When VM1 initiates traffic using its public IP (e.g., via NAT through an internet path), the storage firewall matches the request source to the **allowed IP 131.107.10.10** and permits the connection. Additionally, because **VNet1/Subnet1** is allowed, VM1 can also reach the account over the **service endpoint** path if configured, but the statement specifically asks about using **131.107.10.10**, which is **allowed**.

Why “No” is incorrect

Deny would apply only if the source IP/subnet were **not** allowed or if the account was restricted to a different region/VNet path exclusively. Here, the **public IP is explicitly permitted**, so the firewall does not block traffic from VM1 when sourced as **131.107.10.10**.

---

### Question 32

You have an Azure virtual network named VNet1 that contains the following settings:
IPv4 address space: 172.16.10.0/24
Subnet name: Subnet1
Subnet address range: 172.16.10.0/25
What is the maximum number of virtual machines that can connect to Subnet1?

**Options:**

- **A.** A. 24
- **B.** B. 25
- **C.** C. 62
- **D.** D. 123 ✅
- **E.** E. 126
- **F.** F. 128

**Correct answer:** D

**Explanation:**

A /25 subnet provides 128 total IP addresses (2^(32?25) = 128) spanning 172.16.10.0–172.16.10.127. In Azure VNets, five addresses per subnet aren’t usable by workloads:
.0 — network address
.1–.3 — reserved by Azure for gateway/DHCP/DNS-style functions
.127 — broadcast address
Therefore, usable addresses = 128 ? 5 = 123. Those are the IPs available for NICs of VMs and other resources in Subnet1 (assuming one NIC/IP per VM and no overlapping reservations). Subnet size, delegations, or service endpoints do not change the 5-address reservation rule.
Why the other options are incorrect
24 / 25 (A/B): Closer to a /27 calculation; far below the capacity of a /25.
62 (C): That’s /26 math (64 ? 2 or ? 2/?5 confusion), not /25.
126 (E): Ignores Azure’s five reserved addresses (assumes only 2 reserved).
128 (F): Counts all addresses and ignores any reservation.

---

### Question 35

You can’t reach DBVM from WebVM. Both the subnet and the NIC have NSGs applied. You need to see the merged inbound/outbound rules that actually apply to DBVM so you can spot which rule is blocking the flow.
What should you open?

**Options:**

- **A.** A. Subnet NSG rules
- **B.** B. Effective security rules ✅
- **C.** C. IP flow verify
- **D.** D. Activity log

**Correct answer:** B

**Explanation:**

Effective security rules (at the NIC) show the combined result of defaults plus subnet NSG and NIC NSG rules after priorities are resolved. This view reflects what the platform enforces on that NIC, so you can quickly identify the winner rule (allow/deny) and its source (subnet vs NIC) without cross-comparing two NSGs manually.
Why the others are incorrect:
A: Shows only the subnet NSG; it doesn’t include the NIC NSG or the final merged outcome.
C: IP flow verify tests a single 5-tuple (source/dest/port/proto) and returns allow/deny, but it doesn’t list the full effective rule set you need to review.
D: Activity log records control-plane events (create/update); it doesn’t show data-plane NSG evaluation.

---

### Question 37

Fabrikam wants the subscription Activity log archived to a Log Analytics workspace so admins can query who changed what and when across services. You have to configure this at the subscription level, not per-resource.
What should you configure?

**Options:**

- **A.** A. Activity log to workspace ✅
- **B.** B. Resource diagnostic settings
- **C.** C. NSG flow logs
- **D.** D. Boot diagnostics

**Correct answer:** A

**Explanation:**

Configure a diagnostic setting on the Activity log (subscription scope) to send control-plane events (creates, updates, deletes, policy evaluations) to a Log Analytics workspace. This preserves governance history, enables KQL queries and alerts, and centralizes auditing without touching individual resources.
Why the others are incorrect:
B. Resource diagnostic settings: These are per-resource and won’t capture subscription-level Activity log events.
C. NSG flow logs: Network flow telemetry via Network Watcher; not subscription audit events.
D. Boot diagnostics: VM console/screenshots; unrelated to Activity log export.

---

### Question 54

Contoso’s web app in East US drops user connections to an external payments API a few times per day. You have to continuously test end-to-end connectivity from WebVM to the provider’s FQDN on TCP 443, track latency/packet loss, and trigger alerts if thresholds are exceeded—without installing a full NPM agent or building your own scripts.
What should you use?

**Options:**

- **A.** A. Connection troubleshoot
- **B.** B. Connection Monitor ✅
- **C.** C. NSG flow logs
- **D.** D. Packet capture

**Correct answer:** B

**Explanation:**

Connection Monitor runs continuous, scheduled tests from Azure sources (VMs, endpoints) to destinations (FQDN/IP/URL/port). It records reachability, RTT, and packet loss, and can export to Logs for alerting and dashboards—ideal for catching intermittent failures on 443. You get end-to-end insight (including where failures occur) without managing a custom probe framework.
Why the others are incorrect:
A: Connection troubleshoot is a one-off diagnostic, not continuous monitoring with trends/alerts.
C: NSG flow logs capture flow records to storage/Traffic Analytics; they don’t run active tests or track latency.
D: Packet capture collects packets on a NIC and is heavyweight for continuous health checks.

---

### Question 57

Fabrikam can’t RDP to MgmtVM on TCP 3389 from a known public IP. You have to quickly check if the exact 5-tuple is allowed or denied on the VM’s NIC and identify the rule that’s winning—no continuous monitoring needed.
What should you use?

**Options:**

- **A.** A. Connection Monitor
- **B.** B. Next hop
- **C.** C. IP flow verify ✅
- **D.** D. NSG flow logs

**Correct answer:** C

**Explanation:**

IP flow verify evaluates a single source/destination/port/protocol against the VM’s effective NSG rules on the NIC and immediately returns Allow or Deny plus the matching rule name/priority. It’s the fastest way to confirm whether NSG policy is blocking RDP without building a test path or running captures.
Why the others are incorrect:
A: Connection Monitor is for continuous probes and trends; overkill for a one-time allow/deny check.
B: Next hop validates routing (e.g., Internet, NVA, gateway), not NSG allow/deny decisions.
D: NSG flow logs emit aggregated flow telemetry; they don’t give an instant policy verdict or the exact blocking rule.

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

### Question 5

Contoso has a storage account stprod01 used by an app in VNet-App/Subnet-API. You have to restrict data-plane access to that subnet and still allow Azure Backup to write backups to the account. Do not open the account to the public internet.
Current state
What should you configure on stprod01?

**Options:**

- **A.** A. Selected networks + add Subnet-API only
- **B.** B. Selected networks + add Subnet-API + enable “Allow trusted Microsoft services” ✅
- **C.** C. Selected networks + add Subnet-API + add app public IP
- **D.** D. Private endpoint + disable public network access, no other change

**Correct answer:** B

**Explanation:**

Storage firewalls set to Selected networks allow traffic only from added subnets (via service endpoints) and permitted exceptions. Azure Backup is a trusted Microsoft service; enabling “Allow trusted Microsoft services to access this storage account” lets Backup reach the account without exposing it publicly. Adding Subnet-API locks access to the app subnet; no public internet exposure.
why the others are incorrect:
A. Blocks Azure Backup (trusted services not allowed).
C. Public IP exceptions broaden exposure and don’t help Backup (it doesn’t originate from that IP).
D. Private endpoints work, but you’d also need Backup to target the private endpoint and DNS; requirement didn’t mandate private access for Backup—trusted services are the simpler fit.

---

### Question 6

Fabrikam must lock down storage account stcoreeu so no public network access is possible. All access must come from on-prem via ExpressRoute private peering to Azure VNets. Apps run in VNet-Hub and VNet-Spoke1 (peered).
Environment
What should you implement to meet the requirement?

**Options:**

- **A.** A. Service endpoints on both VNets; set Selected networks
- **B.** B. Selected networks; add on-prem public IP ranges
- **C.** C. Create a private endpoint in VNet-Spoke1; disable public network access; integrate privatelink DNS ✅
- **D.** D. NSG rules to deny Internet; keep storage firewall disabled

**Correct answer:** C

**Explanation:**

To eliminate public exposure, use a Private Endpoint for stcoreeu. Then disable public network access on the account so only the private interface is reachable. Configure privatelink DNS (e.g., privatelink.blob.core.windows.net) and link it to VNet-Spoke1 (and resolve from on-prem via conditional forwarders). Traffic from on-prem over ER private peering reaches the private endpoint; no public paths remain.
why the others are incorrect:
A. Service endpoints still use the public endpoint; they don’t block the internet path outright.
B. IP firewall uses public IP allowlists; requirement is no public access.
D. NSGs don’t control storage service exposure; without storage firewall/PE, the public endpoint still exists.

---

### Question 8

Contoso’s devs are working remotely for one week. You have to let them browse blobs in stdev01 via the Azure portal from their home networks, while keeping the account otherwise restricted. The account currently uses Selected networks with only VNet-Dev/Subnet-Tools allowed. You must avoid creating private endpoints.
What should you do?

**Options:**

- **A.** A. Add the developers’ current public IPs to the storage firewall IP rules ✅
- **B.** B. Enable “Blob public access” on the account
- **C.** C. Generate SAS for each container; no firewall changes needed
- **D.** D. Switch firewall to “All networks”; re-enable Selected networks next week

**Correct answer:** A

**Explanation:**

With firewalls set to Selected networks, remote clients must be allowed by IP rules. Add the devs’ home public IPs for the week, then remove them later. This preserves restricted posture and avoids private endpoint setup.
why the others are incorrect:
B. “Blob public access” controls anonymous blob/container ACLs, not network firewall.
C. SAS doesn’t bypass storage firewalls; network rules still apply.
D. Opening to All networks violates the security requirement, even temporarily.

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

### Question 20

You see this Bicep file:
param vnetName string
resource vnet ‘Microsoft.Network/virtualNetworks@2023-04-01‘ existing = {
  name: vnetName
}
resource subnet ‘Microsoft.Network/virtualNetworks/subnets@2023-04-01‘ = {
  name: ‘${vnet.name}/app‘
  properties: {
    addressPrefix: ‘10.0.1.0/24‘
  }
}
What does existing on vnet mean?

**Options:**

- **A.** A. Create new VNet
- **B.** B. Reference existing VNet ✅
- **C.** C. Import module
- **D.** D. Output resourceId

**Correct answer:** B

**Explanation:**

existing declares a handle to a pre-existing resource so the template can link children (like a subnet) or read properties/IDs without deploying the parent. The VNet won’t be created/modified; only the subnet is deployed beneath that known VNet.
Why the others are incorrect:
A. Create new VNet — New resources omit existing; this flag prevents creation.
C. Import module — Modules use the module keyword and a file path/URI, not existing.
D. Output resourceId — Outputs use an output declaration; existing is unrelated.

---

### Question 22

You have an Azure subscription that contains the virtual machines shown in the following table.

The subscription contains a storage account named contoso2024 as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“VM2 can connect to contoso2024 by using 150.120.10.10.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

When a storage account is set to **Selected networks**, access is allowed only from:

- **Explicit IP rules** (public IPs or ranges), and/or

- **VNet rules** (subnets with Microsoft.Storage service endpoints or private endpoints)

Here, the storage account’s firewall explicitly includes **150.120.10.10**, which is **VM2’s public IP**. That IP rule alone is sufficient to permit traffic **from VM2** to **contoso2024** when the request originates from that public IP (e.g., outbound NAT). The VM’s subnet (whether it’s Subnet1 or Subnet2) does **not** matter for the IP-allowlist path; the firewall evaluates the **source public IP** and finds a match, so the connection is **allowed**.

If the account also had VNet rules, VM2 could alternatively connect via a service endpoint/private endpoint path if its subnet were included; but that’s **not required** for this statement. The question asks specifically about using **150.120.10.10**, and since that IP is on the allowlist, **VM2 can connect**.

Why “No” is incorrect

“No” would be correct only if the source IP were **not** allowed (no matching IP rule) and there were **no applicable VNet rule**. In this case, an explicit **IP rule** for **150.120.10.10** exists, so denying the connection would contradict the configured firewall policy.

---

### Question 23

You have two Azure subscriptions named Sub1 and Sub2 that are linked to separate Microsoft Entra tenants.

You have the virtual networks shown in the following table.

Which virtual networks can you peer with VNet1?

**Options:**

- **A.** A. VNet2 only
- **B.** B. VNet2 and VNet3 only
- **C.** C. VNet2 and VNet4 only
- **D.** D. VNet2, VNet3, and VNet4 only
- **E.** E. VNet2, VNet3, VNet4, and VNet5 ✅
- **F.** F. VNet3 and VNet5 only

**Correct answer:** E

**Explanation:**

Azure **VNet peering** supports peering across **regions (global VNet peering)**, **subscriptions**, and even **different Microsoft Entra tenants**, provided the **address spaces do not overlap** and you have the **necessary permissions** in each tenant/subscription to create the peering from both sides (or use someone with access to both). The scenario states Sub1 and Sub2 are in separate tenants—this is supported. Therefore, VNet1 can be peered with **VNet2** (same subscription/region), **VNet3** (same subscription, different region), **VNet4** (different subscription/tenant, same region), and **VNet5** (different subscription/tenant, different region). Nothing in the prompt indicates overlapping CIDRs or unsupported combinations, so **all four** are valid peers.

**Why the other options are incorrect**

- A/B/C/D/F: Each omits at least one VNet that is valid under Azure peering rules (cross-subscription, cross-region, **cross-tenant** are all allowed, assuming non-overlapping IP spaces and proper permissions). Only **E** lists the full set of VNets that can be peered with **VNet1**.

---

### Question 25

You have an Azure subscription named Sub1.

You plan to deploy a multi-tiered application that will contain the tiers shown in the following table.

You need to recommend a networking solution to meet the following requirement:

- **Ensure that communication between the web servers and the business logic tier spreads equally across the virtual machines.**

Which Azure resource should you recommend for the above requirement?

**Options:**

- **A.** A. Application Gateway (Standard)
- **B.** B. Application Gateway (WAF)
- **C.** C. Internal Load Balancer (Standard) ✅
- **D.** D. Network Security Group (NSG)
- **E.** E. Public Load Balancer (Standard)
- **F.** F. Azure Traffic Manager

**Correct answer:** C

**Explanation:**

Use a **Standard Internal Load Balancer** when you need **layer-4 (TCP/UDP)** load distribution **inside** a virtual network (not Internet-facing). Placing the business-logic VMs in the ILB’s backend pool and using a probe (e.g., TCP/HTTP) ensures the web tier’s traffic is **evenly distributed** only to **healthy** instances. This meets the requirement to “spread equally across the virtual machines” within the private tier boundary.

**Why the other options are incorrect**

- **A/B – Application Gateway (Standard/WAF):** L7 HTTP(S) reverse proxy typically used for **client → web** scenarios (public or private). It’s overkill here and not the typical choice for **intra-tier L4** fan-out from web to app VMs.

- **D – NSG:** Security filtering only (allow/deny). **No** load-balancing capability.

- **E – Public Load Balancer:** Internet-facing frontend. The business logic tier is **internal**, so a public frontend is not appropriate.

- **F – Traffic Manager:** **DNS-based** global traffic steering across endpoints (regions/services). It doesn’t distribute flows among VMs inside a VNet.

---

### Question 26

You have a virtual network named VNet1 that has the configuration shown in the following exhibit.

Based on the information presented, complete the following statement with the correct answer choice.

**“Before a virtual machine on VNet1 can receive an IP address from 192.168.1.0/24, you must first _______________________.”**

**Options:**

- **A.** A. add a network interface
- **B.** B. add a subnet
- **C.** C. add an address space ✅
- **D.** D. delete a subnet
- **E.** E. delete an address space
- **F.** F. enable IP forwarding on the NIC

**Correct answer:** C

**Explanation:**

A VM’s private IP must come from a **subnet**, and every subnet must be **within the VNet’s address space**. Since **VNet1** currently has only **10.2.0.0/16**, it cannot host subnets carved from **192.168.1.0/24** until that **CIDR is added to the VNet’s address space**.

So the **first** prerequisite is to **add the address space 192.168.1.0/24** to VNet1. After that, you would create a **subnet** inside that range (e.g., 192.168.1.0/25) and place VMs there to receive IPs from 192.168.1.0/24.

**Why the other options are incorrect**

- **A. add a network interface:** You can’t assign a NIC an IP from a prefix the VNet doesn’t own. Address space must come first.

- **B. add a subnet:** A subnet can only be created **after** the VNet includes the parent CIDR. You can’t create a 192.168.1.0/x subnet while the VNet only has 10.2.0.0/16.

- **D. delete a subnet:** Not relevant; nothing to delete to add 192.168.1.0/24.

- **E. delete an address space:** You need to **add**, not delete, the 192.168.1.0/24 space.

- **F. enable IP forwarding on the NIC:** Unrelated to IP assignment; used for routing/NVA scenarios.

---

### Question 29

You have an Azure subscription that contains the resources shown in the following table.

You need to create a network interface named NIC1 without creating additional resources.

In which region can you create NIC1?

**Options:**

- **A.** A. East US only ✅
- **B.** B. West Europe only
- **C.** C. North Europe only
- **D.** D. Any region

**Correct answer:** A

**Explanation:**

Choice A is correct.

Network interfaces (NICs) are scoped to a region and must be created in the same region as the virtual network/subnet they attach to. Because NIC1 must connect to a subnet in VNET1, and VNET1 exists in East US, NIC1 must also be created in East US.

Creating NIC1 in any other region would require additional resources (for example, another VNet/subnet in that region or moving dependencies), which the question explicitly forbids.

A NIC has three important scoping constraints:

Subscription

Region

VNet

Azure enforces co-location:

NIC ↔ VNet/Subnet ↔ VM

All must reside in the same subscription and region. This ensures Layer-2 adjacency and simplifies IP management.

Also, after a NIC is created, you cannot change the VNet to which it is attached. To move it, you would need to:

Create a new NIC in the target VNet/region

Attach the new NIC to the VM

Reconfigure dependencies

**Why the other options are incorrect**

B. West Europe❌ Incorrect. West Europe is a different region. You would need a West Europe VNet/subnet (an additional resource), violating the stated constraint.

C. North Europe❌ Incorrect. North Europe is not where VNET1 exists. Creating NIC1 there would require new networking resources.

D. Multiple alternate regions❌ Incorrect. These regions do not host VNET1, so additional networking resources would still be required.

E. West Europe only❌ Incorrect. NIC1 cannot exist there without a West Europe VNet/subnet to join.

F. North Europe only❌ Incorrect. Same issue as above—NIC1 requires a VNet/subnet in the same region.

---

### Question 30

You have an Azure subscription that contains the virtual networks shown in the following table.

The subscription contains the virtual machines shown in the following table.

All the virtual machines have only private IP addresses.

You deploy an Azure Bastion host named Bastion1 to VNet1.

To which virtual machines can you connect through Bastion1?

**Options:**

- **A.** A. VM1 Only
- **B.** B. VM1 and VM2 only ✅
- **C.** VM1 and VM3 only
- **D.** VM1, VM2 and VM3

**Correct answer:** B

**Explanation:**

Choice B is correct. Azure Bastion provides RDP/SSH over TLS to virtual machines located in the same virtual network as the Bastion host and to VMs in directly peered VNets. Since Bastion1 is deployed in VNet1, it can access:

VM1 → Located in VNet1 (same VNet as Bastion1)

VM2 → Located in VNet2, which is directly peered with VNet1

However, VM3 cannot be reached because it is deployed in VNet3, and there is no direct peering between VNet1 and VNet3. Virtual network peering is not transitive:

VNet1 ↔ VNet2 and VNet2 ↔ VNet3 does not imply VNet1 ↔ VNet3

**Why the other options are incorrect**

A: Too restrictive. Azure Bastion can also connect to VMs in directly peered VNets, so VM2 is accessible.

C: Incorrect because VM3 resides in a VNet that is not directly peered with VNet1, making it inaccessible through Bastion1.

D: Incorrect because it includes VM3, which cannot be reached due to the non-transitive nature of VNet peering.

---

### Question 31

You have an Azure subscription that contains the following resources:
a storage account named storage123
a container instance named container1
The subscription contains a virtual network named VirtualNet4 that has the following subnets:
SubnetA – has a Microsoft.Storage service endpoint.
SubnetB – container1 is deployed to SubnetB.
SubnetC – No resources are connected to SubnetC.
You plan to deploy an Azure container instance named container5 to VirtualNet4.
To which subnets can you deploy container5?

**Options:**

- **A.** A. SubnetA, SubnetB, and SubnetC
- **B.** B. SubnetB and SubnetC only ✅
- **C.** C. SubnetB only
- **D.** D. SubnetC only

**Correct answer:** B

**Explanation:**

Azure Container Instances must be deployed to a delegated subnet. Microsoft’s current deployment guidance says you can use an existing subnet in which a container group is already deployed or an existing subnet emptied of all other resources and configuration. It also states that the subnet used for container groups can contain only container groups.
That makes SubnetB valid because it already hosts container1, so it is the kind of subnet that can host additional container groups. SubnetC is also valid because it has no connected resources, so it can be delegated and used for the new container instance. SubnetA is not valid because it already has subnet-level configuration in place, namely a Microsoft.Storage service endpoint, so it is not an empty subnet with no prior configuration for ACI use.
Why the other options are incorrect:
• A. SubnetA, SubnetB, and SubnetC — This is incorrect because SubnetA is not a clean candidate for ACI deployment. Microsoft says an existing subnet must either already host a container group or be emptied of other resources and configuration before ACI deployment. A service endpoint is existing subnet configuration, so SubnetA does not meet that requirement.
• C. SubnetB only — This is too restrictive. SubnetB is valid because it already contains a container group, but SubnetC is also valid because it has no connected resources and can be delegated for Azure Container Instances.
• D. SubnetC only — This ignores the fact that Microsoft explicitly allows deploying more container groups to a subnet that already contains a container group. Since container1 is already in SubnetB, SubnetB remains a valid deployment target for container5.

---

### Question 32

You have an Azure subscription with VMs connected to VNet1. You plan to onboard the VMs to Azure Monitor VM Insights.
You must ensure all VM-to–Azure Monitor traffic goes privately via VNet1 only (no public endpoints).
What should you create first?

**Options:**

- **A.** A. A private endpoint to Azure Monitor
- **B.** B. An Azure Monitor Private Link Scope (AMPLS) ✅
- **C.** C. A Data Collection Rule (DCR)
- **D.** D. A Log Analytics workspace
- **E.** E. A Data Collection Endpoint (DCE)
- **F.** F. A Private DNS zone for Azure Monitor

**Correct answer:** B

**Explanation:**

To force Azure Monitor traffic over your VNet, you must use Azure Monitor Private Link. The control-plane object that enables this is the Azure Monitor Private Link Scope (AMPLS).
The correct high-level sequence is:
1. Create AMPLS and link your Azure Monitor resources to it (e.g., Log Analytics workspace, Insights components).
2. Create Private Endpoints in VNet1 that target the AMPLS.
3. Configure required Private DNS resolution to the private endpoints.
4. (For AMA/VM Insights) Apply your DCR (and DCE if used) to the VMs.
Creating AMPLS first is essential; private endpoints for Azure Monitor must reference an existing AMPLS. This is what enforces that VM agents reach Azure Monitor privately via VNet1 rather than public endpoints.
Why the other options are incorrect
A. Private endpoint: Needed, but you can’t create the Azure Monitor PE without an AMPLS to target. AMPLS comes first.
C. DCR: Defines what data to collect; it doesn’t establish private connectivity.
D. Log Analytics workspace: Required for VM Insights data storage, but it doesn’t enforce private paths by itself.
E. DCE: Used by AMA to route data, but it doesn’t create the private link to Azure Monitor services.
F. Private DNS zone: Required after you have private endpoints; DNS alone can’t enable private access without AMPLS + PEs.

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

### Question 34

Refer to Fabrikam, Inc. (I) Case Study : AZ-104
https://docs.google.com/document/d/19qsvfvAHgsF9tLUqtaK7WPeIhTPeUbxsnpYeCcS4Y0M/edit?usp=sharing
Fabrikam’s web app will run on Azure App Service. Storage and Azure SQL will be reachable only via Private Endpoints in the prod-vnet. You must allow the web app to reach those private endpoints while keeping management simple.
What should you do?

**Options:**

- **A.** A. Configure VNet Integration on the App Service to the vnet-integration subnet ✅
- **B.** B. Assign a public IP to App Service and add NSG rules to allow Storage/SQL
- **C.** C. Enable service endpoints on the App Service
- **D.** D. Create an inbound Private Endpoint for the App Service, while using Express Route for the Main Network

**Correct answer:** A

**Explanation:**

Choice A is correct. The web app needs outbound access to private IPs of Storage/SQL. App Service VNet Integration lets the app egress into your VNet so routes and DNS resolution can reach the Private Endpoints without traversing the public internet. This is the supported and simple pattern for App Service calling private PaaS services, and it avoids exposing public endpoints or managing custom gateways for the app.
Why the others are incorrect
B: A public IP and NSGs don’t enable access to a private endpoint; traffic would still be public and won’t resolve to private IPs.
C: App Service does not use service endpoints; that feature is for VNets attached to IaaS resources.
D: An App Service Private Endpoint is for inbound private access to the web app, not for the app’s outbound calls to Storage/SQL.

---

### Question 36

Refer to Fabrikam, Inc. (I) Case Study : AZ-104
https://docs.google.com/document/d/19qsvfvAHgsF9tLUqtaK7WPeIhTPeUbxsnpYeCcS4Y0M/edit?usp=sharing
Fabrikam’s web app runs on Azure App Service with VNet Integration into prod-vnet. Azure SQL and Azure Storage are exposed only via Private Endpoints. After enabling Private Endpoints, the app can’t connect to SQL or Storage by FQDN.
Which TWO configurations should you implement to restore connectivity while keeping traffic private?

**Options:**

- **A.** A. Create a route table with UDRs to the private endpoint IPs and associate it to the vnet-integration subnet
- **B.** B. Create and link a private DNS zone privatelink.blob.core.windows.net to prod-vnet ✅
- **C.** C. Publish public A records for the storage account that point to the private endpoint IP
- **D.** D. Create and link a private DNS zone privatelink.database.windows.net to prod-vnet ✅
- **E.** E. Enable service endpoints for Storage and SQL on the vnet-integration subnet
- **F.** F. Add static host entries inside App Service for the Storage/SQL endpoints

**Correct answer:** B, D

**Explanation:**

Choice B and D are correct. Private Endpoints require private DNS so that the service’s public FQDN resolves to the private IP exposed inside your VNet. Linking the privatelink.blob.core.windows.net and privatelink.database.windows.net zones to prod-vnet lets the App Service (via VNet Integration) resolve Storage and SQL to private addresses, keeping data off the public internet and restoring name resolution cleanly.
Why the other options are incorrect
A: UDRs control routing after name resolution; they don’t fix DNS.
C: Never advertise Private Endpoint IPs in public DNS.
E: Service endpoints aren’t used by App Service and aren’t combined with Private Endpoints.
F: Host file hacks aren’t supported/operationally scalable for App Service.

---

### Question 37

Refer to Fabrikam, Inc. (I) Case Study : AZ-104
https://docs.google.com/document/d/19qsvfvAHgsF9tLUqtaK7WPeIhTPeUbxsnpYeCcS4Y0M/edit?usp=sharing
Fabrikam needs private connectivity from the on-premises datacenter to Azure for administration and data access. They want a standards-based tunnel with minimal complexity and no new private circuits.
What should you deploy in Azure to terminate the tunnel?

**Options:**

- **A.** A. NAT Gateway in the GatewaySubnet (Private Route Based)
- **B.** B. Application Gateway v2 (WAF), Multiple Access Control Rules
- **C.** C. Virtual network gateway (VPN, route-based) in the GatewaySubnet ✅
- **D.** D. ExpressRoute circuit

**Correct answer:** C

**Explanation:**

Choice C is correct. A route-based virtual network gateway in the GatewaySubnet is the Azure endpoint for an IPsec/IKE site-to-site VPN. It establishes the encrypted tunnel with the on-premises VPN device and advertises the VNet address space so Fabrikam can reach Azure resources privately—meeting the requirement without the cost/lead time of ExpressRoute.
Why the other options are incorrect
A: NAT Gateway provides egress SNAT, not VPN termination.
B: Application Gateway is an L7 HTTP(S) load balancer/WAF, unrelated to IPsec tunnels.
D: ExpressRoute is a private circuit solution, not required here and not an IPsec terminator.

---

### Question 41

You have Azure subscription that includes virtual network with following subnets:
Subnet1, which has connected virtual machine
Subnet2, which has connected app service web app
Subnet3, which has deployed container instance
You plan to deploy container instance named container1.
To which subnets can you deploy container1?

**Options:**

- **A.** A. Subnet1 and Subnet3 only
- **B.** B. Subnet1, Subnet2 and Subnet3
- **C.** C. Subnet2 and Subnet3 only
- **D.** D. Subnet3 only ✅

**Correct answer:** D

**Explanation:**

Azure Container Instances must be deployed into a subnet that is explicitly delegated to Azure Container Instances, and Microsoft states that a subnet used for container groups can contain only container groups. Microsoft also says that once you deploy one container group to a delegated subnet, you can deploy more container groups to that same subnet. That makes Subnet3 valid, because it already contains a container instance and is therefore the subnet type intended for additional Azure Container Instances.
Subnet1 is not valid because it already has a virtual machine connected to it, and an Azure Container Instances delegated subnet can contain only container groups. Subnet2 is also not valid because App Service virtual network integration uses a dedicated subnet and requires an unused subnet for that integration scenario, so it is not a subnet you can also use for Azure Container Instances.
Why the other options are incorrect:
• A. Subnet1 and Subnet3 only — Subnet3 is correct, but Subnet1 is not. A subnet for Azure Container Instances can contain only container groups, so a subnet already used by a virtual machine does not meet that requirement.
• B. Subnet1, Subnet2 and Subnet3 — This overstates what is allowed. Subnet1 is blocked by the “container groups only” rule for Azure Container Instances, and Subnet2 is an App Service integration subnet, which Microsoft describes as dedicated and unused for that purpose.
• C. Subnet2 and Subnet3 only — Subnet3 is valid, but Subnet2 is not. App Service VNet integration requires a dedicated subnet, and Azure Container Instances also require their own delegated subnet used only for container groups, so the same subnet cannot satisfy both conditions here.

---

### Question 42

You plan to deploy an Azure NAT Gateway for outbound connectivity. You must attach one or more existing public IP addresses to the NAT gateway without creating additional resources.
Which option lists all and only the public IPs you can attach?

**Options:**

- **A.** A. IP1 only ✅
- **B.** B. IP1 and IP2 only
- **C.** C. IP1, IP3, and IP4
- **D.** D. IP1 and IP5 only
- **E.** E. IP2 only

**Correct answer:** A

**Explanation:**

NAT Gateway requires public IPs that are Standard SKU, Regional tier, Static, and IPv4. From the table, only IP1 meets all requirements.
Why the others are incorrect
B. IP1 and IP2 only — IP2 is Global tier; NAT Gateway requires Regional.
C. IP1, IP3, and IP4 — IP3/IP4 are Basic SKU (NAT Gateway needs Standard).
D. IP1 and IP5 only — IP5 is IPv6 Basic Dynamic (NAT Gateway attachment requires Standard IPv4 Static).
E. IP2 only — Global tier is not supported for NAT Gateway attachment.

---

### Question 43

You are creating a public frontend for an Azure Standard Load Balancer. You must select from existing public IPs and cannot create new resources.
Which option lists all and only the public IPs you can use for the Load Balancer frontend?

**Options:**

- **A.** A. IP1 only ✅
- **B.** B. IP1 and IP2 only
- **C.** C. IP1 and IP4 only
- **D.** D. IP2 only
- **E.** E. IP1, IP2, and IP5

**Correct answer:** A

**Explanation:**

A Standard Load Balancer frontend requires a Standard SKU, Regional, Static, Public IPv4 (or Standard IPv6) address. From the table, IP1 is Standard/Regional/Static/IPv4.
IP2 fails because it’s Global tier (cannot be associated to regional resources).
IP5 fails because it’s Basic and Dynamic (and even though IPv6 can be supported by Standard LB, this one is not Standard/Static).
Why the others are incorrect
B. IP1 and IP2 only — IP2 is Global tier; Load Balancer requires Regional association.
C. IP1 and IP4 only — IP4 is Basic SKU (Standard LB frontend requires Standard).
D. IP2 only — Global tier public IPs can’t be used as a frontend for a regional Standard Load Balancer.
E. IP1, IP2, and IP5 — IP2 (Global) and IP5 (Basic/Dynamic/IPv6) don’t meet Standard LB frontend

---

### Question 44

You have an Azure subscription.
You plan to create an Azure Container Registry named ContReg1.
You need to ensure that you can push and pull signed container images for ContReg1.
What should you do for ContReg1?

**Options:**

- **A.** A. Upgrade ContReg1 to the Premium SKU and enable geo-replication.
- **B.** B. Enable the admin user on ContReg1 and use its username/password when pushing images.
- **C.** C. Enable content trust on ContReg1. ✅
- **D.** D. Configure a private endpoint and disable public network access.
- **E.** E. Enable anonymous pull on ContReg1.

**Correct answer:** C

**Explanation:**

To use signed images with Azure Container Registry, the registry must have content trust enabled. Content trust enforces that images pushed to and pulled from the registry are digitally signed (e.g., via Docker Content Trust/Notary-style signing). Enabling content trust is the registry-side requirement; you’ll also sign images from the client side when pushing. Without enabling content trust on the registry, signed image enforcement won’t apply.
Why the others are incorrect
A. Premium + geo-replication — Premium features improve scale and multi-region availability but are unrelated to image signing.
B. Enable the admin user… — Admin credentials control authentication, not signing. This doesn’t enforce or enable signed images.
D. Private endpoint + disable public access — This hardens network access, not content signing. You can still push unsigned images over a private link.
E. Enable anonymous pull — Anonymous access reduces access control and does nothing to enforce or enable signed images.

---

### Question 46

You have an Azure subscription that contains the virtual machines described below:
VM1 and VM2 use public IP addresses. From Windows Server 2019 on VM1 and VM2, you allow inbound Remote Desktop connections.
Subnet1 and Subnet2 are in a virtual network named VNET1.
The subscription contains two network security groups (NSGs) named NSG1 and NSG2. NSG1 uses only the default rules. NSG2 uses the default rules and the following custom incoming rule:
Priority: 100
Name: Rule1
Port: 3389
Protocol: TCP
Source: Any
Destination: Any
Action: Allow
NSG1 is associated to Subnet1. NSG2 is associated to the network interface of VM2.
For the following statement, select Yes if the statement is true. Otherwise, select No.
“From the internet, you can connect to VM1 by using Remote Desktop.”

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

NSG1 is applied at the subnet where VM1 lives and contains only default rules. The default inbound rules are:
AllowVNetInBound (VNet-to-VNet traffic)
AllowAzureLoadBalancerInBound
DenyAllInBound (priority 65500)
Because there is no explicit Allow for TCP 3389 from the Internet, traffic to VM1’s public IP on 3389 is matched by DenyAllInBound and blocked at the subnet NSG.
Windows firewall allowing RDP is necessary but not sufficient—NSG evaluation happens first, and without an Allow at the subnet (NSG1) or NIC level, Internet RDP to VM1 is denied. (By contrast, VM2 has its NIC NSG (NSG2) explicitly allowing 3389, so it can be reached.)
Why “Yes” is incorrect
Public IP + OS-level RDP enablement do not override NSG defaults.
With only default rules, NSG1’s DenyAllInBound blocks unsolicited Internet inbound traffic, including RDP 3389.

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

### Question 1

You have an Azure subscription that contains the virtual networks shown in the following table.

The subscription contains the subnets shown in the following table.

The subscription contains the storage accounts shown in the following table.

You create a service endpoint policy named Policy1 in the South Central US Azure region to allow connectivity to all the storage accounts in the subscription.

For the statement below, select Yes if the statement is true. Otherwise, select No.

“Only storage1 and storage2 can be accessed from VNet2.”

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Where the traffic originates

VNet2 (and Subnet2) are located in Southeast Asia.

Subnet2 has the Microsoft.Storage service endpoint enabled, but no service endpoint policy is applied to it.

A policy created in South Central US (Policy1) does not affect Subnet2 in Southeast Asia unless that policy is explicitly associated with Subnet2.

Service endpoint policies are evaluated on the subnet where the traffic originates.

What service endpoints do (subnet-side)

Enabling a service endpoint on a subnet:

Prioritizes and identifies traffic to the selected Azure service (in this case, Microsoft.Storage) over the Azure backbone.

By itself, a service endpoint does not grant or deny access.

It simply makes the subnet’s VNet identity available to the Azure service so firewall rules can evaluate it.

What actually controls access (service-side)

Access is controlled by Storage account network rules (firewalls).

For Azure Storage, when using Selected networks:

You can add VNet rules only if the VNet and Storage account are in the same Azure region.

This regional limitation is critical.

Examples:

A subnet in Southeast Asia can be whitelisted on a Southeast Asia storage account.

That same subnet cannot be added as a VNet rule on a West Europe or South Central US storage account.

Applying this to the scenario

storage3

Located in Southeast Asia

Same region as VNet2/Subnet2

If using Selected networks, Subnet2 can be added as an allowed VNet rule

Therefore:

✅ VNet2 → storage3 works

storage1

Located in West Europe

storage2

Located in South Central US

These are in different regions from Subnet2, so:

Subnet2 cannot be added as a VNet rule

Therefore:

❌ VNet2 cannot access storage1 via VNet rules❌ VNet2 cannot access storage2 via VNet rules

Impact of Policy1

The fact that Policy1 (a service endpoint policy) was created in South Central US is irrelevant to VNet2 unless it is explicitly applied to Subnet2.

Because the policy is not associated, it has:

No effect

No filtering impact

No access restriction behavior

Conclusion

The statement:

“Only storage1 and storage2 can be accessed from VNet2”

is false.

In this configuration, the only storage account that can be accessed from VNet2 using service endpoint/VNet rules is:

✅ storage3

Reason:

It is in the same region as VNet2/Subnet2

Therefore, the correct answer is:

✅ No

Why “Yes” is incorrect

Ignores the regional requirement

Storage VNet rules require the VNet and Storage account to be in the same region

Assumes Policy1 automatically affects Subnet2

Service endpoint policies are not global

They only apply where they are explicitly attached

Reverses the actual behavior

The cross-region accounts (storage1 and storage2) are the ones that cannot be accessed through VNet rules from VNet2.

---

### Question 4

You have an Azure subscription that contains a storage account named storage1 and the following virtual machines:
VM1 has a public IP address of 13.68.158.24 and is connected to VNET1/Subnet1
VM2 has a public IP address of 52.255.145.76 and is connected to VNET1/Subnet1
VM3 has a public IP address of 13.68.158.50 and is connected to VNET1/Subnet2
The subnets have the following service endpoints:
Subnet1 has a Microsoft.Storage service endpoint
Subnet2 does NOT have any service endpoint
Storage1 has a firewall configured to allow access from the 13.68.158.0/24 IP address range only.
Which virtual machines can access storage1?

**Options:**

- **A.** A. VM1 and VM2 only
- **B.** B. VM1 and VM3 only
- **C.** C. VM1 only
- **D.** D. VM1, VM2, and VM3
- **E.** E. VM3 only ✅

**Correct answer:** E

**Explanation:**

Azure Storage IP network rules allow traffic from specific public IP address ranges. Since storage1 allows 13.68.158.0/24, VM3 would match that rule because its public IP is 13.68.158.50 and Subnet2 does not have a Microsoft.Storage service endpoint. That means VM3 continues to reach the storage account by using its public IP path.
VM1 and VM2 are in Subnet1, which has a Microsoft.Storage service endpoint enabled. Microsoft states that once a service endpoint is enabled for a subnet, traffic from that subnet to Azure Storage no longer uses the VM’s public IP address and instead uses the subnet’s private IP address as the source. Microsoft also states that IP network rules permitting those public IPs no longer have an effect for traffic from that subnet. Because the question gives only an IP rule and no virtual network rule for Subnet1, VM1 and VM2 cannot use that IP-based firewall exception to access storage1.
Why the other options are incorrect:
• A. VM1 and VM2 only — This is incorrect because both VMs are in Subnet1, and Subnet1 has a Microsoft.Storage service endpoint. Once that service endpoint is enabled, Azure Storage traffic from that subnet stops using the VMs’ public IP addresses, so the storage account’s public IP rule does not help either VM. VM2 would also fail even under simple IP matching because its public IP is outside 13.68.158.0/24.
• B. VM1 and VM3 only — VM3 is valid, but VM1 is not. Even though VM1’s public IP falls inside the allowed range, the service endpoint on Subnet1 changes the source identity used for Azure Storage traffic, so the public-IP firewall rule no longer applies to VM1’s traffic.
• C. VM1 only — This is incorrect for the same reason. VM1 is in the subnet with the Microsoft.Storage service endpoint, so the storage firewall’s public IP rule is no longer effective for VM1’s access path to storage1.
• D. VM1, VM2, and VM3 — This overstates access. VM3 can use the allowed public IP range because Subnet2 has no service endpoint, but VM1 and VM2 cannot rely on their public IPs once the storage service endpoint is enabled on Subnet1.

---

### Question 8

Contoso built a new hub VNet using click-ops in the portal. They now need an exact copy of the template used for a specific deployment so they can redeploy it in a lab subscription. They don’t want a “snapshot” of current resources; they want the original authored template.
You need to export the exact deployment template used previously for a resource group–scoped deployment. Which option should you choose?

**Options:**

- **A.** A. az deployment group export ✅
- **B.** B. az group export
- **C.** C. Export template (resource blade)
- **D.** D. Azure Migrate

**Correct answer:** A

**Explanation:**

Exporting from deployment history returns the original template used for that deployment, making it ideal for clean redeployments without post-deployment drift. At resource group scope, this is done with az deployment group export (or via the portal’s Deployments blade).
Why others are incorrect
B. az group export generates a snapshot of current state (auto-generated), not the authored template.
C. Exporting from a single resource blade only exports that one resource, not the full deployment.
D. Azure Migrate is unrelated to ARM/Bicep template export.

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

### Question 15

You have two Azure virtual machines as shown in the following table.

You create the Azure DNS zones shown in the following table.

You perform the following actions:

To fabrikam.com, you add a virtual network link to vnet1 and enable auto registration.

For contoso.com, you assign vm1 and vm2 the Owner role.

For the following statement, select Yes if the statement is true. Otherwise, select No.

“The DNS A record for vm1 is added to fabrikam.com and has the IP address of 10.0.1.4.”

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

Because fabrikam.com is an Azure Private DNS zone and auto-registration is enabled on its virtual network link to vnet1, Azure will automatically create (and maintain) an A record for vm1 using its private IP 10.0.1.4. Auto-registration works at the VNet link level: when a VM’s NIC with a private IP is attached to a linked VNet that has auto-registration turned on, Azure registers the VM’s hostname in the private zone (forming the FQDN, e.g., vm1.fabrikam.com) and points it to the VM’s current private IP. If the VM’s private IP changes (DHCP/resize), the A record is updated; if the VM/NIC is removed, the record is cleaned up. This behavior is only supported for Private DNS zones, which is exactly your setup here—so vm1 will be automatically registered with 10.0.1.4.

Key points

Auto-registration is a feature of Azure Private DNS when a VNet link has Enable auto registration set to On.

The VM must be connected to that linked VNet; Azure then creates/updates the A record in the private zone.

Public DNS zones do not support auto-registration; manual/IaC updates are required there.

---

### Question 16

You have an Azure subscription that contains a virtual machine named VM1 and a storage account named storage1.
You need to ensure that VM1 can access storage1 by using a private IP address.
What should you use?

**Options:**

- **A.** A. a point to site (P2S) connection
- **B.** B. a service endpoint ✅
- **C.** C. a VPN gateway
- **D.** D. the Azure Front Door service

**Correct answer:** B

**Explanation:**

Among the listed choices, service endpoint is the correct answer. Microsoft’s current documentation says virtual network service endpoints allow private IP addresses to reach Azure services without requiring public IP addresses, and for Azure Storage specifically, traffic from a subnet with a service endpoint uses the subnet’s private IP address as the source IP when communicating with the storage account.
There is an important nuance here. Microsoft also distinguishes service endpoints from private endpoints: a private endpoint gives the storage account a private IP in your virtual network, while a service endpoint keeps the storage service publicly routable and changes how traffic from the subnet reaches it. If private endpoint had been one of the answer choices, that would be the feature that assigns a private IP to the storage account itself. But with the options provided, the expected AZ-104 answer is service endpoint.
Why the other options are incorrect:
• A. a point to site (P2S) connection — P2S is used for client devices connecting into an Azure virtual network over VPN. It is not the feature used to let an Azure VM securely reach Azure Storage over Azure’s internal service networking model.
• C. a VPN gateway — A VPN gateway is used for site-to-site, point-to-site, or VNet-to-VNet connectivity. It does not by itself configure Azure Storage access from a VM by using the storage service integration mechanism described in this question.
• D. the Azure Front Door service — Azure Front Door is a global application delivery and web traffic routing service. It is not used to provide private network access from a VM to an Azure Storage account.

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

### Question 29

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.

You have an Azure subscription that contains the virtual machines shown in the following table.

You deploy a load balancer that has the following configurations:

Name: LB1

Type: Internal

SKU: Standard

Virtual network: VNET1

You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.

Solution: You create two Standard SKU public IP addresses and associate a Standard SKU public IP address to the network interface of each virtual machine.

Does this meet the goal?

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

For a **Standard SKU load balancer**, backend pool members must satisfy two key requirements:

- All virtual machines must be **in the same region and virtual network** as the load balancer.

- Each VM’s network interface must be associated with **either no public IP** or a **Standard SKU public IP address** — Basic SKU IPs are **not compatible** with Standard SKU load balancers.

In this scenario, by creating **two Standard SKU public IP addresses** and assigning one to each VM, you align the configuration with the Standard load balancer’s requirements. Both **VM1 and VM2** can now be successfully added to the backend pool of **LB1** because they share the same VNet (VNET1) and use compatible Standard SKU IPs.

This approach ensures proper connectivity and predictable behavior under Azure’s unified security and control model for Standard networking resources. Unlike Basic SKU load balancers, the Standard SKU operates on a **secure-by-default** model—no inbound traffic is allowed unless explicitly configured.

Why No is incorrect

If Basic SKU public IPs had been used, or if the VMs were in different VNets or regions, they couldn’t be added to the backend pool of a Standard SKU load balancer.

---

### Question 31

Fabrikam has two VNets in the same region and wants low-latency private connectivity without gateways: VNetA uses 10.10.0.0/16; VNetB was mistakenly created as 10.10.0.0/16 as well. You must enable private traffic between them without changing regions or adding VPN/ExpressRoute.

**Options:**

- **A.** A. Create VNet peering between VNetA and VNetB as-is
- **B.** B. Enable service endpoints on both VNets
- **C.** C. Add private endpoints pointing each VNet at the other
- **D.** D. Change VNetB to a non-overlapping address space and then create VNet peering ✅

**Correct answer:** D

**Explanation:**

VNet peering requires non-overlapping CIDRs. First, modify VNetB’s address space (for example, 10.20.0.0/16), adjust any subnets accordingly, and then create VNet peering between the two VNets. Peering gives private, low-latency connectivity using Azure’s backbone—no gateways or public exposure.
Why the others are incorrect:
A. Peering as-is fails validation because the address spaces overlap.
B. Service endpoints secure access to Azure services, not VNet-to-VNet connectivity.
C. Private endpoints are for accessing PaaS resources privately; they don’t connect VNets to each other.

---

### Question 34

Environment
You’re deploying three identical web VMs for a 24/7 production tier. You have to configure placement at creation so the deployment survives a datacenter-level failure and meets the highest Azure in-region compute SLA for multi-VM workloads.

**Options:**

- **A.** A. Availability set
- **B.** B. Standard load balancer
- **C.** C. Availability zones ✅
- **D.** D. Proximity placement group

**Correct answer:** C

**Explanation:**

Placing two or more VMs across Availability Zones in the same region provides zone isolation (separate power, cooling, and networking) and the highest multi-VM compute SLA for IaaS VMs within that region.
Why the others are incorrect:
A — Availability set only spreads across fault/update domains within a single datacenter; lower SLA than zones and no datacenter-level separation.
B — Standard load balancer distributes traffic but doesn’t create failure domain separation or guarantee a compute SLA on its own.
D — Proximity placement group optimizes latency/co-location; it doesn’t add resiliency or an SLA uplift.

---

### Question 36

Environment
Constraints
• Prod: Must stay in East US; internet-facing behind a load balancer.
• DR: Must stay in North Central US; no scale sets; standalone VMs only.
You’re standing up the Prod web tier in East US. The placement must survive a datacenter (zone) outage and achieve the highest in-region compute SLA for IaaS VMs. You need to decide placement at creation so the three VMs land in separate failure domains.

**Options:**

- **A.** A. Proximity placement group
- **B.** B. Standard load balancer
- **C.** C. Availability zones ✅
- **D.** D. Availability set

**Correct answer:** C

**Explanation:**

Placing the three VMs across availability zones gives independent datacenter fault domains within the region and unlocks Azure’s highest multi-VM compute SLA. A single-zone failure won’t take down the tier.
Why the others are incorrect:
A. Proximity placement group optimizes inter-VM latency; it doesn’t provide zone isolation or an SLA uplift.
B. Standard load balancer distributes traffic but doesn’t create compute redundancy domains or guarantee VM uptime.
D. Availability set improves resiliency inside one datacenter (fault/update domains) but lacks zone isolation and offers a lower SLA than zones.

---

### Question 37

Environment
Constraints
• Prod: Must stay in East US; internet-facing behind a load balancer.
• DR: Must stay in North Central US; no scale sets; standalone VMs only.
You’re deploying the DR batch tier in North Central US. This region has no availability zones, but you still must meet the in-region multi-VM compute SLA for two standalone VMs. You cannot change regions or use scale sets.

**Options:**

- **A.** A. Proximity placement group
- **B.** B. Standard load balancer
- **C.** C. Availability zones
- **D.** D. Availability set ✅

**Correct answer:** D

**Explanation:**

With no zones available, an availability set spreads the two VMs across fault domains and update domains in the datacenter, which is what Azure uses to provide the multi-VM compute SLA in these regions.
Why the others are incorrect:
A. Proximity placement group only co-locates for low latency; it doesn’t separate fault/update domains.
B. Standard load balancer is networking, not compute placement; it doesn’t grant the SLA by itself.
C. Availability zones are not available in this region, so they can’t be used.

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

### Question 40

Environment
Requirements
A single Azure Container Registry serving both regions.
Regional pulls without cross-region egress; images available close to each AKS cluster.
Private network access from both VNets; no public endpoint exposure.
No shared/admin passwords; use Azure RBAC to grant pull/push to work
Proposed solution
Create Azure Container Registry (Basic) in East US.
Add VNet service endpoints for vnet-us and vnet-eu to restrict access.
Create repository-scoped tokens for CI/CD and AKS to avoid RBAC.
Rely on service endpoints to keep traffic private and assume images will replicate to West Europe automatically.
Does the proposed solution meet the requirements?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

This approach is incorrect on multiple fronts. ACR does not support VNet service endpoints; network isolation for ACR is provided via Private Link (private endpoints), not service endpoints. The Basic tier lacks geo-replication, so there’s no automatic replication to West Europe. Using tokens instead of Azure RBAC contradicts the requirement to grant pull/push via identity-based access. Overall, it fails the private access model and the multi-region availability requirement.

---

### Question 41

Fabrikam is launching three production APIs in East US. You must provision an App Service plan that supports VNet integration, multiple deployment slots for blue/green and can scale out beyond 10 instances during seasonal peaks, while keeping management in the Azure portal.
Which App Service plan tier should you create?

**Options:**

- **A.** A. Basic
- **B.** B. Standard
- **C.** C. Premium ✅
- **D.** D. Free

**Correct answer:** C

**Explanation:**

Premium supports VNet integration, more deployment slots (than Standard), and higher scale-out limits (beyond 10 instances), which matches the production requirements and growth headroom.
Why the others are incorrect:
A. Basic: No autoscale, no VNet integration, and no deployment slots—doesn’t meet production needs.
B. Standard: Has slots and VNet integration, but max scale is lower (typically up to 10 instances), so it fails the “beyond 10” requirement.
D. Free: No custom domains/SSL, no scale, and testing-only limits—unsuitable for production APIs.

---

### Question 42

Contoso needs a small dev/test web app for a marketing pilot. It must use a custom domain with TLS, run on a single instance, and keep costs to a minimum. Autoscale, VNet integration, and deployment slots are not required.
Which App Service plan tier should you create?

**Options:**

- **A.** A. Basic ✅
- **B.** B. Standard
- **C.** C. Premium
- **D.** D. Free

**Correct answer:** A

**Explanation:**

Basic is the lowest-cost tier that supports custom domains and SNI SSL for a simple single-instance app, making it ideal for low-traffic dev/test.
Why the others are incorrect:
B. Standard: Adds autoscale and more features (and cost) the scenario doesn’t need.
C. Premium: Enterprise features and higher limits that overprovision and increase cost.
D. Free: Doesn’t support custom domains/SSL, so it can’t meet the requirement.

---

### Question 43

You need to back up a production web app on a schedule without exposing any public endpoint on the backup target. Backups must flow privately over your VNet to a locked-down storage account.
Which configuration meets the requirement?

**Options:**

- **A.** A. Configure App Service Backup to stbackup, reach it via the private endpoint using VNet integration, and keep public access disabled on the storage account ✅
- **B.** B. Use the Free plan and run on-demand backups to any storage account
- **C.** C. Allow stbackup’s public endpoint and IP-allowlist the app’s outbound IPs, then enable App Service Backup
- **D.** D. Use Shared plan backups and restrict by service endpoints

**Correct answer:** A

**Explanation:**

App Service backups write to an Azure Storage container you specify. With VNet integration on the app and a private endpoint for the storage account in the same VNet, all backup traffic stays on private IPs. Private DNS ensures the storage account name resolves to the private endpoint. With public network access disabled on the storage account, there’s no internet exposure. This satisfies: scheduled backups, private-only data path, and a locked-down target.
Why the others are incorrect:
B. Free plan, on-demand backups — Free/Shared tiers do not support the App Service backup feature. Also, this doesn’t address private-only routing.
C. Public endpoint + IP allowlisting — Still exposes the storage account publicly and fails the “no public endpoint exposure” requirement. Outbound IPs can change with scale/platform events, making this brittle.
D. Shared plan + service endpoints — App Service backup isn’t available on Shared. Service endpoints don’t apply to private-only access for storage here; you already have a private endpoint pattern that fully closes public access.

---

### Question 45

Contoso is building a three-tier VNet (web, app, data) in the same region. By default, subnets can route to each other, but security requires web cannot reach data, while app can reach both. All tiers still need outbound internet.
You must achieve this with native VNet features—not firewalls or NVAs.

**Options:**

- **A.** A. Subnet delegation to Microsoft.Web/serverFarms
- **B.** B. Service endpoints to Storage and SQL
- **C.** C. Network security groups on each subnet with allow/deny rules ✅
- **D.** D. Private endpoints on all three subnets

**Correct answer:** C

**Explanation:**

NSGs give you layer-4 allow/deny rules per subnet (or NIC). Create explicit allow rules for app?web and app?data flows, and a deny rule preventing web?data. Because system routes remain, outbound internet still works unless you explicitly block it. This meets the requirement using core VNet constructs without extra appliances.
Why the others are incorrect:
A. Subnet delegation only reserves a subnet for a PaaS resource provider; it doesn’t implement traffic filtering.
B. Service endpoints secure access to Azure PaaS services; they don’t block traffic between your subnets.
D. Private endpoints publish private IPs for PaaS resources; they’re not a subnet-to-subnet isolation mechanism.

---

### Question 47

You’re expanding a VNet and need to add a new Data subnet sized for ~100 hosts. The VNet already has two /24 subnets and a GatewaySubnet placed at the end of the address space. You must choose a prefix that fits the host count, stays inside the VNet, and does not overlap anything that exists.
You need to create Subnet-Data. Which address prefix should you use?

**Options:**

- **A.** A. 10.20.0.128/25
- **B.** B. 10.21.0.0/25
- **C.** C. 10.20.2.0/25 ✅
- **D.** D. 10.20.1.128/25

**Correct answer:** C

**Explanation:**

10.20.2.0/25 is inside 10.20.0.0/16, provides /25 capacity (~126 usable hosts) for the ~100-host requirement, and does not overlap 10.20.0.0/24 (Frontend), 10.20.1.0/24 (App), or the GatewaySubnet at 10.20.255.224/27. It cleanly fits between existing ranges and respects CIDR boundaries.
Why the others are incorrect:
A. 10.20.0.128/25 sits inside 10.20.0.0/24, so it overlaps Subnet-Frontend.
B. 10.21.0.0/25 is outside the VNet’s 10.20.0.0/16 address space, so it can’t be used unless you expand the VNet first.
D. 10.20.1.128/25 sits inside 10.20.1.0/24, so it overlaps Subnet-App.

---

### Question 48

You’ve deployed two IaaS tiers in the same VNet: asg-web for frontend VMs and asg-app for application VMs. Security requires that web VMs may reach app VMs only on TCP 443. All other east–west traffic between subnets must be blocked. Outbound internet must remain allowed via default routes. No firewalls/NVAs—use native VNet features.
How should you configure this?

**Options:**

- **A.** A. Enable service endpoints to Storage and SQL
- **B.** B. Assign NSGs to NICs only; leave defaults
- **C.** C. On the app subnet’s NSG: Allow from asg-web to asg-app TCP 443, then Deny VirtualNetwork to VirtualNetwork Any; leave internet defaults ✅
- **D.** D. Use a Standard Load Balancer with a health probe on 443

**Correct answer:** C

**Explanation:**

Default NSG rules include AllowVNetInBound, which would otherwise permit all east–west flows. By adding a high-priority Allow for asg-web ? asg-app on TCP 443 and then a higher-priority Deny from VirtualNetwork ? VirtualNetwork on Any, you constrain traffic to HTTPS only. Applying this NSG on the app subnet (or app NICs) enforces the rule on ingress to the app tier. Because you didn’t add outbound denies, default routes still allow internet egress.
Why the others are incorrect:
A: Service endpoints protect access to Azure PaaS services, not VM-to-VM flows.
B: Defaults keep AllowVNetInBound, so east–west stays wide open.
D: Load balancers distribute traffic; they don’t enforce L4 policy between VMs.

---

### Question 49

You have a set of management VMs that must allow RDP (TCP 3389) only from your on-premises public CIDR. All other RDP from the internet must be blocked for these VMs. You want a simple, identity-based way to target the rule without breaking other traffic.
What should you do?

**Options:**

- **A.** A. Create asg-mgmt for the management VMs; on the mgmt subnet NSG add Allow 3389 from on-prem CIDR to asg-mgmt, then Deny 3389 from Internet ✅
- **B.** B. Enable “Allow RDP” on all NSGs and add a UDR to on-premises
- **C.** C. Use Private Endpoints for the VMs and disable public networking
- **D.** D. Add a NAT Gateway; NAT will block unsolicited RDP by default

**Correct answer:** A

**Explanation:**

An ASG lets you target just the management NICs in your NSG rules. You add a precise Allow for source = on-prem CIDR, destination = asg-mgmt, port 3389, and follow with an explicit Deny for TCP 3389 from Internet. This blocks all other RDP attempts while leaving non-RDP and outbound traffic unaffected thanks to the remaining default NSG rules.
Why the others are incorrect:
B: A blanket “Allow RDP” opens exposure; UDRs don’t replace access control.
C: Private Endpoints are for PaaS resources, not VM NICs.
D: NAT Gateway provides outbound SNAT; it doesn’t enforce inbound port restrictions.

---

### Question 50

You’re publishing www.contoso.com behind an Azure Load Balancer that currently uses a Public IP resource. The team wants DNS to automatically track the LB’s public IP if it’s ever replaced, without you editing the record each time. You will host the zone in Azure DNS and keep everything public-facing.
How should you publish www.contoso.com so it tracks the Load Balancer’s Public IP automatically?

**Options:**

- **A.** A. Create a CNAME from www to the IP address string
- **B.** B. Create an A record pointing to the current numeric IP
- **C.** C. Create an A record alias to the Public IP resource in an Azure DNS public zone ✅
- **D.** D. Create a TXT record with the Public IP resource ID

**Correct answer:** C

**Explanation:**

An A (alias) record in an Azure DNS public zone can target an Azure Public IP resource, not a static IP string. If the underlying resource changes (e.g., LB swapped or IP reassigned), the alias keeps tracking the resource, eliminating manual record edits. This is the supported, resilient way to bind www to an Azure-owned public endpoint.
Why the others are incorrect:
A. CNAME ? IP string: A CNAME must point to a hostname, not an IP. Also, it wouldn’t track a resource change.
B. A ? numeric IP: Works initially but is static; you must edit DNS whenever the resource/IP changes.
D. TXT with resource ID: TXT records do not direct client traffic; they’re for metadata/verification.

---

### Question 51

You created a Private Endpoint for storageacct1 (Blob) in VNet-A. Both VNet-A and VNet-B must privately resolve storageacct1.blob.core.windows.net to the endpoint’s private IP. You want a standard, supported approach that doesn’t rely on hosts files or custom DNS servers.
How should you configure private name resolution for both VNets?

**Options:**

- **A.** A. Create an Azure Private DNS zone privatelink.blob.core.windows.net, create/confirm the A record for storageacct1, and link both VNet-A and VNet-B to the zone ✅
- **B.** B. Create a public Azure DNS zone and add a private A record for storageacct1
- **C.** C. Enable auto-registration on VNet-A and VNet-B to register the Private Endpoint name automatically
- **D.** D. Create a CNAME in a private zone pointing storageacct1.blob.core.windows.net to its private IP

**Correct answer:** A

**Explanation:**

Private Endpoints for Blob use service-specific Private DNS zones (e.g., privatelink.blob.core.windows.net). You place (or let the PE creation place) the A record there (typically storageacct1.privatelink.blob.core.windows.net), and clients resolve the public FQDN via the service’s CNAME chain to that private name. Linking both VNets to the same Private DNS zone provides private resolution from each network without custom DNS appliances.
Why the others are incorrect:
B. Public zone with private A: Public zones aren’t for private IP resolution; records would be publicly visible and won’t steer to a VNet-only IP.
C. Auto-registration: Private DNS auto-registration is for VM hostnames in selected zones; it doesn’t auto-register Private Endpoint names across VNets.
D. CNAME ? IP: A CNAME must map hostname-to-hostname, not hostname-to-IP. Also, you still need the correct service private zone to resolve the chain.

---

### Question 1

You have an Azure subscription that contains the resources shown in the following table.

You need to create a network interface named NIC1 without creating additional resources.

In which region can you create NIC1?

**Options:**

- **A.** A. East US only ✅
- **B.** B. East US and West Europe only
- **C.** C. East US and North Europe only
- **D.** D. East US, West Europe, and North Europe
- **E.** E. West Europe only
- **F.** F. North Europe only

**Correct answer:** A

**Explanation:**

Choice A is correct. **Network interfaces (NICs) are scoped to a region and must be created in the same region as the virtual network/subnet they will attach to.** Because NIC1 must attach to a subnet in **VNET1**, and VNET1 exists in **East US**, NIC1 must also be created in **East US**. Creating NIC1 in any other region would require additional resources (for example, another VNet/subnet in that region or a move of dependencies), which the question forbids.

A NIC has three critical scoping constraints—**subscription, region, and VNet**. Azure enforces co-location: NIC ↔ VNet/subnet ↔ VM must all live in the **same subscription and region**. This guarantees layer-2 adjacency and simplifies IP management. After creation, you **cannot change the VNet** a NIC is bound to; you’d have to create a new NIC in the target VNet/region and rewire the VM.

Why the others are incorrect

B: West Europe is a different region. You’d need a West Europe VNet/subnet (an “additional resource”), violating the constraint.

C: Same issue—North Europe isn’t the VNet’s region; you’d need to create networking there.

D: Adds regions that do not host VNET1; still requires extra resources.

E: West Europe only is impossible without a West Europe VNet/subnet for NIC1 to join.

F: North Europe only is impossible for the same reason.

---

### Question 5

**Note:** This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.

You have an Azure subscription that contains the virtual machines shown in the following table.

You deploy a load balancer that has the following configurations:

- Name: LB1

- Type: Internal

- SKU: Standard

- Virtual network: VNET1

You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.

**Solution**: You create a Basic SKU public IP address, associate the address to the network interface of VM1, and then start VM1.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No is correct.** A **Standard SKU load balancer** has stricter networking requirements than a Basic SKU load balancer. All virtual machines in its **backend pool** must:

- Reside in the **same virtual network (VNet)** as the load balancer.

- Be in the **same region**.

- Have **either no public IP address** or a **Standard SKU public IP address** attached.

In this scenario, assigning a **Basic SKU public IP** to VM1 violates the compatibility rule. Standard load balancers cannot associate backend pool members that use Basic IP configurations, because the two SKUs use different underlying control planes and security models. As a result, **VM1 and VM2 cannot both be added** to the backend pool of **LB1** when VM1 has a Basic IP.

To meet the goal, you would either remove the Basic IP from VM1 or replace it with a **Standard SKU public IP address** before joining it to the backend pool.

---

### Question 11

You have an Azure subscription that contains the resources in the following table.

In Azure, you create a private DNS zone named adatum.com, add virtual network link to VNet2, and enable auto registration.

The adatum.com zone is configured as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“VM5 can resolve VM9.adatum.com.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Choice No is correct. **Azure Private DNS** resolves names only for **virtual networks that are linked to the zone**. In your setup, the private zone **adatum.com** is linked to **VNet2** with **auto-registration enabled**. That means:

- **VM9 (in VNet2)** auto-registers an **A record** like VM9.adatum.com in the zone.

- **Only VNets linked to the zone** act as **resolution virtual networks** for that zone. Since **VNet1 is not linked**, its VMs (including **VM5**) don’t query or receive answers from the **adatum.com** private zone and therefore **cannot resolve VM9.adatum.com**.

Peering does not change this behavior; **name resolution is not transitive and does not flow across unlinked VNets**. To allow VM5 to resolve VM9.adatum.com, you would either (1) **link VNet1** to the adatum.com private DNS zone (resolution only is sufficient), or (2) deploy a **DNS forwarder** (e.g., Azure Firewall DNS proxy or a custom DNS server) in VNet1 that forwards queries for adatum.com to Azure’s private DNS endpoint, while VNet1 remains configured to use that forwarder.

Why Yes is incorrect

Even though VM9.adatum.com exists (auto-registered from VNet2), **VM5 has no zone link** to adatum.com and therefore **no path to resolve** that private name.

---

### Question 12

You have an Azure subscription that contains three virtual networks named VNET1, VNET2, and VNET3.

Peering for VNET1 is configured as shown in the following exhibit.

Peering for VNET2 is configured as shown in the following exhibit.

Peering for VNET3 is configured as shown in the following exhibit.

Based on the information presented, select the answer choice that completes the following statement correctly.

**“Packets from VNET2 can be routed to ______________.”**

**Options:**

- **A.** A. VNET1 only ✅
- **B.** B. VNET3 only
- **C.** C. VNET1 and VNET3
- **D.** D. Neither VNET1 nor VNET3
- **E.** E. VNET3 via VNET1 (transit)
- **F.** F. An on-premises network via VNET1’s VPN gateway

**Correct answer:** A

**Explanation:**

Choice A is correct. **Virtual network peering is non-transitive**: a route from VNET2 to VNET1 does **not** automatically create a route from VNET2 to any other network VNET1 can reach. Since **VNET2 has a direct peering with VNET1**, packets from VNET2 can be routed to **VNET1**. Because **gateway transit is disabled**, VNET2 cannot use any gateway or learned routes in VNET1 to reach other networks (including VNET3 or on-prem).

Why the others are incorrect

B: There is **no direct peering** between VNET2 and VNET3, so routing from VNET2 to VNET3 is not possible.

C: Would require either **direct peering** between VNET2 and VNET3 or **transit via VNET1**; neither is in place.

D: Too restrictive—VNET2 **can** reach VNET1 over their direct peering.

E: Peering is **not transitive**; without **Use remote gateway / Allow gateway transit** properly enabled on the appropriate sides, VNET2 cannot route to VNET3 **through** VNET1.

F: With **gateway transit disabled**, VNET2 cannot send traffic to **on-premises** networks via any VPN/ExpressRoute gateway in VNET1.

---

### Question 13

Contoso is standardizing on a hub-and-spoke design. The hub VNet has the **only VPN gateway** to on-prem. Spokes must reach on-prem **via the hub’s gateway** no extra gateways in spokes.

You need the spokes to **use the hub’s VPN gateway** over peering. On the **hub side of the peering**, which setting should you enable?

**Options:**

- **A.** A. Allow virtual network access
- **B.** B. Use remote gateway
- **C.** C. Allow forwarded traffic
- **D.** D. Allow gateway transit ✅

**Correct answer:** D

**Explanation:**

**Choice D is correct.** Enabling **Allow gateway transit** on the **hub-side** peering advertises the hub’s VPN gateway to the peered spokes so they can consume **on-prem connectivity** without deploying their own gateways. This is the hub’s part of the hub/spoke pattern for gateway sharing.

To complete the pattern, each spoke’s **spoke-side** peering should enable **Use remote gateway**, but the question explicitly asks for the **hub-side** configuration. With peering in place and non-overlapping address spaces, routes to on-prem propagate over the Azure backbone.

Why others are incorrect

A. **Allow virtual network access** simply permits VNet-to-VNet traffic; it doesn’t expose the hub’s gateway to spokes.

B. **Use remote gateway** is set on the **spoke side**, not on the hub side.

C. **Allow forwarded traffic** is for NVA/service-chaining scenarios; it doesn’t publish the hub gateway to peers.

---

### Question 14

A VM in Spoke-A can’t reach a private endpoint over **TCP 443**. The security team wants to know **exactly which rule** is denying the flow from the VM to the destination IP.

You need to determine if the flow is **Allowed/Denied** and identify the **exact NSG rule** responsible for the decision. **Which option should you choose?**

**Options:**

- **A.** A. Next hop
- **B.** B. Effective security rules
- **C.** C. Connection troubleshoot
- **D.** D. IP flow verify ✅

**Correct answer:** D

**Explanation:**

**IP flow verify** evaluates a single **5-tuple (src/dst IP, port, protocol, direction)** against the **effective** NSG and admin rules applied to the VM’s NIC/subnet and returns **Allow/Drop with the exact rule name**. That’s the fastest way to answer “which rule is blocking 10.1.1.7 → 10.0.10.5:443?”—no packet capture or guesswork required.

Because it runs at the VM’s network interface context, it reflects merged policy (subnet + NIC + admin rules) and avoids confusion when multiple NSGs exist. For audit and RCA, the reported **rule name** is the key artifact the security team asked for.

Why others are incorrect

A. **Next hop** shows routing decisions, not L4 allow/deny or rule names.

B. **Effective security rules** lists merged rules but doesn’t evaluate a **specific flow** or return an allow/deny result.

C. **Connection troubleshoot** can show reachability and where it fails, but it won’t return the **precise rule name** that denied the flow.

---

### Question 16

Refer to Northwind Traders (I) Case Study : AZ-104:
https://docs.google.com/document/d/1epkoAw5-c-Dg62nsP1g5j7KMVQZUnQNaeU21ZD-K0Z0/edit?usp=sharing
App1 is rehosted to Azure VMs in one VNet with Web, Processing, and Data tiers. You must minimize open ports between tiers and keep rules easy to maintain as VM counts change.
What should you implement?

**Options:**

- **A.** A. NSG rules referencing each VM’s private IPs
- **B.** B. Application Security Groups (ASGs) for each tier and NSG rules that reference ASG?ASG on required ports ✅
- **C.** C. Any-Any within the VNet; rely on host firewalls inside the VMs
- **D.** D. Insert a third-party firewall between each subnet and manage all rules centrally, host a load balancer for the external traffic using NVA

**Correct answer:** B

**Explanation:**

Choice B is correct. ASGs let you express intent (for example, Web ? Processing on 8443; Processing ? Data on 1433) without hard-coding IPs. As tiers scale in/out, you add/remove NICs to the appropriate ASG and the NSG rules continue to apply—minimal exposure, minimal churn, and strong alignment with least-privilege east-west filtering.
Why the others are incorrect
A: IP-based NSGs don’t scale and become brittle as VMs are added/replaced.
C: Any-Any violates the requirement to minimize open ports and weakens segmentation.
D: Appliances add cost/latency/operations overhead when NSGs/ASGs natively solve the requirement.

---

### Question 17

A worker VM in a spoke must call an API on a hub VM over **TCP 8443**. There’s an **NVA in the hub**, and UDRs steer traffic through it. The app intermittently times out; ops need an **active test** from the worker VM to the API **FQDN** that shows **reachability, hops, and whether NSG/UDR is the cause**.

You need an **on-demand** test from the source VM to the destination **FQDN/port** that reports **reachability**, **path**, and whether a **platform vs. configuration** issue (NSG/UDR/port) is causing failure. **Which option should you choose?**

**Options:**

- **A.** A. IP flow verify
- **B.** B. Next hop
- **C.** C. Connection troubleshoot ✅
- **D.** D. Packet capture

**Correct answer:** C

**Explanation:**

**Connection troubleshoot** runs an **active end-to-end probe** from the chosen source to a destination (FQDN/IP and port), then reports **Reachable/Unreachable**, resolved IP, **hops**, and likely cause (for example, **NSG rule**, **UDR**, or **blocked port**). It’s ideal for intermittent app timeouts because you can run the test during an incident and see whether the platform or your configuration is at fault.

Unlike per-flow evaluations, it gives a **path-level view** across VNets and NVAs and highlights where along the route connectivity breaks, accelerating MTTR without building a persistent monitor.

Why others are incorrect

A. **IP flow verify** checks policy at the VM NIC for a fixed tuple; it doesn’t trace **hops** or test DNS/FQDN resolution.

B. **Next hop** only shows routing for a destination IP; it won’t validate ports, NSGs, or end-to-end reachability.

D. **Packet capture** is low-level and heavier to operate; it lacks **root-cause hints** and hop topology for quick triage.

---

### Question 18

Fabrikam requires **east-west traffic inspection**. A firewall NVA lives in the hub; spokes must **hairpin** through it using **UDRs**. Traffic must pass **from a spoke, via hub NVA, back to the hub or another spoke**.

You must allow the **NVA to forward** packets between peered VNets so the UDR hairpin works. Which peering setting should you enable?

**Options:**

- **A.** A. Use remote gateway
- **B.** B. Allow forwarded traffic ✅
- **C.** C. Allow virtual network access
- **D.** D. Enable BGP on the NVA

**Correct answer:** B

**Explanation:**

**Choice B is correct.** When traffic is **forwarded by an intermediate device** (such as an NVA) across a peering link, peering denies that traffic by default. Enabling **Allow forwarded traffic** on the relevant peering(s) permits packets whose source is **not** the peered VNet itself (i.e., forwarded flows) so that **UDR-based service chaining** through the firewall succeeds.

This setting complements your **UDRs** and NSGs: the UDR sends traffic to the NVA; **Allow forwarded traffic** lets that forwarded flow traverse peering; NSGs then enforce policy. Without it, inspection hairpins fail even though the routes point to the NVA.

Why others are incorrect

A. **Use remote gateway** is for sharing a VPN/ER gateway; it doesn’t allow NVA-forwarded traffic.

C. **Allow virtual network access** permits direct VNet-to-VNet flows only; it blocks **forwarded** flows by default.

D. **BGP** on an NVA isn’t a peering property and doesn’t change the peering’s forwarded-traffic behavior.

---

### Question 22

You have an Azure subscription that contains the resources in the following table.

VM1 and VM2 are deployed from the same template and host line-of-business applications.

You configure the network security group (NSG) shown in the following exhibit.

You need to prevent users of VM1 and VM2 from accessing websites on the Internet over TCP port 80.

What should you do?

**Options:**

- **A.** A) Change the DenyWebSites outbound security rule
- **B.** B) Change the Port_80 inbound security rule
- **C.** C)Associate the NSG to Subnet1 ✅
- **D.** D) Disassociate the NSG from a network interface
- **E.** E) Associate the NSG to VNet1
- **F.** F) Create an Application Security Group (ASG) and add VM1/VM2

**Correct answer:** C

**Explanation:**

What you should do

Associate the **NSG** to **Subnet1**.

Why this solves it

- The exhibit shows an **outbound deny rule** (e.g., DenyWebSites, TCP **80**) in the NSG, but the **NSG isn’t associated** to anything (“0 subnets, 0 network interfaces”).

- **NSG rules only take effect when the NSG is associated** to a **subnet** or to **NICs**.

- VM1 and VM2 live in **Subnet1**. Associating the NSG to **Subnet1** applies the **outbound TCP/80 deny** to **both VMs** immediately, preventing users on those VMs from browsing websites over port 80.

Why the other options are wrong

- Change the DenyWebSites outbound rule

Adjusting the rule won’t matter if the NSG remains **unassociated**. Until it’s bound to Subnet1 or the NICs, **no rule is enforced**.

- Change the Port_80 inbound rule

The requirement is to block **outbound** web access from the VMs to the Internet. **Inbound** rules control traffic coming **into** the VMs, which doesn’t address users browsing out to websites.

- Disassociate the NSG from a network interface

The NSG is already associated to **0** NICs, so there’s nothing to remove. This action doesn’t apply the needed outbound deny to VM1/VM2.

- Associate the NSG to VNet1

NSGs **cannot be associated at the VNet level**—only to **subnets** or **NICs**. This isn’t a valid or supported attachment point, so it won’t enforce any rules.

- Create an Application Security Group (ASG) and add VM1/VM2

An **ASG** is a **targeting object** used **inside NSG rules**; by itself it **does nothing**. You’d still need an **NSG associated** to Subnet1 or NICs with a rule referencing that ASG. Since the NSG isn’t associated, adding an ASG won’t block outbound TCP/80.

---

### Question 23

You have an Azure subscription that contains the virtual networks shown in the following table.

The subscription contains the virtual machines shown in the following table.

All the virtual machines have only private IP addresses.

You deploy an Azure Bastion host named Bastion1 to VNet1.

To which virtual machines can you connect through Bastion1?

**Options:**

- **A.** A. VM1 only
- **B.** B. VM1 and VM2 only ✅
- **C.** C. VM1 and VM3 only
- **D.** D. VM1, VM2, and VM3

**Correct answer:** B

**Explanation:**

Choice B is correct. Azure Bastion provides RDP/SSH over TLS to VMs **in the same virtual network** as the Bastion host and to VMs in **directly peered VNets**. Bastion1 is in **VNet1**, so it can reach **VM1 (VNet1)** and **VM2 (VNet2)** because **VNet1 ↔ VNet2** are peered. **VM3 (VNet3)** is not reachable because there is **no direct peering between VNet1 and VNet3**; VNet peering is **not transitive** (VNet1↔VNet2 and VNet2↔VNet3 does not imply VNet1↔VNet3).

Why the others are incorrect

A: Too restrictive—Bastion can also reach VMs in **directly peered** VNets (VM2).

C: VM3 sits in a VNet **not directly peered** with VNet1, so it’s not accessible via Bastion1.

D: Includes VM3, which isn’t accessible due to **non-transitive peering**.

---

### Question 26

You have an Azure subscription that contains a virtual network named VNET1 in the East US 2 region. Network interfaces named VM1-NI and VM2-NI are connected to VNET1.

You successfully deploy the following Azure Resource Manager template.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“If an Azure datacenter becomes unavailable, VM1 or VM2 will be available.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes is correct.** In the ARM template, **VM1** has “zones”: “1” and **VM2** has “zones”: “2”, placing the VMs in **different availability zones within the same region**. Availability Zones are physically separate datacenters with independent power, cooling, and networking. By distributing VMs across zones, you gain resilience to **datacenter-level failures**: if Zone 1 experiences an outage, the VM in Zone 2 remains available. This zoning strategy is a core high-availability pattern in Azure, ensuring application continuity without requiring cross-region deployment.

---

### Question 27

You have an Azure subscription that contains the resources shown in the following table.

NSG1 is configured as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“VM2 can access VM1 by using the HTTPS protocol.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes is correct.** The NSG rule **HTTPS_VM1_Deny** has priority 110 and denies **TCP 443 (HTTPS)** traffic **only from the Internet** to VM1. Since both **VM1 and VM2** are located within the same virtual network (**VNet1**), communication between them does not rely on this inbound Internet rule.

By default, Azure allows **intra-VNet traffic** — meaning all resources inside the same virtual network can communicate freely with one another unless explicitly blocked by a **higher-priority NSG rule**. Because no rule denies traffic within the virtual network, **VM2 can successfully connect to VM1 using HTTPS (TCP 443)**.

This design supports secure segmentation: inbound rules apply to traffic arriving from outside sources (like the Internet or other VNets), while **virtual-network-scoped traffic** remains unrestricted unless explicitly denied.

---

### Question 28

**Note:** This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.

You have an Azure subscription that contains the virtual machines shown in the following table.

You deploy a load balancer that has the following configurations:

- Name: LB1

- Type: Internal

- SKU: Standard

- Virtual network: VNET1

You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.

**Solution**: You disassociate the public IP address from the network interface of VM2.

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

A **Standard SKU Load Balancer** can only associate backend pool members that satisfy strict compatibility and networking requirements. Specifically:

- All virtual machines must be in the **same region and virtual network** as the load balancer.

- Each VM must have either **no public IP** or a **Standard SKU public IP**.

- **Basic SKU public IPs** are **not supported** with Standard SKU load balancers because they operate on different control planes and isolation models.

In this case, **VM2** had a **Basic SKU public IP**, which prevented it from being added to the backend pool of **LB1 (Standard SKU)**. By **disassociating the Basic IP** from VM2’s network interface, VM2 now has no public IP and becomes compliant with the Standard Load Balancer’s backend pool requirements.

This change aligns both **VM1** (no public IP) and **VM2** (no public IP after disassociation) with the Standard SKU rules, allowing both to be added to the **backend pool of LB1**.

Why No is incorrect

Leaving a Basic SKU IP attached would continue to block the VM from joining the backend pool. The disassociation step is exactly what resolves this incompatibility.

---

### Question 29

You have an Azure subscription that contains the resources in the following table.

You install the Web Server (IIS) server role on VM1 and VM2, and then add VM1 and VM2 to LB1.

LB1 is configured as shown below.

Rule1 is configured as shown below.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“If you delete Rule1, LB1 will balance all the requests between VM1 and VM2 for all the ports.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

If **Rule1** is deleted, **LB1** will not automatically begin balancing traffic across all ports. Azure Load Balancers, whether **Basic** or **Standard**, require at least one **load-balancing rule** to define which frontend port and protocol should be mapped to backend instances. Without a rule, there’s no instruction for the load balancer to distribute inbound flows, so traffic to any port will simply not be processed or forwarded to **VM1** and **VM2**.

In the given configuration, **Rule1** explicitly defined which traffic (for example, TCP port 80 or 443) should be distributed between backend pool members. Once this rule is deleted, **LB1** retains its backend pool configuration but has no active rule to map incoming requests—effectively making it idle.

Additionally, if all health probes fail, **no new traffic flows** will be sent to backend pool members, and existing TCP connections will be dropped. This is a safeguard to prevent directing traffic to unhealthy or unmonitored targets.

Key point:

Deleting a rule removes the load balancer’s ability to direct traffic; it doesn’t make it distribute traffic on all ports—that behavior must be explicitly defined.

---

### Question 30

You have an Azure subscription that contains a **virtual network** named **VNet1**.

VNet1 has an address space of **10.0.0.0/16** and contains the following subnets:

**VM1** in **Subnet1** functions as a **router** (network virtual appliance) for controlling inbound and outbound traffic.

You create a **route table** named **RT1** and associate it with the **GatewaySubnet**.

You need to ensure that **all inbound traffic from the VPN gateway** to resources in **VNet1** is **routed through VM1**.

Question:

When configuring the custom route in **RT1**, what should you use for the **address prefix**?

**Options:**

- **A.** A. 10.0.1.0/24
- **B.** B. 10.0.254.0/24
- **C.** C. 10.0.0.0/16 ✅
- **D.** D. 10.0.2.0/24
- **E.** E. 0.0.0.0/0
- **F.** F. 10.0.3.0/24

**Correct answer:** C

**Explanation:**

Choice C is correct. By setting the **address prefix** to **10.0.0.0/16**, you cover the **entire address space** of **VNet1**, including all subnets (Subnet0, Subnet1, Subnet2, and GatewaySubnet). This configuration ensures that **all traffic coming from the VPN gateway** and destined for any subnet within VNet1 will first be routed through **VM1** (the virtual appliance in Subnet1).

In the route’s properties, you would also configure:

- **Next hop type:** Virtual appliance

- **Next hop IP address:** VM1’s private IP address in Subnet1

This ensures that VM1 handles packet inspection, routing, or security enforcement before traffic reaches other subnets.

Why the others are incorrect

A: 10.0.1.0/24 applies only to Subnet1, not the full VNet.

B: 10.0.254.0/24 covers only the GatewaySubnet, so no traffic to other subnets would be redirected.

D/F: These only cover specific subnets, not the entire VNet.

E: 0.0.0.0/0 redirects all traffic (including Internet-bound), which is broader than required.

---

### Question 31

Contoso runs a two-VM app (web + DB) in Australia East with replication to Australia Southeast using Azure Site Recovery.
Problems / issues
Source region is healthy; business wants near-zero data loss with a controlled cutover.
Need a brief outage to finalize sync and switch over.
App requires startup order (DB before web) and simple orchestration.
Networking already mapped to target VNet/subnets.
You need to execute the cutover to the secondary region under these conditions. Which option should you choose?

**Options:**

- **A.** A. Test failover
- **B.** B. Unplanned failover
- **C.** C. Planned failover ✅
- **D.** D. Commit

**Correct answer:** C

**Explanation:**

Planned failover is designed for controlled cutovers when the source is still available. It shuts down the source VMs, performs a final replication, and brings up the target VMs—minimizing or eliminating data loss at the moment of switch. For multi-VM apps, running the operation via a recovery plan preserves boot order and optional pre/post steps so the DB comes online before the web tier. After verifying the app in the secondary, you Commit to finalize the move and keep replication metadata tidy.
Why others are incorrect
A. Test failover is an isolated drill and doesn’t switch production traffic.
B. Unplanned failover is for outages when the source isn’t available (higher potential data loss).
D. Commit finalizes an already-completed failover; it doesn’t perform the switch.

---

### Question 32

You have an Azure subscription that includes the following resources:
VNet1, a virtual network
Subnet1, a subnet in VNet1
WebApp1, an App Service web app
NSG1, a network security group
You create an application security group named ASG1.
Which resource can use ASG1?

**Options:**

- **A.** A. NSG1 ✅
- **B.** B. Subnet1
- **C.** C. VNet1
- **D.** D. WebApp1

**Correct answer:** A

**Explanation:**

Application security groups are used inside network security group rules as the source or destination for traffic filtering. Microsoft’s documentation says network interfaces that are members of an application security group apply the network security group rules that specify that ASG as source or destination.
That means NSG1 is the resource that can use ASG1. A subnet or virtual network does not “use” an ASG directly, and App Service web apps are not the resource type referenced here for ASG-based rule targeting. ASGs are primarily about grouping VM network interfaces so NSG rules can target them more easily.
Why the other options are incorrect:
• B. Subnet1 — A subnet can have an NSG associated to it, but the subnet does not directly use an application security group. The ASG is referenced inside the NSG’s security rules instead.
• C. VNet1 — A virtual network is not the resource that consumes an ASG. Microsoft describes ASGs as a way to group network interfaces and then use those groups in NSG rules.
• D. WebApp1 — App Service web apps are not what ASGs are designed for in this context. Microsoft’s ASG documentation centers on network interfaces and NSG rule definitions, not direct App Service attachment.

---

### Question 35

You have an Azure subscription that contains a virtual machine named VM1 and a storage account named storage1.
You need to ensure that VM1 can access storage1 by using the Azure backbone.
What should you configure?

**Options:**

- **A.** A. a routing table
- **B.** B. a service endpoint ✅
- **C.** C. a VPN gateway
- **D.** D. Peering

**Correct answer:** B

**Explanation:**

A service endpoint is the Azure feature designed for this requirement. Microsoft says Azure virtual network service endpoints provide secure, direct connectivity to Azure services over the Azure backbone network. For Azure Storage, enabling the Microsoft.Storage service endpoint on the VM’s subnet lets traffic from that subnet reach the storage account over Microsoft’s backbone rather than the public internet.
This is different from other networking features in the answer set. A routing table does not by itself create Azure Storage service integration, a VPN gateway is for VPN connectivity scenarios, and peering connects virtual networks to each other rather than enabling optimized access from a subnet to Azure Storage.
Why the other options are incorrect:
• A. a routing table — A route table controls how traffic is routed, but it does not enable the Azure Storage service integration needed here. The requirement is specifically about reaching Azure Storage over the Azure backbone by using the supported Azure service-access mechanism, which is a service endpoint.
• C. a VPN gateway — A VPN gateway is used for site-to-site, point-to-site, or VNet-to-VNet VPN connectivity. It is not the feature used to optimize subnet-to-Azure-Storage access over the Azure backbone for this scenario.
• D. Peering — VNet peering connects virtual networks to each other over the Azure backbone, but it does not by itself configure access from a VM subnet to Azure Storage as a PaaS service. For Azure Storage, the relevant feature in this answer set is the service endpoint.

---

### Question 37

Contoso hosts an internal line-of-business web app that must be private-only over VPN/ExpressRoute. Security policy requires no public internet exposure. Operations wants simple private DNS for corporate users, with no SKU change or platform move.
You need to expose the app privately and eliminate public exposure while keeping name resolution straightforward for corporate users. Which option should you choose?

**Options:**

- **A.** A. VNet Integration
- **B.** B. Access restrictions
- **C.** C. Private Endpoint ✅
- **D.** D. App Service Environment (v3)

**Correct answer:** C

**Explanation:**

Private Endpoint gives the app a private IP in your VNet via Private Link so corporate clients reach it over VPN/ER without traversing the public internet. With a linked Private DNS zone for the service FQDN, clients automatically resolve the app to its private address, keeping user experience and operations simple.
Compared to IP allow lists, this model removes reliance on a public endpoint path and aligns with “private-only” policy while preserving your existing App Service plan and deployment flow.
Why others are incorrect
A. VNet Integration governs outbound from the app to the VNet; it doesn’t provide private inbound access.
B. Access restrictions filter who can reach the public endpoint; they don’t truly remove internet exposure.
D. ASE v3 also isolates networking but is a heavier platform shift not required here.

---

### Question 38

Fabrikam’s web app must reach Storage and SQL over private endpoints and an on-prem API via VPN—no public egress. Security also needs a static outbound IP for third-party allow-listing. The team wants to keep the current plan and avoid code changes.
You need to route all outbound traffic from the app into a VNet so that UDRs, private endpoints, and VPN routes are honored, and you can present a predictable egress IP. Which option should you choose?

**Options:**

- **A.** A. VNet Integration (Route All) ✅
- **B.** B. Private Endpoint
- **C.** C. Service endpoints
- **D.** D. Hybrid Connections

**Correct answer:** A

**Explanation:**

VNet Integration (Route All) sends the app’s outbound traffic into a selected subnet so UDRs, private endpoints, and VPN/ExpressRoute paths are used. This enables private service-to-service flows and lets the subnet’s egress controls (for example, a NAT Gateway) provide a static public IP where needed for external APIs.
By centralizing routing in the VNet, you avoid public egress from the multi-tenant App Service stamp and keep the App Service plan unchanged.
Why others are incorrect
B. A Private Endpoint secures inbound access to the app; it doesn’t control outbound routing or provide static egress.
C. Service endpoints don’t apply from App Service; they secure traffic from subnets to PaaS, not from App Service’s plane.
D. Hybrid Connections relay to specific TCP endpoints; they don’t give full VNet routing or predictable egress IP.

---

### Question 41

Contoso needs analytics VMs in a subnet to access a Storage account over the Microsoft backbone while blocking access from the public internet. The security team refuses Private Link for now and wants to keep DNS unchanged. They also want the Storage account locked to only that subnet.
You need a VNet-native feature that keeps traffic on the Azure backbone and lets you allow-list a subnet at the Storage firewall without introducing Private Link. Which option should you choose?

**Options:**

- **A.** A. Private endpoint
- **B.** B. VNet peering
- **C.** C. Service endpoints ✅
- **D.** D. NAT Gateway

**Correct answer:** C

**Explanation:**

Service endpoints extend the subnet’s identity to supported PaaS services so traffic from that subnet to Microsoft.Storage uses the Azure backbone instead of the public internet. After enabling the endpoint on the subnet, you switch the Storage account to Selected networks and add a virtual network rule for that subnet—effectively limiting access to that subnet while leaving DNS unchanged.
This approach is lightweight, requires no per-resource private IPs, and is well-suited when you need backbone paths and subnet-scoped allow-lists but can’t adopt Private Link yet.
Why others are incorrect
A. Private endpoint would satisfy backbone/private access, but it conflicts with the “no Private Link” constraint and changes name resolution.
B. VNet peering connects VNets; it doesn’t secure PaaS access from a subnet.
D. NAT Gateway gives static egress; it doesn’t implement Storage-side allow-lists or backbone enforcement to PaaS.

---

### Question 42

Fabrikam’s data-science subnet can currently reach any Storage account via service endpoints. Compliance now mandates allowing only two specific Storage accounts and blocking all others—without deploying Private Link.
You need a subnet-level control that filters Storage traffic over service endpoints so only named accounts are reachable. Which option should you choose?

**Options:**

- **A.** A. Service endpoint policies ✅
- **B.** B. Trusted Microsoft services
- **C.** C. Private DNS zone
- **D.** D. IP network rules on the VM NICs

**Correct answer:** A

**Explanation:**

Service endpoint policies attach to a subnet and restrict which Storage account resource IDs can be accessed over the service endpoint. You list the approved accounts; connections to any other Storage account are denied—even though the service endpoint is enabled. This is the precise control needed to stop data exfiltration to unapproved accounts while retaining the simplicity of service endpoints.
The policy complements (not replaces) Storage firewalls: keep the accounts on Selected networks with your VNet rules, and the policy prevents that subnet from reaching any unapproved Storage accounts elsewhere.
Why others are incorrect
B. Trusted Microsoft services is a Storage-side exception; it doesn’t implement per-account allow-lists from your subnet.
C. Private DNS controls name resolution, not data-plane filtering to Storage accounts.
D. NIC-level IP rules aren’t how Azure enforces PaaS access; the restriction must be subnet ? service aware.

---

### Question 44

Fabrikam operates dozens of VNets, gateways, app gateways, and load balancers across two regions. Operations wants a single view of health, alerts, and key metrics across all network resources with no extra configuration, so they can quickly identify hotspots and drill down.
You need an aggregated network health view with drill-downs built on Azure Monitor workbooks, without enabling agents first. Which option should you choose?

**Options:**

- **A.** A. Storage account insights
- **B.** B. VM insights
- **C.** C. Network insights ✅
- **D.** D. Connection monitor

**Correct answer:** C

**Explanation:**

Choice C is correct. Network insights surfaces an at-a-glance health and performance view across Azure network resources (VNets, gateways, LB, App GW, etc.) and lets you drill into metrics and affected resources—delivered as an Insights workbook experience and available without additional configuration. It’s designed to triage issues quickly and then pivot to the specific resource’s blade for deeper investigation.
From there, operators interpret patterns such as gateway utilization, load balancer data path health, and traffic anomalies across environments, accelerating detection of region- or service-level trends that wouldn’t be obvious from individual resource charts.
Why others are incorrect
A. Storage account insights targets Storage performance/capacity (E2E/server latency, throttling) rather than network estate health.
B. VM insights is for guest performance/process visibility on compute, not network estate roll-ups.
D. Connection monitor runs targeted tests; it’s not an aggregated, all-resource health view.

---

### Question 47

Fabrikam failed over to Australia Southeast during an outage. Australia East is healthy again, and they want to return production there with a controlled operation.
Problems / issues
Current production is running in the secondary region.
Need to reverse replication to the primary and switch back with minimal downtime.
Prefer a sequenced operation (app groups) using the same orchestration surface.
Keep NIC/subnet mappings consistent with the original design.
You need to start the process that enables a controlled return to the primary region. Which option should you choose first?

**Options:**

- **A.** A. Commit
- **B.** B. Planned failover (to primary)
- **C.** C. Stop replication
- **D.** D. Reprotect ✅

**Correct answer:** D

**Explanation:**

Reprotect reverses the replication direction so the current secondary becomes the source, and the original primary becomes the target. After the delta is synchronized, you can perform a planned failover back to primary (for a controlled cutback) and then Commit once validation passes. Using a recovery plan for both directions ensures the same start-up order and any automation you relied on during the initial failover.
Why others are incorrect
A. Commit finalizes a completed failover; it doesn’t prepare replication for the return trip.
B. A planned failover back to primary should follow Reprotect so data is synchronized first.
C. Stop replication removes protection and complicates the path back.

---

### Question 48

Contoso has a hub/spoke topology. App VMs in Spoke-App must reach a Storage account in the same region over the Microsoft backbone, with no public internet access. DNS must remain unchanged. Private Link isn’t permitted right now.
Requirements
Allow only the Spoke-App subnet to reach the Storage account
Keep traffic on the Azure backbone (no internet egress)
No Private Link; no DNS changes
On the storage account, which network access mode should you use to allow only the Spoke-App subnet while keeping traffic on the backbone?

**Options:**

- **A.** A. All networks
- **B.** B. Selected networks ✅
- **C.** C. Public network access: Disabled
- **D.** D. Allow trusted Microsoft services

**Correct answer:** B

**Explanation:**

Selected networks lets you lock the account to specific VNet/subnets via virtual network rules. When you enable a service endpoint from the subnet to Microsoft.Storage and add that subnet as an allow-listed rule, flows use the Azure backbone rather than the public internet—and you don’t change DNS. The public endpoint remains filtered so only your approved subnet (and any defined public IP ranges) can reach the account.
Why others are incorrect
A. All networks exposes the public endpoint broadly.
C. Public network access: Disabled enforces Private Endpoint only, which is disallowed here.
D. Trusted Microsoft services is a first-party bypass; it isn’t a VNet/subnet allow-list.

---

### Question 49

Fabrikam is rolling out a data lake that must not be reachable over the public internet. Clients will connect through private endpoints from approved VNets. They want a single setting on the storage account to enforce private-only access.
Requirements
Enforce private-only data-plane access
Block all public endpoint usage
Keep using Private Endpoint and private DNS from approved VNets
Which single storage setting enforces private-only access and blocks the public endpoint entirely?

**Options:**

- **A.** A. Selected networks
- **B.** B. IP network rules (office IPs)
- **C.** C. Service endpoints
- **D.** D. Public network access: Disabled ✅

**Correct answer:** D

**Explanation:**

Public network access: Disabled removes the storage account’s public endpoint from use so all data-plane access must go through Private Endpoint. This guarantees private-only connectivity regardless of firewall/IP rules and aligns with strict “no internet exposure” requirements.
Why others are incorrect
A. Selected networks still leaves the public endpoint active—just filtered.
B. IP rules control who can hit the public endpoint; they don’t remove it.
C. Service endpoints keep traffic on the backbone but still use the public endpoint path.

---

### Question 51

You have an Azure subscription that contains a virtual network named VNet1. VNet1 contains virtual machines that have Remote Desktop enabled. Several users plan to work remotely and connect to the virtual machines from a home office.
You need to configure connectivity to the virtual machines to support a Point-to-Site (P2S) VPN connection for each user.
Which three actions should you perform in sequence?
Actions pool:
Create a local network gateway.
Add a public IP address to each virtual machine.
Create a new subnet in VNet1.
Add an IP address pool.
Deploy a load balancer to VNet1.
Create a VPN gateway.

**Options:**

- **A.** A. Create a VPN gateway ? Add an IP address pool ? Create a new subnet in VNet1
- **B.** B. Create a local network gateway ? Create a VPN gateway ? Add an IP address pool
- **C.** C. Create a new subnet in VNet1 ? Add an IP address pool ? Create a VPN gateway
- **D.** D. Create a new subnet in VNet1 ? Create a VPN gateway ? Add an IP address pool ✅
- **E.** E. Add a public IP address to each virtual machine ? Create a VPN gateway ? Add an IP address pool
- **F.** F. Create a new subnet in VNet1 ? Deploy a load balancer to VNet1 ? Create a VPN gateway

**Correct answer:** D

**Explanation:**

For P2S, you must first create the GatewaySubnet inside the VNet. (“Create a new subnet in VNet1.”)
Then deploy the VPN gateway into that GatewaySubnet. (“Create a VPN gateway.”)
Finally, configure P2S settings on the gateway, including the client address pool from which VPN clients receive IPs. (“Add an IP address pool.”)
Why the others are incorrect
A/C: Wrong order—GatewaySubnet must exist before the VPN gateway; the client address pool is configured on the gateway (after it exists).
B: Local network gateway is for site-to-site (on-prem representations), not required for P2S.
E: P2S does not require per-VM public IPs; users connect over the VPN to private addresses.
F: A load balancer is irrelevant to enabling P2S access.

---

### Question 52

You plan to use Azure Network Watcher to perform the following task:
Identify a security rule that prevents a network packet from reaching an Azure virtual machine (VM).
Which feature should you use for this task?

**Options:**

- **A.** A. Next hop
- **B.** B. IP flow verify ✅
- **C.** C. Packet capture
- **D.** D. Traffic Analytics
- **E.** E. Connection troubleshoot
- **F.** F. Network performance monitor

**Correct answer:** B

**Explanation:**

Choice B is correct. The IP flow verify feature in Azure Network Watcher is specifically designed to test whether traffic from or to a virtual machine is allowed or denied based on the effective network security group (NSG) rules applied to the VM’s network interface. It simulates the sending of a packet and determines:
Whether the packet is allowed or denied, and
Which NSG rule (name, priority, and direction) is responsible for the decision.
This tool is particularly useful for diagnosing connectivity problems and identifying which security rule in an NSG or application security group is preventing or allowing a connection.
Why the others are incorrect
A: Next hop identifies the route that traffic takes (e.g., Internet, virtual network, virtual appliance) but does not analyze NSG rules.
C: Packet capture records network packets for analysis but does not reveal which NSG rule affects them.
D: Traffic Analytics provides aggregated insights and trends using NSG flow logs, not per-packet rule evaluation.
E: Connection troubleshoot checks connectivity between two endpoints, but it doesn’t pinpoint the specific NSG rule blocking traffic.
F: Network performance monitor measures latency and packet loss between network nodes, not NSG filtering decisions.

---

### Question 2

You have an Azure subscription that contains the following resources:
A resource group named RG1 in the West US region
A resource group named RG2 in the Central US region
A virtual network named VNet1 that is deployed to the West US region in RG1
A virtual network named VNet2 that is deployed to the Central US region in RG1
A virtual network named VNet3 that is deployed to the West US region in RG2
You need to deploy a virtual machine named VM1 to RG1 in the West US region.
To which virtual network or virtual networks can you connect VM1?

**Options:**

- **A.** A. VNet1 only
- **B.** B. VNet1 or VNet2 only
- **C.** C. VNet1 or VNet3 only ✅
- **D.** D. VNet1, VNet2 or VNet3

**Correct answer:** C

**Explanation:**

For an Azure virtual machine to connect to a virtual network, the VM and the virtual network must be in the same region. Microsoft’s virtual network documentation states that any Azure resource connected to a virtual network must be in the same region as that virtual network.
The resource group does not have to match. Microsoft’s networking documentation says a connected Azure resource can be in the same resource group or a different resource group from the virtual network, and the NIC guidance also says a NIC can exist in the same or a different resource group from both the VM and the virtual network it connects to. Since VM1 will be in West US, it can connect to VNet1 and VNet3, both of which are also in West US. It cannot connect to VNet2 because VNet2 is in Central US.
Why the other options are incorrect:
• A. VNet1 only — This is too restrictive. VNet1 is valid because it is in West US, but VNet3 is also valid because it is also in West US. The fact that VNet3 is in a different resource group does not block the connection.
• B. VNet1 or VNet2 only — VNet1 is valid, but VNet2 is not because it is deployed in Central US while VM1 is being deployed in West US. Azure requires the connected resource and the virtual network to be in the same region.
• D. VNet1, VNet2 or VNet3 — This includes VNet2, which makes it incorrect. VNet2 is in the wrong region for VM1, even though it is in the same resource group as the VM. Region compatibility matters here, not just resource group placement.

---

### Question 4

Admins need to RDP/SSH to VMs without public IPs. Security wants a platform service that terminates in the Azure portal and leverages TLS over the control plane instead of opening inbound NSG rules. You’ll deploy it to the production VNet and keep existing VM configs unchanged.
Which option should you choose?

**Options:**

- **A.** A. Deploy Azure Bastion ✅
- **B.** B. Create a VPN gateway
- **C.** C. Enable Just-In-Time (JIT) on the VMs
- **D.** D. Assign a public IP to each VM

**Correct answer:** A

**Explanation:**

Choice A is correct. Azure Bastion provides agentless, browser-based RDP/SSH to VMs without public IPs. It’s deployed per VNet and uses a managed PaaS endpoint reachable through the Azure portal, so you don’t expose RDP/SSH on the Internet or change VM NICs. Bastion also avoids per-VM configuration drift and keeps connections inside Azure’s control plane, aligning with least-exposure principles.
Why the other options are incorrect
B: A VPN gateway works but requires client configuration, routes, and ongoing gateway ops; it’s not the simplest way to give admins just-in-time portal access.
C: JIT limits exposure windows but still assumes public endpoints or inbound rules; it doesn’t replace a private access path.
D: Adding public IPs increases attack surface and contradicts the requirement to avoid inbound exposure.

---

### Question 6

You’re creating Bastion in a production VNet. The deployment fails with a subnet error. You want the supported subnet name and minimum size so the service will provision cleanly.
“Azure Bastion requires a subnet named __________ with a minimum prefix of __________.”

**Options:**

- **A.** A. GatewaySubnet, /27
- **B.** B. AzureBastionSubnet, /26 ✅
- **C.** C. AzureFirewallSubnet, /24
- **D.** D. BastionSubnet, /27

**Correct answer:** B

**Explanation:**

Choice B is correct. Bastion must be deployed into a subnet named AzureBastionSubnet with a /26 or larger address space. The dedicated name lets the platform apply the right policies and scale units. Using the correct name + size prevents deployment errors and ensures capacity for concurrent sessions and future scaling.
Why the other options are incorrect
A: GatewaySubnet is reserved for VPN/ExpressRoute gateways.
C: AzureFirewallSubnet is for Azure Firewall and the size is unrelated to Bastion requirements.
D: The required name is AzureBastionSubnet (exact), not “BastionSubnet”, and /27 is too small.

---

### Question 7

A VMSS behind a Standard Load Balancer makes heavy outbound calls to partner APIs. During spikes, outbound connections intermittently fail with timeouts. You suspect SNAT port exhaustion. You need a fix that scales outbound reliably without rewriting apps or redesigning the LB rules.
Requirements
• Scale outbound SNAT capacity
• Keep current LB config for inbound
• Minimal app changes
Which option should you choose?

**Options:**

- **A.** A. Attach a NAT Gateway to the subnet ✅
- **B.** B. Add more frontend IPs to the LB
- **C.** C. Enable HA Ports on the LB rule
- **D.** D. Switch to Basic SKU

**Correct answer:** A

**Explanation:**

Choice A is correct. NAT Gateway provides dedicated, scalable SNAT with large port pools and optional public IP prefix. By attaching it to the subnet, outbound from all instances uses the gateway’s ports/addresses, eliminating SNAT exhaustion from the Standard LB’s shared outbound flow. Inbound load balancing can remain unchanged; you simply separate outbound from the LB for better scalability.
Why the other options are incorrect
B: More frontend IPs on the LB may add some SNAT ports in certain patterns, but it remains LB-bound and brittle.
C: HA Ports affects inbound all-ports rules; it doesn’t expand outbound SNAT capacity.
D: Basic SKU reduces features/security and doesn’t solve SNAT scaling.

---

### Question 12

A Bicep file must add a new subnet to an existing virtual network. The VNet already exists in production and must not be recreated. You also want the subnet declared as a child resource of that VNet so name scoping is concise and validation is clear.
Requirements
• Treat the VNet as existing
• Add a new subnet as a child resource
• Keep the declaration minimal and safe
Which option should you choose?

**Options:**

- **A.** A. parent
- **B.** B. scope
- **C.** C. symbolicName
- **D.** D. existing ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. In Bicep, mark the VNet as existing so the compiler knows not to create or modify the VNet resource itself. Then declare the subnet as a child under that existing parent. This pattern guarantees you attach to what’s already there and only create the subnet:
param vnetName string
resource vnet ‘Microsoft.Network/virtualNetworks@2023-09-01‘ existing = {
  name: vnetName
}
resource snet ‘Microsoft.Network/virtualNetworks/subnets@2023-09-01‘ = {
  name: ‘${vnet.name}/app-subnet‘
  properties: {
    addressPrefix: ‘10.10.2.0/24‘
  }
}
Using existing is the safest way to augment live environments: deployments remain idempotent, diffs are predictable, and you avoid accidental VNet replacement. If you later need to pass the VNet to modules, you can also pass the existing resource symbol to keep scope and lineage intact.
Why the other options are incorrect
A: parent is used with a resource declaration to set hierarchy, but you still need existing on the VNet to prevent creation. parent alone won’t treat the VNet as pre-existing.
B: scope targets where a module or extension resource is deployed; it doesn’t mark the VNet as existing.
C: symbolicName (the local name like vnet) is just an identifier; it doesn’t change deployment behavior.

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

### Question 24

HTTPS traffic intermittently fails through an **Internet-facing Standard Load Balancer**. The backend **terminates TLS** and doesn’t serve plain HTTP. Health probes are **unhealthy**.

Which option should you choose?

**Options:**

- **A.** A. Open 80 on backends
- **B.** B. Upgrade to Gateway LB
- **C.** C. Use a TCP probe on 443 ✅
- **D.** D. Enable session persistence

**Correct answer:** C

**Explanation:**

Choice C is correct. The health probe must reflect **what the backend actually serves**. Because the service only answers **TLS on 443**, an **HTTP probe to 80** will always fail. Switching the probe to **TCP 443** (or HTTPS 443 where supported) lets the LB mark instances healthy and forward traffic correctly. **Health probe accuracy** is the first thing to validate when flows look fine but probes fail.

Why the other options are incorrect

A: Opening **80** changes your app surface and still doesn’t test the real TLS path; it’s unnecessary.

B: **Gateway LB** is for chaining NVAs; it doesn’t fix a **probe mismatch**.

D: **Session persistence** doesn’t address probe health, so the pool remains down.

---

### Question 28

You’re standardizing inbound endpoints. Production requires **static addresses**, **zone fault tolerance**, and **NSG/Standard LB compatibility**. Nonprod can be cheaper and tolerate IP churn.

**Environment**

****

Which option should you choose for **Prod**?

**Options:**

- **A.** A. Basic dynamic
- **B.** B. Basic static
- **C.** C. Standard dynamic
- **D.** D. Standard static ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. **Standard static** public IPs support **static allocation**, **availability zones/zone-redundancy**, and integrate with **secure, closed-by-default** networking (Standard LB, Azure Firewall, NSGs). They’re the recommended SKU for production due to **security defaults**, **zone options**, and **predictable addressing**.

Why the other options are incorrect

A: **Basic dynamic** lacks security defaults, can change IP, and has limited zone support—poor fit for prod.

B: **Basic static** is legacy, no secure defaults, limited scenarios; not ideal for modern prod patterns.

C: **Standard dynamic** uses Standard SKU but still **changes IP**—violates the static requirement.

---

### Question 37

Fabrikam wants to reserve a contiguous block of public IPv4 addresses now for future load balancers and NAT gateways. They don’t want to assign the IPs yet, but they need predictable whitelisting at partners and a single range they control.
Requirements
• Reserve contiguous IPs in advance
• Assign to resources later
• Keep addresses within one range
Which option should you choose?

**Options:**

- **A.** A. Public IP prefix ✅
- **B.** B. Public IP
- **C.** C. Private endpoint
- **D.** D. NAT gateway

**Correct answer:** A

**Explanation:**

Choice A is correct. A Public IP prefix allocates a contiguous block of public IPs in your subscription. You can then create public IPs from that prefix over time and attach them to load balancers, gateways, or NICs. This gives predictable ranges for partner allowlists and separates reservation from assignment, exactly matching the requirements.
Why the other options are incorrect
B: A single Public IP reserves one address, not a range.
C: Private endpoint exposes a private IP for PaaS—no public IPs involved.
D: NAT gateway provides egress SNAT, but you still need public IPs (optionally from a prefix) to define its addresses; it doesn’t reserve a block by itself.

---

### Question 38

You need to configure a new Azure App Service app named WebApp1.
The solution must meet these requirements:
Verify a custom domain name: app.contoso.com
Automatically scale up to eight instances
Minimize costs and administrative effort
Which record type should you use to verify the domain?

**Options:**

- **A.** A. A
- **B.** B. AAAA
- **C.** C. PTR
- **D.** D. TXT ✅

**Correct answer:** D

**Explanation:**

Choice D is correct.
Azure App Service verifies domain ownership by requiring a TXT record in the domain’s DNS zone. The TXT record contains a unique domain verification ID that Azure provides when adding the custom domain. Once the TXT record is detected, Azure confirms ownership and allows the domain to be mapped to the web app.
Why the others are incorrect
A: An A record maps a domain to an IPv4 address, but it does not verify ownership.
B: An AAAA record maps a domain to an IPv6 address; it’s for routing, not verification.
C: A PTR record is for reverse DNS (IP-to-name lookup), unrelated to ownership verification.

---

### Question 48

Your on-premises network hosts an SMB file share named Share1.
Your Azure subscription contains:
A web app named webapp1
A virtual network named VNET1
You need to ensure that webapp1 can connect to Share1 hosted on-premises.
What should you deploy?

**Options:**

- **A.** A. an Azure Application Gateway
- **B.** B. a Microsoft Entra Application Proxy
- **C.** C. an Azure Virtual Network Gateway ✅
- **D.** D. an Azure Private Link endpoint
- **E.** E. an Azure ExpressRoute circuit
- **F.** F. an Azure Bastion host

**Correct answer:** C

**Explanation:**

Choice C is correct.
To allow webapp1 to access Share1 over SMB, you need network-level connectivity between Azure and your on-premises network. The Azure Virtual Network Gateway enables this through a site-to-site VPN or ExpressRoute connection. Once the gateway is established, and webapp1 is integrated with VNET1, it can reach the on-premises SMB share using private IP addressing.
Why the others are incorrect
A: Application Gateway handles HTTP/HTTPS web traffic, not SMB or private network routing.
B: Entra Application Proxy provides remote access for web apps, not file shares.
D: Private Link connects to Azure PaaS services, not on-premises resources.
E: ExpressRoute provides private connectivity but still requires a Virtual Network Gateway to connect the virtual network.
F: Bastion provides secure RDP/SSH access to Azure VMs, not network routing or SMB connectivity.

---

### Question 52

Contoso is migrating bespoke VMs into a scale set but needs per-instance control: attach existing NICs, pin some instances to specific zones, and scale in without disrupting protected instances. They still want to elastically add/remove instances as demand changes.
Requirements
• Attach existing NICs per instance
• Zone-aware placement control
• Instance-level protection during scale-in
Which option should you choose?

**Options:**

- **A.** A. Uniform
- **B.** B. Availability Set
- **C.** C. Single VM
- **D.** D. Flexible ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Flexible orchestration for VMSS gives instance-level control similar to standalone VMs while preserving scale set management (autoscale, lifecycle). You can attach existing NICs, place instances in specific zones, and use scale-in policies with instance protection so critical nodes aren’t removed during downsizing. Flexible is designed for heterogeneous or stateful scenarios where you need granular placement and networking control but still want the benefits of a scale set.
Why the other options are incorrect
A: Uniform requires homogeneous instances (same SKU/model), tightly couples to a load balancer, and doesn’t support attaching pre-existing NICs or fine-grained zone pinning per instance.
B: An Availability Set gives fault domain separation for individual VMs, but you lose scale-set features like unified model management and native autoscale.
C: Single VM offers control but no elastic scaling or scale-set semantics.

---

### Question 57

Backends behind a Standard Load Balancer show as unhealthy even though the service is up. NSGs are applied to the subnet/NICs.
“To allow probe traffic to reach backends, add an NSG rule that permits inbound from the __________ service tag on the probe port.”

**Options:**

- **A.** A. Internet
- **B.** B. VirtualNetwork
- **C.** C. AzureTrafficManager
- **D.** D. AzureLoadBalancer ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Standard Load Balancer probes originate from the platform and are matched using the AzureLoadBalancer service tag. If NSGs block that source on the probe port, the LB will always mark instances unhealthy even when the app is fine. Adding an allow rule from AzureLoadBalancer to the probe port restores probe visibility, after which data plane flows can succeed.
Why the other options are incorrect
A: Internet is too broad and doesn’t consistently represent LB probe source addresses.
B: VirtualNetwork doesn’t include the platform probe source; still blocked.
C: AzureTrafficManager is unrelated to Load Balancer health probes.

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

### Question 6

You’re updating an ARM template for a NIC. The NIC must attach to a subnet in a different resource group. You want a portable template that computes the subnet ID (no hardcoded IDs passed in).
“To compute the cross-RG subnet ID for ipConfigurations[*].properties.subnet.id, use __________ with the resource group name, type, and names.”

**Options:**

- **A.** A. concat()
- **B.** B. resourceId() ✅
- **C.** C. reference()
- **D.** D. parameters()

**Correct answer:** B

**Explanation:**

Choice B is correct. resourceId() builds the fully qualified resource ID in a context-aware way, including when the target lives in a different resource group. The cross-RG form accepts the RG name explicitly:
“[resourceId(parameters(‘vnetRg‘),
  ‘Microsoft.Network/virtualNetworks/subnets‘,
  parameters(‘vnetName‘), ‘app‘)]“
This keeps the template portable, avoids brittle string concatenation, and ensures the NIC receives a valid ID regardless of deployment target.
Why the other options are incorrect
A: concat() produces strings but is error-prone for ARM IDs (slashes, casing, subscription).
C: reference() retrieves runtime properties of an existing resource; you still need the ID first.
D: parameters() just returns a value; it doesn’t construct the canonical ID.

---

### Question 7

You’ve created private endpoints and private DNS zones. Now on-prem clients must resolve the Azure private zones (e.g., privatelink.blob.core.windows.net) without custom DNS servers in Azure VMs. You want a managed, highly available resolver in Azure that accepts queries from on-prem and forwards to Azure Private DNS.
“To let on-prem resolve Azure private zones in a managed way, deploy an Azure DNS __________ and point on-prem conditional forwarders to its inbound endpoint.”

**Options:**

- **A.** A. Private DNS zone only
- **B.** B. Private Resolver ✅
- **C.** C. Public DNS zone
- **D.** D. Custom hosts files

**Correct answer:** B

**Explanation:**

Choice B is correct. Azure DNS Private Resolver provides inbound endpoints that accept DNS queries from on-prem over your VPN/ER and rulesets that forward to Azure Private DNS. This removes the need for VM-based DNS forwarders, scales with the platform, and keeps resolution authoritative even as you add more private zones. Use outbound endpoints + rulesets if you also need conditional forwarding back to on-prem.
Why the other options are incorrect
A: A private DNS zone alone doesn’t receive queries from on-prem; you still need a resolver path.
C: A public zone publishes to the Internet—opposite of the private endpoint design.
D: Hosts files don’t scale, don’t update automatically, and break the FQDN-to-PE mapping model.

---

### Question 8

A Bicep file must add a subnet to a VNet that’s already in production. You must not recreate or modify the VNet, and you want the declaration to be minimal and safe. You’ll keep the subnet as a child of that VNet for clear scoping.
Requirements
• Treat the VNet as pre-existing
• Create only the subnet
• Keep a clear parent/child relationship
Which option should you choose?

**Options:**

- **A.** A. parent
- **B.** B. targetScope
- **C.** C. existing ✅
- **D.** D. scope

**Correct answer:** C

**Explanation:**

Choice C is correct. Applying existing to the VNet resource tells Bicep to reference it rather than create it. You then declare the subnet as a child (either via the composite name ‘/‘ or with an explicit parent) so the deployment creates only the subnet. This combination provides safety (no unintended VNet changes), clarity (hierarchical modeling), and idempotence (re-runs don’t touch the VNet).
Why the other options are incorrect
A: parent expresses hierarchy but doesn’t prevent VNet creation by itself.
B: targetScope sets the deployment scope (tenant/subscription/RG), unrelated to resource existence.
D: scope directs where a module or extension runs; it doesn’t mark the VNet as existing.

---

### Question 31

For logs/app/ you issued many service SAS tokens to a partner. A batch of tokens was exposed. You must revoke immediately, then extend access for valid consumers without rotating the account keys or re-issuing new tokens everywhere.
Requirements
• Central instant revoke
• Ability to extend/shorten in one place
• No account-key rotation
Which option should you choose?

**Options:**

- **A.** A. Regenerate storage account keys
- **B.** B. Create a stored access policy on the container and issue SAS tied to its signed identifier ✅
- **C.** C. Switch to user delegation SAS for all cases
- **D.** D. Add a VNet service endpoint

**Correct answer:** B

**Explanation:**

Choice B is correct. A stored access policy (on the container) provides a server-side policy object for service SAS. Tokens bound to the policy’s signed identifier inherit its expiry and permissions. You can revoke instantly by deleting/renaming the policy or extend/shorten by editing the policy—all existing bound SAS update behavior immediately—with no account-key rotation and minimal client churn.
Why the other options are incorrect
A: Key rotation is global and disruptive; it invalidates all SAS signed with that key, not just the leaked set.
C: User delegation SAS is excellent but requires AAD flow and re-issuance; it doesn’t retro-bind existing service SAS.
D: Network restrictions don’t revoke already issued SAS and often don’t match partner network distributions.

---

### Question 32

You manage several VMs in West US. You plan to use Azure Network Watcher’s Traffic Analytics to monitor flows from NSGs attached to these VMs.
Which two resources should you create?

**Options:**

- **A.** A. a storage account ✅
- **B.** B. a Microsoft Sentinel workspace
- **C.** C. a Log Analytics workspace ✅
- **D.** D. a Data Collection Rule (DCR) in Azure Monitor
- **E.** E. an Azure Monitor workbook

**Correct answer:** A, C

**Explanation:**

Choice A is correct. Traffic Analytics relies on NSG flow logs, which are written to a storage account. Without a storage account configured on the NSG flow logs, Traffic Analytics has no data source.
Choice C is correct. Traffic Analytics processes the NSG flow logs and stores insights in a Log Analytics workspace, enabling KQL queries and dashboards.
Why the others are incorrect
B: Microsoft Sentinel is optional for SIEM use cases and not required to enable Traffic Analytics.
D: DCRs apply to Azure Monitor agent data; NSG flow logs/Traffic Analytics don’t require a DCR.
E: Workbooks are for visualization; they are not required to enable Traffic Analytics.

---

### Question 34

You’re updating an ARM template for a NIC that must attach to an existing subnet in a virtual network. The virtual network and subnet names are passed as parameters, and deployments may target different resource groups. You want a reliable way to compute the subnet ID without hardcoding paths.
Which option should you choose?

**Options:**

- **A.** A. resourceId ✅
- **B.** B. reference
- **C.** C. concat
- **D.** D. parameters

**Correct answer:** A

**Explanation:**

Choice A is correct. In ARM, resourceId() returns the fully qualified resource ID string for a resource type and name(s). When a property expects an ID (like subnet.id on a NIC), resourceId() is the right tool because it resolves the exact path for the current deployment context and parameter values.
For a same-RG subnet:
“[resourceId(‘Microsoft.Network/virtualNetworks/subnets‘, parameters(‘vnetName‘), parameters(‘subnetName‘))]“
For a cross-RG subnet:
“[resourceId(parameters(‘vnetRg‘), ‘Microsoft.Network/virtualNetworks/subnets‘, parameters(‘vnetName‘), parameters(‘subnetName‘))]“
This keeps the template portable, avoids brittle string concatenation, and ensures the property receives a correctly formatted ID every time.
Why the other options are incorrect
B: reference() fetches runtime properties of an existing resource (e.g., its IPs), not the ID string you need to assign. It’s overkill and can introduce unnecessary evaluation ordering.
C: concat() builds strings manually; it’s error-prone (subscription IDs, providers, casing, slashes) and not context-aware.
D: parameters() simply returns a parameter value; it won’t build the canonical resource ID path.

---

### Question 38

Refer to Adventure Works Cycles (I) Case Study : AZ-104
https://docs.google.com/document/d/1Zz2_H3e1z8UQOVK2kl8Z0uCT-FnpZrAK3cg2kKdd3fs/edit?usp=sharing
AppX is rehosted as VMs in a single VNet (Web, Processing, Data). Azure Storage for design packages is reachable only via a Private Endpoint. After the cutover, the Web tier cannot access Blob by FQDN.
Which TWO configurations should you implement?

**Options:**

- **A.** A. Create a Private Endpoint for the storage account ✅
- **B.** B. Enable service endpoints to Storage on the Web subnet
- **C.** C. Create a Private DNS zone privatelink.blob.core.windows.net and link it to the VNet ✅
- **D.** D. Add a UDR to the Web subnet that points Blob FQDNs to the Private Endpoint IP

**Correct answer:** A, C

**Explanation:**

Choice A is correct. The workload must expose Storage privately inside the VNet; a Private Endpoint maps the storage account to a private IP on the Web/Processing/Data side, keeping data off the public internet.
Choice C is correct. Private Endpoints require name resolution of the public FQDN to the private IP. Linking the Private DNS zone privatelink.blob.core.windows.net to the VNet lets the VMs resolve the storage account name to its Private Endpoint address without host-file hacks or custom DNS appliances.
Why the others are incorrect
B: Service endpoints don’t apply to AppX ? Storage when you’ve chosen Private Endpoints; they keep traffic on Microsoft’s backbone but still use public FQDNs and aren’t needed here.
D: A UDR does not solve DNS. You must first resolve the FQDN to the private IP; routing alone cannot redirect name resolution.

---

### Question 41

Refer to Adventure Works Cycles (I) Case Study : AZ-104
https://docs.google.com/document/d/1Zz2_H3e1z8UQOVK2kl8Z0uCT-FnpZrAK3cg2kKdd3fs/edit?usp=sharing
Processing tier must call third-party APIs from a fixed public IP. Storage access must remain private via Private Endpoints. Data subnet must not use public egress.
What should you configure?

**Options:**

- **A.** A. Public IPs on all VMs, Express routes to host all networking with no firewall, use RBAC instead for network traffic
- **B.** B. Service endpoints to Storage and default Internet route
- **C.** C. NAT Gateway on the VNet
- **D.** D. NAT Gateway attached to the Processing subnet; Private Endpoints for Storage; no NAT on Data subnet ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Attaching a NAT Gateway to the Processing subnet gives those VMs a stable SNAT public IP for outbound calls to third-party APIs. Using Private Endpoints for Storage keeps data traffic private (no SNAT to public). By not associating NAT with the Data subnet, you prevent unintended public egress from that tier, aligning with least-privilege egress and segmentation goals.
Why the others are incorrect
A: Public IPs on VMs increase exposure, cost, and management; they don’t scope egress per subnet.
B: Service endpoints don’t provide a fixed public IP and still use public FQDNs; not compatible with the private-only Storage decision.
C: A VNet-level NAT attachment doesn’t exist; NAT is associated with subnets, and you need per-subnet control.

---

### Question 43

Refer to Adventure Works Cycles (I) Case Study : AZ-104
https://docs.google.com/document/d/1Zz2_H3e1z8UQOVK2kl8Z0uCT-FnpZrAK3cg2kKdd3fs/edit?usp=sharing
The Web tier (IaaS VMs) must be published HTTPS-only with OWASP WAF protections and minimal cert management. Certificates are stored in Key Vault and should auto-rotate on the gateway.
What should you deploy/configure?

**Options:**

- **A.** A. App Gateway v2 (WAF), HTTPS listener with Key Vault-referenced cert, HTTP?HTTPS redirect ✅
- **B.** B. Public Load Balancer + VM certs; block HTTP in NSGs
- **C.** C. Traffic Manager + public IPs on web VMs
- **D.** D. App Gateway v1 with uploaded PFX; no redirect

**Correct answer:** A

**Explanation:**

A is correct. Application Gateway v2 (WAF) provides Layer-7 HTTPS, managed WAF policies, and automatic cert renewal when you reference the cert from Key Vault. Configure an HTTP listener that issues a 301 redirect to HTTPS, and an HTTPS listener that terminates TLS using the KV certificate—meeting HTTPS-only, WAF, and low-effort cert rotation in one place.
Why the others are incorrect
B: A Public Load Balancer is L4 (no WAF, no TLS policy). Certs on each VM increase ops overhead.
C: Traffic Manager is DNS-based; it doesn’t do TLS termination or WAF.
D: v1 lacks autoscale/Key Vault integration for certs; no redirect means users can still hit HTTP.

---

### Question 51

An RG created years ago in East US now hosts resources in Australia East and Australia Southeast. During a regional incident in East US, control-plane operations on that RG stalled, though workloads in AU kept running. You want the RG’s control-plane location to be in Australia East going forward, without redeploying apps.
Which option should you choose?

**Options:**

- **A.** A. Rename the resource group
- **B.** B. Change the RG’s Location property
- **C.** C. Export templates and redeploy everything
- **D.** D. Create a new RG in Australia East and move supported resources into it ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. An RG’s location is immutable. To change the management-plane home, create a new RG in Australia East and move supported resources into it. The resource locations can remain in Australia East/SE; you’re relocating only the RG container. Validate move support per resource type and sequence moves to preserve dependencies (e.g., NICs with VMs, public IPs with LBs).
Why the other options are incorrect
A: RGs can’t be renamed.
B: The RG Location cannot be edited after creation.
C: Full redeploy is unnecessary and high-risk when moves are supported.

---

### Question 56

An internal Standard Load Balancer fronts VMSS instances on 443. Health probe: TCP 443. The backend NICs are in AppSubnet with an NSG that denies inbound 443 from all. The load balancer shows all backends Unhealthy, and connections to the private frontend timeout. No application errors are logged on the VMs.
What is the most direct fix?

**Options:**

- **A.** A. Open inbound 443 from Internet in the NSG
- **B.** B. Change probe to HTTP /healthz
- **C.** C. Disable TCP resets on LB rule
- **D.** D. Allow AzureLoadBalancer to 443 in the NSG ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Standard Load Balancer health probes originate from the platform and are identified by the AzureLoadBalancer service tag. Your NSG blocks 443 from all, so probes can’t reach backend instances; the LB marks them Unhealthy, and no traffic is forwarded. Add a higher-priority NSG rule on the subnet or NIC to allow inbound from AzureLoadBalancer to port 443 (plus your app’s real health port if different). Once probes pass, backends become Healthy and the LB resumes distributing flows. No app change is needed.
Why the other options are incorrect
A: Opening to Internet is unnecessary and weakens security; the probe source isn’t “Internet.”
B: Changing to HTTP doesn’t help if the NSG still blocks the probe source.
C: TCP reset behavior doesn’t affect probe reachability; probes are still blocked by the NSG.

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

### Question 59

You need continuous, end-to-end tests from a VM in SpokeA to a Storage account Private Endpoint in SpokeB (TCP 443). Results must track packet loss/latency/reachability and alert on failures. One-off checks aren’t enough; you want ongoing monitoring that understands private DNS resolution.
Requirements
• Ongoing tests (not one-time)
• Private FQDN resolves to private IP
• Metrics for reachability/latency; alertable
Which feature should you use?

**Options:**

- **A.** A. IP Flow Verify
- **B.** B. Connection Monitor ✅
- **C.** C. Next Hop
- **D.** D. NSG flow logs only

**Correct answer:** B

**Explanation:**

Choice B is correct. Connection Monitor runs continuous, scheduled tests from defined sources (e.g., a VM in SpokeA with the agent) to destinations (FQDN or IP—your Storage Private Endpoint on 443). It measures reachability, round-trip latency, and packet loss, and it resolves FQDNs using the source VM’s DNS—so if your private DNS is set up correctly, the test will follow the private name to the private IP. Results are stored for trend analysis, and you can wire them into Azure Monitor alerts (metrics or log-based) to page when reachability drops or latency bursts. It’s built for ongoing validation across spokes and on-prem, catching regressions from NSG/UDR/DNS drift that a one-time check would miss.
Why the other options are incorrect
A: IP Flow Verify is a point-in-time NSG evaluation (allow/deny) for a single tuple; it doesn’t continuously test end-to-end reachability/latency or validate DNS.
C: Next Hop tells you which route a packet would take; it doesn’t confirm the endpoint is reachable, nor does it measure performance or consider FQDN/DNS resolution.
D: NSG flow logs are passive records written after the fact; they’re useful for forensics but don’t provide active, scheduled testing or alerting on failures.

---

### Question 1

Scenario
A VM intermittently fails to reach a storage account over TCP 443. The NIC has an NSG; the subnet also has an NSG. You must see the full, merged rule set applied to the NIC (including subnet NSG and defaults) to understand precedence before you change anything.
Proposed solution
Use Network Watcher – IP flow verify on the VM’s NIC for destination Storage FQDN:443 and inspect the result.
Does the proposed solution meet the goal?

**Options:**

- **A.** Yes / No
- **B.** Yes
- **C.** No ✅

**Correct answer:** C

**Explanation:**

IP flow verify tests a single 5-tuple and returns allow/deny plus the matching rule. It’s great to confirm whether a specific flow is blocked and by which rule, but it does not list the complete effective rule set across subnet + NIC NSGs and defaults. To review the entire merged policy, use Network Watcher – Effective security rules, which enumerates all applicable rules and their final precedence as applied to the NIC.
Why the other option is incorrect
Yes: Assumes IP flow verify presents the whole ruleset. It doesn’t; it only evaluates the specified flow. Use Effective security rules for full policy inspection.

---

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

### Question 4

You’re reviewing a Bicep snippet that adds a subnet to an existing VNet without recreating the VNet. The author wrote:
param vnetName string
resource vnet ‘Microsoft.Network/virtualNetworks@2023-09-01‘ existing = {
  name: vnetName
}
resource app ‘Microsoft.Network/virtualNetworks/subnets@2023-09-01‘ = {
  name: ‘${vnet.name}/app‘
  properties: { addressPrefix: ‘10.20.1.0/24‘ }
}
In this snippet, which construct ensures the VNet is treated as pre-existing so the deployment creates only the subnet?

**Options:**

- **A.** A. existing ✅
- **B.** B. parent
- **C.** C. scope
- **D.** D. module

**Correct answer:** A

**Explanation:**

Choice A is correct. In Bicep, existing on a resource declaration tells the engine to reference an already-deployed resource rather than create/modify it. The child declaration (Microsoft.Network/virtualNetworks/subnets) then targets that existing parent, so the deployment creates just the subnet while leaving the VNet untouched. This pattern is central to safely augmenting live environments.
Why the other options are incorrect
B: parent wires hierarchy for a child resource, but it doesn’t mark the parent as pre-existing by itself.
C: scope controls where a module/extension deploys; it doesn’t switch a resource to reference mode.
D: module composes templates; it doesn’t indicate resource existence.

---

### Question 6

A two-VM app (web + API) in Australia East must replicate to Australia Southeast. During a failover you need app-consistent points, multi-VM consistency, no public IPs in target, and pre-created target networking with subnet/NSG mapping. You also want a Recovery Plan for ordered failover and runbooks.
Which approach fits?

**Options:**

- **A.** A. Nightly VM backups with GRS storage
- **B.** B. Export templates and redeploy in the target region
- **C.** C. In a Recovery Services vault, enable replication to AU SE, set a replication policy (frequency/retention), map VNets/subnets, enable multi-VM consistency, and create a Recovery Plan ✅
- **D.** D. Snapshot managed disks and copy to the target region

**Correct answer:** C

**Explanation:**

Choice C is correct. Azure Site Recovery for Azure VMs is configured from a Recovery Services vault: you enable replication per VM (choosing the target region, resource group, disks, and compute), define a replication policy (RPO, app-consistent snapshot cadence, retention), and map source to target VNets/subnets so NICs land on private subnets with the right NSGs. For multi-tier apps, enable multi-VM consistency to capture crash/app-consistent points across VMs, and use a Recovery Plan to orchestrate startup order, manual actions, and automation runbooks. This delivers repeatable, low-touch DR aligned to your networking and security model.
Why the other options are incorrect
A: Backups provide data recovery, not near-zero RTO failover orchestration, network mapping, or continuous replication.
B: Template redeploy is manual, slow, and error-prone; it lacks RPO, recovery points, and push-button failover.
D: Disk snapshots/copies miss orchestration, app consistency, and automated NIC/network binding.

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

### Question 9

Scenario
You must continuously verify TCP 443 connectivity from a VM in SpokeA to a private endpoint in Hub and surface results in a Log Analytics workspace. Use Azure-native tooling only.
Requirements
Region-scoped Network Watcher enabled
Connection Monitor with test groups, endpoints, and a TCP 443 test configuration (1-minute frequency)
Results stored in a Log Analytics workspace
Which sequence meets the requirements?

**Options:**

- **A.** A.Enable Network Watcher in any regionStart packet capture on private endpointExport capture to Storage
- **B.** B.Enable Network Watcher in the target regionCreate Connection Monitor (workspace-based): add endpoints (SpokeA VM NIC, Hub PE FQDN/IP), test config TCP:443, frequency 1mLink to Log Analytics workspace; review test groups and results ✅
- **C.** C.Create NSG flow logsEnable Traffic AnalyticsInfer health from deny count
- **D.** D.Run Connection Troubleshoot ad-hocScreenshot outputRe-run hourly

**Correct answer:** B

**Explanation:**

The modern Connection Monitor (workspace-based) continuously tests endpoint reachability with configurable test groups and test configurations (e.g., TCP 443 every 1 minute). It requires Network Watcher in the same region and can write results to a Log Analytics workspace for dashboards and alerts. This provides durable health telemetry between the SpokeA VM and the Hub private endpoint without custom agents/scripts.
Why the other options are incorrect
A: You cannot packet-capture on a private endpoint (service-managed). This doesn’t produce continuous health telemetry.
C: NSG flow logs/Traffic Analytics show flows but don’t actively test endpoint reachability or app-level health on a fixed schedule.
D: Connection troubleshoot is ad-hoc; it doesn’t generate continuous monitoring/records or workspace-based history.

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

### Question 16

A VM has an NSG on its NIC that denies 3389, while the subnet NSG allows 3389 from Ops. You need to confirm the computed result after Azure merges subnet + NIC rules and defaults.
Where do you see the computed (effective) security rules for that NIC?

**Options:**

- **A.** A. NSG flow logs only
- **B.** B. Effective security rules (Network Watcher) on the NIC ✅
- **C.** C. Activity Log
- **D.** D. Effective routes

**Correct answer:** B

**Explanation:**

Choice B is correct. Network Watcher ? Effective security rules queries the platform’s evaluation engine for a NIC and shows the final allow/deny set after combining subnet NSG, NIC NSG, and default rules. In your scenario, you’ll observe deny takes effect because a specific NIC-level deny overrides a broader subnet allow.
Why the other options are incorrect
A: Flow logs are telemetry exported to storage; they don’t show the merged rule table.
C: Activity Log records control-plane operations, not data-plane policy.
D: Effective routes are for UDR/system routing, not NSG policy.

---

### Question 20

You’re building a **hub-and-spoke** across regions. The **hub** hosts the **VPN/ExpressRoute gateway**. Evaluate which peerings are **valid** given address spaces and regions.

**VNets**

****

Which proposed peering is **not permitted** by Azure?

**Options:**

- **A.** A. SpokeA ? Dev ✅
- **B.** B. Hub ? SpokeA (hub: Allow gateway transit; spoke: Use remote gateway)
- **C.** C. Hub ? SpokeB (global VNet peering)
- **D.** D. SpokeA ? SpokeB (no gateway transit)

**Correct answer:** A

**Explanation:**

**Choice A is correct.** Azure VNet peering **requires non-overlapping address spaces**. **Dev (10.20.1.0/24)** is contained by **SpokeA (10.20.0.0/16)**, so peering those two **fails** at validation. Overlap anywhere in the IPv4/IPv6 spaces blocks peering, regardless of region or subscription.

Why the other options are incorrect

B: Hub-and-spoke with a gateway works when the **hub exports** its gateway (**Allow gateway transit**) and the **spoke imports** it (**Use remote gateway**). Only one side can “use remote gateway”; the other must be the exporter.

C: **Global VNet peering** supports **cross-region** peering (AU East ↔ AU Southeast) provided there’s **no overlap** and service flags are set as needed.

D: A simple peering between **non-overlapping** SpokeA and SpokeB is allowed; without transit flags, it **won’t** provide on-prem routing through the hub (which is the point), but the peering itself is valid.

---

### Question 23

You want **least-privilege east–west access** with minimal rule churn as servers scale. You’ll place NSGs at the **subnet** layer and reference **ASGs** for membership-based rules.

**Inventory**

****

What’s the best rule design to meet the flows and minimize future edits?

**Options:**

- **A.** A. On DataSubnet NSG, allow Source: ASG Web ? Dest: ASG DB, Port 1433, deny all else ✅
- **B.** B. On DataSubnet NSG, allow Source: AppSubnet ? Dest: DataSubnet, Port 1433
- **C.** C. On DataSubnet NSG, allow Any ? DataSubnet, Port 1433
- **D.** D. On VM NIC NSGs, allow VirtualNetwork ? Any, Port 1433

**Correct answer:** A

**Explanation:**

Choice A is correct. Referencing **ASGs** (Web → DB) in an NSG rule lets membership drive access: when you **scale out** the web or database tiers, you **don’t touch rules**—you only add VMs to the right ASG. Placing the rule on the **DataSubnet NSG** protects the destination, keeps policy close to the asset, and pairs naturally with a **deny-all** below it to block everything else. This yields **coarse placement, fine intent**, and **low churn**.

Why the other options are incorrect

B: Subnet-to-subnet rules over-grant; any workload in AppSubnet (not just Web) could reach DB.

C: Opening DB to **Any** defeats least privilege and increases attack surface.

D: A broad **VirtualNetwork** allow on NIC NSGs admits **every** VNet host, bypassing the ASG model and duplicating rules across NICs.

---

### Question 24

You’re moving three PaaS services to a **VNet-only data path** with **private DNS** that works for **both spokes and on-prem** (via VPN/ER). Public endpoints must be **inaccessible** even if someone has SAS/keys.

**Services &amp; goals**

****

Which control enforces **VNet-only** data access with **private IPs and private DNS** for these services?

**Options:**

- **A.** A. Private Endpoint ✅
- **B.** B. Service endpoint
- **C.** C. NAT Gateway
- **D.** D. IP allowlist

**Correct answer:** A

**Explanation:**

Choice A is correct. A **Private Endpoint** places a **private NIC** for each service into the specified subnet, forcing the **data plane** over your **private network**. With the matching **private DNS zone** (for example, privatelink.blob.core.windows.net, privatelink.vaultcore.azure.net, privatelink.azurewebsites.net) **linked** to the consumer VNets (and forwarded from on-prem via conditional forwarding or **DNS Private Resolver**), clients resolve the public FQDN to the **private IP**. Combine with **Public network access: Disabled** on the services to close the public endpoint completely. This design covers **all three rows**: scoped per-spoke access, private name resolution, and on-prem reach via your private link.

Why the other options are incorrect

B: **Service endpoints** keep the **public** endpoint; they don’t provide **private IPs** or block Internet with credentials.

C: **NAT Gateway** affects **egress SNAT** only; it doesn’t authorize access at the service or supply private names.

D: **IP allowlists** are brittle and still expose a **public** surface; they don’t give **private DNS** or VNet identity.

---

### Question 26

Security demands: (1) **private inbound** access to the app only, (2) **deny public Internet** to the app, (3) **private outbound** to Azure SQL via its **private endpoint**, and (4) correct **DNS resolution** for both app and SQL. Choose the configuration that satisfies all four simultaneously.

**Candidates**

****

**Question**

Which single row meets the requirements?

**Options:**

- **A.** A. Row A ✅
- **B.** B. Row B
- **C.** C. Row C
- **D.** D. Row D

**Correct answer:** A

**Explanation:**

For **private inbound**, create an **App Service Private Endpoint** and add **Access Restrictions** that deny all public traffic—ensuring only the private endpoint path is permitted. For **private outbound** to SQL’s private endpoint, enable **regional VNet Integration** and **Route All** so egress goes into the VNet (and reaches SQL privately). Finally, configure the **private DNS zones**: the app’s private endpoint zone (privatelink.azurewebsites.net) and SQL’s PE zone (e.g., privatelink.database.windows.net) linked to the VNet so hostnames resolve to **private** IPs.

**Why the other options are incorrect**

- B: Still exposes a public endpoint (allowed IPs), and outbound doesn’t route privately to SQL without Route All.

- C: Leaves the public endpoint open and lacks DNS plumbing; some calls would resolve to public names.

- D: ASE isolates inbound, but without VNet integration and private DNS, outbound to SQL PE isn’t satisfied; also over-scoped for this need.

---

### Question 27

Scenario

A hub VNet needs three platform subnets and one app subnet. Requirements:

• AzureFirewallSubnet must meet minimum size requirements.

• AzureBastionSubnet must meet minimum size requirements.

• GatewaySubnet must meet minimum size recommendations for VPN/ER gateways.

• AppSubnet is a large /24.

Choose the only compliant combination.

**Candidates**

****

**Question**

Which row meets the requirements?

**Options:**

- **A.** A. Row A
- **B.** B. Row B
- **C.** C. Row C ✅
- **D.** D. Row D

**Correct answer:** C

**Explanation:**

Azure Firewall requires **AzureFirewallSubnet** of **/26 or larger** (C meets this with /26). Azure Bastion requires **AzureBastionSubnet** of **/26** (C meets /26). VPN/ExpressRoute gateways require **GatewaySubnet** sized appropriately; **/27** is the documented minimum recommendation for modern SKUs (C meets /27). AppSubnet /24 is fine. Row C is the only candidate satisfying all three platform subnet size rules concurrently.

**Why the other options are incorrect**

- Row A: AzureFirewallSubnet **/27** is too small.

- Row B: AzureBastionSubnet **/27** is too small for Bastion.

- Row D: GatewaySubnet **/29** is too small for gateway deployments and scaling.

---

### Question 32

You must validate DR without impacting production. Test the full stack (compute + network) in isolation, keep production running, and clean up test resources afterward.
What should you run?

**Options:**

- **A.** A. Planned failover (with shutdown)
- **B.** B. Unplanned failover
- **C.** C. Commit failover
- **D.** D. Test failover to an isolated VNet/subnet, then cleanup ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. A test failover brings up replicas in an isolated network (often a dedicated test VNet), so you can validate boot, dependencies, DNS, and apps without touching production. After validation, you cleanup test resources, leaving replication intact. Production traffic is unaffected, and no re-protect or DNS cutover occurs.
Why the other options are incorrect
A: A planned failover performs a production cutover (source healthy, shut down &amp; sync), not a safe test.
B: An unplanned failover is for outages—traffic is cut over; it’s not a non-impacting test.
C: Commit is the post-failover step to finalize a real failover; it doesn’t perform the validation itself.

---

### Question 34

A new tier must stay online during a datacenter-level incident within a region and needs zonal public IPs for inbound flows. You are not changing regions or using cross-region DR.
“To achieve datacenter-level isolation inside one region (and support zonal frontends), deploy the VMs to an __________.”

**Options:**

- **A.** A. Proximity placement group
- **B.** B. Availability zone ✅
- **C.** C. Availability set
- **D.** D. Region pair

**Correct answer:** B

**Explanation:**

Choice B is correct. Availability zones place instances in physically separate datacenters within the same region, giving true fault isolation at the building level and enabling zonal public IPs/zonal resources. Zonal spreading satisfies the requirement without cross-region complexity.
Why the other options are incorrect
A: A proximity placement group optimizes latency by co-locating—not by separating across datacenters.
C: An availability set spreads across fault/update domains inside one datacenter; it doesn’t protect against a full datacenter outage.
D: A region pair concerns cross-region relationships; you’re staying within a single region.

---

### Question 37

You’re migrating bespoke VMs behind an internal load balancer to a scale-out model. The team must attach existing NICs, pin specific instances to specific zones, and protect certain instances from scale-in while still using autoscale. Images may diverge slightly between instances during a rolling update.
Requirements
• Instance-level control (NICs, per-instance zone selection)
• Scale-in protection for stateful nodes
• Keep autoscale &amp; health-aware replacement
Which option should you choose?

**Options:**

- **A.** A. Uniform orchestration
- **B.** B. Availability set
- **C.** C. Flexible orchestration ✅
- **D.** D. Single VM

**Correct answer:** C

**Explanation:**

Choice C is correct. Flexible orchestration gives per-instance control (e.g., attach existing NICs, choose zones per VM) while retaining scale set semantics (autoscale, health-based repair). You can mark instances with instance protection to avoid unintended removal during scale-in, and tolerate some heterogeneity across instances—capabilities Uniform mode doesn’t provide. This fits stateful or specialized nodes that still benefit from scale-set lifecycle.
Why the other options are incorrect
A: Uniform requires homogeneous instances and doesn’t support existing NICs or granular per-instance control; scale-in protection is limited.
B: An availability set lacks scale-set features like autoscale, rolling updates, and unified model operations.
D: A single VM can’t elastically scale or provide set-level management.

---

### Question 38

You will provide agentless, browser-based RDP/SSH to VMs without public IPs. The deployment keeps inbound ports closed and uses a dedicated subnet.
“Azure Bastion requires a subnet named __________ with a minimum prefix of __________.”

**Options:**

- **A.** A. GatewaySubnet, /27
- **B.** B. BastionSubnet, /27
- **C.** C. AzureBastionSubnet, /26 ✅
- **D.** D. AzureFirewallSubnet, /24

**Correct answer:** C

**Explanation:**

Choice C is correct. Bastion must be deployed into a subnet named exactly AzureBastionSubnet with a /26 or larger address space. The dedicated name lets the platform apply the right policies and scale units; the /26 ensures enough IPs for concurrent sessions and future scaling. With Bastion in place, you can remove public IPs from management paths and keep RDP/SSH traffic on Azure’s control plane.
Why the other options are incorrect
A: GatewaySubnet is reserved for VPN/ExpressRoute gateways.
B: The required name is AzureBastionSubnet (exact), not “BastionSubnet”; /27 is too small.
D: AzureFirewallSubnet is for Azure Firewall and unrelated to Bastion.

---

### Question 40

A Storage account must be reachable only from AppSubnet and DataSubnet. You cannot deploy Private Endpoints yet, but you must restrict access beyond simple IP allowlists. Public endpoint stays in use.
Requirements
• Keep the Storage public endpoint
• Restrict access to two VNets/subnets
• No Private Endpoint for now
What configuration meets the requirements?

**Options:**

- **A.** A. Private Endpoint in each subnet
- **B.** B. NAT Gateway on the subnets
- **C.** C. IP rules for current NAT egress addresses
- **D.** D. Enable Microsoft.Storage service endpoints on both subnets and allow only those subnets in the Storage firewall ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Service endpoints extend your VNet identity to the Storage service over the public endpoint. When you enable the Microsoft.Storage endpoint on AppSubnet and DataSubnet and set the Storage firewall to Selected networks (those subnets), Storage accepts traffic only from those subnet identities—no generic Internet clients, even with keys/SAS. This gives a strong, subnet-scoped allowlist without changing the endpoint type.
Why the other options are incorrect
A: Private Endpoints would be stronger but are explicitly not allowed here.
B: A NAT Gateway provides static egress/SNAT ports; it doesn’t authorize access at the service.
C: IP rules depend on current egress IPs and can drift; they’re brittle compared to VNet-based authorization.

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

### Question 46

You must move web-stateless (from the table in Q2) from Australia East to Australia Southeast with minimal downtime and with configuration preserved (NIC, NSG, disks, tags). You also want dependency sequencing handled automatically and a guided rollback path if needed. A plain resource group move won’t help because this is a cross-region change.
Requirements
• Region-to-region move (AU East ? AU SE)
• Orchestrate dependencies (NIC, IP, disks)
• Minimize downtime; preserve configuration; rollback if needed
Which option should you choose?

**Options:**

- **A.** A. Export template and redeploy manually
- **B.** B. Move resources (RG ? RG) in the same region
- **C.** C. Site Recovery test failover
- **D.** D. Azure Resource Mover (region move) ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Azure Resource Mover orchestrates cross-region moves for VMs and their dependent resources (NICs, IPs, NSGs, disks), handling dependency order, validation, and staged replication where applicable. It provides a guided workflow (prepare, initiate move, commit) that minimizes downtime and preserves resource IDs/metadata where supported, and it offers rollback steps if validation fails. This is the supported, low-risk path for region changes, unlike same-region RG moves or do-it-yourself exports.
Why the other options are incorrect
A: A manual export/redeploy is error-prone, lacks orchestration, and risks configuration drift.
B: Move within/between resource groups does not change region; it only changes the management container.
C: ASR is a DR replication tool; while it can facilitate failover, it doesn’t replace the region move orchestration and dependency handling that Resource Mover provides.

---

### Question 47

Security requires the web app to be reachable only inside your VNets. Inbound must be private (no public endpoint), while outbound can still reach private resources via your networks. You want a platform-native solution—no custom proxies.
“To make inbound access private and remove the public endpoint, configure a __________ to the web app.”

**Options:**

- **A.** A. VNet Integration
- **B.** B. Private Endpoint ✅
- **C.** C. Service endpoint
- **D.** D. NAT Gateway

**Correct answer:** B

**Explanation:**

Choice B is correct. A Private Endpoint puts a private IP from your subnet on the app’s data-plane endpoint, so inbound traffic stays on your private network. Combine it with public network access disabled (or Access Restrictions deny-all) to ensure the public endpoint is closed. For outbound private access, you separately use VNet Integration (egress path), but the question is explicitly about inbound privacy, which is what Private Endpoint delivers.
Why the other options are incorrect
A: VNet Integration is outbound-only (app ? VNet); it doesn’t make inbound private.
C: Service endpoints apply to certain PaaS services and don’t place a private IP on the app.
D: NAT Gateway provides egress SNAT and static outbound IPs; it doesn’t privatize inbound.

---

### Question 49

You need static outbound IP and large SNAT port capacity for a VMSS and several web apps that egress through a shared subnet. Inbound is handled elsewhere. You want the correct association point for the egress service so all resources in the subnet benefit without per-NIC wiring.
Where should you associate the NAT Gateway?

**Options:**

- **A.** A. Virtual network
- **B.** B. Network interface (NIC)
- **C.** C. Public IP on the VMSS
- **D.** D. Subnet ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. A NAT Gateway is associated to a subnet, and then all outbound flows from resources in that subnet use the gateway’s public IP(s) and SNAT port pool. This gives static egress and scales SNAT capacity without changing individual NICs or app configs. You can attach one gateway to multiple subnets (within limits) or dedicate one per high-throughput subnet for isolation.
Why the other options are incorrect
A: There’s no “attach to VNet” operation; association is per subnet.
B: NAT Gateway doesn’t attach to NICs.
C: A VMSS public IP affects inbound or per-instance PIPs—not shared egress SNAT for the subnet.

---

### Question 51

Production front doors need static addressing, zone fault-tolerance, and secure-by-default behavior compatible with Standard LB/NSGs/Firewall.
“For production, use a __________ public IP to get static allocation, zone options, and secure defaults.”

**Options:**

- **A.** A. Basic static
- **B.** B. Standard static ✅
- **C.** C. Standard dynamic
- **D.** D. Public IP prefix

**Correct answer:** B

**Explanation:**

Choice B is correct. Standard static public IPs provide fixed addresses, support availability zones/zone-redundancy, and align with Standard networking’s closed-by-default posture. They integrate cleanly with Standard Load Balancer, NAT Gateway, Azure Firewall, and NSGs—exactly what modern prod requires. Zonal or zone-redundant allocations let you survive datacenter failures without renumbering.
Why the other options are incorrect
A: Basic is legacy, lacks secure defaults, and has limited zone features—not recommended for new prod.
C: Standard dynamic can change the IP; it violates the static requirement.
D: A public IP prefix reserves a contiguous range for future IPs but isn’t an address SKU or security model by itself.

---

### Question 53

You’re fronting a zonal VMSS that serves TCP 443 inside the VNet only. Requirements: internal frontend, zone-redundant, preserve client source IP, TCP probe, and no layer-7 features (TLS termination/routing done by the app). The solution must support thousands of flows with NSG-friendly defaults.
Which load-balancing product and mode meets these requirements?

**Options:**

- **A.** A. Public Load Balancer (Basic)
- **B.** B. Application Gateway (public)
- **C.** C. Load Balancer (Standard, internal) ✅
- **D.** D. Traffic Manager

**Correct answer:** C

**Explanation:**

Choice C is correct. Azure Load Balancer Standard (internal) gives a private frontend reachable only within your VNet/peers, supports zone-redundant frontends, TCP/HTTPS probes, and DSR/hairpin scenarios, and preserves client source IP on the backend. It’s layer-4, which fits the “no L7 features” constraint, and scales to very high connection counts with NSG-compatible health probes (AzureLoadBalancer tag). Use an internal frontend IP, a backend pool targeting the VMSS, and a probe on 443 (or health port) with appropriate NSG allowances.
Why the other options are incorrect
A: Basic lacks zone features, scale, and security posture recommended for prod.
B: Application Gateway is L7 and usually public or needs Private Frontend in WAF v2; it adds TLS termination/routing you don’t need.
D: Traffic Manager is DNS-based global routing, not in-VNet TCP load balancing.

---

### Question 54

Security mandates forced tunneling: traffic from AppSubnet must go to on-prem for Internet egress inspection via the hub VPN/ER gateway. You want to enforce this without NVAs and without touching the VMs.
Requirements
• Apply UDR on AppSubnet
• Route 0.0.0.0/0 to on-prem via the hub gateway
• Preserve VNet-local routing via system routes
Which next hop should 0.0.0.0/0 use in the UDR?

**Options:**

- **A.** A. Virtual appliance
- **B.** B. Internet
- **C.** C. Virtual network gateway ✅
- **D.** D. None

**Correct answer:** C

**Explanation:**

Choice C is correct. For forced tunneling to on-prem without an NVA, point 0.0.0.0/0 ? Virtual network gateway on AppSubnet. That pushes all non-VNet traffic into the site-to-site/ER gateway so on-prem policies apply. VNet-local stays with Azure’s system routes, so intra-VNet remains direct. This design avoids per-VM changes and centralizes control at the subnet.
Why the other options are incorrect
A: Virtual appliance requires an NVA IP you’re not using here.
B: Internet bypasses on-prem inspection, defeating forced tunneling.
D: None discards the traffic (blackhole).

---

### Question 57

A Web App calls a Storage account via Private Endpoint. The app has VNet Integration into AppSubnet. Storage has Public network access: Disabled. Requests fail (403/timeout). nslookup account.blob.core.windows.net from the app returns a public IP.
What change will restore private connectivity?

**Options:**

- **A.** A. Add a service endpoint to Storage
- **B.** B. Create a Private DNS Zone privatelink.blob.core.windows.net, link it to the VNet used by VNet Integration, and ensure an A record exists for the PE ✅
- **C.** C. Open outbound to Internet in NSG
- **D.** D. Add 0.0.0.0/0 UDR to an NVA

**Correct answer:** B

**Explanation:**

Choice B is correct. Private Endpoints rely on DNS to resolve the public FQDN to the private IP. Because lookups are returning a public address, the app is hitting the blocked public endpoint. Creating the Private DNS Zone for the storage privatelink domain, linking it to the VNet used by VNet Integration, and ensuring the endpoint’s A-record resolves to the private IP fixes name resolution and restores the private path.
Why the other options are incorrect
A: Service endpoints still use the public endpoint and don’t work when Public network access is disabled.
C: Opening Internet egress doesn’t change DNS and still won’t reach a disabled public endpoint.
D: Sending default traffic to an NVA doesn’t fix the name resolution mistake; PE requires the privatelink zone.

---

### Question 59

A storage account hosts sensitive data. Access must come only from two VNets (Spoke-1 and Spoke-2) through private endpoints. Public network access must be blocked, and on-prem traffic should flow via a private connection (VPN/ExpressRoute to the spokes). Apps and tools on the Internet must not reach the account even with SAS.
Which option should you choose?

**Options:**

- **A.** A. Allow trusted Microsoft services
- **B.** B. Selected networks with service endpoints
- **C.** C. Public network access: Enabled + IP allowlist
- **D.** D. Create private endpoints in Spoke-1/2 and set Public network access: Disabled ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Private endpoints place a private IP for the storage account into Spoke-1/2, routing all data-plane traffic over your private network. Setting Public network access: Disabled ensures no public endpoint access—even with SAS/keys—so Internet clients can’t reach the account. With private DNS zone integration, on-prem resolves the private endpoint over VPN/ER, meeting the VNet-only requirement cleanly.
Why the other options are incorrect
A: Allowing trusted Microsoft services is a special exception for certain service-to-service scenarios and doesn’t enforce VNet-only access.
B: Service endpoints keep the public endpoint, expose public IP space, and don’t block Internet access with credentials.
C: Public access + IP allowlist still leaves a public endpoint reachable from the Internet; it violates the “private-only” requirement.

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

### Question 3

Scenario
Contoso is building a new public web tier in Australia East that must remain available during a complete zone outage. They want native Azure primitives only, with health-based load distribution, elastic autoscale, and an upgrade policy that rolls through instances without taking the entire tier down. Instances use managed disks; no third-party clustering.
Requirements
Spread across multiple availability zones
Health-probed layer-4 load balancing
Autoscale and safe rolling OS upgrades
Which deployment meets the requirements?

**Options:**

- **A.** A. One VM in an availability set; Basic Load Balancer; manual scale
- **B.** B. Three VMs in one availability set; Standard Load Balancer; autoscale rules
- **C.** C. VMSS (Flexible) pinned to Zone 1; Standard Load Balancer; manual scale
- **D.** D. VMSS across Zones 1–3; Standard Load Balancer; autoscale with rolling upgrades ✅

**Correct answer:** D

**Explanation:**

A Virtual Machine Scale Set (VMSS) deployed across Zones 1–3 delivers zonal fault isolation and qualifies for the multi-instance SLA. A Standard Load Balancer provides health probes and L4 distribution to a VMSS backend pool, enabling traffic to flow only to healthy instances, including when one whole zone fails. VMSS integrates natively with Autoscale (CPU/requests/metric-based) and supports rolling upgrade policies (batch %, health checks, pause) so the platform can patch or roll new images without total tier downtime. This blueprint matches the resiliency, elasticity, and upgrade safety constraints using only first-party features.
Why the other options are incorrect
A: A single VM cannot achieve zonal resiliency or a multi-instance SLA; Basic LB lacks advanced health-probe/load behavior expected for production.
B: Availability sets mitigate rack/datacenter faults but not zonal outages; all VMs live within one zone.
C: Pinning a scale set to one zone removes zonal resilience; manual scale misses the “elastic” requirement.

---

### Question 5

Scenario
You are reviewing a Bicep file for a new storage account. The template should deploy a StorageV2 account with LRS, HTTPS-only, public blob access disabled, tags for Environment and CostCenter, and a location that follows the resource group by default. The team will bind private endpoints separately.
param location string = resourceGroup().location
param skuName string = ‘Standard_LRS‘
resource stg ‘Microsoft.Storage/storageAccounts@2023-01-01‘ = {
  name: ‘stgprod001‘
  location: location
  sku: { name: skuName }
  kind: ‘StorageV2‘
  tags: {
    Environment: ‘Prod‘
    CostCenter: ‘FIN-001‘
  }
  properties: {
    supportsHttpsTrafficOnly: true
    allowBlobPublicAccess: false
    accessTier: ‘Hot‘
  }
}
Which statement best describes the deployment?

**Options:**

- **A.** A. Deploys BlobStorage with GRS; public access enabled; location fixed to East US
- **B.** B. Deploys StorageV2 with ZRS; HTTPS optional; tags ignored unless set at subscription
- **C.** C. Deploys StorageV2 with LRS; HTTPS-only; public access disabled; tags applied; location defaults to the resource group ✅
- **D.** D. Deploys StorageV2 with GRS; requires private endpoint in the same template for HTTPS-only

**Correct answer:** C

**Explanation:**

The Bicep sets kind: ‘StorageV2‘ and sku.name: ‘Standard_LRS‘, so it’s a StorageV2 account with LRS. supportsHttpsTrafficOnly: true enforces HTTPS-only; allowBlobPublicAccess: false disables anonymous public blob access. The tags object defines Environment and CostCenter, which ARM will apply to the resource. The location parameter defaults to resourceGroup().location, so the deployment follows the RG location unless overridden. A private endpoint is optional and not required to enforce HTTPS-only.
Why the other options are incorrect
A: Wrong kind (says BlobStorage), wrong redundancy (GRS), and claims public access enabled and fixed location—none of which match the template.
B: Wrong redundancy (ZRS) and HTTPS claim; ARM applies tags directly from the template—no subscription tag prerequisite.
D: Wrong redundancy (GRS) and incorrect implication that HTTPS-only requires a private endpoint in the same template.

---

### Question 7

Scenario
A web tier must achieve high availability for a customer-facing app in Australia East. The platform team demands resiliency to both a datacenter fault and a zonal outage. The solution should use native Azure constructs (no third-party clustering), keep state on managed disks, and balance traffic across instances.
Requirements
Survive zonal outage in the region
Balance traffic across instances
Use native Azure components
Which deployment meets the requirements?

**Options:**

- **A.** A. Single VM in an availability set with Premium SSD
- **B.** B. Three VMs distributed across Zones 1, 2, and 3 behind a Standard Load Balancer ✅
- **C.** C. Three VMs in one availability set (2 update domains, 5 fault domains) behind a Basic Load Balancer
- **D.** D. One VM Scale Set (Uniform) pinned to Zone 1 with a Standard Load Balancer

**Correct answer:** B

**Explanation:**

Spreading independent VMs across multiple availability zones provides fault isolation at the zone boundary and qualifies for the higher multi-instance SLA. A Standard Load Balancer distributes traffic and gives zone-redundant front-end/back-end paths. This design handles single-datacenter hardware faults (implicitly within a zone) and entire zone failures, while keeping the architecture simple and native.
Why the other options are incorrect
A: A single VM (even in an availability set) cannot meet zonal resiliency or multi-instance SLAs.
C: Availability sets protect against rack/datacenter failures, not zonal outages; Basic LB is not recommended for production HA.
D: A scale set pinned to one zone loses resiliency if that zone fails.

---

### Question 9

Scenario
A VM in SpokeA cannot reach an Azure SQL private endpoint in the Hub. DNS is supposed to resolve the SQL FQDN to a private IP in the hub. You need a fast, systematic diagnosis using Azure-native tools to confirm DNS resolution, routing, and NSG behavior before escalating.
Which troubleshooting sequence is best?

**Options:**

- **A.** A.Start a packet capture on the SQL private endpointEnable verbose NSG logs on the SQL NICReboot the VM
- **B.** B.Use IP flow verify on the VM’s NIC for the SQL FQDNIf allowed, stop thereOtherwise, open all NSG rules
- **C.** C.Run Connection troubleshoot from the VM’s NIC to the SQL FQDN (validates reachability and DNS)Check Next hop on the VM’s NIC for the SQL private IP (verifies effective routing/UDR)If still failing, run IP flow verify on that 5-tuple (shows the exact allow/deny rule) ✅
- **D.** D.Run traceroute to the SQL public IPDisable private DNS zonesSwitch SQL to public endpoint

**Correct answer:** C

**Explanation:**

Start with Connection troubleshoot (Network Watcher) targeting the FQDN—it resolves DNS and tests reachability, quickly exposing name resolution or path issues. Then check Next hop for the resolved private IP to confirm the VM’s effective route to the private endpoint (e.g., via peering, route tables, or accidental Internet routes). If traffic is still blocked, run IP flow verify on that exact 5-tuple to see whether an NSG (on NIC or subnet) is denying and which rule is responsible. This trio gives end-to-end visibility: DNS ? route ? security, with minimal intrusion.
Why the other options are incorrect
A: You can’t capture at a private endpoint like a NIC; PE is a service-managed resource. NSG logs on PE don’t exist; rebooting the VM is not diagnostic.
B: IP flow verify alone doesn’t validate DNS or routing; opening NSGs blindly is risky and non-deterministic.
D: Traceroute to a public IP and disabling private DNS contradict a private endpoint design; switching to public endpoint sidesteps the requirement.

---

### Question 10

Scenario
A three-tier app runs in one VNet. You must allow: Web ? App (TCP 443) and App ? DB (TCP 1433). All other east-west flows must be denied. IP addresses change frequently as VMs scale. Use Application Security Groups (ASGs) to avoid IP maintenance. Enforce at the subnet to cover any NIC added later.
Select TWO actions that together meet the goal.

**Options:**

- **A.** A. Create NSG rules with source/destination IP prefixes for each VM; apply NSG to each NIC
- **B.** B. Create ASGs: asg-web, asg-app, asg-db; add VM NICs to the matching ASG ✅
- **C.** C. In an NSG at the subnets, add rule: source asg-web ? dest asg-app, TCP 443 Allow
- **D.** D. In the same NSG, add rule: source asg-app ? dest asg-db, TCP 1433 Allow ✅
- **E.** E. Add a lower-priority Deny Any Any inbound rule on the subnets to block residual east-west
- **F.** F. Replace ASGs with service tags to represent the tiers

**Correct answer:** B, D

**Explanation:**

You first model the tiers with ASGs (B) and attach each NIC to its tier ASG so membership follows the VM, not its IP. Then you author NSG rules that reference ASGs rather than IPs. The decisive rule that enforces app-to-db communication is asg-app ? asg-db on TCP 1433 Allow (D). You’d pair it with asg-web ? asg-app on 443 Allow (C) and finish with a catch-all Deny (often via default rules or an explicit deny) to block everything else. Using subnet-level NSGs ensures future NICs in those subnets inherit the policy automatically.
Why the other options are incorrect
A: Hard-coding IPs defeats the purpose of ASGs and breaks when scale/addresses change; per-NIC NSGs increase drift.
C: This allows web?app only; it doesn’t authorize app?db, hence insufficient alone (it’s needed in combination).
E: A deny is good hygiene, but without the ASG-based allows it would just block traffic; it’s not sufficient by itself.
F: Service tags represent Microsoft service ranges, not your tiers; they can’t substitute for ASGs in east-west policy.

---

### Question 15

Scenario
A spoke VNet hosts an App Service and a VM API. Both must privately access Storage (Blob), Key Vault, and Azure SQL with no public Internet exposure. A hub VNet provides central DNS. All VNets (hub + spokes) must resolve those services to private IPs. Public access to each service must be disabled.
Requirements
One private endpoint per service in the consumer VNet
Central private DNS in the hub, linked to all VNets
Disable public network access on services
Which approach meets the requirements?

**Options:**

- **A.** A. Use service endpoints; keep public access; rely on RBAC
- **B.** B. One PE to Storage; share for KV/SQL via hosts files
- **C.** C. Create PEs in the hub; leave services public; advertise routes
- **D.** D. Create a private endpoint per service in the spoke; host Private DNS zones in hub and link VNets; disable public network access ✅

**Correct answer:** D

**Explanation:**

Private Link maps each PaaS service/subresource (e.g., blob, vault, sqlServer) to a distinct NIC with a private IP in the consumer VNet—the VNet where your workloads run. Because Storage, Key Vault, and SQL are different services, you create one private endpoint per service in the spoke so the App Service/VM can talk to each over a first-party, private IP path. Name resolution then must return those private IPs for everyone (hub and all spokes). The scalable way is to host the three Private DNS zones (privatelink.blob.core.windows.net, privatelink.vaultcore.azure.net, privatelink.database.windows.net) once in the hub and link every VNet that needs to resolve them. When you create each PE, the proper A-records are added to the matching zone; all linked VNets immediately resolve FQDNs to the private addresses. Finally, set each service to deny public network access (or “selected networks” with only the PE path). That prevents accidental fallback to the Internet and closes data-exfil paths while keeping RBAC/token auth unchanged.
Why the other options are incorrect
A: Service endpoints still traverse the public endpoint (just source-IP authorized) and never provide private IPs. This violates “no public exposure.”
B: A single PE cannot be reused across different services. Host file hacks don’t scale, break TLS/SAN validation, and are operationally brittle.
C: PEs are designed to live in the consumer VNet where the callers are; leaving services public defeats the point and breaks Private Link DNS behavior.

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

### Question 23

Scenario

You need internal load balancing for three VMs in a spoke VNet. Requirements: Standard SKU, static, zone-redundant front end; backend NICs; TCP 443 probe; NSGs must allow probes; no public exposure.

Question

Which row meets the requirements?

Candidates

**Options:**

- **A.** A. Row A
- **B.** B. Row B ✅
- **C.** C. Row C
- **D.** D. Row D

**Correct answer:** B

**Explanation:**

A **Standard** internal Load Balancer supports **NIC-based** backend pools for standalone VMs, **TCP** health probes, and a **static** private frontend address chosen from the subnet—exactly what you need for stability (no address churn during maintenance). Standard LB also integrates with **NSGs**: the probe originates from the **AzureLoadBalancer** service tag, so your subnet/VM NSGs must allow probe traffic to the **probe port** (443 here) or instances will be marked **Unhealthy** and excluded from distribution. “Zone-redundant” ensures the frontend/LB plane remains available across zonal outages in supported regions while your VM backends are placed appropriately. Row B is the single candidate that is internal, Standard, static, zone-redundant, uses NIC backends, and has the correct probe.

Why the other options are incorrect

- A: Public + Basic + dynamic + HTTP 80 is the opposite of your private, Standard, static, and 443 requirements.

- C: Internal/Standard is fine, but using a **dynamic** frontend violates the “static” requirement and risks IP churn.

- D: An **internal** load balancer cannot and should not expose a public IP; that breaks “no public exposure.”

---

### Question 24

Scenario
A single Linux container must run privately in an existing VNet/subnet with no public IP. The image is in a private Azure Container Registry. Security forbids embedding registry credentials in scripts; the app also needs two secure environment variables that shouldn’t appear in command output or logs. You want the fewest moving parts.
Requirements
ACI in a VNet with private IP only
Pull from ACR without passing credentials on the CLI
Provide secrets as secure environment variables
Which approach meets the requirements?

**Options:**

- **A.** A.Create a user-assigned managed identity (UAMI); grant it AcrPull on the registryaz container create into the subnet with --assign-identity (UAMI) and no public IPPass secrets as secure environment variables; image pull via MI (no creds on CLI) ✅
- **B.** B.Enable anonymous pull on ACRaz container create with a public IP/FQDNSet secrets as standard env vars
- **C.** C.Enable the ACR admin useraz container create with --registry-username/--registry-passwordExpose container publicly
- **D.** D.Stand up AKSStore ACR creds in Kubernetes SecretsPublish via public load balancer

**Correct answer:** A

**Explanation:**

ACI with VNet integration delivers a private IP-only container group. Granting AcrPull to a managed identity allows the runtime to authenticate to ACR without passing any credentials on the CLI; –assign-identity binds that identity to the group so pulls succeed silently. Secure environment variables in ACI are masked from command output, letting you inject sensitive config without leaking in logs. This pattern achieves private networking, credential-less pulls, and secret handling with minimal components and operational burden.
Why the other options are incorrect
B: Anonymous pulls and a public IP contradict private networking and credential hygiene; plain env vars risk exposure.
C: The admin user is a shared static secret; embedding it on the CLI leaks credentials to cloud shells, history, or pipelines.
D: AKS introduces significant overhead for a single container and typically publishes via a load balancer unless you add extra private networking constructs.

---

### Question 29

Scenario
On-prem (via VPN) must resolve Azure private endpoints (Blob/KV/SQL) to private IPs. You want a hub-and-spoke DNS pattern without running your own DNS servers. On-prem should use conditional forwarding for the privatelink zones.
Which TWO actions meet the goal?

**Options:**

- **A.** A. Create Public DNS zones for privatelink domains
- **B.** B. Deploy Azure DNS Private Resolver in hub with an inbound endpoint; on-prem forward privatelink queries to it ✅
- **C.** C. Create Private DNS zones for privatelink domains and link them to hub and spokes ✅
- **D.** D. Use hosts files on on-prem machines
- **E.** E. Add a Resolver outbound endpoint/ruleset for on-prem zones
- **F.** F. Make each spoke a DNS server

**Correct answer:** B, C

**Explanation:**

You need authoritative private zones for the Private Link domains and a single Azure-native ingress path for on-prem queries. Step 1: create Private DNS zones for each privatelink.* domain and link them to the hub VNet and every spoke VNet; this ensures any Azure workload resolves Storage/KV/SQL FQDNs to private IPs returned by the corresponding private endpoints. Step 2: deploy Azure DNS Private Resolver with an inbound endpoint in the hub VNet. Your on-prem DNS servers add conditional forwarders for the privatelink.* zones pointing to that inbound endpoint’s private IP. Result: on-prem ? hub resolver ? Azure Private DNS zones ? private IPs for PEs, with no IaaS DNS VMs to patch, scale, or secure. This centralizes DNS, keeps management simple, and works for all current/future spokes that link to the zones.
Why the other options are incorrect
A: privatelink.* must be Private zones; making them Public exposes records to the Internet and breaks Private Link resolution.
D: Hosts files don’t scale, drift instantly, and cannot track record changes when PEs are added/removed.
E: Outbound endpoints/rulesets solve Azure?on-prem lookups; your requirement is on-prem?Azure, so you need an inbound endpoint.
F: VNets are not DNS servers. You still need zones and a resolver to handle on-prem queries.

---

### Question 30

Scenario
A production VM currently runs in subscription A, resource group rg-app, in Australia East. You must move it to subscription B in Australia Southeast with minimal manual steps and orchestrated dependency handling (NIC, public IP, NSG, disks). You also want validation before cutover and the ability to retain the original resources until commit.
Proposed solution
Use Azure Resource Mover to move the VM and its dependent resources from Australia East to Australia Southeast, targeting subscription B; perform prepare, initiate move, commit, then decommission source resources.
Does the proposed solution meet the goal?

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

Azure Resource Mover is the first-party orchestrator for cross-region moves of Azure resources, including VMs, and supports cross-subscription targeting. It discovers and links dependencies (NICs, disks, NSGs, public IPs), performs validations, and stages the move so you can test/prepare, then commit with predictable downtime. It also preserves a rollback window until you commit, aligning with the need for safe cutover and minimal manual wiring.
Why the other option is incorrect
No: Direct “Move” operations do not support changing regions for VMs; manual export/redeploy lacks the orchestration, validation, and commit/rollback workflow required here.

---

### Question 31

Scenario
Contoso will host a Linux containerized web API in Australia East. The platform mandates: private outbound to VNets (database via private endpoints), multi-AZ resilience, and minimal cold starts. The team wants a multi-tenant offering (not ASE), zone redundancy, and room to scale out during traffic spikes.
Requirements
Linux containers; Premium features
Regional VNet integration (outbound)
Zone-redundant plan; scale-out capable
Which App Service plan choice best meets the requirements?

**Options:**

- **A.** A. Free (F1) Linux; no VNet; single-zone
- **B.** B. Basic (B1) Linux; VNet integration; single-zone
- **C.** C. Isolated v2 (ASEv3) Linux; private environment (overkill)
- **D.** D. Premium v3 Linux (P1v3+) with regional VNet integration and zone redundancy ✅

**Correct answer:** D

**Explanation:**

Premium v3 (Linux) provides the performance envelope for container apps, supports regional VNet integration for outbound private access, and offers zone-redundant App Service plans in supported regions. It remains multi-tenant (not ASE), scales out elastically, and reduces cold-start impact versus lower SKUs. This aligns with container, networking, and resiliency requirements without the cost/complexity of ASE.
Why the other options are incorrect
A: Free lacks VNet integration and scale/perf; not production-grade.
B: Basic supports VNet integration but not zone redundancy and is capacity-limited for spiky APIs.
C: ASEv3 is isolated and powerful but unnecessary (and costly) when multi-tenant Premium v3 meets all needs.

---

### Question 33

Contoso is rolling out an analytics workload in Australia East. The app runs in one subnet and must reach a StorageV2 account privately. Security requires only the app (via private endpoint) and select trusted Microsoft services (e.g., Backup/Monitor) to reach the account; all other Internet traffic must be blocked. The team also wants TLS 1.2+ and public blob access disabled, and RBAC for data (no shared keys in code).
Requirements
Private endpoint from the app subnet
Allow trusted Microsoft services
No public IP allowlists (everything else blocked)
TLS 1.2+; disable public blob access; RBAC for data
Which configuration meets the requirements?

**Options:**

- **A.** A. Allow all networks; rely on RBAC; enforce TLS 1.2
- **B.** B. Selected networks; service endpoints only; disable public access
- **C.** C. Selected networks; private endpoint; enable “Allow trusted Microsoft services”; leave IP allowlist empty; enforce TLS 1.2; disable public blob access ✅
- **D.** D. Public network access: Disabled; no exceptions

**Correct answer:** C

**Explanation:**

“Selected networks” enables the firewall so the public endpoint is denied by default. A private endpoint gives the VNet a private IP path that bypasses the public surface. Enabling “Allow trusted Microsoft services” adds the narrow exception you need for first-party services (e.g., Backup/Monitor) without opening the Internet. Keeping the public IP allowlist empty prevents arbitrary public access, while TLS 1.2+ and disabling public blob access harden the account. RBAC handles data authorization without exposing shared keys.
Why the other options are incorrect
A: “Allow all networks” leaves the public endpoint open; RBAC controls identity, not network exposure.
B: Service endpoints ? private endpoints; they don’t meet the private access requirement and don’t automatically admit trusted services.
D: Disabling public network access also blocks the trusted-services exception you need for operations.

---

### Question 34

Scenario
A hub VNet has a VPN gateway to on-prem. A spoke VNet hosts workloads that must reach on-prem through the hub’s gateway. There are no NVAs; only Azure’s VPN gateway is used. Traffic between spokes should not be transitive unless explicitly peered via the hub using supported features.
Which TWO peering settings are required to let the spoke use the hub’s VPN gateway?

**Options:**

- **A.** A. Hub?Spoke: Allow forwarded traffic
- **B.** B. Hub?Spoke: Allow gateway transit ✅
- **C.** C. Hub?Spoke: Use remote gateways
- **D.** D. Spoke?Hub: Allow forwarded traffic
- **E.** E. Spoke?Hub: Use remote gateways ✅
- **F.** F. Spoke?Hub: Allow gateway transit

**Correct answer:** B, E

**Explanation:**

Gateway transit is offered by the hub to its peers; the hub peering must be set to Allow gateway transit. The spoke must consume that gateway by enabling Use remote gateways on its peering to the hub. With those two flags combined, the spoke routes to on-prem via the hub’s Azure VPN Gateway. “Allow forwarded traffic” isn’t needed here because an Azure VPN Gateway handles the routing, not an NVA.
Why the other options are incorrect
A/D: “Allow forwarded traffic” is for NVAs/forwarders; not required for Azure VPN gateway transit.
C/F: These are reversed; the hub doesn’t “Use remote gateways,” and the spoke doesn’t “Allow gateway transit.”

---

### Question 35

An app in a VNet uses a private endpoint to a storage account. Security wants only this app and trusted Microsoft services (e.g., Azure Backup/Monitor) to reach the account; everything else on the public Internet must be blocked.
Requirements
Private endpoint from the app subnet
Allow trusted Microsoft services
Block other public traffic
Which configuration fits?

**Options:**

- **A.** A. Public network access: Disabled; no endpoints
- **B.** B. Selected networks; add VNet subnet only
- **C.** C. Selected networks; private endpoint; enable “Allow trusted Microsoft services”; no public IP ranges ✅
- **D.** D. Allow all networks; rely on RBAC only

**Correct answer:** C

**Explanation:**

Choice C is correct. “Selected networks” turns on the storage firewall so public traffic is denied by default unless explicitly allowed. Creating a private endpoint gives the VNet a private IP path that ignores the public firewall. Enabling “Allow trusted Microsoft services” carves a narrow exception for specific first-party services that must reach the account for backups, monitoring, import/export, etc. Leaving the IP allowlist empty prevents any arbitrary public IP from getting through, so only the private endpoint and trusted services work. This is the precise combo for “PE + trusted services only.”
Why the others are incorrect
A: Public network access “Disabled” blocks all public traffic—including trusted Microsoft services. You would break backup/monitoring scenarios that rely on the trusted services exception.
B: Adding the VNet subnet (service endpoint) doesn’t apply to private endpoints and still blocks trusted services unless you toggle the specific allow-list; also, private endpoint is the recommended pattern over service endpoints for strict isolation.
D: “Allow all networks” leaves the account exposed to the Internet. RBAC governs who, not where; it does not enforce network isolation.

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

### Question 40

Scenario
You need a public endpoint for a Standard Load Balancer that is static, zone-redundant across Zones 1–3 in Australia East, and compatible with production security features. The IP must not change during maintenance, and you prefer the modern SKU.
Which public IP configuration should you create?

**Options:**

- **A.** A. Basic SKU, Dynamic, any zone
- **B.** B. Basic SKU, Static, Zone 1
- **C.** C. Standard SKU, Dynamic, Zone-redundant
- **D.** D. Standard SKU, Static, Zone-redundant ✅

**Correct answer:** D

**Explanation:**

A Standard public IP is required for Standard Load Balancers and supports advanced security/feature parity. Static allocation guarantees the IP doesn’t change on maintenance. Choosing Zone-redundant makes the address resilient across zones in the same region (when supported), so LB front ends remain available even if a zone is down. This matches the required stability and resiliency.
Why the other options are incorrect
A/B: Basic SKU lacks many production features and isn’t supported for Standard LB front ends; dynamic can change on updates.
C: Standard SKU is right, but Dynamic allocation isn’t supported for Standard public IPs (Standard is static by design) and does not meet “must not change”.

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

### Question 42

Scenario
A spoke VNet hosts web/app subnets. All egress from those subnets must traverse a central NVA firewall in the hub VNet; direct Internet breakout from spokes is forbidden. The NVA has a default route to the Internet and rules for egress. No NVAs exist in spokes. The VPN gateway in the hub advertises on-prem prefixes (BGP). You must force all Internet-bound traffic from the spoke subnets through the hub NVA while keeping on-prem routes from BGP intact.
Requirements
Steer 0.0.0.0/0 from spoke subnets ? hub NVA
Preserve BGP-learned on-prem routes
No direct Internet from spokes
Which configuration meets the requirements?

**Options:**

- **A.** A. Associate a route table to the hub gateway subnet with 0.0.0.0/0 ? Internet
- **B.** B. Enable service endpoints to Storage and let system routes handle Internet
- **C.** C. On each spoke subnet: route 0.0.0.0/0 ? Virtual network gateway; disable BGP propagation
- **D.** D. On each spoke subnet: associate a route table with 0.0.0.0/0 next hop = Virtual appliance (hub NVA’s private IP); keep BGP propagation enabled ✅

**Correct answer:** D

**Explanation:**

To force egress via an NVA, you place a UDR on each spoke subnet with a default route 0.0.0.0/0 ? Virtual appliance pointing to the NVA’s private IP in the hub. That diverts all unknown destinations (i.e., Internet) to the firewall, which can then SNAT/egress under centralized control. Leaving BGP route propagation enabled on the route table ensures on-prem prefixes learned from the hub gateway remain in the effective routing table so spoke-to-on-prem traffic keeps using the gateway path, not the NVA default. This yields split behavior: on-prem via BGP routes; Internet via NVA UDR.
Why the other options are incorrect
A: A route on the gateway subnet doesn’t control spoke egress; it also points to “Internet,” bypassing the NVA requirement.
B: Service endpoints only affect service traffic to specific PaaS services; they don’t solve default Internet egress control.
C: Sending 0.0.0.0/0 to the virtual network gateway conflicts with BGP handling and isn’t how you forward Internet via an NVA; disabling BGP propagation would hide on-prem routes from the spoke.

---

### Question 45

Scenario
A Standard internal Load Balancer on TCP 443 isn’t distributing traffic; only one VM is hit. Use Azure-native tools to verify path, backend health, and NSG rules before touching app code. NSG is on the subnet.
Select THREE actions that together isolate the issue correctly.

**Options:**

- **A.** A. Change LB SKU to Basic
- **B.** B. Check Backend health and probe status per NIC ✅
- **C.** C. Ensure NSG allows AzureLoadBalancer to the probe port ✅
- **D.** D. Disable the NSG entirely
- **E.** E. Verify each VM listens/responds on the probe endpoint (e.g., TCP 443 or specific HTTP path) ✅
- **F.** F. Use Connection troubleshoot to the LB private IP:443

**Correct answer:** B, C, E

**Explanation:**

When a Standard LB sends traffic to only one VM, the usual cause is that the others are Unhealthy. Start in the LB’s Backend health blade to inspect each backend NIC: it shows real-time probe status and often a textual reason (timeout, connection refused, wrong HTTP code/path). If a backend is Unhealthy, it won’t receive flows, even if the app is up on another port. Next, confirm your NSG allows the AzureLoadBalancer service tag to the probe port. A custom deny that overrides defaults will silently block probes and make instances Unhealthy. Finally, validate that each VM actually listens and responds on the probe endpoint you configured. For a TCP probe, ensure the service returns SYN-ACK on 443; for an HTTP probe, confirm the exact path returns a 200 OK (not a redirect/403/health-off response). Only when probes pass will the LB include that backend in the distribution set.
Why the other options are incorrect
A: Downgrading to Basic removes features and doesn’t address misconfigured probes, closed ports, or NSG blocks.
D: Disabling the NSG is a blunt instrument that hides the root cause and violates change control; precise allow rules are the right fix.
F: Connection troubleshoot validates end-to-end reachability to the frontend IP:port, but it does not tell you why specific backends are excluded. Probe health is what drives per-instance inclusion.

---

