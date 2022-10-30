export const getPercentage = (
  value: {
    confCase: string
    stateDt: string
    gubun: string
  }[],
) => {
  const manConf = value.find(item => item.gubun === '남성')
  const WomanConf = value.find(item => item.gubun === '여성')

  return (
    (Number(manConf?.confCase) /
      (Number(manConf?.confCase) + Number(WomanConf?.confCase))) *
    100
  )
}
