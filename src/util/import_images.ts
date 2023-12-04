import { ImgCardProps } from "../content/media";
// import sm_1 from "../assets/media/webp_small/01.webp";
// import bg_1 from "../assets/media/webp_big/01.webp";

// const promises: [Promise<string[]>, Promise<string[]>] = [Promise.resolve([]), Promise.resolve([])];

async function loadImagePaths(
  basePath: string,
  count: number
): Promise<string[]> {
  const padNumber = (num: number) => (num < 10 ? `0${num}` : `${num}`);
  const promises = Array.from({ length: count }, (_, i) =>
    import(`${basePath}/${padNumber(i + 1)}.webp`).then(
      (module) => module.default as string
    )
  );
  return Promise.all(promises);
}

const smallImagesPromise = loadImagePaths("../assets/media/webp_small", 21);
const bigImagesPromise = loadImagePaths("../assets/media/webp_big", 21);

const images = await Promise.all([smallImagesPromise, bigImagesPromise]);
const hashes = [
  "L8AARO-g-n%M02^u-;%3~qRO$$t9",
  "LHA19fxCH;kZk[ngiabd?wxZZ}t7",
  "L69Qgg?wQ,%MH=%2?HM_?b$gaIWW",
  "LFBzLe.AV;9F01r:R8r{xToI%Lxt",
  "LHCitKB]}^T80c=iI-xJICR8VtM}",
  "LQDv{D_NMvIU4TIAoy%L%gx[xZt7",
  "L7BznZIS00$-Mti^Z*~q~D-;yB8{",
  "L47TFFtRgNj]Au}[-V%1cE=|^Qs:",
  "L8BoQ~%2Ipxt~Bbb$*=|NHIp^j-V",
  "L59O_P~BK$o|^Q?H-pXS}ZxbxuSh",
  "LB9@P0?a8wH?*0x]QmMc_4%MIAMw",
  "L3711a$*?u?H}t^j-p-pyW-B=dxu",
  "L79#%C-V2s$*3Uxt}Fbb^5$*tQsp",
  "L35OKd,mmj.T~X=s$K-=MH=}?cZ~",
  "LO9Q?jI8IV%L_4MwM|%1?FRoRixu",
  "L57U9uMw?G~W~W$*%2%M00^+s:9Z",
  "L8B{x|~AE2V@?bxuoLsl58IqxZof",
  "LD9Gz9s:IAxt~Ws:IUxuxaxZV@xu",
  "LD9QQ^MxD%Rj~WsmIUj[t7xtjEof",
  "L78:;g~B9sNc9Gr=xtkW~V%2%2s;",
  "L38zWA=|fg^k00^+_3-A=LV@E0%2",
];

export default Array.from<Omit<ImgCardProps, "onClick">[]>({ length: 20 }).map(
  (_, i) => ({
    src: images[1][i],
    card: images[0][i],
    alt: `Print screen - ${i + 1}`,
    hash: hashes[i],
  })
);
