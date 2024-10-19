const { Op } = require('sequelize');
const {
  sequelize,
  User,
  Group,
  Subject,
  StunentSubjects,
} = require('./models');

// sequelize
//   .sync({ force: true })
//   .then(() => console.log('Sync Ok'))
//   .catch(err => console.log(err));

// CRUD
// C - INSERT - create

// (async function () {
//   // C - INSERT - create
//   try {
//     const user = {
//       firstName: 'Nickb',
//       lastName: 'Nickovychb',
//       email: 'mai17@mail.com',
//       birthday: '2007-05-22',
//       isMale: false,
//       activitiesCount: 2,
//     };
//     // const crearedUser = await User.create(user);
//     // console.log(crearedUser.get());
//     // // R - SELECT -
//     // const foundUsers = await User.findAll({ raw: true });
//     // console.log(foundUsers);
//     // const foundUser = await User.findByPk(1, { raw: true });
//     // console.log(foundUser);
//     // const foundUsers = await User.findAll({
//     //   attributes: ['firstName', 'email'],
//     //   raw: true,
//     // });
//     // console.log(foundUsers);
//     // const foundUsers = await User.findAll({
//     //   attributes: { exclude: ['createdAt', 'updatedAt'] },
//     //   raw: true,
//     // });
//     // console.log(foundUsers);
//     // const foundUsers = await User.findAll({
//     //   odrer: [['id', 'DESC']],
//     //   limit: 2,
//     //   offset: 2,
//     //   raw: true,
//     // });
//     // console.log(foundUsers);
//     // const foundUsers = await User.findAll({
//     //   odrer: [['firstName', 'DESC']],
//     //   limit: 3,
//     //   offset: 3,
//     //   raw: true,
//     // });
//     // console.log(foundUsers);
//     // const foundUsers = await User.findAll({
//     //   where: { firstName: 'Test', email: 'mail@mail.com' },
//     //   raw: true,
//     // });
//     // console.log(foundUsers);
//     // const foundUsers = await User.findAll({
//     //   where: { [Op.or]: [{ firstName: 'Test' }, { email: 'mai1@mail.com' }] },
//     //   raw: true,
//     // });
//     // const foundUsers = await User.findAll({
//     //   where: { activitiesCount: { [Op.gt]: 0 } },
//     //   raw: true,
//     // });
//     // console.log(foundUsers);
//     // const foundUsers = await User.findAll({
//     //   where: {
//     //     [Op.or]: [{ activitiesCount: 0 }, { isMale: true }],
//     //   },
//     //   raw: true,
//     // });
//     // console.log(foundUsers);
//     // *Task: Вивести чоловіків або у кого кількість активностей != 0
//     // const foundUsers = await User.findAll({
//     //   where: {
//     //     [Op.or]: [{ activitiesCount: { [Op.ne]: 0 } }, { isMale: true }],
//     //   },
//     //   raw: true,
//     // });
//     // console.log(foundUsers);
//     // const foundUsers = await User.findAll({
//     //   attributes: [sequelize.fn('COUNT', sequelize.col('id'))],
//     //   raw: true,
//     // });
//     // console.log(foundUsers);
//     // const foundUsers = await User.findAll({
//     //   attributes: [
//     //     [sequelize.fn('SUM', sequelize.col('activitiesCount')), 'count'],
//     //   ],
//     //   raw: true,
//     // });
//     // console.log(foundUsers);
//     // const foundUsers = await User.findAll({
//     //   attributes: {
//     //     include: [[sequelize.fn('AGE', sequelize.col('birthday')), 'age']],
//     //     exclude: ['updatedAt'],
//     //   },
//     //   raw: true,
//     // });
//     // console.log(foundUsers);
//     // const foundUsers = await User.findAll({
//     //   attributes: {
//     //     include: [
//     //       [sequelize.literal('EXTRACT(YEAR FROM age(birthday))'), 'age'],
//     //     ],
//     //   },
//     //   raw: true,
//     // });
//     // console.log(foundUsers);
//     // const foundUsers = await User.findAll({
//     //   attributes: [
//     //     'isMale',
//     //     sequelize.fn('AVG', sequelize.col('activitiesCount')),
//     //   ],
//     //   group: 'isMale',
//     //   raw: true,
//     // });
//     // console.log(foundUsers);
//     // *GROUP BY + HAVING - group + having -----
//     // відобразити гендери з >=1 кількістю активностей
//     // const foundUsers = await User.findAll({
//     //   attributes: [
//     //     'isMale',
//     //     sequelize.fn('AVG', sequelize.col('activitiesCount')),
//     //   ],
//     //   group: 'isMale',
//     //   having: sequelize.literal('avg("activitiesCount") >= 1'),
//     //   raw: true,
//     // });
//     // console.log(foundUsers);
//     // U - UPDATE - update (як, опції)
//     // const updatedUsers = await User.update(
//     //   { email: 'newmail@mail.com' },
//     //   {
//     //     where: { id: 1 },
//     //     returning: true,
//     //     raw: true,
//     //   }
//     // );
//     // console.log(updatedUsers);

//     const deletedUsersCount = await User.destroy({ where: { id: 3 } });
//     console.log(deletedUsersCount);
//   } catch (err) {
//     console.log(err);
//   }
// })();

// Associations

// (async function () {
//   // const group1 = { title: 'gr1', enteredAt: 2023 };
//   // const group2 = { title: 'gr2', enteredAt: 2024 };
//   // const createdGroup1 = await Group.create(group1); // model instance
//   // const createdGroup2 = await Group.create(group2);
//   // const user1 = {
//   //   firstName: 'Ivoa',
//   //   lastName: 'Ivovycha',
//   //   email: 'mail1@mail.com',
//   //   birthday: '2002-09-21',
//   //   isMale: false,
//   //   activitiesCount: 0,
//   //   groupId: 1,
//   // };
//   // const user2 = {
//   //   firstName: 'Ivoa',
//   //   lastName: 'Ivovycha',
//   //   email: 'mail2@mail.com',
//   //   birthday: '2002-09-21',
//   //   isMale: false,
//   //   activitiesCount: 0,
//   //   groupId: 1,
//   // };
//   // const user3 = {
//   //   firstName: 'Ivoa',
//   //   lastName: 'Ivovycha',
//   //   email: 'mail3@mail.com',
//   //   birthday: '2002-09-21',
//   //   isMale: false,
//   //   activitiesCount: 0,
//   //   groupId: 2,
//   // };
//   // const createdUser1 = await User.create(user1); // model instance
//   // const createdUser2 = await User.create(user2); // model instance
//   // const createdUser3 = await User.create(user3); // model instance

//   // const usersWithGroups = await User.findAll({ include: Group, raw: true });

//   // console.log(usersWithGroups);

//   // const groupsWithUsers = await Group.findAll({ include: User, raw: true });
//   // console.log(groupsWithUsers);

//   // Eager Loading - LEFT JOIN
//   // const usersWithGroups = await User.findAll({ include: Group, raw: true });
//   // console.log(usersWithGroups);

//   // // групу і дописати студентів, якщо вони є в групі
//   // const groupWithUsers = await Group.findAll({
//   //   where: { id: 1 },
//   //   include: {
//   //     model: User,
//   //   },
//   //   raw: true,
//   // });
//   // console.log(groupWithUsers);

//   // Lazy Loading - hasMany? belongsTo, ,,,

//   // const group1 = await Group.findByPk(1);
//   // console.log(group1);

//   // const usersInGr1 = await group1.getUsers({ raw: true });
//   // console.log(usersInGr1);

//   // User.belongsToMany(Group) - getGroup()
//   // const user1 = await User.findByPk(1);

//   // const groupByUser1 = await user1.getGroup({ raw: true });
//   // console.log(groupByUser1);
// })();

// many-to-many

(async function () {
  const subject1 = { title: 'Data Bases', hours: 100 };
  const subject2 = { title: 'Web-programming', hours: 150 };

  const userSubj1 = { userId: 1, subjectId: 1, mark: 100 };
  const userSubj2 = { userId: 1, subjectId: 2, mark: 90 };
  const userSubj3 = { userId: 2, subjectId: 1, mark: 85 };
  const userSubj4 = { userId: 2, subjectId: 2, mark: 88 };

  // await Subject.create(subject1);
  // await Subject.create(subject2);
  // await StunentSubjects.create(userSubj1);
  // await StunentSubjects.create(userSubj2);
  // await StunentSubjects.create(userSubj3);
  // await StunentSubjects.create(userSubj4);

  // Eager Loading
  // const usersWithSubjects = await User.findAll({
  //   include: Subject,
  //   raw: true,
  // });

  // console.log(usersWithSubjects);

  // const usersWithSubjects = await User.findAll({
  //   include: [{ model: Subject }, { model: Group }],
  //   raw: true,
  // });

  // console.log(usersWithSubjects);

  // Lazy Loading

  // const user1 = await User.findByPk(1);
  // const subjOfUser1 = await user1.getSubjects({ raw: true });
  // console.log(subjOfUser1);

  // отримати студентів, які прослухали предмет 1

  // const subj1 = await Subject.findByPk(1);
  // const studentsOfSubject1 = await subj1.getUsers({ raw: true });
  // console.log(studentsOfSubject1);

  // отримати кількість студентів, які прослухали предмет 1

  const subj1 = await Subject.findByPk(1);
  const studentsOfSubject1 = await subj1.countUsers({ raw: true });
  console.log(studentsOfSubject1);
})();
