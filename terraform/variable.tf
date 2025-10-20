variable "aws_region" {
    description = "The AWS region for EKS deployment"
    type    = string
    default = "ap-south-1"
    }

variable "cluster_name" {
    description = "The name of the EKS cluster"
    type = string
    default = "diwali-eks-cluster"
    }
