provider "google" {
  project = "round-water-280322"
  region = "us-central1"
  zone = "us-central1-a"
}

# we want a resource of this f1-micro
# we will pass it the image type in the boot_disk params
# in network_interface setting it to default will put it in the default VPC
# and give it a random IP
# assigning the tags "http-server" and "https-server" will give it internet access
# if you don't want to have those ports (80, 443) exposed comment out the tags

resource "google_compute_instance" "vm_instance" {
  name = "lift-trace"
  machine_type = "f1-micro"

  tags = ["http-server"]

  labels = {
    purpose = "lift-trace"
  }

  boot_disk {
    initialize_params {
      image = "ubuntu-os-cloud/ubuntu-1804-lts"
    }
  }

  network_interface {
    network = "default"
  }
}


resource "google_sql_database_instance" "db" {
  name = "db"
  region = var.region
  database_version = "MYSQL_5_7"
   settings {
    # Second-generation instance tiers are based on the machine
    # type. See argument reference below.
    tier = "db-f1-micro"
  }
}

resource "google_sql_database" "liftdata" {
  name = "liftdata"
  instance = google_sql_database_instance.db.name
}

resource "google_sql_user" "root" {
  name = "root"
  instance = google_sql_database_instance.db.name
  password = "admin"
}
