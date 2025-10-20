output "cluster_name" {
    value = aws_eks_cluster.diwali.name
}

output "cluster_endpoint" {
  value = aws_eks_cluster.diwali.endpoint
}

output "cluster_security_group" {
  value = aws_security_group.eks_cluster_sg.id
}
