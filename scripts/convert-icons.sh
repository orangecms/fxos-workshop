#!/bin/sh

IMG=$1
SIZE=$2
convert "$IMG" -scale "$SIZE"x"$SIZE" img/icons/icon"$SIZE"x"$SIZE".png
