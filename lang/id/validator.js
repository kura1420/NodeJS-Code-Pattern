const _ = require('lodash');

const message = {
  accepted: '__attribute__ harus diterima.',
  accepted_if: '__attribute__ harus diterima ketika :other berisi :value.',
  active_url: '__attribute__ bukan URL yang valid.',
  after: '__attribute__ harus berisi tanggal setelah :date.',
  after_or_equal: '__attribute__ harus berisi tanggal setelah atau sama dengan :date.',
  alpha: '__attribute__ hanya boleh berisi huruf.',
  alpha_dash: '__attribute__ hanya boleh berisi huruf, angka, strip, dan garis bawah.',
  alpha_num: '__attribute__ hanya boleh berisi huruf dan angka.',
  array: '__attribute__ harus berisi sebuah array.',
  attached: '__attribute__ sudah dilampirkan.',
  before: '__attribute__ harus berisi tanggal sebelum :date.',
  before_or_equal: '__attribute__ harus berisi tanggal sebelum atau sama dengan :date.',
  // 'between'              : {
  //     'array'   : '__attribute__ harus memiliki :min sampai :max anggota.',
  //     'file'    : '__attribute__ harus berukuran antara :min sampai :max kilobita.',
  //     'numeric' : '__attribute__ harus bernilai antara :min sampai :max.',
  //     'string'  : '__attribute__ harus berisi antara :min sampai :max karakter.',
  // },
  boolean: '__attribute__ harus bernilai true atau false',
  confirmed: 'Konfirmasi __attribute__ tidak cocok.',
  current_password: 'Kata sandi salah.',
  date: '__attribute__ bukan tanggal yang valid.',
  date_equals: '__attribute__ harus berisi tanggal yang sama dengan :date.',
  date_format: '__attribute__ tidak cocok dengan format :format.',
  declined: 'The __attribute__ must be declined.',
  declined_if: 'The __attribute__ must be declined when :other is :value.',
  different: '__attribute__ dan :other harus berbeda.',
  digits: '__attribute__ harus terdiri dari :digits angka.',
  digits_between: '__attribute__ harus terdiri dari :min sampai :max angka.',
  dimensions: '__attribute__ tidak memiliki dimensi gambar yang valid.',
  distinct: '__attribute__ memiliki nilai yang duplikat.',
  email: '__attribute__ harus berupa alamat surel yang valid.',
  ends_with: '__attribute__ harus diakhiri salah satu dari berikut: :values',
  exists: '__attribute__ yang dipilih tidak valid.',
  file: '__attribute__ harus berupa sebuah berkas.',
  filled: '__attribute__ harus memiliki nilai.',
  // 'gt'                   : {
  //     'array'   : '__attribute__ harus memiliki lebih dari :value anggota.',
  //     'file'    : '__attribute__ harus berukuran lebih besar dari :value kilobita.',
  //     'numeric' : '__attribute__ harus bernilai lebih besar dari :value.',
  //     'string'  : '__attribute__ harus berisi lebih besar dari :value karakter.',
  // },
  // 'gte'                  : {
  //     'array'   : '__attribute__ harus terdiri dari :value anggota atau lebih.',
  // eslint-disable-next-line max-len
  //     'file'    : '__attribute__ harus berukuran lebih besar dari atau sama dengan :value kilobita.',
  //     'numeric' : '__attribute__ harus bernilai lebih besar dari atau sama dengan :value.',
  // eslint-disable-next-line max-len
  //     'string'  : '__attribute__ harus berisi lebih besar dari atau sama dengan :value karakter.',
  // },
  image: '__attribute__ harus berupa gambar.',
  in: '__attribute__ yang dipilih tidak valid.',
  in_array: '__attribute__ tidak ada di dalam :other.',
  integer: '__attribute__ harus berupa bilangan bulat.',
  ip: '__attribute__ harus berupa alamat IP yang valid.',
  ipv4: '__attribute__ harus berupa alamat IPv4 yang valid.',
  ipv6: '__attribute__ harus berupa alamat IPv6 yang valid.',
  json: '__attribute__ harus berupa JSON string yang valid.',
  // 'lt'                   : {
  //     'array'   : '__attribute__ harus memiliki kurang dari :value anggota.',
  //     'file'    : '__attribute__ harus berukuran kurang dari :value kilobita.',
  //     'numeric' : '__attribute__ harus bernilai kurang dari :value.',
  //     'string'  : '__attribute__ harus berisi kurang dari :value karakter.',
  // },
  // 'lte'                  : {
  //     'array'   : '__attribute__ harus tidak lebih dari :value anggota.',
  //     'file'    : '__attribute__ harus berukuran kurang dari atau sama dengan :value kilobita.',
  //     'numeric' : '__attribute__ harus bernilai kurang dari atau sama dengan :value.',
  //     'string'  : '__attribute__ harus berisi kurang dari atau sama dengan :value karakter.',
  // },
  // 'max'                  : {
  //     'array'   : '__attribute__ maksimal terdiri dari :max anggota.',
  //     'file'    : '__attribute__ maksimal berukuran :max kilobita.',
  //     'numeric' : '__attribute__ maksimal bernilai :max.',
  //     'string'  : '__attribute__ maksimal berisi :max karakter.',
  // },
  mimes: '__attribute__ harus berupa berkas berjenis: :values.',
  mimetypes: '__attribute__ harus berupa berkas berjenis: :values.',
  // 'min'                  : {
  //     'array'   : '__attribute__ minimal terdiri dari :min anggota.',
  //     'file'    : '__attribute__ minimal berukuran :min kilobita.',
  //     'numeric' : '__attribute__ minimal bernilai :min.',
  //     'string'  : '__attribute__ minimal berisi :min karakter.',
  // },
  multiple_of: '__attribute__ harus merupakan kelipatan dari :value',
  not_in: '__attribute__ yang dipilih tidak valid.',
  not_regex: 'Format __attribute__ tidak valid.',
  numeric: '__attribute__ harus berupa angka.',
  password: 'Kata sandi salah.',
  present: '__attribute__ wajib ada.',
  prohibited: '__attribute__ tidak boleh ada.',
  prohibited_if: '__attribute__ tidak boleh ada bila :other adalah :value.',
  prohibited_unless: '__attribute__ tidak boleh ada kecuali :other memiliki nilai :values.',
  prohibits: '__attribute__ melarang isian :other untuk ditampilkan.',
  regex: 'Format __attribute__ tidak valid.',
  relatable: '__attribute__ ini mungkin tidak berasosiasi dengan sumber ini.',
  required: '__attribute__ wajib diisi.',
  required_if: '__attribute__ wajib diisi bila :other adalah :value.',
  required_unless: '__attribute__ wajib diisi kecuali :other memiliki nilai :values.',
  required_with: '__attribute__ wajib diisi bila terdapat :values.',
  required_with_all: '__attribute__ wajib diisi bila terdapat :values.',
  required_without: '__attribute__ wajib diisi bila tidak terdapat :values.',
  required_without_all: '__attribute__ wajib diisi bila sama sekali tidak terdapat :values.',
  same: '__attribute__ dan :other harus sama.',
  // 'size'                 : {
  //     'array'   : '__attribute__ harus mengandung :size anggota.',
  //     'file'    : '__attribute__ harus berukuran :size kilobyte.',
  //     'numeric' : '__attribute__ harus berukuran :size.',
  //     'string'  : '__attribute__ harus berukuran :size karakter.',
  // },
  starts_with: '__attribute__ harus diawali salah satu dari berikut: :values',
  string: '__attribute__ harus berupa string.',
  timezone: '__attribute__ harus berisi zona waktu yang valid.',
  unique: '__attribute__ sudah ada sebelumnya.',
  uploaded: '__attribute__ gagal diunggah.',
  url: 'Format __attribute__ tidak valid.',
  uuid: '__attribute__ harus merupakan UUID yang valid.',
  // 'custom'               : {
  //     'attribute-name' : {
  //         'rule-name' : 'custom-message',
  //     },
  // },
};

const searchMessage = (rule, field) => {
  const result = _.filter(message, (value, key) => key === rule);

  const msg = result[0] ?? 'Message Validation No Found';

  return msg.replace('__attribute__', field);
};

module.exports = searchMessage;
