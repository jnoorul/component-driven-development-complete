import Avatar from 'avataaars';

const avatarList = [
    'ShortHairShortCurly',
    'ShortHairTheCaesar',
    'ShortHairShortWaved',
    'Hat',
];

export function RandomAvatar() {
    const randomNumber = Math.floor(Math.random() * 10) % 4;
    return (
        <Avatar
            style={{ width: '128px', height: '128px' }}
            avatarStyle="Transparent"
            topType={avatarList[randomNumber]}
            accessoriesType="Prescription02"
            hairColor="BrownDark"
            facialHairType="Blank"
            clotheType="Hoodie"
            clotheColor="PastelBlue"
            eyeType="Happy"
            eyebrowType="Default"
            mouthType="Smile"
            skinColor="Light"
        />
    );
}
