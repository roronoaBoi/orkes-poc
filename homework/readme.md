# Enterprise Onboarding Usecase

This repository contains a demo showcasing an automated partner onboarding workflow built using the Orkes Conductor platform. Designed for a manufacturing company, this solution addresses the need for a streamlined process to onboard trading partners, ensuring collaboration and integration.

## Set Up

To set up this demo in your Orkes Demo environment, create definitions for the respective `userForms` and `workflows` located in this directory.

Additionally, create an envioronment variable called `assignedUser`, and set it to your email address. This will be the user that is assigned all human tasks for approval in this demonstration.

## Overview

The workflows should appear as follows in your environment. The leftmost image shows step 1 in the onboarding flow, where initial form data will be validated and go through a series of approvals. The rightmost image shows step 2 in the onboarding flow, where the partner details can be posted to an ERP table of partners for integration in various business processes within the enterprise.

<div style="display: flex; justify-content: center;">
  <img src="imgBin/manufacturer_partner_onboarding_1.png" alt="wf" style="width: 45%; margin-right: 5px;" />
  <img src="imgBin/manufacturer_partner_onboarding_2.png" alt="wh" style="width: 45%; margin-left: 5px;" />
</div>