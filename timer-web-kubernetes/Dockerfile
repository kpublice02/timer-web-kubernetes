# 1. Node.js 공식 이미지 사용
FROM node:20

# 2. 작업 디렉토리 생성
WORKDIR /app

# 3. package.json만 먼저 복사
COPY package*.json ./

# 4. 의존성 설치
RUN npm install

# 5. 전체 소스 복사 
COPY . .

# 6. 앱 실행
CMD ["npm", "start"]

# 7. 포트 오픈
EXPOSE 3000
