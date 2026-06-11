# 02-AZ-104_ Manage identities and governance in Azure

> Combined export for section `02-AZ-104_ Manage identities and governance in Azure` from course `Microsoft Azure Administrator`.

## 01-Understand Microsoft Entra ID

### 01-Introduction

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/01-Understand Microsoft Entra ID/01-Introduction.md`*

# Introduction

**Module:** Understand Microsoft Entra ID

**Source:** https://learn.microsoft.com/en-us/training/modules/understand-azure-active-directory/1-introduction

---

# Introduction

Welcome to the Microsoft Entra ID learning module! Microsoft Entra ID is a cloud-based identity and access management service provided by Microsoft. Microsoft Entra ID is a comprehensive solution for managing identities, enforcing access policies, and securing your applications and data in the cloud and on-premises.

This module aims to equip you with a comprehensive understanding of the following:

- Describe Microsoft Entra ID.
- Compare Microsoft Entra ID to Active Directory Domain Services (AD DS).
- Describe how Microsoft Entra ID is used as a directory for cloud apps.
- Describe Microsoft Entra ID P1 and P2.
- Describe Microsoft Entra Domain Services.

Whether you're a beginner or an experienced IT professional, this module provides you with the knowledge and skills necessary to understand Microsoft Entra ID effectively. So, let's explore the exciting world of Microsoft Entra ID!

---

### 02-Examine Microsoft Entra ID

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/01-Understand Microsoft Entra ID/02-Examine Microsoft Entra ID.md`*

# Examine Microsoft Entra ID

**Module:** Understand Microsoft Entra ID

**Source:** https://learn.microsoft.com/en-us/training/modules/understand-azure-active-directory/2-examine-azure-active-directory

---

# Examine Microsoft Entra ID

Students should be familiar with Active Directory Domain Services (AD DS or traditionally called just "Active Directory"). AD DS is a directory service that provides the methods for storing directory data, such as user accounts and passwords, and makes this data available to network users, administrators, and other devices and services. It runs as a service on Windows Server, referred to as a domain controller.

Microsoft Entra ID is part of the platform as a service (PaaS) offering and operates as a Microsoft-managed directory service in the cloud. It’s not a part of the core infrastructure that customers own and manage, nor is it an Infrastructure as a service offering. While this implies that you have less control over its implementation, it also means that you don’t have to dedicate resources to its deployment or maintenance.

With Microsoft Entra ID, you also have access to a set of features that aren’t natively available in AD DS, such as support for multi-factor authentication, identity protection, and self-service password reset.

You can use Microsoft Entra ID to provide more secure access to cloud-based resources for organizations and individuals by:

- Configuring access to applications
- Configuring single sign-on (SSO) to cloud-based SaaS applications
- Managing users and groups
- Provisioning users
- Enabling federation between organizations
- Providing an identity management solution
- Identifying irregular sign-in activity
- Configuring multi-factor authentication
- Extending existing on-premises Active Directory implementations to Microsoft Entra ID
- Configuring Application Proxy for cloud and local applications
- Configuring Conditional Access for users and devices

![Diagram that shows the Microsoft Entra Connect Stack.](https://learn.microsoft.com/en-us/training/wwl-azure/understand-azure-active-directory/media/azure-active-directory-connect-stack-f1aae359.png)

Microsoft Entra constitutes a separate Azure service. Its most elementary form, which any new Azure subscription includes automatically, doesn't incur any extra cost and is referred to as the Free tier. If you subscribe to any Microsoft Online business services (for example, Microsoft 365 or Microsoft Intune), you automatically get Microsoft Entra ID with access to all the Free features.

Note

By default, when you create a new Azure subscription by using a Microsoft account, the subscription automatically includes a new Microsoft Entra tenant named Default Directory.

Some of the more advanced identity management features require paid versions of Microsoft Entra ID, offered in the form of Basic and Premium tiers. Some of these features are also automatically included in Microsoft Entra instances generated as part of Microsoft 365 subscriptions. Differences between Microsoft Entra versions are discussed later in this module.

Implementing Microsoft Entra ID isn't the same as deploying virtual machines in Azure, adding AD DS, and then deploying some domain controllers for a new forest and domain. Microsoft Entra ID is a different service, much more focused on providing identity management services to web-based apps, unlike AD DS, which is more focused on on-premises apps.

### Microsoft Entra tenants

Unlike AD DS, Microsoft Entra ID is multi-tenant by design and is implemented specifically to ensure isolation between its individual directory instances. It’s the world’s largest multi-tenant directory, hosting over a million directory services instances, with billions of authentication requests per week. The term tenant in this context typically represents a company or organization that signed up for a subscription to a Microsoft cloud-based service such as Microsoft 365, Intune, or Azure, each of which uses Microsoft Entra ID. However, from a technical standpoint, the term tenant represents an individual Microsoft Entra instance. Within an Azure subscription, you can create multiple Microsoft Entra tenants. Having multiple Microsoft Entra tenants might be convenient if you want to test Microsoft Entra functionality in one tenant without affecting the others.

At any given time, an Azure subscription must be associated with one, and only one, Microsoft Entra tenant. This association allows you to grant permissions to resources in the Azure subscription (via RBAC) to users, groups, and applications that exist in that particular Microsoft Entra tenant.

Note

You can associate the same Microsoft Entra tenant with multiple Azure subscriptions. This allows you to use the same users, groups, and applications to manage resources across multiple Azure subscriptions.

Each Microsoft Entra tenant is assigned the default Domain Name System (DNS) domain name, consisting of a unique prefix. The prefix, derived from the name of the Microsoft account you use to create an Azure subscription or provided explicitly when creating a Microsoft Entra tenant, is followed by the **onmicrosoft.com** suffix. Adding at least one custom domain name to the same Microsoft Entra tenant is possible and common. This name utilizes the DNS domain namespace that the corresponding company or organization owns. The Microsoft Entra tenant serves as the security boundary and a container for Microsoft Entra objects such as users, groups, and applications. A single Microsoft Entra tenant can support multiple Azure subscriptions.

### Microsoft Entra schema

The Microsoft Entra schema contains fewer object types than that of AD DS. Most notably, it doesn't include a definition of the computer class, although it does include the device class. The process of joining devices to Microsoft Entra differs considerably from the process of joining computers to AD DS. The Microsoft Entra schema is also easily extensible, and its extensions are fully reversible.

The lack of support for the traditional computer domain membership means that you can't use Microsoft Entra ID to manage computers or user settings by using traditional management techniques, such as Group Policy Objects (GPOs). Instead, Microsoft Entra ID and its services define a concept of modern management. Microsoft Entra ID’s primary strength lies in providing directory services; storing and publishing user, device, and application data; and handling the authentication and authorization of the users, devices, and applications. The effectiveness and efficiency of these features are apparent based on existing deployments of cloud services such as Microsoft 365, which rely on Microsoft Entra ID as their identity provider and support millions of users.

Microsoft Entra ID doesn't include the organizational unit (OU) class, which means that you can't arrange its objects into a hierarchy of custom containers, which is frequently used in on-premises AD DS deployments. However, this isn't a significant shortcoming, because OUs in AD DS are used primarily for Group Policy scoping and delegation. You can accomplish equivalent arrangements by organizing objects based on their group membership.

Objects of the Application and servicePrincipal classes represent applications in Microsoft Entra ID. An object in the Application class contains an application definition and an object in the servicePrincipal class constitutes its instance in the current Microsoft Entra tenant. Separating these two sets of characteristics allows you to define an application in one tenant and use it across multiple tenants by creating a service principal object for this application in each tenant. Microsoft Entra ID creates the service principal object when you register the corresponding application in that Microsoft Entra tenant.

---

### 03-Compare Microsoft Entra ID and Active Directory Domain Services

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/01-Understand Microsoft Entra ID/03-Compare Microsoft Entra ID and Active Directory Domain Services.md`*

# Compare Microsoft Entra ID and Active Directory Domain Services

**Module:** Understand Microsoft Entra ID

**Source:** https://learn.microsoft.com/en-us/training/modules/understand-azure-active-directory/3-compare-azure-active-directory-domain-services

---

# Compare Microsoft Entra ID and Active Directory Domain Services

You could view Microsoft Entra ID simply as the cloud-based counterpart of AD DS; however, while Microsoft Entra ID and AD DS share some common characteristics, there are several significant differences between them.

### Characteristics of AD DS

AD DS is the traditional deployment of Windows Server-based Active Directory on a physical or virtual server. Although AD DS is commonly considered being primarily a directory service, it’s only one component of the Windows Active Directory suite of technologies, which also includes Active Directory Certificate Services (AD CS), Active Directory Lightweight Directory Services (AD LDS), Active Directory Federation Services (AD FS), and Active Directory Rights Management Services (AD RMS).

When comparing AD DS with Microsoft Entra ID, it’s important to note the following characteristics of AD DS:

- AD DS is a true directory service, with a hierarchical X.500-based structure.
- AD DS uses Domain Name System (DNS) for locating resources such as domain controllers.
- You can query and manage AD DS by using Lightweight Directory Access Protocol (LDAP) calls.
- AD DS primarily uses the Kerberos protocol for authentication.
- AD DS uses OUs and GPOs for management.
- AD DS includes computer objects, representing computers that join an Active Directory domain.
- AD DS uses trusts between domains for delegated management.

You can deploy AD DS on an Azure virtual machine to enable scalability and availability for an on-premises AD DS. However, deploying AD DS on an Azure virtual machine doesn't make any use of Microsoft Entra ID.

Note

Deploying AD DS on an Azure virtual machine requires one or more extra Azure data disks because you shouldn't use drive C for AD DS storage. These disks are needed to store the AD DS database, logs, and the sysvol folder. The Host Cache Preference setting for these disks must be set to None.

### Characteristics of Microsoft Entra ID

Although Microsoft Entra ID has many similarities to AD DS, there are also many differences. It’s important to realize that using Microsoft Entra isn’t the same as deploying an Active Directory domain controller on an Azure virtual machine and adding it to your on-premises domain.

When comparing Microsoft Entra ID with AD DS, it’s important to note the following characteristics of Microsoft Entra ID:

- Microsoft Entra ID is primarily an identity solution, and it’s designed for internet-based applications by using HTTP (port 80) and HTTPS (port 443) communications.
- Microsoft Entra ID is a multi-tenant directory service.
- Microsoft Entra users and groups are created in a flat structure, and there are no OUs or GPOs.
- You can't query Microsoft Entra ID by using LDAP; instead, Microsoft Entra ID uses the REST API over HTTP and HTTPS.
- Microsoft Entra ID doesn't use Kerberos authentication; instead, it uses HTTP and HTTPS protocols such as SAML, WS-Federation, and OpenID Connect for authentication, and uses OAuth for authorization.
- Microsoft Entra ID includes federation services, and many third-party services such as Facebook are federated with and trust Microsoft Entra ID.

---

### 04-Examine Microsoft Entra ID as a directory service for cloud apps

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/01-Understand Microsoft Entra ID/04-Examine Microsoft Entra ID as a directory service for cloud apps.md`*

# Examine Microsoft Entra ID as a directory service for cloud apps

**Module:** Understand Microsoft Entra ID

**Source:** https://learn.microsoft.com/en-us/training/modules/understand-azure-active-directory/4-examine-azure-directory-service-cloud-apps

---

# Examine Microsoft Entra ID as a directory service for cloud apps

When you deploy cloud services such as Microsoft 365 or Intune, you also need to have directory services in the cloud to provide authentication and authorization for these services. Because of this, each cloud service that needs authentication will create its own Microsoft Entra tenant. When a single organization uses more than one cloud service, it’s much more convenient for these cloud services to use a single cloud directory instead of having separate directories for each service.

It’s now possible to have one identity service that covers all Microsoft cloud-based services, such as Microsoft 365, Azure, Microsoft Dynamics 365, and Intune. Microsoft Entra ID provides developers with centralized authentication and authorization for applications in Azure by using other identity providers or on-premises AD DS. Microsoft Entra ID can provide users with an SSO experience when using applications such as Facebook, Google services, Yahoo, or Microsoft cloud services.

The process of implementing Microsoft Entra ID support for custom applications is rather complex and beyond the scope of this course. However, the Azure portal and Microsoft Visual Studio 2013 and later make the process of configuring such support more straightforward.

In particular, you can enable Microsoft Entra authentication for the Web Apps feature of Azure App Service directly from the Authentication/Authorization blade in the Azure portal. By designating the Microsoft Entra tenant, you can ensure that only users with accounts in that directory can access the website. It’s possible to apply different authentication settings to individual deployment slots.

For more information, see [Configure your App Service app to use Microsoft Entra login](/en-us/azure/app-service/configure-authentication-provider-aad).

---

### 05-Compare Microsoft Entra ID P1 and P2 plans

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/01-Understand Microsoft Entra ID/05-Compare Microsoft Entra ID P1 and P2 plans.md`*

# Compare Microsoft Entra ID P1 and P2 plans

**Module:** Understand Microsoft Entra ID

**Source:** https://learn.microsoft.com/en-us/training/modules/understand-azure-active-directory/5-compare-azure-premium-p1-p2-plans

---

# Compare Microsoft Entra ID P1 and P2 plans

The Microsoft Entra ID P1 or P2 tier provides extra functionality as compared to the Free and Office 365 editions. However, premium versions require additional cost per user provisioning. Microsoft Entra ID P1 or P2 comes in two versions P1 and P2. You can procure it as an extra license or as a part of the Microsoft Enterprise Mobility + Security, which also includes the license for Azure Information Protection and Intune.

Microsoft provides a free trial period that can be used to experience the full functionality of the Microsoft Entra ID P2 edition. The following features are available with the Microsoft Entra ID P1 edition:

- **Self-service group management**. It simplifies the administration of groups where users are given the rights to create and manage the groups. End users can create requests to join other groups, and group owners can approve requests and maintain their groups’ memberships.
- **Advanced security reports and alerts**. You can monitor and protect access to your cloud applications by viewing detailed logs that show advanced anomalies and inconsistent access pattern reports. Advanced reports are machine learning based and can help you gain new insights to improve access security and respond to potential threats.
- **Multi-factor authentication**. Full multi-factor authentication (MFA) works with on-premises applications (using virtual private network [VPN], RADIUS, and others), Azure, Microsoft 365, Dynamics 365, and third-party Microsoft Entra gallery applications. It doesn't work with non-browser off-the-shelf apps, such as Microsoft Outlook. Full multi-factor authentication is covered in more detail in the following units in this lesson.
- **Microsoft Identity Manager (MIM) licensing**. MIM integrates with Microsoft Entra ID P1 or P2 to provide hybrid identity solutions. MIM can bridge multiple on-premises authentication stores such as AD DS, LDAP, Oracle, and other applications with Microsoft Entra ID. This provides consistent experiences to on-premises line-of-business (LOB) applications and SaaS solutions.
- **Enterprise SLA of 99.9%**. You're guaranteed at least 99.9% availability of the Microsoft Entra ID P1 or P2 service. The same SLA applies to Microsoft Entra Basic.
- **Password reset with writeback**. Self-service password reset follows the Active Directory on-premises password policy.
- **Cloud App Discovery feature of Microsoft Entra ID**. This feature discovers the most frequently used cloud-based applications.
- **Conditional Access based on device, group, or location**. This lets you configure conditional access for critical resources, based on several criteria.
- **Microsoft Entra Connect Health**. You can use this tool to gain operational insight into Microsoft Entra ID. It works with alerts, performance counters, usage patterns, and configuration settings, and presents the collected information in the Microsoft Entra Connect Health portal.

In addition to these features, the Microsoft Entra ID P2 license provides extra functionalities:

- **Microsoft Entra ID Protection**. This feature provides enhanced functionalities for monitoring and protecting user accounts. You can define user risk policies and sign-in policies. In addition, you can review users’ behavior and flag users for risk.
- **Microsoft Entra Privileged Identity Management**. This functionality lets you configure additional security levels for privileged users such as administrators. With Privileged Identity Management, you define permanent and temporary administrators. You also define a policy workflow that activates whenever someone wants to use administrative privileges to perform some task.

Note

Plans change frequently. Check Microsoft's website for the current plans and capabilities.

---

### 06-Examine Microsoft Entra Domain Services

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/01-Understand Microsoft Entra ID/06-Examine Microsoft Entra Domain Services.md`*

# Examine Microsoft Entra Domain Services

**Module:** Understand Microsoft Entra ID

**Source:** https://learn.microsoft.com/en-us/training/modules/understand-azure-active-directory/6-examine-azure-domain-services

---

# Examine Microsoft Entra Domain Services

In most organizations today, line-of-business (LOB) applications are deployed on computers and devices that are domain members. These organizations use AD DS–based credentials for authentication, and Group Policy manages them. When you consider moving these apps to run in Azure, one key issue is how to provide authentication services to these apps. To satisfy this need, you can choose to implement a site-to-site virtual private network (VPN) between your local infrastructure and the Azure IaaS, or you can deploy replica domain controllers from your local AD DS as virtual machines (VMs) in Azure. These approaches can entail additional costs and administrative effort. Additionally, the difference between these two approaches is that with the first option, authentication traffic will cross the VPN, while in the second option, replication traffic will cross the VPN and authentication traffic stays in the cloud.

Microsoft provides Microsoft Entra Domain Services as an alternative to these approaches. This service, which runs as part of the Microsoft Entra ID P1 or P2 tier, provides domain services such as Group Policy management, domain joining, and Kerberos authentication to your Microsoft Entra tenant. These services are fully compatible with locally deployed AD DS, so you can use them without deploying and managing additional domain controllers in the cloud.

![Diagram that shows the Microsoft Entra Domain Services Overview.](https://learn.microsoft.com/en-us/training/wwl-azure/understand-azure-active-directory/media/azure-active-directory-virtual-network-340081c4.png)

Because Microsoft Entra ID can integrate with your local AD DS, when you implement Microsoft Entra Connect, users can utilize organizational credentials in both on-premises AD DS and in Microsoft Entra Domain Services. Even if you don’t have AD DS deployed locally, you can choose to use Microsoft Entra Domain Services as a cloud-only service. This enables you to have similar functionality of locally deployed AD DS without having to deploy a single domain controller on-premises or in the cloud. For example, an organization can choose to create a Microsoft Entra tenant and enable Microsoft Entra Domain Services, and then deploy a virtual network between its on-premises resources and the Microsoft Entra tenant. You can enable Microsoft Entra Domain Services for this virtual network so that all on-premises users and services can use domain services from Microsoft Entra ID.

Microsoft Entra Domain Services provides several benefits for organizations, such as:

- Administrators don't need to manage, update, and monitor domain controllers.
- Administrators don't need to deploy and manage Active Directory replication.
- There’s no need to have Domain Admins or Enterprise Admins groups for domains that Microsoft Entra ID manages.

If you choose to implement Microsoft Entra Domain Services, you need to be aware of the service's current limitations. These include:

- Only the base computer Active Directory object is supported.
- It’s not possible to extend the schema for the Microsoft Entra Domain Services domain.
- The organizational unit (OU) structure is flat and nested OUs aren't currently supported.
- There’s a built-in Group Policy Object (GPO), and it exists for computer and user accounts.
- It’s not possible to target OUs with built-in GPOs. Additionally, you can't use Windows Management Instrumentation filters or security-group filtering.

By using Microsoft Entra Domain Services, you can freely migrate applications that use LDAP, NTLM, or the Kerberos protocols from your on-premises infrastructure to the cloud. You can also use applications such as Microsoft SQL Server or Microsoft SharePoint Server on VMs or deploy them in the Azure IaaS, without needing domain controllers in the cloud or a VPN to local infrastructure.

You can enable Microsoft Entra Domain Services by using the Azure portal. This service charges per hour based on the size of your directory.

---

### 07-Summary

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/01-Understand Microsoft Entra ID/07-Summary.md`*

# Summary

**Module:** Understand Microsoft Entra ID

**Source:** https://learn.microsoft.com/en-us/training/modules/understand-azure-active-directory/8-summary

---

# Summary

Active Directory provides the core service of identity management. AD DS is the traditional on-premises solution, whereas Microsoft Entra ID is the cloud-based solution. Microsoft Entra ID is frequently adopted at first to facilitate authentication for cloud-based apps, but is capable of providing authentication services for the entire infrastructure. While they provide similar solutions, each offer different capability and are often used together to provide a best-of-breed solution. Microsoft Entra ID is offered as a free service, with paid tiers for additional capabilities, depending on an organization's needs.

### Learn more

- [What is Microsoft Entra ID?](/en-us/azure/active-directory/fundamentals/active-directory-whatis)
- [Compare Active Directory to Microsoft Entra ID](/en-us/azure/active-directory/fundamentals/active-directory-compare-azure-ad-to-ad)

---

## 02-Create, configure, and manage identities

### 01-Introduction

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/02-Create, configure, and manage identities/01-Introduction.md`*

# Introduction

**Module:** Create, configure, and manage identities

**Source:** https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/1-introduction

---

# Introduction

Transitioning workloads to the cloud involves more than just moving servers, websites, and data. Companies need to think about how to secure those resources, by defining authorized users. Next, companies need to ensure that users only have access to data that they need, that user authorization is limited only create services available to them, and that users only perform operations authorized for them to perform. Access to cloud-based workloads is controlled centrally in two ways. First by providing a definitive identity for each user that they use for every service. Then second by ensuring employees and vendors have enough access to do their jobs.

Microsoft Entra ID, the Microsoft cloud-based identity, and access management service, helps make these challenges easier to solve. Microsoft Entra ID provides end-to-end identity management; including single sign-on and multifactor authentication to help protect your users and your data. In this module, you learn the basics of creating, configuring, and managing users and groups of users. You also learn to manage licenses and device registration.

## Learning objectives

In this module, you'll:

- Create, configure, and manage users
- Create, configure, and manage groups
- Manage licenses
- Configure and manage device registration
- Explore custom security attributes and automatic provisioning

## Prerequisites

- Basic understanding of identity management
- Some experience with Active Directory a plus
- Experience with Zero Trust helpful

---

### 02-Create, configure, and manage users

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/02-Create, configure, and manage identities/02-Create, configure, and manage users.md`*

# Create, configure, and manage users

**Module:** Create, configure, and manage identities

**Source:** https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/2-users

---

# Create, configure, and manage users

Every user who needs access to resources needs a user account in Microsoft Entra ID. A user account contains all the information needed to authenticate the user during the sign-on process. Once authenticated, Microsoft Entra ID builds an access token to authorize the user and determine what resources they can access and what they can do with those resources.

You use the **Microsoft Entra admin center** to work with user objects. Keep in mind that you can only work with a single directory at a time. You can use the **Directory + Subscription** panel to switch directories. The admin center also has a **Switch directory** button in the toolbar, which makes it easy to switch to another available directory.

## View users

To view the Microsoft Entra users, select the **Users** entry under **Identity**, then open the **All Users** view. Take a minute to access the admin center and view your users. Notice the **User Type** column to see members and guests, as the following figure depicts.

![Screenshot of the All Users page of Microsoft Entra ID. See users and information about them.](https://learn.microsoft.com/en-us/training/wwl-sci/create-configure-manage-identities/media/all-users-dialog.png)

Typically, Microsoft Entra ID defines users in three ways:

- **Cloud identities** - These users exist only in Microsoft Entra ID. Examples are administrator accounts and users that you manage yourself. Their source is **Microsoft Entra ID** or **External Microsoft Entra directory** if the user is defined in another Microsoft Entra instance but needs access to subscription resources controlled by this directory. When these accounts are removed from the primary directory, they're deleted.
- **Directory-synchronized identities** - These users exist in an on-premises Active Directory. A synchronization activity brings these users into Microsoft Entra ID. **Microsoft Entra Cloud Sync** is the recommended synchronization tool for most organizations—it uses a lightweight cloud-managed agent and supports multiple disconnected forests. **Microsoft Entra Connect Sync** remains available for complex scenarios such as device synchronization or groups with more than 50,000 members. Their source is **Windows Server AD**.
- **Guest users** - These users exist outside your organization. Examples are accounts from other cloud providers and Microsoft accounts. Their source is **Invited user**. This type of account is useful when external vendors or contractors need access to your organization's resources. Once their help is no longer necessary, you can remove the account and all of their access.

---

### 03-Create, configure, and manage groups

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/02-Create, configure, and manage identities/03-Create, configure, and manage groups.md`*

# Create, configure, and manage groups

**Module:** Create, configure, and manage identities

**Source:** https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/5-groups

---

# Create, configure, and manage groups

A Microsoft Entra group helps organize users, which makes it easier to manage permissions. Using groups lets the resource owner (or Microsoft Entra directory owner), assign a set of access permissions to all the members of the group, instead of having to provide the rights one-by-one. Groups let you define a security boundary and then add and remove specific users to grant or deny access with a minimum amount of effort. Even better, Microsoft Entra ID supports the ability to define membership based on rules - such as what department a user works in, or the job title they have.

Microsoft Entra ID allows you to define two different types of groups.

- **Security groups** - the most common type of groups and are used to manage access to shared resources. Members of a security group can include users, devices, and service principals. For example, you can create a security group for a specific security policy. By doing it this way, you can give a set of permissions to all the members at once, instead of having to add permissions to each member individually. This option requires a Microsoft Entra administrator.
- **Microsoft 365 groups** - provide collaboration opportunities by giving members access to a shared mailbox, calendar, files, SharePoint site, and more. This option also lets you give people outside of your organization access to the group. This option is available to users and admins.

## View available groups

You can view all groups through the **Groups** item under **Identity** in the Microsoft Entra admin center. A new Microsoft Entra ID deployment has no groups defined.

![Screenshot of the Microsoft Entra ID view all groups page. Shows a list of several groups.](https://learn.microsoft.com/en-us/training/wwl-sci/create-configure-manage-identities/media/groups-1.png)

The second characteristic of a group that you need to be aware of is the **Membership Type**. This specifies how individual members are added to the group. The three types are:

- **Assigned** - members are added and maintained manually.
- **Dynamic User** - users are added and removed automatically based on rules that evaluate user attributes such as department, job title, or location.
- **Dynamic Device** - devices are added and removed automatically based on rules that evaluate device attributes. Applies to security groups only; Microsoft 365 groups support dynamic users but not dynamic devices.

## Dynamic groups

With dynamic membership, Microsoft Entra ID automatically adds or removes users or devices from a group based on rules you define. When a member's attributes change—for example, a user moves to a different department—all dynamic membership rules in the tenant are reevaluated, and the user is added to or removed from groups accordingly.

Dynamic membership requires a **Microsoft Entra ID P1** license (or Intune for Education for device-based rules).

![Screenshot of the Dynamic Group membership rule generator. Set up a rule that includes members from a specific place.](https://learn.microsoft.com/en-us/training/wwl-sci/create-configure-manage-identities/media/sc300-dynamic-groups.png)

For example, you can create a rule that automatically adds all users whose **Department** attribute equals "Marketing" to a Marketing security group, keeping membership current without manual updates.

---

### 04-Configure and manage device registration

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/02-Create, configure, and manage identities/04-Configure and manage device registration.md`*

# Configure and manage device registration

**Module:** Create, configure, and manage identities

**Source:** https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/7-configure-manage-device-registration

---

# Configure and manage device registration

With the proliferation of devices of all shapes and sizes and the proliferation of bring-your-own-device (BYOD), IT professionals are faced with two somewhat opposing goals:

- Allow end users to be productive wherever and whenever and on any device
- Protect the organization's assets

To protect these assets, IT-staff needs to first manage the device identities. IT-staff can build on the device identity with tools like Microsoft Intune to ensure standards for security and compliance are met. Microsoft Entra ID enables single sign-on to devices, apps, and services from anywhere through these devices.

- Your users get access to your organization's assets they need.
- Your IT-staff gets the controls they need to secure your organization.

## Microsoft Entra registered devices

The goal of Microsoft Entra registered devices is to provide your users with support for the BYOD or mobile device scenarios. In these scenarios, a user can access your organization’s Microsoft Entra ID controlled resources using a personal device.

| **Microsoft Entra registered** | **Description** |
| --- | --- |
| Definition | Registered to Microsoft Entra ID without requiring organizational account to sign in to the device |
| Primary audience | Applicable to Bring your own device (BYOD), and Mobile devices |
| Device ownership | User or Organization |
| Operating systems | Windows 10 or newer, macOS 10.15 or newer, iOS 15 or newer, Android, Linux (Ubuntu 20.04/22.04/24.04 LTS, Red Hat Enterprise Linux 8/9 LTS) |
| Device sign in options | End-user local credentials, Password, Windows Hello, PIN, Biometrics |
| Device management | Mobile Device Management (example: Microsoft Intune), Mobile Application Management |
| Key capabilities | SSO to cloud resources, Conditional Access when enrolled in Intune, Conditional Access via App protection policy |

![Diagram of Microsoft Entra registered devices. Shows a laptop and cell registered.](https://learn.microsoft.com/en-us/training/wwl-sci/create-configure-manage-identities/media/azure-active-directory-registered-device.png)

Microsoft Entra registered devices are signed in to using a local account like a Microsoft account on a Windows 10 or newer device, but additionally have a Microsoft Entra account attached for access to organizational resources. Access to resources in the organization can be further limited based on that Microsoft Entra account and Conditional Access policies applied to the device identity.

Administrators can secure and further control these Microsoft Entra registered devices using Mobile Device Management (MDM) tools like Microsoft Intune. MDM provides a means to enforce organization-required configurations like requiring storage to be encrypted, password complexity, and security software kept updated.

Microsoft Entra ID registration can be accomplished when accessing a work application for the first time or manually using the Windows 10 or Windows 11 Settings menu.

### Scenarios for registered devices

A user in your organization wants to access tools for email, reporting time-off, and benefits enrollment from their home PC. Your organization has these tools behind a Conditional Access policy that requires access from an Intune compliant device. The user adds their organization account and registers their home PC with Microsoft Entra ID and the required Intune policies are enforced giving the user access to their resources.

Another user wants to access their organizational email on their personal Android phone infected by a root-kit. Your company requires a compliant device and created an Intune compliance policy to block any rooted devices. The employee is stopped from accessing organizational resources on this device.

## Microsoft Entra joined devices

Microsoft Entra joined is intended for organizations that want to be cloud-first or cloud-only. Any organization can deploy Microsoft Entra joined devices no matter the size or industry. Microsoft Entra joined enables access to both cloud and on-premises apps and resources.

| **Microsoft Entra joined** | **Description** |
| --- | --- |
| Definition | Joined only to Microsoft Entra ID requiring organizational account to sign in to the device |
| Primary audience | Suitable for both cloud-only and hybrid organizations |
| Device ownership | Organization |
| Operating systems | All Windows 10 and Windows 11 devices (except Home editions); Windows Server 2019 and newer VMs in Azure (Server Core not supported); macOS 13 or newer (preview) |
| Device management | Mobile Device Management (example: Microsoft Intune) |
| Key capabilities | SSO to both cloud and on-premises resources, Conditional Access, Self-service Password Reset and Windows Hello PIN reset |

Microsoft Entra joined devices are signed in to using an organizational Microsoft Entra account. Access to resources in the organization can be further limited based on that Microsoft Entra account and Conditional Access policies applied to the device identity.

Administrators can secure and further control Microsoft Entra joined devices using Mobile Device Management (MDM) tools like Microsoft Intune or in co-management scenarios using Microsoft Endpoint Configuration Manager. These tools provide a means to enforce organization-required configurations like requiring storage to be encrypted, password complexity, software installations, and software updates. Administrators can make organization applications available to Microsoft Entra joined devices using Configuration Manager.

Microsoft Entra joined can be accomplished using self-service options like the Out of Box Experience (OOBE), bulk enrollment, or Windows Autopilot.

Microsoft Entra joined devices can still maintain single sign-on access to on-premises resources when they are on the organization's network. Microsoft Entra joined devices authenticate to on-premises servers like for file, print, and other applications.

### Scenarios for joined devices

Although Microsoft Entra joined is primarily intended for organizations that don't have an on-premises Windows Server Active Directory infrastructure, you can certainly use it in scenarios where:

- You want to transition to cloud-based infrastructure using Microsoft Entra ID and MDM like Intune.
- You can’t use an on-premises domain join, for example, if you need to get mobile devices such as tablets and phones under control.
- Your users primarily need to access Microsoft 365 or other SaaS apps integrated with Microsoft Entra ID.
- You want to manage a group of users in Microsoft Entra ID instead of in Active Directory. This scenario can apply, for example, to seasonal workers, contractors, or students.
- You want to provide joining capabilities to workers in remote branch offices with limited on-premises infrastructure.

You can configure Microsoft Entra joined devices for all Windows 10 and Windows 11 devices except for the Home editions.

The goal of Microsoft Entra joined devices is to simplify:

- Windows deployments of work-owned devices
- Access to organizational apps and resources from any Windows device
- Cloud-based management of work-owned devices
- Users to sign in to their devices with their Microsoft Entra ID or synced Active Directory work or school accounts.

![Diagram of Microsoft Entra joined devices connected to the cloud. A laptop registered to your cloud directory.](https://learn.microsoft.com/en-us/training/wwl-sci/create-configure-manage-identities/media/azure-active-directory-joined-device.png)

Microsoft Entra Joined can be deployed by using many different methods.

## Hybrid Microsoft Entra joined devices

For more than a decade, many organizations have used the domain join to their on-premises Active Directory to enable:

- IT departments to manage work-owned devices from a central location.
- Users to sign in to their devices with their Active Directory work or school accounts.

Typically, organizations with an on-premises footprint rely on imaging methods to configure devices, and they often use **Configuration Manager** or **group policy (GP)** to manage them.

If your environment has an on-premises AD footprint and you also want benefit from the capabilities provided by Microsoft Entra ID, you can implement hybrid Microsoft Entra joined devices. These devices are devices that are joined to your on-premises Active Directory and registered with your Microsoft Entra directory.

| **Hybrid Microsoft Entra joined** | **Description** |
| --- | --- |
| Definition | Joined to on-premises AD and Microsoft Entra ID requiring organizational account to sign in to the device |
| Primary audience | Suitable for hybrid organizations with existing on-premises AD infrastructure |
| Device ownership | Organization |
| Operating systems | Windows 10, Windows 11 (except Home editions), Windows Server 2016, 2019, and 2022 |
| Device sign in options | Password or Windows Hello for Business |
| Device management | Group Policy, Configuration Manager standalone, or co-management with Microsoft Intune |
| Key capabilities | SSO to both cloud and on-premises resources, Conditional Access, Self-service Password Reset and Windows Hello PIN reset |

![Diagram of the process flow of Hybrid Microsoft Entra joined devices. A laptop is registered to an on-premises active directory.](https://learn.microsoft.com/en-us/training/wwl-sci/create-configure-manage-identities/media/azure-active-directory-hybrid-joined-device.png)

### Scenarios for hybrid joined

Use Microsoft Entra hybrid joined devices if:

- You have Win32 apps deployed to these devices that rely on Active Directory machine authentication.
- You want to continue to use Group Policy to manage device configuration.
- You want to continue to use existing imaging solutions to deploy and configure devices.

## Device writeback (no longer supported)

Device writeback is no longer supported and is no longer a recommended approach for hybrid identity scenarios. It is replaced by **Cloud Kerberos Trust**, which allows Microsoft Entra joined and hybrid joined devices to authenticate to on-premises resources without requiring device objects to be written back to on-premises Active Directory.

For organizations planning new hybrid deployments, use Cloud Kerberos Trust to enable on-premises SSO and Windows Hello for Business in hybrid environments. See [Configure Microsoft Entra Kerberos for on-premises single sign-on](/en-us/entra/identity/authentication/howto-authentication-passwordless-security-key-on-premises) for guidance.

---

### 05-Manage licenses

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/02-Create, configure, and manage identities/05-Manage licenses.md`*

# Manage licenses

**Module:** Create, configure, and manage identities

**Source:** https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/8-manage-licenses

---

# Manage licenses

Microsoft paid cloud services, such as Microsoft 365, Enterprise Mobility + Security, Dynamics 365, and other similar products, require licenses. These licenses are assigned to each user who needs access to these services. To manage licenses, administrators use the [Microsoft 365 admin center](https://admin.microsoft.com/) or PowerShell and Microsoft Graph API. Microsoft Entra ID is the underlying infrastructure that supports identity management for all Microsoft cloud services. Microsoft Entra ID stores information about license assignment states for users.

Without group-based licensing, assigning licenses at the individual user level makes large-scale management difficult. For example, to add or remove user licenses based on organizational changes, such as users joining or leaving the organization or a department, an administrator often must write a complex PowerShell script. This script makes individual calls to the cloud service.

To address those challenges, Microsoft Entra ID now includes group-based licensing. You can assign one or more product licenses to a group. Microsoft Entra ID ensures that the licenses are assigned to all members of the group. Any new members who join the group are assigned the appropriate licenses. When they leave the group, those licenses are removed. This licensing management eliminates the need for automating license management via PowerShell to reflect changes in the organization and departmental structure on a per-user basis.

## License requirements

You must have one of the following licenses to use group-based licensing:

- Paid or trial subscription for Microsoft Entra ID Premium P1 and greater
- Paid or trial edition Office 365 Enterprise E3 or greater

### Required number of licenses

For any groups assigned a license, you must also have a license for each unique member. While you don't have to assign each member of the group a license, you must have at least enough licenses to include all of the members. For example, if you have 1,000 unique members who are part of licensed groups in your tenant, you must have at least 1,000 licenses to meet the licensing agreement.

## Features

Here are the main features of group-based licensing:

- Licenses can be assigned to any security group in Microsoft Entra ID. Security groups can be synced from on-premises by using Microsoft Entra Cloud Sync (recommended) or Microsoft Entra Connect Sync. You can also create security groups directly in Microsoft Entra ID (also called cloud-only groups), or automatically via the Microsoft Entra dynamic group feature.
- When a product license is assigned to a group, the administrator can disable one or more service plans in the product. Typically, this assignment is done when the organization isn't yet ready to start using a service included in a product. For example, the administrator might assign Microsoft 365 to a department, but temporarily disable the Viva Engage service.
- All Microsoft cloud services that require user-level licensing are supported. This support includes all Microsoft 365 products, Enterprise Mobility + Security, and Dynamics 365.
- Group-based licensing is currently available only through the [Microsoft 365 admin center](https://admin.microsoft.com/).
- Microsoft Entra ID automatically manages license modifications that result from group membership changes. Typically, license modifications are effective within minutes of a membership change.
- A user can be a member of multiple groups with license policies specified. A user can also have some licenses that were directly assigned, outside of any groups. The resulting user state is a combination of all assigned product and service licenses. If a user is assigned same license from multiple sources, the license is consumed only once.
- In some cases, licenses can't be assigned to a user. For example, there might not be enough available licenses in the tenant, or conflicting services are assigned at the same time. Administrators have access to information about users for whom Microsoft Entra ID couldn't fully process group licenses. They can then take corrective action based on that information.

Some Microsoft services aren't available in all locations. The administrator, before assigning a license to a user, should specify usage location in the User Profile.

For group license assignment, any users without a usage location specified inherit the location of the directory. If you have users in multiple locations, we recommend that you always set usage location as part of your user creation. Usage location helps ensure the result of license assignment is always correct and users don't receive services in locations that aren't allowed.

---

### 06-Create custom security attributes

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/02-Create, configure, and manage identities/06-Create custom security attributes.md`*

# Create custom security attributes

**Module:** Create, configure, and manage identities

**Source:** https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/11-create-custom-security-attributes

---

# Create custom security attributes

![Screenshot of the Custom Security Attributes dialog. Create new security attributes of type String, Integer, or Boolean.](https://learn.microsoft.com/en-us/training/wwl-sci/create-configure-manage-identities/media/custom-security-attributes.png)

## What is a custom security attribute?

Custom security attributes in Microsoft Entra ID are business-specific attributes (key-value pairs) that you can define and assign to Microsoft Entra objects. These attributes can be used to store information, categorize objects, or enforce fine-grained access control over specific Azure resources.

### Why use custom security attributes?

- Extend user profiles, such as add Hourly Salary to all my employees.
- Ensure only administrators can see the Hourly Salary attribute in my employees' profiles.
- Categorize hundreds or thousands of applications to easily create a filterable inventory for auditing.
- Grant users access to the Azure Storage blobs belonging to a project.

### What can I do with custom security attributes?

- Define business-specific information (attributes) for your tenant.
- Add custom security attributes to Microsoft Entra users and enterprise applications (service principals).
- Manage Microsoft Entra objects using custom security attributes with queries and filters.
- Provide attribute governance so attributes determine who can get access.

Custom security attributes are **not** supported in Microsoft Entra Domain Services, SAML token claims, or JSON Web Token (JWT) claims.

### Features of custom security attributes

- Available tenant-wide
- Include a description
- Support different data types: Boolean, integer, string
- Support single value or multiple values
- Support user-defined free-form values or predefined values
- Assign custom security attributes to directory synced users from an on-premises Active Directory

---

### 07-Explore automatic user creation

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/02-Create, configure, and manage identities/07-Explore automatic user creation.md`*

# Explore automatic user creation

**Module:** Create, configure, and manage identities

**Source:** https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/12-explore-automatic-user-creation

---

# Explore automatic user creation

![Diagram of the process flow for auto user provisioning in Microsoft Entra ID. Auto provision users and groups.](https://learn.microsoft.com/en-us/training/wwl-sci/create-configure-manage-identities/media/automatic-user-provisioning.png)

### Components of SCIM (System for Cross-Domain Identity Management)

- **HCM system** - Applications and technologies that enable Human Capital Management process and practices that support and automate HR processes throughout the employee lifecycle.
- **Microsoft Entra Provisioning Service** - Uses the SCIM 2.0 protocol for automatic provisioning. The service connects to the SCIM endpoint for the application, and uses the SCIM user object schema and REST APIs to automate provisioning and deprovisioning of users and groups.
- **Microsoft Entra ID** - User repository used to manage the lifecycle of identities and their entitlements.
- **Target system** - Application or system that has SCIM endpoint and works with the Microsoft Entra provisioning to enable automatic provisioning of users and groups.

### Why use SCIM?

System for Cross-Domain Identity Management (SCIM) is an open standard protocol for automating the exchange of user identity information between identity domains and IT systems. SCIM ensures that employees added to the Human Capital Management (HCM) system automatically have accounts created in Microsoft Entra ID or Windows Server Active Directory. User attributes and profiles are synchronized between the two systems, updating, or removing users based on the user status or role change.

The key is keeping your identity systems up to date. If a user can be automatically deprovisioned from Microsoft Entra ID as soon as they're removed from your HR systems, you have less worry about a possible breach.

### API-driven inbound provisioning

Not all HR systems expose a SCIM endpoint. For these scenarios, Microsoft Entra ID supports **API-driven inbound provisioning**, which reached general availability in March 2024. Instead of requiring the source system to push data via SCIM, any automation tool, or script can retrieve workforce data from any system of record and send it to the Microsoft Entra provisioning API. Supported authoritative sources include Workday, SAP SuccessFactors, and any custom HR system integrated via the API. This approach gives organizations flexibility to automate identity lifecycle management regardless of their HR platform's native integration capabilities.

---

### 08-Summary and resources

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/02-Create, configure, and manage identities/08-Summary and resources.md`*

# Summary and resources

**Module:** Create, configure, and manage identities

**Source:** https://learn.microsoft.com/en-us/training/modules/create-configure-manage-identities/14-summary-resources

---

# Summary and resources

You completed this module, you are able to:

- Create, configure, and manage users
- Create, configure, and manage groups
- Manage licenses
- Configure and manage device registration
- Explore custom security attributes and automatic account provisioning

## Resources

Use these resources to discover more:

- [Quickstart: Create and assign a user account](/en-us/entra/identity/enterprise-apps/add-application-portal-assign-users)
- [Bulk create users in Microsoft Entra ID](/en-us/entra/identity/users/users-bulk-add)
- [Create a basic group and add members using Microsoft Entra ID](/en-us/entra/fundamentals/how-to-manage-groups)
- [Create or update a dynamic membership group in Microsoft Entra ID](/en-us/entra/identity/users/groups-create-rule)
- [What is Microsoft Entra Cloud Sync?](/en-us/entra/identity/hybrid/cloud-sync/what-is-cloud-sync)
- [Manage license requests](/en-us/microsoft-365/commerce/licenses/manage-license-requests)
- [Assign licenses to users - Microsoft 365 Admin Center](/en-us/microsoft-365/admin/manage/assign-licenses-to-users)
- [Plan Microsoft Entra device deployment](/en-us/entra/identity/devices/plan-device-deployment)
- [API-driven inbound provisioning concepts](/en-us/entra/identity/app-provisioning/inbound-provisioning-api-concepts)

---

## 03-Describe the core architectural components of Azure

### 01-Introduction

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/03-Describe the core architectural components of Azure/01-Introduction.md`*

# Introduction

**Module:** Describe the core architectural components of Azure

**Source:** https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/1-introduction

---

# Introduction

In this module, you’ll be introduced to the core architectural components of Azure. You’ll learn about Azure's physical layout: datacenters, availability zones, and regions; and you’ll learn about Azure's management structure: resources and resource groups, subscriptions, and management groups.

## Learning objectives

After completing this module, you’ll be able to:

- Describe Azure regions, region pairs, and sovereign regions.
- Describe Availability Zones.
- Describe Azure datacenters.
- Describe Azure resources and Resource Groups.
- Describe subscriptions.
- Describe management groups.
- Describe the hierarchy of resource groups, subscriptions, and management groups.

---

### 02-What is Microsoft Azure

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/03-Describe the core architectural components of Azure/02-What is Microsoft Azure.md`*

# What is Microsoft Azure

**Module:** Describe the core architectural components of Azure

**Source:** https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/2-what-microsoft-azure

---

# What is Microsoft Azure

Azure is a continually expanding set of cloud services that help you meet current and future IT challenges. Azure gives you the freedom to build, manage, and deploy applications on a massive global network using your favorite tools and frameworks.

## What does Azure offer?

**Limitless innovation.** Build intelligent apps and solutions with advanced technology, tools, and services to take your operations to the next level. Seamlessly unify your technology to simplify platform management and deliver innovations efficiently and securely on a trusted cloud.

- **Bring ideas to life:** Build on a trusted platform to advance your team's capabilities with industry-leading AI and cloud services.
- **Seamlessly unify:** Efficiently manage all your infrastructure, data, analytics, and AI solutions across an integrated platform.
- **Innovate on trust:** Rely on trusted technology from a partner who's dedicated to security and responsibility.

## What can I do with Azure?

Azure provides hundreds of services that enable you to do everything from running your existing applications on virtual machines to exploring new software paradigms, such as intelligent bots and generative AI.

![Diagram showing ten Azure service categories: Compute, Networking, Storage, Databases, AI + ML, Identity + Security, DevOps + Management, IoT, Analytics, and Integration, each with representative services.](https://learn.microsoft.com/en-us/training/wwl-azure/describe-core-architectural-components-of-azure/media/azure-service-categories.png)

Many teams start exploring the cloud by moving their existing applications to virtual machines (VMs) that run in Azure. Migrating your existing apps to VMs is a good start, but the cloud is much more than a different place to run your VMs.

As your skills grow, you can modernize one workload at a time, such as moving from manually managed servers to managed databases, autoscaling web apps, or event-driven services.

## Practical example

Suppose your organization runs an internal app with seasonal demand spikes. In Azure, you can host the app on virtual machines or managed app services, store data in managed databases, and monitor health from a centralized dashboard. As demand increases, you can scale resources up or out and then scale back when demand drops so you're not paying for unused capacity year-round.

For example, Azure provides Azure AI services and Azure OpenAI Service so you can add language, vision, speech, and generative AI capabilities to your applications. It also provides Azure Machine Learning, Internet of Things (IoT) services, and storage solutions that dynamically grow to accommodate massive amounts of data. Azure services enable solutions that aren't feasible without the power of the cloud.

---

### 03-Get started with Azure accounts

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/03-Describe the core architectural components of Azure/03-Get started with Azure accounts.md`*

# Get started with Azure accounts

**Module:** Describe the core architectural components of Azure

**Source:** https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/3-get-started-azure-accounts

---

# Get started with Azure accounts

To create and use Azure services, you need an Azure subscription. When you're working with your own applications and workloads, you create an Azure account, and a subscription is created for you. After you've created an Azure account, you're free to create additional subscriptions. For example, your team might use a single Azure account and separate subscriptions for development, testing, and production workloads. After you've created an Azure subscription, you can start creating Azure resources within each subscription.

![Diagram showing four Azure account scope levels: an Azure Account at the top connects to three subscriptions (Dev/Test, Production, Sandbox), each containing resource groups (Web, Data, App, Network) that hold individual resources such as App Service, VM, SQL DB, Cosmos DB, Functions, API, VNet, and NSG.](https://learn.microsoft.com/en-us/training/wwl-azure/describe-core-architectural-components-of-azure/media/account-scope-levels.png)

If you're new to Azure, you can sign up for a free account on the Azure website to start exploring at no cost to you. When you're ready, you can choose to upgrade your free account. You can also create a new subscription that enables you to start paying for Azure services you need beyond the limits of a free account.

## Create an Azure account

You can purchase Azure access directly from Microsoft by signing up on the Azure website or through a Microsoft representative. You can also purchase Azure access through a Microsoft partner. Cloud Solution Provider partners offer a range of complete managed-cloud solutions for Azure.

### What is the Azure free account?

The Azure free account includes:

- Free access to popular Azure products for 12 months.
- A credit to use for the first 30 days.
- Access to more than 65 services that are always free.

The [Azure free account](https://azure.microsoft.com/pricing/purchase-options/azure-account?cid=msft_learn) is an excellent way for new users to get started and explore. To sign up, you need a phone number, a credit card, and a Microsoft or GitHub account. The credit card information is used for identity verification only. You won't be charged for any services until you upgrade to a paid subscription.

### What is the Azure free student account?

The Azure free student account offer includes:

- Free access to certain Azure services for 12 months.
- A credit to use in the first 12 months.
- Free access to certain software developer tools.

The [Azure free student account](https://azure.microsoft.com/free/students/?cid=msft_learn) is an offer for students that gives $100 credit and free developer tools. Also, you can sign up without a credit card.

If you're practicing by creating resources in Azure, monitor usage and remove resources you no longer need to avoid unexpected costs.

---

### 04-Describe Azure physical infrastructure

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/03-Describe the core architectural components of Azure/04-Describe Azure physical infrastructure.md`*

# Describe Azure physical infrastructure

**Module:** Describe the core architectural components of Azure

**Source:** https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/5-describe-azure-physical-infrastructure

---

# Describe Azure physical infrastructure

Azure's core architectural components can be broken down into two main groupings: the physical infrastructure and the management infrastructure. This unit covers the physical side — how Azure organizes its datacenters, regions, and availability zones to deliver reliable services worldwide.

## Physical infrastructure

The physical infrastructure for Azure starts with datacenters. These datacenters are facilities with servers arranged in racks, with dedicated power, cooling, and networking infrastructure — similar to an on-premises datacenter, but at a much larger scale.

As a global cloud provider, Azure has datacenters around the world. However, you don't interact with individual datacenters directly. Instead, datacenters are grouped into Azure Regions and Azure Availability Zones that provide resiliency and reliability for your workloads.

The [Global infrastructure](https://infrastructuremap.microsoft.com/) site gives you a chance to interactively explore the underlying Azure infrastructure.

![Diagram showing Azure's physical infrastructure hierarchy from Geography to Region to Availability Zone to Datacenter.](https://learn.microsoft.com/en-us/training/wwl-azure/describe-core-architectural-components-of-azure/media/azure-infrastructure-hierarchy.png)

### Regions

A region is a geographical area on the planet that contains at least one, but potentially multiple datacenters that are nearby and networked together with a low-latency network. Azure intelligently assigns and controls the resources within each region to ensure workloads are appropriately balanced.

When you deploy a resource in Azure, you'll often need to choose the region where you want your resource deployed.

Note

Some services or virtual machine (VM) features are only available in certain regions, such as specific VM sizes or storage types. There are also some global Azure services that don't require you to select a particular region, such as Microsoft Entra ID, Azure Traffic Manager, and Azure DNS.

### Availability Zones

Availability zones are physically separate datacenters within an Azure region. Each availability zone is made up of one or more datacenters equipped with independent power, cooling, and networking. An availability zone is set up to be an isolation boundary. If one zone goes down, the other continues working. Availability zones are connected through high-speed, private fiber-optic networks.

![Diagram showing three physically separate availability zones within an Azure region, each with independent power, cooling, and networking, connected by fiber-optic links.](https://learn.microsoft.com/en-us/training/wwl-azure/describe-core-architectural-components-of-azure/media/availability-zones.png)

Important

To ensure resiliency, a minimum of three separate availability zones are present in all availability zone-enabled regions. However, not all Azure Regions currently support availability zones.

#### Use availability zones for your workloads

When you run your own on-premises infrastructure, setting up redundancy means buying and maintaining duplicate hardware. With Azure, you can protect your workloads by spreading them across availability zones within a region.

You place your VMs, storage, databases, and other resources in one availability zone and replicate them to other zones within the same region. Keep in mind that there could be a cost to duplicating your services and transferring data between zones.

Azure services that support availability zones fall into three categories:

- Zonal services: You pin the resource to a specific zone (for example, VMs, managed disks, IP addresses).
- Zone-redundant services: The platform replicates automatically across zones (for example, zone-redundant storage, SQL Database).
- Non-regional services: Services are always available from Azure geographies and are resilient to zone-wide outages as well as region-wide outages.

![Diagram comparing three Azure availability zone service categories: Zonal, Zone-redundant, and Non-regional.](https://learn.microsoft.com/en-us/training/wwl-azure/describe-core-architectural-components-of-azure/media/availability-zone-service-categories.png)

Even with the additional resiliency that availability zones provide, it’s possible that an event could be so large that it impacts multiple availability zones in a single region. To provide even further resilience, Azure has Region Pairs.

### Region pairs

Most Azure regions are paired with another region within the same geography (such as US, Europe, or Asia) at least 300 miles away. This approach allows for the replication of resources across a geography that helps reduce the likelihood of interruptions because of events such as natural disasters, civil unrest, power outages, or physical network outages that affect an entire region. For example, if a region in a pair was affected by a natural disaster, services would automatically fail over to the other region in its region pair.

Important

Not all Azure services automatically replicate data or automatically fall back from a failed region to cross-replicate to another enabled region. In these scenarios, recovery and replication must be configured by the customer.

Examples of region pairs in Azure are West US paired with East US and Southeast Asia paired with East Asia. Because the pair of regions is directly connected and far enough apart to be isolated from regional disasters, you can use them to provide reliable services and data redundancy.

![Diagram showing two paired Azure regions within a geography, each containing availability zones, with bidirectional failover replication and region pair advantages.](https://learn.microsoft.com/en-us/training/wwl-azure/describe-core-architectural-components-of-azure/media/region-pairs.png)

#### Additional advantages of region pairs:

- If an extensive Azure outage occurs, one region out of every pair is prioritized to make sure at least one is restored as quickly as possible for applications hosted in that region pair.
- Planned Azure updates are rolled out to paired regions one region at a time to minimize downtime and risk of application outage.
- Data continues to reside within the same geography as its pair (except for Brazil South) for data-residency and compliance purposes.

Important

Most regions are paired in two directions, meaning they are the backup for the region that provides a backup for them (West US and East US back each other up). However, some regions, such as Brazil South, are paired in only one direction. In a one-direction pairing, the Primary region does not provide backup for its secondary region. Brazil South is unique because it's paired with a region outside of its geography. Brazil South's secondary region is South Central US. The secondary region of South Central US isn't Brazil South. Additionally, some regions (such as Italy North, Poland Central, and Israel Central) don't have a traditional region pair and instead rely on availability zones and geo-redundant storage for resiliency.

### Sovereign Regions

In addition to regular regions, Azure also has sovereign regions. Sovereign regions are instances of Azure that are isolated from the main instance of Azure. You may need to use a sovereign region for compliance or legal purposes.

Azure sovereign regions include:

- US DoD Central, US Gov Virginia, US Gov Arizona, and more: These regions are physical and logical network-isolated instances of Azure for U.S. government agencies and partners. These datacenters are operated by screened U.S. personnel and include additional compliance certifications.
- China East, China North, and more: These regions are available through a unique partnership between Microsoft and 21Vianet, whereby Microsoft doesn't directly maintain the datacenters.

---

### 05-Describe Azure management infrastructure

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/03-Describe the core architectural components of Azure/05-Describe Azure management infrastructure.md`*

# Describe Azure management infrastructure

**Module:** Describe the core architectural components of Azure

**Source:** https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/6-describe-azure-management-infrastructure

---

# Describe Azure management infrastructure

The management infrastructure includes Azure resources and resource groups, subscriptions, and accounts. Understanding this hierarchy helps you organize resources, control who can access what, and manage costs as your Azure usage grows.

## Azure resources and resource groups

A resource is the basic building block of Azure. Anything you create, provision, or deploy is a resource. VMs, virtual networks, databases, and Azure AI services are all examples of resources.

![Diagram showing three resource group rules: a resource belongs to one group at a time (with move option), groups cannot be nested or renamed, and deleting a group deletes all resources inside it.](https://learn.microsoft.com/en-us/training/wwl-azure/describe-core-architectural-components-of-azure/media/resource-group-rules.png)

Resource groups are groupings of resources. Every resource must belong to exactly one resource group. You can move some resources between groups, but a resource is only associated with one group at a time. Resource groups can't be nested, and they can't be renamed after creation, so choose a clear naming convention from the start.

Actions you apply to a resource group affect all resources inside it. Deleting a resource group deletes everything in it. Granting or denying access applies to all its resources.

For example, if you're setting up a temporary dev environment, grouping all the resources together lets you delete the entire group when you're done. If you're running multiple projects, create a separate resource group for each so each team only sees and manages its own resources.

There are no hard rules for structuring resource groups — choose the approach that works best for your situation.

## Azure subscriptions

In Azure, subscriptions are a unit of management, billing, and scale. Subscriptions let you organize resource groups and control billing separately from access.

![Diagram showing two subscription boundary types: billing boundary where each subscription generates a separate invoice, and access control boundary where dev and prod subscriptions have different access policies and spending limits.](https://learn.microsoft.com/en-us/training/wwl-azure/describe-core-architectural-components-of-azure/media/subscription-boundaries.png)

Using Azure requires an Azure subscription. A subscription provides access to Azure products and services and serves as a billing unit. An Azure subscription links to an Azure account, which is an identity in Microsoft Entra ID or in a directory that Microsoft Entra ID trusts.

An account can have multiple subscriptions, but only one is required. In a multi-subscription account, you can configure different billing models and access policies. There are two types of subscription boundaries:

- **Billing boundary**: Determines how an Azure account is billed. You can create multiple subscriptions for different billing requirements. Azure generates separate billing reports and invoices for each subscription.
- **Access control boundary**: Azure applies access-management policies at the subscription level. For example, you might create one subscription for your development work and another for production, each with different spending limits and access rules.

### Create additional Azure subscriptions

You might create additional subscriptions to separate:

- **Environments**: Subscriptions for lifecycle stages such as sandbox, development, test, and production. Access control occurs at the subscription level, making this a natural boundary.
- **Team and workload boundaries**: Give each project its own subscription so costs are easy to track, or separate sandbox environments from production.
- **Billing**: Create subscriptions to track costs separately — for instance, one for production workloads and another for development and testing.

## Azure management groups

Resources go into resource groups, and resource groups go into subscriptions. For a small environment, that's enough. But when you have many subscriptions across multiple teams or geographies, you need a way to manage access and policies at a higher level.

Azure management groups sit above subscriptions. You organize subscriptions into management groups and apply governance conditions — like access policies or compliance rules — to the group. All subscriptions in a management group automatically inherit those conditions, just as resources inherit settings from their resource group. Management groups can be nested up to six levels deep (not counting the root level or the subscription level), letting you build a hierarchy that mirrors your organization.

Every Microsoft Entra tenant has a single top-level Tenant Root Group. All other management groups and subscriptions fold up to this root group, which lets you apply governance policies globally.

## Management group, subscriptions, and resource group hierarchy

You can build a flexible structure of management groups and subscriptions to organize your resources into a hierarchy for unified policy and access management.

![Diagram showing a management group hierarchy from Tenant Root Group down through management groups (Marketing, IT) to subscriptions (Web, Mobile, Apps, Servers), resource groups, and individual resources, with policies and access inheriting downward.](https://learn.microsoft.com/en-us/training/wwl-azure/describe-core-architectural-components-of-azure/media/management-group-hierarchy.png)

Examples of how you could use management groups:

- **Apply a policy across subscriptions**. You could limit VM locations to the US West Region in a group called Production. This policy inherits to all subscriptions under that management group and applies to all VMs in those subscriptions. The resource or subscription owner can't override it, which strengthens governance.
- **Grant access to multiple subscriptions at once**. By placing subscriptions under a management group, you can create one Azure RBAC assignment on the group. All sub-management groups, subscriptions, resource groups, and resources underneath inherit those permissions — no need to script Azure RBAC across individual subscriptions.

Important facts about management groups:

- A single directory supports up to 10,000 management groups.
- Each management group and subscription can have only one parent.

---

### 06-Summary

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/03-Describe the core architectural components of Azure/06-Summary.md`*

# Summary

**Module:** Describe the core architectural components of Azure

**Source:** https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/9-summary

---

# Summary

In this module, you learned about the physical and management structure of Microsoft Azure. You were introduced to the relationship between datacenters, availability zones, and regions. You explored how the infrastructure supports the benefits of the cloud, such as high availability and reliability. You also learned about the management infrastructure of Azure. You explored how resources and resource groups are related, and how subscriptions and management groups can help manage resources.

## Learning objectives

You should now be able to:

- Describe Azure regions, region pairs, and sovereign regions.
- Describe Availability Zones.
- Describe Azure datacenters.
- Describe Azure resources and Resource Groups.
- Describe subscriptions.
- Describe management groups.
- Describe the hierarchy of resource groups, subscriptions, and management groups.

## Explore with Copilot

Tip

Try one of these prompts in Copilot Chat:

- "Build a concept map that connects regions, Availability Zones, datacenters, resources, resource groups, subscriptions, and management groups."
- "Design a subscription and management-group structure for an organization with multiple departments and compliance boundaries."
- "Explain region pairs and sovereign regions, then recommend a resiliency approach for a workload with strict data residency requirements."

---

## 04-Azure Policy initiatives

### 01-Summary

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/04-Azure Policy initiatives/01-Summary.md`*

# Summary

**Module:** Azure Policy initiatives

**Source:** https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/summary

---

# Summary

Azure Policy is a crucial component of the governance model in the Cloud Adoption Framework for Azure, which is designed to balance control and stability with speed and results. It helps you enforce organizational and regulatory standards and assess compliance at scale through built-in and custom policies and policy initiatives.

The module covered the hierarchical organization of Azure resources, policy operations in Greenfield and Brownfield scenarios, and the various components of policy definitions. You also delved into the evaluation and effects of policies, safe deployment practices, and integration with Event Grid for automated actions based on policy state changes. Key points included:

- Importance of careful policy design
- Testing to ensure effective governance without disrupting operations
- Logical operators and conditions in policy evaluation
- Supported effect types such as *disabled*, *modify*, *deny*, *audit*, *deployIfNotExists*, and *manual*

Additionally, the module emphasized starting with *enforcementMode* deactivated for new policies to test their impact and then deploying policies in rings to gradually expand to production environments.

For more information, see the [Azure Policy](/en-us/azure/governance/policy/overview) documentation.

---

### 02-Azure Policy resources

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/04-Azure Policy initiatives/02-Azure Policy resources.md`*

# Azure Policy resources

**Module:** Azure Policy initiatives

**Source:** https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/azure-policy-resources

---

# Azure Policy resources

Azure Policy enforces organizational standards and assesses compliance at scale. It evaluates Azure resources and actions by comparing their properties to business rules, providing an aggregated view of the environment's overall state. This policy allows for detailed analysis down to each resource and policy level with granularity. Six policy resources are available in Azure, and multiple different concepts apply to these Azure policy resources.

[![Screenshot of six policy resources that are available in Azure and multiple concepts apply to these Azure policy resources.](https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/media/policy-resources.png)](media/policy-resources.png#lightbox)

## Definitions

Azure Policy definitions describe resource compliance conditions and the effect to take if a condition is met. Several settings determine which resources are evaluated by any Azure Policy. You explore these settings in the next unit, **Azure Policy definitions**. The primary concept to which these settings can be applied is scope.

Scope in Azure Policy is the same as the levels of hierarchy for governance in Azure. Four levels of management scope are under the root tenant: the management groups, subscriptions, resource groups, and resources. The definition might be saved in a management group or a subscription. The definition location determines the scope to which the initiative or policy can be assigned. An assignment also has several properties that set a scope. The use of these properties determines which resource for Azure Policy to evaluate and which resources count toward compliance

You can apply management settings at any of these levels of scope. The level that you select determines how widely the setting is applied. Lower levels inherit settings from higher levels. For more information, see [Scope in Azure Policy](/en-us/azure/governance/policy/concepts/scope).

## Initiatives

Azure Policy initiatives, also known as a policy set, allow you to group several policy definitions to simplify assignments and management because you work with the initiatives as a single item. Initiatives offer a streamlined and automated approach to governance, allowing organizations to manage and monitor compliance at scale. The initiative definition contains all policy definitions to help track your compliance state for a larger goal, such as organizational compliance goals or compliance with regulatory frameworks. For example, multiple tagging policy definitions can be grouped into a single initiative, and rather than assigning each policy individually, you can apply the initiative to Azure resources. A JSON can be used to create a policy initiative definition. For more information, see [Azure Policy initiative definition structure](/en-us/azure/governance/policy/concepts/initiative-definition-structure).

For more information about Azure Policy built-ins and patterns, see [Azure Policy samples](/en-us/azure/governance/policy/samples/).

**Built-in policy** is a type of policy definition that's generated by Azure Resource Providers and is available by default. A group of such policy definitions is known as a **built-in initiative**. Azure built-in policy initiatives are a powerful tool set that enables centralized control across Azure resources and enforcement of specific configurations. These initiatives comprise a collection of policy definitions and support compliance with various regulatory frameworks, industry standards, and security best practices.

For a list of built-in policies and initiatives, see [Policies](/en-us/azure/governance/policy/samples/built-in-policies) and [Initiatives](/en-us/azure/governance/policy/samples/built-in-initiatives).

**Custom policy** is a type of policy definition that's written by a policy user when no built-in policy maps to your requirements. A group of such policy definitions is known as a **custom initiative**. Azure Policy custom initiatives help you to tailor a set of policies specifically to your organization's unique requirements, giving you control to enforce the standards and rules that best fit your environment. Microsoft for Sovereignty makes several custom policy initiatives and compliance mappings accessible through the [industry-policy-portfolio](https://github.com/Azure/industry-policy-portfolio) repository on GitHub.

Microsoft for Sovereignty initiatives and compliance mappings, which expand on the Azure built-in initiatives, help you automate policy enforcement and foster a robust governance framework that reduces the risk of noncompliance. Further, the initiatives also strengthen data protection measures. Organizations can use the large suite of available regulatory compliance built-in initiatives while we continue to expand on other frameworks. These initiatives are available as Azure built-in and custom policy initiatives.

For more information, see [Microsoft for Sovereignty policy portfolio](/en-us/industry/sovereignty/policy-portfolio-baseline).

## Assignments

Policy assignments define which resources are evaluated by a policy definition or initiative. Policy assignments can be done in the portal, an API call, or through the command line interface.

Policy and initiative definitions are deployed to a definition location (management group or subscription). This location determines the scope to which the initiative or policy can be assigned. The location should be the resource container shared by all resources that you want to use the policy definition on. For more information, see [Definition location](/en-us/azure/governance/policy/concepts/scope#definition-location).

Policies and initiatives are assigned to a specific scope (management group, subscription, or resource group). While doing so, you can define several optional aspects, including the resource scope and policy definition.

- Optional *resource selectors* to allow gradual rollout based on resource location or type.
- Optional *overrides* to change the effect of a policy definition without modifying the underlying definition.
- *enforcementMode* can be disabled to support "what-if" scenarios without changing the definition, which is equivalent to changing the definition to an audit effect mode, but a way to do it at assignment level. For example, if the policy has *Deny* effects, that denial isn't effective, but you can still view the result of the compliance evaluation of that policy.
- Optional *excluded scopes* to exclude inner containers or resources from the assignment scope.
- *Noncompliance messages* can be defined.
- *Parameters* can be assigned values.
- If you have a policy with the *deployIfNotExists* effect type, a *managed identity* can be assigned (system-assigned or user-assigned) to turn on remediation actions. An assignment has several properties that set a scope. The use of these properties determines which resource for Azure Policy to evaluate and which resources count toward compliance. These properties map to the following concepts:
  - **Inclusion** - For more information, see [Azure Policy assignment structure](/en-us/azure/governance/policy/concepts/assignment-structure).
  - **Exclusion** - For more information, see [Azure Policy assignment structure excluded scopes](/en-us/azure/governance/policy/concepts/assignment-structure#excluded-scopes).

## Exemptions

Use the Policy exemptions feature to *exempt* a resource hierarchy or an individual resource from evaluation of initiatives or definitions. Resources that are *exempt* count toward overall compliance but can't be evaluated or have a temporary waiver. They're created as a child object on the resource hierarchy, or the individual resource granted the exemption.

Policy exemptions aren't created during assignment time, but after, and the effect is still the same as an excluded scope. Two exemption categories exist and are used to group exemptions:

- **Mitigated** - The exemption is granted because the policy intent is met through another method.
- **Waiver** - The exemption is granted because the noncompliance state of the resource is temporarily accepted.

For more information about policy exemption, see [Azure Policy exemption structure](/en-us/azure/governance/policy/concepts/exemption-structure).

## Attestations

Policy attestations are used by Azure Policy to set compliance states of resources or scopes targeted by [manual policies](/en-us/azure/governance/policy/concepts/effect-manual). Each applicable resource requires one attestation for each manual policy assignment. For ease of management, manual policies should be designed to target the scope that defines the boundary of resources whose compliance state needs to be attested.

For more information, see [Azure Policy attestation structure](/en-us/azure/governance/policy/concepts/attestation-structure).

## Remediations

The policy remediation task feature is used to bring resources into compliance based on a definition and assignment. Resources that are noncompliant to a *modify* or *deployIfNotExists* definition assignment can be brought into compliance by using a remediation task. Resources that are newly created or updated that are applicable to a *deployIfNotExists* or *modify* definition assignment are automatically remediated.

For more information, see [Azure Policy remediation task structure](/en-us/azure/governance/policy/concepts/remediation-structure).

---

### 03-Azure Policy design principles

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/04-Azure Policy initiatives/03-Azure Policy design principles.md`*

# Azure Policy design principles

**Module:** Azure Policy initiatives

**Source:** https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/azure-policy-design-principles

---

# Azure Policy design principles

Governance provides mechanisms and processes to maintain control over your applications and resources in Azure. It involves planning your policy in Azure Policy and setting strategic priorities. While designing your policy, you must organize your cloud-based resources to secure, manage, and track costs that are related to your workloads.

## Hierarchy for governance

Azure provides four levels of management to establish proper governance: Management groups, Subscriptions, Resource groups, and Resources. You can build a flexible structure of management groups and subscriptions to organize your resources into a hierarchy for unified policy and access management. The following diagram shows an example of creating a hierarchy for governance by using management groups.

[![Screenshot showing an example of creating a hierarchy for governance by using management groups.](https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/media/azure-governance-hierarchy.png)](media/azure-governance-hierarchy.png#lightbox)

The Azure structure starts with the tenant root group at the top, followed by a hierarchy of management groups, which can extend to six levels beneath the root. The definition of each level in the management hierarchy and relationship between these levels is as follows:

| Concept | Description |
| --- | --- |
| **Resource** | A resource is the basic building block of Azure, and it includes instances of services that you create, provision, deploy, and so on. Virtual machines (VMs), virtual networks, databases, AI services, and so on, are considered resources in Azure. |
| **Resource groups** | Resource groups are groupings of resources. When you create a resource, you must place it into a resource group. While a resource group can contain many resources, a single resource can only be in one resource group at a time.     When you apply an action to a resource group, that action applies to all resources in the resource group. If you delete a resource group, all resources are deleted. If you grant or deny access to a resource group, all resources in the resource group are also granted or denied access. |
| **Subscriptions** | In Azure, subscriptions are a unit of management, billing, and scale. Similar to how resource groups are a way of logically organizing resources, subscriptions allow you to logically organize your resource groups and facilitate billing. Each subscription has limits or quotas on the number of resources that you can create and use. Organizations can use subscriptions to manage costs and the resources that users, teams, and projects create.     Using Azure requires an Azure subscription. An Azure subscription provides you with authenticated and authorized access to Azure products and services. It also allows you to provision resources. An Azure subscription links to an Azure account, which is an identity in Microsoft Entra ID or in a directory that Microsoft Entra ID trusts. |
| **Management groups** | Azure management groups provide a level of scope above subscriptions. If you have many subscriptions, you might need a way to efficiently manage access, policies, and compliance for those subscriptions. You organize subscriptions into containers called management groups and then apply governance conditions to the management groups.     Management groups give you enterprise-grade management at a large scale, no matter what type of subscriptions you might have. Management groups can be nested. |

You can apply management settings at any of these levels of scope. The level that you select determines how widely the setting is applied. Lower levels inherit settings from higher levels. For example, when you apply a policy to the subscription, the policy is applied to all resource groups and resources in that subscription. When you apply a policy on the resource group, that policy is applied to that resource group and all its resources. However, another resource group won't have that policy assignment. All subscriptions within a management group automatically inherit the conditions that are applied to the management group.

## Introduction to Azure Resource Manager

Azure Resource Manager is the deployment and management service for Azure. It provides a management layer that allows you to create, update, and delete resources in your Azure account.

Azure operations are classified into two main types: control plane and data plane. The control plane helps you manage resources in your subscription, while the data plane allows you to access the capabilities provided by instances of specific resource types.

### Control plane

Azure Policy operates in the control plane to enforce rules and compliance on your resources. Azure Resource Manager manages all control plane operations in Azure and includes the different components that are centralized between the different services. Azure Policy is integrated with Azure Resource Manager.

[![Screenshot of the control plane operations, components, and essential functions that Azure Resource Manager manages.](https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/media/azure-policy-and-resource-manager.png)](media/azure-policy-and-resource-manager.png#lightbox)

Azure Resource Manager manages essential functions, such as template-based deployments, role-based access control (RBAC), auditing, monitoring, and tagging, which provides a unified management experience for Azure resources after deployment. For example, consider a scenario where you have a storage account. With Azure Resource Manager, you can create the storage account and enforce a policy that mandates encryption for all storage accounts.

When you send a control plane request through any of the Azure APIs, tools, or SDKs, Azure Resource Manager receives the request. All capabilities that are available in the portal are also available through PowerShell, Azure CLI, REST APIs, and client SDKs. These tools use the same API to process requests, ensuring uniform results and capabilities. The Resource Manager authenticates and authorizes the request before forwarding it to the appropriate Azure resource provider that completes the operation.

### Data plane

The data plane is where the actual data operations occur, and Azure Policy ensures that the resources you interact with in the data plane are compliant with your policies. Data plane operations involve direct interaction with the data stored in a resource. Continuing with the previous example, you engage with the storage account to upload or download files. This interaction is handled directly by the data plane of the storage account rather than being managed by Azure Resource Manager.

Data plane operations aren't limited to REST API. Requests are made directly to the data endpoints of services (for example, accessing data in Microsoft Azure Storage, querying an SQL database, or reading secrets from Microsoft Azure Key Vault). Each Azure service handles these requests internally, bypassing Azure Resource Manager, and directly managing the data through its resource provider. Service-specific access controls, such as RBAC or access control lists (ACLs), often manage data plane permissions. The service responds with the data or result of the data operation, ensuring that the requester has the correct permissions.

Azure Policy allows individual Azure services to implement an Azure Policy extension, enhancing policy behavior and integration with specific resource providers. Azure Policy currently supports data plane operations through the following resource provider modes:

- **Microsoft.Kubernetes.Data** - Used for managing Kubernetes clusters and components such as pods, containers, and ingresses.
- **Microsoft.KeyVault.Data** - Used for managing vaults and certificates in Azure Key Vault.
- **Microsoft.Network.Data** - Used for managing Microsoft Azure Virtual Network Manager custom membership policies by using Azure Policy.
- **Microsoft.ManagedHSM.Data** - Used for managing Azure Key Vault Managed HSM keys by using Azure Policy.
- **Microsoft.DataFactory.Data** - Used for using Azure Policy to deny Microsoft Azure Data Factory outbound traffic domain names.
- **Microsoft.MachineLearningServices.v2.Data** - Used for managing Microsoft Azure Machine Learning model deployments. This Resource Provider mode reports compliance for newly created and updated components.

For more information, see [Resource Provider Modes](/en-us/azure/governance/policy/concepts/definition-structure-basics#resource-provider-modes).

## Operation flows of Azure Resource Manager

Azure Resource Manager includes two scenarios for handling Azure requests: **Greenfield** and **Brownfield**. As you deploy resources, Azure Resource Manager understands when to create new resources and when to update existing resources.

[![Screenshot of two scenarios for handling Azure requests, Greenfield and Brownfield.](https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/media/operation-flows.png)](media/operation-flows.png#lightbox)

**Greenfield** refers to a scenario where an Azure Policy (policy-first) exists, and when you're creating or updating an Azure resource.

For example, you're creating a new resource by calling an HTTPS REST API into Azure Resource Manager, that is, targeting a specific resource provider. In Azure Resource Manager, the request goes through different layers, including role-based access control (RBAC) and Azure Policy. These layers are only two of the many other layers, but it's important to understand that Azure Policy comes after RBAC. If you don't have permissions to run a given operation, then Azure Policy isn't considered or called because it would fail on the RBAC stage. If you have permissions, the request goes through Azure Policy and is evaluated against any policy. For resource updates, you send only the changes (delta) in the request payload in the existing resource. Azure Policy requires full visibility of the current state of the resource. Azure Policy merges the delta that you're sending by reading the current state. Then, the target state is obtained as a result of the merger, and that's what gets evaluated against your policies.

**Brownfield** is the scenario where the resources exist already (resource-first), and you're assigning a new Azure Policy to those resources.

In this case, policy evaluation happens through a compliance scan, which runs automatically every 24 hours, or it can be manually triggered. The duration of the scan is unpredictable, but after it's completed, the compliance state of existing resources is updated. To perform this evaluation, Azure Policy reads all existing resources in the scope. You can create an Azure policy that prohibits resources from being created outside of a certain region, such as West Europe. Existing resources outside this region aren't deleted but are flagged as noncompliant after the policy is applied, and future attempts to create resources outside West Europe fail.

---

### 04-Check your knowledge

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/04-Azure Policy initiatives/04-Check your knowledge.md`*

# Check your knowledge

**Module:** Azure Policy initiatives

**Source:** https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/check

---

# Check your knowledge

## Answer the following questions to see what you learned

1.

What is the purpose of Azure Policy and how does it help in managing resources?

Azure Policy is used to manually configure resources on a case-by-case basis.

Azure Policy assesses compliance at scale and enforces organizational and regulatory standards across Azure environments.

Azure Policy is a networking tool that manages traffic between virtual networks.

Azure Policy is solely for encrypting data at rest in Azure.

2.

What are the two recommended steps to deploy policies safely in an existing environment?

Start from assignments with Enforcement Mode Disabled and then deploy policies in deployment rings.

Start from assignments with Enforcement Mode Enabled and then deploy policies in deployment rings.

Start from assignments with Enforcement Mode Disabled and then deploy policies in parallel.

Start from assignments with Enforcement Mode Enabled and then deploy policies in parallel.

3.

What is the purpose of the Enforcement Mode in Azure Policy?

It prevents resource evaluation from happening at all.

It triggers entries in the Azure Activity log.

It allows testing the policy's outcome on existing resources without initiating the policy effect.

4.

What is the role of Azure Resource Manager in the governance of Azure applications and resources?

It's the deployment and management service for Azure, providing a management layer that allows creation, update, and deletion of resources.

It's a unit of management, billing, and scale in Azure.

It provides a level of scope above subscriptions.

5.

At what levels can Azure Policies be assigned?

Management Group

Management Group and Subscription

Management Group, Subscription, and Resource Group

Subscription and Resource Group

You must answer all questions before checking your work.




You must answer all questions before checking your work.

---

### 05-Cloud Adoption Framework for Azure

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/04-Azure Policy initiatives/05-Cloud Adoption Framework for Azure.md`*

# Cloud Adoption Framework for Azure

**Module:** Azure Policy initiatives

**Source:** https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/cloud-adoption-framework

---

# Cloud Adoption Framework for Azure

The Microsoft Cloud Adoption Framework for Azure offers comprehensive technical guidance for Microsoft Azure. This end-to-end framework helps cloud architects, IT experts, and business leaders reach their cloud adoption objectives. Cloud Adoption Framework includes best practices, documentation, and tools that Microsoft employees, partners, and customers contribute to formulate and implement effective business and technology strategies for the cloud. For more information, see [Microsoft Cloud Adoption Framework for Azure documentation - Cloud Adoption Framework | Microsoft Learn](/en-us/azure/cloud-adoption-framework/overview).

The following diagram provides high-level information about different methodologies that are included in Microsoft Cloud Adoption Framework for Azure for each phase of your cloud adoption life cycle. Within the framework, Microsoft Azure Policy plays a significant role in the governance framework to help govern your cloud environment and workloads.

[![Screenshot of the high-level information about different methodologies that are included in Microsoft Cloud Adoption Framework for Azure for each phase of your cloud adoption life cycle.](https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/media/microsoft-caf-for-azure.png)](media/microsoft-caf-for-azure.png#lightbox)

Cloud governance refers to the management of cloud usage in your organization. The Cloud Adoption Framework - Govern methodology offers a systematic framework for setting up and improving cloud governance in Azure. This guidance applies to organizations across various industries and it addresses crucial areas, such as regulatory compliance, security, operations, cost management, data, resource management, and AI. It's essential for defining and maintaining efficient cloud use.

Comprehensive cloud governance oversees all aspects of cloud use, minimizes various risks (such as compliance, security, resource management, and data-related concerns), and optimizes cloud operations throughout the organization. It ensures that cloud activities are consistent with the overall cloud strategy, facilitating the achievement of business objectives with reduced obstacles.

## Steps for cloud governance

Cloud governance is a continuous process. It requires ongoing monitoring, evaluation, and adjustments to adapt to evolving technologies, risks, and compliance requirements. The Cloud Adoption Framework - Govern methodology divides cloud governance into five steps.

[![Screenshot of a continuous process of Cloud governance.](https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/media/steps-for-cloud-governance.svg)](media/steps-for-cloud-governance.svg#lightbox)

1. **Build a governance team** - Establish a dedicated cloud governance team that's responsible for defining, maintaining, and reporting on the progress of cloud governance policies.
2. **Assess cloud risks** - Conduct a thorough risk assessment that's unique to your organization, addressing all risk categories, including regulatory compliance, security, operations, costs, data management, resource management, and AI-related risks.
3. **Document cloud governance policies** - Clearly document cloud governance policies that dictate acceptable cloud usage and outline the rules and guidelines that mitigate identified risks.
4. **Enforce cloud governance policies** - Implement a systematic approach to ensure compliance with cloud governance policies. Use automated tools alongside manual oversight to enforce compliance. These tools help set guardrails, monitor configurations, and ensure adherence to policies.
5. **Monitor cloud governance** - Regularly monitor cloud usage and the governance teams to ensure ongoing compliance with the established cloud governance policies.

You should complete all five steps to establish cloud governance and regularly iterate on steps 2-5 to maintain cloud governance over time.

## Considerations for defining a cloud governance policy

The key considerations when defining a corporate cloud governance policy are as follows:

- **Business risk** – You must document the evolving business risks and the business's tolerance for risk based on data classification and application criticality.
- **Policy and compliance** – You must convert risk decisions into policy statements to establish cloud adoption boundaries efficiently.
- **Process** – You must establish processes to monitor violations and adherence to corporate policies.

[![Screenshot of the key considerations when defining a corporate cloud governance policy.](https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/media/cloud-governance.png)](media/cloud-governance.png#lightbox)

The five core disciplines of cloud governance are as follows:

- **Cost management** – Evaluates and monitors costs, including controlling IT expenditures to establish well-defined cost management. It also includes adjusting resources according to demand. It's crucial to exercise control over cloud expenditure to derive greater value from your investments.
- **Security baseline** – Ensures compliance with IT security requirements by applying a security baseline to all adoption efforts.
- **Resource consistency** – Ensures consistency in resource configuration and enforcing practices for onboarding, recovery, and discoverability.
- **Identity baseline** – Ensures that the baseline for identity and access is enforced by consistently applying role definitions and assignments.
- **Deployment acceleration** – Accelerates the deployment of policies through centralization, consistency, and standardization across deployment templates.

Adopting these measures simplifies the compliance process and also enhances the security and efficiency of your cloud environment.

## Cloud governance with Azure Policy

Azure's primary governance tool is [Azure Policy](/en-us/azure/governance/policy/overview). Azure Policy facilitates the governance of all resources, including current and forthcoming resources. It helps to enforce organizational standards and to assess compliance at scale by establishing guardrails across various resources.

Azure Policy allows for centralized management, allowing you to track compliance status and investigate changes leading to noncompliance. You can consolidate all compliance data into a singular repository, which simplifies auditing processes for effective cloud compliance and resource governance. The compliance dashboard offered by Azure Policy presents an aggregated view of the environment's overall state, with the ability to examine details at each resource and each policy level.

Azure Policy ensures consistent adherence to compliance standards and prevents misconfigurations. It also helps bring your resources to compliance through bulk remediation for existing resources and automatic remediation for new resources. Additionally, embedding Azure Policy directly into the Azure platform can significantly reduce the need for external approval processes, thus boosting developer productivity.

Some useful governance actions that you can enforce with Azure Policy include:

- Ensure that your team deploys Azure resources only to allowed regions.
- Enforce geo-replication rules to comply with your data residency requirements.
- Allow only certain virtual machine sizes for your cloud environment.
- Enforce the consistent application of taxonomic tags across resources.
- Recommend system updates on your servers.
- Allow multifactor authentication for all subscription accounts.
- Require resources to send diagnostic logs to an Azure Monitor Logs workspace.

Azure Policy evaluates your resources and highlights resources that aren't compliant with the policies that you create. Azure Policy can also prevent noncompliant resources from being created. Azure Policy comes with built-in policy and initiative definitions for Storage, Networking, Compute, Security Center, and Monitoring. For example, if you define a policy that only allows a certain size for the virtual machines (VMs) to be used in your environment, that policy is invoked when you create a new VM and whenever you resize existing VMs. Azure Policy also evaluates and monitors all current VMs in your environment, including VMs that were created before the policy was created.

In some cases, Azure Policy can automatically remediate noncompliant resources and configurations to ensure the integrity of the state of the resources. For example, if all resources in a specific resource group need to have the *AppName* tag with a value of *SpecialOrders*, Azure Policy can automatically apply that tag if it's missing. However, you maintain full control over your environment. If there's a particular resource that you don't want Azure Policy to automatically update, you can mark that resource as an exception, and the policy won't automatically update it.

Azure Policy also integrates with Azure DevOps by applying any continuous integration and delivery pipeline policies that pertain to the predeployment and post-deployment phases of your applications.

The objective when designing an Azure Policy should be to strike a balance between control and stability in one area with speed and results in the other. The main reason to maintain balance is to ensure that the environment remains highly manageable so that you can implement necessary levels of control to ensure governance without hindering operational efficiency or productivity. In establishing and enforcing these controls, you must take care that your speed to achieve efficiency isn't affected. Hence, achieving this balance between control and stability with speed and results, often requires thoughtful compromise, and it's necessary to carefully evaluate the potential impact before introducing new policies.

For more information, see [Microsoft Cloud Adoption Framework for Azure - Cloud Adoption Framework | Microsoft Learn](/en-us/azure/cloud-adoption-framework/).

---

### 06-Evaluation of resources through Azure Policy

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/04-Azure Policy initiatives/06-Evaluation of resources through Azure Policy.md`*

# Evaluation of resources through Azure Policy

**Module:** Azure Policy initiatives

**Source:** https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/azure-policies-evaluation-resources

---

# Evaluation of resources through Azure Policy

A significant benefit of Azure Policy is the insight and controls that it provides over resources in a subscription or management group of subscriptions. This control can be used to prevent resources from being created in the wrong location, enforce common and consistent tag usage, or audit existing resources for appropriate configurations and settings. Before you review compliance data and react to it, you need to understand the evaluation triggers, timings, and the resource compliance states.

## Evaluation triggers

Evaluations of assigned policies and initiatives happen as the result of various events:

- A policy or initiative is newly assigned to a scope
- A policy or initiative already assigned to a scope is updated
- A resource is deployed to or updated in a scope with an assignment through Azure Resource Manager, REST API, or a supported SDK
- A subscription (resource type Microsoft.Resources/subscriptions) is created or moved in a management group hierarchy with an assigned policy definition that targets the subscription resource type
- A policy exemption is created, updated, or deleted
- Standard compliance evaluation cycle
- The machine configuration resource provider is updated with compliance details by a managed resource
- On-demand scan

For more information, see [Evaluation triggers](/en-us/azure/governance/policy/how-to/get-compliance-data#evaluation-triggers).

## Evaluation timing

When you're working with policy assignments in Azure, you need to understand the behavior and timing of compliance scans, especially in Brownfield scenarios, where new policies are applied to existing resources. Compliance scans through Azure policies are triggered by various methods:

- **Automatic full scan** - A full compliance scan is triggered automatically every 24 hours.
- **Manual scan for Brownfield scenarios** - In cases where a new policy is applied to existing resources (Brownfield scenarios), you can manually trigger a compliance scan by running *az policy state trigger-scan*.

When you assign a new policy, a delay can occur in the policy taking effect, which can be up to 30 minutes. The Azure Resource Manager cache holds session data, and it can take time for the policy to propagate in the same session. To bypass the caching delay, you can sign out and sign back in to refresh the Azure Resource Manager cache, which ensures that the new policy is applied immediately to the defined scope.

After the scan starts, several factors influence how long it takes for a compliance scan to complete:

- **Policy definitions** - The size and complexity of the policy definitions can increase scan time.
- **Number of policies** - The more policies applied, the longer the scan might take.
- **Scope size** - The size of the resource scope assigned to the policy also plays a role.
- **System load** - Compliance scans are a low-priority operation, meaning that if the system is busy with more critical tasks, the scan might take longer. The system prioritizes interactive and high-importance operations, so scans might take several minutes, or tens of minutes, even in smaller environments.
- **Synchronous scan (Low-Priority Execution)** - Because compliance scans are synchronous and assigned a low priority in Azure's system, they're delayed if the system is busy. This scan can significantly extend the time it takes for the scan to complete, even for smaller scopes or policies.

This understanding of the compliance scan process and potential delays allows you to better manage the application and avoid unnecessary waiting, especially in environments with complex or extensive policy definitions.

## Resource compliance states

When initiative or policy definitions are assigned, Azure Policy determines which resources are applicable. Then, it evaluates those resources that aren't excluded or exempted. Evaluation provides one of the compliance states to each resource based on conditions in the policy rule and each resource's adherence to those requirements.

- **Non-compliant**
- **Compliant**
- **Error** (for template or evaluation error)
- **Conflicting** (two or more policy assignments in the same scope with contradicting rules, such as two policies appending the same tag with different values)
- **Protected** (resource covered under an assignment with a *denyAction* effect)
- **Exempted Unknown** (default state for definitions with a *manual* effect)

When multiple resources or policies have varying compliance states, the overall compliance state is assessed individually for each resource and for each policy assignment. Azure Policy ranks each compliance state so that one wins over another in this situation. The rank order of the states is as given in the previous list of compliance states.

The compliance percentage is determined by dividing **Compliant**, **Exempt**, and **Unknown** resources by total resources. Total resources include resources with **Compliant**, **Non-compliant**, **Unknown**, **Exempt**, **Conflicting**, and **Error** states.

For more information on when the policies return these states for any particular resource, see [Azure Policy compliance states](/en-us/azure/governance/policy/concepts/compliance-states).

## Enforcement Mode

*enforcementMode* is a property of a policy assignment that lets you deactivate the enforcement of certain policy effects. This mode allows you to test the policy's outcome on existing resources without initiating the policy effect or triggering entries in the [Azure Activity log](/en-us/azure/azure-monitor/essentials/platform-logs-overview). The *enforcementMode* can be changed to Enabled after the policy is thoroughly tested.

This scenario is commonly referred to as *What If* and aligns to safe deployment practices. The *enforcementMode* is different from the *disabled* effect. The *disabled* effect prevents resource evaluation from happening at all while *enforcementMode* lets the evaluation happen without the effect taking place.

The following table describes this property's values.

| Mode | JSON value | Type | Remediate manually | Activity log entry | Description |
| --- | --- | --- | --- | --- | --- |
| Enabled | Default | string | Yes | Yes | The policy effect is enforced during resource creation or update. |
| Disabled | DoNotEnforce | string | Yes | No | The policy effect isn't enforced during resource creation or update. |

If *enforcementMode* isn't specified in a policy or initiative definition, the value *Default* is used. Remediation tasks can be started for *deployIfNotExists* policies, even when *enforcementMode* is set to *DoNotEnforce*.

## Policy enforcement and safe deployment best practices

Without the appropriate knowledge of best practices and proper testing, applying a set of policy to an existing environment that's running production workloads can result in unintended behaviors of policy resources. Treating policy as code (keeping your policy definitions in source control, and whenever a change is made, testing and validating that change) allows you to automate testing and make sure that no manual error factor happens. The best practices framework focuses on minimizing the impact of policy changes while ensuring compliance, and it includes two aspects:

- **First aspect** - Start from Assignments of new policies with *enforcementMode* Disabled. When assigning policies that include deny or modify actions, beginning with *enforcementMode* Disabled allows you to view the compliance state and evaluate policy outcomes without triggering actions or denying operations. This "what-if" scenario minimizes impact and helps identify issues in the new policies or changes without disrupting the environment.
- **Second aspect** - Deploy policies in deployment rings. To control potential negative impacts, policies should be deployed gradually in smaller subsets and then in bigger sets. You can start with test and development environments and then move to production by applying the policy to a small subset first. This strategy helps in testing the policy thoroughly. Gradually expanding the scope (through deployment rings) can cover the full production environment.

The following diagram shows how to apply the safe deployment best practices framework for Azure Policy assignments.

[![Screenshot of how to apply the safe deployment best practices framework for Azure Policy assignments.](https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/media/safe-deployment.png)](media/safe-deployment.png#lightbox)

The following steps correspond with the outlined steps in the preceding screenshot:

1. **Create definition** - Begin by defining the policy definition with the scope as root (tenant).
2. **Create assignment** - Define deployment rings (1 to 5) by using resource selectors. Assign the policy to a specific scope (such as a resource group, subscription, or management group) in Ring 5. Assign with *enforcementMode* Disabled to evaluate compliance without enforcing changes.
3. a) **Compliance check** - Verify that the policy is being applied correctly and that the desired compliance state is achieved for the resources in Ring 5.

   b) **Application health check** - Assess the impact of the policy for the resources in Ring 5. Ensure that no unexpected side effects exist.
4. **Repeat for each ring (Non-production)** - Repeat step 3 for all nonproduction environment rings.
5. **Update assignment (Optional)** - If necessary, adjust the policy definition or assignment based on the evaluation of resources of the nonproduction environment and then reassign it to the resources in Ring 5 with the *enforcementMode* Enabled.
6. a) **Compliance check** - Reevaluate compliance after making changes (same as step 3a).

   b) **Application health check** - Again, verify that the policy isn't causing issues (same as step 3b).
7. **Repeat for each ring (Non-production)** - Repeat step 6 for all nonproduction environment rings.
8. **Repeat for production rings** - After the policy is validated in a nonproduction environment, gradually deploy it to production environments, starting with a smaller subset (ring) and expanding the scope over time.

For more detailed steps on the safe deployment of Azure Policy assignments with different effects, see [Safe deployment of Azure Policy assignments](/en-us/azure/governance/policy/how-to/policy-safe-deployment-practices#steps-for-safe-deployment-of-azure-policy-assignments-with-deny-or-append-effects).

## Reacting to policy state changes

Azure Policy events allow applications to react to state changes. This integration is done without the need for complicated code or expensive and inefficient polling services. Events from Azure Policy (Event Source) are pushed through Microsoft Azure Event Grid to Event Handlers.

[![Screenshot of how Azure Policy events allow applications to react to state changes.](https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/media/reacting-to-policy-changes.png)](media/reacting-to-policy-changes.png#lightbox)

Azure Event Grid provides reliable delivery services to your applications through rich retry policies and dead-letter delivery. Event Grid takes care of the proper routing, filtering, and multicasting of the events to destinations through Event Grid subscriptions. For more information, see [Azure Event Grid](/en-us/azure/event-grid/).

An Event Handler is the place where the event is sent. Several services, such as Microsoft Azure Functions, Microsoft Azure Logic Apps, or your own custom HTTP listener, can be configured to handle events. You can also use any webhook for handling events.

For more information, see [Event handlers in Azure Event Grid](/en-us/azure/event-grid/event-handlers), [Reacting to Azure Policy state change events](/en-us/azure/governance/policy/concepts/event-overview?tabs=event-grid-event-schema), and the [Route policy state change events to Event Grid with Azure CLI](/en-us/azure/governance/policy/tutorials/route-state-change-events) tutorial.

---

### 07-Azure Policy definitions

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/04-Azure Policy initiatives/07-Azure Policy definitions.md`*

# Azure Policy definitions

**Module:** Azure Policy initiatives

**Source:** https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/azure-policy-definitions

---

# Azure Policy definitions

**Azure Policy definition** describes resource compliance conditions and the action or effects that take place if those conditions are met. The policy consists of two parts:

- A **condition** that compares a resource property field or a value, accessed by using aliases, to a required value.
- The **effect** determines what happens when the policy rule is evaluated to match the condition. For each new resource, an updated resource, or an existing resource, the effects behave differently.

## Anatomy of a policy definition

You use JSON to create a policy definition that contains the elements shown in the following table.

| Element | Description | Properties or values |
| --- | --- | --- |
| *displayName (string, max 128 characters)* | Used to identify the policy definition. |  |
| *description (string, max 512 characters)* | Provides context for when the definition is used. |  |
| *policyType (read-only string)* | Indicates the origin of the policy definition. This property can't be set, but SDK returns three values which are visible in the portal. | ● Built in: Provided and maintained by Microsoft. ● Custom: Custom definitions created by the customer. ● Static: Regulatory Compliance policy with Microsoft ownership. |
| *mode (string)* | Configured depending on the target of the policy: an Azure Resource Manager property or a Resource Provider property. | ● Resource Manager Modes:     o On All: Evaluates resource groups, subscriptions, and all resource types.     o Indexed: Evaluates resource groups, subscriptions, and all resource types. ● Resource Provider Modes (limited to Built in policies and fully supported):     o Microsoft.Kubernetes.Data     o Microsoft.KeyVault.Data     o Microsoft.Network.Data ● Resource Provider Modes (limited to Built in policies and in preview mode):     o Microsoft.ManagedHSM.Data     o Microsoft.DataFactory.Data |
| *version (string, optional)* | Built-in policy definitions can host multiple versions with the same definitionID. If no version number is specified, all experiences show the latest version of the definition. |  |
| *metadata (object, optional, max 1,024 characters)* | Stores information about the policy definition. | Common properties (for Built-in policies): ● *version (string)*: Tracks details about the version of the contents of a policy definition. ● *category (string)*: Determines under which category in the Azure portal the policy definition is displayed. ● *preview (Boolean)*: True or false flag that indicates if the policy definition is in preview. ● *deprecated (Boolean)*: True or false flag that indicates if the policy definition is deprecated. ● *portalReview (string)*: Determines if parameters require review in the portal. |
| *parameters (object, optional)* | Help simplify your policy management by reducing the number of policy definitions. By including parameters in a policy definition, you can reuse that policy for different scenarios by using different values. | Properties: ● name ● type (String, Array, Object, Boolean, Integer, Float, DateTime) ● metadata (description, displayName, strongType, assignPermissions) ● defaultValue ● allowedValues ● schema |
| *policyRule (object)* | The effect of a policy is defined in the *policyRule*. The policy rule consists of the *if and then* blocks. ● In the *if* block, you define one or more conditions that specify when the policy applies. ● In the *then* block, you define the effect that happens when the *if* conditions result true. |  |

```
{
  "displayName": "Allowed locations",
  "description": "This policy enables you to restrict the locations your organization can specify when deploying resources. Use to enforce your geo-compliance requirements. Excludes resource groups, Microsoft.AzureActiveDirectory/b2cDirectories, and resources that use the 'global' region.",
  "policyType": "BuiltIn",
  "mode": "Indexed",
  "metadata": {
    "version": "1.0.0",
    "category": "General"
  },
  "parameters": {
    "listOfAllowedLocations": {
      "type": "Array",
      "metadata": {
        "description": "The list of locations that can be specified when deploying resources.",
        "strongType": "location",
        "displayName": "Allowed locations"
      }
    }
  },
    "policyRule": {
      "if": {
        "allOf": [
          {
            "field": "location",
            "notIn": "[parameters('listOfAllowedLocations')]"
          },
          {
            "field": "location",
            "notEquals": "global"
          },
          {
            "field": "type",
            "notEquals": "Microsoft.AzureActiveDirectory/b2cDirectories"
          }
        ]
      },
      "then": {
        "effect": "deny"
      }
    }
  }
```

In the given example, *b2cDirectories* is excluded from the policy logic because its location field isn't a region (it can be "United States," "Europe," "Asia Pacific," or "Australia"). This logic can be enforced with a separate policy.

## Logical operators and conditions (*if* blocks)

The first part of the *policyRule* in an Azure Policy definition is the *if* block. This block defines the conditions for which the policy evaluates the resources. A policy definition can contain several conditional statements. Depending on your evaluation requirements, you might or might not need each statement to be true, and you might only need some of them to be true.

### Logical operators supported in the *if* block

In the *if* condition, you can put different logical operators.

| Operator | Type | Description |
| --- | --- | --- |
| *not* | {condition or operator} | The *not* syntax inverts the result of the condition. |
| *allOf* | [{condition or operator}, {condition or operator}] | The *allOf* syntax (like the logical *and* operation) requires all conditions to be true. |
| *anyOf* | [{condition or operator}, {condition or operator}] | The *anyOf* syntax (like the logical *or* operation) requires one or more conditions to be true. |

The following example shows use of the *allOf* logical operator:

```
{
  "if": {
    "allOf": [
      {
        "field": "location",
        "notIn": "[parameters('listOfAllowedLocations')]"
      },
      {
        "field": "location",
        "notEquals": "global"
      },
      {
        "field": "type",
        "notEquals": "Microsoft.AzureActiveDirectory/b2cDirectories"
      }
    ]
  },
  "then": {
    "effect": "deny"
  }
}
```

### Nested logical operations

Logical operations are optional and can be nested to create complex scenarios.

The following example shows a *not* operation nested in an *allOf* operation:

```
"if": {
    "allOf": [
      {
        "not": {
          "field": "tags",
          "containsKey": "application"
        }
      },
      {
        "field": "type",
        "equals": "Microsoft.Storage/storageAccounts"
      }
    ]
  },
```

### Conditions

Properties like fields, values, or counts can be evaluated within a condition.

|  |  |  |
| --- | --- | --- |
| **Fields** | Conditions that evaluate whether the values of properties in the resource request payload meet certain criteria can be formed by using a field expression. | Name, fullName, kind, type, location, ID, identity.type, tags, tags['tagName'], property aliases |
| **Value** | Conditions that evaluate whether a value meets certain criteria can be formed by using a value expression. |  |
| **Count** | Conditions that count how many members of an array meet certain criteria can be formed by using a count expression. | ● Field count, value count ● The current () function returns the value of the array member that's being evaluated |

The condition in an Azure Policy assesses whether the evaluated values for the properties, such as Fields, Value, or Count, meets certain criteria. If the result of a function is an error, the policy results in a deny effect. This result can be avoided while testing by disabling *enforcementMode* in the assignment. For more information, see [Enforcement Mode](/en-us/azure/governance/policy/concepts/assignment-structure#enforcement-mode).

| Evaluation criteria | Value type |
| --- | --- |
| *equals* | stringValue |
| *notEquals* | stringValue |
| *like* | stringValue |
| *notLike* | stringValue |
| *match* | stringValue |
| *notMatch* | stringValue |
| *matchInsensitively* | stringValue |
| *notMatchInsensitively* | stringValue |
| *contains* | stringValue |
| *notContains* | stringValue |
| *In* | ["stringValue1", "stringValue2"] |
| *notIn* | ["stringValue1", "stringValue2"] |
| *containsKey* | keyName |
| *notContainsKey* | keyName |
| *less* | dateValue |
| *less* | stringValue |
| *less* | intValue |
| *lessOrEquals* | dateValue |
| *lessOrEquals* | stringValue |
| *lessOrEquals* | intValue |
| *greater* | dateValue |
| *greater* | stringValue |
| *greater* | intValue |
| *greaterOrEquals* | dateValue |
| *greaterOrEquals* | stringValue |
| *greaterOrEquals* | intValue |
| *exists* | bool |

The following JSON is an example of using conditions:

```
{
  "if": {
    "allOf": [
      {
        "value": "[resourceGroup().name]",
        "like": "*netrq"
      },
      {
        "field": "type",
        "notLike": "Network/*"
      }
    ]
  },
  "then": {
    "effect": "deny",
    "details": {
      "count": {
        "field": "Microsoft.Network/virtualNetworks/addressSpace.addressPrefixes[*]",
        "where": {
          "value": "[ipRangeContains('10.0.0.0/24', current('Microsoft.Network/virtualNetworks/addressSpace.addressPrefixes[*]'))]",
          "equals": "greater"
        }
      }
    }
  }
}
```

### Policy functions

Functions can be used to introduce extra logic into a policy rule. They're resolved in the policy rule of a policy definition and in the parameter values that are assigned to the policy definitions in an initiative.

The Resource Manager template functions are available to use in a policy rule except a [few policy functions and user-defined functions](/en-us/azure/governance/policy/concepts/definition-structure-policy-rule#policy-functions).

The *utcNow()* function is available to use in a policy rule but differs from use in an Azure Resource Manager template (ARM template). Unlike an ARM template, this function can be used outside *defaultValue*. It returns a string set to the current date and time in Universal ISO 8601 DateTime format `yyyy-MM-ddTHH:mm:ss.fffffffZ`.

The following table describes the functions that are only available in policy rules.

| Function | Description |
| --- | --- |
| `addDays(dateTime, numberOfDaysToAdd)` | ● `dateTime`: [Required] string - String in the Universal ISO 8601 DateTime format 'yyyy-MM-ddTHH:mm:ss.FFFFFFFZ'. ● `numberOfDaysToAdd`: [Required] integer - Number of days to add. |
| `Field(fieldName)` | ● `fieldName`: [Required] string - Name of the [field](/en-us/azure/governance/policy/concepts/definition-structure-policy-rule#fields) to retrieve. ● Returns the value of that field from the resource evaluated by the *If* condition. ● `field` is primarily used with `auditIfNotExists` and `deployIfNotExists` to reference fields on the resource that are being evaluated. |
| `requestContext().apiVersion` | Returns the API version of the request that triggered policy evaluation. This value is the API version that was used in the PUT/PATCH request for evaluations on resource creation/update. The latest API version is always used during compliance evaluation on existing resources. |
| `policy()` | Returns the following information about the policy that's being evaluated. Properties can be accessed from the returned object. `"assignmentId": ""`, `"definitionId": ""`, `"setDefinitionId": ""`, `"definitionReferenceId": ""` |
| `ipRangeContains(range, targetRange)` | ● `range`: [Required] string - String specifying a range of IP addresses to check if the *targetRange* is within range. ● `targetRange`: [Required] string - String specifying a range of IP addresses to validate as included within the *range*.  Returns a *boolean* for whether the *range* IP address range contains the *targetRange* IP address range. Empty ranges or mixing between IP families isn't allowed and results in evaluation failure. |
| `current(indexName)` | Special function that can only be used inside count expressions. |

## Effect types (*then* blocks)

The second part of the *policyRule* in an Azure Policy definition is the *then* block. This block defines the effect that takes place when the policy rule is evaluated to match the condition resources. More than one effect can be valid for a given policy definition. Parameters are often used to specify allowed effect values (*allowedValues*) in such cases so that a single definition can be more versatile during assignment. Resource properties and logic in the policy rule can determine whether a certain effect is considered valid to the policy definition.

| Effect | Description | Type |
| --- | --- | --- |
| *disabled* | The *disabled* effect is a way to deactivate the policy. If a policy definition has *Disabled* as its effect, any assignments of that policy aren't active. This effect is checked first to determine if the policy rule should be evaluated. This flexibility makes it possible to deactivate a single assignment instead of deactivating all of that policy's assignments. | Synchronous evaluation |
| *append* | The *append* effect is used to add more fields to the requested resource during creation or update. It's mostly obsolete because *Modify* can also be used to add fields to the request. | Synchronous evaluation |
| *modify* | The *modify* effect is used to add, update, or remove properties or tags on a subscription or resource during creation or update. It allows Azure Policy to modify requests to Azure Resource Manager by altering fields to ensure compliance. | Synchronous evaluation |
| *deny* | The *deny* effect is used to prevent a resource request that doesn't match defined standards through a policy definition and fails the request. | Synchronous evaluation |
| *denyAction* | The *denyAction* effect is used to block requests based on intended action to resources at scale. Currently, the only supported action is DELETE. | Synchronous evaluation |
| *audit* | The *audit* effect is used to create a warning event in the activity log when you're evaluating a noncompliant resource, but it doesn't stop the request. | Asynchronous evaluation |
| *auditIfNotExists* | The *auditIfNotExists* effect allows the auditing of resources that are related to the resource that matches the *if* condition but doesn't have the properties specified in the details of the *then* condition. | Asynchronous evaluation |
| *deployIfNotExists* | The *deployIfNotExists* policy definition runs a template deployment when the condition is met. It can trigger deployment of a related resource based on the compliance state of the currently evaluated resource. | Asynchronous evaluation |
| *manual* | The *manual* effect allows you to self-attest the compliance of resources or scopes. When a policy definition with *Manual* effect is assigned, you can set the compliance states of targeted resources or scopes through custom attestations. | Manual attestation |

The following list provides general guidance around interchangeable effects:

- *audit*, *deny*, and either *modify* or *append* are often interchangeable.
- *auditIfNotExists* and *deployIfNotExists* are often interchangeable.
- *manual* isn't interchangeable.
- *disabled* is interchangeable with any effect.

Multiple policies can be assigned to a single resource at the same scope or at different scopes. Each policy mostly has a different effect defined. The condition and effect for each policy is independently evaluated. The net result of layering policy definitions is considered **cumulative most restrictive**.

---

### 08-Introduction

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/04-Azure Policy initiatives/08-Introduction.md`*

# Introduction

**Module:** Azure Policy initiatives

**Source:** https://learn.microsoft.com/en-us/training/modules/sovereignty-policy-initiatives/overview

---

# Introduction

Azure Policy is a service that allows you to create, assign, and manage governance policies that enforce rules and effects over Azure resources to ensure that they stay compliant with your IT governance standards. These policies enforce various rules and effects on resources, ensuring that they adhere to corporate standards and service-level agreements. These policies are described in JSON format and are known as policy definitions. Azure Policy is crucial for enforcing organizational standards and assessing compliance on a large scale.

Azure Policy initiatives are a collection of Azure Policy definitions that are grouped together toward a specific goal or purpose. By consolidating multiple Azure policies into a single item, Azure Policy initiatives allow centralized control and enforcement of configurations across Azure resources.

Industry-specific organizations in sectors like government, public sector, finance, and others accelerate digital transformation and achieve better business outcomes. They can achieve this objective by adopting specific, sovereignty-focused Azure Policy initiatives to address the complexity of compliance with national and regional regulatory requirements.

Customers can create Azure Policy initiatives that aid in customizing deployments to reduce the time needed to audit environments and help meet established regulatory compliance frameworks and government requirements. The initiatives help public sector partners and customers create cloud guardrails and enforce specific regulations effectively. They can layer policy initiatives to help form a complete solution for their specific needs, and they can use deployment automation to ensure consistency, best practices, and save time.

In this module, you learn how Azure Policy can help do the common tasks related to creating, assigning, and managing policies across your organization, such as:

- Assign a policy to enforce a condition for resources you create in the future
- Create and assign an initiative definition to track compliance for multiple resources
- Resolve a noncompliant or denied resource
- Implement a new policy across an organization

Important

Organizations are wholly responsible for ensuring their own compliance with all applicable laws and regulations. The information provided in this document does not constitute legal advice, and organizations should consult their legal advisors for any questions regarding regulatory compliance.

---

## 05-Secure your Azure resources with Azure role-based access control (Azure RBAC)

### 01-Introduction

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/05-Secure your Azure resources with Azure role-based access control (Azure RBAC)/01-Introduction.md`*

# Introduction

**Module:** Secure your Azure resources with Azure role-based access control (Azure RBAC)

**Source:** https://learn.microsoft.com/en-us/training/modules/secure-azure-resources-with-rbac/1-introduction

---

# Introduction

For any organization using the cloud, securing your Azure resources such as virtual machines, websites, networks, and storage is a critical function. You want to ensure that your data and assets are protected, but still grant your employees and partners the access they need to perform their jobs. Azure RBAC is an authorization system in Azure that helps you manage who has access to Azure resources, what they can do with those resources, and where they have access.

Suppose you work for First Up Consultants, which is an engineering firm that specializes in circuit and electrical design. They've moved their workloads and assets to Azure to make collaboration easier across several offices and other companies. You work in the IT department at First Up Consultants. You're responsible for keeping the company's assets secure, but still allowing users to access the resources they need. You've heard that Azure RBAC can help you manage resources in Azure.

In this module, you'll learn how to use Azure RBAC to manage access to resources in Azure.

## Learning objectives

In this module, you'll:

- Verify access to resources for yourself and others.
- Grant access to resources.
- View activity logs of Azure RBAC changes.

---

### 02-What is Azure RBAC_

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/05-Secure your Azure resources with Azure role-based access control (Azure RBAC)/02-What is Azure RBAC_.md`*

# What is Azure RBAC?

**Module:** Secure your Azure resources with Azure role-based access control (Azure RBAC)

**Source:** https://learn.microsoft.com/en-us/training/modules/secure-azure-resources-with-rbac/2-rbac-overview

---

# What is Azure RBAC?

When it comes to identity and access, most organizations that are considering using the public cloud are concerned about two things:

1. Ensuring that when people leave the organization, they lose access to resources in the cloud.
2. Striking the right balance between autonomy and central governance. For example, giving project teams the ability to create and manage virtual machines in the cloud, while centrally controlling the networks those VMs use to communicate with other resources.

Microsoft Entra ID and Azure RBAC work together to make it simple to carry out these goals.

## Azure subscriptions

First, remember that each Azure subscription is associated with a single Microsoft Entra directory. Users, groups, and applications in that directory can manage resources in the Azure subscription. The subscriptions use Microsoft Entra ID for single sign-on (SSO) and access management. You can extend your on-premises Active Directory to the cloud by using **Microsoft Entra Connect**. This feature allows your employees to manage their Azure subscriptions by using their existing work identities. When you disable an on-premises Active Directory account, it automatically loses access to all Azure subscriptions connected with Microsoft Entra ID.

## What's Azure RBAC?

Azure RBAC is an authorization system built on Azure Resource Manager that provides fine-grained access management for resources in Azure. With Azure RBAC, you can grant the exact access that users need to do their jobs. For example, you can use Azure RBAC to let one employee manage virtual machines in a subscription, while another manages SQL databases within the same subscription.

The following video describes Azure RBAC in detail:

You can grant access by assigning the appropriate Azure role to users, groups, and applications at a certain scope. The scope of a role assignment can be a management group, subscription, a resource group, or a single resource. A role assigned at a parent scope also grants access to the child scopes contained within it. For example, a user with access to a resource group can manage all the resources it contains like websites, virtual machines, and subnets. The Azure role that you assign dictates what resources the user, group, or application can manage within that scope.

The following diagram depicts how the classic subscription administrator roles, Azure roles, and Microsoft Entra roles are related at a high level. Child scopes, such as service instances, inherit roles assigned at a higher scope, like an entire subscription.

![Diagram that depicts how the classic subscription administrator roles, Azure roles, and Microsoft Entra roles are related at a high level.](https://learn.microsoft.com/en-us/training/modules/secure-azure-resources-with-rbac/media/2-azuread-and-azure-roles.png)

In the preceding diagram, a subscription is associated with only one Microsoft Entra tenant. Also note that a resource group can have multiple resources, but it's associated with only one subscription. Although it's not obvious from the diagram, a resource can be bound to only one resource group.

## What can I do with Azure RBAC?

Azure RBAC allows you to grant access to Azure resources that you control. Suppose you need to manage access to resources in Azure for the development, engineering, and marketing teams. You’ve started to receive access requests, and you need to quickly learn how access management works for Azure resources.

Here are some scenarios you can implement with Azure RBAC:

- Allow one user to manage virtual machines in a subscription and another user to manage virtual networks.
- Allow a database administrator group to manage SQL databases in a subscription.
- Allow a user to manage all resources in a resource group, such as virtual machines, websites, and subnets.
- Allow an application to access all resources in a resource group.

## Azure RBAC in the Azure portal

In several areas in the Azure portal, you'll see a pane named **Access control (IAM)**, also known as *identity and access management*. On this pane, you can see who has access to that area and their role. Using this same pane, you can grant or remove access.

The following shows an example of the Access control (IAM) pane for a resource group. In this example, Alain has been assigned the Backup Operator role for this resource group.

![Screenshot of the Azure portal showing the Access control Role assignment pane with the Backup operator section highlighted.](https://learn.microsoft.com/en-us/training/modules/secure-azure-resources-with-rbac/media/2-resource-group-access-control.png)

## How does Azure RBAC work?

You can control access to resources using Azure RBAC by creating role assignments, which control how permissions are enforced. To create a role assignment, you need three elements: a security principal, a role definition, and a scope. You can think of these elements as *who*, *what*, and *where*.

### 1. Security principal (who)

A *security principal* is just a fancy name for a user, group, or application to which you want to grant access.

![An illustration showing security principal including user, group, and service principal.](https://learn.microsoft.com/en-us/training/modules/secure-azure-resources-with-rbac/media/2-rbac-security-principal.png)

### 2. Role definition (what)

A *role definition* is a collection of permissions. It's sometimes just called a role. A role definition lists the permissions the role can perform such as read, write, and delete. Roles can be high-level, like Owner, or specific, like Virtual Machine Contributor.

![An illustration listing different built-in and custom roles with zoom-in on the definition for the contributor role.](https://learn.microsoft.com/en-us/training/modules/secure-azure-resources-with-rbac/media/2-rbac-role-definition.png)

Azure includes several built-in roles that you can use. The following lists four fundamental built-in roles:

- **Owner**: Has full access to all resources, including the right to delegate access to others.
- **Contributor**: Can create and manage all types of Azure resources, but can’t grant access to others.
- **Reader**: Can view existing Azure resources.
- **User Access Administrator**: Lets you manage user access to Azure resources.

If the built-in roles don't meet the specific needs of your organization, you can create your own custom roles.

### 3. Scope (where)

*Scope* is the level where the access applies. This is helpful if you want to make someone a Website Contributor but only for one resource group.

In Azure, you can specify a scope at multiple levels: management group, subscription, resource group, or resource. Scopes are structured in a parent-child relationship. When you grant access at a parent scope, the child scopes automatically inherit those permissions. For example, if a group is assigned the Contributor role at the subscription scope, it will inherit the role for all resource groups and resources within the subscription.

![An illustration showing a hierarchical representation of different Azure levels to apply scope. The hierarchy, starting with the highest level, is in this order: Management group, subscription, resource group, and resource.](https://learn.microsoft.com/en-us/training/modules/secure-azure-resources-with-rbac/media/2-rbac-scope.png)

### Role assignment

Once you have determined the who, what, and where, you can combine those elements to grant access. A *role assignment* is the process of binding a role to a security principal at a particular scope for the purpose of granting access. To grant access, you'll create a role assignment. To revoke access, you'll remove a role assignment.

The following example shows how the Marketing group has been assigned the Contributor role at the sales resource group scope.

![An illustration showing a sample role assignment process for Marketing group, which is a combination of security principal, role definition, and scope. The Marketing group falls under the Group security principal and has a Contributor role assigned for the Resource group scope.](https://learn.microsoft.com/en-us/training/modules/secure-azure-resources-with-rbac/media/2-rbac-overview.png)

## Azure RBAC is an allow model

Azure RBAC is an *allow* model. This means that when you're assigned a role, Azure RBAC allows you to perform certain actions such as read, write, or delete. If one role assignment grants you read permissions to a resource group, and a different role assignment grants you write permissions to the same resource group, then you'll have read and write permissions on that resource group.

Azure RBAC has something called `NotActions` permissions. You can use `NotActions` to create a set of not allowed permissions. The access a role grants—the *effective permissions*—is computed by subtracting the `NotActions` operations from the `Actions` operations. For example, the [Contributor](/en-us/azure/role-based-access-control/built-in-roles#contributor) role has both `Actions` and `NotActions`. The wildcard (\*) in `Actions` indicates that it can perform all operations on the control plane. You'd then subtract the following operations in `NotActions` to compute the effective permissions:

- Delete roles and role assignments
- Create roles and role assignments
- Grant the caller User Access Administrator access at the tenant scope
- Create or update any blueprint artifacts
- Delete any blueprint artifacts

---

### 03-Summary

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/05-Secure your Azure resources with Azure role-based access control (Azure RBAC)/03-Summary.md`*

# Summary

**Module:** Secure your Azure resources with Azure role-based access control (Azure RBAC)

**Source:** https://learn.microsoft.com/en-us/training/modules/secure-azure-resources-with-rbac/8-summary

---

# Summary

In this module, you learned about Azure RBAC, and how you can use it to secure your Azure resources. To grant access, you assign users a role at a particular scope. Using Azure RBAC, you can grant only the amount of access to users that they need to perform their jobs.

Azure RBAC has more than 200 built-in roles. However, if your organization needs specific permissions, you can create your own custom roles. Azure keeps track of your Azure RBAC changes in case you need to see what changes were made in the past.

## Further reading

To continue learning about Azure RBAC, check out [What is Azure role-based access control (Azure RBAC)?](/en-us/azure/role-based-access-control/overview).

---

## 06-Allow users to reset their password with Microsoft Entra self-service password reset

### 01-Introduction

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/06-Allow users to reset their password with Microsoft Entra self-service password reset/01-Introduction.md`*

# Introduction

**Module:** Allow users to reset their password with Microsoft Entra self-service password reset

**Source:** https://learn.microsoft.com/en-us/training/modules/allow-users-reset-their-password/1-introduction

---

# Introduction

Suppose you're an IT administrator for a large retail organization. Your organization starts using Microsoft Entra ID to allow employees to securely sign in and use software as a service (SaaS) apps. It also allows access to the organization's resources in Microsoft 365. You're overwhelmed with password-reset requests because you currently reset employees' passwords manually. To get these employees back to being productive quickly and reduce your workload, you decide to evaluate and set up self-service password reset in Microsoft Entra ID.

In this module, you learn how Azure supports this feature and how to set it up. Only paid subscriptions can leverage this, while free and pay-as-you-go can't.

By the end of this module, you'll be able to configure self-service password reset in Microsoft Entra ID.

## Learning objectives

In this module, you:

- Decide whether to implement self-service password reset.
- Implement self-service password reset to meet your requirements.
- Configure self-service password reset to customize the experience.

## Prerequisites

- Basic understanding of Microsoft Entra ID
- A working Microsoft Entra tenant with a subscription package that includes Microsoft Entra ID P1
- An account with at least the Authentication Policy Administrator role

---

### 02-What is self-service password reset in Microsoft Entra ID_

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/06-Allow users to reset their password with Microsoft Entra self-service password reset/02-What is self-service password reset in Microsoft Entra ID_.md`*

# What is self-service password reset in Microsoft Entra ID?

**Module:** Allow users to reset their password with Microsoft Entra self-service password reset

**Source:** https://learn.microsoft.com/en-us/training/modules/allow-users-reset-their-password/2-self-service-password-reset

---

# What is self-service password reset in Microsoft Entra ID?

You've been asked to assess ways to reduce help-desk costs in your retail organization. You've noticed that the support staff spends a lot of their time resetting passwords for users. Users often complain about delays with this process, and these delays impact their productivity. You want to understand how you can configure Azure to allow users to manage their own passwords.

In this unit, you'll learn how self-service password reset (SSPR) works in Microsoft Entra ID.

## Why use SSPR?

In Microsoft Entra ID, any user can change their password if they're already signed in. But if they're not signed in, forgot their password, or it's expired, they'll need to reset their password. With SSPR, users can reset their passwords in a web browser or from a Windows sign-in screen to regain access to Azure, Microsoft 365, and any other application that uses Microsoft Entra ID for authentication.

SSPR reduces the load on administrators because users can fix password problems themselves without having to call the help desk. Also, it minimizes the productivity impact of a forgotten or expired password. Users don't have to wait until an administrator is available to reset their password.

## How SSPR works

The user initiates a password reset either by going directly to the password-reset portal, or by selecting the **Can't access your account** link on a sign-in page. The reset portal takes these steps:

1. **Localization**: The portal checks the browser's locale setting and renders the SSPR page in the appropriate language.
2. **Verification**: The user enters their username and passes a CAPTCHA to ensure that it's a user and not a bot.
3. **Authentication**: The user enters the required data to authenticate their identity. They might enter a code or answer security questions.
4. **Password reset**: If the user passes the authentication tests, they can enter a new password and confirm it.
5. **Notification**: A message is sent to the user to confirm the reset.

There are several ways you can customize the SSPR user experience. For example, you can add your company logo to the sign-in page so users know they're in the right place to reset their password.

## Authenticate a password reset

It's critical to verify a user's identity before you allow a password reset. Malicious users might exploit any weakness in the system to impersonate that user. Azure supports six different ways to authenticate reset requests.

As an administrator, you can choose the methods to use when you configure SSPR. Enable two or more of these methods so that users can choose the ones they can easily use. The methods are:

| Authentication method | How to register | How to authenticate for a password reset |
| --- | --- | --- |
| Mobile app notification | Install the Microsoft Authenticator app on your mobile device, then register it on the multifactor authentication setup page. | Azure sends a notification to the app, which you can either verify or deny. |
| Mobile app code | This method also uses the Authenticator app, and you install and register it in the same way. | Enter the code from the app. |
| Email | Provide an email address that's external to Azure and Microsoft 365. | Azure sends a code to the address, which you enter in the reset wizard. |
| Mobile phone | Provide a mobile phone number. | Azure sends a code to the phone in an SMS message, which you enter in the reset wizard. You can also choose to get an automated call. |
| Office phone | Provide a nonmobile phone number. | You receive an automated call to this number and press #. |
| Security questions | Select questions such as "In what city was your mother born?" and save their responses. | Answer the questions. |

In trial Microsoft Entra organizations, phone call options aren't supported.

### Require the minimum number of authentication methods

You can specify the minimum number of methods that the user must set up, either one or two. For example, you might enable the mobile app code, email, office phone, and security questions methods and specify a minimum of two methods. Users can then choose the two methods they prefer, like mobile app code and email.

For the security-question method, you can specify a minimum number of questions the user must set up to register for this method. You also can specify a minimum number of questions they must answer correctly to reset their password.

After your users register the required information for the minimum number of methods you've specified, they're considered registered for SSPR.

### Recommendations

- Enable two or more of the authentication reset request methods.
- Use the mobile app notification or code as the primary method. But also enable the email or office phone methods to support users without mobile devices.
- The mobile phone method isn't a recommended method, because it's possible to send fraudulent SMS messages.
- The security-question option is the least recommended method, because the answers to the security questions might be known to other people. Only use the security-question method in combination with at least one other method.

### Accounts associated with administrator roles

- A strong, two-method authentication policy is always applied to accounts with an administrator role, regardless of your configuration for other users.
- The security-question method isn't available to accounts associated with an administrator role.

## Configure notifications

Administrators can choose how users are notified of password changes. There are two options you can enable:

- **Notify users on password resets**: The user who resets their own password is notified to their primary and secondary email addresses. If the reset was done by a malicious user, this notification alerts the user, who can take mitigation steps.
- **Notify all admins when other admins reset their password**: All administrators are notified when another administrator resets their password.

## License requirements

There are two editions of Microsoft Entra ID, Premium P1 and Premium P2. The password-reset functionality you can use depends on your edition.

Any user who is signed in can change their password, regardless of the edition of Microsoft Entra ID.

What if you're not signed in, and you've forgotten your password or your password has expired? In this case, you can use SSPR in Microsoft Entra ID P1 or P2. It's also available with Microsoft 365 Apps for business or Microsoft 365.

In a hybrid situation, where you have Active Directory on-premises and Microsoft Entra ID in the cloud, any password change in the cloud must be written back to the on-premises directory. This writeback support is available in Microsoft Entra ID P1 or P2. It's also available with Microsoft 365 Apps for business.

## SSPR deployment options

You can deploy SSPR with password writeback by using [Microsoft Entra Connect](/en-us/entra/identity/authentication/tutorial-enable-sspr-writeback/) or [cloud sync](/en-us/entra/identity/authentication/tutorial-enable-cloud-sync-sspr-writeback/), depending on user needs. You can deploy each option side-by-side in different domains to target different sets of users. This helps existing users on-premises to write back password changes, while adding an option for users in disconnected domains because of a company merger or split. Users from an existing on-premises domain can use Microsoft Entra Connect, while new users from a merger can use cloud sync in another domain.

Cloud sync can also provide higher availability, because it doesn't rely on a single instance of Microsoft Entra Connect. For a feature comparison between the two deployment options, see [Comparison between Microsoft Entra Connect and cloud sync](/en-us/entra/identity/hybrid/cloud-sync/what-is-cloud-sync#how-is-azure-ad-connect-cloud-sync-different-from-azure-ad-connect-sync/).

## Check your knowledge

1.

When is a user considered registered for SSPR?

They registered at least one of the permitted authentication methods.

They registered at least the number of methods that you've required to reset a password.

They set up the minimum number of security questions.

2.

When you enable SSPR for your Microsoft Entra organization...

Users can only change their password when they're signed in.

Admins can reset their password by using one authentication method.

Users can reset their passwords when they can't sign in.

You must answer all questions before checking your work.




You must answer all questions before checking your work.

---

### 03-Implement Microsoft Entra self-service password reset

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/06-Allow users to reset their password with Microsoft Entra self-service password reset/03-Implement Microsoft Entra self-service password reset.md`*

# Implement Microsoft Entra self-service password reset

**Module:** Allow users to reset their password with Microsoft Entra self-service password reset

**Source:** https://learn.microsoft.com/en-us/training/modules/allow-users-reset-their-password/3-implement-azure-ad-self-service-password-reset

---

# Implement Microsoft Entra self-service password reset

You've decided to implement self-service password reset (SSPR) in Microsoft Entra ID for your organization. You want to start using SSPR for a group of 20 users in the marketing department as a trial deployment. If everything works well, you'll enable SSPR for your whole organization.

In this unit, you'll learn how to enable SSPR in Microsoft Entra ID.

## Prerequisites

Before you start to configure SSPR, you need a:

- **Microsoft Entra organization**: This organization must have at least a P1 or P2 trial license enabled.
- **Microsoft Entra account with Authentication Policy Administrator role**: You'll use this account to set up SSPR.
- **Non-administrative user account**: You'll use this account to test SSPR. It's important that this account isn't an administrator, because Microsoft Entra imposes extra requirements on administrative accounts for SSPR. This user, and all user accounts, must have a valid license to use SSPR.
- **Security group with which to test the configuration**: The non-administrative user account must be a member of this group. You'll use this security group to limit who you roll SSPR out to.

## Scope of SSPR rollout

There are three settings for the **Self-service password reset enabled** property:

- **None**: No users in the Microsoft Entra organization can use SSPR. This value is the default.
- **Selected**: Only the members of the specified security group can use SSPR. You can use this option to enable SSPR for a targeted group of users who can test it and verify that it works as expected. When you're ready to roll it out broadly, set the property to **Enabled** so that all users have access to SSPR.
- **All**: All users in the Microsoft Entra organization can use SSPR.

## Configure SSPR

Here are the high-level steps to configure SSPR:

1. Go to the [Azure portal](https://portal.azure.com?azure-portal=true), then to **Microsoft Entra ID** > **Manage** > **Password reset**.
2. **Properties**:

   - Enable SSPR.
   - You can enable it for all users in the Microsoft Entra organization or for selected users.
   - To enable for selected users, you must specify the security group. Members of this group can use SSPR.

   ![Screenshot of the Password Reset configuration panel. Properties option is selected allowing user to enable self service password resets.](https://learn.microsoft.com/en-us/training/modules/allow-users-reset-their-password/media/3-enable-sspr.png)
3. **Authentication methods**:

   - Choose whether to require one or two authentication methods.
   - Choose the authentication methods that the users can use.

   ![Screenshot of the Password Reset panel's Authentication methods option selected displaying panel with authentication options.](https://learn.microsoft.com/en-us/training/modules/allow-users-reset-their-password/media/3-auth-methods.png)
4. **Registration**:

   - Specify whether users are required to register for SSPR when they next sign in.
   - Specify how often users are asked to reconfirm their authentication information.

   ![Screenshot of the Password Reset panel's Registration option selected displaying panel with registration options.](https://learn.microsoft.com/en-us/training/modules/allow-users-reset-their-password/media/3-registration-options.png)
5. **Notifications**: Choose whether to notify users and administrators of password resets.

   ![Screenshot of the Password Reset panel's Notification option selected displaying panel with notification options.](https://learn.microsoft.com/en-us/training/modules/allow-users-reset-their-password/media/3-notification-settings.png)
6. **Customization**: Provide an email address or web page URL where your users can get help.

   ![Screenshot of the Password Reset panel's Customization option selected displaying panel with helpdesk options.](https://learn.microsoft.com/en-us/training/modules/allow-users-reset-their-password/media/3-customization-settings.png)

---

### 04-Summary

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/02-AZ-104_ Manage identities and governance in Azure/06-Allow users to reset their password with Microsoft Entra self-service password reset/04-Summary.md`*

# Summary

**Module:** Allow users to reset their password with Microsoft Entra self-service password reset

**Source:** https://learn.microsoft.com/en-us/training/modules/allow-users-reset-their-password/6-summary

---

# Summary

In this module, you've learned how you can use SSPR in Microsoft Entra ID to allow users to reset their forgotten or expired passwords. An administrator doesn't have to do the password reset. SSPR is secured by authentication methods of your choice. These methods can include a mobile authentication app, a code sent to you by an SMS text message, or security questions.

SSPR helps reduce the amount of work required from administrators. It also minimizes the productivity impact for users when they forget their password.

## Clean up

Remember to clean up after you've finished.

- **Delete the user you created in Microsoft Entra ID**: Go to **Microsoft Entra ID** > **Manage** > **Users**. Check the box next to the user and select **Delete**. Select **OK**.
- **Delete the group you created in Microsoft Entra ID**: Go to **Microsoft Entra ID** > **Manage** > **Groups**. Check the box next to the group and select **Delete**. Select **OK**.
- **Turn off self-service password reset**: Go to **Microsoft Entra ID** > **Manage** > **Password reset**. Under **Self service password reset enabled**, select **None**. Select **Save**.

If you created a Premium trial Microsoft Entra tenant for this module, you can delete the tenant 30 days after the trial has expired.

## Learn more

- [Tutorial: Enable users to unlock their account or reset passwords using Microsoft Entra self-service password reset](/en-us/entra/identity/authentication/tutorial-enable-sspr)
- [How it works: Microsoft Entra self-service password reset](/en-us/entra/identity/authentication/concept-sspr-howitworks)
- [Enable self-service password reset](/en-us/entra/external-id/customers/how-to-enable-password-reset-customers)

---
