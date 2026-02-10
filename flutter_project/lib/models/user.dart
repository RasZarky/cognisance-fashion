class User {
  final String email;
  final String? name;
  final String? phone;
  final String? address;

  User({
    required this.email,
    this.name,
    this.phone,
    this.address,
  });

  User copyWith({
    String? email,
    String? name,
    String? phone,
    String? address,
  }) {
    return User(
      email: email ?? this.email,
      name: name ?? this.name,
      phone: phone ?? this.phone,
      address: address ?? this.address,
    );
  }

  Map<String, dynamic> toJson() => {
    'email': email,
    'name': name,
    'phone': phone,
    'address': address,
  };

  factory User.fromJson(Map<String, dynamic> json) => User(
    email: json['email'] as String,
    name: json['name'] as String?,
    phone: json['phone'] as String?,
    address: json['address'] as String?,
  );
}
