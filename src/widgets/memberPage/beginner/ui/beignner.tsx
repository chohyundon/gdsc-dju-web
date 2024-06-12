import { GetMemberData } from '@/entities/member';
import { MemberType } from '@/shared/types/memberType';
import Image from 'next/image';
import { styles } from './style';
import stylex from '@stylexjs/stylex';
import Icon from '@/shared/ui/icons/defaultImg.svg';

export const BeginnerPage = async () => {
  const data = await GetMemberData('members');

  const beginnerMembers = data.data.filter(
    (member: MemberType) => member.Position === 'Beginner',
  );

  const dummyMember = Array.from({
    length: Math.max(0, 3 - beginnerMembers.length),
  });

  return (
    <main {...stylex.props(styles.container)}>
      <p {...stylex.props(styles.textStyle)}>Beginner</p>
      <ul {...stylex.props(styles.imageContainer)}>
        {beginnerMembers.map((member: MemberType) => (
          <li key={member.SlackID}>
            <Image
              src={member.Image512}
              alt={member.Nickname}
              width={282}
              height={312}
              {...stylex.props(styles.image)}
            ></Image>
          </li>
        ))}
        {dummyMember.map((_, index) => (
          <div key={index} {...stylex.props(styles.dummyData, styles.image)}>
            <Image src={Icon} alt="기본 이미지"></Image>
          </div>
        ))}
      </ul>
    </main>
  );
};
