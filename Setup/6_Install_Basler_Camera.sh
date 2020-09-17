cd ~
sudo dpkg -i ~/pylon_5.2.0.13457-deb0_arm64.deb 
git clone https://github.com/basler/pypylon.git 
cd pypylon 
sudo apt-get install -y swig 
workon cv 
pip install .