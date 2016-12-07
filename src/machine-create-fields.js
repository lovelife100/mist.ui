var MACHINE_CREATE_FIELDS = []

// AZURE
MACHINE_CREATE_FIELDS.push({
    provider: 'azure',
    fields: [{
        name: "azure_port_bindings",
        label: "Azure Port Bindings",
        type: "text",
        value: "",
        defaultValue: "",
        show: false,
        required: false,
        helptext: ""
    },{
        name: "ports",
        label: "Ports *",
        type: "textarea",
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        helptext: 'e.g. 80:80'
    }]
});

// AZURE ARM
MACHINE_CREATE_FIELDS.push({
    provider: 'azure_arm',
    fields: []
});


// DIGITALOCEAN
MACHINE_CREATE_FIELDS.push({
    provider: 'digitalocean',
    fields: []
});

// DOCKER
MACHINE_CREATE_FIELDS.push({
    provider: 'docker',
    fields: [{
        name: "docker_env",
        label: "Docker Env",
        type: "textarea",
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        helptext: "",
    },{
        name: "docker_command",
        label: "Docker Command",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        helptext: ""
    },{
        name: "docker_port_bindings",
        label: "Docker Port Bindings",
        type: "text",
        value: "",
        defaultValue: "",
        show: false,
        required: false,
        helptext: ""
    },{
        name: "docker_exposed_ports",
        label: "Docker Exposed Ports",
        type: "text",
        value: "",
        defaultValue: "",
        show: false,
        required: false,
        helptext: ""
    },{
        name: "ports",
        label: "Ports *",
        type: "textarea",
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        helptext: 'e.g. 80:80'
    }]
});

// AWS
MACHINE_CREATE_FIELDS.push({
    provider: 'ec2',
    fields: []
});

// GCE
MACHINE_CREATE_FIELDS.push({
    provider: 'gce',
    fields: [{
        name: "image_extra",
        label: "Image extra",
        type: "text",
        value: "",
        defaultValue: "",
        show: false,
        required: false
    },{
        name: "location_name",
        label: "Location name",
        type: "text",
        value: "",
        defaultValue: "",
        show: false,
        required: false
    }]
});

// HOSTVIRTUAL
MACHINE_CREATE_FIELDS.push({
    provider: 'hostvirtual',
    fields: []
});

// INDONESIAN CLOUD
MACHINE_CREATE_FIELDS.push({
    provider: 'indonesian_vcloud',
    fields: []
});

// KVM
MACHINE_CREATE_FIELDS.push({
    provider: 'libvirt',
    fields: []
});

// LINODE
MACHINE_CREATE_FIELDS.push({
    provider: 'linode',
    fields: [{
        name: "image_extra",
        label: "Image extra",
        type: "text",
        value: "",
        defaultValue: "",
        show: false,
        required: false
    },{
        name: "location_name",
        label: "Location name",
        type: "text",
        value: "",
        defaultValue: "",
        show: false,
        required: false
    }]
});

// NEPHOSCALE
MACHINE_CREATE_FIELDS.push({
    provider: 'nephoscale',
    fields: []
});

// OPENSTACK
MACHINE_CREATE_FIELDS.push({
    provider: 'openstack',
    fields: [{
        name: "networks",
        label: "Networks *",
        type: "mist_dropdown",
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        options: []
    }]
});

// PACKET
MACHINE_CREATE_FIELDS.push({
    provider: 'packet',
    fields: []
});

// RACKSPACE
MACHINE_CREATE_FIELDS.push({
    provider: 'rackspace',
    fields: []
});

// SOFTLAYER
MACHINE_CREATE_FIELDS.push({
    provider: 'softlayer',
    fields: []
});

// VCLOUD
MACHINE_CREATE_FIELDS.push({
    provider: 'vcloud',
    fields: [{
        name: "networks",
        label: "Networks *",
        type: "mist_dropdown",
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        options: []
    }]
});

// VSPHERE
MACHINE_CREATE_FIELDS.push({
    provider: 'vsphere',
    fields: []
});

// VULTR
MACHINE_CREATE_FIELDS.push({
    provider: 'vultr',
    fields: []
});

// add common fields
MACHINE_CREATE_FIELDS.forEach(function(p){
    //add common machine properties fields
    p.fields.splice(0, 0 , {
        name: "name",
        label: "Machine Name *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true
    },{
        name: "image",
        label: "Image *",
        type: "mist_dropdown",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        options: []
    },{
        name: "size",
        label: "Size *",
        type: "mist_dropdown",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        options: []
    },{
        name: "location",
        label: "Location *",
        type: "mist_dropdown",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        options: []
    },{
        name: "key",
        label: "Key *",
        type: "ssh_key",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        options: []
    });

    //add common post provision fields
    p.fields.push({
        name: "cloud_init",
        label: "Cloud Init Script *",
        type: "textarea",
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        helptext: ''
    },{
        name: "monitoring",
        label: "Enable monitoring",
        type: "toggle",
        value: "true",
        defaultValue: "true",
        show: true,
        required: false,
        helptext: ''
    },{
        name: "async",
        label: "Async request",
        type: "toggle",
        value: "true",
        defaultValue: "true",
        show: false,
        required: false,
        helptext: ''
    });
});