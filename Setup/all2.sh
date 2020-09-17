#!bin/sh
cd
cd rtl8188eu
sudo make all
sudo make install
cd
ECHO
ECHO
source virtualenvwrapper.sh
workon cv
cd ~/s4dx-product
pip install -r requirements.txt
cd ~/opencv
mkdir build
cd build
cmake -D CMAKE_BUILD_TYPE=RELEASE\ -D CMAKE_INSTALL_PREFIX=/usr/local\ -D INSTALL_PYTHON_EXAMPLES=OFF\ -D INSTALL_C_EXAMPLES=OFF\ -D WITH_QT=OFF\ -D OPENCV_ENABLE_NONFREE=OFF\ -D OPENCV_EXTRA_MODULES_PATH=~/opencv_contrib/modules \ -D PYTHON_EXECUTABLE=~/.virtualenvs/cv/bin/python \ -D OPENCV_GENERATE_PKGCONFIG=ON \ -D BUILD_EXAMPLES=OFF ..
make -j4
ECHO
sudo make install
sudo ldconfig
cd
cd ~/.virtualenvs/cv/lib/python3.6/site-packages/
ln -s /usr/local/li
b/python3.6/site-packages/cv2/python-3.6/cv2.cpython-36m-aarch64-linux-gnu.so cv2.so


ln -s /usr/local/lib
