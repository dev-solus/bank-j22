package com.bank.app.components.account.model;

import com.bank.app.components.user.model.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.bank.app.components.operation.model.*;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name = "accounts")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Account implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String accountNumber;

    @Column
    private Long balance;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", updatable = false, insertable = false)
    // @JsonIgnore
    private User user;

    @Column
    private String status;

    @Column
    private Long user_id;

    @OneToMany(cascade = CascadeType.REMOVE, fetch = FetchType.LAZY, mappedBy = "accountCredit")
    @JsonIgnore
    private Set<Operation> creditoperations;

    @OneToMany(cascade = CascadeType.REMOVE, fetch = FetchType.LAZY, mappedBy = "accountDebit")
    @JsonIgnore
    private Set<Operation> debitoperations;

}
