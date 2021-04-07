import Resume from './Resume'

let a = new Resume('yuyongyu', '男')
a.setBasicInfo(18)
a.setWorkExperience('2012-2014', '中科软')

let b = a.clone()
b.setBasicInfo(19)
b.setWorkExperience('2014-2018', '无讼')

let c = a.clone()
c.setBasicInfo(20)
c.setWorkExperience('2018-至今', '58')

a.display()
b.display()
c.display() 