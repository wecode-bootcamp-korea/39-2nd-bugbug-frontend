export const PROJECT_UPLAOD_LIST = [
  {
    id: 1,
    name: 'title',
    explan: '프로젝트 제목을 입력해주세요.',
    type: 'text',
  },
  {
    id: 2,
    name: 'summary',
    explan: '프로젝트 요약 내용을 입력해주세요.',
    type: 'text',
  },
  {
    id: 3,
    name: 'file',
    explan:
      '썸네일로 등록될 이미지 파일을 선택하신 후 업로드 버튼을 눌러주세요',
    type: 'file',
    file: null,
  },
  {
    id: 4,
    name: 'category',
    explan: '프로젝트 카테고리를 선택하세요.',
    type: 'radio',
    choice: [
      { id: 1, name: 'tech', title: '테크 가전' },
      { id: 2, name: 'sundries', title: '잡화' },
    ],
  },
  {
    id: 5,
    name: 'story',
    explan: '프로젝트 스토리를 입력해주세요.',
    type: 'text',
  },
  {
    id: 6,
    name: 'price',
    explan: '목표 금액을 입력해주세요 (최대 1억)',
    type: 'number',
  },
  {
    id: 7,
    name: 'gift',
    explan: '후원 신청 금액을 입력해주세요.',
    type: 'number',
  },
  {
    id: 8,
    name: 'gift_information',
    explan: '후원 설명을 작성해주세요',
    type: 'text',
  },
  {
    id: 9,
    name: 'date_start',
    explan: '프로젝트 시작일을 정해주세요.',
    type: 'date',
  },
  {
    id: 10,
    name: 'date_end',
    explan: '프로젝트 종료일을 정해주세요.',
    type: 'date',
  },
];
