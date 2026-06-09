# 06-AZ-104_ Monitor and back up Azure resources

> Combined export for section `06-AZ-104_ Monitor and back up Azure resources` from course `Microsoft Azure Administrator`.

## 01-Introduction to Azure Backup

### 01-Introduction

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/06-AZ-104_ Monitor and back up Azure resources/01-Introduction to Azure Backup/01-Introduction.md`*

# Introduction

**Module:** Introduction to Azure Backup

**Source:** https://learn.microsoft.com/en-us/training/modules/intro-to-azure-backup/1-introduction

---

# Introduction

Information technology workers understand the importance of data to the organization. The need to protect that data drives decisions around storage, backups, and security. Many companies implement policies that dictate backup specifications for frequency, duration of backup storage, and restore policies.

For on-premises scenarios, backup solutions might have included local redundant storage solutions or off-site storage. Scenarios using backup to tape drives and storing offsite come with the resulting delay in restoring the data (because of the need to transport the tapes back to the server rooms and from performing the restore operation). This can result in significant downtime.

These backup solutions might not always address some of the most important considerations, such as security of the backups, the potential for the company to be impacted by a ransomware attack, or human error in the backup and restore operations. An ideal solution would be cost-effective, simple to use, and secure. This is where Azure Backup comes in.

![Diagram of a backup scenario with a company's servers and workstations on the left, with files and folders, using the Backup Agent to back up the data to Microsoft Azure storage.](https://learn.microsoft.com/en-us/training/modules/intro-to-azure-backup/media/architecture-on-premises-mars.png)

Azure Backup can also address scenarios for your Azure environments, with support for:

- Azure VMs
- Azure Managed Disks
- Azure Files
- SQL Server in Azure VMs
- SAP HANA databases in Azure VMs
- Azure Database for PostgreSQL servers
- Azure Blobs
- Azure Database for PostgreSQL - Flexible servers
- Azure Database for MySQL - Flexible servers
- Azure Kubernetes cluster

## Example scenario

You're running an application powered by SQL Server. The database is running in an always-on availability group across three Azure VMs. You want to back up the databases using an Azure native backup service. You're looking to store the backup for 10 years in cheaper storage for your audit and compliance needs. You'd like to monitor the backup jobs daily for all such databases.

![Diagram of an application using a SQL Server backend database and Azure Backup for data backup scenarios.](https://learn.microsoft.com/en-us/training/modules/intro-to-azure-backup/media/scenario.png)

## What will we be doing?

We'll evaluate the features and capabilities of Azure Backup to help decide if:

- Azure Backup can offer a solution for your backup needs.
- You can back up and restore the data you need for your organization.
- Azure Backup offers secure storage of your data.

## What is the main goal?

By the end of this session, you'll be able to decide if Azure Backup is the right solution to consider for your data-protection needs.

---

### 02-What is Azure Backup_

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/06-AZ-104_ Monitor and back up Azure resources/01-Introduction to Azure Backup/02-What is Azure Backup_.md`*

# What is Azure Backup?

**Module:** Introduction to Azure Backup

**Source:** https://learn.microsoft.com/en-us/training/modules/intro-to-azure-backup/2-what-is-azure-backup

---

# What is Azure Backup?

Let's start by defining Azure Backup and taking a quick tour of the core features. This overview should help you decide whether Azure Backup might be a good fit for your data-protection needs.

## What is Azure Backup?

The Azure Backup service provides simple, secure, and cost-effective solutions to back up your data and recover it from the Microsoft Azure cloud.

![Diagram of the Azure Backup service implementing backup agents in the on-premises environment to the cloud. Middle section displays the components of Azure Backup for security and scalability with an underlying bar indicating central management.](https://learn.microsoft.com/en-us/training/modules/intro-to-azure-backup/media/azure-backup-overview.png)

## Azure Backup definition

Azure Backup is an Azure service that provides cost effective, secure, and zero-infrastructure backup solutions for all Azure-managed data assets.

The centralized management interface makes it easy to define backup policies and protect a wide range of enterprise workloads, including Azure Virtual Machines, Azure Disks, SQL and SAP databases, Azure file shares, and blobs.

![Diagram of Azure Backup architecture displaying workloads at the bottom, feeding upwards into the data plane, and tying into the management plane. Management contains backup policies, Azure policies, Azure Monitor, and Azure Lighthouse services.](https://learn.microsoft.com/en-us/training/modules/intro-to-azure-backup/media/azure-backup-architecture.png)

## When to use Azure Backup

As the IT admin of your organization, you're responsible for meeting the compliance needs for all the data assets of the firm, and backup is a critical aspect. There are also various application admins in your company who need to do self-service backup and restore to take care of issues like data corruption or rogue-admin scenarios. You're looking for an enterprise-class backup solution to protect all your workloads and manage them from a central place.

Azure Backup can provide backup services for the following data assets:

- On-premises files, folders, and system state
- Azure Virtual Machines (VMs)
- Azure Managed Disks
- Azure Files Shares
- SQL Server in Azure VMs
- SAP HANA (High-performance Analytic Appliance) databases in Azure VMs
- Azure Database for PostgreSQL servers
- Azure Blobs
- Azure Database for PostgreSQL - Flexible servers
- Azure Database for MySQL - Flexible servers
- Azure Kubernetes cluster

![Screenshot of Azure Backup center displaying a list of backup jobs. The list displays the backup instance, data source, operation type, and status.](https://learn.microsoft.com/en-us/training/modules/intro-to-azure-backup/media/backup-center-jobs.png)

## Key features

Let's look at some key features of Azure Backup.

| Feature | Description | Usage |
| --- | --- | --- |
| Zero-infrastructure backup solution | Unlike conventional backup solutions, no backup server or infrastructure is needed. Similarly, no backup storage needs to be deployed, because Azure Backup automatically manages and scales it. | Zero-infrastructure solution eliminates capital expenses and reduces operational expenses. It increases ease of use by automating storage management. |
| At-scale management | Natively manage your entire backup estate from a central console called Backup Center. Use APIs, PowerShell, and Azure CLI to automate Backup policy and security configurations. | Backup center simplifies data protection management at-scale by enabling you to discover, govern, monitor, operate, and optimize backup management from one unified console, which helps you to drive operational efficiency with Azure. |
| Security | Azure Backup provides built-in security to your backup environment, both when your data is in transit and at rest by using capabilities encryption, private endpoints, alerts, and so on. | Your backups are automatically secured against ransomware, malicious admins, and accidental deletions. |

## How do Recovery Time Objective and Recovery Point Objective work?

Recovery Time Objective (RTO) is the target time within which a business process must be restored after a disaster occurs to avoid unacceptable consequences. For instance, if a critical application goes down due to a server failure and the business can only tolerate a maximum of four hours of downtime, then the RTO is four hours.

Recovery Point Objective (RPO) is the maximum amount of data loss, measured in time, that your organization can sustain during an event.

The following example scenario describes both the RPO and RTO concepts:

Your organization has an RPO of one hour for your customer database, which means you perform backups every hour. If a data-loss incident occurs, you lose not more than one hour of data. When you set RTO to three hours, then if a system failure occurs, you aim to restore access to the database within three hours to minimize the impact on operations.

---

### 03-How Azure Backup works

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/06-AZ-104_ Monitor and back up Azure resources/01-Introduction to Azure Backup/03-How Azure Backup works.md`*

# How Azure Backup works

**Module:** Introduction to Azure Backup

**Source:** https://learn.microsoft.com/en-us/training/modules/intro-to-azure-backup/3-how-azure-backup-works

---

# How Azure Backup works

Let's take a look at how Azure Backup works to provide the data protection you need. Particularly, let's look at how the different aspects of the backup service make it easy to back up various types of data, and how it offers security for your backups as well. In this unit, we cover the following aspects of the Azure Backup Service:

- **Workload integration layer - Backup Extension**: Integration with the actual workload, such as Azure virtual machines (VMs) or Azure Blobs, happens at this layer.
- **Data Plane - Access Tiers**: There are three access tiers where the backups could be stored:
  - Snapshot tier
  - Standard tier
  - Archive tier
- **Data Plane - Availability and Security**: The backup data is replicated across zones or regions, based on the redundancy the user specifies.
- **Management Plane – Recovery Services vault/Backup vault and Backup center**: The vault provides an interface for the user to interact with the backup service.

## What data is backed up and how?

The simplest explanation of Azure Backup is that it backs up data, machine state, and workloads running on on-premises machines and VM instances to the Azure cloud. Azure Backup stores the backed-up data in Recovery Services vaults and Backup vaults.

For on-premises Windows machines, you can back up directly to Azure with the Azure Backup Microsoft Azure Recovery Services (MARS) agent. Alternatively, you can back up these Windows machines to a backup server, perhaps a System Center Data Protection Manager (DPM) or Microsoft Azure Backup Server (MABS). You can then back that server up to a Recovery Services vault in Azure.

If you're using Azure VMs, you can back them up directly. Azure Backup installs a backup extension to the Azure VM agent that's running on the VM, which allows you to back up the entire VM. If you only want to back up the files and folders on the VM, you can do so by running the MARS agent.

Azure Backup stores backed-up data in vaults: Recovery Services vaults and Backup vaults. A vault is an online-storage entity in Azure that's used to hold data such as backup copies, recovery points, and backup policies.

### Supported backup types

Azure Backup supports full backups and incremental backups. Your initial backup is a full backup. DPM/MABS use the incremental backup for disk backups, and all backups to Azure also use incremental backups. As the name suggests, incremental backups only focus on the blocks of data that changed since the previous backup.

Azure Backup also supports SQL Server backup types. The following table outlines the support for SQL Server type backups:

| Type | Description | Usage |
| --- | --- | --- |
| Full | A full database backup backs up the entire database. It contains all the data in a specific database or in a set of filegroups or files. A full backup also contains enough logs to recover that data. | At most, you can trigger one full backup per day. You can choose to make a full backup on a daily or weekly interval. |
| Differential | A differential backup is based on the most recent full-data backup. It captures only the data that changed since the full backup. | At most, you can trigger one differential backup per day. You can't configure a full backup and a differential backup on the same day. |
| Multiple backups per day | Back up Azure VMs hourly with a minimum recovery point objective (RPO) of 4 hours and a maximum of 24 hours. | You can use Enhanced backup policy to set the backup schedule to 4, 6, 8, 12, and 24 hours (respectively) for new Azure offerings, such as Trusted Launch VM. |
| Selective disk backup | Selectively back up a subset of the data disks that are attached to your VM, then restore a subset of the disks that are available in a recovery point, both from instant restore and vault tier. Selective disk backup helps you manage critical data in a subset of the VM disks and use database backup solutions when you want to back up only their OS disk to reduce cost. | Azure Backup provides Selective Disk backup and restore capability using Enhanced backup policy. |
| Transaction Log | A log backup enables point-in-time restoration up to a specific second. | At most, you can configure transactional log backups every 15 minutes. |

## Workload integration layer - Backup Extension

A backup extension specific to each workload is installed on the source VM or a worker VM. At the time of backup (as defined by the user in the Backup Policy) the backup extension generates the backup, which could be:

- **Storage**: Snapshots when using an Azure VM or Azure Files.
- **Stream backup**: For databases like SQL or High-performance Analytic Appliance (HANA) running in VMs.

The backup data is eventually transferred to Azure Backup managed storage in the data plane by using secure Azure networks Network Security Groups (NSG), Firewalls, or more sophisticated private endpoints.

## Data Plane - Access Tiers

There are three access tiers where the backups can be stored:

- **Snapshot tier**: (Workload-specific term) In the first phase of a virtual machine backup, the snapshot is taken and stored along with the disk. This form of storage is referred to as a snapshot tier. Restoring a snapshot tier is faster than restoring from a vault, because it eliminates the wait time for snapshots to be copied from the vault before triggering the restore operation. The snapshots of the VM/Azure Files/Azure Blobs/and so on are retained in the customer's subscription in a specified resource group. This container ensures that restores are quick, because the backup/snapshot is available locally to the customer.
- **Vault-standard tier**: Backup data for all workloads supported by Azure Backup is stored in vaults, which hold backup storage, an autoscaling set of storage accounts managed by Azure Backup. The Vault-standard tier is an online storage tier that allows you to store an isolated copy of backup data in a Microsoft-managed tenant, thus creating an extra layer of protection. For workloads where snapshot tier is supported, there's a copy of the backup data in both the snapshot tier and the Vault-standard tier. The Vault-standard tier ensures that backup data is available even if the data source being backed up is deleted or compromised.
- **Archive tier**: Customers rely on Azure Backup for storing backup data, including their Long-Term Retention (LTR) backup data, with retention needs defined in the organization's compliance rules. In most cases, the older backup data is rarely accessed and is only stored for compliance needs.

  Azure Backup supports backup of long-term retention points in the archive tier.

All tiers offer different recovery time objectives (RTO) and are priced differently.

![Diagram of the various workloads such as on-premises server, Azure VMs, Azure files, etc. feeding into the data plane where the access tiers are located.](https://learn.microsoft.com/en-us/training/modules/intro-to-azure-backup/media/data-plane.png)

## Data Plane - Availability and Security

The backup data is replicated across zones or regions, based on the redundancy you specify. You can choose from locally redundant storage (LRS), Geo-redundant storage (GRS), or zone-redundant storage (ZRS). These options provide you with highly available data storage capabilities.

The data is kept safe by encrypting it and implementing Azure role-based access control (RBAC). You choose who can perform backup and restore operations. Azure Backup also provides protection against malicious deletion of your backup by using soft-delete operations. A deleted backup is stored for 14 days, free of charge, which allows you to recover the backup if needed.

Azure Backup also supports a backup data lifecycle-management scenario that allows you to comply with retention policies.

![Graphic displaying the three security options of Azure RBAC, encryption, and soft delete as icons.](https://learn.microsoft.com/en-us/training/modules/intro-to-azure-backup/media/built-in-security.png)

## Management Plane – Recovery Services vault/Backup vault and Backup center

Azure Backup uses Recovery Services vaults and Backup vaults to orchestrate and manage backups. It also uses vaults to store backed-up data. The vault provides an interface for the user to interact with the backup service. Azure Backup Policies within each vault define when the backups should get triggered and how long they need to be retained.

You can use a single vault or multiple vaults to organize and manage your backup. If you manage your workloads with a single subscription and single resource, you can use a single vault to monitor and manage your backup estate. If your workloads are spread across multiple subscriptions, you can create multiple vaults with one or more vaults per subscription.

![Diagram of the management plane. The recovery services vault shows the options for backup policies and management with the portal, SDK, or the Command-line interface (CLI).](https://learn.microsoft.com/en-us/training/modules/intro-to-azure-backup/media/backup-vaults.png)

Backup center allows you to have a single pane of glass to manage all tasks related to backups. Backup center is designed to function well across a large and distributed Azure environment. You can use Backup center to efficiently manage backups spanning multiple workload types, vaults, subscriptions, regions, and Azure Lighthouse tenants.

![Screenshot of the Backup center user interface in the Azure portal displaying backup information for Azure Virtual machines related to jobs and backup instances.](https://learn.microsoft.com/en-us/training/modules/intro-to-azure-backup/media/backup-center.png)

---

### 04-When to use Azure Backup

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/06-AZ-104_ Monitor and back up Azure resources/01-Introduction to Azure Backup/04-When to use Azure Backup.md`*

# When to use Azure Backup

**Module:** Introduction to Azure Backup

**Source:** https://learn.microsoft.com/en-us/training/modules/intro-to-azure-backup/4-when-to-use-azure-backup

---

# When to use Azure Backup

Here, we discuss how you can decide if Azure Backup is the right choice for your data-protection needs. In this unit, we highlight common backup scenarios where Azure Backup provides benefits, such as:

- Ensuring availability of your data.
- Protecting your Azure workloads.
- Securing your data.

## Decision criteria

Azure Backup is an Azure service that provides secure and zero-infrastructure backup solutions for all Azure-managed data assets. It protects a wide range of enterprise workloads. Including, Azure Virtual Machines (VMs), Azure Disks, SQL and SAP databases, and Azure file shares and blobs.

The main criteria that we're evaluating are outlined in the following table. The table contains some key areas where Azure Backup can provide services to you for data protection.

| Criteria | Consideration |
| --- | --- |
| Azure workloads | Azure VMs, Azure Disks, SQL Server in Azure VMs, SAP HANA databases in Azure VMs, Azure Blobs, Azure Files shares, Azure Database for PostgreSQL. |
| Compliance | Customer-defined backup policy with long-term retention across multiple zones or regions. |
| Operational recoveries | With self-service backup and restores, the application administrator can take care of issues that might arise such as accidental deletion or data corruption. |

## Apply the criteria

In the introduction, we presented a scenario where your organization might have an application that relies on data from a back-end SQL Server installation. SQL Server is running on three Azure VMs. The data in the backup must be retained for up to 10 years to meet compliance requirements. You also want to be able to monitor the backups.

Before we dive into how Azure Backup can help meet these needs, it's important to understand what isn't currently supported. If your three Azure VMs are deployed across multiple subscriptions or regions, you should note that Azure Backup doesn’t support cross-region backup for most workloads. However, it does support cross-region restore in a paired secondary region.

### Can Azure Backup protect the Azure VMs hosting the SQL Server instances?

Azure Backup is able to back up entire Windows and Linux VMs using backup extensions. As a result, you can back up the entire VM that hosts SQL Server. If you only want to back up the files, folders, and system state on the Azure VMs, you can use the Microsoft Azure Recovery Services (MARS) agent.

If your main concern is to only back up the SQL Server data, Azure Backup provides support for that as well. Azure Backup offers a stream-based, specialized solution to back up SQL Servers running in Azure VMs. This solution aligns with Azure Backup's benefits of zero-infrastructure backup, long-term retention, and central management.

Additionally, Azure Backup provides the following advantages specifically for SQL Server:

- Workload aware backups that support all backup types: full, differential, and log
- 15-minute recovery point objective (RPO) with frequent log backups
- Point-in-time recovery up to a second
- Individual database-level backup and restore

![Diagram of SQL Server hosted on an Azure VM backed up to a Recovery Services Vaults in Azure Backup. Arrows indicate a two-way flow for the data path and control path flow from Azure Backup to the backup extension on the VM.](https://learn.microsoft.com/en-us/training/modules/intro-to-azure-backup/media/azure-backup-sql-overview.png)

### Does Azure Backup help with compliance?

You can implement required access-control mechanisms for your backups. Vaults (Recovery Services and Backup vaults) provide the management capabilities and are accessible via the Azure portal, Backup Center, Vault dashboards, SDK, CLI, and even REST APIs. It's also an Azure role-based access control (Azure RBAC) boundary, providing you with the option to restrict access to backups only to authorized Backup Admins.

Short-term retention can be *minutes* or *daily*. Retention for *weekly*, *monthly*, or *yearly* backup points is referred to as *Long-term retention*.

Long-term retention can be:

- **Planned (compliance requirements)**: If you know in advance that data is required years from the current time, use Long-term retention.
- **Unplanned (on-demand requirement)**: If you don't know in advance, then you can use on-demand backup with specific custom retention settings. Your policy settings don't impact these custom retention settings.
- **On-demand backup with custom retention**: If you need to take a backup not scheduled via backup policy, then you can use an on-demand backup. It can be useful for taking backups that don’t fit your scheduled backup or for taking granular backup (for example, multiple IaaS VM backups per day since scheduled backup permits only one backup per day). It's important to note that the retention policy defined in scheduled policy doesn't apply to on-demand backups.

You can also implement policy management to help with compliance. Azure Backup Policies within each vault define when the backups should be triggered and how long they need to be retained. You can also manage these policies and apply them across multiple items.

### Does Azure Backup simplify monitoring and administration?

Azure Backup integrates with Log Analytics for monitoring and reporting and provides reports via Workbooks.

Azure Backup provides in-built job monitoring for operations such as configuring backup, backing up, restoring, deleting backups, and so on. Azure Backup is scoped to the vault, making it ideal for monitoring a single vault.

If you need to monitor operational activities at scale, Backup Explorer provides an aggregated view of your entire backup estate, enabling detailed drill-down analysis and troubleshooting. It's a built-in Azure Monitor workbook that provides a single, central location to help you monitor operational activities across the entire backup estate on Azure, spanning tenants, locations, subscriptions, resource groups, and vaults.

---

### 05-Summary

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/06-AZ-104_ Monitor and back up Azure resources/01-Introduction to Azure Backup/05-Summary.md`*

# Summary

**Module:** Introduction to Azure Backup

**Source:** https://learn.microsoft.com/en-us/training/modules/intro-to-azure-backup/6-summary

---

# Summary

Our goal was to help you evaluate whether Azure Backup would offer the features and capabilities you need to help you protect your data. During the module, we explored how Azure Backup might address:

- Ensuring availability of your data.
- Protecting your Azure workloads.
- Securing your data.

We applied the criteria to a scenario where your company was hosting an application that used a SQL Server database instance running on multiple Azure VMs. We noted how Azure Backup could provide data protection by backing up our Azure VMs or the files, folders, and system state on those VMs.

We also saw how Azure Backup helps with compliance by offering retention options for the data and security with encryption and RBAC. Using Backup center, we showed how easy it is to manage these backups.

Backup center simplifies data protection management at-scale by allowing you to discover, govern, monitor, operate, and optimize backup management, all from one unified console. This helps you to drive operational efficiency with Azure. Your backups are automatically secured against ransomware, malicious admins, and accidental deletions.

## References

- [Azure Backup website](https://azure.microsoft.com/products/backup/)
- [Azure Backup compliance standards](/en-us/azure/backup/compliance-offerings)

---

## 02-Protect your virtual machines by using Azure Backup

### 01-Introduction

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/06-AZ-104_ Monitor and back up Azure resources/02-Protect your virtual machines by using Azure Backup/01-Introduction.md`*

# Introduction

**Module:** Protect your virtual machines by using Azure Backup

**Source:** https://learn.microsoft.com/en-us/training/modules/protect-virtual-machines-with-azure-backup/1-introduction

---

# Introduction

Your company has several critical virtual machine (VM) workloads running on Azure. As the lead solution architect, you're asked to ensure that the company can recover these VMs if there's data loss or corruption. You're asked to use the built-in capabilities of Azure Backup to help protect these VMs.

Azure Backup is a service that allows you to back up Azure virtual machines, on-premises servers, Azure file shares, and SQL Server or SAP HANA (High-performance Analytic Appliance) running on Azure VMs, and other application workloads.

In this module, you learn about Azure Backup and you see how you can use the Azure portal to back up and restore a VM.

## Learning objectives

In this module, you:

- Identify the scenarios for which Azure Backup provides backup and restore capabilities.
- Back up and restore an Azure virtual machine.

## Prerequisites

- Basic knowledge of Azure virtual machines.
- Basic knowledge of disk storage for virtual machines.

Note

For this module, you need use your own subscription to complete the optional exercises. A trial subscription or a subscription that you already have access to works for these exercises.

---

### 02-Azure Backup features and scenarios

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/06-AZ-104_ Monitor and back up Azure resources/02-Protect your virtual machines by using Azure Backup/02-Azure Backup features and scenarios.md`*

# Azure Backup features and scenarios

**Module:** Protect your virtual machines by using Azure Backup

**Source:** https://learn.microsoft.com/en-us/training/modules/protect-virtual-machines-with-azure-backup/2-azure-backup-features-scenarios

---

# Azure Backup features and scenarios

Your company's business continuity and disaster recovery (BCDR) plan requires a full backup and restore capability for all of your high-risk servers. You're asked to enable and test the backup and restore functionality for these critical Windows and Linux assets.

In this unit, you look at how Azure Backup works, and study some of the supported use cases for Azure Backup.

## What is Azure Backup?

Azure Backup is a built-in Azure service that provides secure backup for all Azure-managed data assets. It uses zero-infrastructure solutions to enable self-service backups and restores, with at-scale management at a lower and predictable cost. Azure Backup currently offers specialized backup solutions for Azure and on-premises virtual machines (VMs). Azure Backup also gives workloads like SQL Server or SAP HANA (High-performance Analytic Appliance) running in Azure VMs enterprise-class backup and restore options.

In contrast to traditional backup solutions that can take considerable effort to set up, Azure Backup is easily managed through the Azure portal.

### Azure Backup versus Azure Site Recovery

Both Azure Backup and Azure Site Recovery aim to make the system more resilient to faults and failures, but they use two different approaches. The primary goal of Backup is to maintain copies of stateful data that allow you to go back in time. Site Recovery, however, replicates the data in almost real time and allows for a failover.

In that sense, if there are issues like network or power outages, you can use availability zones. For a region-wide disaster (such as natural disasters), Site Recovery is used. Backups are used in cases of accidental data loss, data corruption, or ransomware attacks.

Additionally, the choice of a recovery approach depends on the criticality of the application, recovery point objective (RPO) and recovery time objective (RTO) requirements, and the cost implications.

### Why use Azure Backup?

Traditional backup solutions, such as disk and tape, don't offer the highest level of integration with cloud-based solutions. Azure Backup has several benefits over more traditional backup solutions:

**Zero-infrastructure backup**: Azure Backup eliminates the need to deploy and manage any backup infrastructure or storage. There's no overhead in maintaining backup servers or scaling the storage up or down as the needs vary.

**Long-term retention**: Meet rigorous compliance and audit needs by retaining backups for many years, after which the built-in lifecycle management capability prunes the recovery points automatically.

**Security**: Azure Backup provides security to your backup environment, both when your data is in transit and at rest:

- **Azure role-based access control**: Role-based access control allows you to segregate duties within your team and grant only the amount of access to users necessary to do their jobs.
- **Encryption of backups**: Backup data is automatically encrypted using Microsoft-managed keys. Alternatively, you can encrypt your backed-up data using customer-managed keys stored in the Azure Key Vault.
- **No internet connectivity required**: When you use Azure VMs, all the data transfer happens only on the Azure backbone network without needing to access your virtual network. So no access to any IPs or fully qualified domain names (FQDNs) is required.
- **Soft delete**: With soft delete, the backup data is retained for 14 more days even after the deletion of the backup item. This retention protects against accidental deletion or malicious deletion scenarios, allowing the recovery of those backups with no data loss. Azure Backup also provides **Enhanced soft delete** that enables you to retain a deleted item in the *soft deleted* state for a longer duration.

Azure Backup also offers the ability to back up VMs encrypted with Azure Disk Encryption.

**High availability**: Azure Backup offers three types of replication:

- **Locally redundant storage (LRS)**: The lowest-cost option with basic protection against server rack and drive failures. We recommend it for noncritical scenarios.
- **Geo-redundant storage (GRS)**: The intermediate option has failover capabilities in a secondary region. We recommend it for backup scenarios.
- **Zone-redundant storage (ZRS)**: This option protects against datacenter-level failures by replicating your storage account synchronously across three Azure availability zones. We recommend it for high-availability scenarios.

**Centralized monitoring and management**: Azure Backup provides built-in monitoring and alerting capabilities in a Recovery Services vault. These capabilities are available without any other management infrastructure.

### Azure Backup supported scenarios

Azure Backup supports the following scenarios:

- **Azure VMs** - Back up Windows or Linux Azure VMs  
   Azure Backup provides independent and isolated backups to guard against unintended destruction of the data on your VMs. Backups are stored in a Recovery Services vault with built-in management of recovery points. Configuration and scaling are simple, backups are optimized, and you can easily restore as needed.
- **On-premises** - Back up files, folders, and system state using the [Microsoft Azure Recovery Services (MARS) agent](/en-us/azure/backup/backup-support-matrix-mars-agent?azure-portal=true). Or use [Microsoft Azure Backup Server (MABS)](/en-us/azure/backup/backup-support-matrix-mabs-dpm) or [Data Protection Manager (DPM) server](/en-us/azure/backup/backup-support-matrix-mabs-dpm) to protect on-premises VMs (Hyper-V and VMware) and other on-premises workloads.
- **Azure Files shares** - Azure Files provides snapshot management by Azure Backup.
- **SQL Server in Azure VMs** and **SAP HANA databases in Azure VMs** - Azure Backup offers stream-based, specialized solutions to back up SQL Server, or SAP HANA running in Azure VMs. These solutions take workload-aware backups that support different backup types such as full, differential and log, 15-minute RPO, and point-in-time recovery.

---

### 03-Back up an Azure virtual machine by using Azure Backup

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/06-AZ-104_ Monitor and back up Azure resources/02-Protect your virtual machines by using Azure Backup/03-Back up an Azure virtual machine by using Azure Backup.md`*

# Back up an Azure virtual machine by using Azure Backup

**Module:** Protect your virtual machines by using Azure Backup

**Source:** https://learn.microsoft.com/en-us/training/modules/protect-virtual-machines-with-azure-backup/3-back-up-azure-virtual-machine

---

# Back up an Azure virtual machine by using Azure Backup

You want to ensure that the backup and restore jobs you put in place offer a way to recover your company's servers. With this requirement in mind, you want to investigate the best way to implement backup for your virtual machines (VMs).

VMs that are hosted on Azure can take advantage of Azure Backup. You can easily back up and restore machines without installing extra software.

In this unit, you explore all the methods of backing up Azure VMs provided by Azure Backup and make a decision on which to implement.

**Azure VMs** are backed up by taking snapshots of the underlying disks at user-defined intervals and transferring those snapshots to the Recovery Services vault as per the customer-defined policy.

## Recovery Services vault

Azure Backup uses a Recovery Services vault to manage and store the backup data. A vault is a storage-management entity, which provides a simple experience to carry out and monitor backup and restore operations. With Azure Backup, you don't need to worry about deploying or managing storage accounts. In fact, all you need to specify is the vault that you want to back up the virtual machine (VM) to. The backup data is transferred to the Azure Backup storage accounts (in a separate fault domain) in the background. The vault also acts as a role-based access control boundary to allow secure access to the data.

![Screenshot that highlights the Recovery Services vaults that are available in context to the resources they're protecting.](https://learn.microsoft.com/en-us/training/modules/protect-virtual-machines-with-azure-backup/media/3-recovery-vault-in-context.png)

## Snapshots

A snapshot is a point-in-time backup of all disks on the VM. For Azure VMs, Azure Backup uses different extensions for each supporting operating system:

| Extension | OS | Description |
| --- | --- | --- |
| VM Snapshot | Windows | The extension works with Volume Shadow Copy Service (VSS) to take a copy of the data on disk and in memory. |
| VM SnapshotLinux | Linux | The snapshot is a copy of the disk. |

Depending on how the snapshot is taken and what it includes, you can achieve different levels of consistency:

- **Application consistent**
  - The snapshot captures the VM as a whole. It uses VSS writers to capture the content of the machine memory and any pending I/O operations.
  - For Linux machines, you need to write custom pre or post scripts per app to capture the application state.
  - You can get complete consistency for the VM and all running applications.
- **File system consistent**
  - If VSS fails on Windows, or the pre and post scripts fail on Linux, Azure Backup still creates a file-system-consistent snapshot.
  - During a recovery, no corruption occurs within the machine. But installed applications need to do their own cleanup during startup to become consistent.
- **Crash consistent**
  - This level of consistency typically occurs if the VM is shut down at the time of the backup.
  - No I/O operations or memory contents are captured during this type of backup. This method doesn't guarantee data consistency for the OS or app.

## Backup policy

You can define the backup frequency and retention duration for your backups. Currently, the VM backup can be triggered daily or weekly, and can be stored for multiple years. The backup policy supports two access tiers: *snapshot tier* and the *vault tier*. By using the Enhanced policy, you can trigger hourly backups.

**Selective disk backup**: Azure Backup provides **Selective Disk backup and restore** capability using **Enhanced policy**. By using this capability, you can selectively back up a subset of the data disks that are attached to your VM. Then, you can restore a subset of the disks that are available in a recovery point, both from instant restore and vault tier. It helps you manage critical data in a subset of the VM disks and use database backup solutions when you want to back up only their OS disk to reduce cost.

**Snapshot tier**: All the snapshots are stored locally for a maximum period of five days, in what is called the snapshot tier. For all types of operation recoveries, we recommended that you restore from the snapshots because it's faster to do so. This capability is called **instant restore**.

**Vault tier**: All snapshots are additionally transferred to the vault for more security and longer retention. At this point, the recovery point type changes to "snapshot and vault."

## Backup process for an Azure virtual machine

Here's how Azure Backup completes a backup for Azure VMs:

1. For Azure VMs that are selected for backup, Azure Backup starts a backup job according to the backup frequency you specify in the backup policy.
2. During the first backup, a backup extension is installed on the VM, if the VM is running:

   - For Windows VMs, the VM Snapshot extension is installed.
   - For Linux VMs, the VM SnapshotLinux extension is installed.
3. After the snapshot is taken, the data is stored locally and transferred to the vault.

   - The backup is optimized by backing up each VM disk in parallel.
   - For each disk that's being backed up, Azure Backup reads the blocks on the disk and identifies and transfers only the data blocks that changed (the delta) since the previous backup.
   - Snapshot data might not be immediately copied to the vault. It might take several hours at peak times. Total backup time for a VM is less than 24 hours for daily backup policies.

![Diagram that shows Azure Backup architecture.](https://learn.microsoft.com/en-us/training/modules/protect-virtual-machines-with-azure-backup/media/3-azure-vm-backup-architecture.png)

You can additionally enable [vault encryption with customer-managed keys (CMK)](/en-us/azure/backup/encryption-at-rest-with-cmk#configuring-a-vault-to-encrypt-using-customer-managed-keys?azure-portal=true). By using **Enhanced soft delete** for a Recovery Services vault, you can protect backups from deletion. You can also keep Enhanced soft delete *always on* to prevent turning it off, thus protecting your backups from accidental deletion or from malware attacks.

---

### 04-Restore virtual machine data

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/06-AZ-104_ Monitor and back up Azure resources/02-Protect your virtual machines by using Azure Backup/04-Restore virtual machine data.md`*

# Restore virtual machine data

**Module:** Protect your virtual machines by using Azure Backup

**Source:** https://learn.microsoft.com/en-us/training/modules/protect-virtual-machines-with-azure-backup/5-restore-virtual-machine-data

---

# Restore virtual machine data

Companies that have a business continuity and disaster recovery (BCDR) plan typically schedule test runs to ensure that the business can successfully recover from disasters. Now that you successfully backed up your virtual machines, you want to explore the options available for restoring them as part of your BCDR testing.

In this unit, you learn about the options for restoring an Azure virtual machine (VM) from a previous backup.

## Restore types

Azure Backup provides many ways to restore a VM. As explained earlier, you can either instantly restore from the snapshot tier (optimal for operational recoveries) or from the vault tier.

| Restore option | Details |
| --- | --- |
| **Create a new VM** | Quickly creates and gets a basic VM up and running from a restore point. The new VM must be created in the same region as the source VM. |
| **Restore disk** | Restores a VM disk, which can then be used to create a new VM. The disks are copied to the resource group you specify. Azure Backup provides a template to help you customize and create a VM. Alternatively, you can attach the disk to an existing VM, or create a new VM.   This option is useful if you want to customize the VM, add configuration settings that weren't there at the time of backup. Or, add settings that must be configured using the template or PowerShell. |
| **Replace existing** | You can restore a disk and use it to replace a disk on the existing VM. Azure Backup takes a snapshot of the existing VM before replacing the disk and stores it in the staging location you specify. Existing disks connected to the VM are replaced with the selected restore point. The current VM must exist. You can't use this option if the VM is deleted. |
| **Cross region (secondary region)** | Cross region restore can be used to restore Azure VMs in the secondary region, which is an Azure paired region.  This feature is available for the following options: - Create a VM - Restore Disks  We don't currently support the Replace existing disks option. |
| **Cross Subscription Restore** | Backup Admins and App admins can perform the restore operation on secondary regions.   Cross Subscription Restore:    - Allows you to restore Azure Virtual Machines or disks to a different subscription within the same tenant as the source subscription. As per the Azure role-based access control capabilities from restore points.   - Allowed only if the Cross Subscription Restore property is enabled for your Recovery Services vault.   - Works with Cross Region Restore and Cross Zonal Restore.   - You can trigger Cross Subscription Restore for managed virtual machines only.   - Cross Subscription Restore is supported for Restore with Managed System Identities (MSI).   - It's unsupported for snapshots tier recovery points.   - It's unsupported for unmanaged VMs and VMs encrypted with Advanced Digital Encryption (ADE). |
| **Cross Zonal Restore** | Allows you to restore Azure Virtual Machines or disks pinned to any zone to different available zones (as per the Azure Role-based access control capabilities) from restore points. When you select a zone to restore, it selects the logical zone (and not the physical zone) as per the Azure subscription you use to restore to.   - You can trigger Cross Zonal Restore for managed virtual machines only.   - Cross Zonal Restore is supported for Restore with Managed System Identities (MSI).   - Cross Zonal Restore supports restore of an Azure zone pinned/non-zone pinned VM from a vault with Zone-redundant storage (ZRS) enabled. Learn how to set Storage Redundancy.   - You can only use Cross Zonal Restore to restore a VM pinned to an Azure zone from a vault with Cross Region Restore (CRR) under these conditions: The secondary region supports zones, or Zone Redundant Storage (ZRS) is enabled.   - Cross Zonal Restore is supported from secondary regions.   - It's unsupported from snapshots restore point.   - It's unsupported for Encrypted Azure VMs. |
| **Selective disk backup** | Allows you to back up and restore selective VM disks through Enhanced policy. Using this capability, you can selectively back up a subset of the data disks that are attached to your VM. Then, you can restore a subset of the disks that are available in a recovery point, both from instant restore and vault tier.    Selective disk backup is useful when you:    - Manage critical data in a subset of the VM disks.   - Use database backup solutions and want to back up only their OS disk to reduce cost. |

## Recover files from a backup

You can also recover individual files from a recovery point by mounting the snapshot on the target machine using the iSCSI initiator in the machine. To learn more, see [Recover files from Azure virtual machine backup](/en-us/azure/backup/backup-azure-restore-files-from-vm).

## Restore an encrypted virtual machine

Azure Backup supports the backup and restore of machines encrypted through Azure Disk Encryption. Disk Encryption works with Azure Key Vault to manage the relevant secrets that are associated with the encrypted disk. For an extra layer of security, you can use key vault encryption keys (KEKs) to encrypt the secrets before they're written to the key vault.

Certain limitations apply when you restore encrypted VMs:

- Azure Backup supports only standalone key encryption. Any key that's part of a certificate isn't currently supported.
- File-level or folder-level restores aren't supported with encrypted VMs. To restore to that level of granularity, the entire VM has to be restored. You can then manually copy the file or folders.
- The **Replace existing VM** option isn't available for encrypted VMs.

## Check your knowledge

1.

Which restore type should you select if you want to replace a disk on an existing virtual machine?

Create a new VM

Restore disk

Replace existing

2.

You want to replace a disk on an existing VM but receive an error. What's the possible reason?

The existing VM is deleted and is no longer available.

The existing VM is part of a different resource group in your Azure subscription.

The existing VM is turned off

You must answer all questions before checking your work.




You must answer all questions before checking your work.

---

### 05-Summary

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/06-AZ-104_ Monitor and back up Azure resources/02-Protect your virtual machines by using Azure Backup/05-Summary.md`*

# Summary

**Module:** Protect your virtual machines by using Azure Backup

**Source:** https://learn.microsoft.com/en-us/training/modules/protect-virtual-machines-with-azure-backup/7-summary

---

# Summary

In this module, you learned the importance of having a tested backup and recovery strategy for your organization. You learned about the different types of Azure backups, and the reasons why you would choose one backup type versus another depending on your scenario.

You learned that you can back up Azure virtual machines or on-premises machines. In addition, you learned how to back up an Azure virtual machine (VM). You then restored it by using the various options available to you, and you were able to monitor the progress.

You can now use Azure Backup to help protect your environment against data loss or disk corruption. You can restore services according to your business continuity and disaster recovery plan.

Important

In this module you created resources using your Azure subscription. You want to clean up these resources so that you will not continue to be charged for them. You can delete resources individually or delete the resource group to delete the entire set of resources.

## Learn more

For more information about Azure Backup, see the following articles:

- [Latest Azure Backup pricing and availability](https://azure.microsoft.com/pricing/details/backup?azure-portal=true)
- [Documentation for the Azure Backup service](/en-us/azure/backup?azure-portal=true)
- [Support matrix for Azure VM backup](/en-us/azure/backup/backup-support-matrix-iaas?azure-portal=true)
- [Security features in Azure Backup](/en-us/azure/backup/security-overview?azure-portal=true)
- [Built-in monitoring and alerting capabilities](/en-us/azure/backup/backup-azure-monitoring-built-in-monitor?azure-portal=true)
- [Azure Files - Snapshot management by Azure Backup](/en-us/azure/backup/backup-afs?azure-portal=true)
- [Back up SQL Server databases running on Azure VMs](/en-us/azure/backup/backup-azure-sql-database?azure-portal=true)
- [Backup SAP HANA (High-performance Analytic Appliance) databases running on Azure VMs](/en-us/azure/backup/backup-azure-sap-hana-database?azure-portal=true)
- [Azure Data Protection Manager (DPM)](/en-us/azure/backup/backup-azure-dpm-introduction?azure-portal=true) and [Azure Backup Server (MABS)](/en-us/azure/backup/backup-mabs-protection-matrix?azure-portal=true)

---

## 03-Monitor your Azure virtual machines with Azure Monitor

### 01-Introduction

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/06-AZ-104_ Monitor and back up Azure resources/03-Monitor your Azure virtual machines with Azure Monitor/01-Introduction.md`*

# Introduction

**Module:** Monitor your Azure virtual machines with Azure Monitor

**Source:** https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/1-introduction

---

# Introduction

Suppose you're the IT administrator for a musical group's website hosted on Azure virtual machines (VMs). The website runs mission-critical services for the group, including ticket booking, venue information, and tour updates. The website must respond quickly and remain accessible during frequent updates and spikes in traffic.

You need to maintain sufficient VM size and memory to effectively host the website without incurring unnecessary costs. You also need to proactively prevent and quickly respond to any access, security, and performance issues. To help achieve these objectives, you want to quickly and easily monitor your VMs' traffic, health, performance, and events.

Azure Monitor provides built-in and customizable monitoring abilities. You can use these to track the health, performance, and behavior of the VM host and the operating system, workloads, and applications running on your VM. This learning module shows you how to view VM host monitoring data, set up recommended alert rules, and use VM insights and custom data collection rules (DCRs) to collect and analyze monitoring data from inside your VMs.

## Prerequisites

To complete this module, you need the following prerequisites:

- Familiarity with virtualization, Azure portal navigation, and Azure VMs.
- Access to an Azure subscription with at least **Contributor** role. If you don't have an Azure subscription, create a [free account](https://azure.microsoft.com/pricing/purchase-options/azure-account?cid=msft_learn) and add a subscription before you begin. If you're a student, you can take advantage of the [Azure for students](https://azure.microsoft.com/free/students/?cid=msft_learn) offer.

## Learning objectives

- Understand which monitoring data you need to collect from your VM.
- Enable and view recommended alerts and diagnostics.
- Use Azure Monitor to collect and analyze VM host data.
- Use Azure Monitor Agent to collect VM client performance metrics and event logs.

---

### 02-Monitoring for Azure VMs

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/06-AZ-104_ Monitor and back up Azure resources/03-Monitor your Azure virtual machines with Azure Monitor/02-Monitoring for Azure VMs.md`*

# Monitoring for Azure VMs

**Module:** Monitor your Azure virtual machines with Azure Monitor

**Source:** https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/2-monitor-vm-health

---

# Monitoring for Azure VMs

In this unit, you explore Azure monitoring capabilities for VMs, and the types of monitoring data you can collect and analyze with Azure Monitor. Azure Monitor is a comprehensive monitoring solution for collecting, analyzing, and responding to monitoring data from Azure and non-Azure resources, including VMs. Azure Monitor has two main monitoring features: Azure Monitor Metrics and Azure Monitor Logs.

Metrics are numerical values collected at predetermined intervals to describe some aspect of a system. Metrics can measure VM performance, resource utilization, error counts, user responses, or any other aspect of the system that you can quantify. Azure Monitor Metrics automatically monitors a predefined set of metrics for every Azure VM, and retains the data for 93 days with some exceptions.

Logs are recorded system events that contain a timestamp and different types of structured or free-form data. Azure automatically records activity logs for all Azure resources. This data is available at the resource level. Azure Monitor doesn't collect logs by default, but you can configure Azure Monitor Logs to collect from any Azure resource. Azure Monitor Logs stores log data in a Log Analytics workspace for querying and analysis.

## VM monitoring layers

Azure VMs have several layers that require monitoring. Each of the following layers has a distinct set of telemetry and monitoring requirements.

- Host VM
- Guest operating system (OS)
- Client workloads
- Applications that run on the VM

![Diagram that shows fundamental VM architecture.](https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/media/monitoring-layers.png)

## Host VM monitoring

The VM host represents the compute, storage, and network resources that Azure allocates to the VM.

### VM host metrics

VM host metrics measure technical aspects of the VM such as processor utilization and whether the machine is running. You can use VM host metrics to:

- Trigger an alert when your VM is reaching its disk or CPU limits.
- Identify trends or patterns.
- Control your operational costs by sizing VMs according to usage and demand.

Azure automatically collects basic metrics for VM hosts. On the VM's **Overview** page in the Azure portal, you can see built-in graphs for the following important VM host metrics.

- VM availability
- CPU usage percentage (average)
- OS disk usage (total)
- Network operations (total)
- Disk operations per second (average)

You can use Azure Monitor Metrics Explorer to plot more metrics graphs, investigate changes, and visually correlate metrics trends for your VMs. With Metrics Explorer you can:

- Plot multiple metrics on a graph to see how much traffic hits your VM and how the VM performs.
- Track the same metric over multiple VMs in a resource group or other scope, and use splitting to show each VM on the graph.
- Select flexible time ranges and granularity.
- Specify many other settings such as chart type and value ranges.
- Send graphs to workbooks or pin them to dashboards for quickly viewing health and performance.
- Group metrics by time intervals, geographic regions, server clusters, or application components.

[![Screenshot showing CPU percentage usage and inbound flow chart.](https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/media/2-vm-metrics-screenshot.png)](media/2-vm-metrics-screenshot.png#lightbox)

### Recommended alert rules

Alerts proactively notify you of specified occurrences and patterns in your VM host metrics. *Recommended alert rules* are a predefined set of alert rules based on commonly monitored host metrics. These rules define recommended CPU, memory, disk, and network usage levels to alert on. The rules also include VM availability, which alerts you when the VM stops running.

You can quickly enable and configure recommended alert rules when you create an Azure VM, or afterwards from the VM's portal page. You can also view, configure, and create custom alerts by using Azure Monitor Alerts.

### Activity logs

Azure Monitor automatically records and displays activity logs for Azure VMs. Activity logs include information like VM startup or modifications. You can create diagnostic settings to send activity logs to the following destinations:

- **Azure Monitor Logs:** For more complex querying and alerting, and for longer retention up to two years.
- **Azure Storage:** For cheaper, long-term archiving.
- **Azure Event Hubs:** To forward outside of Azure.

### Boot diagnostics

Boot diagnostics are host logs you can use to help troubleshoot boot issues with your VMs. You can enable boot diagnostics by default when you create a VM, or afterwards for existing VMs.

Once you enable boot diagnostics, you can see screenshots from the VM's hypervisor for both Windows and Linux machines, and view the serial console log output of the VM boot sequence for Linux machines. Boot diagnostics stores data in a managed storage account.

## Guest OS, client workload, and application monitoring

VM client monitoring can include monitoring the operating system (OS), workloads, and applications that run on the VM. To collect metrics and logs from guest OS and client workloads and applications, you need to install Azure Monitor Agent and set up a DCR.

DCRs define what data to collect and where to send that data. You can use a DCR to send Azure Monitor metrics data, or *performance counters*, to Azure Monitor Logs or Azure Monitor Metrics. You can also send event log data to Azure Monitor Logs. In other words, Azure Monitor Metrics can store only metrics data, but Azure Monitor Logs can store both metrics and event logs.

### VM insights

VM insights is an Azure Monitor feature that helps get you started monitoring your VM clients. VM insights is especially useful for exploring overall VM usage and performance when you don't yet know the metric of primary interest. VM insights provides:

- Simplified Azure Monitor Agent onboarding to enable monitoring a VM's guest OS and workloads.
- A preconfigured DCR that monitors and collects the most common performance counters for Windows and Linux.
- Predefined trending performance metrics charts and workbooks from the VM's guest OS.
- A set of predefined workbooks that show collected VM client metrics over time.
- Optionally, a collection of processes running on the VM, dependencies with other services, and a dependency map that displays interconnected components with other VMs and external sources.

Predefined VM insights workbooks show performance, connections, active ports, traffic, and other collected data from one or several VMs. You can view VM insights data directly from a single VM, or see a combined view of multiple VMs to view and assess trends and patterns across VMs. You can edit the prebuilt workbook configurations, or create your own custom workbooks.

### Client event log data

VM insights creates a DCR that collects a specific set of performance counters. To collect other data, such as event logs, you can create a separate DCR that specifies the data you want to collect from the VM and where to send it. Azure Monitor stores collected log data in a Log Analytics workspace. From there, you can access and analyze the data by using log queries written in Kusto Query Language (KQL).

## Check your knowledge

1.

What are the two main types of monitoring data that Azure Monitor collects for Azure VMs?

Metrics and logs.

VM insights and Alerts.

Workbooks and Workspaces.

2.

What are the layers of a VM that need to be monitored?

VM host OS, SKU, and disks.

VM host, guest OS, client workloads, and applications.

Subscription, resource group, and VM.

You must answer all questions before checking your work.




You must answer all questions before checking your work.

---

### 03-Monitor VM host data

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/06-AZ-104_ Monitor and back up Azure resources/03-Monitor your Azure virtual machines with Azure Monitor/03-Monitor VM host data.md`*

# Monitor VM host data

**Module:** Monitor your Azure virtual machines with Azure Monitor

**Source:** https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/3-exercise-create-virtual-machine

---

# Monitor VM host data

You want to monitor the VMs that host your website, so you decide to quickly create a VM in the Azure portal and evaluate its built-in monitoring capabilities. In this unit, you use the Azure portal to create a Linux VM with recommended alerts and boot diagnostics enabled. As soon as the VM starts up, Azure automatically begins collecting basic metrics and activity logs. You can then view built-in metrics graphs, activity logs, and boot diagnostics.

## Create a VM and enable recommended alerts

1. Sign in to the [Azure portal](https://portal.azure.com?azure-portal=true), and in the Search field, enter *virtual machines*.
2. On the **Virtual machines** page, select **Create**, and then select **Azure virtual machine**.
3. On the **Basics** tab of the **Create a virtual machine** page:

   - In the **Subscription** field, select the correct subscription if not already selected.
   - Under **Resource group**:
     1. Select **Create new**.
     2. Under **Name**, enter *learn-monitor-vm-rg*.
     3. Select **OK**.
   - For **Virtual machine name**, enter *monitored-linux-vm*.
   - For **Image**, select **Ubuntu Server 20.04 LTS - x64 Gen2**.
4. Leave the other settings at their current values, and select the **Monitoring** tab.

   [![Screenshot that shows the Basics tab of the Create a virtual machine page.](https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/media/create-vm-basic.png)](media/create-vm-basic.png#lightbox)
5. On the **Monitoring** tab, select the checkbox next to **Enable recommended alert rules**.
6. On the **Set up recommended alert rules** screen:

   1. Select all the listed alert rules if not already selected, and adjust the values if desired.
   2. Under **Notify me by**, select the checkbox next to **Email**, and enter an email address to receive alert notifications.
   3. Select **Save**.
7. Under **Diagnostics**, for **Boot diagnostics**, ensure that **Enable with managed storage account (recommended)** is selected.

   Note

   Don't select **Enable OS guest diagnostics**. The Linux Diagnostics Agent (LAD) is deprecated, and you can enable OS guest and client monitoring later.
8. Select **Review + create** at the bottom of the page, and when validation passes, select **Create**.

   [![Screenshot that shows the Monitoring tab and alert rule configuration screen of the Create a virtual machine page.](https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/media/create-vm-monitoring.png)](media/create-vm-monitoring.png#lightbox)
9. On the **Generate new key pair** popup dialog box, select **Download private key and create resource**.

It can take a few minutes to create the VM. When you get the notification that the VM is created, select **Go to resource** to see basic metrics data.

## View built-in metrics graphs

Once your VM is created, Azure starts collecting basic metrics data automatically. Built-in metrics graphs, along with the recommended alerts you enabled, can help you monitor whether and when your VM encounters health or performance issues. You can then use more advanced monitoring and analytics capabilities to investigate issue causes and remediation.

1. To view basic metrics graphs, on the VMs **Overview** page, select the **Monitoring** tab.

   [![Screenshot that shows Monitoring tab on a VMs Overview screen.](https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/media/select-monitoring.png)](media/select-monitoring.png#lightbox)
2. Under **Performance and utilization** > **Platform metrics**, review the following metrics graphs related to the VMs performance and utilization. Select **Show more metrics** if all the graphs don't appear immediately.

   - **VM Availability**
   - **CPU (average)**
   - **Disk bytes (total)**
   - **Network (total)**
   - **Disk operations/sec (average)**

   [![Screenshot that shows the platform metrics graphics on the VM Overview page.](https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/media/platform-metrics.png)](media/platform-metrics.png#lightbox)
3. Under **Guest OS metrics**, notice that guest OS metrics aren't being collected yet. In the next units, you configure VM insights and data collection rules to collect guest OS metrics.

## View the activity log

You can view the VMs activity log by selecting **Activity log** from the VMs left navigation menu. You can also retrieve entries by using PowerShell or the Azure CLI.

[![Screenshot of the activity log for a VM.](https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/media/activity-log.png)](media/activity-log.png#lightbox)

## View boot diagnostics

You enabled boot diagnostics when you created the VM. You can view boot diagnostics to view boot data and troubleshoot startup issues.

1. In the left navigation menu for the VM, select **Boot diagnostics** under **Help**.
2. On the **Boot diagnostics** page, select **Screenshot** to see a startup screenshot from the VMs hypervisor. Select **Serial log** to view log messages created when the VM started.

   [![Screenshot that shows the boot diagnostic image captured.](https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/media/3-boot-diagnostics.png)](media/3-boot-diagnostics.png#lightbox)

## Check your knowledge

1.

What do you need to do to enable recommended alert rules when you create a VM?

Nothing, they're enabled by default.

Go to **Alerts** and select **Create**.

Select **Enable recommended alert rules** on the **Monitoring** tab.

2.

Which metrics graph isn't available by default on the **Monitoring** tab when you create a VM?

VM Availability

Guest OS Available Memory

Percentage CPU (average)

You must answer all questions before checking your work.




You must answer all questions before checking your work.

---

### 04-Use Metrics Explorer to view detailed host metrics

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/06-AZ-104_ Monitor and back up Azure resources/03-Monitor your Azure virtual machines with Azure Monitor/04-Use Metrics Explorer to view detailed host metrics.md`*

# Use Metrics Explorer to view detailed host metrics

**Module:** Monitor your Azure virtual machines with Azure Monitor

**Source:** https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/4-view-host-metrics

---

# Use Metrics Explorer to view detailed host metrics

You want to investigate how traffic flowing into your VM affects its CPU capability. If the built-in metrics charts for a VM don't already show the data you need, you can use Metrics Explorer to create customized metrics charts. In this unit, you plot a graph that displays your VM's maximum percentage CPU and average inbound flow data together.

Azure Monitor Metrics Explorer offers a UI for exploring and analyzing VM metrics. You can use Metrics Explorer to view and create custom charts for many VM host metrics in addition to the metrics shown on the built-in graphs.

## Understand Metrics Explorer

To open Metrics Explorer, you can:

- Select **Metrics** from the VM's left navigation menu under **Monitoring**.
- Select the **See all Metrics** link next to **Platform metrics** on the **Monitoring** tab of the VM's **Overview** page.
- Select **Metrics** from the left navigation menu on the Azure Monitor **Overview** page.

[![Screenshot that shows Metrics Explorer.](https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/media/metrics-explorer.png)](media/metrics-explorer.png#lightbox)

In Metrics Explorer, you can select the following values from the dropdown fields:

- **Scope:** If you open Metrics Explorer from a VM, this field is prepopulated with the VM name. You can add more items with the same resource type (VMs) and location.
- **Metric Namespace**: Most resource types have only one namespace, but for some types, you must pick a namespace. For example, storage accounts have separate namespaces for files, tables, blobs, and queues.
- **Metric**: Each metrics namespace has many metrics available to choose from.
- **Aggregation**: For each metric, Metrics Explorer applies a default aggregation. You can use a different aggregation to get different information about the metric.

You can apply the following aggregation functions to metrics:

- **Count**: Counts the number of data points.
- **Average (Avg)**: Calculates the arithmetic mean of values.
- **Maximum (Max)**: Identifies the highest value.
- **Minimum (Min)**: Identifies the lowest value.
- **Sum**: Adds up all the values.

You can select flexible time ranges for graphs from the past 30 minutes to the last 30 days, or custom ranges. You can specify time interval granularity from one minute to one month.

## Create a metrics graph

To create a Metrics Explorer graph that shows host VM maximum percentage CPU and inbound flows together for the past 30 minutes:

1. Open **Metrics Explorer** by selecting **See all Metrics** on the VM's **Monitoring** tab or selecting **Metrics** from the VM's left navigation menu.
2. **Scope** and **Metric Namespace** are already populated for the host VM. Select **Percentage CPU** from the **Metrics** dropdown list.
3. **Aggregation** is automatically populated with **Avg**, but change it to **Max**.

   [![Screenshot of the Percentage CPU metrics graph for a VM.](https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/media/3-view-host-level-metrics.png)](media/3-view-host-level-metrics.png#lightbox)
4. Select **Add metric** at upper left.
5. Under **Metric**, select **Inbound Flows**. Leave **Aggregation** at **Avg**.
6. At upper right, select **Local Time: Last 24 hours (Automatic - 15 minutes)**, change it to **Last 30 minutes**, and select **Apply**.

Your graph should look similar to the following screenshot:

[![Screenshot that shows a graph of CPU usage and inbound traffic.](https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/media/3-metric-graph.png)](media/3-metric-graph.png#lightbox)

## Check your knowledge

1.

How do you add another metric to an existing Metrics Explorer graph?

Select the metric from the dropdown list in the **Metric** field.

Select **New chart**.

Select **Add metric**.

2.

Which of these parameters isn't included in the dropdown fields when you define a Metrics Explorer graph?

Metric Namespace

Time range

Aggregation

You must answer all questions before checking your work.




You must answer all questions before checking your work.

---

### 05-Collect client performance counters by using VM insights

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/06-AZ-104_ Monitor and back up Azure resources/03-Monitor your Azure virtual machines with Azure Monitor/05-Collect client performance counters by using VM insights.md`*

# Collect client performance counters by using VM insights

**Module:** Monitor your Azure virtual machines with Azure Monitor

**Source:** https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/5-enable-vm-insights

---

# Collect client performance counters by using VM insights

Besides monitoring your VM host's health, utilization, and performance, you need to monitor the software and processes running on your VM. These are called the VM guest or client. In this unit, you enable the Azure Monitor VM insights feature, which offers a quick way to start monitoring the VM client.

The VM client includes the operating system and other workloads and applications. To monitor the software running on your VM, you install the Azure Monitor Agent, which collects data from inside the VM. VM insights:

- Installs Azure Monitor Agent on your VM.
- Creates a DCR that collects and sends a predefined set of client performance data to a Log Analytics workspace.
- Presents the data in curated workbooks.

Although you don't need to use VM insights to install Azure Monitor Agent, create DCRs, or set up workbooks, VM insights makes setting up VM client monitoring easy. VM insights provides you with a basis for monitoring the performance of your VM client and mapping the processes running on your machine.

## Enable VM insights

1. In the Azure portal, on your VM's **Overview** page, select **Insights** from the left navigation menu under **Monitoring**.
2. On the **Insights** page, select **Enable**.
3. Under **Data collection rule**, note the properties of the DCR that VM insights creates. In the DCR description, **Processes and dependencies (Map)** is set to **Disabled**, which you can change to **Enabled** or review [this article on how-to](/en-us/azure/azure-monitor/vm/vminsights-maps) if greyed out. Also a default **Log Analytics workspace** is created or assigned.
4. Select **Configure**.

   [![Screenshot that shows enabling and configuring VM insights.](https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/media/enable-insights.png)](media/enable-insights.png#lightbox)

   Configuration of the workspace and the agent installation typically takes 5 to 10 minutes. It can take another 5 to 10 minutes for data to become available to view in the portal.
5. When the deployment finishes, confirm that the Azure Monitor Agent is installed by looking on the **Properties** tab of the VM's **Overview** page under **Extensions + applications**.

   On the **Monitoring** tab of the **Overview** page, under **Performance and utilization**, you can see that **Guest OS metrics** are now being collected.

   [![Screenshot that shows Guest OS metrics on the VM's Monitoring tab.](https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/media/guest-os-metrics.png)](media/guest-os-metrics.png#lightbox)

## View VM insights

VM insights creates a DCR that sends client VM performance counters to Azure Monitor Logs. Because the DCR sends its metrics to Azure Monitor Logs, you don't use Metrics Explorer to view the metrics data that VM insights collects.

To view the VM insights performance graphs and maps:

1. Select **Insights** from the VM's left navigation menu under **Monitoring**.
2. Near the top of the **Insights** page, select the **Performance** tab. The prebuilt VM insights Performance workbook shows charts and graphs with performance-related data for the current VM.

   [![Screenshot that shows the prebuilt VM insights Performance workbook.](https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/media/vm-insights-performance.png)](media/vm-insights-performance.png#lightbox)

   - You can customize the view by specifying a different **Time range** at the top of the page and different aggregations at the top of each graph.
   - Select **View Workbooks** to select from other available prebuilt VM insights workbooks. Select **Go To Gallery** to select from a gallery of other VM insights workbooks and workbook templates, or to edit and create your own workbooks.
3. If enabled earlier, select the **Map** tab on the **Insights** page to see the workbook for the Map feature. The map visualizes the VM's dependencies by discovering running process groups and processes that have active network connections over a specified time range.

   [![Screenshot that shows a dependency map on the Map tab of VM insights.](https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/media/dependency-map.png)](media/dependency-map.png#lightbox)

## Check your knowledge

1.

What capabilities does enabling VM insights provide?

Prebuilt client performance workbooks and guest OS metrics.

Graphs that show several host metrics on one graph with customizable timeframes.

Azure VM log collection and analytics.

2.

What's a quick way to install the Azure Monitor Agent to collect guest OS metrics?

Install the diagnostics extension under **Diagnostics settings**.

You don't have to install or enable anything to use the Azure Monitor Agent to collect guest OS metrics.

Select the **Azure Monitor Agent** when you enable VM insights.

You must answer all questions before checking your work.




You must answer all questions before checking your work.

---

### 06-Collect VM client event logs

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/06-AZ-104_ Monitor and back up Azure resources/03-Monitor your Azure virtual machines with Azure Monitor/06-Collect VM client event logs.md`*

# Collect VM client event logs

**Module:** Monitor your Azure virtual machines with Azure Monitor

**Source:** https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/6-collect-log-data

---

# Collect VM client event logs

Azure Monitor Metrics and VM insights performance counters help you identify performance anomalies, and alert when thresholds are reached. But to analyze the root causes of issues you detect, you need to analyze log data to see which system events caused or contributed to the issues. In this unit, you set up a DCR to collect Linux VM Syslog data, and view the log data in Azure Monitor Log Analytics by using a simple Kusto Query Language (KQL) query.

VM insights installs the Azure Monitor Agent, and creates a DCR that collects predefined performance counters, maps process dependencies, and presents the data in prebuilt workbooks. You can create your own DCRs to collect VM performance counters that the VM insights DCR doesn't collect, or to collect log data.

When you create DCRs in the Azure portal, you can select from a range of performance counters and sampling rates or add custom performance counters. Alternatively, you can select from a predefined set of log types and severity levels or define custom log schemas. You can associate a single DCR to any or all VMs in your subscription, but you might need multiple DCRs to collect different types of data from different VMs.

## Create a DCR to collect log data

In the Azure portal, search for and select *monitor* to go to the Azure Monitor **Overview** page.

[![Screenshot that shows the Azure Monitor Overview page.](https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/media/monitor-overview.png)](media/monitor-overview.png#lightbox)

### Create a Data Collection Endpoint

You must have a data collection endpoint to send log data to. To create an endpoint:

1. In the Azure Monitor left navigation menu under **Settings**, select **Data Collection Endpoints**.
2. On the **Data Collection Endpoints** page, select **Create**.
3. On the **Create data collection endpoint** page, for **Name**, enter *linux-logs-endpoint*.
4. Select the same **Subscription**, **Resource group**, and **Region** as your VM uses.
5. Select **Review + create**, and when validation passes, select **Create**.

### Create the Data Collection Rule

To create the DCR to collect the event logs:

1. In the Monitor left navigation menu under **Settings**, select **Data Collection Rules**.
2. On the **Data Collection Rules** page, you can see the DCR that VM insights created. Select **Create** to create a new data collection rule.

   [![Screenshot of the Data Collection Rules screen with Create highlighted.](https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/media/dcr-create.png)](media/dcr-create.png#lightbox)
3. On the **Basics** tab of the **Create Data Collection Rule** screen, provide the following information:

   - **Rule name**: Enter *collect-events-linux*.
   - **Subscription**, **Resource Group**, and **Region**: Select the same as for your VM.
   - **Platform Type**: Select **Linux**.
4. Select **Next: Resources** or the **Resources** tab.

   [![Screenshot of the Basics tab of the Create Data Collection Rule screen.](https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/media/create-dcr-basics.png)](media/create-dcr-basics.png#lightbox)
5. On the **Resources** screen, select **Add resources**.
6. On the **Select a scope** screen, select the **monitored-linux-vm** VM, and then select **Apply**.
7. On the **Resources** screen, select **Enable Data Collection Endpoints**.
8. Under **Data collection endpoint** for the **monitored-linux-vm**, select the **linux-logs-endpoint** you created.
9. Select **Next: Collect and deliver**, or the **Collect and deliver** tab.

   [![Screenshot of the Resources tab of the Create Data Collection Rule screen.](https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/media/create-dcr-resources.png)](media/create-dcr-resources.png#lightbox)
10. On the **Collect and deliver** tab, select **Add data source**.
11. On the **Add data source** screen, under **Data source type**, select **Linux Syslog**.
12. On the **Add data source** screen, select **Next: Destination** or the **Destination** tab, and make sure the **Account or namespace** matches the Log Analytics workspace that you want to use. You can use the default Log Analytics workspace that VM insights set up, or create or use another Log Analytics workspace.
13. On the **Add data source** screen, select **Add data source**.
14. On the **Create Data Collection Rule** screen, select **Review + create**, and when validation passes, select **Create**.

    [![Screenshot of Review + create highlighted on the Create Data Collection Rule screen.](https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/media/create-dcr-finish.png)](media/create-dcr-finish.png#lightbox)

## View log data

You can view and analyze the log data collected by your DCR by using KQL log queries. A set of sample KQL queries is available for VMs, but you can write a query to look at the events your DCR is collecting.

1. On your VM's **Overview** page, select **Logs** from the left navigation menu under **Monitoring**. Log Analytics opens an empty query window with the scope set to your VM.

   You can also access log data by selecting **Logs** from the left navigation of the Azure Monitor **Overview** page. If necessary, select **Select scope** at the top of the query window to scope the query to the desired Log Analytics workspace and VM.

   Note

   The **Queries** window with sample queries might open when you open Log Analytics. For now, close this window, because you're going to manually create a simple query.
2. In the empty query window, type *Syslog*, and then select **Run**. All the system log events the DCR collected within the **Time range** are displayed.
3. You can refine your query to identify events of interest. For example, you can display only the events that had a **SeverityLevel** of **warning**.

   [![Screenshot that shows the events returned from the Syslog by the DCR.](https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/media/dcr-log.png)](media/dcr-log.png#lightbox)

## Check your knowledge

1.

How can you collect event log data from your VMs?

Create a DCR.

Enable VM insights.

Enable boot diagnostics.

2.

How can you view log data collected by a DCR?

In the **Monitoring** tab of your VM **Overview** page.

By selecting **Data Collection Rules** in Azure Monitor.

By using a KQL query in your Log Analytics workspace.

You must answer all questions before checking your work.




You must answer all questions before checking your work.

---

### 07-Summary

*Source file: `C:/Users/juan.delgadomolina/Carpeta DIGI storage/PLX_Vault/Vault/30-resources/ms_learn_course_download/output_markdown_long/Microsoft Azure Administrator/06-AZ-104_ Monitor and back up Azure resources/03-Monitor your Azure virtual machines with Azure Monitor/07-Summary.md`*

# Summary

**Module:** Monitor your Azure virtual machines with Azure Monitor

**Source:** https://learn.microsoft.com/en-us/training/modules/monitor-azure-vm-using-diagnostic-data/7-summary

---

# Summary

Azure Monitor helps you collect, analyze, and alert on various types of host and client monitoring data from your Azure VMs.

- Azure Monitor provides a set of VM host logs and performance and usage metrics for all Azure VMs.
- You can enable recommended alert rules when you create VMs or afterwards to alert on important VM host metrics.
- Azure Monitor Metrics Explorer lets you graph and analyze metrics for Azure VMs and other resources.
- VM insights provides a simple way to monitor important VM client performance counters and processes running on your VM.
- You can create data collection rules to collect other metrics and logs from your VM client.
- You can use Log Analytics to query and analyze log data.

Now that you understand these tools, you're confident that Azure Monitor can effectively monitor your Azure VMs and help you keep your website running effectively.

## Clean up resources

In this module, you created a VM in your Azure subscription. To prevent further charges for this VM, you can delete it or the resource group that contains it.

To delete the resource group that contains the VM and its resources:

1. Select the **Resource group** link at the top of the **Essentials** section on the VM's **Overview** page.
2. At the top of the resource group page, select **Delete resource group**.
3. On the delete screen, select the checkbox next to **Apply force delete for selected virtual machines and virtual machine scale sets**. Enter the resource group name in the field, and then select **Delete**.

## Learn more

To learn more about monitoring your VMs with Azure Monitor, see the following resources:

- [Azure Monitor documentation](/en-us/azure/azure-monitor)
- [Monitor virtual machines with Azure Monitor](/en-us/azure/azure-monitor/vm/monitor-virtual-machine)
- [Supported metrics with Azure Monitor](/en-us/azure/azure-monitor/reference/supported-metrics/metrics-index)
- [Send Azure Monitor Activity log data](/en-us/azure/azure-monitor/essentials/activity-log)
- [Supported metrics for Microsoft.Compute/virtualMachines](/en-us/azure/azure-monitor/reference/supported-metrics/microsoft-compute-virtualmachines-metrics)
- [Overview of VM insights](/en-us/azure/azure-monitor/vm/vminsights-overview)
- [Create interactive reports with VM insights workbooks](/en-us/azure/azure-monitor/vm/vminsights-workbooks)
- [Use the Map feature of VM insights to understand application components](/en-us/azure/azure-monitor/vm/vminsights-maps)
- [Azure Monitor Agent overview](/en-us/azure/azure-monitor/agents/azure-monitor-agent-overview)
- [Collect data with Azure Monitor Agent](/en-us/azure/azure-monitor/agents/azure-monitor-agent-data-collection)
- [Tutorial: Collect guest logs and metrics from an Azure virtual machine](/en-us/azure/azure-monitor/vm/tutorial-monitor-vm-guest)

---
