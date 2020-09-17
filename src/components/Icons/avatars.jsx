import React from 'react';
import { ReactComponent as Bear } from '../../assets/icons/avatars/bear.svg';
import { ReactComponent as Bird } from '../../assets/icons/avatars/bird.svg';
import { ReactComponent as Buffalo } from '../../assets/icons/avatars/buffalo.svg';
import { ReactComponent as Cat } from '../../assets/icons/avatars/cat.svg';
import { ReactComponent as Cow } from '../../assets/icons/avatars/cow.svg';
import { ReactComponent as Deer } from '../../assets/icons/avatars/deer.svg';
import { ReactComponent as Dog } from '../../assets/icons/avatars/dog.svg';
import { ReactComponent as Elephant } from '../../assets/icons/avatars/elephant.svg';
import { ReactComponent as Fox } from '../../assets/icons/avatars/fox.svg';
import { ReactComponent as Giraffe } from '../../assets/icons/avatars/giraffe.svg';
import { ReactComponent as Goat } from '../../assets/icons/avatars/goat.svg';
import { ReactComponent as Gorilla } from '../../assets/icons/avatars/gorilla.svg';
import { ReactComponent as Hippopotamus } from '../../assets/icons/avatars/hippopotamus.svg';
import { ReactComponent as Horse } from '../../assets/icons/avatars/horse.svg';
import { ReactComponent as Husky } from '../../assets/icons/avatars/husky.svg';
import { ReactComponent as Koala } from '../../assets/icons/avatars/koala.svg';
import { ReactComponent as Lion } from '../../assets/icons/avatars/lion.svg';
import { ReactComponent as Monkey } from '../../assets/icons/avatars/monkey.svg';
import { ReactComponent as Panda } from '../../assets/icons/avatars/panda.svg';
import { ReactComponent as Pig } from '../../assets/icons/avatars/pig.svg';
import { ReactComponent as Rabbit } from '../../assets/icons/avatars/rabbit.svg';
import { ReactComponent as Rhino } from '../../assets/icons/avatars/rhino.svg';
import { ReactComponent as Snake } from '../../assets/icons/avatars/snake.svg';
import { ReactComponent as Tiger } from '../../assets/icons/avatars/tiger.svg';
import { ReactComponent as Walrus } from '../../assets/icons/avatars/walrus.svg';
import { ReactComponent as Incognito } from '../../assets/icons/avatars/incognito.svg';

const AVATAR_MAP = {
  bear: { name: 'Bear', svg: <Bear /> },
  bird: { name: 'Bird', svg: <Bird /> },
  buffalo: { name: 'Buffalo', svg: <Buffalo /> },
  cat: { name: 'Cat', svg: <Cat /> },
  cow: { name: 'Cow', svg: <Cow /> },
  deer: { name: 'Deer', svg: <Deer /> },
  dog: { name: 'Dog', svg: <Dog /> },
  elephant: { name: 'Elephant', svg: <Elephant /> },
  fox: { name: 'Fox', svg: <Fox /> },
  giraffe: { name: 'Giraffe', svg: <Giraffe /> },
  goat: { name: 'Goat', svg: <Goat /> },
  gorilla: { name: 'Gorilla', svg: <Gorilla /> },
  hippopotamus: { name: 'Hippopotamus', svg: <Hippopotamus /> },
  horse: { name: 'Horse', svg: <Horse /> },
  husky: { name: 'Husky', svg: <Husky /> },
  koala: { name: 'Koala', svg: <Koala /> },
  lion: { name: 'Lion', svg: <Lion /> },
  monkey: { name: 'Monkey', svg: <Monkey /> },
  panda: { name: 'Panda', svg: <Panda /> },
  pig: { name: 'Pig', svg: <Pig /> },
  rabbit: { name: 'Rabbit', svg: <Rabbit /> },
  rhino: { name: 'Rhino', svg: <Rhino /> },
  snake: { name: 'Snake', svg: <Snake /> },
  tiger: { name: 'Tiger', svg: <Tiger /> },
  walrus: { name: 'Walrus', svg: <Walrus /> },
};

const defaultAvatar = {
  name: 'Default',
  svg: <Incognito />,
};

function getAvatarByName(name) {
  return AVATAR_MAP[name] || defaultAvatar;
}

export { AVATAR_MAP, getAvatarByName };
