workon cv
pip install numpy
cd ~/opencv
mkdir build
cd build
cmake -D CMAKE_BUILD_TYPE=RELEASE\ -D CMAKE_INSTALL_PREFIX=/usr/local\ -D INSTALL_PYTHON_EXAMPLES=OFF\ -D INSTALL_C_EXAMPLES=OFF\ -D WITH_QT=OFF\ -D OPENCV_ENABLE_NONFREE=OFF\ -D OPENCV_EXTRA_MODULES_PATH=~/opencv_contrib/modules \ -D PYTHON_EXECUTABLE=~/.virtualenvs/cv/bin/python \ -D OPENCV_GENERATE_PKGCONFIG=ON \ -D BUILD_EXAMPLES=OFF ..
make -j4
sudo make install
sudo ldconfig
