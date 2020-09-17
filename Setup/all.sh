#!bin/sh
sudo apt-get remove -y --purge libreoffice*
sudo apt clean
sudo apt-get autoremove -y
sudo apt-get remove -y x264 libx264-dev 
sudo apt-get install -y git
sudo apt-get install -y build-essential cmake unzip pkg-config
sudo apt-get install -y libjpeg-dev libpng-dev libtiff-dev
sudo apt-get install -y libavcodec-dev libavformat-dev libswscale-dev libv4l-dev
sudo apt-get install -y libxvidcore-dev libx264-dev
sudo apt-get install -y libgtk-3-dev
sudo apt-get install -y libatlas-base-dev gfortran
sudo apt-get install -y qt5-default
sudo apt-get install -y python3-dev python3-pip python3-pyqt5
sudo apt-get install -y zbar-tools
apt-cache search firmware wireless
sudo apt-get install -y
sudo apt-get install -y atmel-firmware
sudo apt-get update -y
sudo apt-get dist-upgrade -y
cd
wget -O opencv https://github.com/opencv/opencv/archive/4.1.1.zip
wget -O opencv_contrib https://github.com/opencv/opencv_contrib/archive/4.1.1.zip
unzip ~/opencv
unzip ~/opencv_contrib
mv ~/opencv-4.1.1 ~/opencv
mv ~/opencv_contrib-4.1.1 ~/opencv_contrib
git clone https://dxlabtrack.planio.de/dxlabtrack/s4dx-product.git
wget https://bootstrap.pypa.io/get-pip.py
sudo python3 get-pip.py
sudo pip install virtualenv virtualenvwrapper
sudo rm -rf ~/get-pip.py ~/.cache/pip
echo -e "\n# virtualenv and virtualenvwrapper" >> ~/.bashrc
echo "export WORKON_HOME=$HOME/.virtualenvs" >> ~/.bashrc
echo "export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3" >> ~/.bashrc
echo "source /usr/local/bin/virtualenvwrapper.sh" >> ~/.bashrc
source ~/.bashrc 
cd
ECHO
sudo apt-get install build-essential linux-headers-generic dkms
sudo apt-get install gcc
sudo apt-get install gcc-5ok
apt-cache search firmware wireless
sudo apt-get install
sudo apt-get install atmel-firmware
git clone https://github.com/lwfinger/rtl8188eu.git
reboot
