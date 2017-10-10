# ass
This is a tool for hard replication in artifactory

## usage
```
ass -h

  Usage: ass [options]


  Options:

    -V, --version          output the version number
    -u, --user [type]      artifactory user name
    -P, --password [type]  artifactory user password
    -a, --arti [type]      Add artifactory host name
    -r, --repo [type]      Add target repository name
    -p, --path <path>      Add the path in target repository
    -f, --files <items>    Add the specified files, comma separated
    -h, --help             output usage information
```

```
ass -u username -P password -a https://artifactory.host.name -r target-repo -p /your/path -f file01,file02,file03
```

## attention
all of files which you want to deploy need to be in the current directory where the ass command is executed.
