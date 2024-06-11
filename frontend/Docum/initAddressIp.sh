#! /bin/bash

### BEGIN INIT INFO

# Short-Description: App Ip Address
#
### END INIT INFO

echo "Inicio ...."
case "$1" in
	start)
		cd /home/tecnico/ipaddress/backend/
		`npm start`
		;;
	stop)
	echo "Uso: initAddressIp.sh {start|stop}"
	exit 1
	;;
esac	
exit 0
