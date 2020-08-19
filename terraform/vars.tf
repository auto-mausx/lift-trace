variable "region" {
  type = string
  description = "GCP region"
  default = "us-central1"
}

variable "project" {
  type = string
  description = "GCP project"
  default = "round-water-280322"
}

variable "docker_tag" {
  type = string
  description = "Tag for Docker Image"
  default = "latest"
}

variable "docker_declaration" {
  type = string
  default = "spec:\n  containers:\n    - name: test-docker\n      image: 'automaus/lift-trace:latest'\n      stdin: false\n      tty: false\n  restartPolicy: Always\n"
}