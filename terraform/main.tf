provider "google" {
  project = "round-water-280322"
  region = "us-central1"
  zone = "us-central-a"
}

# we want a resource of this f1-micro
# we will pass it the image type in the boot_disk params
# in network_interface setting it to default will put it in the default VPC
# and give it a random IP
# assigning the tags "http-server" and "https-server" will give it internet access
# if you don't want to have those ports (80, 443) exposed comment out the tags

resource "google_compute_instance" "vm_instance" {
  name = "micro-ubuntu18"
  machine_type = "f1-micro"

  tags = ["http-server", "https-server"]

  labels = {
    purpose = "lift trace"
  }

  boot_disk {
    initialize_params {
      image = "ubuntu-os-cloud/ubuntu-1804-lts"
    }
  }

  network_interface {
    network = "default"

    access_config{

    }
  }
}