import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '50s', target: 100 },
    { duration: '240s', target: 100 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
  let res = http.get('https://infograficos.oglobo.globo.com/politica/eleicoes-2022/apuracao-2022-em-tempo-real-consulte-resultado.html');
check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
