#!/bin/bash
git add .
git commit -m "update"
git push
```

Then in your terminal run this once to make it executable:
```
chmod +x deploy.sh
```

After that, whenever you want to deploy just run:
```
./deploy.sh