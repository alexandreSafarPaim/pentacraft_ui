export const returnInitials = (name: string): string => {
  const names = name.split(' ');
  const firstName = names[0];
  const lastName = names[names.length - 1];
  return `${firstName[0].toUpperCase()}${
    lastName?.length ? lastName[0].toUpperCase() : ''
  }`;
};

export const capitalizeName = (name: string): string => {
  const names = name.split(' ');
  let fullName = '';
  names.forEach(n => {
    fullName += `${n[0].toUpperCase()}${n.slice(1).toLowerCase()} `;
  });
  return fullName.trim();
};
